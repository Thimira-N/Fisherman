import { View, Text, ScrollView, Image } from 'react-native';
import React from 'react';

const fishList = [
    { name: 'Tuna', price: 'LKR 1200', img: 'https://via.placeholder.com/80' },
    { name: 'Mackerel', price: 'LKR 850', img: 'https://via.placeholder.com/80' },
    // Add more fishes...
];

export default function FishCarousel() {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="pl-4">
            {fishList.map((fish, index) => (
                <View key={index} className="bg-white/50 backdrop-blur-md p-4 rounded-xl mr-4 items-center w-28">
                    <Image source={{ uri: fish.img }} className="w-16 h-16 rounded-full mb-2" />
                    <Text className="font-rubik-semibold text-black-300 text-center">{fish.name}</Text>
                    <Text className="text-black-100 text-xs">{fish.price}</Text>
                </View>
            ))}
        </ScrollView>
    );
}
