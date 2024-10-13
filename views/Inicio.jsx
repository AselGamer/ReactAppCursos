import { Text, View, FlatList, Pressable, Alert } from "react-native";
import globalStyles from '../styles/globalStyles';
import { useEffect, useState } from "react";
import axios from "axios";

import ListItem from "../items/ListItem";

const Inicio = ({ navigation }) => {

	const [cursos, SetCursos] = useState([]);
	const [api, SetApi] = useState(true);

	const eliminarCurso = (id) => {
		Alert.alert('Eliminar', '¿Estas seguro que quieres eliminar este curso?', [
			{
				text: 'Si',
				onPress: async () => {
					try {
						await axios.delete('https://symfonyasel.duckdns.org/ws/delete_curso/' + id);
						SetApi(true);
					} catch (error) {
						console.log(error);
					}
				},
			},
			{
				text: 'No',
				style: 'cancel'
			}
		]);
	}

	const editarCurso = (id, nombre) => {
		navigation.navigate('CrearCurso', { setApi: SetApi, id: id, nombreOptions: nombre });
	}

	const verAsignaturas = (id, nombre) => {
		navigation.navigate('VistaCurso', { id: id, nombre: nombre });
	}

	useEffect(() => {
		const obtenerCursos = async () => {
			try {
				const response = await axios.get('https://symfonyasel.duckdns.org/ws/get_cursos');
				SetCursos(response.data);
				SetApi(true);
			} catch (error) {
				console.log(error);
			}
		}

		if (api) {
			obtenerCursos();
			SetApi(false);
		}
	}, [api]);

	return (
		<View>
			<Text style={globalStyles.heading}>Cursos</Text>
			<FlatList
				data={cursos}
				renderItem={({ item }) => <ListItem item={item} api={api} eliminar={eliminarCurso} editar={editarCurso} asignaturas={verAsignaturas} />}
				keyExtractor={cursos => cursos.id}
				ListEmptyComponent={<Text style={globalStyles.text_none}>No hay Cursos</Text>} />
			<Pressable style={globalStyles.button} onPress={() => { navigation.navigate('CrearCurso', { setApi: SetApi, id: null, nombreOptions: '' }) }}>
				<Text style={globalStyles.text}>Crear Curso</Text>
			</Pressable>
		</View>
	)
}

export default Inicio;
