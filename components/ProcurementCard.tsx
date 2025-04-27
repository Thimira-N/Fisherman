import React from 'react';
import { View, Text } from 'react-native';
import { PhoneCall } from 'lucide-react-native';

const ProcurementCard = () => {
    return (
        <View className="flex-row justify-between items-center bg-white/90 p-4 rounded-xl shadow">
            <View className="flex-row">
                <Text className="text-lg font-rubik-bold text-black-400">Mackerel</Text>
                <Text className="text-lg font-rubik text-black-300">    |    Needed: 500kg @ Rs. 650/kg</Text>
                <Text className="text-lg font-rubik text-black-200">    |    Galle • 📞 +94 718 123 456</Text>
            </View>
            <PhoneCall size={20} color="#2563eb" />
        </View>
    );
};

export default ProcurementCard;
