import { View, Text, Pressable } from "react-native";
import globalStyles from '../styles/globalStyles';

const ListItemAsignatura = ({ item, eliminar, editar }) => {
	return (
		<View style={globalStyles.list_item}>
			<Text style={globalStyles.list_item_text}>{item.nombre}</Text>
			<View style={globalStyles.list_buttons}>
				<Pressable style={globalStyles.edit_button} onPress={() => { editar(item.id, item.idClase.id, item.nombre, item.duracion) }}>
					<Text style={globalStyles.edit_button_text}>Editar</Text>
				</Pressable>
				<Pressable style={globalStyles.delete_button} onPress={() => { eliminar(item.id) }}>
					<Text style={globalStyles.delete_button_text}>Eliminar</Text>
				</Pressable>
			</View>
		</View>
	);
}

export default ListItemAsignatura;
