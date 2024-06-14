// fetch-html.js
fetch('https://react-orpin-ten.vercel.app/')
  .then(response => response.text())
  .then(htmlContent => {
    const targetElement = document.getElementById('target-element');
    if (targetElement) {
      targetElement.innerHTML = htmlContent;
    }
  })
  .catch(error => console.error('Error fetching HTML:', error));
