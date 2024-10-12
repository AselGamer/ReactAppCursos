import { Text, View, FlatList, Pressable } from "react-native";
import globalStyles from '../styles/globalStyles';
import { useState } from "react";

import ListItem from "../items/ListItem";

const Inicio = () => {

	const [cursos, SetCursos] = useState([]);

	return (
		<View>
			<Text style={globalStyles.heading}>Cursos</Text>
			<FlatList
				data={cursos}
				renderItem={({ item }) => { <ListItem item={item} /> }}
				keyExtractor={cursos => cursos.id}
				ListEmptyComponent={<Text style={globalStyles.text_none}>No hay Cursos</Text>} />
			<Pressable style={globalStyles.button}>
				<Text style={globalStyles.text}>Crear Curso</Text>
			</Pressable>
		</View>
	)
}

export default Inicio;
