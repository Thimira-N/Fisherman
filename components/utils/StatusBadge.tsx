import { Text, View } from 'react-native';
import React from 'react';

type Props = {
    status: 'Safe' | 'Warning' | 'Danger';
};

export default function StatusBadge({ status }: Props) {
    let color = status === 'Safe' ? 'bg-green-500' : status === 'Warning' ? 'bg-yellow-400' : 'bg-red-500';
    return (
        <View className={`px-3 py-1 rounded-full ${color}`}>
            <Text className="text-white font-rubik-semibold text-xs">{status}</Text>
        </View>
    );
}
