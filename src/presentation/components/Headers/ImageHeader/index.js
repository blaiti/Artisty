import React, {useContext} from "react";
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Colors } from '../../../styles';
import { DataContext } from '../../../../application';

export default function ImageHeader ({navigation, picture}) {
    const {dataContext} = useContext(DataContext);

    return(
        <View style={styles.container}>
            <TouchableOpacity 
                activeOpacity={1}
                style={styles.iconContainer}
                onPress={() => navigation.goBack()}>
                    <Icon name="arrow-left" color={Colors.WHITE} size={25} />
            </TouchableOpacity>
            <TouchableOpacity
                activeOpacity={1}
                style={styles.iconContainer}
                onPress={() => dataContext.changeFavorites(picture)}>
                    <Icon name="heart" color={Colors.WHITE} size={25} />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconContainer: {
        padding: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    }
});