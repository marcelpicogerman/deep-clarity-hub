import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://deeplifeevolutionhub.de";

  return [
    { url: baseUrl, lastModified: new Date("2026-03-17"), changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/ueber-mich`, lastModified: new Date("2026-03-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/angebote`, lastModified: new Date("2026-03-17"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/circle`, lastModified: new Date("2026-03-17"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/kontakt`, lastModified: new Date("2026-03-17"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/impressum`, lastModified: new Date("2026-03-17"), changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/datenschutz`, lastModified: new Date("2026-03-17"), changeFrequency: "yearly", priority: 0.3 },
  ];
}
