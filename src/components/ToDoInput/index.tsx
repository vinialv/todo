import React, { useState } from "react";
import { TextInput, TouchableOpacity, View, Image } from "react-native";

import { styles } from "./styles";

interface TodoInputProps {
  addTask: (task: string) => void;
}

export function ToDoInput({ addTask }: TodoInputProps) {
  const [task, setTask] = useState("");
  const [inputFocus, setInputFocus] = useState("#0D0D0D");
  const inputOnFocus = () => setInputFocus("#4EA8DE");
  const inputOnBlur = () => setInputFocus("#0D0D0D"); 

  function handleAddNewTask() {
    if (!task) return;
    addTask(task);   
    setTask("");
  }

  return (
    <View style={styles.form}>
      <TextInput
        onFocus={inputOnFocus}
        onBlur={inputOnBlur}
        style={[styles.input, { borderColor: inputFocus }]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor="#7F7F7F"
        onChangeText={setTask}
        value={task}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddNewTask}>
        <Image
          style={styles.buttonImagem}
          source={require("../../assets/button-plus.png")}
        />
      </TouchableOpacity>
    </View>
  );
}
