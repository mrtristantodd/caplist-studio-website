import { APP_LIVE, APP_URL } from "@/lib/site";
import { PreviewButton } from "./PreviewButton";

export function AppLoginLink({
  className,
  children = "Log in",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  if (APP_LIVE) {
    return (
      <a className={className} href={APP_URL}>
        {children}
      </a>
    );
  }

  return (
    <PreviewButton notice="login" className={className}>
      {children}
    </PreviewButton>
  );
}
