import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Actions() {
 return (
    <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>

        
        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.containerButton}>
                <AntDesign name="arrowup" size={26} color="#fefefe"/>
            </View>
            <Text style={styles.labelButton}>Entrada</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.containerButton}>
                <AntDesign  style={styles.icon} name="arrowdown" size={26} color="#fefefe"/>
            </View>
            <Text style={styles.labelButton}>Saida</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.containerButton}>
                <FontAwesome6 name="pix" size={26} color="#fefefe"/>
            </View>
            <Text style={styles.labelButton}>PIX</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
            <View style={styles.containerButton}>
                <MaterialCommunityIcons name="barcode" size={26} color="#fefefe"/>
            </View>
            <Text style={styles.labelButton}>Boleto</Text>
        </TouchableOpacity>

         <TouchableOpacity style={styles.actionButton}>
            <View style={styles.containerButton}>
                <AntDesign  name="creditcard" size={26} color="#fefefe"/>
            </View>
            <Text style={styles.labelButton}>Cartão </Text>
        </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create ({
    container: {
        maxHeight: 80,
        marginTop: 24,
        paddingEnd: 14,
        paddingStart: 14,
        marginBottom: 24
    },
    actionButton: {
        alignItems: 'center',
        marginRight: 25,
    },
    containerButton: {
        backgroundColor: '#2FB9C4',
        height: 50,
        width: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    labelButton: {
        color: '#151515',
        marginTop: 4,
        textAlign: 'center',

    }
})