import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import icons from "@/constants/icons";

const CurrentWeatherScreen = () => {
    return (
        <ScrollView className="px-5 py-3">
            {/* Weather animation or static image */}
            <Image source={icons.sunny} className="h-40 w-full mb-5" resizeMode="contain" />

            {/* Temperature */}
            <Text className="text-5xl font-bold text-primary-300 text-center">32°C</Text>
            <Text className="text-base text-black-200 text-center mb-5">Feels like 35°C</Text>

            {/* Wind, Humidity, Pressure */}
            <View className="flex-row justify-around mb-5">
                <View className="items-center">
                    <Text className="text-primary-300 font-bold text-lg">Wind</Text>
                    <Text className="text-black-200">12 km/h NE</Text>
                </View>
                <View className="items-center">
                    <Text className="text-primary-300 font-bold text-lg">Humidity</Text>
                    <Text className="text-black-200">68%</Text>
                </View>
                <View className="items-center">
                    <Text className="text-primary-300 font-bold text-lg">Pressure</Text>
                    <Text className="text-black-200">1012 hPa</Text>
                </View>
            </View>

            {/* Sunrise/Sunset */}
            <View className="bg-primary-50 p-5 rounded-2xl shadow-sm mb-5">
                <Text className="text-primary-300 font-bold text-lg mb-2">Sunrise & Sunset</Text>
                <View className="flex-row justify-between">
                    <Text className="text-black-200">Sunrise: 5:45 AM</Text>
                    <Text className="text-black-200">Sunset: 6:15 PM</Text>
                </View>
            </View>

            {/* Tide Info */}
            <View className="bg-primary-50 p-5 rounded-2xl shadow-sm mb-5">
                <Text className="text-primary-300 font-bold text-lg mb-2">Tides</Text>
                <Text className="text-black-200">High: 4:00 PM</Text>
                <Text className="text-black-200">Low: 10:30 PM</Text>
            </View>

            {/* Safety Status */}
            <View className="bg-green-100 p-5 rounded-2xl shadow-sm mb-5">
                <Text className="text-green-700 font-bold text-lg">Safe for Fishing</Text>
                <Text className="text-black-200 mt-1">Conditions are favorable today.</Text>
            </View>

            {/* Location selector */}
            <View className="mt-5 mb-10">
                <Text className="text-center text-primary-300">🌍 Change Location (Coming Soon)</Text>
            </View>
        </ScrollView>
    );
};

export default CurrentWeatherScreen;
