import React from 'react'
import { View, StyleSheet, Image, TouchableOpacity, Text, ScrollView } from 'react-native';

export default function Watched () {
    return(
        <View style={styles.container}>
            <Text style={styles.titleMovie}>Continue Assistindo</Text>
            <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={styles.btnImg}>
                    <Image style={styles.img} source={require('../../../assets/movies/1.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnImg}>
                    <Image style={styles.img} source={require('../../../assets/movies/4.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnImg}>
                    <Image style={styles.img} source={require('../../../assets/movies/3.png')} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnImg}>
                    <Image style={styles.img} source={require('../../../assets/movies/9.png')} />
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        marginBottom: 10,
    },
    titleMovie: {
        color: '#fefefe',
        fontSize: 14,
        fontWeight: '500',
        marginBottom: 10,
        paddingHorizontal: 10
    },  

    btnImg: {
        paddingHorizontal: 10
    },
})

