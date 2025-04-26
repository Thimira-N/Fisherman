import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { StarIcon } from 'lucide-react-native';
import images from "@/constants/images";

const tips = [
    { id: 1, title: 'Best Bait for Summer', preview: 'Learn how to select the best bait...', rating: 4 },
    { id: 2, title: 'Knot Tying Basics', preview: 'Master your knot tying skills...', rating: 5 },
    { id: 3, title: 'Eco-Friendly Fishing', preview: 'Tips for sustainable fishing...', rating: 5 },
];

export default function TipsScreen() {
    const [expanded, setExpanded] = useState(null);

    return (
        <ScrollView className="px-5 pt-3">
            {/* Featured Tip */}
            <View className="bg-primary-100 rounded-2xl p-5 shadow-md mb-6">
                <Text className="text-xl font-bold text-primary-600 mb-2">Tip of the Day 🌊</Text>
                {/*<Image source={require('@/assets/featured-tip.png')} className="w-full h-40 rounded-xl mb-3" />*/}
                <Image source={images.image2} className="w-full h-40 rounded-xl mb-3" />
                <Text className="text-black-300">Always check tide timings before fishing for better catches!</Text>
            </View>

            {/* Tip Categories and Expandable Cards */}
            <View className="flex-col gap-4 mb-20">
                {tips.map((tip) => (
                    <TouchableOpacity
                        key={tip.id}
                        onPress={() => setExpanded(expanded === tip.id ? null : tip.id)}
                        className="bg-white rounded-2xl p-4 shadow-md"
                    >
                        <View className="flex-row justify-between items-center mb-2">
                            <Text className="font-bold text-primary-500">{tip.title}</Text>
                            <View className="flex-row">
                                {Array.from({ length: tip.rating }).map((_, idx) => (
                                    <StarIcon key={idx} size={16} color="#facc15" />
                                ))}
                            </View>
                        </View>
                        {expanded === tip.id && (
                            <Text className="text-black-200">{tip.preview}</Text>
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}
