const urlParams = new URLSearchParams(window.location.search);
const searchQuery = urlParams.get('q');

if (searchQuery) {
  const outerDiv = document.querySelector('.crJ18e');

  if (outerDiv) {
    const innerDiv = outerDiv.querySelector('[role="list"]');

    if (innerDiv) {
      const newDiv = document.createElement('div');
      newDiv.setAttribute('role', 'listitem');
      newDiv.setAttribute('data-hveid', 'CBYQAA');
      newDiv.setAttribute('data-ved', '2ahUKEwj1n-q81qOHAsXwCqvEDHahCC8MqQJAB6BAgBEAA');

      const newLink = document.createElement('a');
      newLink.href = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(searchQuery)}`;
      newLink.className = 'LatpMc nPDzT T3FoJb';
      newLink.setAttribute('role', 'link');
      newLink.setAttribute('data-hveid', 'CBYQAA');
      newLink.setAttribute('data-ved', '2ahUKEwj1n-q81qOHAsXwCqvEDHahCC8MqQJegQIFhAB');

      const innerLinkDiv = document.createElement('div');
      innerLinkDiv.className = 'YmvwI';
      innerLinkDiv.textContent = 'Maps';
      newLink.appendChild(innerLinkDiv);

      newDiv.appendChild(newLink);

      innerDiv.appendChild(newDiv);
    }
  }
}
