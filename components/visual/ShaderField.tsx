"use client";

import { useEffect, useRef } from "react";

const vertexShaderSource = `#version 300 es
in vec2 a_position;
out vec2 v_uv;
void main() {
  v_uv = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

const fragmentShaderSource = `#version 300 es
precision highp float;

uniform vec2 u_resolution;
uniform vec2 u_pointer;
uniform float u_time;
uniform float u_scroll;
in vec2 v_uv;
out vec4 outColor;

float hash21(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash21(i);
  float b = hash21(i + vec2(1.0, 0.0));
  float c = hash21(i + vec2(0.0, 1.0));
  float d = hash21(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

float fbm(vec2 p) {
  float value = 0.0;
  float amplitude = 0.5;
  for (int i = 0; i < 4; i++) {
    value += amplitude * noise(p);
    p = p * 2.03 + 17.17;
    amplitude *= 0.5;
  }
  return value;
}

void main() {
  vec2 uv = v_uv;
  vec2 centered = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
  float t = u_time * 0.075;

  vec2 drift = vec2(t * 0.17, -t * 0.11 + u_scroll * 0.00009);
  float field = fbm(centered * 1.55 + drift);
  float detail = fbm(centered * 3.8 - drift * 0.65);
  field = field * 0.72 + detail * 0.28;

  vec2 pointer = u_pointer - uv;
  pointer.x *= u_resolution.x / max(u_resolution.y, 1.0);
  float pointerGlow = exp(-dot(pointer, pointer) * 5.2);

  vec2 gridUv = uv * vec2(u_resolution.x / 88.0, u_resolution.y / 88.0);
  vec2 grid = abs(fract(gridUv - 0.5) - 0.5) / fwidth(gridUv);
  float gridLine = 1.0 - min(min(grid.x, grid.y), 1.0);
  gridLine *= 0.035;

  float vignette = smoothstep(1.15, 0.22, length(centered * vec2(0.82, 1.0)));
  float blueVeil = smoothstep(0.52, 0.88, field + pointerGlow * 0.25) * 0.10;
  float grain = (hash21(gl_FragCoord.xy + fract(u_time) * 97.0) - 0.5) * 0.018;

  vec3 base = vec3(0.031, 0.051, 0.063);
  vec3 graphite = vec3(0.050, 0.075, 0.092);
  vec3 blue = vec3(0.184, 0.482, 1.0);
  vec3 color = mix(base, graphite, field * 0.32);
  color += blue * (blueVeil + pointerGlow * 0.032);
  color += vec3(gridLine * vignette);
  color += grain;
  color *= 0.74 + vignette * 0.26;

  outColor = vec4(color, 1.0);
}`;

function compile(gl: WebGL2RenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn("Caplist background shader compilation failed:", gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export function ShaderField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl2", {
      alpha: false,
      antialias: false,
      powerPreference: "high-performance",
      preserveDrawingBuffer: false,
    });
    if (!gl) {
      canvas.dataset.fallback = "true";
      return;
    }

    const vertex = compile(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);
    if (!vertex || !fragment) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn("Caplist background shader link failed:", gl.getProgramInfoLog(program));
      gl.deleteProgram(program);
      return;
    }

    const position = gl.getAttribLocation(program, "a_position");
    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(position);
    gl.vertexAttribPointer(position, 2, gl.FLOAT, false, 0, 0);

    const resolution = gl.getUniformLocation(program, "u_resolution");
    const pointerUniform = gl.getUniformLocation(program, "u_pointer");
    const timeUniform = gl.getUniformLocation(program, "u_time");
    const scrollUniform = gl.getUniformLocation(program, "u_scroll");

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const pointer = { x: 0.72, y: 0.28 };
    let width = 0;
    let height = 0;
    let animationFrame = 0;
    let visible = !document.hidden;
    let lastFrame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, coarsePointer ? 1.15 : 1.5);
      const nextWidth = Math.max(1, Math.floor(window.innerWidth * dpr));
      const nextHeight = Math.max(1, Math.floor(window.innerHeight * dpr));
      if (nextWidth !== width || nextHeight !== height) {
        width = nextWidth;
        height = nextHeight;
        canvas.width = width;
        canvas.height = height;
        canvas.style.width = `${window.innerWidth}px`;
        canvas.style.height = `${window.innerHeight}px`;
        gl.viewport(0, 0, width, height);
      }
    };

    const onPointer = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;
      pointer.x += (event.clientX / Math.max(window.innerWidth, 1) - pointer.x) * 0.52;
      pointer.y += (1 - event.clientY / Math.max(window.innerHeight, 1) - pointer.y) * 0.52;
    };

    const render = (now: number) => {
      if (!visible) return;
      const minFrameInterval = coarsePointer ? 1000 / 30 : 0;
      if (!media.matches && minFrameInterval > 0 && now - lastFrame < minFrameInterval) {
        animationFrame = requestAnimationFrame(render);
        return;
      }
      lastFrame = now;
      resize();
      gl.useProgram(program);
      gl.uniform2f(resolution, width, height);
      gl.uniform2f(pointerUniform, pointer.x, pointer.y);
      gl.uniform1f(timeUniform, media.matches ? 0 : now * 0.001);
      gl.uniform1f(scrollUniform, window.scrollY);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!media.matches) animationFrame = requestAnimationFrame(render);
    };

    const onVisibility = () => {
      visible = !document.hidden;
      cancelAnimationFrame(animationFrame);
      if (visible) animationFrame = requestAnimationFrame(render);
    };

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    resize();
    animationFrame = requestAnimationFrame(render);

    const onMotionPreference = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(render);
    };
    media.addEventListener?.("change", onMotionPreference);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("visibilitychange", onVisibility);
      media.removeEventListener?.("change", onMotionPreference);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen opacity-85 [mask-image:linear-gradient(to_bottom,black_0%,black_74%,transparent_100%)] data-[fallback=true]:hidden"
    />
  );
}
