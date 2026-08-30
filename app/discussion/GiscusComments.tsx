"use client";

import { useEffect, useRef } from "react";

export default function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.setAttribute("data-repo", "OpenReposit/Open-Reposit");
    script.setAttribute("data-repo-id", "R_kgDOUJHQOQ");
    script.setAttribute("data-category", "YourActualCategoryName");
    script.setAttribute("data-category-id", "YourActualCategoryId");
    script.setAttribute("data-mapping", "pathname");
    script.setAttribute("data-strict", "0");
    script.setAttribute("data-reactions-enabled", "1");
    script.setAttribute("data-emit-metadata", "0");
    script.setAttribute("data-input-position", "bottom");
    script.setAttribute("data-theme", "dark");
    script.setAttribute("data-lang", "en");
    script.crossOrigin = "anonymous";
    script.async = true;

    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} />;
}
