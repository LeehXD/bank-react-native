import React, {useState} from "react";
import { MotiView, AnimatePresence, MotiText } from 'moti'

import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

export default function Movements ({ data }) {
    const [showValue, setShowValue] = useState(false)
    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue (!showValue)}>
            <Text style={styles.date}>{data.date}</Text>
            <View style={styles.content}>

                <Text style={styles.label}>{data.label}</Text>

                { showValue ? (

                <AnimatePresence exitBeforeEnter>
                    <MotiText 
                        style={data.type === 1 ? styles.value : styles.expenses}

                        from={{ 
                            translateX: 100,
                        }} 
                        animate={{
                            translateX: 0,
                        }}
                        transition={{
                            type: "timing",
                            duration: 500,
                        }}    
                    >
                        {data.type === 1 ? `R$ ${data.value}` : `- R$ ${data.value}`}
                    </MotiText>
                </AnimatePresence>
                    ) : (

                <AnimatePresence exitBeforeEnter>
                    <MotiView 
                        style={styles.skeleton}

                        from={{ 
                            opacity: 0,
                        }} 
                        animate={{
                            opacity: 1,
                        }}
                        transition={{
                            type: "timing",
                        }}    
                    />
                </AnimatePresence>
                
                )}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        marginBottom: 24,
        borderBottomWidth: 0.5,
        borderBottomColor: '#c3c3c3',
    },
    date: {
        color: '#333333',
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 2,
        marginBottom: 8

    },
    label: {
        color: '#151515',
        fontWeight: '500',
        fontSize: 16
    },
    value: {
        color: '#2FB9C4',
        fontWeight: '500',
        fontSize: 16
    },
    expenses: {
        color: '#e74c3c',
        fontWeight: '500',
        fontSize: 16
    },
    skeleton: {
        marginTop: 6,
        width: 80,
        height: 10,
        backgroundColor: '#c3c3c3',
        borderRadius: 8,
    }

})