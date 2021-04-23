import React from 'react';
import { View, Image } from 'react-native';
import Styles from '../styles'
import { Ionicons } from '@expo/vector-icons';

export default class MoviePosterScreen extends React.Component {
	static navigationOptions = ({ navigation }) => {
		return {
			headerTitle: 'Movie poster',
			tabBarIcon: ({ focused, tintColor }) => {
				return (
					<Ionicons
						name='md-film'
						color={tintColor}
						size={25}
					/>)
			}
		};
	};



	render() {
		const { Poster: poster } = this.props.navigation.getParam('movie');
		console.log(poster);
		return (
			<Image
				style={{ flex: 1, height: undefined, width: undefined }}
				resizeMode={'contain'}
				source={{ uri: poster }}
			/>
		);
	}
}

