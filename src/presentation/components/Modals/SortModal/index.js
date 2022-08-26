import React, {useState} from "react";
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import { Colors, Typography } from '../../../styles';
import Button from '../../Button';
import Sort from "../../../../application/utils/sort";

export default function SortModal ({onClose, data, setData}) {
    const [criteria, setCriteria] = useState(1);
    
    return(
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={[Typography.H3, styles.title]} numberOfLines={1}>Sort By</Text>
                <Icon name="x-square" color={Colors.BLACK} size={25} onPress={onClose} />
            </View>

            {/* Body */}
            <View style={styles.bodyContainer}>
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setCriteria(1)}
                    style={[styles.blockContainer, criteria === 1 ? {backgroundColor: Colors.GRAY_DARK} : null]}>
                        <Text style={[Typography.H5, styles.subTitle, criteria === 1 ? {color: Colors.WHITE} : null]} numberOfLines={1}>Name</Text>
                </TouchableOpacity> 
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setCriteria(2)}
                    style={[styles.blockContainer, criteria === 2 ? {backgroundColor: Colors.GRAY_DARK} : null]}>
                        <Text style={[Typography.H5, styles.subTitle, criteria === 2 ? {color: Colors.WHITE} : null]} numberOfLines={1}>Category</Text>
                </TouchableOpacity>   
                <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setCriteria(3)}
                    style={[styles.blockContainer, criteria === 3 ? {backgroundColor: Colors.GRAY_DARK} : null]}>
                        <Text style={[Typography.H5, styles.subTitle, criteria === 3 ? {color: Colors.WHITE} : null]} numberOfLines={1}>Size</Text>
                </TouchableOpacity>        
            </View>
            
            {/* Footer */}
            <View style={styles.footerContainer}>
                <Button
                    text='Save'
                    onPress={() => {
                        setData(Sort(data, criteria));
                        onClose();
                    }} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    // Header
    headerContainer:{
        elevation: 2,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'flex-end',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        justifyContent: 'space-between',
        backgroundColor: Colors.WHITE
    },
    title: {
        color: Colors.BLACK,
    },
    // Body
    bodyContainer: {
        paddingLeft: 20,
        paddingRight: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: Colors.WHITE
    },
    blockContainer: {
        margin: 5,
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 30,
        backgroundColor: Colors.GRAY_THIN
    },
    subTitle: {
        color: Colors.BLACK,
    },
    // Footer
    footerContainer: {
        padding: 20,
        backgroundColor: Colors.WHITE
    }
});