import { View } from 'react-native';
import React from 'react';

export default function GlassCard({ children }: { children: React.ReactNode }) {
    return (
        <View className="bg-white/90 backdrop-blur-md rounded-2xl p-4 mt-6 shadow-md">
            {children}
        </View>
    );
}
