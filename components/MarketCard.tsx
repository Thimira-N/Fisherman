import React from 'react';
import { View, Text, Image } from 'react-native';
import { ArrowUpRight } from 'lucide-react-native';

const MarketCard = () => {
    return (
        <View className="bg-white p-3 rounded-xl shadow items-center w-28">
            <Image
                source={{ uri: 'https://images.unsplash.com/photo-1617545745541-6ee8ed52efb2?fit=crop&w=200' }}
                className="w-16 h-16 rounded-md"
            />
            <Text className="text-xs text-black-300 mt-2 text-center">Tuna Fish</Text>
            <Text className="text-sm font-rubik-bold mt-1">Rs. 800/kg</Text>
            <ArrowUpRight size={16} color="green" />
        </View>
    );
};

export default MarketCard;
