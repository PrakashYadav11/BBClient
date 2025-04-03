import { StyleSheet } from 'react-native';
import Colors from '../../../shared/theme/colors';
import {
    heightPixel,
    pixelSizeHorizontal,
    pixelSizeVertical,
} from "../../../utils/ResponsiveDimensions";
import FontSize from "../../../shared/theme/fontSize";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    headerContainer: {
        paddingVertical: pixelSizeVertical(10),
        paddingHorizontal: pixelSizeHorizontal(4),
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: heightPixel(19),
    },
    oneSide: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: pixelSizeHorizontal(10),
    },
    image: {
        width: pixelSizeHorizontal(50),
        height: pixelSizeVertical(50),
        backgroundColor: Colors.black,
        borderRadius: 50,
    },
    text: {
        fontSize: FontSize.font_16,
    },
    btn: {
        padding: pixelSizeHorizontal(10),
        backgroundColor: Colors.primary_color,
        borderRadius: 50,
    },
    chatContainer: {
        padding: 10,
    },
    sentMessageContainer: {
        alignSelf: 'flex-end',
        marginVertical: 5,
        maxWidth: '75%',
    },
    receivedMessageContainer: {
        alignSelf: 'flex-start',
        marginVertical: 5,
        maxWidth: '75%',
    },
    sentMessage: {
        backgroundColor: '#0057FF',
        padding: 10,
        borderRadius: 10,
    },
    receivedMessage: {
        backgroundColor: '#E5E5E5',
        padding: 10,
        borderRadius: 10,
    },
    sentText: {
        color: '#fff',
    },
    receivedText: {
        color: '#000',
    },
    messageFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
    },
    timeText: {
        fontSize: 12,
        color: '#ddd',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderColor: '#ddd',
        backgroundColor: '#fff',
    },
    input: {
        flex: 1,
        padding: 10,
        backgroundColor: '#f1f1f1',
        borderRadius: 20,
    },
    sendButton: {
        marginLeft: 10,
        backgroundColor: '#0057FF',
        padding: 10,
        borderRadius: 25,
    },
});

export default styles;


