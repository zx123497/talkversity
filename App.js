import React, { useState } from "react";
import { AppLoading } from "expo";
import Navigator from "./src/routes/homeStack";
import Intro from "./src/pages/Intro/Intro";
import { StyleSheet, Text, View, Image } from "react-native";
import { Button } from "react-native-paper";
const App = (props) => {
  const [intro, setIntro] = useState(true);
  const handleIntroDone = () => {
    setIntro(false);
  };
  return <>{intro ? <Intro handleDone={handleIntroDone} /> : <Navigator />}</>;
};
export default App;
