import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
  name: 'Cookaroo.db',
  location: 'dafault',
});

export default db;


