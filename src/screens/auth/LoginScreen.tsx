import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	ScrollView,
	TouchableOpacity,
	View,
	KeyboardAvoidingView,
	Image,
} from 'react-native';
import { TextInput } from '@/components'
import { supabase } from '@/supabase/initSupabase';
import { AuthStackParamList } from '@/types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import RideHubbLogo from '@/images/ridehubb.png';
import { useTheme as useThemeCustom } from '@/providers/ThemeProvider';

import {
	Text,
	Button,
	useTheme,
	MD3LightTheme as DefaultTheme,
} from 'react-native-paper';

const Login = ({ navigation }: any) => {
	const { colors: themeColor, dark: isDarkmode } = useTheme();
	const { setTheme } = useThemeCustom();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	const login = async ()  => {
		setLoading(true);
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});
		if (!error && !data.user) {
			setLoading(false);
			alert('Revisa tu correo para el enlace de inicio de sesión!');
		}
		if (error) {
			setLoading(false);
			alert(error.message);
		}
	}
	

	return (
		<KeyboardAvoidingView behavior="height" enabled style={{ flex: 1 }}>
			{/* <Layout> */}
			<ScrollView
				contentContainerStyle={{
					flexGrow: 1,
				}}
			>
				<View
					style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						backgroundColor: isDarkmode
							? '#17171E'
							: '#f5f5f4',
					}}
				>
					<Image
						resizeMode="contain"
						style={{
							height: 220,
							width: '100%',
							marginTop: 30,
						}}
						source={RideHubbLogo}
					/>
				</View>
				<View
					style={{
						flex: 3,
						paddingHorizontal: 20,
						paddingBottom: 20,
						backgroundColor: isDarkmode
							? '#27272a'
							: '#fff',
					}}
				>
					<Text
						variant='titleMedium'
						style={{
							alignSelf: 'center',
							padding: 30,
						}}
					>
						Iniciar sesión
					</Text>
					<Text>Correo</Text>
					<TextInput
						containerStyle={{ marginTop: 15 }}
						placeholder="Ingresa tu correo"
						value={email}
						autoCapitalize="none"
						autoCorrect={false}
						keyboardType="email-address"
						onChangeText={(text) => setEmail(text)}
					/>

					<Text style={{ marginTop: 15 }}>Contraseña</Text>
					<TextInput
						containerStyle={{ marginTop: 15 }}
						placeholder="Ingresa tu contraseña"
						value={password}
						autoCapitalize="none"
						autoCorrect={false}
						secureTextEntry={true}
						onChangeText={(text) => setPassword(text)}
					/>

					<Button
						onPress={() => {
							login();
						}}
						style={{
							marginTop: 20,
						}}
						disabled={loading}
						loading={loading}
					>
						{loading ? 'Cargando' : 'Continuar'}
					</Button>

					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginTop: 15,
							justifyContent: 'center',
						}}
					>
						<Text>
							¿No tienes una cuenta?
						</Text>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate(
									'Register'
								);
							}}
						>
							<Text
								variant='titleMedium'
								style={{
									marginLeft: 5,
								}}
							>
								Registrate aquí
							</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginTop: 10,
							justifyContent: 'center',
						}}
					>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate(
									'ForgetPassword'
								);
							}}
						>
							<Text>
								¿Olvidaste tu contraseña?
							</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginTop: 30,
							justifyContent: 'center',
						}}
					>
						<TouchableOpacity
							onPress={() => {
								isDarkmode ? setTheme("light") : setTheme("dark");
							}}
						>
							<Text
								// size="md"
								// fontWeight="bold"
								style={{
									marginLeft: 5,
								}}
							>
								{isDarkmode
									? '☀️ tema claro'
									: '🌑 tema oscuro'}
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</ScrollView>
			{/* </Layout> */}
		</KeyboardAvoidingView>
	);
}

export default Login;