import React, { useState } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";

import { styles } from "./styles";
import Icon from "react-native-vector-icons/Feather";
import { Task } from "../TasksList";

type Props = {
  task: Task;
  toggleTaskDone: (id: number) => void;
  removeTask: (id: number) => void;
};

export function ToDo({ task, removeTask, toggleTaskDone }: Props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => toggleTaskDone(task.id)}
      >
        <View style={task.done ? styles.taskChecked : styles.taskUnchecked}>
          {task.done && <Icon name="check" size={18} color="#FFF" />}
        </View>
      </TouchableOpacity>
      <View style={styles.description}>
        <Text style={task.done ? styles.descriptionTextChecked : styles.descriptionText}>{task.title}</Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => removeTask(task.id)}
      >
        <Image source={require("../../assets/trash.png")} style={styles.trash}/>
      </TouchableOpacity>
    </View>
  );
}
