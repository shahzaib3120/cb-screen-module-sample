import React, { useRef, useContext, useEffect, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  ImageBackground
} from "react-native";

const {{cookiecutter.camel_case_name}} = () => {

  return (
    <View style={styles.heading}>
      <Text>{{cookiecutter.project_name}}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    flex: 1,
    justifyContent: "space-around"
  },
  headingTxt: {
    fontSize: 24,
    fontWeight: "bold",
    padding: 2,
    marginVertical: 12
  }
});

export default {
  title: "{{cookiecutter.camel_case_name}}",
  navigator: {{cookiecutter.camel_case_name}}
};
