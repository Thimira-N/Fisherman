import { ScrollView, Text } from 'react-native';
import React from 'react';

export default function NewsTicker({ text }: { text: string }) {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="bg-primary-100 p-2 mt-4">
            <Text className="text-primary-300 font-rubik-semibold">{text}</Text>
        </ScrollView>
    );
}
