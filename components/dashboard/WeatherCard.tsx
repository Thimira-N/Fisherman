import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlassCard from '../common/GlassCard';
import React from 'react';

export default function WeatherCard() {
    return (
        <GlassCard>
            <View className="flex-row justify-between items-center">
                <Text className="text-5xl text-primary-300 font-rubik-extrabold">28°C</Text>
                <View className="items-center">
                    <Ionicons name="compass" size={32} color="#0061FF" />
                    <Text className="font-rubik-medium text-black-200">NE 12km/h</Text>
                </View>
            </View>
            <Text className="text-black-100 font-rubik-medium mt-2">Calm Sea - Safe to Sail 🚤</Text>
        </GlassCard>
    );
}
