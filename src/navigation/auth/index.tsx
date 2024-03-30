import React, { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';

import { NavigationContainer } from '@react-navigation/native';

import Main from '@/navigation/auth/MainStack';
import Auth from '@/navigation/auth/AuthStack';
import Loading from '@/screens/utils/Loading';

export default ({ navigation }: any) => {
	const auth = useContext(AuthContext);
	const isAuthenticated = auth.isAuthenticated;

	return (
		<NavigationContainer>
			{isAuthenticated == null && <Loading />}
			{isAuthenticated == false && <Auth />}
			{isAuthenticated == true && <Main />}
		</NavigationContainer>
	);
};