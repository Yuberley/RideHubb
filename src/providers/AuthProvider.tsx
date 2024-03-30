import React, { createContext, useState, useEffect } from 'react';
import { supabase } from '../supabase/initSupabase';
import { Session } from '@supabase/supabase-js';

type ContextProps = {
	isAuthenticated: null | boolean;
	session: Session | null;
};

const AuthContext = createContext<Partial<ContextProps>>({});

interface Props {
	children: React.ReactNode;
}

const AuthProvider = (props: Props) => {
	const [isAuthenticated, seIsAuthenticated] = useState<null | boolean>(null);
	const [session, setSession] = useState<Session | null>(null);
	

	const getSession = async () => {
		const { data, error } = await supabase.auth.getSession();
		const { session } = data;

		setSession(session);
		seIsAuthenticated(session ? true : false);
	};

	useEffect(() => {
		getSession(); 
		const { data: authListener } = supabase.auth.onAuthStateChange(
			async (event, session) => {
				console.log(`Supabase auth event: ${event}`);
				setSession(session);
				seIsAuthenticated(session ? true : false);
			}
		);
		return () => {
			authListener.subscription.unsubscribe();
		};
	}, [isAuthenticated]);

	return (
		<AuthContext.Provider
			value={{
				isAuthenticated,
				session,
			}}
		>
			{props.children}
		</AuthContext.Provider>
	);
};

export { AuthContext, AuthProvider };