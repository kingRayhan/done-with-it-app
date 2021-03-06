import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

import colors from "../../config/colors";
import defaultStyles from "../../config/defaultStyles";

const AppTextInput = ({ icon, width = "100%", ...otherProps }) => {
  return (
    <View style={[styles.container, { width }]}>
      {icon && (
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons size={20} name={icon} color={colors.dark} />
        </View>
      )}

      <TextInput
        placeholderTextColor={defaultStyles.colors.medium}
        style={styles.textInput}
        {...otherProps}
      />
    </View>
  );
};

export default AppTextInput;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    flexDirection: "row",
    borderRadius: 25,
    width: "100%",
    padding: 15,
    marginVertical: 10,
    alignItems: "center",
  },
  textInput: {
    ...defaultStyles.text,
    flex: 1,
  },
  iconContainer: {
    paddingRight: 10,
  },
});
