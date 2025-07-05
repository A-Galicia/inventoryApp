const { Client } = require('pg');
require('dotenv').config();

const SQL = `
CREATE TABLE IF NOT EXISTS catagories (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  name VARCHAR ( 255 )
);

INSERT INTO catagories (name) 
VALUES
  ('Hot Meals'),
  ('Drinks'),
  ('Desserts'),
  ('Snacks'),
  ('Misc');

CREATE TABLE IF NOT EXISTS products (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  catagory_id INTEGER,
  name VARCHAR ( 255 ),
  price INTEGER,
  description TEXT
);  

INSERT INTO products (catagory_id, name, price, description) 
VALUES
  (1, 'Burger', 10, '100% all beef patty with white bread buns'),
  (1, 'Hot dog', 7, '100% all beef hotdog in white bread bun'),
  (1, 'Pizza', 15, '12 inch pizza with pizza sauce and mozzeralla cheese'),
  (1, 'Nachos', 12, 'Tortilla chips with nacho cheese, jalapenos, sour cream, and shreeded chicken'),
  (2, 'Soda', 4, 'Variety of Coke products'),
  (2, 'Slushie', 8, 'Granulated ice and sugar drink with a variety of flavorings'),
  (2, 'Coffee', 5, 'instant coffee'),
  (3, 'Churro', 9, '8 inch fried stick of bread, covered in cinnamon and sugar'),
  (3, 'Cake', 50, '12 inch vanilla cake, with vanilla frosting and rainbow sprinkles'),
  (3, 'Sunday', 11, 'Vanilla ice cream with chocolate fudge and peanutes, with a cherry on top'),
  (4, 'Pretzels', 6, 'Bag of pretzels with salt baked into it'),
  (4, 'Chips', 4, 'Variety of assorted chips'),
  (4, 'Fruit Snacks', 2, 'Small bag of fruit snacks, variety of flavors'),
  (5, 'Pan', 25, 'Cast iron pan for all types of cooking');`;

async function main() {
  console.log('seeding...');
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
