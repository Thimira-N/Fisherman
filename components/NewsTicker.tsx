import React from 'react';
import { View, Text } from 'react-native';

const NewsTicker = () => {
    return (
        <View className="bg-yellow-50 p-4 rounded-xl shadow">
            <Text className="text-sm font-rubik text-black-300">
                🔔 Cyclone warning: Avoid deep sea fishing beyond 50km today.
            </Text>
        </View>
    );
};

export default NewsTicker;
