import React from 'react';
import {
  View,
  Text,
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

const HomeScreen = ({ onLogout, onNavigation }) => {
  // TODO: Backend - Implementar endpoints para cada módulo:
  // GET /vaccination - Carteira de Vacinação
  // GET /medications - Guia de Remédios  
  // GET /exams - Área de Exames
  // GET /family - Cadastro Família
  const handleCardPress = (cardName) => {
    Alert.alert('Navegação', `Abrindo ${cardName}...`);
  };

  // Sistema de navegação entre telas
  const handleNavigation = (screen) => {
    if (screen === 'Configurações') {
      Alert.alert('Configurações', 'Deseja fazer logout?', [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Logout', onPress: onLogout }
      ]);
    } else if (screen === 'Perfil') {
      onNavigation('profile');
    } else {
      Alert.alert('Navegação', `Navegando para ${screen}...`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.profileIcon}>
            <Ionicons name="person" size={24} color="#8B5CF6" />
          </View>
          <Text style={styles.welcomeText}>Bem vindo, Joaquim</Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.cardsGrid}>
          <TouchableOpacity 
            style={styles.card} 
            onPress={() => handleCardPress('Carteira de Vacinação')}
          >
            <Text style={styles.cardText}>Carteira de Vacinação</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card} 
            onPress={() => handleCardPress('Guia de Remédios')}
          >
            <Text style={styles.cardText}>Guia de Remédios</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card} 
            onPress={() => handleCardPress('Área de Exames')}
          >
            <Text style={styles.cardText}>Área de Exames</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.card} 
            onPress={() => handleCardPress('Cadastro Família')}
          >
            <Text style={styles.cardText}>Cadastro Família</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => handleNavigation('Calendário')}
        >
          <Ionicons name="calendar" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navItem, styles.activeNavItem]} 
          onPress={() => handleNavigation('Home')}
        >
          <View style={styles.activeNavIcon}>
            <Ionicons name="home" size={24} color="black" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => handleNavigation('Perfil')}
        >
          <Ionicons name="person" size={24} color="black" />
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
  header: {
    backgroundColor: '#4A90E2',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 30,
  },
  cardsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  card: {
    width: 160,
    height: 120,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    marginHorizontal: 10,
    borderRadius: 0,
  },
  cardText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  bottomNavigation: {
    flexDirection: 'row',
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    paddingHorizontal: 20,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    padding: 10,
  },
  activeNavItem: {
    // Estilo especial para o item ativo
  },
  activeNavIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Estilos do ícone personalizado do cartão de saúde
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

export default HomeScreen;
