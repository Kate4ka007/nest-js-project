fetch('https://nest-server-kate4ka.herokuapp.com/items')
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

fetch('https://nest-server-kate4ka.herokuapp.com/items', {
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

fetch('https://nest-server-kate4ka.herokuapp.com/delete', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ name: 'Din' }),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error(err));
