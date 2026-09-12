import { redirect } from "next/navigation";
export default async function Pilot({
  searchParams,
}: {
  searchParams: Promise<{ tier?: string }>;
}) {
  const { tier } = await searchParams;
  redirect(
    `/early-access${tier && ["Essential", "Pro", "Studio"].includes(tier) ? `?tier=${tier}` : ""}`,
  );
}
