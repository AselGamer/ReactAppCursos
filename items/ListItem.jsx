import { View, Text, Pressable } from "react-native";
import globalStyles from '../styles/globalStyles';

const ListItem = ({ item, eliminar, editar, asignaturas }) => {
	return (
		<View style={globalStyles.list_item}>
			<Text style={globalStyles.list_item_text}>{item.nombre}</Text>
			<View style={globalStyles.list_buttons}>
				<Pressable style={globalStyles.confirm_button} onPress={() => { asignaturas(item.id, item.nombre) }}>
					<Text style={globalStyles.confirm_button_text}>Asignaturas</Text>
				</Pressable>
				<Pressable style={globalStyles.edit_button} onPress={() => { editar(item.id, item.nombre) }}>
					<Text style={globalStyles.edit_button_text}>Editar</Text>
				</Pressable>
				<Pressable style={globalStyles.delete_button} onPress={() => { eliminar(item.id) }}>
					<Text style={globalStyles.delete_button_text}>Eliminar</Text>
				</Pressable>
			</View>
		</View>
	);
}

export default ListItem;
