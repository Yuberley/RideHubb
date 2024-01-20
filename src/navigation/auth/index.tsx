import React, { useContext } from 'react';
import { AuthContext } from '@/providers/AuthProvider';

import { NavigationContainer } from '@react-navigation/native';

import Main from './MainStack';
import Auth from './AuthStack';
import Loading from '@/screens/utils/Loading';

export default ({ navigation }: any) => {
	const auth = useContext(AuthContext);
	const user = auth.user;

	return (
		<NavigationContainer>
			{user == null && <Loading />}
			{user == false && <Auth />}
			{user == true && <Main />}
		</NavigationContainer>
	);
};