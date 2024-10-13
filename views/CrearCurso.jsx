import React, { useState, useEffect } from 'react';
import { View, Pressable, Text, TextInput } from "react-native";
import globalStyles from '../styles/globalStyles';
import axios from "axios";

const CrearCurso = ({ navigation, route }) => {

	const { setApi, id, nombreOptions } = route.params;
	const [nombre, setNombre] = useState('');

	const guardarCurso = async () => {
		try {
			let res = null
			if (id) {
				res = await axios.put('https://symfonyasel.duckdns.org/ws/update_curso/'+id, { nombre: nombre });
			} else {
				res = await axios.post('https://symfonyasel.duckdns.org/ws/add_curso', { nombre: nombre });
			}
			if (res) {
				setApi(true);
				navigation.navigate('Inicio');
				setNombre('');
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		setNombre(nombreOptions);
		navigation.setOptions({ title: id ? 'Editar Curso' : 'Crear Curso' });
	}, [id]);

	return (
		<View>
			<Text style={globalStyles.label}>Nombre</Text>
			<TextInput style={globalStyles.textinput} value={nombre} onChangeText={value => setNombre(value)}></TextInput>
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
