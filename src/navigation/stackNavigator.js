import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LandingScreen
} from "../screens";

import {
} from "../screens/overlay-components";
const Stack = createStackNavigator();

class CreateStackNavigator extends React.Component {
  render() {
    const initialRoute = 'LandingScreen'
    return (
      <Stack.Navigator headerMode="none" initialRouteName={initialRoute}>
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        {/* <Stack.Screen name="VideoPopupScreen" component={VideoPopupScreen} options={{
          cardStyle: { backgroundColor: 'transparent' }
        }} /> */}
      </Stack.Navigator>
    );
  }
}

export default CreateStackNavigator;
