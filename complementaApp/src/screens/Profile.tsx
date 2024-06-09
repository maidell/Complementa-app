import React from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';

const Profile = () => {
  return (

      <View style={styles.container}>
        <Text style={styles.titulo}>Bem-vindo ao meu App!</Text>
        <Text style={styles.descricao}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat, accusamus magni sequi at nulla, dolor, id quas doloremque quo iste voluptate! Dolor, amet reprehenderit veritatis expedita in impedit non laudantium.
        </Text>
        <Button
          title={'Profile'}
          color="#44bbff"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 20,
  },
  descricao: {
    fontSize: 16,
    color: '#666',
  },
});

export default Profile;
