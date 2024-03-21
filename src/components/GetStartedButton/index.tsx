import React from 'react';
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
  Modal,
  TouchableOpacityProps,
  Image,
} from 'react-native';

interface SignUpModalProps {
  visible: boolean;
  onClose: () => void;
}
interface GetStartedButtonProps extends TouchableOpacityProps {}

export const SignUpModal: React.FC<SignUpModalProps> = ({visible, onClose}) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}>
      <View style={signUpModalStyles.modalContainer}>
        <View style={signUpModalStyles.modalContent}>
          <Text style={signUpModalStyles.modalTitle}>Sign Up</Text>
          <TouchableOpacity style={signUpModalStyles.signUpWithGoogleButton}>
            <Image
              source={require('../../../public/images/google-logo.png')}
              style={signUpModalStyles.googleLogo}
            />
            <Text style={signUpModalStyles.signUpWithGoogleButtonText}>
              Continue with Google
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={signUpModalStyles.signUpWithAppleButton}>
            <Image
              source={require('../../../public/images/apple-logo.png')}
              style={signUpModalStyles.appleLogo}
            />
            <Text style={signUpModalStyles.signUpWithAppleButtonText}>
              Continue with Apple
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={signUpModalStyles.signUpWithEmailButton}
            onPress={onClose}>
            <Text style={signUpModalStyles.signUpWithEmailButtonText}>
              Sign up with Email
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={signUpModalStyles.cancelButton}
            onPress={onClose}>
            <Text style={signUpModalStyles.cancelButtonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const GetStartedButton: React.FC<GetStartedButtonProps> = props => {
  return (
    <>
      <TouchableOpacity style={getStartedButtonStyles.signUpButton} {...props}>
        <Text style={getStartedButtonStyles.getStarted}>Get Started</Text>
      </TouchableOpacity>
    </>
  );
};

const getStartedButtonStyles = StyleSheet.create({
  signUpButton: {
    alignItems: 'center',
    backgroundColor: '#FFA737',
    paddingVertical: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#D08424',
    width: '100%',
  },
  getStarted: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

const signUpModalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    height: '35%',
    width: '100%',
  },
  modalTitle: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#080808',
  },
  signUpWithGoogleButton: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingVertical: 14,
    borderRadius: 10,
    width: '85%',
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
  },
  signUpWithAppleButton: {
    backgroundColor: '#1F1F1F',
    borderWidth: 1,
    borderColor: '#1F1F1F',
    paddingVertical: 14,
    borderRadius: 10,
    width: '85%',
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 15,
  },
  signUpWithEmailButton: {
    backgroundColor: 'transparent',
    marginTop: 20,
  },
  signUpWithEmailButtonText: {
    color: '#1E1E1E80',
    fontWeight: '600',
    fontSize: 16,
  },
  signUpWithGoogleButtonText: {
    color: '#080808',
    fontSize: 16,
    fontWeight: 'bold',
  },
  googleLogo: {
    width: 25,
    height: 25,
  },
  signUpWithAppleButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  appleLogo: {
    width: 20,
    height: 20,
  },
  cancelButton: {
    backgroundColor: 'transparent',
    marginTop: 30,
  },
  cancelButtonText: {
    color: '#FFA737',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default GetStartedButton;
