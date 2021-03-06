import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import Styles from './styles'
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation';

export default class App extends React.Component {
	state = {
		isLoadingComplete: false,
	};

	render() {

		if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
			return (
				<AppLoading
					startAsync={this._loadResourcesAsync}
					onError={this._handleLoadingError}
					onFinish={this._handleFinishLoading}
				/>
			);
		} else {
			return (
				<View style={Styles.container}>
					{Platform.OS === 'ios' && <StatusBar barStyle="default" />}
					<AppNavigator />
				</View>
			);
		}
	}

	_loadResourcesAsync = async () => {
		return Promise.all([
			Asset.loadAsync([
				require('./assets/images/robot-dev.png'),
				require('./assets/images/robot-prod.png'),
			]),
			Font.loadAsync({
				...Icon.Ionicons.font,
				'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
			}),
		]);
	};

	_handleLoadingError = error => {
		console.warn(error);
	};

	_handleFinishLoading = () => {
		this.setState({ isLoadingComplete: true });
	};
}

