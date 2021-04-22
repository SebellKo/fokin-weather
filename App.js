import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Alert} from "react-native";
import Loading from "./Loading";
import Weather from "./Weather";
import * as Location from "expo-location";
import axios from "axios";

const API_KEY = "b3c49cd560fb3defc700f36b7bc8a4a4";

export default class extends React.Component {
  state = {
    isLoading: true
  };
  getWeather = async(latitude, longitude) => {
    const { data: {main :{temp}} } = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&unit=metric`);
    this.setState({isLoading:false, condition: weather[0].main, temp: temp});
  }
  getLocation = async() => {
    try
    {
      await Location.getForegroundPermissionsAsync();
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      console.log(location);
    }
    catch(error)
    {
      Alert.alert("Can't find you.", "So sad");
    }
    
  }
  componentDidMount()
  {
    this.getLocation();
  }
  render ()
    {
      const {isLoading, temp, condition} = this.state;
      return isLoading ? <Loading></Loading> : <Weather >temp={Math.round(temp)} condition={condition}</Weather>;
    }
}