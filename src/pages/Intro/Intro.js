import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";

const slides = [
  {
    key: 1,
    title: "Title 1",
    text: "初次見面，我是 Talkversity！",
    image: require("../../assets/logo.png"),
    backgroundColor: "#59b2ab",
  },
  {
    key: 2,
    title: "Title 2",
    text: "我可以幫您訓練在各種場面的說話技巧",
    image: require("../../assets/2.png"),
    backgroundColor: "#febe29",
  },
];

const styles = StyleSheet.create({
  slide: {
    backgroundColor: "#22bcb5",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  title: {
    color: "#FFF",
  },
  text: {
    marginTop: 100,
    color: "#FFF",
    fontSize: 20,
  },
  image: {
    width: 400,
    height: 400,
  },
});

const Intro = (props) => {
  const showIntro = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  return (
    <AppIntroSlider
      renderItem={showIntro}
      data={slides}
      onDone={() => props.handleDone()}
    />
  );
};

export default Intro;
