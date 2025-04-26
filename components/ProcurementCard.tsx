import React from 'react';
import { View, Text } from 'react-native';
import { PhoneCall } from 'lucide-react-native';

const ProcurementCard = () => {
    return (
        <View className="flex-row justify-between items-center bg-white/80 p-4 rounded-xl shadow">
            <View>
                <Text className="font-rubik-bold text-black-400">Mackerel</Text>
                <Text className="text-sm text-black-300">Needed: 500kg @ Rs. 650/kg</Text>
                <Text className="text-xs text-black-200 mt-1">Galle • 📞 +94 718 123 456</Text>
            </View>
            <PhoneCall size={20} color="#2563eb" />
        </View>
    );
};

export default ProcurementCard;
