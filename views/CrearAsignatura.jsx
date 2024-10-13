import React, { useState, useEffect } from 'react';
import { View, Pressable, Text, TextInput } from "react-native";
import globalStyles from '../styles/globalStyles';
import axios from "axios";

const CrearAsignatura = ({ navigation, route }) => {

	const { setApi, id, idCurso, nombreOptions, duracionOptions } = route.params;
	const [nombre, setNombre] = useState('');
	const [duracion, setDuracion] = useState('');

	const guardarAsignatura = async () => {
		try {
			let res = null
			if (id) {
				res = await axios.put('https://symfonyasel.duckdns.org/ws/update_asignatura/' + id, { nombre: nombre, duracion: duracion, id_curso: idCurso });
			} else {
				res = await axios.post('https://symfonyasel.duckdns.org/ws/add_asignatura', { nombre: nombre, duracion: duracion, id_curso: idCurso });
			}
			if (res) {
				setApi(true);
				navigation.goBack();
				setNombre('');
			}
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		setNombre(nombreOptions);
		setDuracion(duracionOptions);
		navigation.setOptions({ title: id ? 'Editar Asignatura' : 'Crear Asignatura' });
	}, [id]);

	return (
		<View>
			<Text style={globalStyles.label}>Nombre</Text>
			<TextInput style={globalStyles.textinput} value={nombre} onChangeText={value => setNombre(value)}></TextInput>
			<Text style={globalStyles.label}>Duración</Text>
			<TextInput style={globalStyles.textinput} value={duracion} onChangeText={value => setDuracion(value)}></TextInput>
			<Pressable style={globalStyles.button} onPress={() => guardarAsignatura()}>
				<Text style={globalStyles.text}>Guardar</Text>
			</Pressable>
			<Pressable style={globalStyles.button} onPress={() => navigation.goBack()}>
				<Text style={globalStyles.text}>Volver</Text>
			</Pressable>
		</View>
	);
}

export default CrearAsignatura;
