import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const session = await auth();
  if (!session) redirect("/auth/login");

  return (
    <main>
      <h1>Signed in! 🎉</h1>
      <p>User: {session.user?.name ?? session.user?.email}</p>
      <p><a href="/api/auth/signout?callbackUrl=/">Sign out</a></p>
      <p><a href="/leads">Leads</a></p>
    </main>
  );
}
