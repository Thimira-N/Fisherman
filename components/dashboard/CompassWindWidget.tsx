import { View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function CompassWindWidget({ direction, speed }: { direction: string; speed: string }) {
    return (
        <View className="flex-row items-center rounded-2xl">
            <Ionicons name="navigate" size={32} color="#0061FF" />
            <View>
                <Text className="font-rubik-bold text-black-300 text-lg">{direction}</Text>
                <Text className="font-rubik-light text-black-100">{speed} km/h</Text>
            </View>
        </View>
    );
}
