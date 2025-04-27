import { TouchableOpacity, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

export default function FloatingSOSButton() {
    return (
        <TouchableOpacity
            className="absolute bottom-8 right-6 bg-danger rounded-full p-4 shadow-lg flex-row items-center"
            onPress={() => alert('SOS Signal Sent!')}
        >
            <Ionicons name="alert-circle" size={24} color="white" />
            <Text className="text-white ml-2 font-rubik-bold">SOS</Text>
        </TouchableOpacity>
    );
}
