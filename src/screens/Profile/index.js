import {ScrollView, StyleSheet, Text, Image, View, TouchableOpacity, ActivityIndicator, RefreshControl} from 'react-native';
import {Edit, Location} from 'iconsax-react-native';
import React, { useState, useCallback} from 'react';
import FastImage from 'react-native-fast-image';
import {ProfileData} from '../../../data';
import {fontType, colors} from '../../theme';

const Profile = () => { 

  return (
    <View style={styles.container}>
      <View style={styles.header}></View>
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
          <View style={{gap: 5, alignItems: 'center'}}>
            <Text style={profile.name}>{ProfileData.name}</Text>
          </View>
          <View
            style={{
              gap: 5,
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: -10,
            }}>
            <Location size="20" color="#000000" variant="Bold" />
            <Text style={profile.place}>{ProfileData.place}</Text>
          </View>
          <Text
            style={{
              color: colors.black(),
              textAlign: 'center',
              fontSize: 20,
              fontWeight: '600',
            }}>
            {ProfileData.tag}
          </Text>
          <TouchableOpacity style={profile.buttonEdit}>
            <Text style={profile.buttonText}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const itemVertical = StyleSheet.create({
  cardImage: {
    width: '115%',
    height: 700,
    marginTop: 80,
    marginLeft: -27,
    marginBottom: -800,
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
  floatingButton: {
    backgroundColor: colors.aqua(),
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.black(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
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
    textTransform: 'capitalize',
  },
  place: {
    color: colors.black(),
    fontSize: 16,
    fontWeight: '800',
    fontFamily: fontType['Pjs-Bold'],
    textTransform: 'capitalize',
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
