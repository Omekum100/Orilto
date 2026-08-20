import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Orilto",
    short_name: "Orilto",
    description: "Product engineering and responsible AI partner.",
    start_url: "/",
    display: "standalone",
    background_color: "#F7F4EE",
    theme_color: "#172A3A"
  };
}
