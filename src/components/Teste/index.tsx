import { View, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import checkIcon from "../../assets/check.png";
import check2Icon from "../../assets/check2.png";

export function Teste() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Image source={check2Icon} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
