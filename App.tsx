import React from 'react';
import {
	Pressable,
	Text
} from 'react-native';

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import Inicio from './views/Inicio';
import CrearCurso from './views/CrearCurso';
import VistaCurso from './views/VistaCurso';

import globalStyles from './styles/globalStyles';
import CrearAsignatura from './views/CrearAsignatura';

function App(): React.JSX.Element {

	return (
		<NavigationContainer>
			<Stack.Navigator screenOptions={{
				contentStyle: globalStyles.background,
				headerStyle: globalStyles.header,
				headerTitleStyle: globalStyles.header_title,
				headerLeft: () => (<></>),
			}}>
				<Stack.Screen
					name='Inicio'
					component={Inicio}
				/>
				<Stack.Screen
					name='CrearCurso'
					component={CrearCurso}
					options={{
						title: 'Crear Curso',
					}}
				/>
				<Stack.Screen
					name='CrearAsignatura'
					component={CrearAsignatura}
					options={{
						title: 'Crear Asignatura',
					}}
				/>
				<Stack.Screen
					name='VistaCurso'
					component={VistaCurso}
					options={{
						title: 'Curso',
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
