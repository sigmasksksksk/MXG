// Visit counter using localStorage (demo only)
document.addEventListener('DOMContentLoaded', () => {
  const countElement = document.getElementById('visit-count');
  let count = parseInt(localStorage.getItem('visitCount') || '0');
  count += 1;
  localStorage.setItem('visitCount', count);
  countElement.textContent = count;
});

function downloadFile(url) {
  const a = document.createElement('a');
  a.href = url;
  a.download = '';
  a.style.display = 'none';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
}
