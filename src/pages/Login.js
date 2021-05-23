import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Button } from "react-native-paper";
import { Navigator } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logobox: {
    flex: 1,
    bottom: "13%",
    justifyContent: "center",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  logobox2: {
    bottom: "0%",
    width: "80%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
  },
  signfb: {
    justifyContent: "center",
    alignItems: "center",
    bottom: "20%",
    width: "70%",
    height: "5%",
  },
  signgg: {
    justifyContent: "center",
    alignItems: "center",
    bottom: "17%",
    width: "70%",
    height: "5%",
  },
});

const Login = () => {
  return (
    <LinearGradient
      colors={["#02260A", "#010418"]}
      style={styles.linearGradient}
      start={{ x: 0, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      locations={[0, 0.8, 1]}
    >
      <View style={styles.container}>
        <View style={styles.logobox}>
          <Image
            source={require("../assets/logo.png")}
            style={{ width: 175, height: 150 }}
          ></Image>
        </View>

        <Button
          style={styles.signfb}
          icon="facebook"
          mode="contained"
          onPress={() => console.log("Pressed")}
          color="#4B5DD3"
        >
          Sign in with Facebook
        </Button>

        <Button
          style={styles.signgg}
          icon="google"
          mode="contained"
          onPress={() => console.log("Pressed")}
          color="#EA5147"
        >
          Sign in with Google
        </Button>

        <View style={styles.logobox2}>
          <Image source={require("../assets/school.png")}></Image>
        </View>

        <StatusBar style="auto" />
      </View>
    </LinearGradient>
  );
};

export default Login;
