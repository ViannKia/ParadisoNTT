import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { SearchBar1 } from "../../components";
import { fontType, colors } from "../../theme";
const Search = () => {
  const [searchPhrase, setSearchPhrase] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar1
          searchPhrase={searchPhrase}
          setSearchPhrase={setSearchPhrase}
        />
      </View>
    </View>
  );
};
export default Search;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.greynew(),
  },
  header: {
    paddingHorizontal: 24,
    alignItems: "center",
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: "absolute",
    top: 0,
    zIndex: 1000,
    right: 0,
    left: 0,
    backgroundColor: colors.greynew(),
  },
});