import { View, Text } from "react-native";

const ListItem = ({item}) => {
	return (
		<View>
			<Text>{item.nombre}</Text>
		</View>
	);
}

export default ListItem;
