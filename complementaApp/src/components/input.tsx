import {Input as NativeBaseImput, IInputProps} from 'native-base';

export function Input({...rest}: IInputProps) {
  return (
    <NativeBaseImput
      bg="gray.200"
      marginTop={4}
      placeholderTextColor="gray.600"
      fontSize="md"
      h={16}
      borderRadius={12}
      {...rest}
    />
  );
}
