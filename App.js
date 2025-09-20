import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';

export default function App() {
  // Estados globais da aplicação
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentScreen, setCurrentScreen] = useState('home');

  // TODO: Backend - Implementar persistência de estado de autenticação
  // Usar AsyncStorage ou SecureStore para manter login entre sessões
  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentScreen('home');
  };

  // TODO: Backend - Implementar invalidação de token no logout
  // Chamar endpoint POST /auth/logout para invalidar JWT
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentScreen('home');
  };

  // Sistema de navegação entre telas
  const handleNavigation = (screen) => {
    setCurrentScreen(screen);
  };

  // Renderização condicional baseada no estado de autenticação
  const renderScreen = () => {
    if (!isLoggedIn) {
      return <LoginScreen onLogin={handleLogin} />;
    }

    switch (currentScreen) {
      case 'home':
        return <HomeScreen onLogout={handleLogout} onNavigation={handleNavigation} />;
      case 'profile':
        return <ProfileScreen onLogout={handleLogout} onNavigation={handleNavigation} />;
      default:
        return <HomeScreen onLogout={handleLogout} onNavigation={handleNavigation} />;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      {renderScreen()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
