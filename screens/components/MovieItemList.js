import React from 'react';
import { TouchableOpacity, View, Text, FlatList } from 'react-native';
import Styles from '../../styles'


export default class MovieItemList extends React.Component {

	render() {
		return (
			<TouchableOpacity
				style={Styles.row}
				onPress={
					() => this.props.goToMovieDetails(this.props.movie)
				}
			>
				<View style={Styles.MovieItemListRow}>
					<Text>{this.props.movie.Title}</Text>
					<Text style={Styles.MovieItemListYear}>
						({this.props.movie.Year})
					</Text>
				</View>
			</TouchableOpacity>
		);
	}
}
