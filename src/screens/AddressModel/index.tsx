import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
} from 'react-native';
import globalStyles from '../../shared/theme/globalStyles';
import { Strings } from '../../shared/strings';
import styles from './style';
import { NavigationRoutes } from '../../shared/NavigationRoutes';
import { useNavigation } from '@react-navigation/native';


interface CustomModalProps {
  visible: boolean;
  onClose: () => void;
  userName?: string; 
  onAddAddress?: () => void; 
}

const CustomModal: React.FC<CustomModalProps> = ({
  visible,
  onClose,
  userName = 'Michel',
  onAddAddress,
}) => {
  const navigation = useNavigation();
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose} 
    >
      <View style={styles.modalOverlay}>
        <View style={styles.modalContent}>
          {/* Close Button */}
          <TouchableOpacity
            style={styles.closeButton}
            onPress={onClose}
          >
            <Text style={[globalStyles.caption_16_700, styles.closeButtonText]}>×</Text>
          </TouchableOpacity>

          {/* Welcome Message */}
          <Text style={[globalStyles.caption_20_700, styles.welcomeText]}>
            Welcome {userName} 👋
          </Text>
        <View style={styles.subContainer}>
          {/* Title */}
          <Text style={[globalStyles.caption_16_400, styles.title]}>
            {Strings.addaddress}
          </Text>

          {/* Add Address Button */}
          <TouchableOpacity
            style={styles.addButton}
            onPress={()=>navigation.navigate(NavigationRoutes.addaddress)}
          >
            <Text style={[globalStyles.caption_16_700, styles.addButtonText]}>
              {Strings.clickHere}
            </Text>
          </TouchableOpacity>

          {/* Note */}
          <Text style={[globalStyles.caption_14_400, styles.note]}>
            {Strings.alreadyDone}
          </Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};


export default CustomModal;