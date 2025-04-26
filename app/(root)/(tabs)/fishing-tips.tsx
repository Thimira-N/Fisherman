import { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, Animated, Dimensions } from 'react-native';
import PagerView from 'react-native-pager-view';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import TipsScreen from '../(community)/tips-screen';
import LocationsScreen from '../(community)/locations-screen';
import ConnectScreen from '../(community)/connect-screen';

const { width } = Dimensions.get('window');

const tabs = ['Tips', 'Locations', 'Connect'];

const FishingTips = () => {

    const pagerRef = useRef<PagerView>(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const [pageIndex, setPageIndex] = useState(0);

    const navigateTo = (index: number) => {
        pagerRef.current?.setPage(index);
        setPageIndex(index);
    };

    return (
        <LinearGradient colors={['#dbeafe', '#f0f9ff']} style={{ flex: 1 }}>
            <SafeAreaView className="flex-1">

                {/* Title */}
                <Text className="text-3xl text-center font-rubik-extrabold text-primary-300 mt-2">C O M M U N I T Y</Text>

                {/* Top Tabs */}
                <View className="p-5">
                    <View className="flex-row justify-around items-center relative">
                        {tabs.map((tab, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => navigateTo(index)}
                                className="flex-1 items-center"
                            >
                                <Text className={`font-bold text-base ${pageIndex === index ? 'text-primary-500' : 'text-gray-500'}`}>
                                    {tab}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>

                    {/* Animated Underline */}
                    <Animated.View
                        style={{
                            height: 4,
                            width: width / tabs.length,
                            backgroundColor: '#2563eb',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            transform: [
                                {
                                    translateX: scrollX.interpolate({
                                        inputRange: [0, 1, 2],
                                        outputRange: [0, width / tabs.length, (width / tabs.length) * 2],
                                    }),
                                },
                            ],
                            borderRadius: 999,
                        }}
                    />
                </View>

                {/* Pager View */}
                <PagerView
                    style={{ flex: 1 }}
                    initialPage={0}
                    ref={pagerRef}
                    onPageScroll={Animated.event(
                        [{ nativeEvent: { position: scrollX } }],
                        { useNativeDriver: false }
                    )}
                    onPageSelected={(e) => setPageIndex(e.nativeEvent.position)}
                >
                    <View key="1" className="flex-1">
                        <TipsScreen />
                    </View>
                    <View key="2" className="flex-1">
                        <LocationsScreen />
                    </View>
                    <View key="3" className="flex-1">
                        <ConnectScreen />
                    </View>
                </PagerView>

            </SafeAreaView>
        </LinearGradient>
    )
}
export default FishingTips
