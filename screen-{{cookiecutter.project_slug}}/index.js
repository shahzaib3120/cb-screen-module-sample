import React from "react";
import {
  Text,
  View,
  StyleSheet
} from "react-native";

const {{cookiecutter.camel_case_name}} = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{{cookiecutter.project_name}}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#fff",
  },
  heading: {
    fontSize: 20,
  }
});

export default {
  title: "{{cookiecutter.camel_case_name}}",
  navigator: {{cookiecutter.camel_case_name}}
};
