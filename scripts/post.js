const ws = new WebSocket('ws://localhost:3000');

function handleFormSubmit(event) {
    event.preventDefault();

    const data = new FormData(event.target);

    const formJSON = Object.fromEntries(data.entries());

    formJSON.amenities = data.getAll('amenities');

    // for multi-selects, we need special handling
    formJSON.tags = data.getAll('tags');

    ws.send(JSON.stringify(formJSON, null, 2));

    window.location.href = '/index.html';
  }

  function handleFormPartChange() {
    // Will hide part1 of the form and unhide part2
    const part1 = document.querySelector('#part1');
    const part2 = document.querySelector('#part2');
    part1.classList.add('hidden');
    part2.classList.remove('hidden');
  }

  ws.onmessage = function (event) {
    console.log(event.data);
  };
  
  const form = document.querySelector('#post-popup');
  form.addEventListener('submit', handleFormSubmit);