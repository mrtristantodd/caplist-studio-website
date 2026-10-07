import { APP_URL } from "@/lib/site";

export function AppSignupLink({
  className,
  children = "Try CAPLIST",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a className={className} href={`${APP_URL}/signup`}>
      {children}
    </a>
  );
}
