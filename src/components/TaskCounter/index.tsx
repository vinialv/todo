import { View, Text } from "react-native";

import { styles } from "./styles";
import { Task } from "../TasksList";

type Props = {
  counterCreated: number;
  counterConcluded: number;
};

export function TaskCounter({counterCreated, counterConcluded} : Props) {
  return (
    <View style={styles.totalToDo}>
    <View style={styles.totalCreated}>
      <Text style={styles.textTotalCreated}>Criadas</Text>
      <Text style={styles.textCounter}>{counterCreated}</Text>
    </View>
    <View style={styles.totalConcluded}>
      <Text style={styles.textTotalConcluded}>Concluídas</Text>
      <Text style={styles.textCounter}>{counterConcluded}</Text>
    </View>
  </View>
  );
}
