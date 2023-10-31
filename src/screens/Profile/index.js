import {ScrollView, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Setting2, Location} from 'iconsax-react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData, BlogList} from '../../../data';
import {ItemSmall} from '../../components';
import { fontType, colors } from '../../theme';

const data = BlogList.slice(5);
const Profile = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <View>
      <Image
          style={itemVertical.cardImage}
          source={{
            uri: 'https://i.pinimg.com/564x/4d/40/2f/4d402f28517d23a2725a3a01b61f756c.jpg',
          }}
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 24,
          gap: 10,
          paddingVertical: 20,
        }}> 
        <View style={{gap: 15, alignItems: 'center'}}>
          <FastImage
            style={profile.pic}
            source={{
              uri: ProfileData.profilePict,
              headers: {Authorization: 'someAuthToken'},
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
          <View style={{alignItems: 'center'}}>
            <Text style={profile.name}>{ProfileData.name}</Text>
          </View>
          <View style={{ gap: 5, alignItems: 'center', flexDirection: 'row', marginTop:-10 }}>
          <Location size="20" color="#000000" variant="Bold"/>
          <Text style={profile.place}>{ProfileData.place}</Text>
          </View>
          <View>
            <Text style={{ ...styles.bio, color:colors.black(), textAlign:'center', fontSize:20 ,fontWeight:'800',}}>
                "Pencinta Wisata Alam".
            </Text>
          </View>
          <TouchableOpacity style={profile.buttonEdit}>
            <Text style={profile.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingVertical: 10, gap:10}}>
          {data.map((item, index) => (
            <ItemSmall item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const itemVertical = StyleSheet.create({
    cardImage: {
        width: '115%',
        height: 700,
        marginBottom: -600,
        marginLeft: -27,
        opacity: 0.8,
        borderTopRightRadius: 200,
        borderTopLeftRadius: 200,
        resizeMode: 'cover',
      },
});

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pastel(),
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'flex-end',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
});
const profile = StyleSheet.create({
  pic: {width: 100, height: 100, borderRadius: 15},
  name: {
    color: colors.black(),
    fontSize: 20,
    fontWeight: '900',
    fontFamily: fontType['Pjs-Bold'],
    textTransform:'capitalize'
  },
  place: {
    color: colors.black(),
    fontSize: 16,
    fontWeight: '800',
    fontFamily: fontType['Pjs-Bold'],
    textTransform:'capitalize'
  },
  info: {
    fontSize: 12,
    fontWeight: '900',
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(),
  },
  sum: {
    fontSize: 16,
    fontWeight: '900',
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
  tag: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.black(0.5),
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.aqua(0.7),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.white(),
    fontWeight: '800',
  },
});