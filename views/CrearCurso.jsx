import React, { useState } from 'react';
import { View, Pressable, Text, TextInput } from "react-native";
import globalStyles from '../styles/globalStyles';
import axios from "axios";

const CrearCurso = ({ navigation }) => {

	const [nombre, setNombre] = useState('');

	const guardarCurso = async () => {
		console.log(nombre);
		try {
			const res = await axios.post('https://symfonyasel.duckdns.org/ws/add_curso', {nombre: nombre});
			if (res) {
				navigation.navigate('Inicio');
				setNombre('');
			}
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<View>
			<Text style={globalStyles.label}>Nombre</Text>
			<TextInput style={globalStyles.textinput} onChangeText={value => setNombre(value)}></TextInput>
			<Pressable style={globalStyles.button} onPress={() => guardarCurso()}>
				<Text style={globalStyles.text}>Guardar</Text>
			</Pressable>
			<Pressable style={globalStyles.button} onPress={() => navigation.navigate('Inicio')}>
				<Text style={globalStyles.text}>Volver</Text>
			</Pressable>
		</View>
	);
}

export default CrearCurso;
