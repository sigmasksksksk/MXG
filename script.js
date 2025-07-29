// Ritual placeholder: future modal, hash checker, glyph warning engine
document.addEventListener('DOMContentLoaded', () => {
  console.log("🔮 MMG Oracle Ritual Panel Loaded");

  // Example future: splash warning before download
  const downloadLinks = document.querySelectorAll('.artifact-table a');

  downloadLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const toolName = link.innerText;
      console.log(`✨ Download initiated: ${toolName}`);
      // You could show a modal here if needed
    });
  });
});
