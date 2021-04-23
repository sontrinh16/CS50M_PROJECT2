import React from 'react';
import { Button, View, Text } from 'react-native';
import Styles from '../styles'
import SearchBox from './components/SearchBox';

export default class MovieSearchScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Movie Search',
			// headerRight: (
			// 	<Button
			// 		title="Add"
			// 		onPress={() => navigation.navigate('AddContact')}
			// 		color="#a41034"
			// 	/>
			// ),
		};
	};

	onSearch = (searchedText) => {
		console.log(searchedText)
		return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchedText}`)
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				const results = responseJson.Search;
				this.props.navigation.push('MoviesList', { results, searchedText });

			})
			.catch((error) => {
				console.error(error);
			});

	}

	render() {
		return (
			<View style={Styles.container}>
				<SearchBox
					onSearch={this.onSearch}
				/>
			</View >
		);
	}
}

