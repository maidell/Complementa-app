import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {Input} from '../components/input';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {Button} from 'native-base';

interface ProfileProps {
  onLogout: () => void;
}

const Profile: React.FC<ProfileProps> = ({onLogout}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSaveProfile = () => {
    console.log('Nome:', name);
    console.log('Email:', email);
    console.log('Senha:', password);
    Alert.alert('Perfil salvo com sucesso!');
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleLogout = () => {
    onLogout();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <Text style={styles.label}>Nome:</Text>
        <Input
          value={name}
          onChangeText={setName}
          placeholder="Digite seu nome"
        />
        <Text style={styles.label}>Email:</Text>
        <Input
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />
        <Text style={styles.label}>Senha:</Text>
        <View>
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
            secureTextEntry={!showPassword}
            style={styles.input}
          />
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.eyeIcon}>
            <FontAwesomeIcon
              icon={showPassword ? faEye : faEyeSlash}
              size={20}
            />
          </TouchableOpacity>
        </View>
        <Button style={styles.buttonNew} onPress={handleSaveProfile}>
          Salvar
        </Button>
        <Button style={styles.buttonLogout} onPress={handleLogout}>
          Sair
        </Button>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
    marginTop: 10,
    fontFamily: 'Poppins-Regular',
  },
  input: {
    height: 40,
    flex: 1,
    paddingRight: 40,
  },
  buttonNew: {
    marginTop: 20,
    backgroundColor: '#00C299',
    borderRadius: 12,
  },
  buttonLogout: {
    marginTop: 10,
    backgroundColor: '#3199e9',
    borderRadius: 12,
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{translateY: -10}],
  },
});

export default Profile;
