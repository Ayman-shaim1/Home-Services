import { Modal, StyleSheet,View } from "react-native";
import CloseButton from "./CloseButton";
import colors from "../config/colors";

export default function BottomModal({ visible = false , children, onClose }){
    return  (
        <Modal visible={visible} style={styles.modal}  animationType="slide" transparent={true}>
            <View style={styles.modalWrapper}>
                <View style={styles.modalContent}>
                    <CloseButton style={styles.btnClose} onPress={onClose}/>
                    {children}
                </View>
            </View>
        </Modal> 
    );
}

const styles = StyleSheet.create({
    modal:{
        marginTop:'100%',
        backgroundColor:colors.primary,
    },
    modalWrapper:{
        paddingTop:5,
        top:'45%',
        height:'100%',
        backgroundColor:colors.secondary,
        borderRadius:20,
        // Shadow properties for iOS
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        // Elevation property for Android
        elevation: 20,
    },
    btnClose:{
        alignSelf:'flex-end'
    },
    modalContent:{
        backgroundColor:colors.white,
        height:'100%',
        padding:10,
        borderRadius:20,
    },
});