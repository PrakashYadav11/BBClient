import React, { useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
    TextInput,
    FlatList,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Colors from '../../../shared/theme/colors';
import styles from './styles';
import { NavigationRoutes } from '../../../shared/NavigationRoutes';

export default function ChatDetail() {
    const navigation = useNavigation();
    const route = useRoute();
    const data = route?.params?.data;

    // Chat state
    const [messages, setMessages] = useState([]);
    const [inputText, setInputText] = useState('');

    // Send Message Function
    const sendMessage = () => {
        if (inputText.trim().length > 0) {
            const newMessage = {
                id: Date.now().toString(),
                text: inputText,
                type: 'sent',
                time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
                seen: false,
            };
            setMessages((prevMessages) => [newMessage, ...prevMessages]);
            setInputText('');
        }
    };

    // Render Messages
    const renderItem = ({ item }) => (
        <View style={item.type === 'sent' ? styles.sentMessageContainer : styles.receivedMessageContainer}>
            <View style={item.type === 'sent' ? styles.sentMessage : styles.receivedMessage}>
                <Text style={item.type === 'sent' ? styles.sentText : styles.receivedText}>{item.text}</Text>
                <View style={styles.messageFooter}>
                    <Text style={styles.timeText}>{item.time}</Text>
                    {item.type === 'sent' && item.seen && (
                        <FontAwesome name="check-double" size={14} color="white" />
                    )}
                </View>
            </View>
        </View>
    );

    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <View style={styles.oneSide}>
                    <TouchableOpacity onPress={() =>navigation.navigate(NavigationRoutes.bottom)} activeOpacity={0.8}>
                        <Entypo name='chevron-small-left' size={35} color={'#5C5959'} />
                    </TouchableOpacity>
                    <Image source={data.image} style={styles.image} />
                    <Text style={styles.text}>{data?.name}</Text>
                </View>

                <View style={styles.oneSide}>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                        <Feather name='phone' size={20} color={Colors.white} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn} activeOpacity={0.8}>
                        <Entypo name='dots-three-vertical' size={20} color={Colors.white} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Chat Messages */}
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.chatContainer}
                inverted
            />

            {/* Message Input */}
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="Message"
                    style={styles.input}
                    value={inputText}
                    onChangeText={setInputText}
                />
                <TouchableOpacity onPress={sendMessage} style={styles.sendButton}>
                    <Entypo name="paper-plane" size={22} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}
