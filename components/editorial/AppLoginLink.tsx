import { APP_URL } from "@/lib/site";

export function AppLoginLink({
  className,
  children = "Studio login",
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
