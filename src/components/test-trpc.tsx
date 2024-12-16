"use client";

import { trpc } from "@/lib/trpc/client";

export function TestTRPC() {
  const hello = trpc.example.hello.useQuery({ text: "tRPC" });
  const allItems = trpc.example.getAll.useQuery();

  if (!hello.data || !allItems.data) return <div>Loading...</div>;

  return (
    <div className="space-y-4">
      <div className="p-4 bg-card rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">Hello Query Test</h2>
        <p>{hello.data.greeting}</p>
      </div>

      <div className="p-4 bg-card rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-2">GetAll Query Test</h2>
        <ul className="space-y-2">
          {allItems.data.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
