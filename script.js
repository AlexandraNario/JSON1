// Sample JSON
//Objective: In this exercise, you'll work with JSON dummy data and use the JSON.parse() method to convert it into JavaScript objects.

//Create a JSON file named dummyData.json with the following content:
//Read the content of dummyData.json
//Use JSON.parse() to parse the JSON data into JavaScript objects
//Log the parsed data to the console.
//json object that is technically a string
const jsonData = `{
    "users": 
        {
            "id": 1,
            "name": "John Doe",
            "email": "john@example.com",
            "address": {
                "city": "New York",
                "zipcode": "10001"
            }
        },
    
    "products": [
        {
            "id": 101,
            "name": "Laptop",
            "price": 999.99
        },
        {
            "id": 102,
            "name": "Smartphone",
            "price": 499.99
        }
    ]
}`;


const parsedData = JSON.parse(jsonData);
console.log(parsedData);
/* the output for the parsedData
 $ node script.js
{
  users: {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    address: { city: 'New York', zipcode: '10001' }
  },
  products: [
    { id: 101, name: 'Laptop', price: 999.99 },
    { id: 102, name: 'Smartphone', price: 499.99 }
  ]
}
*/

//we can tell our html element to use the data that we gathered from json to js
//having it be parsed and then accessable to the client side
/*const username = document.createElement("h1");
username.innerText = parsedData.users.name;

const greeting = `Hello ${username}!` */
//figuring out how to commmunicate with our end user

