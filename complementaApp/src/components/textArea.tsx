import { TextArea as NativeBaseImput, IInputProps } from 'native-base';

export function TextArea({ ...rest }: IInputProps) {
	return (
		<NativeBaseImput
			autoCompleteType={undefined} bg="gray.700"
			fontSize="md"
			h={40}
			{...rest}		/>
	)
}
