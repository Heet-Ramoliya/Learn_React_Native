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

    //Payment Table
    // tx.executeSql(
    //   'CREATE TABLE IF NOT EXISTS Payment (id INTEGER PRIMARY KEY AUTOINCREMENT,userId INTEGER,paymentDate Text,totalAmount TEXT,FOREIGN KEY (userId) REFERENCES Users(userId))',
    //   [],
    //   (tx, results) => {
    //     console.log('Payment table create successfully');
    //   },
    //   error => {
    //     console.log('Error creating table:', error);
    //   },
    // );

    //Myorders Table
    tx.executeSql(
      'CREATE TABLE IF NOT EXISTS Myorders (id INTEGER PRIMARY KEY AUTOINCREMENT,userId INTEGER,name TEXT,price TEXT,image TEXT,quantity INTEGER,paymentDate Text,FOREIGN KEY (userId) REFERENCES Users(userId))',
      [],
      (tx, results) => {
        console.log('Myorders table create successfully');
      },
      error => {
        console.log('Error creating table:', error);
      },
    );
  });
};

// export const dropTable = () => {
//   db.transaction(tx => {
//     tx.executeSql(
//       'DROP TABLE IF EXISTS Payment',
//       [],
//       (tx, results) => {
//         console.log('MyOrders table dropped successfully');
//       },
//       error => {
//         console.log('Error dropping table:', error);
//       },
//     );
//   });
// };

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
export const insertIntoCartItems = async (
  userId,
  productId,
  name,
  price,
  image,
  quantity,
) => {
  await db.transaction(tx => {
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

//insert PaymentDetails
// export const insertPayment = (userId, paymentDate, totalAmount) => {
//   try {
//     db.transaction(tx => {
//       tx.executeSql(
//         'INSERT INTO Payment (userId,paymentDate,totalAmount) VALUES (?, ?, ?)',
//         [userId, paymentDate, totalAmount],
//         (tx, results) => {
//           if (results.rowsAffected > 0) {
//             console.log('Payment inserted successfully');
//             console.warn('Payment inserted successfully');
//           } else {
//             console.log('Failed to insert payment');
//           }
//         },
//       );
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

//insert payment data into Myorders
export const insertIntoMyorders = async (
  userId,
  name,
  price,
  image,
  quantity,
  paymentDate,
) => {
  await db.transaction(tx => {
    tx.executeSql(
      'INSERT INTO Myorders(userId,name,price,image,quantity,paymentDate) VALUES (?, ?, ?, ?, ?, ?)',
      [userId, name, price, image, quantity, paymentDate],
      (tx, results) => {
        console.log('Product add into Myorders successfully');
      },
      error => {
        console.log('Error inserting record:', error);
      },
    );
  });
};
