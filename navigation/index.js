import { createStackNavigator, createBottomTabNavigator } from "react-navigation";
import { MoviesListScreen, MovieDetailsScreen, MovieSearchScreen, MoviePosterScreen} from '../screens'

const MovieTabs = createBottomTabNavigator(
	{
		Poster: MoviePosterScreen,
		Details: MovieDetailsScreen
	});

const AppNavigator = createStackNavigator(
	{
		MoviesList: MoviesListScreen,
		MovieDetails: MovieTabs,
		MovieSearch: MovieSearchScreen,

	},
	{
		initialRouteName: "MovieSearch",

	}
);



export default AppNavigator;
