import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack
        screenOptions={{
          headerTitleAlign: 'center',
          headerTitleStyle:{
            fontWeight:"bold"
          },
          headerShadowVisible: false, // Cleaner look
          headerStyle: { backgroundColor: '#f9fafb' } // Match background
        }}
      >
        <Stack.Screen
          name="index"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="screenTwo"
          options={{
            title: 'Language',
          }}
        />
        <Stack.Screen
          name="profilelogin"
          options={{
            title: 'Login',
          }}
        />
      </Stack>
  );
}