import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';

export default function SectionTitle({ title }: { title: string }) {
    return (
        <View className="flex-row items-center justify-between mt-6 mb-2">
            <Text className="text-lg font-rubik-bold text-black-300">{title}</Text>
            <TouchableOpacity>
                <Text className="text-base font-rubik-bold text-primary-300">See All</Text>
            </TouchableOpacity>
        </View>
    );
}
