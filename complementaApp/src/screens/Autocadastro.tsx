import React, { useState } from 'react';
import {
	View,
	Text,
	Button,
	StyleSheet,
	Alert,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
} from 'react-native';
import { Input } from '../components/input';
import { useNavigation } from '@react-navigation/native';

const Autocadastro: React.FC = () => {
	const [name, setName] = useState('');
	const [nameError, setNameError] = useState('');
	const [email, setEmail] = useState('');
	const [emailError, setEmailError] = useState('');
	const [password, setPassword] = useState('');
	const [passwordError, setPasswordError] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [confirmPasswordError, setConfirmPasswordError] = useState('');

	const navigation = useNavigation();

	const validateName = (value: string) => {
		if (value.trim().length === 0) {
			setNameError('Nome não pode ser vazio');
		} else if (value.length < 10 || value.length > 100) {
			setNameError('Nome deve ter entre 10 e 100 caracteres');
		} else if (!/^[a-zA-Z\s]*$/.test(value)) {
			setNameError('Nome deve conter apenas letras e espaços');
		} else {
			setNameError('');
		}
	};

	const validateEmail = (value: string) => {
		if (value.trim().length === 0) {
			setEmailError('Email não pode ser vazio');
		} else if (!value.includes('@')) {
			setEmailError('Email inválido');
		} else if (value == '@ufpr.br'){
			setEmailError('Preencha o email corretamente')
			setEmail('');
		}
		else {
			setEmailError('');
		}
	};

	const validatePassword = (value: string) => {
		if (value.trim().length === 0) {
			setPasswordError('Senha não pode ser vazia');
		} else if (value.length < 6) {
			setPasswordError('Senha deve ter no mínimo 6 caracteres');
		} else {
			setPasswordError('');
		}
	};

	const validateConfirmPassword = (value: string) => {
		if (value.trim().length === 0) {
			setConfirmPasswordError('Confirmação de senha não pode ser vazia');
		} else if (value !== password) {
			setConfirmPasswordError('As senhas não coincidem');
		} else {
			setConfirmPasswordError('');
		}
	};

	const handleRegister = async () => {
		// Verifica se há erros nos campos
		if (nameError || emailError || passwordError || confirmPasswordError) {
			Alert.alert('Erro', 'Por favor, corrija os campos inválidos');
			return;
		}

		// Validação adicional para campos vazios
		if (!name || !email || !password || !confirmPassword) {
			Alert.alert('Erro', 'Por favor, preencha todos os campos');
			return;
		}

		try {
			const response = await fetch('http://192.168.1.3:3000/users', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, password, role: 'user' }),
			});

			if (response.ok) {
				Alert.alert('Sucesso', 'Usuário cadastrado com sucesso');
				navigation.navigate('Login');
				setName('');
				setEmail('');
				setPassword('');
				setConfirmPassword('');
			} else {
				Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário');
			}
		} catch (error) {
			console.error(error);
			Alert.alert('Erro', 'Ocorreu um erro ao cadastrar o usuário');
		}
	};

	const handleEmailChange = (text: string) => {
		setEmail(text);
		if (text.includes('@')) {
			// Autocomplete com "@ufpr.br" se o usuário digita '@'
			setEmail(text.split('@')[0] + '@ufpr.br');
			validateEmail(text.split('@')[0] + '@ufpr.br');
		}
		validateEmail(text);
	};

	const dismissKeyboard = () => {
		Keyboard.dismiss();
	};

	return (
		<TouchableWithoutFeedback onPress={dismissKeyboard}>
			<KeyboardAvoidingView
				style={styles.container}
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
				keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 0}
			>
				<View style={styles.inner}>
					<Text style={styles.title}>Cadastro de Usuário</Text>
					<Input
						placeholder="Nome"
						value={name}
						onChangeText={(text) => {
							setName(text);
							validateName(text);
						}}
					/>
					{nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}
					<Input
						placeholder="Email"
						value={email}
						onChangeText={handleEmailChange}
						keyboardType="email-address"
						autoCapitalize="none"
					/>
					{emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}
					<Input
						style={styles.passwordInput}
						placeholder="Senha"
						value={password}
						onChangeText={(text) => {
							setPassword(text);
							validatePassword(text);
						}}
						secureTextEntry
					/>
					{passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
					<Input
						style={styles.passwordInput}
						placeholder="Confirmar Senha"
						value={confirmPassword}
						onChangeText={(text) => {
							setConfirmPassword(text);
							validateConfirmPassword(text);
						}}
						secureTextEntry
					/>
					{confirmPasswordError ? (
						<Text style={styles.errorText}>{confirmPasswordError}</Text>
					) : null}

					<View style={styles.btns}>
						<Button title="Cadastrar" onPress={handleRegister} color="#3199e9" />
						<Button
							title="Voltar"
							onPress={() => {
								if (email || password || name || confirmPassword) {
									Alert.alert(
										'Voltar',
										'Deseja voltar para a tela de login?',
										[
											{
												text: 'Cancelar',
												style: 'cancel',
											},
											{
												text: 'Voltar',
												onPress: () => navigation.navigate('Login'),
											},
										],
										{ cancelable: false }
									);
								} else {
									navigation.navigate('Login');
								}
							}}
							color="#3199e9"
						/>
					</View>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	btns: {
		marginTop: 20,
		display: 'flex',
		gap: 10,
		flexDirection: 'column',
		justifyContent: 'space-between',
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
	errorText: {
		color: 'red',
		marginBottom: 10,
	},
	passwordInput: {
		paddingRight: 40,
	},
});

export default Autocadastro;
