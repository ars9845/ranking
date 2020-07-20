import React from "react";
import {View, Text, Button } from "react-native";

export default ({ navigation }) => (
    <View>
      <Text>Home</Text>
      <Button
        onPress={() => navigation.navigate("Contest")}
        title="Go to Contest"
      />
    </View>
  );