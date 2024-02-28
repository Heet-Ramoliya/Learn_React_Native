import {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import db from '../database/database';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/FontAwesome5';

import {TouchableOpacity} from 'react-native-gesture-handler';

const FlatList_task = ({navigation}) => {
  const [menulist, setMenulist] = useState([]);

  useEffect(() => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM Users', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i) {
          temp.push(results.rows.item(i));
        }
        console.log(temp);
        setMenulist(temp);
      });
    });
  }, []);

  const deleteUser = id => {
    db.transaction(tx => {
      tx.executeSql('DELETE FROM Users WHERE id = ?', [id], (tx, results) => {
        console.log('User delete successfully!');
        setMenulist(prevList => prevList.filter(user => user.id !== id));
      });
    });
  };

  let listItemView = item => {
    return (
      <>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: 1,
            marginHorizontal: 5,
            margin: 5,
            backgroundColor: 'rgba(236,240,245,255)',
            justifyContent: 'space-between',
          }}>
          {item.image && (
            <Image
              source={{
                uri: item.image,
              }}
              style={{
                height: 100,
                width: 100,
                resizeMode: 'cover',
                borderRadius: 20,
                margin: 20,
              }}
            />
          )}
          <View style={{flexDirection: 'column', padding: 5}}>
            <Text style={styles.text}>Name: {item.name}</Text>
            <Text style={styles.text}>Price: {item.price}</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              padding: 6,
            }}>
            <TouchableOpacity>
              <Icons
                name="edit"
                size={23}
                color="black"
                onPress={() =>
                  navigation.navigate('AddItems', {
                    itemid: item.id,
                    itemname: item.name.toString(),
                    itemprice: item.price.toString(),
                    mode: 'update',
                  })
                }
              />
            </TouchableOpacity>
            <View style={{marginHorizontal: 5}}></View>
            <TouchableOpacity onPress={() => deleteUser(item.id)}>
              <Icon name="delete" size={30} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </>
    );
  };

  return (
    <View>
      <FlatList
        data={menulist}
        renderItem={({item}) => listItemView(item)}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 18,
  },
});

export default FlatList_task;
