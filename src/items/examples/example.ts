fetch('https://nest-server-kate4ka.herokuapp.com/items')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

fetch('https://nest-server-kate4ka.herokuapp.com/items', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'http://localhost:8080',
  },
  body: JSON.stringify({
    name: 'trinket',
    description: 'whatever',
    price: 42.0,
  }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
