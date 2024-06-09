import React from 'react';
import Routes from './src/routes';
import { NativeBaseProvider, extendTheme } from 'native-base';

const theme = extendTheme({
  fontConfig: {
    Poppins: {
      100: { fontFamily: 'Poppins-Light', fontWeight: '100' },
      200: { fontFamily: 'Poppins-Light', fontWeight: '200' },
      300: { fontFamily: 'Poppins-Light', fontWeight: '300' },
      400: { fontFamily: 'Poppins-Regular', fontWeight: '400' },
      500: { fontFamily: 'Poppins-Medium', fontWeight: '500' },
      600: { fontFamily: 'Poppins-SemiBold', fontWeight: '600' },
      700: { fontFamily: 'Poppins-Bold', fontWeight: '700' },
      800: { fontFamily: 'Poppins-Bold', fontWeight: '800' },
      900: { fontFamily: 'Poppins-Bold', fontWeight: '900' },
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
    mono: 'Poppins',
  },
});

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <Routes />
    </NativeBaseProvider>
  );
}
