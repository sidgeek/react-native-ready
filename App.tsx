/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from "react";
import { View, Text, Button } from "react-native";
import { createAppContainer, NavigationScreenProp } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

type Props = {
  navigation: NavigationScreenProp<{}>;
};

class HomeScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <FontAwesomeIcon name="rocket" size={30} color="#900" />
        <MaterialIcon name="more-vert" size={20} />
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate("Details")}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component<Props> {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);
