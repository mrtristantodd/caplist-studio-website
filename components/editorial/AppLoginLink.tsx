import { APP_URL } from "@/lib/site";

export function AppLoginLink({
  className,
  children = "Log in",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a className={className} href={`${APP_URL}/login`}>
      {children}
    </a>
  );
}
