import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Image} from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../assets/logo.png')} />
      <Text style={styles.titulo}>Bem vindo ao Complementa!</Text>
      <Text style={styles.descricao}>
        O aplicativo de horas formativas da UFPR
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 250,
    marginBottom: -40,
    resizeMode: 'contain',
    top: -280,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titulo: {
    flexDirection: 'row',
    fontSize: 24,
    fontWeight: 'bold',
  },
  descricao: {
    fontSize: 16,
    color: '#666',
  },
});

export default Home;
