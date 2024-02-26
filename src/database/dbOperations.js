import db from './database';

export const createTable = () => {
  db.transaction(tx => {
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL , price INTEGER NOT NULL, image TEXT NOT NULL )',
      [],
      (tx, results) => {
        console.log('Table create successfully');
      },
      error => {
        console.log('Error creating table:', error);
      },
    );
  });
};

export const insertUser = (name, price, image) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO Users (name,price,image) VALUES (?, ?, ?)',
      [name, price, image],
      (tx, results) => {
        console.log('Record inserted successfully');
      },
      error => {
        console.log('Error inserting record:', error);
      },
    );
  });
};
