import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Dimensions, Animated } from 'react-native';
import PagerView from 'react-native-pager-view';

import PriceDashboardScreen from '../(market)/price-dashboard';
import SellFishScreen from '../(market)/sell-fish';
import BuyFishScreen from '../(market)/buy-fish';
import ProcurementNeedsScreen from '../(market)/procurement-needs';
import TransactionHistoryScreen from '../(market)/transaction-history';
import {SafeAreaView} from "react-native-safe-area-context";

const { width } = Dimensions.get('window');

const SCREENS = [
    { name: 'Prices', component: PriceDashboardScreen},
    { name: 'Sell Fish', component: SellFishScreen},
    { name: 'Buy Fish', component: BuyFishScreen},
    { name: 'Procurements', component: ProcurementNeedsScreen},
    { name: 'History', component: TransactionHistoryScreen},
];

export default function Market() {
    const pagerRef = useRef<PagerView>(null);
    const scrollX = useRef(new Animated.Value(0)).current;
    const [pageIndex, setPageIndex] = useState(0);

    const navigateTo = (index: number) => {
        pagerRef.current?.setPage(index);
        setPageIndex(index);
    };

    return (
        <SafeAreaView className="flex-1 bg-white">

            {/* Top Navigation with Animated Underline */}
            <Text className="text-3xl text-center font-rubik-extrabold text-primary-300 mt-2">M A R K E T</Text>
            <View className="p-5 bg-primary-200 mt-5">
                <View className="flex-row justify-around relative items-center">
                    {SCREENS.map((screen, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => navigateTo(index)}
                            className={`${pageIndex === index ? 'bg-primary-300 px-4 py-3 rounded-full' : 'bg-white/90 px-4 py-3 rounded-full'}`}
                        >
                            <Text className={`text-base font-rubik-bold ${pageIndex === index ? 'text-white' : 'text-black'}`}>
                                {screen.name}
                            </Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </View>

            {/* Pager View */}
            <PagerView
                style={{ flex: 1 }}
                initialPage={0}
                ref={pagerRef}
                onPageScroll={Animated.event(
                    [{ nativeEvent: { offset: scrollX } }],
                    { useNativeDriver: false }
                )}
                onPageSelected={e => setPageIndex(e.nativeEvent.position)}
            >
                {SCREENS.map((screen, index) => (
                    <View key={index} className="flex-1">
                        <screen.component />
                    </View>
                ))}
            </PagerView>
        </SafeAreaView>
    );
}
