import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Pressable, Alert } from "react-native";
import axios from "axios";
import ListItemAsignatura from "../items/ListItemAsignatura";
import globalStyles from "../styles/globalStyles";

const VistaCurso = ({ navigation, route }) => {

	const { nombre, id } = route.params;

	const [api, SetApi] = useState(true);
	const [asignaturas, SetAsignaturas] = useState([]);

	useEffect(() => {
		navigation.setOptions({ title: nombre });
		const obtenerAsignaturas = async () => {
			try {
				const res = await axios.get('https://symfonyasel.duckdns.org/ws/get_asignaturas/' + id);
				SetAsignaturas(res.data);
				SetApi(true);
			} catch (error) {
				console.log(error);
			}
		}
		if (api) {
			obtenerAsignaturas();
			SetApi(false);
		}
	}, [api]);

	const eliminarAsignatura = (id) => {
		Alert.alert('Eliminar', '¿Estas seguro que quieres eliminar esta asignatura?', [
			{
				text: 'Si',
				onPress: async () => {
					try {
						await axios.delete('https://symfonyasel.duckdns.org/ws/delete_asignatura/' + id);
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
	const editarAsignatura = (id, idCurso, nombre, duracion) => {
		navigation.navigate('CrearAsignatura', { setApi: SetApi, id: id, idCurso: idCurso, nombreOptions: nombre, duracionOptions: duracion });
	}

	return (
		<View>
			<Text style={globalStyles.heading}>{nombre}</Text>
			<FlatList
				data={asignaturas}
				renderItem={({ item }) => <ListItemAsignatura item={item} eliminar={eliminarAsignatura} editar={editarAsignatura} />}
				keyExtractor={asignaturas => asignaturas.id}
				ListEmptyComponent={<Text style={globalStyles.text_none}>No hay Asignaturas</Text>} />
			<Pressable style={globalStyles.button} onPress={() => { navigation.navigate('CrearAsignatura', { setApi: SetApi, id: null, nombreOptions: '', duracion: '', idCurso: id }) }}>
				<Text style={globalStyles.text}>Crear Asignatura</Text>
			</Pressable>
			<Pressable style={globalStyles.button} onPress={() => navigation.navigate('Inicio')}>
				<Text style={globalStyles.text}>Volver</Text>
			</Pressable>
		</View>
	);
}

export default VistaCurso;
