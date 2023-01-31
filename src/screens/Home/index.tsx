import React, { useState } from "react";
import { Text, View, Image, Alert, FlatList } from "react-native";

import { styles } from "./styles";
import { Header } from "../../components/Header";
import { ToDoInput } from "../../components/ToDoInput";
import { Task, TasksList } from "../../components/TasksList";
import { TaskCounter } from "../../components/TaskCounter";

export function Home() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [counterCreated, setCounterCreated] = useState(0);
  const [counterConcluded, setCounterConcluded] = useState(0);

  function handleAddTask(newTaskTitle: string) {
    const taskSameTitle = tasks.find((task) => task.title === newTaskTitle);

    if (taskSameTitle) {
      return Alert.alert(
        "Tarefa já cadastrada",
        "Você não pode cadastrar com o mesmo nome"
      );
    }

    const newTask = {
      id: tasks.length + 1,
      title: newTaskTitle,
      done: false,
    };
    setTasks((oldTasks) => [...tasks, newTask]);
    setCounterCreated(counterCreated + 1);
  }

  function handleToggleTaskDone(id: number) {
    const updatedTasks = tasks.map((task) => ({ ...task }));    
    const taskToBeMarketAsDone = updatedTasks.find((item) => item.id === id);
    const tasksConcluded = tasks.filter((task) => task.done == true).length;  
    
    if (!taskToBeMarketAsDone) return;
    
    taskToBeMarketAsDone.done = !taskToBeMarketAsDone.done;
    
    setCounterConcluded(tasksConcluded); //assincrono
    setTasks(updatedTasks); //assincrono
  }

  function handleToDoRemove(id: number) {
    Alert.alert(
      "Remover tarefa",
      `Tem certeza que você deseja remover esse item?`,
      [
        {
          text: "Sim",
          onPress: () => {
            const updatedTasks = tasks.filter((task) => task.id !== id);
            setTasks(updatedTasks);
            setCounterCreated(counterCreated - 1);
          },
        },
        {
          text: "Não",
          style: "cancel",
        },
      ]
    );
  }

  return (
    <View style={styles.container}>
      <Header />
      <ToDoInput addTask={handleAddTask} />
      <TaskCounter
        counterCreated={counterCreated}
        counterConcluded={counterConcluded}        
      />
      <TasksList
        tasks={tasks}
        toggleTaskDone={handleToggleTaskDone}
        removeTask={handleToDoRemove}
      />
    </View>
  );
}
