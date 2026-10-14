import { LogIn } from "lucide-react";
import { STUDIO_LOGIN_URL } from "@/lib/site";

export function AppLoginLink({
  className,
}: {
  className?: string;
}) {
  return (
    <a
      className={["client-login-link", className].filter(Boolean).join(" ")}
      href={STUDIO_LOGIN_URL}
      aria-label="Open Caplist Studio client login"
      title="Client login"
    >
      <span className="client-login-icon" aria-hidden="true">
        <LogIn size={19} strokeWidth={2} />
      </span>
      <span className="client-login-label">Client login</span>
    </a>
  );
}
