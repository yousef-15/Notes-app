import { View, Text } from "react-native";
import React from "react";
import { styles } from "@/styles/styles";

const data = {
  id: 1,
  name: "Yousef",
};

const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function greeting() {
  const hour = new Date().getHours();

  if (hour < 12) return "Good Morning";
  else if (hour < 18) return "Good Afternoon";
  else return "Good Evening";
}

function todayDate() {
  const day = new Date().getDate();
  const month = new Date().getMonth();
  const year = new Date().getFullYear();

  return `${months[month]} ${day}, ${year}`;
}

export default function GreetingHeader() {
  const greetingMessage = greeting();
  const day = new Date().getDay();
  const today = todayDate();
  return (
    <View style={styles.headerContainer}>
      <View>
        <Text style={styles.text}>{greetingMessage}</Text>
        <Text style={styles.text}>{data.name}</Text>
      </View>
      <View style={styles.dateContainer}>
        <Text style={styles.day}>{days[day]}</Text>
        <Text style={styles.day}>{today}</Text>
      </View>
    </View>
  );
}
