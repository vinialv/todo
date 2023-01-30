import { View, FlatList } from "react-native";

import { styles } from "./styles";
import { EmptyList } from "../EmptyList";
import { ToDo } from "../Todo";

export interface Task {
  id: number;
  title: string;
  done: boolean;
}

interface Props {
  tasks: Task[];
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
}

export function TasksList({ tasks, toggleTaskDone, removeTask }: Props) {
  return (
    <View style={styles.todo}>
      <FlatList
        data={tasks}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ToDo
          task={item}
          toggleTaskDone={toggleTaskDone}
          removeTask={removeTask}
        />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
}
