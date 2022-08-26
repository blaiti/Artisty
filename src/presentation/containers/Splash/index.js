import React from "react";
import { StyleSheet, View, Image } from 'react-native';
import { Colors } from '../../styles';

export default function Splash () {
    return(
        <View style={styles.container}>
            <Image
                resizeMode='contain'
                style={styles.picture}
                source={require('../../assets/images/white-logo.png')} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: Colors.PRIMARY,
    },
    picture: {
        width: '80%'
    }
});