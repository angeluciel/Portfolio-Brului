// cypress/support/font-loader.ts
export function ensureFontsLoaded(): Promise<void[]> {
  // Define all the Google Fonts URLs from your CSS
  const fontUrls = [
    "https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap",
    "https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap",
    "https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap",
    "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap",
    "https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap",
    "https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap",
  ];

  // Create promises for each font loading
  const fontPromises = fontUrls.map((url) => {
    return new Promise<void>((resolve) => {
      // Check if this font CSS is already loaded
      const existingLink = document.querySelector(`link[href="${url}"]`);
      if (existingLink) {
        resolve();
        return;
      }

      // Create and append the font link
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = url;

      // Resolve when the stylesheet loads
      link.onload = () => resolve();
      link.onerror = () => resolve(); // Resolve even on error to not block tests

      document.head.appendChild(link);
    });
  });

  return Promise.all(fontPromises);
}
