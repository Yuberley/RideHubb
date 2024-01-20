import * as React from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';

import { Asset } from 'expo-asset';

import  Ubuntu_300Light  from '@/fonts/ubuntu/Ubuntu_300Light.ttf';
import  Ubuntu_300Light_Italic  from '@/fonts/ubuntu/Ubuntu_300Light_Italic.ttf';
import  Ubuntu_400Regular  from '@/fonts/ubuntu/Ubuntu_400Regular.ttf';
import  Ubuntu_400Regular_Italic  from '@/fonts/ubuntu/Ubuntu_400Regular_Italic.ttf';
import  Ubuntu_500Medium  from '@/fonts/ubuntu/Ubuntu_500Medium.ttf';
import  Ubuntu_500Medium_Italic  from '@/fonts/ubuntu/Ubuntu_500Medium_Italic.ttf';
import  Ubuntu_700Bold  from '@/fonts/ubuntu/Ubuntu_700Bold.ttf';
import  Ubuntu_700Bold_Italic  from '@/fonts/ubuntu/Ubuntu_700Bold_Italic.ttf';

export default function useCachedResources(
	images?: Array<any> | null,
	fonts?: any
) {
	const [isLoadingComplete, setLoadingComplete] = React.useState(false);

	// Load any resources or data that we need prior to rendering the app
	React.useEffect(() => {
		async function loadResourcesAndDataAsync() {
			try {
				// Load fonts
				await Promise.all([
					images && Asset.loadAsync(images),
					Font.loadAsync({
						...Ionicons.font,
						Ubuntu_300Light,
						Ubuntu_300Light_Italic,
						Ubuntu_400Regular,
						Ubuntu_400Regular_Italic,
						Ubuntu_500Medium,
						Ubuntu_500Medium_Italic,
						Ubuntu_700Bold,
						Ubuntu_700Bold_Italic,
						...fonts,
					}),
				]);
			} catch (e) {
				console.warn(e);
			} finally {
				setLoadingComplete(true);
			}
		}

		loadResourcesAndDataAsync();
	}, []);

	return isLoadingComplete;
}