import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEye, faEyeSlash} from '@fortawesome/free-solid-svg-icons';
import {User} from '../models/models';
import {Input} from '../components/input';

interface LoginScreenProps {
  onLogin: (user: User) => void;
}

const Login: React.FC<LoginScreenProps> = ({onLogin}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigation = useNavigation();

  const handleNavigateToRegister = () => {
    navigation.navigate('Register');
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.1.3:3000/users');
      const users: User[] = await response.json();
      const user = users.find(
        u => u.email === email && u.password === password,
      );

      if (user) {
        onLogin(user);
      } else {
        Alert.alert('Erro', 'Email ou senha inválidos');
      }
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Ocorreu um erro ao fazer login');
    }
  };

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <KeyboardAvoidingView
        style={styles.inner}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
      >
        <View style={styles.container}>
          <Image style={styles.logo} source={require('../assets/logo.png')} />
          <Text style={styles.title}>Login</Text>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <View style={styles.passwordContainer}>
            <Input
              style={[styles.passwordInput]}
              placeholder="Senha"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}>
              <FontAwesomeIcon
                icon={showPassword ? faEye : faEyeSlash}
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.btnEntry}>
            <Button title="Entrar" onPress={handleLogin} color="#3199e9" />
          </View>
          <Text style={styles.signupText}>
            Não tem uma conta?{' '}
            <Text style={styles.signupLink} onPress={handleNavigateToRegister}>
              Cadastre-se
            </Text>
          </Text>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  btnEntry: {
    marginTop: 20,
  },
  logo: {
    width: 250,
    marginBottom: -40,
    resizeMode: 'contain',
    display: 'flex',
    alignSelf: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#3199e9',
    marginBottom: 24,
    textAlign: 'center',
  },

  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 40,
  },

  signupText: {
    marginTop: 16,
    textAlign: 'center',
    color: '#000',
  },
  signupLink: {
    color: '#0dd658',
    fontWeight: 'bold',
  },
  eyeIcon: {
    position: 'absolute',
    right: 10,
    top: '50%',
    transform: [{translateY: -10}],
  },
});

export default Login;
