import fs from "fs";
import path from "path";
import ReactMarkdown from "react-markdown";
import GiscusComments from "./GiscusComments";
import "./discussion.css";

export default function DiscussionPage() {
  const filePath = path.join(process.cwd(), "content", "readme.md");
  const content = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="discussion-page">
      <div className="discussion-header">
        <img src="/open_reposit_animated.svg" alt="Open Reposit logo" />
        <h1>Open Reposit</h1>
      </div>

      <article className="discussion-content">
        <ReactMarkdown
          components={{
            img: () => null, // logo already shown in header, skip duplicate from markdown body
          }}
        >
          {content}
        </ReactMarkdown>
      </article>

      <div className="discussion-comments">
        <h2>Discussion</h2>
        <GiscusComments />
      </div>
    </main>
  );
}
