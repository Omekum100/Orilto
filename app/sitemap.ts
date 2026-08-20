import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/case-studies";
import { site } from "@/content/site-copy";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/work", "/about", "/contact", "/privacy", "/terms"];
  return [
    ...routes.map((route) => ({ url: `${site.url}${route}`, lastModified: new Date() })),
    ...caseStudies.map((study) => ({ url: `${site.url}/work/${study.slug}`, lastModified: new Date() }))
  ];
}
