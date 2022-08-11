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
  heading: {
    margin: 20,
    flex: 1,
    justifyContent: "space-around"
  }
});

export default {
  title: "{{cookiecutter.camel_case_name}}",
  navigator: {{cookiecutter.camel_case_name}}
};
