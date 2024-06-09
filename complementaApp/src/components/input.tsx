import { Input as NativeBaseImput, IInputProps } from 'native-base';

export function Input({ ...rest}: IInputProps){
	return (
		<NativeBaseImput
			bg="gray.700"
			fontSize="md"
			h={16}
			{...rest}
		/>
	)
}
