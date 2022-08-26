import React from "react";
import { StyleSheet, TouchableOpacity, Image, Text } from 'react-native';

import routes from '../../../config/routes';
import { Colors, Typography } from '../../../styles';

export default function PictureCard ({ picture, navigation }) {
    return(
        <TouchableOpacity 
            activeOpacity={1}
            style={styles.container}
            onPress={() => navigation.navigate(routes.ImageDetails, {picture: picture})}>
                <Image
                    resizeMode='cover'
                    style={styles.picture}
                    source={{ uri: picture.picture }} />
                <Text style={[Typography.H5, styles.title]} numberOfLines={1}>{picture.name}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 5,
        elevation: 5,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
    },
    picture: {
        width: '100%',
        aspectRatio: 1,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    title: {
        marginTop: 10,
        marginBottom: 10,
        textAlign: 'center',
        color: Colors.BLACK
    }
});