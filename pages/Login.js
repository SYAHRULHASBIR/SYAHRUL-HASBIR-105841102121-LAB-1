import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Email" 
        defaultValue="muffin.sweet@gmail.com"
      />
      <TextInput 
        style={styles.input} 
        placeholder="Password" 
        secureTextEntry={true}
      />
      
      <Text style={styles.forgotPassword}>Forgot your password?</Text>
      
      <TouchableOpacity style={styles.loginButton}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
      
      <Text style={styles.orText}>Or login with social account</Text>
      
      <View style={styles.socialButtonsContainer}>
        <TouchableOpacity style={styles.socialButton}>
          <Image 
            source={require('../assets/google.png')}
            style={styles.socialButtonIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialButton}>
          <Image 
            source={require('../assets/facebook.png')}
            style={styles.socialButtonIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: 'red',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: 'red',
    borderRadius: 5,
    paddingVertical: 15,
    alignItems: 'center',
    marginBottom: 20,
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginBottom: 20,
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
  },
  socialButtonIcon: {
    width: 30,
    height: 30,
  },
});

export default LoginScreen;
