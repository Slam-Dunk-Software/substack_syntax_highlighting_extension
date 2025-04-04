(function () {
  function getLuminance(rgb) {
    const rgbValues = rgb.match(/\d+/g);
    if (!rgbValues || rgbValues.length < 3) return 0.5;
    const [r, g, b] = rgbValues.map(Number);
    const luminance =
      0.2126 * (r / 255) + 0.7152 * (g / 255) + 0.0722 * (b / 255);
    return luminance;
  }

  function adjustBrightness(rgb, factor) {
    if (!rgb || !rgb.includes("rgb")) return rgb;
    const rgbValues = rgb.replace(/[^0-9,]/g, "").split(",");
    if (!rgbValues || rgbValues.length < 3) return rgb;
    const [r, g, b] = rgbValues.map(Number);
    const adjust = (value) => Math.min(Math.max(0, value * factor), 255);
    return `rgb(${adjust(r)}, ${adjust(g)}, ${adjust(b)})`;
  }

  function applyStylesFromFirstLink() {
    const newsletter = document.querySelector(
      "article.newsletter-post div.available-content"
    );
    if (newsletter) {
      const firstLink = newsletter.querySelector("a");
      if (firstLink) {
        const linkColor = getComputedStyle(firstLink).color;

        // NOTE: Depending on which method you use to access a newsletter,
        //       the HTML and CSS will be different. Right now I'm accounting for
        //       two known scenarios but there are probably more.
        let postViewer =
          document.querySelector("div.single-post-container") ||
          document.querySelector("div#post-viewer");
        if (postViewer) {
          const articleBgColor = getComputedStyle(postViewer).backgroundColor;
          const luminance = getLuminance(articleBgColor);
          let codeBgColor =
            luminance < 0.5
              ? adjustBrightness(articleBgColor, 1.05)
              : adjustBrightness(articleBgColor, 0.95);

          const style = document.createElement("style");
          style.innerHTML = `
            code:not(pre code) {
              background-color: ${codeBgColor} !important;
              padding: 0.2em 0.4em;
              border-radius: 4px;
              font-family: monospace;
              font-size: 0.95em;
              border: 1px solid ${linkColor};
            }
          `;
          document.head.appendChild(style);
        }
      }
    }
  }

  applyStylesFromFirstLink();
})();
