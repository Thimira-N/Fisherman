import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function AIBotTip({ tip }: { tip: string }) {
    return (
        <View className="bg-primary-200 p-4 rounded-2xl m-4 flex-row items-center justify-around space-x-4">
            <Ionicons name="bulb" size={25} color="#0061FF" />
            <Text className="text-black-200 font-rubik-medium">{tip}</Text>
        </View>
    );
}
