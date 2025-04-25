import { View, Text, Image } from 'react-native';
import icons from '@/constants/icons';

const MarketCard = () => {
    return (
        <View className="bg-green-100 rounded-2xl p-4 mb-4">
            <View className="flex-row justify-between items-center mb-2">

                <Text className="text-green-800 font-rubik-bold text-lg">Market Prices</Text>

                <Image source={icons.market} className="w-6 h-6" />
            </View>

            <Text className="text-black-100">Tuna: Rs. 900/kg</Text>

            <Text className="text-black-100">Sardines: Rs. 300/kg</Text>

            <Text className="text-black-100">Crabs: Rs. 1500/kg</Text>

        </View>
    );
};

export default MarketCard;
