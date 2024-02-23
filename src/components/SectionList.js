import {useState} from 'react';
import {View, Text, SectionList, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';

const SectionList_task = () => {
  const menu = [
    {
      id: 1,
      category: 'Burger',
      data: [
        {
          Name: 'McVeggie Burger',
          image:
            'https://media.istockphoto.com/id/520410807/photo/cheeseburger.jpg?s=612x612&w=0&k=20&c=fG_OrCzR5HkJGI8RXBk76NwxxTasMb1qpTVlEM0oyg4=',
          price: 69,
        },
        {
          Name: 'Veg Surprise',
          image:
            'https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_150,q_80,fl_lossy,dpr_2.0,c_fill,f_auto,h_100/dkpwnegyrattycplukos',
          price: 119,
        },
        {
          Name: 'McSpicy Paneer Burger',
          image:
            'https://www.mcdonaldsindia.com/trulyindianburger/images/chicken-maharaja-mac.png',
          price: 59,
        },
        {
          Name: 'Veg Maharaja Mac Burger',
          image:
            'https://www.mcdonalds.com.my/storage/foods/September2019/lojYE6LgUCgHSTdBHxC1.png',
          price: 89,
        },
        {
          Name: 'Burger Veg Combo',
          image:
            'https://mcdonalds.com.pk/wp-content/uploads/2022/08/10-McCrispy-178x178.png',
          price: 179,
        },
        {
          Name: 'Cheese Burger Meal',
          image:
            'https://images.deliveryhero.io/image/talabat/Menuitems/double_mcchicken_meal638107839466177373.jpg',
          price: 199,
        },
      ],
    },
  ];

  const [value, setValue] = useState(0);

  const increase = () => {
    setValue(value + 1);
  };

  const decrease = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <View>
      <SectionList
        sections={menu}
        renderItem={({item}) => (
          <>
            <View>
              <View style={styles.container}>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Image
                    source={{uri: item.image}}
                    style={{
                      height: 120,
                      width: 120,
                      borderRadius: 20,
                    }}
                  />
                </View>
                <View style={styles.text_container}>
                  <Text style={styles.pname}>{item.Name}</Text>
                  <Text style={styles.price}>₹{item.price}</Text>
                  <View
                    style={{
                      flexDirection: 'row',
                      padding: 5,
                      justifyContent: 'center',
                    }}>
                    <TouchableOpacity onPress={decrease} style={styles.button}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'black',
                          padding: 5,
                          fontSize: 18,
                        }}>
                        -
                      </Text>
                    </TouchableOpacity>
                    <View
                      style={{
                        height: 50,
                        width: 40,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 25,
                        marginLeft: 7,
                        marginRight: 7,
                      }}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'black',
                          fontSize: 18,
                        }}>
                        {value}
                      </Text>
                    </View>
                    <TouchableOpacity onPress={increase} style={styles.button}>
                      <Text
                        style={{
                          fontWeight: 'bold',
                          color: 'black',
                          padding: 5,
                          fontSize: 18,
                        }}>
                        +
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: 10,
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 0.5,
    marginTop: 10,
    borderRadius: 10,
  },
  text_container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginHorizontal: 5,
    width: '50%',
    marginLeft: 20,
  },
  pname: {
    color: 'black',
    fontSize: 20,
    paddingVertical: 10,
    fontWeight: '600',
  },
  price: {
    fontSize: 15,
    color: 'black',
    paddingHorizontal: 5,
  },
  button: {
    height: 50,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 25,
    borderWidth: 0.5,
    backgroundColor: 'rgba(236,240,245,255)',
  },
});

export default SectionList_task;