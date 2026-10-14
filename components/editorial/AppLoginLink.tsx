import { APP_LIVE, APP_URL } from "@/lib/site";

export function AppLoginLink({
  className,
  children = "Studio Preview",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <a className={className} href={APP_LIVE ? APP_URL : "/studio"}>
      {children}
    </a>
  );
}
