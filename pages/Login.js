import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import InputText from '../component/InputText';
import ButtonComponent from '../component/Button';
import Konfirmasi from '../component/Konfirmasi';
import IconButton from '../component/IconButton';
import Headline from '../component/Headline';

const Login = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <View>
                <View style={{
                    marginBottom: 50,
                }}>
                    <Headline text="Login" />
                </View>

                <View style={{}}>
                    <InputText placeholder="Email" />
                    <InputText placeholder="Password" passwordRules="*" />
                </View>

                <View style={{
                    marginTop: -10,
                    marginLeft: 130,
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
                        <Konfirmasi text="Forgot your password?" />
                    </TouchableOpacity>
                </View>

                <View style={{}}>
                    <ButtonComponent backgroundColor="#FF0000" text="LOGIN" />
                </View>

                <View style={{
                    marginTop: 80,
                }}>
                    <Konfirmasi text="Or login with social account" />
                </View>

                <View style={{
                    marginTop: 0,
                }}>
                    <View style={{
                        flexDirection: 'row',
                        gap: 20,
                        marginTop: -25,
                        justifyContent: 'center',
                    }}>
                        <IconButton imageSource={require('../assets/google.png')} />
                        <IconButton imageSource={require('../assets/facebook.png')} />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;