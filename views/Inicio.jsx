import { Text, View, FlatList, Pressable } from "react-native";
import globalStyles from '../styles/globalStyles';
import { useEffect, useState } from "react";
import axios from "axios";

import ListItem from "../items/ListItem";

const Inicio = ({ navigation }) => {

	const [cursos, SetCursos] = useState([]);

	const eliminarCurso = () => {

	}

	const editarCurso = () => {

	}

	useEffect(() => {
		const obtenerCursos = async () => {
			try {
				const response = await axios.get('https://symfonyasel.duckdns.org/ws/get_cursos');
				SetCursos(response.data);
				console.log(response.data);
			} catch (error) {
				console.log(error);
			}
		}

		obtenerCursos();
	}, [true]);

	return (
		<View>
			<Text style={globalStyles.heading}>Cursos</Text>
			<FlatList
				data={cursos}
				renderItem={({ item }) => <ListItem item={item} />}
				keyExtractor={cursos => cursos.id}
				ListEmptyComponent={<Text style={globalStyles.text_none}>No hay Cursos</Text>} />
			<Pressable style={globalStyles.button} onPress={() => { navigation.navigate('CrearCurso') }}>
				<Text style={globalStyles.text}>Crear Curso</Text>
			</Pressable>
		</View>
	)
}

export default Inicio;
