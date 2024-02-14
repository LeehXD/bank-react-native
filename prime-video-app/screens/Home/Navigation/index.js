import React from 'react'
import { View, StyleSheet, Text,TouchableOpacity } from 'react-native';

export default function Navigation () {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.btnCategory}>
                    <Text style={styles.category}> Home </Text>
                </TouchableOpacity>
             
                <TouchableOpacity>
                    <Text style={styles.category}> Filmes </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.category}> Series </Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Text style={styles.category}> Novelas </Text>
                </TouchableOpacity>   

            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginBottom: 16
    },
    content: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    btnCategory: {
        borderBottomWidth: 1,
        backgroundColor: '#00A8E1',
        paddingVertical: 3,
        paddingHorizontal: 5,
        borderRadius: 44 / 2,
    },
    category:{
        color: '#fefefe',
        fontWeight: '500',
    }
})

