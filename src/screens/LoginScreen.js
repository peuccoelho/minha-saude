import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Componente de ícone personalizado para cartão de saúde
// TODO: Backend - Implementar endpoint para validação de cartão de saúde
const HealthCardIcon = ({ size = 80 }) => (
  <View style={styles.healthCardContainer}>
    {/* Cartão principal */}
    <View style={styles.cardBackground}>
      {/* Coração com cruz médica */}
      <View style={styles.heartContainer}>
        <Ionicons name="heart" size={24} color="black" />
        <Ionicons name="medical" size={12} color="black" style={styles.medicalCross} />
      </View>
      
      {/* Ícone de pessoa */}
      <View style={styles.personContainer}>
        <Ionicons name="person" size={20} color="black" />
      </View>
      
      {/* Linhas de texto */}
      <View style={styles.textLines}>
        <View style={styles.textLine} />
        <View style={styles.textLine} />
      </View>
    </View>
    
    {/* Aba do cartão */}
    <View style={styles.cardTab} />
  </View>
);

const LoginScreen = ({ onLogin }) => {
  // Estados para captura de dados do formulário
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  // Função de autenticação - substituir por chamada real para API
  // TODO: Backend - Implementar endpoint POST /auth/login
  // Payload: { username: string, password: string }
  // Response: { token: string, user: UserObject, expiresIn: number }
  const handleLogin = () => {
    if (!login || !senha) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }
    
    // TODO: Backend - Implementar validação de credenciais
    // TODO: Backend - Implementar geração de JWT token
    // TODO: Backend - Implementar rate limiting para tentativas de login
    Alert.alert('Sucesso', 'Login realizado com sucesso!', [
      { text: 'OK', onPress: onLogin }
    ]);
  };

  // TODO: Backend - Implementar endpoint POST /auth/register
  // Payload: { username: string, email: string, password: string, confirmPassword: string }
  const handleRegister = () => {
    Alert.alert('Registro', 'Redirecionando para tela de registro...');
  };

  // TODO: Backend - Implementar endpoint POST /auth/forgot-password
  // Payload: { email: string }
  // Response: { message: string, resetToken?: string }
  const handleForgotPassword = () => {
    Alert.alert('Recuperar Senha', 'Redirecionando para recuperação de senha...');
  };

  // TODO: Backend - Implementar endpoint GET /support/help
  // Response: { faq: FAQItem[], contactInfo: ContactInfo }
  const handleHelp = () => {
    Alert.alert('Ajuda', 'Entre em contato conosco para suporte');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.iconContainer}>
            <HealthCardIcon size={80} />
          </View>
          <Text style={styles.title}>HEALTH CARD</Text>
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Login"
              placeholderTextColor="#999"
              value={login}
              onChangeText={setLogin}
              autoCapitalize="none"
              autoCorrect={false}
            />
            <View style={styles.inputLine} />
          </View>

          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Senha"
              placeholderTextColor="#999"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              autoCapitalize="none"
            />
            <View style={styles.inputLine} />
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>ENTRAR</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
            <Text style={styles.registerButtonText}>Registre-se aqui</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={styles.forgotPasswordText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.helpButton} onPress={handleHelp}>
          <Text style={styles.helpButtonText}>?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4A90E2', 
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    alignItems: 'center',
    marginBottom: 60,
  },
  iconContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    letterSpacing: 2,
  },
  inputContainer: {
    marginBottom: 40,
  },
  inputWrapper: {
    marginBottom: 30,
  },
  input: {
    fontSize: 16,
    color: 'black',
    paddingVertical: 10,
    paddingHorizontal: 0,
  },
  inputLine: {
    height: 1,
    backgroundColor: 'white',
    marginTop: 5,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 15,
    borderRadius: 0,
    minWidth: 200,
  },
  loginButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
  registerButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 40,
    marginBottom: 20,
    borderRadius: 0,
    minWidth: 200,
  },
  registerButtonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  forgotPasswordText: {
    color: 'black',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  helpButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  helpButtonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  healthCardContainer: {
    position: 'relative',
    width: 80,
    height: 80,
  },
  cardBackground: {
    position: 'absolute',
    top: 10,
    left: 10,
    width: 60,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 5,
    padding: 8,
  },
  cardTab: {
    position: 'absolute',
    top: 5,
    right: 5,
    width: 15,
    height: 15,
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  heartContainer: {
    position: 'absolute',
    top: 5,
    left: 5,
  },
  medicalCross: {
    position: 'absolute',
    top: 6,
    left: 6,
  },
  personContainer: {
    position: 'absolute',
    top: 5,
    right: 5,
  },
  textLines: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
  },
  textLine: {
    height: 2,
    backgroundColor: 'black',
    marginBottom: 2,
  },
});

export default LoginScreen;
