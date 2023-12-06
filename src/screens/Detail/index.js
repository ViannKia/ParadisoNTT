import React, {useState, useRef, useEffect} from 'react';
import { BlogList} from '../../../data';
import FastImage from 'react-native-fast-image';
import { StyleSheet, Text, View, Image, TouchableOpacity, Animated, ActivityIndicator} from 'react-native';
import { Location, Save2, Star1, Back, More} from 'iconsax-react-native';
import { fontType, colors } from '../../theme';
import { useNavigation} from '@react-navigation/native';
import axios from 'axios';
import ActionSheet from 'react-native-actions-sheet';

const Detail = ({route}) => {
  const {id} = route.params;
  const scrollA = useRef(new Animated.Value(0)).current;
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
  // const selectedDetail = BlogList.find(wisata => wisata?.id === id);
  const navigation = useNavigation();
  // console.log('Selected Detail:', selectedDetail);
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

  const [selectedWisata, setSelectedWisata] = useState(null);

  const [loading, setLoading] = useState(true);

  const actionSheetRef = useRef(null);

  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };

  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };

  useEffect(() => {
    getWisataById();
  }, [id]);
  
  const getWisataById = async () => {
    try {
      const response = await axios.get(
        `https://656c2042e1e03bfd572e017d.mockapi.io/paradisonttapp/destination/${id}`,
      );
      setSelectedWisata(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const navigateEdit = () => {
    closeActionSheet()
    navigation.navigate('EditWisata', {id})
  }
  const handleDelete = async () => {
   await axios.delete(`https://656c2042e1e03bfd572e017d.mockapi.io/paradisonttapp/destination/${id}`)
      .then(() => {
        closeActionSheet()
        navigation.navigate('Profile');
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <Animated.ScrollView
    showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollA}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{paddingTop: 10}}>
      <View style={styles.container}>
      <View style={styles.header}>
      <Animated.Image
            style={itemHorizontal.cardImage(scrollA)} 
            source={{
              uri: selectedWisata?.image,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
      </View>
      <TouchableOpacity onPress={openActionSheet}>
            <More
              color={colors.white(1)}
              variant="Bulk"
              size={50}
              style={{marginLeft: 340, marginTop: -180, transform: [{rotate: '90deg'}]}}
            />
          </TouchableOpacity>
      <View>
      <TouchableOpacity onPress={() => navigation.goBack()}>
      <Back color={colors.white()} variant="Bulk" position={'center'} size={50} marginLeft={20} bottom={180} />
      </TouchableOpacity>
      </View>
      <View>
      </View>
      <View style={{marginTop: -20, backgroundColor:'white'}}>
      <View>
        <Text style={{ ...styles.headtext, color:colors.aqua()}}>{selectedWisata?.title}</Text>
      </View>
      <Location color={colors.black()} variant="Linear" size={20} marginLeft={13} marginTop={5} />
      <View>
        <Text style={{ ...styles.location, color:colors.black()}}>{selectedWisata?.location}</Text>
      </View>
      <View>
      <View>
        <Text style={{ ...styles.rating, color:colors.black()}}>{selectedWisata?.totalComments}</Text>
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
        <Text style={{ ...styles.budget, color:colors.black()}}>{selectedWisata?.price}</Text>
      </View>
      </View>
      <View style={{ backgroundColor: colors.aqua(), borderRadius:20, marginLeft:5, marginRight:6, marginTop:20 }}>
      <Text style={{ ...styles.headdesc, color:colors.white()}}>
            Description
      </Text>
      <View>
        <Text style={{ ...styles.desc, color:colors.white()}}>{selectedWisata?.descwisata}</Text>
      </View>
      </View>
      <View>
        <Text style={{ ...styles.desc, color:colors.black(), fontWeight:'bold', fontSize:20, paddingTop: 5}}>
         Google Map Location
        </Text>
      </View>
      </View>
      <View>
      <Image
          style={itemHorizontal.mapimg}
          source={{
            uri: 'https://imgix2.ruangguru.com/assets/miscellaneous/png_x1dzxa_9091.png',
          }}
        />
      </View>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
        indicatorStyle={{
          width: 100,
        }}
        gestureEnabled={true}
        defaultOverlayOpacity={0.3}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={navigateEdit}
          >
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: colors.black(),
              fontSize: 18,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={handleDelete}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: colors.black(),
              fontSize: 18,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={closeActionSheet}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </ActionSheet>
    </View>
    </Animated.ScrollView>
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
  cardImage: scrollA => ({
    width: '113%',
    height: 250,
    marginTop: -18,
    marginLeft: -24,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    transform: [
      {
      translateY: scrollA,
    },
    ]
  }),
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
    justifyContent: 'space-between',
    height: '25%',
    elevation: 8,
    paddingTop:8,
    paddingBottom:4,
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
    paddingTop: 15,
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
