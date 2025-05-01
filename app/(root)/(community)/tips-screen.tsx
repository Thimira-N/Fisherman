import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { StarIcon } from 'lucide-react-native';
import images from '@/constants/images';
import { Ionicons } from '@expo/vector-icons';

const tips = [
    {
        id: 1,
        title: 'Best Bait for Summer',
        preview: 'Summer heat changes fish behavior. Discover the top-performing baits for warm waters.',
        rating: 4,
    },
    {
        id: 2,
        title: 'Knot Tying Basics',
        preview: 'Step-by-step guide to master essential knots for secure hooks and efficient rigging.',
        rating: 5,
    },
    {
        id: 3,
        title: 'Eco-Friendly Fishing',
        preview: 'Reduce plastic, respect marine life, and keep oceans clean while catching your haul.',
        rating: 5,
    },
];

export default function TipsScreen() {
    const [expanded, setExpanded] = useState(null);

    return (
        <ScrollView className="flex-1 bg-white px-5 pt-4">
            {/* Header */}
            <View className="mb-4">
                <Text className="text-2xl font-extrabold text-primary-500">Fishing Tips & Tricks 🎣</Text>
                <Text className="text-black-100 mt-1">Sharpen your skills with expert insights and guides.</Text>
            </View>

            {/* Featured Tip */}
            <View className="bg-primary-100 rounded-3xl p-5 shadow-md mb-6">
                <View className="flex-row items-center mb-3">
                    <Ionicons name="bulb-outline" size={22} color="#1d4ed8" />
                    <Text className="text-lg font-bold text-primary-600 ml-2">Tip of the Day 🌊</Text>
                </View>
                <Image
                    source={images.image2}
                    className="w-full h-40 rounded-2xl mb-3"
                    resizeMode="cover"
                />
                <Text className="text-black-300 leading-relaxed">
                    Always check tide timings before fishing — it boosts your chances of a successful catch during peak feeding times.
                </Text>
            </View>

            {/* Tips List */}
            <View className="flex-col gap-4 mb-20">
                {tips.map((tip) => (
                    <TouchableOpacity
                        key={tip.id}
                        onPress={() => setExpanded(expanded === tip.id ? null : tip.id)}
                        activeOpacity={0.9}
                        className="bg-white border border-primary-100 rounded-2xl p-4 shadow-sm transition-all duration-300"
                    >
                        <View className="flex-row justify-between items-center mb-2">
                            <Text className="text-primary-500 font-semibold text-base">{tip.title}</Text>
                            <View className="flex-row">
                                {Array.from({ length: tip.rating }).map((_, idx) => (
                                    <StarIcon key={idx} size={16} color="#facc15" strokeWidth={1.5} />
                                ))}
                            </View>
                        </View>

                        <Text
                            className={`text-black-200 text-sm transition-opacity ${
                                expanded === tip.id ? 'opacity-100' : 'opacity-60'
                            }`}
                            numberOfLines={expanded === tip.id ? undefined : 2}
                        >
                            {tip.preview}
                        </Text>

                        {expanded === tip.id && (
                            <TouchableOpacity className="mt-3 self-start bg-primary-200 px-3 py-1 rounded-full">
                                <Text className="text-sm font-medium text-primary-600">Read More</Text>
                            </TouchableOpacity>
                        )}
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
}
