import { TextArea as NativeBaseImput, IInputProps } from 'native-base';

export function TextArea({ ...rest }: IInputProps) {
	return (
		<NativeBaseImput
			autoCompleteType={undefined}
			fontSize="md"
			h={40}
			bg="gray.400"
			placeholderTextColor="gray.600"
			borderRadius={12}
			{...rest}/>
	)
}
