import React from 'react';
import { Button, View, Text } from 'react-native';
import Styles from '../styles'
import SearchResults from './components/SearchResults';

export default class MoviesListScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Movies list',
			// headerRight: (
			// 	<Button
			// 		title="Add"
			// 		onPress={() => navigation.navigate('AddContact')}
			// 		color="#a41034"
			// 	/>
			// ),
		};
	};
	goToMovieDetails = (movie) => {
		http://www.omdbapi.com/?i=tt0109686
		return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movie.imdbID}`)
			.then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson);
				this.props.navigation.push('MovieDetails', { movie: responseJson });
			})
			.catch((error) => {
				console.error(error);
			});
	}


	render() {
		const searchedText = this.props.navigation.getParam('searchedText');
		const results = this.props.navigation.getParam('results')
		return (
			<View style={Styles.container}>
				<Text>
					Movies for <Text style={Styles.searchedText}>{searchedText}</Text>
				</Text>
				<SearchResults
					results={results}
					goToMovieDetails={this.goToMovieDetails}
				/>
			</View>
		);
	}

}

