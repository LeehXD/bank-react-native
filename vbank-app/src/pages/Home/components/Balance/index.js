import React from "react";
import { MotiView } from 'moti'
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default function Balance ({ saldo, gastos }) {
    return (
        <MotiView 
            style={styles.container}
            from={{ 
                rotateX: '-100deg',
                opacity: 0
            }} 
            animate={{
                rotateX: '0deg',
                opacity: 1
            }}
            transition={{
                type: "timing",
                duration: 800,
                delay: 500
            }}
        >
            
           <View style={styles.item}>
                <Text style={styles.itemTitle}>
                    Saldo
                </Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{ saldo }</Text>
                </View>
           </View>


           <View style={styles.item}>
                <Text style={styles.itemTitle}>
                    Gastos
                </Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balanceSpending}>{ gastos }</Text>
                </View>
           </View>

        </MotiView>
    );
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#ffffff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
          },
        shadowOpacity: 0.10,
        shadowRadius: 3.84,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 18,
        paddingEnd: 18,
        marginTop: -24,
        marginStart: 14,
        marginEnd: 14,
        borderRadius: 10,
        paddingTop: 22,
        paddingBottom: 22,
    },

    item: {

    },  

    itemTitle :{
        color: '#333333',
        fontSize: 20,

    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    currencySymbol :{
        color: '#333333',
        marginRight: 6,
    },

    balance :{
        fontSize: 22,
        color: '#2FB9C4'
    },

    balanceSpending : {
        fontSize: 22,
        color:'#e74c3c'
    }
})