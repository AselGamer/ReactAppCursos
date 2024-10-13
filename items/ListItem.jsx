import { View, Text, Pressable } from "react-native";
import globalStyles from '../styles/globalStyles';

const ListItem = ({ id, item }) => {
	return (
		<View style={globalStyles.list_item}>
			<Text style={globalStyles.list_item_text}>{item.nombre}</Text>
			<View style={globalStyles.list_buttons}>
				<Pressable style={globalStyles.edit_button}>
					<Text style={globalStyles.edit_button_text}>Editar</Text>
				</Pressable>
				<Pressable style={globalStyles.delete_button}>
					<Text style={globalStyles.delete_button_text}>Eliminar</Text>
				</Pressable>
			</View>
		</View>
	);
}

export default ListItem;
