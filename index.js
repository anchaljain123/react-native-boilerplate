
/**
 * @format
 */
import React from 'react'
import {name as appName} from './app.json';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import store from './src/redux/createStore';
import App from './src/App';
import { colors } from './src/styles/style.variables';

class HelloUser extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaProvider style={styles.container}>
          <NavigationContainer>
            <App {...this.props}/>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>

    )
  }
}
var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.kycDocUploadBackground
  },
});

AppRegistry.registerComponent(appName, () => HelloUser);

