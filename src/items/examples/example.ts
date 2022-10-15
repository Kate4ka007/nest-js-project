fetch('http://localhost:3000/items')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

fetch('http://localhost:3000/items', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
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
