import React from 'react';
import {
	View,
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Inicio from './views/Inicio';

import globalStyles from './styles/globalStyles';

function App(): React.JSX.Element {

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				contentStyle: globalStyles.background,
				headerStyle: globalStyles.header,
				headerTitleStyle: globalStyles.header_title,
			}}>
				<Stack.Screen
					name='Inicio'
					component={Inicio}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
