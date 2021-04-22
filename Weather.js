import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, View, StatusBar } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const weatherOption = {
    Haze: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Haze",
        subtitle: "Just don't go outside."
    },
    Thunderstorm: {
        iconName: "weather-lightning",
        gradient: ["#373B44", "#4286f4"],
        title: "Thunderstorm",
        subtitle: "Be at Home"
    },
    Drizzle: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Drizzle",
        subtitle: "Is like rain"
    },
    Rain: {
        iconName: "weather-rainy",
        gradient: ["#00C6FB", "#005BEA"],
        title: "Rain",
        subtitle: "For more info look outside"
    },
    Snow: {
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Snow",
        subtitle: "Check out front the door"
    },
    Atmosphere: {
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"]
    },
    Clear: {
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Sunny",
        subtitle: "Go outside"
    },
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7D2CC", "#304352"],
        title: "Clouds",
        subtitle: "Bring your umbrella"
    },
    Mist: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Mist",
        subtitle: "Take a rest"
    },
    Dust: {
        iconName: "weather-hail",
        gradient: ["#4DA0B0", "#D39D38"],
        title: "Dust",
        subtitle: "Drink warm water oftenly"
    }
}

export default function Weather({temp, condition})
{
    return (
    <LinearGradient
        color={weatherOption[condition].gradient}
        style={styles.container}
        >
        <StatusBar barStyle="light-content"></StatusBar>
        <View style={{...styles.halfContainer,...styles.textContainer}}>
            <MaterialCommunityIcons name={weatherOption[condition].iconName} size={96} color="white"></MaterialCommunityIcons>
            <Text style={styles.temp}>{temp}</Text>
        </View>
        <View style={styles.halfContainer}>
            <View>
                <Text style={styles.title}>{weatherOption[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOption[condition].subtitle}</Text>
            </View>

        </View>
    </LinearGradient>
    )
}

Weather.PropTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf(["Thunderstorm", "Drizzle", "Rain", "Snow", "Atmosphere", "Clear", "Clouds", "Haze", "Mist", "Dust"]).isRequired
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        temp: {
            fontSize: 42,
            color: "white"
        },
        halfContainer: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
        },
        title: {
            color: "white",
            fontSize: 44,
            fontWeight: "300",
            marginBottom: 10
        },
        subtitle: {
            color: "white",
            fontWeight: "600",
            fontSize: 24,
        },
        textContainer: {
            paddingHorizontal: 20,
            alignItems: "flex-start"
        }
    }
)