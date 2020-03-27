import Player from './player/Player';
import Tabs from './tabs/AppTabNavigator';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppStackNavigator = createStackNavigator({
  Tabs: {
    screen: Tabs,
    navigationOptions: {
      headerShown: false,
    },
  },
  Player: {
    screen: Player,
    navigationOptions: {
      headerShown: false,
    },
  },
});

const RootScreen = createAppContainer(AppStackNavigator);
export default RootScreen;
