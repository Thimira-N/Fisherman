import { View, TouchableOpacity, Text, Animated } from 'react-native';
import { useState, useRef } from 'react';
import React from 'react';

export function Tabs({ defaultValue, children, className }) {
    const [activeTab, setActiveTab] = useState(defaultValue);

    return (
        <View className={className}>
            {children.map((child) => {
                if (child.type.name === 'TabsList') {
                    return React.cloneElement(child, { activeTab, setActiveTab });
                }
                if (child.type.name === 'TabsContent') {
                    return child.props.value === activeTab ? child : null;
                }
                return null;
            })}
        </View>
    );
}

export function TabsList({ children, activeTab, setActiveTab, className }) {
    return (
        <View className={`flex-row ${className}`}>
            {children.map((child) =>
                React.cloneElement(child, { activeTab, setActiveTab })
            )}
        </View>
    );
}

export function TabsTrigger({ value, children, activeTab, setActiveTab, className }) {
    const isActive = activeTab === value;
    return (
        <TouchableOpacity
            onPress={() => setActiveTab(value)}
            className={`flex-1 items-center p-2 ${isActive ? 'border-b-2 border-primary-500' : ''} ${className}`}
        >
            <Text className={`${isActive ? 'text-primary-500 font-bold' : 'text-gray-400'}`}>
                {children}
            </Text>
        </TouchableOpacity>
    );
}

export function TabsContent({ children }) {
    return <View className="p-2">{children}</View>;
}
