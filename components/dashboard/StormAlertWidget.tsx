import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function StormAlertWidget({ level, message }: { level: number; message: string }) {
    const color = level > 2 ? 'bg-red-500' : 'bg-safe';
    return (
        <View className={`flex-row items-center p-4 rounded-xl m-4 ${color}`}>
            <Ionicons name="thunderstorm" size={32} color="white" />
            <Text className="ml-4 font-rubik-bold text-md text-white">{message}</Text>
        </View>
    );
}
