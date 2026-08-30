import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";

export default function WhatShouldWeBuildPage() {
  const filePath = path.join(process.cwd(), "content", "readme.md");
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="max-w-3xl mx-auto px-6 py-12">
      <article className="prose prose-invert prose-img:mx-auto">
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </main>
  );
}
