import { Text, View, Image } from "react-native";

import { styles } from "./styles";

export default function EmptyList() {
  return (
    <View style={styles.container}>
      <>
        <Image
          style={styles.image}
          source={require("../../assets/clipboard.png")}
        />
        <Text style={styles.mainText}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.secondaryText}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </>
    </View>
  );
}
