import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CurrentWeatherScreen from '../(weather)/CurrentWeatherScreen';
import WeatherForecastScreen from '../(weather)/WeatherForecastScreen';
import StormTrackerScreen from '../(weather)/StormTrackerScreen';
import WaterSafetyScreen from '../(weather)/WaterSafetyScreen';

const tabs = [
    { id: 1, title: 'Current' },
    { id: 2, title: 'Forecast' },
    { id: 3, title: 'Storm Tracker' },
    { id: 4, title: 'Safety' },
];

const WeatherSection = () => {
    const [activeTab, setActiveTab] = useState(1);

    const renderScreen = () => {
        switch (activeTab) {
            case 1:
                return <CurrentWeatherScreen />;
            case 2:
                return <WeatherForecastScreen />;
            case 3:
                return <StormTrackerScreen />;
            case 4:
                return <WaterSafetyScreen />;
            default:
                return <CurrentWeatherScreen />;
        }
    };

    return (
        <SafeAreaView className="bg-white h-full">
            <Text className="text-3xl text-center font-rubik-extrabold text-primary-300 mt-2">W E A T H E R</Text>
            {/* Tabs */}
            <View className="flex-row justify-around items-center bg-primary-200 p-5 rounded-3xl mt-5">
                {tabs.map((tab) => (
                    <TouchableOpacity
                        key={tab.id}
                        onPress={() => setActiveTab(tab.id)}
                        className={`${activeTab === tab.id ? 'bg-primary-300 px-4 py-3 rounded-full' : 'bg-white/90 px-4 py-3 rounded-full'}`}
                    >
                        <Text className={`text-base font-rubik-bold ${activeTab === tab.id ? 'text-white' : 'text-black-200'}`}>
                            {tab.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            {/* Screen Content */}
            <View className="flex-1 mt-2">
                {renderScreen()}
            </View>
        </SafeAreaView>
    );
};

export default WeatherSection;
