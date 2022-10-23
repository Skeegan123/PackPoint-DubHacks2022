const ws = new WebSocket('ws://localhost:3000');

function handleFormSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());

    formJSON.amenities = data.getAll('amenities');
  
    // for multi-selects, we need special handling
    formJSON.tags = data.getAll('tags');

    ws.send(JSON.stringify(formJSON, null, 2));
  }

  ws.onmessage = function (event) {
    console.log(event.data);
  };
  
  const form = document.querySelector('#post-popup');
  form.addEventListener('submit', handleFormSubmit);
  