import {View, Text, StyleSheet, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import db from '../database/database';
import AsyncStorage from '@react-native-async-storage/async-storage';

const MyProduct = ({navigation, route}) => {
  // const {userId} = route.params;
  const [menulist, setMenulist] = useState([]);
  const [storedUserId, setStoredUserId] = useState('');

  useEffect(() => {
    getUserIdFromStorage();

    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM Products WHERE userId=?',
        [storedUserId],
        (tx, results) => {
          var temp = [];
          for (let i = 0; i < results.rows.length; ++i) {
            temp.push(results.rows.item(i));
          }
          setMenulist(temp);
        },
      );
    });
  }, [storedUserId, menulist]);

  const getUserIdFromStorage = async () => {
    try {
      const id = await AsyncStorage.getItem('userId');
      if (id !== null) {
        setStoredUserId(id);
      }
    } catch (error) {
      console.error('Error retrieving userId from AsyncStorage:', error);
    }
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
            <Text style={styles.text}>Price: ₹{item.price}</Text>
          </View>
          {/* <View
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
                    itemimage: item.image,
                    mode: 'update',
                  })
                }
              />
            </TouchableOpacity>
            <View style={{marginHorizontal: 5}}></View>
            <TouchableOpacity onPress={() => deleteUser(item.id)}>
              <Icon name="delete" size={30} color="black" />
            </TouchableOpacity>
          </View> */}
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

export default MyProduct;
