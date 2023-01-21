import React, { useState } from "react";
import { Text, TextInput, View, Image, TouchableOpacity, Alert, FlatList } from "react-native";

import { styles } from "./styles";
import { Todo } from "../../components/Todo";
import { EmptyList } from "../../components/EmptyList";

export default function Home() {
  const [inputFocus, setInputFocus] = useState("#0D0D0D");
  const inputOnFocus = () => setInputFocus("#4EA8DE");
  const inputOnBlur = () => setInputFocus("#0D0D0D");

  const [countCreated, setCountCreated] = useState(0);

  const [toDos, setToDos] = useState<string[]>([]);
  const [toDosText, setToDosText] = useState('');


  function handleToDoAdd() {

    if (toDosText == '' || toDosText.length < 3) {
      return Alert.alert('Falha ao inserir','O nome da tarefa deve conter 3 ou mais caracteres.');
    }

    if (toDos.includes(toDosText)) {
      return Alert.alert(
        "Tarefa existente",
        "Já existe uma tarefa na lista com essa descrição."
      );
    }
    setToDos(prevState => [...prevState, toDosText]);
    setCountCreated(countCreated + 1);
    setToDosText('');
  }

  function handleToDoRemove(tarefa: string) {
    Alert.alert(
      "Remover tarefa",
      `Você deseja remover a tarefa "${tarefa}"?`,
      [
        {
          text: "Sim", 
          onPress: () => {
            setToDos(prevState => prevState.filter(todo => todo !== tarefa))
            setCountCreated(countCreated - 1)
          }
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
      <View style={styles.header}>
        <Image
          style={styles.logoImagem}
          source={require("../../assets/logo-todo.png")}
        />
      </View>
      <View style={styles.form}>
        <TextInput
          onFocus={inputOnFocus}
          onBlur={inputOnBlur}
          style={[styles.input, { borderColor: inputFocus }]}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor="#7F7F7F"
          onChangeText={setToDosText}
          value={toDosText}
        />
        <TouchableOpacity style={styles.button} onPress={handleToDoAdd}>
          <Image
            style={styles.buttonImagem}
            source={require("../../assets/button-plus.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.totalToDo}>
        <View style={styles.totalCreated}>
          <Text style={styles.textTotalCreated}>Criadas</Text>
          <Text style={styles.textCounter}>{countCreated}</Text>
        </View>
        <View style={styles.totalConcluded}>
          <Text style={styles.textTotalConcluded}>Concluídas</Text>
          <Text style={styles.textCounter}>0</Text>
        </View>
      </View>
      <View style={styles.todo}>
      <FlatList
        data={toDos}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Todo
            key={item}
            description={item}
            onRemove={() => handleToDoRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <EmptyList />
        )}
      />
      </View>
    </View>
  );
}
