const ws = new WebSocket('ws://localhost:3000');

function handleFormSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    const formJSON = Object.fromEntries(data.entries());
  
    // for multi-selects, we need special handling
    // formJSON.snacks = data.getAll('snacks');

    ws.send(JSON.stringify(formJSON, null, 2));
  }

  ws.onmessage = function (event) {
    console.log(event.data);
  };
  
  const form = document.querySelector('#myForm');
  form.addEventListener('submit', handleFormSubmit);
  