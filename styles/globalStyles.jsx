import { StyleSheet } from "react-native";

const globalStyles = StyleSheet.create({
	background: {
		backgroundColor: '#1d2021'
	},
	heading: {
		color: '#d4be98',
		fontSize: 25,
		alignSelf: 'center',
		margin: 10
	},
	header: {
		backgroundColor: '#282828',
	},
	header_title: {
		color: '#d4be98',
	},
	button: {
		borderRadius: 4,
		backgroundColor: '#32361a',
		padding: 8,
		alignItems: 'center',
		marginTop: 20,
		marginBottom: 20,
		marginLeft: 40,
		marginRight: 40
	},
	text: {
		fontSize: 16,
		color: '#d4be98',
	},
	text_none: {
		fontSize: 20,
		color: '#ea6962',
		alignSelf: 'center',
		marginBottom: 10
	},
	label: {
		fontSize: 20,
		color: '#e2cca9',
		padding: 10,
		marginLeft: 10
	},
	textinput: {
		backgroundColor: '#141617',
		marginLeft: 20,
		marginRight: 20,
		color: '#e2cca9',
		fontSize: 20
	},
	list_item: {
		backgroundColor: '#333e34',
		padding: 10,
		margin: 10,
		borderRadius: 6,
		textShadowRadius: 6,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	list_item_text: {
		color: '#8bba7f',
		fontSize: 20
	},
	list_buttons: {
		flexDirection: 'row',
	},
	edit_button: {
		borderRadius: 4,
		backgroundColor: '#e9b143',
		justifyContent: 'center',
		padding: 5,
		marginLeft: 5,
		marginRight: 5,
	},
	edit_button_text: {
		color: 'black'
	},
	delete_button: {
		borderRadius: 4,
		backgroundColor: '#db4740',
		justifyContent: 'center',
		padding: 5,
		marginLeft: 5,
		marginRight: 5,
	},
	delete_button_text: {
		color: 'black'
	},
	confirm_button: {
		borderRadius: 4,
		backgroundColor: '#a9b665',
		justifyContent: 'center',
		padding: 5,
		marginLeft: 5,
		marginRight: 5,
	},
	confirm_button_text: {
		color: 'black'
	},
});

export default globalStyles;
