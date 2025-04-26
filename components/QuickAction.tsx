import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
// import { Truck } from 'lucide-react-native';
import { MapPin, CalendarDays, CloudSun, Wind, Waves, ArrowUpRight, ArrowDownRight, Fish, LogOut, AlertTriangle, Search } from "lucide-react-native";

const QuickAction = () => {
    return (
        <View className="mb-10">
            <Text className="font-rubik-bold text-lg mb-4 text-[#1e3a8a]">Quick Actions</Text>
            <View className="flex-row flex-wrap justify-between gap-4">
                <TouchableOpacity className="bg-white w-[48%] p-4 rounded-xl shadow-md items-center">
                    <Fish size={28} color="#0f766e" />
                    <Text className="mt-2 font-medium">Log Catch</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-white w-[48%] p-4 rounded-xl shadow-md items-center">
                    <CloudSun size={28} color="#2563eb" />
                    <Text className="mt-2 font-medium">Check Weather</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-white w-[48%] p-4 rounded-xl shadow-md items-center">
                    <Search size={28} color="#7c3aed" />
                    <Text className="mt-2 font-medium">Find Buyers</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-white w-[48%] p-4 rounded-xl shadow-md items-center">
                    <AlertTriangle size={28} color="#dc2626" />
                    <Text className="mt-2 font-medium">Report Issue</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default QuickAction;
