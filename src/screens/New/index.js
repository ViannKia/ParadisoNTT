import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import {MessageAdd1} from 'iconsax-react-native';
import React, {useEffect, useState, useCallback} from 'react';
import {ItemSmall} from '../../components';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {fontType, colors} from '../../theme';
import firestore from '@react-native-firebase/firestore';

const New = () => {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [wisataData, setWisataData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  useEffect(() => {
    const subscriber = firestore()
      .collection('wisata')
      .onSnapshot(querySnapshot => {
        const wisata = [];
        querySnapshot.forEach(documentSnapshot => {
          wisata.push({
            ...documentSnapshot.data(),
            id: documentSnapshot.id,
          });
        });
        setWisataData(wisata);
        setLoading(false);
      });
    return () => subscriber();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      firestore()
        .collection('wisata')
        .onSnapshot(querySnapshot => {
          const wisata = [];
          querySnapshot.forEach(documentSnapshot => {
            wisata.push({
              ...documentSnapshot.data(),
              id: documentSnapshot.id,
            });
          });
          setWisataData(wisata);
        });
      setRefreshing(false);
    }, 1500);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>New Destination</Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 19,
          gap: 10,
          paddingVertical: 15,
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{paddingVertical: 10, gap: 10}}>
          {loading ? (
            <ActivityIndicator size={'large'} color={colors.aqua()} />
          ) : (
            wisataData.map((item, index) => (
              <ItemSmall item={item} key={index} />
            ))
          )}
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddDataWisata')}>
        <MessageAdd1 color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default New;

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
    justifyContent: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    elevation: 8,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    fontWeight: 'bold',
    paddingTop: 15,
    // marginRight: 200,

  },
});
