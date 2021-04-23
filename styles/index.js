import { StyleSheet } from 'react-native';
export default StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	SearchBox: {
		flexDirection: "column",
		padding: 30,
	},
	MovieItemListRow: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	MovieItemListYear: {
		fontStyle: "italic",
		color: 'gray',
	},
	searchBoxInput: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		margin: 5,
		paddingLeft: 5,
		paddingRight: 5,
		borderRadius: 2,
	},
	searchedText: {
		fontStyle: "italic"
	},
	row: { padding: 20 },
	movieTitle: {
		fontWeight: 'bold',
		fontSize: 20,
	},
	movieRow: {
		flexDirection: 'row',
		paddingTop: 5,
		paddingBottom: 5,
		paddingLeft: 2,
		paddingRight: 2,
		alignItems: 'center',
	},
	movieRowMain: {
		justifyContent: 'flex-start'
	},
	label: {
		fontWeight: 'bold',
		marginRight: 5,
	},
	moviePlot: {
		padding: 10,
	}
});
