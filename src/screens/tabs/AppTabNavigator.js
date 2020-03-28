import React from 'react';
import colors from '../../values/colors';
import Library from './Library/LibraryScreen';
import Settings from './Settings/SettingsScreen';
import Playlist from './Playlist/PlaylistScreen';
import {createAppContainer} from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Favourites from './Favourites/FavouritesScreen';
import {createBottomTabNavigator} from 'react-navigation-tabs';

var TabNavigator = createBottomTabNavigator(
  {
    Library: {
      screen: Library,
      navigationOptions: {
        tabBarLabel: 'Library',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? 'music-note' : 'music-note'}
            size={focused ? 25 : 20}
            style={{color: tintColor}}
          />
        ),
      },
    },
    Playlist: {
      screen: Playlist,
      navigationOptions: {
        tabBarLabel: 'Playlist',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? 'playlist-music' : 'playlist-music'}
            size={focused ? 25 : 20}
            style={{color: tintColor}}
          />
        ),
      },
    },
    Favourites: {
      screen: Favourites,
      navigationOptions: {
        tabBarLabel: 'Favourites',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? 'heart' : 'heart'}
            size={focused ? 25 : 20}
            style={{color: tintColor}}
          />
        ),
      },
    },
    Settings: {
      screen: Settings,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({tintColor, focused}) => (
          <Icon
            name={focused ? 'settings' : 'settings'}
            size={focused ? 25 : 20}
            style={{color: tintColor}}
          />
        ),
      },
    },
  },
  {
    tabBarPosition: 'bottom',
    animationEnabled: true,
    tabBarOptions: {
      showLabel: true,
      activeTintColor: colors.RED,
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: colors.BLACK,
        height: 50,
        borderTopColor: colors.BLACK,
      },
    },
  },
);

export default createAppContainer(TabNavigator);
