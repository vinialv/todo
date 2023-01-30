import React, { useState } from "react";
import { Text, View, Image, Alert, FlatList } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header";
import { ToDoInput } from "../../components/ToDoInput";
import { Task, TasksList } from "../../components/TasksList";
import { Teste } from "../../components/Teste";


export function Home() {

  const [tasks, setTasks] = useState<Task[]>([]);

  function handleAddTask(newTaskTitle: string) {
    const taskSameTitle = tasks.find((task) => task.title === newTaskTitle);

    if (taskSameTitle) {
      return Alert.alert("Tarefa já cadastrada", "Você não pode cadastrar com o mesmo nome");
    }

    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      done: false,
    };
    setTasks((oldTasks) => [...tasks, newTask]);
  }

  function handleToggleTaskDone(id: number){
    const updatedTasks = tasks.map((task) => ({ ...task }));
    const taskToBeMarketAsDone = updatedTasks.find((item) => item.id === id);

    if (!taskToBeMarketAsDone) return;

    taskToBeMarketAsDone.done = !taskToBeMarketAsDone.done;

    setTasks(updatedTasks); //assincrono
  }

  function handleToDoRemove(id: number) {
    Alert.alert("Remover tarefa", `Tem certeza que você deseja remover esse item?`, [
      {
        text: "Sim",
        onPress: () => {
          const updatedTasks = tasks.filter((task) => task.id !== id);
          setTasks(updatedTasks);
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

      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleToDoRemove}
      />

    </View>
  );
}
