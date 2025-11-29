// src/components/SEO.tsx
import { useEffect } from "react";

interface SEOProps {
  title: string;
  description?: string;
  image?: string; // opcjonalnie inne zdjęcie niż domyślne
}

export default function SEO({ title, description, image }: SEOProps) {
  useEffect(() => {
    // Tytuł w przeglądarce
    document.title = title;

    // Meta description (widoczne w Google)
    let metaDesc = document.querySelector("meta[name='description']");
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description || "Paweł Rycerz – IoT Developer & Full-Stack Enthusiast | Kraków, Poland");

    // Open Graph / Facebook
    const ogTags = [
      { property: "og:title", content: title },
      { property: "og:description", content: description || "IoT Developer | Embedded C++ | React + TypeScript | Kraków, Poland" },
      { property: "og:image", content: image || "https://pawelrycerz.pl/assets/profile.png" },
      { property: "og:url", content: window.location.href },
      { property: "og:type", content: "website" },
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property='${property}']`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    });

    // Twitter
    let twitterCard = document.querySelector("meta[name='twitter:card']");
    if (!twitterCard) {
      twitterCard = document.createElement("meta");
      twitterCard.setAttribute("name", "twitter:card");
      document.head.appendChild(twitterCard);
    }
    twitterCard.setAttribute("content", "summary_large_image");

  }, [title, description, image]);

  return null;
}