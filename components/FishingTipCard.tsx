import { View, Text, Image } from 'react-native';
import icons from '@/constants/icons';

const TipCard = () => {
    return (
        <View className="bg-blue-100 rounded-2xl p-4 mb-4">
            <View className="flex-row justify-between items-center mb-2">
                <Text className="text-blue-800 font-rubik-bold text-lg">Fishing Tips</Text>
                <Image source={icons.fishingTips} className="w-6 h-6" />
            </View>
            <Text className="text-black-100">🐟 Active area: Kalpitiya</Text>
            <Text className="text-black-100">Best time: 4 AM - 9 AM</Text>
        </View>
    );
};

export default TipCard;
