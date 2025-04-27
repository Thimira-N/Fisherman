import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { MotiView } from 'moti';
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
        <ScrollView className="px-5 py-4 bg-accent-100 flex-1">
            {/* Hourly Forecast */}
            <MotiView
                from={{ opacity: 0, translateY: -10 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "timing", duration: 700 }}
                className="mb-8"
            >
                <Text className="text-2xl font-extrabold text-primary-300 mb-4">🌤 Hourly Forecast</Text>

                <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row gap-4">
                    {hourlyData.map((item, index) => (
                        <MotiView
                            key={index}
                            from={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", delay: index * 100 }}
                            className="bg-white p-4 rounded-2xl items-center shadow-md min-w-[100px]"
                        >
                            <Text className="text-black-200 mb-1 text-sm">{item.time}</Text>
                            <Image source={item.icon} className="size-10 mb-2" resizeMode="contain" />
                            <Text className="text-lg font-bold text-primary-300">{item.temp}</Text>
                            <Text className="text-xs text-black-100">{item.wind}</Text>
                        </MotiView>
                    ))}
                </ScrollView>
            </MotiView>

            {/* Weekly Forecast */}
            <MotiView
                from={{ opacity: 0, translateY: 10 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ type: "timing", duration: 800, delay: 300 }}
                className="mb-20"
            >
                <Text className="text-2xl font-extrabold text-primary-300 mb-4">📅 7-Day Forecast</Text>

                <View className="flex-col gap-4">
                    {weeklyData.map((item, index) => (
                        <MotiView
                            key={index}
                            from={{ opacity: 0, translateX: -20 }}
                            animate={{ opacity: 1, translateX: 0 }}
                            transition={{ type: "timing", delay: 400 + index * 150 }}
                            className="bg-white p-4 rounded-2xl flex-row justify-between items-center shadow-md"
                        >
                            <View className="flex-row items-center gap-3">
                                <Image source={item.icon} className="size-8" resizeMode="contain" />
                                <Text className="text-black-300 font-medium text-base">{item.day}</Text>
                            </View>

                            <View className="flex-row items-center gap-2">
                                <Text className="text-black-200">{item.low}</Text>
                                <Text className="text-primary-300 font-bold">{item.high}</Text>
                            </View>
                        </MotiView>
                    ))}
                </View>
            </MotiView>
        </ScrollView>
    );
};

export default WeatherForecastScreen;
