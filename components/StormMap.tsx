import { View, Text, Image } from 'react-native';
import icons from '@/constants/icons';

const StormCard = () => {
    return (
        <View className="bg-danger/10 rounded-2xl p-4 mb-4 flex-row justify-between items-center">
            <View>
                <Text className="text-red-600 font-rubik-bold text-lg">Storm Tracker</Text>
                <Text className="text-black-100 mt-1">Storm near Eastern coast</Text>
                <Text className="text-black-100">Expected: 6 PM - 10 PM</Text>
            </View>
            <Image source={icons.storm} className="w-14 h-14" />
        </View>
    );
};

export default StormCard;
