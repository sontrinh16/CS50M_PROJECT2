import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import Styles from '../styles'

export default class MovieDetailsScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Movie details',
			tabBarIcon: ({ focused, tintColor }) => {
				return (
					<Ionicons
						name='md-filing'
						color={tintColor}
						size={25}
					/>)
			}
		};
	};



	render() {
		const movie = this.props.navigation.getParam('movie');
		console.log(movie);
		return (
			<View style={Styles.container}>
				<Text style={Styles.movieTitle}>{movie.Title}</Text>
				<View style={[ Styles.movieRow, Styles.movieRowMain ]}>
					<View style={Styles.movieRow}>
						<Ionicons
							name='md-calendar'
						/>
						<Text>{movie.Year}</Text>
					</View>

					<View style={Styles.movieRow}>
						<Ionicons
							name='md-globe'
						/>
						<Text>{movie.Country}</Text>
					</View>

					<View style={Styles.movieRow}>
						<Ionicons
							name='md-time'
						/>
						<Text>{movie.Runtime}</Text>
					</View>

				</View>
				<View style={[ Styles.movieRow, Styles.movieRowMain ]}>
					<View style={Styles.movieRow}>
						<Ionicons
							name='md-megaphone'
						/>
						<Text style={Styles.label}>Directed</Text>
						<Text>{movie.Director}</Text>
					</View>

				</View>
				<View style={[ Styles.movieRow, Styles.movieRowMain ]}>
					<View style={Styles.movieRow}>
						<Ionicons
							name='md-contacts'
						/>
						<Text style={Styles.label}>Cast</Text>
						<Text>{movie.Actors}</Text>
					</View>
				</View>
				<View style={[ Styles.movieRow, Styles.movieRowMain ]}>
					<View style={Styles.movieRow}>
						<Ionicons
							name='md-megaphone'
						/>
						<Text>{movie.Genre}</Text>
					</View>
					<View style={Styles.movieRow}>
						<FontAwesome
							name='star'
						/>
						<Text>{movie.Metascore}</Text>
					</View>
				</View>
				<Text style={Styles.moviePlot}>{movie.Plot}</Text>
			</View>
		);
	}
}

