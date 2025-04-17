import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { YoutubeVideos } from "./screens/YoutubeVideos";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <YoutubeVideos />
  </StrictMode>,
);
