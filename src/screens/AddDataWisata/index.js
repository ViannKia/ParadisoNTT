import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, ActivityIndicator} from 'react-native';
import {ArrowLeft} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {fontType, colors} from '../../theme';
import axios from 'axios';

const AddDataWisata = () => {
  const dataCategory = [
    { id: 1, name: "Beach" },
    { id: 2, name: "Lake" },
    { id: 3, name: "WaterFall" },
    { id: 4, name: "Mountain" },
    { id: 5, name: "Island" },
    { id: 6, name: "Village" },
    { id: 7, name: "Park" },
  ];
  const [wisataData, setWisataData] = useState({
    title: '',
    descwisata: '',
    createdAt: '',
    location: '',
    category: {},
    totalComments: '',
    price: '',
  });
  const handleChange = (key, value) => {
    setWisataData({
      ...wisataData,
      [key]: value,
    });
  };
  const [image, setImage] = useState(null);

  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    setLoading(true);
    try {
      await axios.post('https://656c2042e1e03bfd572e017d.mockapi.io/paradisonttapp/destination', {
          title: wisataData.title,
          category: wisataData.category,
          image,
          descwisata: wisataData.descwisata,
          totalComments: wisataData.totalComments,
          location: wisataData.location,
          price: wisataData.price,
        })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      setLoading(false);
      navigation.navigate('Profile');
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.black()} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{ flex: 1, alignItems: "center" }}>
          <Text style={styles.title}>Add New Destination</Text>
        </View>
      </View>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingVertical: 10,
          gap: 10,
        }}
      >
        <View style={textInput.borderDashed}>
          <TextInput
            placeholder="Title"
            value={wisataData.title}
            onChangeText={(text) => handleChange("title", text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={textInput.title}
          />
        </View>
        <View style={[textInput.borderDashed, { minHeight: 250 }]}>
          <TextInput
            placeholder="Description"
            value={wisataData.description}
            onChangeText={(text) => handleChange("descwisata", text)}
            placeholderTextColor={colors.grey(0.6)}
            multiline
            style={textInput.description}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Image"
            value={image}
            onChangeText={(text) => setImage(text)}
            placeholderTextColor={colors.grey(0.6)}
            style={textInput.image}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Location"
            value={wisataData.location}
            onChangeText={(text) => handleChange("location", text)}
            placeholderTextColor={colors.grey(0.6)}
            style={textInput.image}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Rating"
            value={wisataData.totalComments}
            onChangeText={(text) => handleChange("totalComments", text)}
            placeholderTextColor={colors.grey(0.6)}
            style={textInput.image}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <TextInput
            placeholder="Price"
            value={wisataData.price}
            onChangeText={(text) => handleChange("price", text)}
            placeholderTextColor={colors.grey(0.6)}
            style={textInput.image}
          />
        </View>
        <View style={[textInput.borderDashed]}>
          <Text
            style={{
              fontSize: 16,
              fontFamily: fontType["Pjs-Regular"],
              color: colors.grey(0.6),
            }}
          >
            Category
          </Text>
          <View style={category.container}>
            {dataCategory.map((item, index) => {
              const bgColor =
                item.id === wisataData.category.id
                  ? colors.aqua()
                  : colors.grey(0.05);
              const color =
                item.id === wisataData.category.id
                  ? colors.white()
                  : colors.grey();
              return (
                <TouchableOpacity
                  key={index}
                  onPress={() =>
                    handleChange("category", { id: item.id, name: item.name })
                  }
                  style={[category.item, { backgroundColor: bgColor }]}
                >
                  <Text style={[category.name, { color: color }]}>
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
      <View style={styles.bottomBar}>
      {loading && (
        <View style={styles.loadingOverlay}>
          <ActivityIndicator size="large" color={colors.aqua()} />
        </View>
      )}
      <TouchableOpacity style={styles.button} onPress={handleUpload}>
          <Text style={styles.buttonLabel}>Add Destination</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddDataWisata;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
    
  },
  header: {
    paddingHorizontal: 24,
    flexDirection: "row",
    alignItems: "center",
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontFamily: fontType["Pjs-Bold"],
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black(),
    marginTop: 15,
  },
  bottomBar: {
    backgroundColor: colors.white(), 
    alignItems: "flex-end",
    paddingHorizontal: 24,
    paddingVertical: 10,
    shadowColor: colors.black(),
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  button: {
    paddingHorizontal: 20,
    marginBottom: 15,
    paddingVertical: 10,
    backgroundColor: colors.aqua(),
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: fontType["Pjs-SemiBold"],
    color: colors.white(),
  },
  loadingOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: colors.black(0.4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
const textInput = StyleSheet.create({
  borderDashed: {
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 5,
    padding: 10,
    borderColor: colors.aqua(0.5),
    marginTop: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: fontType["Pjs-SemiBold"],
    color: colors.black(),
    padding: 0,
  },
  description: {
    fontSize: 16,
    fontFamily: fontType["Pjs-Regular"],
    color: colors.black(),
    padding: 0,
  },
  image: {
    fontSize: 16,
    fontFamily: fontType["Pjs-Regular"],
    color: colors.black(),
    padding: 0,
  },
});
const category = StyleSheet.create({
  title: {
    fontSize: 12,
    fontFamily: fontType["Pjs-Regular"],
    color: colors.grey(0.6),
  },
  container: {
    flexWrap: "wrap",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
  },
  name: {
    fontSize: 11,
    fontFamily: fontType["Pjs-Medium"],
  },
});