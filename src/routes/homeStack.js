import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import LoginPage from "../pages/LoginPage";

const screens = {
  LoginPage: {
    screen: LoginPage,
  },
};

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);
