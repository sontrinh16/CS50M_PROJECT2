import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import Styles from '../../styles'

export default class SearchBox extends React.Component {
	state = { text: '' }
	render() {
		return (
			<View style={Styles.SearchBox}>
				<Text>Search for a movie to get the poster and details...</Text>
				<TextInput
					onChangeText={
						(text) => this.setState({ text })
					}
					style={Styles.searchBoxInput}
					value={this.state.text}
					placeholder="Movie title..."
					placeholderColor="teal"

				/>
				<Button
					title="Search"
					onPress={() => { this.props.onSearch(this.state.text) }}
				/>
			</View>
		);
	}
}

