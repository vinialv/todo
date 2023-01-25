import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";

type Props = {
  description: string;
  onRemove: () => void;
};

export function Todo({ description, onRemove }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image
          style={styles.check} 
          source={require(`../../assets/unchecked.png`)}
        />
      </TouchableOpacity>
      <View style={styles.description}>
        <Text style={styles.descriptionText}>{description}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
        <Image source={require("../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
}
