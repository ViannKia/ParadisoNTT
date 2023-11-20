import React, {useState, useRef} from 'react';
import { BlogList} from '../../../data';
import FastImage from 'react-native-fast-image';
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Location, Save2, Star1,Back,} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { useNavigation} from '@react-navigation/native';

const Detail = ({route}) => {
  const {id} = route.params;

  const [iconColor, setIconColor] = useState('black');
  const handleIconPress = () => {
  // Ganti warna ikon bookmark saat ditekan
  if (iconColor === 'black') {
    setIconColor('aqua');
  } else {
    setIconColor('black');
  }
  };
  const [iconStates, setIconStates] = useState({
  bookmarked: {variant: 'Linear', color: colors.grey(0.6)},
  });
  const selectedDetail = BlogList.find(wisata => wisata?.id === id);
  const navigation = useNavigation();
  console.log('Selected Detail:', selectedDetail);
  const toggleIcon = iconName => {
    setIconStates(prevStates => ({
      ...prevStates,
      [iconName]: {
        variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
        color:
          prevStates[iconName].variant === 'Linear'
            ? colors.blue()
            : colors.grey(0.6),
      },
    }));
  };
  
  return (
    <ScrollView>  
    <View style={styles.container}>
      <View style={styles.header}>
      <FastImage
            style={itemHorizontal.cardImage} 
            source={{
              uri: selectedDetail?.image,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
      </View>
      <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Back color={colors.white()} variant="Bulk" position={'absolute'} size={50} marginLeft={20} bottom={150} />
      </TouchableOpacity>
      </View>
      <View>
        <Text style={{ ...styles.headtext, color:colors.aqua()}}>{selectedDetail?.title}</Text>
      </View>
      <Location color={colors.black()} variant="Linear" size={20} marginLeft={13} marginTop={5} />
      <View>
        <Text style={{ ...styles.location, color:colors.black()}}>{selectedDetail?.createdAt}</Text>
      </View>
      <View>
      <View>
        <Text style={{ ...styles.rating, color:colors.black()}}>{selectedDetail?.totalComments}</Text>
      </View>

      <TouchableOpacity onPress={handleIconPress}>
        <View style={styles.saveicon}>
        <Save2 size={30} color={iconColor} />
        </View>
      </TouchableOpacity> 
      <Star1 color={colors.gold()} variant="Linear" size={20} marginLeft={350} marginTop={-20} />
      </View>
      <View>
      <View>
        <Text style={{ ...styles.budget, color:colors.black()}}>{selectedDetail?.price}</Text>
      </View>
      </View>
      <View style={{ backgroundColor: colors.aqua(), borderRadius:20, marginLeft:5, marginRight:6, marginTop:20 }}>
      <Text style={{ ...styles.headdesc, color:colors.white()}}>
            Description
      </Text>
      <View>
        <Text style={{ ...styles.desc, color:colors.white()}}>{selectedDetail?.descwisata}</Text>
      </View>
      </View>
      <View>
        <Text style={{ ...styles.desc, color:colors.black(), fontWeight:'bold', fontSize:20, paddingTop: 5}}>
         Google Map Location
        </Text>
      </View>
      <View>
      <Image
          style={itemHorizontal.mapimg}
          source={{
            uri: 'https://imgix2.ruangguru.com/assets/miscellaneous/png_x1dzxa_9091.png',
          }}
        />
      </View>
    </View>
    </ScrollView>
  );
};
export default Detail;

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
  mapimg: {
    width: '95%',
    height: 180,
    marginLeft: 10,
    borderRadius: 40,
    resizeMode: 'cover',
  },
  cardImage: {
    width: '113%',
    height: 300,
    marginTop: -15,
    marginLeft: -24,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
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
    backgroundColor: colors.pastel(),
  },
  header: {
    paddingHorizontal: 24,
    // justifyContent: 'space-between',
    height: '25%',
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
    fontSize: 25,
    marginLeft: 15,
    paddingTop: 100,
    fontWeight: 'bold',
    fontFamily: fontType['Pjs-ExtraBold'],
  },
  saveicon: {
    marginLeft: 360,
    marginTop: -56,
  },
  location: {
    marginLeft: 40,
    marginTop: -19,
  },
  rating: {
    marginLeft: 375,
    marginTop: -19,
  },
  budget: {
    marginLeft: 15,
    marginTop: 7,
  },
  headdesc: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
  desc:{
    marginLeft: 15,
    paddingBottom: 15,
    marginTop: 10,
  },
  cattext: {
    fontSize: 20,
    marginLeft: 15,
    paddingTop: 15,
    color: colors.black(),
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
