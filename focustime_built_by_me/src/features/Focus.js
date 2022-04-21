import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, Platform } from "react-native";
import { RoundedButton } from "../components/RoundedButton";
import { TextInput } from "react-native-paper";
import { spacing } from "../utils/sizes";
export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  console.log(subject);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          onChangeText={setSubject}
          label="What would you like to focus on?"
        />
        <View style={styles.button}>
          <RoundedButton
            title="+"
            size={50}
            onPress={() => addSubject(subject)}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  button: {
    justifyContent: "center",
    marginTop: 50,
  },
  inputContainer: {
    padding: 25,
    justifyContent: "center",
    flexDirection: "row",
    marginTop: spacing.xxxl,
  },
  textInput: {
    flex: 0.8,
    paddingRight: 10,
    marginTop: 50,
  },
});
