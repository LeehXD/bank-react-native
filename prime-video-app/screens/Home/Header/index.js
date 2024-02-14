import React from 'react'
import { View, StyleSheet, Image, StatusBar } from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 22 : 64;

export default function Header () {
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Image style={styles.img} source={require('../../../assets/logo.png')} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        paddingTop: statusBarHeight,
        alignItems: 'center',
        marginBottom: 32

    }
})

