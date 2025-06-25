"use client";

import { useEffect } from "react";

export default function WidgetLoader() {
  useEffect(() => {
    // Create container div
    const widgetDiv = document.createElement("div");
    widgetDiv.className = "npf_wgts";
    widgetDiv.setAttribute("data-height", "400px");
    widgetDiv.setAttribute("data-w", "751ebd04b134b218af939431fd16008b");

    // Append to DOM
    document.body.appendChild(widgetDiv);

    // Load script
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = "https://widgets.in8.nopaperforms.com/emwgts.js";
    document.body.appendChild(script);

    // Cleanup
    return () => {
      document.body.removeChild(widgetDiv);
      document.body.removeChild(script);
    };
  }, []);

  return null;
}
