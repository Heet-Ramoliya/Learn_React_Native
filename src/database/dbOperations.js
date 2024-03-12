import {ToastAndroid} from 'react-native/types';
import db from './database';

//Create Table of database
export const createTable = () => {
  db.transaction(tx => {
    //Users Table
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Users (userId INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT NOT NULL, password TEXT NOT NULL)',
      [],
      (tx, results) => {},
      error => {
        console.log('Error creating table:', error);
      },
    );

    //Products Table
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Products (id INTEGER PRIMARY KEY AUTOINCREMENT,userId INTEGER , name TEXT NOT NULL , price INTEGER NOT NULL, image TEXT NOT NULL, FOREIGN KEY (userId) REFERENCES Users(userId))',
      [],
      (tx, results) => {},
      error => {
        console.log('Error creating table:', error);
      },
    );
  });
};

//insert Product into database
export const insertProduct = (userId, name, price, image) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO Products (userId,name,price,image) VALUES (?, ?, ?, ?)',
      [userId, name, price, image],
      (tx, results) => {
        console.log('Product inserted successfully');
        console.log(userId);
      },
      error => {
        console.log('Error inserting record:', error);
      },
    );
  });
};

export const updateUser = (name, price, image, id) => {
  db.transaction(tx => {
    tx.executeSql(
      'UPDATE Users SET name=? , price=? , image=? WHERE id=?',
      [name, price, image, id],
      (tx, results) => {
        if (results.rowsAffected > 0) {
          console.log('User updated successfully!');
        } else {
          console.log('User not found or no changes made');
        }
      },
    );
  });
};

export const getUser = () => {};
