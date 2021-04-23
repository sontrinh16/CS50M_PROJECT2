import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Styles from '../../styles'
import API_KEY from '../../config/API_KEY';
import MovieItemList from './MovieItemList';
export default class SearchResults extends React.Component {

	render() {
		return (
			<View
				style={{
					flex: 1
				}}
			>
				<FlatList
					data={this.props.results}
					renderItem={({ item }, index) => (
						<MovieItemList
							movie={item}
							goToMovieDetails={this.props.goToMovieDetails} />
					)}
					keyExtractor={item => item.imdbID}
				/>
			</View>
		);
	}
}

