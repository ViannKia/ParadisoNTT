import React, {useState} from 'react';
import { ListHorizontal, ItemSmall } from './src/components';
import { BlogList, CategoryList } from './data';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, TextInput, TouchableOpacity, handleSearchPress,FlatList} from 'react-native';
import {Notification,SearchNormal, Star1, Receipt21, Clock, Message, HambergerMenu, TextBold,searchText,Element3} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ParadisoNTT.</Text>
        <HambergerMenu color={colors.black()} variant="Linear" size={24} />
      </View>
      <Text style={{ ...styles.headtext, color:colors.black() }}>
            Explore Destination In East Nusa Tenggara
           </Text>
           <View style={{paddingHorizontal: 24, marginTop: 15, marginBottom: 15, marginRight:20}}>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.input}
            placeholder="Find You'r Destination..."
            onChangeText={handleSearchPress}
            value={searchText}
            placeholderTextColor="black"
          />
          <View style={styles.searchButtonContainer}>
            <TouchableOpacity style={styles.searchButton}>
              <SearchNormal
                color={colors.black() }
                variant="Linear"
                size={24}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        </View>
      <View style={styles.listCategory}>
        <FlatListCategory />
      </View>
      <ListBlog />
    </View>
  );
}

const CategoryWisata = ({item, onPress, color}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={category.item}>
        <Text style={{...category.title, color}}>{item.categoryName}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FlatListCategory = () => {
  const [selected, setSelected] = useState(1);
  const renderItem = ({item}) => {
    const color = item.id === selected ? colors.blue() : colors.black();
    return (
      <CategoryWisata
        item={item}
        onPress={() => setSelected(item.id)}
        color={color}
      />
    );
  };
  return (
    <FlatList
      data={CategoryList}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({...item})}
      ItemSeparatorComponent={() => <View style={{width: 5}} />}
      contentContainerStyle={{paddingLeft: 5}}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};

  const ListBlog = () => {
    //Data Wisata Horizontal
    const horizontalData = BlogList.slice(0, 4);
    //Data Category Vertical
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.listBlog}>
          <ListHorizontal data={horizontalData} />
        </View>
    <ScrollView>
    <View>
       <Text style={styles.cattext}>
           Categories
       </Text>
    </View> 
    <View style={itemVertical.listCard}>
      <View style={itemVertical.cardItem}>
        <Image
          style={itemVertical.cardImage}
          source={{
            uri: 'https://i.pinimg.com/564x/55/26/09/5526094abe1fec135d6b3db15634d6b7.jpg',
          }}
        />
        <View style={itemVertical.cardContent}>
          <Text style={{ color:colors.aqua(), fontWeight:'bold', fontSize:30, textAlign:'center', marginTop:10 }}>Beach</Text>
        </View>            
      </View>
    </View>
     <View style={itemVertical.listCard}>
      <View style={itemVertical.cardItem}>
        <Image
          style={itemVertical.cardImage}
          source={{
            uri: 'https://i.pinimg.com/736x/1d/7e/80/1d7e80368671a9f4c4e5a899f29b9812.jpg',
          }}
        />
        <View style={itemVertical.cardContent}>
          <Text style={{ color:colors.aqua(), fontWeight:'bold', fontSize:30, textAlign:'center', marginTop:10 }}>Mountain</Text>
        </View>            
      </View>
    </View>
     <View style={itemVertical.listCard}>
      <View style={itemVertical.cardItem}>
        <Image
          style={itemVertical.cardImage}
          source={{
            uri: 'https://i.pinimg.com/564x/88/c4/c1/88c4c1d3fe68f165f468de292704940d.jpg',
          }}
        />
        <View style={itemVertical.cardContent}>
          <Text style={{ color:colors.aqua(), fontWeight:'bold', fontSize:30, textAlign:'center', marginTop:10 }}>WaterFall</Text>
        </View>            
      </View>
    </View>
    <View style={itemVertical.listCard}>
      <View style={itemVertical.cardItem}>
        <Image
          style={itemVertical.cardImage}
          source={{
            uri: 'https://i.pinimg.com/564x/55/26/09/5526094abe1fec135d6b3db15634d6b7.jpg',
          }}
        />
        <View style={itemVertical.cardContent}>
          <Text style={{ color:colors.aqua(), fontWeight:'bold', fontSize:30, textAlign:'center', marginTop:10 }}>Lake</Text>
        </View>            
      </View>
    </View>
    </ScrollView>
      </ScrollView>
    );
  };

// Styling

const itemVertical = StyleSheet.create({
  listCard: {
    marginHorizontal: 26,
    marginVertical: 10,
  },
  cardItem: {
    backgroundColor: colors.white(),
    flexDirection: 'column',
    borderRadius: 40,
    padding: 5,
  },
   cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 40,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    flex: 1,
    paddingVertical: 1,
  },
});
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 280,
  },
  cardImage: {
    width: '100%',
    height: 200,
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
    marginVertical:5,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 5,
    maxWidth: '90%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 14,
    color: colors.aqua(),
    fontWeight: 'bold',
  },
  cardText: {
    fontSize: 10,
    marginBottom: 145,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
    fontWeight: 'bold',
  },
  searchbar: {
    width: '90%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 40,
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 15,
  },
  searchIcon: {
    position: 'absolute',
    top: 8,
    left: 10,
  },
  profileIcon: {
    position: 'absolute',
    left: 320,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pastel(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height:52,
    elevation: 8,
    paddingTop:8,
    paddingBottom:4
  },
  listCard: {
    marginBottom: 25,
    gap: 15,
    marginLeft: 25,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    fontWeight: 'bold',
    paddingTop: 10,
  },
  searchContainer : {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: -23,
    justifyContent:'space-between',
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'black',
    backgroundColor: 'white',
  },
  input: {
    fontWeight: 'bold',
    marginLeft: 35,
  },
  searchButton: {
    right: 330,
  },
  listCategory: {
    paddingVertical: 10,
  },
    headtext: {
    fontSize: 20,
    marginLeft: 15,
    paddingTop: 25,
    fontWeight: 'bold',
  },
  cattext: {
    fontSize: 20,
    marginLeft: 15,
    paddingTop: 15,
    color: colors.black(),
    fontWeight: 'bold',
  },
  staricon: {
    marginLeft: 70,
    marginVertical: 155,
    position: 'relative',
  },
  staricon2: {
    marginLeft: 25,
    marginVertical: 155,
    position: 'relative',
  },
  staricon3: {
    marginLeft: 50,
    marginVertical: 155,
    position: 'relative',
  },
  staricon4: {
    marginLeft: 25,
    marginVertical: 155,
    position: 'relative',
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
  searchbar: {
    width: '100%',
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 20,
    marginHorizontal:50,
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 15,
    fontWeight: 'bold',
  },

});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginLeft: 15,
    borderRadius: 25,
    alignItems: 'left',
    backgroundColor: colors.purple(0.1),
    marginHorizontal:5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 15,
    fontWeight: 'bold',
    lineHeight: 18,
    color: colors.black(),
  },
})