import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import configureStore from './src/config/configureStore';
import { registerScreens } from './src/screens/screens';
import { screen, appStyle, tabsStyle } from './src/global/Screens';

const store = configureStore();
registerScreens(store, Provider);

// const navigatorStyle = { navBarHidden: true }
Navigation.startTabBasedApp({
  tabs: [
      screen('DASHBOARD_SCREEN'),
      screen('CHAT_SCREEN'),
      screen('NATIONS_SCREEN'),
      screen('WALLET_SCREEN'),
      screen('PROFILE_SCREEN'),
  ],
  tabsStyle: { ...tabsStyle },
  appStyle: { ...appStyle },
});

class App extends Component {
  render() {
    return null;
  }
}

export default App;
