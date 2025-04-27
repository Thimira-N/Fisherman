import { View, Text } from 'react-native';
import React from 'react';

const procurementItems = [
    { fish: 'Tuna', quantity: '200kg', price: 'LKR 1100' },
    { fish: 'Shrimp', quantity: '100kg', price: 'LKR 2000' },
];

export default function ProcurementList() {
    return (
        <View className="px-4 space-y-4">
            {procurementItems.map((item, index) => (
                <View key={index} className="bg-accent-100 p-4 rounded-xl shadow-sm">
                    <Text className="font-rubik-bold text-black-300">{item.fish}</Text>
                    <Text className="text-black-200">{item.quantity} — {item.price}</Text>
                </View>
            ))}
        </View>
    );
}
