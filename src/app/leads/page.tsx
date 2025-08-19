"use client";
import { useEffect, useState } from "react";

type Lead = {
  id: string;
  fullName?: string | null;
  phone?: string | null;
  email?: string | null;
  market?: string | null;
  type?: string | null;
  subType?: string | null;
  status?: string | null;
  notes?: string | null;
};

export default function LeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/leads")
      .then((r) => (r.ok ? r.json() : Promise.reject(r.statusText)))
      .then(setLeads)
      .catch(() => setError("Load failed"));
  }, []);

  return (
    <main>
      <h1>Leads</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {leads.map((l) => (
          <li key={l.id}>{l.fullName ?? "(no name)"} — {l.email ?? ""}</li>
        ))}
      </ul>
    </main>
  );
}
