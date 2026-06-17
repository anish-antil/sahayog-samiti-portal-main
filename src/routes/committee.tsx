import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/committee")({
  beforeLoad: () => {
    throw redirect({ to: "/about" });
  },
  head: () => ({
    meta: [
      { title: "About — Sah Sahayog Sewa Samiti" },
      {
        name: "description",
        content: "Learn about Sah Sahayog Sewa Samiti and its managing committee.",
      },
    ],
  }),
  component: () => null,
});
