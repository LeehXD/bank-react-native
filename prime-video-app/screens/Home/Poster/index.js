import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Poster () {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <TouchableOpacity style={styles.btnImg}>
                    <Image style={styles.img} source={require('../../../assets/movies/sobrenatural.png')} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginBottom: 16,
    },
    btnImg: {
        alignItems: 'center',
        paddingHorizontal: 10

    },
    img: {
        borderRadius: 10,
        
    }
})

