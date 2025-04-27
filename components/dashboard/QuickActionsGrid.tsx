import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

const actions = [
    { icon: 'fish', label: 'Log Catch' },
    { icon: 'cloudy', label: 'Check Weather' },
    { icon: 'people', label: 'Find Buyers' },
    { icon: 'warning', label: 'Report Issue' },
];

export default function QuickActionsGrid() {
    return (
        <View className="flex-row flex-wrap justify-center mt-6 px-6">
            {actions.map((action, idx) => (
                <TouchableOpacity key={idx} className="bg-white/30 backdrop-blur-md m-2 p-4 rounded-xl items-center w-28 h-28 justify-center">
                    <Ionicons name={action.icon as any} size={32} color="#0061FF" />
                    <Text className="mt-2 font-rubik-semibold text-black-300 text-center text-sm">{action.label}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}
