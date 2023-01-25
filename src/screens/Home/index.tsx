import React, { useState } from "react";
import { Text, View, Image, Alert, FlatList } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header";
import { ToDoInput } from "../../components/ToDoInput";
import { TasksList } from "../../components/TasksList";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskName: string) {
    const sameTaskName = tasks.find((task) => task.name === newTaskName);
    console.log(sameTaskName);

    if (sameTaskName)
      return Alert.alert(
        "Tarefa já cadastrada",
        "Não é possível inserir tarefas com nome repetido."
      );

    const newTask = {
      id: tasks.length + 1,
      name: newTaskName,
      done: false,
    };

    setTasks((oldTasks) => [...tasks, newTask]);
  }

  function handleToDoRemove(tarefa: string) {
    Alert.alert("Remover tarefa", `Você deseja remover a tarefa "${tarefa}"?`, [
      {
        text: "Sim",
        onPress: () => {
          console.log("remover tarefa");
        },
      },
      {
        text: "Não",
        style: "cancel",
      },
    ]);
  }

  return (
    <View style={styles.container}>
      <Header />
      <ToDoInput addTask={handleAddTask} />

      <View style={styles.totalToDo}>
        <View style={styles.totalCreated}>
          <Text style={styles.textTotalCreated}>Criadas</Text>
          <Text style={styles.textCounter}>0</Text>
        </View>
        <View style={styles.totalConcluded}>
          <Text style={styles.textTotalConcluded}>Concluídas</Text>
          <Text style={styles.textCounter}>0</Text>
        </View>
      </View>

      <TasksList  />

    </View>
  );
}
