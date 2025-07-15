import React from "react";

function Music() {
  return (
    <div>
      <iframe
        style={{ borderRadius: 24 }}
        src="https://untitled.stream/embed/hFXR1CmuLgwh"
        width="100%"
        height={200}
        allowFullScreen={false}
        allow="picture-in-picture"
        // frameBorder={0}
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default Music;
