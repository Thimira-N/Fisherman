import { View, Text, TextInput, TouchableOpacity, FlatList, ToastAndroid, Platform, Alert } from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';

export default function AIFishermanBot() {
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Ahoy! How can I assist you today, Captain?' }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessages = [...messages, { from: 'user', text: input }];
        setMessages(newMessages);

        setTimeout(() => {
            const botReply = generateBotReply(input);
            setMessages([...newMessages, { from: 'bot', text: botReply }]);
        }, 800);

        setInput('');
    };

    const handleClear = () => {
        setMessages([
            { from: 'bot', text: 'Ahoy! How can I assist you today, Captain?' }
        ]);

        // Show toast or alert
        if (Platform.OS === 'android') {
            ToastAndroid.show('Chat history cleared ✅', ToastAndroid.SHORT);
        } else {
            Alert.alert('Cleared', 'Chat history cleared ✅');
        }
    };

    const generateBotReply = (text: string) => {
        if (text.toLowerCase().includes('weather')) return "Today's weather looks calm. Best time to sail: 5AM-8AM.";
        if (text.toLowerCase().includes('price')) return "The current price for Tuna is Rs.320/kg.";
        if (text.toLowerCase().includes('storm')) return "A mild storm detected North-East. Stay cautious!";
        return "I'm still learning, Captain! Try asking about 'weather', 'market price' or 'storm alerts'. ⚡";
    };

    return (
        <View className="flex-1 p-4 bg-accent-100 rounded-2xl m-4">
            {/* Top bar with Clear Button */}
            <View className="flex-row justify-between items-center mb-2">
                <Text className="font-rubik-bold text-lg text-black-300">Chat</Text>
                <TouchableOpacity onPress={handleClear} className="p-2 bg-red-400 rounded-lg">
                    <Text className="text-white font-rubik-semibold">Clear</Text>
                </TouchableOpacity>
            </View>

            {/* Chat Messages */}
            <FlatList
                data={messages}
                keyExtractor={(_, index) => index.toString()}
                renderItem={({ item }) => (
                    <View className={`my-2 ${item.from === 'bot' ? 'items-start' : 'items-end'}`}>
                        <Text className={`rounded-xl font-rubik p-3 ${item.from === 'bot' ? 'bg-primary-100 text-black-300' : 'bg-primary-300 text-white'} max-w-[80%]`}>
                            {item.text}
                        </Text>
                    </View>
                )}
                // inverted
            />

            {/* Message Input */}
            <View className="flex-row items-center mt-2">
                <TextInput
                    value={input}
                    onChangeText={setInput}
                    placeholder="Ask me anything..."
                    className="flex-1 bg-white p-3 rounded-l-xl font-rubik-light"
                />
                <TouchableOpacity onPress={handleSend} className="bg-primary-300 p-3 rounded-r-xl">
                    <Ionicons name="send" size={20} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
