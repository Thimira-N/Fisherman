import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CurrentWeatherScreen from '../CurrentWeatherScreen';
import WeatherForecastScreen from '../WeatherForecastScreen';
import StormTrackerScreen from '../StormTrackerScreen';
import WaterSafetyScreen from '../WaterSafetyScreen';

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
            {/* Tabs */}
            <View className="flex-row justify-around bg-primary-50 p-3 rounded-b-3xl">
                {tabs.map((tab) => (
                    <TouchableOpacity key={tab.id} onPress={() => setActiveTab(tab.id)}>
                        <Text className={`text-base font-bold ${activeTab === tab.id ? 'text-primary-300' : 'text-black-200'}`}>
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
