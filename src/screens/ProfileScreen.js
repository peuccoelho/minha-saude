import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
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

const ProfileScreen = ({ onLogout, onNavigation }) => {
  // TODO: Backend - Implementar endpoint GET /user/profile
  // Response: { id: string, name: string, email: string, phone: string, birthDate: string, city: string }
  const handleEditProfile = () => {
    Alert.alert('Editar Perfil', 'Redirecionando para edição de perfil...');
  };

  // TODO: Backend - Implementar endpoint PUT /user/profile
  // Payload: { name?: string, email?: string, phone?: string, birthDate?: string, city?: string }
  const handleChangePassword = () => {
    Alert.alert('Alterar Senha', 'Redirecionando para alteração de senha...');
  };

  // TODO: Backend - Implementar endpoint PUT /user/notifications
  // Payload: { emailNotifications: boolean, pushNotifications: boolean, smsNotifications: boolean }
  const handleNotifications = () => {
    Alert.alert('Notificações', 'Configurando notificações...');
  };

  // TODO: Backend - Implementar endpoint PUT /user/privacy
  // Payload: { profileVisibility: string, dataSharing: boolean, analyticsOptIn: boolean }
  const handlePrivacy = () => {
    Alert.alert('Privacidade', 'Configurando privacidade...');
  };

  // TODO: Backend - Implementar endpoint GET /support/help
  // Response: { faq: FAQItem[], contactInfo: ContactInfo }
  const handleHelp = () => {
    Alert.alert('Ajuda', 'Entre em contato conosco para suporte');
  };

  // Sistema de navegação entre telas
  const handleNavigation = (screen) => {
    if (screen === 'Configurações') {
      Alert.alert('Configurações', 'Deseja fazer logout?', [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Logout', onPress: onLogout }
      ]);
    } else if (screen === 'Home') {
      onNavigation('home');
    } else {
      Alert.alert('Navegação', `Navegando para ${screen}...`);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.profileSection}>
          <View style={styles.profileIcon}>
            <Ionicons name="person" size={32} color="#8B5CF6" />
          </View>
          <Text style={styles.userName}>Joaquim Silva</Text>
        </View>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.userInfoCard}>
          <View style={styles.infoRow}>
            <Ionicons name="mail" size={20} color="#4A90E2" />
            <Text style={styles.infoLabel}>Email:</Text>
            <Text style={styles.infoValue}>joaquim.silva@email.com</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Ionicons name="call" size={20} color="#4A90E2" />
            <Text style={styles.infoLabel}>Telefone:</Text>
            <Text style={styles.infoValue}>(11) 99999-9999</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Ionicons name="calendar" size={20} color="#4A90E2" />
            <Text style={styles.infoLabel}>Data de Nascimento:</Text>
            <Text style={styles.infoValue}>15/03/1985</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Ionicons name="location" size={20} color="#4A90E2" />
            <Text style={styles.infoLabel}>Cidade:</Text>
            <Text style={styles.infoValue}>São Paulo - SP</Text>
          </View>
        </View>

        <View style={styles.optionsContainer}>
          <TouchableOpacity style={styles.optionButton} onPress={handleEditProfile}>
            <Ionicons name="create" size={24} color="black" />
            <Text style={styles.optionText}>Editar Perfil</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={handleChangePassword}>
            <Ionicons name="lock-closed" size={24} color="black" />
            <Text style={styles.optionText}>Alterar Senha</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={handleNotifications}>
            <Ionicons name="notifications" size={24} color="black" />
            <Text style={styles.optionText}>Notificações</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={handlePrivacy}>
            <Ionicons name="shield-checkmark" size={24} color="black" />
            <Text style={styles.optionText}>Privacidade</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionButton} onPress={handleHelp}>
            <Ionicons name="help-circle" size={24} color="black" />
            <Text style={styles.optionText}>Ajuda</Text>
            <Ionicons name="chevron-forward" size={20} color="#999" />
          </TouchableOpacity>
        </View>
      </ScrollView>

      <View style={styles.bottomNavigation}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => handleNavigation('Calendário')}
        >
          <Ionicons name="calendar" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => handleNavigation('Home')}
        >
          <Ionicons name="home" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.navItem, styles.activeNavItem]} 
          onPress={() => handleNavigation('Perfil')}
        >
          <View style={styles.activeNavIcon}>
            <Ionicons name="person" size={24} color="black" />
          </View>
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
    alignItems: 'center',
  },
  profileIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E5E7EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 3,
    borderColor: 'white',
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  content: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  userInfoCard: {
    backgroundColor: 'white',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10,
    minWidth: 120,
  },
  infoValue: {
    fontSize: 16,
    color: '#666',
    flex: 1,
  },
  optionsContainer: {
    marginBottom: 20,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginBottom: 10,
    borderRadius: 0,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    flex: 1,
    marginLeft: 15,
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

export default ProfileScreen;
