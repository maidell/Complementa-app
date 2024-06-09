import { Center, Heading, Input as InputNativeBase, VStack } from 'native-base';
import { StyleSheet } from 'react-native';
import { Input } from '../components/input';
import { TextArea } from '../components/textArea';

export default function CreateActivity() {

  /**
   * @Instrução para acessar a API
   */ const url = 'http://192.168.1.3:3000/activities';
	function setName(text: any) {
		throw new Error('Function not implemented.');
	}

	function setDescription(text: any) {
		throw new Error('Function not implemented.');
	}

	//formulario com campo name, description os campos são obrigatórios
	//status e executor não sao campos, vao ser enviados com valor default
	return(
		<VStack flex={1} px={10}>
			<Center>
				<Heading m={24}>
					Nova Atividade
				</Heading>
				<Input placeholder="Nome" />
				<TextArea placeholder="Descrição" />
			</Center>
		</VStack>
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
	input: {
		borderWidth: 1,
		borderColor: 'black',
		padding: 10,

		borderRadius: 20
	},
	inputArea: {
		marginTop: 10,
		// borderWidth: 1,
		// borderColor: 'black',
		// padding: 10,

		// borderRadius: 20
	}
});


