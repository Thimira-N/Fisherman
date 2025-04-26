import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import icons from '@/constants/icons';

const hourlyData = [
    { time: '9 AM', icon: icons.cloudy, temp: '28°C', wind: '15 km/h NE' },
    { time: '12 PM', icon: icons.sunny, temp: '32°C', wind: '10 km/h NE' },
    { time: '3 PM', icon: icons.partlyCloudy, temp: '31°C', wind: '12 km/h E' },
    { time: '6 PM', icon: icons.rainy, temp: '27°C', wind: '18 km/h E' },
    { time: '9 PM', icon: icons.rainy, temp: '26°C', wind: '20 km/h E' },
];

const weeklyData = [
    { day: 'Monday', icon: icons.sunny, high: '33°C', low: '26°C', rainChance: 10 },
    { day: 'Tuesday', icon: icons.rainy, high: '30°C', low: '25°C', rainChance: 70 },
    { day: 'Wednesday', icon: icons.cloudy, high: '31°C', low: '26°C', rainChance: 20 },
    { day: 'Thursday', icon: icons.storm, high: '29°C', low: '24°C', rainChance: 80 },
    { day: 'Friday', icon: icons.sunny, high: '34°C', low: '27°C', rainChance: 5 },
];

const WeatherForecastScreen = () => {
    return (
        <ScrollView className="px-5 py-3">

            {/* Hourly Forecast */}
            <View className="mb-8">
                <Text className="text-xl font-bold text-primary-300 mb-3">Hourly Forecast</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-4">
                    {hourlyData.map((item, index) => (
                        <View key={index} className="bg-primary-50 p-4 rounded-2xl items-center shadow-md min-w-[100px]">
                            <Text className="text-black-200 mb-1">{item.time}</Text>
                            <Image source={item.icon} className="size-10 mb-2" resizeMode="contain" />
                            <Text className="text-lg font-bold text-primary-300">{item.temp}</Text>
                            <Text className="text-xs text-black-100">{item.wind}</Text>
                        </View>
                    ))}
                </ScrollView>
            </View>

            {/* Weekly Forecast */}
            <View className="mb-20">
                <Text className="text-xl font-bold text-primary-300 mb-3">7-Day Forecast</Text>
                <View className="flex-col gap-4">
                    {weeklyData.map((item, index) => (
                        <View key={index} className="bg-primary-50 p-4 rounded-2xl flex-row justify-between items-center shadow-md">
                            <View className="flex-row items-center gap-3">
                                <Image source={item.icon} className="size-8" resizeMode="contain" />
                                <Text className="text-black-300 font-medium">{item.day}</Text>
                            </View>
                            <View className="flex-row items-center gap-2">
                                <Text className="text-black-200">{item.low}</Text>
                                <Text className="text-primary-300 font-bold">{item.high}</Text>
                            </View>
                        </View>
                    ))}
                </View>
            </View>

        </ScrollView>
    );
};

export default WeatherForecastScreen;
