import React, { useState } from 'react';
import { Center, Heading, VStack, Button, ScrollView, Text, View } from 'native-base';
import { Alert, StyleSheet } from 'react-native';
import { Input } from '../components/input';
import { TextArea } from '../components/textArea';
import { Atividade } from '../models/models';
import { goBack } from '@react-navigation/routers/lib/typescript/src/CommonActions';

export default function CreateActivity({ navigation }: { navigation: any }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const url = 'http://192.168.1.3:3000/activities';

  function saveActivity() {
    // Validar campos de entrada
    if (name.length < 10) {
      Alert.alert('Título da atividade deve ter pelo menos 10 caracteres.');
      return;
    }

    if (description.length < 20) {
      Alert.alert('Descrição da atividade deve ter pelo menos 20 caracteres.');
      return;
    }

    const activity = {
      id: Math.random().toString(36).substring(7),
      name: name,
      description: description,
      status: 3,
      executor: 'Nenhum executor cadastrado para essa atividade',
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(activity),
    })
      .then(response => response.json())
      .then(() => {
        // Depois de salvar, limpa os campos e volta para a tela de atividades
        setName('');
        setDescription('');
        navigation.navigate('ActivityList');
        Alert.alert('Atividade criada com sucesso!');
      })
      .catch(error => {
        console.error('Error saving activity:', error);
        Alert.alert('Erro ao salvar atividade. Por favor, tente novamente.');
      });
  }

  return (
    <ScrollView >
      <View style={styles.container}>
        <Text style={styles.label}>Titulo da atividade:</Text>
        <Input
          placeholder="Nome"
          value={name}
          onChangeText={text => setName(text)}
        />
        <Text style={styles.label}>Descrição da atividade:</Text>
        <TextArea
          placeholder="Descrição"
          value={description}
          onChangeText={text => setDescription(text)}
        />
        <Button style={styles.buttonNew} onPress={saveActivity}>
          Salvar
        </Button>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({

  buttonNew: {
    backgroundColor: '#00C299',
    borderRadius: 12,
    marginTop: 20,
  },
  label: {
    fontSize: 18,
    marginTop: 10,
  },
  container: {
    flex: 1,
    padding: 20,
  },
});
