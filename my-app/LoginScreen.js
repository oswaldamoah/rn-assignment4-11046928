import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    if (email && name) {
      // Navigate to Home screen and pass email and name
      navigation.navigate('Home', { email: email, name: name });
    } else {
      setError('Please enter both name and email.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Jobizz</Text>
      <Text style={styles.subtitle}>Welcome Back 👋</Text>
      <Text style={styles.description}>Let's log in. Apply to jobs!</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
        autoCapitalize="none"
        accessibilityLabel="Name"
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCompleteType="email"
        keyboardType="email-address"
        textContentType="emailAddress"
        accessibilityLabel="Email"
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Log in</Text>
      </TouchableOpacity>
      <Text style={styles.orText}>Or continue with</Text>
      <View style={styles.socialButtons}>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/apple.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/google.png')} style={styles.socialIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image source={require('./assets/facebook.png')} style={styles.socialIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.registerText}>Don't have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#20539D',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    marginBottom: 30,
    color: '#7A7A7A',
  },
  input: {
    height: 50,
    width: '100%',
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#20539D',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  orText: {
    fontSize: 16,
    color: '#7A7A7A',
    marginBottom: 10,
  },
  socialButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  socialButton: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  socialIcon: {
    width: 60,
    height: 40,
    resizeMode: 'contain',
  },
  registerText: {
    color: '#20539D',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
