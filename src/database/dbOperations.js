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

    //CartItems Table
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS CartItems (id INTEGER PRIMARY KEY AUTOINCREMENT,userId INTEGER,productId INTEGER,name TEXT,price TEXT,image TEXT,quantity INTEGER,FOREIGN KEY (userId) REFERENCES Users(userId),FOREIGN KEY (productId) REFERENCES Products(id))',
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
      },
      error => {
        console.log('Error inserting record:', error);
      },
    );
  });
};

//insert Product into CartItems table
export const insertIntoCartItems = (
  userId,
  productId,
  name,
  price,
  image,
  quantity,
) => {
  db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO CartItems (userId,productId,name,price,image,quantity) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, productId, name, price, image, quantity],
      (tx, results) => {
        console.log('Product add into Cart successfully');
      },
      error => {
        console.log('Error inserting record:', error);
      },
    );
  });
};

//update CartItem
export const updateCartItem = async (quantity, userId, productId) => {
  try {
    await db.transaction(tx => {
      tx.executeSql(
        'UPDATE CartItems SET quantity = ? WHERE  userId = ? AND productId = ?',
        [quantity, userId, productId],
        (tx, results) => {
          console.log('Cart item updated successfully');
        },
      );
    });
  } catch (error) {
    console.error('Error updating cart item:', error);
  }
};

//Delete cartItem data when quantity is 0
export const deleteCartItem = async (userId, productId) => {
  try {
    await db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM CartItems WHERE userId = ? AND productId =? ',
        [userId, productId],
        (tx, results) => {
          console.log(
            'cart product delete successfully :',
            results.rowsAffected,
          );
        },
      );
    });
  } catch (error) {
    console.log(error);
  }
};

// export const updateUser = (name, price, image, id) => {
//   db.transaction(tx => {
//     tx.executeSql(
//       'UPDATE Users SET name=? , price=? , image=? WHERE id=?',
//       [name, price, image, id],
//       (tx, results) => {
//         if (results.rowsAffected > 0) {
//           console.log('User updated successfully!');
//         } else {
//           console.log('User not found or no changes made');
//         }
//       },
//     );
//   });
// };
