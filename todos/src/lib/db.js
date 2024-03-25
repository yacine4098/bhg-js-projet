'use strict';

const mysql = require('mysql2');

// Create a single MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'test',
});

// Promisify the connection
const promiseConnection = connection.promise();

// Function to execute queries
export async function query({ sql, values = [] }) {
  try {
    const [results] = await promiseConnection.execute(sql, values);
    return results;
  } catch (error) {
    throw new Error(error.message);
  }
}

// Function to insert a product
export async function insertProduct(name) {
  const sql = 'INSERT INTO products (name) VALUES (?)';
  const values = [name];

  try {
    const results = await query({ sql, values });
    return results;
  } catch (error) {
    throw new Error(`Error inserting product: ${error.message}`);
  }
}
