import React from 'react';
import { View, Text } from 'react-native';
import { CloudSun, Compass } from 'lucide-react-native';

const WeatherCard = () => {
    return (
        <View className="bg-blue-100 p-4 rounded-xl shadow space-y-3">
            <View className="flex-row justify-between items-center">
                <View>
                    <Text className="text-2xl font-rubik-bold text-blue-800">29°C</Text>
                    <Text className="text-sm font-rubik text-blue-900">Partly Cloudy</Text>
                </View>
                <CloudSun size={36} color="#1e3a8a" />
            </View>
            <View className="flex-row justify-between items-center">
                <View className="flex-row items-center space-x-2">
                    <Compass size={20} color="#1e3a8a" />
                    <Text className="text-sm font-rubik text-blue-900">12 km/h NW</Text>
                </View>
                <Text className="text-sm font-rubik text-blue-900">Sea: Moderate</Text>
            </View>
            <Text className="text-md text-yellow-700 font-rubik-bold">⚠ Safe to Sail</Text>
        </View>
    );
};

export default WeatherCard;
