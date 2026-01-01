import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://thedigitalhassaan.com";
  
  const routes = [
    "",
    "/about",
    "/services",
    "/contact",
    "/skills",
    "/case-studies",
    "/projects/plus-accountants",
    "/projects/dua-construction",
    "/projects/abh-systems",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
