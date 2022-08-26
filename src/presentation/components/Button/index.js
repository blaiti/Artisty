import React from "react";
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

import { Colors, Typography } from '../../styles';

export default function Button ({text, onPress}) {
    return(
        <TouchableOpacity
            activeOpacity={1}
            style={styles.container}
            onPress={onPress}>
                <Text style={[Typography.H3, styles.text]} numberOfLines={1}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderRadius: 10,
        alignItems: 'center',
        backgroundColor: Colors.BLACK
    },
    text: {
        color: Colors.WHITE
    },
});