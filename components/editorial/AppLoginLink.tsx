import { APP_LIVE, APP_URL, STUDIO_PREVIEW_URL } from "@/lib/site";

export function AppLoginLink({
  className,
}: {
  className?: string;
}) {
  const href = APP_LIVE ? APP_URL : STUDIO_PREVIEW_URL;
  const name = APP_LIVE ? "Account" : "Demo User";
  const workspace = APP_LIVE ? "Caplist Studio" : "Coastview Property Media";

  return (
    <a
      className={["profile-signin", className].filter(Boolean).join(" ")}
      href={href}
      aria-label={APP_LIVE ? "Open Caplist Studio account" : "Open Studio Preview as Demo User"}
      title={APP_LIVE ? "Open Caplist Studio" : "Open Studio Preview"}
    >
      <span className="profile-avatar" aria-hidden="true">
        {APP_LIVE ? "CS" : "DU"}
      </span>
      <span className="profile-label">
        <strong>{name}</strong>
        <span>{workspace}</span>
      </span>
    </a>
  );
}
