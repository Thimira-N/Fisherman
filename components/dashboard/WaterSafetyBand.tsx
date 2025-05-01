import { View, Text } from 'react-native';
import React from 'react';

type Props = {
    status: 'Safe' | 'Warning' | 'Danger';
};

export default function WaterSafetyBand({ status }: Props) {
    let color = status === 'Safe' ? 'bg-safe1' : status === 'Warning' ? 'bg-yellow-400' : 'bg-red-500';
    return (
        <View className={`flex-row items-center justify-between bg-primary-100 p-4 rounded-xl m-4 shadow-sm ${color}`}>
            <Text className="font-rubik-bold text-black-300 text-lg">Water Safety</Text>
            <Text className="text-white font-rubik-semibold text-xs">{status}</Text>
        </View>
    );
}
