import React from 'react';
import {ScrollView, StyleSheet,  Text, View, Image, ImageBackground, TextInput, TouchableOpacity, handleSearchPress} from 'react-native';
import {Notification,SearchNormal, Star1, Receipt21, Clock, Message, HambergerMenu, TextBold,searchText} from 'iconsax-react-native';
import { fontType, colors } from './src/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>ParadisoNTT.</Text>
        <HambergerMenu color={colors.black()} variant="Linear" size={24} />
      </View>
      <View style={{paddingHorizontal: 24, marginTop: 10, marginRight:20}}>
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
                color={colors.black()}
                variant="Linear"
                size={24}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        </View>
        <View>
           <TextInput style={styles.headtext}>
            Explore Destination In East Nusa Tenggara
           </TextInput>
        </View> 
      
      <View style={styles.listCategory}>
        <View style={{ flexDirection:'row' }}>
          <View style={{...category.item, marginLeft: 20}}>
            <Text style={{...category.title, color: colors.aqua()}}>
              All
            </Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Popular</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Recomended</Text>
          </View>
          <View style={category.item}>
            <Text style={category.title}>Favorite</Text>
          </View>
        </View>
      </View>
      <ListBlog />
    </View>
  );
}

// App Styling

const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal
          contentContainerStyle={{gap: 15}}>
          <View style={{...itemHorizontal.cardItem, marginLeft: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 20}}
              source={{
                uri: 'https://i.pinimg.com/564x/db/dc/49/dbdc494067a2eef419c0161af6f20c2c.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Oetune Beach
                  </Text>
                  <Text style={itemHorizontal.cardText}>TTS, East Nusa Tenggara </Text>
                </View>
                <View style={styles.staricon}>
                     <Star1 color={colors.gold()} variant="Linear" size={15} />
                </View>
                <Text style={{ color:colors.white(), fontWeight:'bold', fontSize:12, marginTop:155, marginLeft:5 }}>4,7 (722)</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.pinimg.com/564x/4d/40/2f/4d402f28517d23a2725a3a01b61f756c.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Taman Nasional Komodo
                  </Text>
                  <Text style={itemHorizontal.cardText}>Manggarai Reg, East Nusa Tenggara</Text>
                </View>
                <View style={styles.staricon2}>
                <Star1 color={colors.gold()} variant="Linear" size={15} />
                </View>
                <Text style={{ color:colors.white(), fontWeight:'bold', fontSize:12, marginTop:155, marginLeft:5 }}>4,7 (999)</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={itemHorizontal.cardItem}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.pinimg.com/564x/d4/77/52/d47752d6d51e15ae82467c077508b7bb.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Kelimutu Lake
                  </Text>
                  <Text style={itemHorizontal.cardText}>Ende Reg, East Nusa Tenggara</Text>
                </View>
                <View style={styles.staricon3}>
                <Star1 color={colors.gold()} variant="Linear" size={15} />
                </View>
                <Text style={{ color:colors.white(), fontWeight:'bold', fontSize:12, marginTop:155, marginLeft:5 }}>4,7 (305)</Text>
              </View>
            </ImageBackground>
          </View>
          <View style={{...itemHorizontal.cardItem, marginRight: 24}}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{borderRadius: 15}}
              source={{
                uri: 'https://i.pinimg.com/564x/3a/e2/ac/3ae2acff4f16843257575fc269ed088e.jpg',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Waerebo Village
                  </Text>
                  <Text style={itemHorizontal.cardText}>Manggarai Reg, East Nusa Tenggara</Text>
                </View>
                <View style={styles.staricon4}>
                <Star1 color={colors.gold()} variant="Linear" size={15} />
                </View>
                <Text style={{ color:colors.white(), fontWeight:'bold', fontSize:12, marginTop:155, marginLeft:5 }}>4,7 (963)</Text>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
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
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    fontWeight: 'bold',
    paddingTop: 5,
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
    marginLeft: 10,
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