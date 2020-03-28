import AsyncStorage from '@react-native-community/async-storage';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import currentSongReducer from './reducers/CurrentSongReducer';
import isSongPlayingReducer from './reducers/IsSongPlayingReducer';

const rootReducer = combineReducers({
  current_song: currentSongReducer,
  is_song_playing: isSongPlayingReducer,
});

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['current_song'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  let store = createStore(persistedReducer, applyMiddleware(thunkMiddleware));
  let persistor = persistStore(store);
  return {store, persistor};
};

export default configureStore;
