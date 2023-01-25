import { View, Image } from "react-native";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <Image
        style={styles.logoImagem}
        source={require("../../assets/logo-todo.png")}
      />
    </View>
  );
}
