import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {
	ScrollView,
	TouchableOpacity,
	View,
	KeyboardAvoidingView,
	Image,
} from 'react-native';
import { supabase } from '../../supabase/initSupabase';
import { AuthStackParamList } from '../../types/navigation';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import {
	Text,
	Button,
	TextInput,
	useTheme,
	MD3LightTheme as DefaultTheme,
} from 'react-native-paper';

const Login = ({
	navigation,
}: any) => {
	const { colors: themeColor, dark: isDarkmode } = useTheme();
	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [loading, setLoading] = useState<boolean>(false);

	async function login() {
		setLoading(true);
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password,
		});
		if (!error && !data.user) {
			setLoading(false);
			alert('Check your email for the login link!');
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
							width: 220,
						}}
						source={require('../../../assets/images/login.png')}
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
						// fontWeight="bold"
						style={{
							alignSelf: 'center',
							padding: 30,
						}}
						// size="h3"
					>
						Login
					</Text>
					<Text>Email</Text>
					<TextInput
						// containerStyle={{ marginTop: 15 }}
						placeholder="Enter your email"
						value={email}
						autoCapitalize="none"
						// autoCompleteType="off"
						autoCorrect={false}
						keyboardType="email-address"
						onChangeText={(text) => setEmail(text)}
					/>

					<Text style={{ marginTop: 15 }}>Password</Text>
					<TextInput
						// containerStyle={{ marginTop: 15 }}
						placeholder="Enter your password"
						value={password}
						autoCapitalize="none"
						// autoCompleteType="off"
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
						{loading ? 'Loading' : 'Continue'}
					</Button>

					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							marginTop: 15,
							justifyContent: 'center',
						}}
					>
						<Text>Don't have an account?</Text>
						<TouchableOpacity
							onPress={() => {
								navigation.navigate(
									'Register'
								);
							}}
						>
							<Text
								// size="md"
								// fontWeight="bold"
								style={{
									marginLeft: 5,
								}}
							>
								Register here
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
							<Text>Forget password</Text>
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
								// isDarkmode ? setTheme("light") : setTheme("dark");
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
									? '☀️ light theme'
									: '🌑 dark theme'}
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