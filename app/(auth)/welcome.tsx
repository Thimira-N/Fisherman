import {View, Text} from 'react-native'
import React from 'react'

const Welcome = () => {
    return (
        <View className="flex-1 justify-center items-center">
            <Text className="text-3xl text-blue-500 font-bold">Welcome to the</Text>
            <Text className="text-7xl text-blue-800 font-extrabold">FISHERMAN!</Text>
            <Text className="text-2xl text-black italic">we catch | we eat | repeat</Text>
        </View>
    );
}
export default Welcome
