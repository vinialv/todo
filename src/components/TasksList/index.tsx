import { View, FlatList } from "react-native";

import { styles } from "./styles";
import { EmptyList } from "../EmptyList";

export function TasksList() {
  return (
    <View style={styles.todo}>
      <FlatList
        data={""}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Todo
            key={item}
            description={item}
            onRemove={() => handleToDoRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => <EmptyList />}
      />
    </View>
  );
}
