import React from 'react';
import {
    StyleSheet, Text,
    View, TouchableOpacity
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { primaryColor } from '../../theme/colors';

const PaymentMethod = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 16 }}>Selected Payment:</Text>
            <TouchableOpacity
                onPress={() => navigation.navigate('PaymentMethod')}
                style={styles.changeView}
            >
                <Text style={styles.primaryTxt}>WALLET</Text>
                <Text style={styles.secondaryTxt}>CHANGE</Text>
                <MaterialIcons name='keyboard-arrow-right' size={25} />
            </TouchableOpacity>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        width: 250,
        paddingLeft: 10,
        marginTop: 20
    },
    changeView: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    primaryTxt: {
        color: primaryColor,
        fontSize: 18,
        flex: 1
    },
    secondaryTxt: {
        color: 'gray'
    }
});

export default PaymentMethod;