import React, {useState} from "react";
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet, View, Text } from 'react-native';
import {Picker} from '@react-native-picker/picker';

import { Colors, Typography } from '../../../styles';
import { categories, sizes, types } from '../../../../infrastructure/data'
import Button from '../../Button';

export default function FilterModal ({onClose}) {
    const [category, setCategory] = useState(null);
    const [size, setSize] = useState(null);
    const [type, setType] = useState(null);

    return(
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Text style={[Typography.H3, styles.title]} numberOfLines={1}>Filter</Text>
                <Icon name="x-square" color={Colors.BLACK} size={25} onPress={onClose} />
            </View>

            {/* Body */}
            <View style={styles.bodyContainer}>
                <View style={styles.blockContainer}>
                    <Text style={[Typography.H5, styles.title]}>Category</Text>
                    <Picker
                        selectedValue={category}
                        onValueChange={(item) => setCategory(item)} >
                            <Picker.Item label="Select category" value={null} enabled={false} />
                            {categories.map((item, index) => (
                                <Picker.Item key={index} label={item.name} value={item.id} />
                            ))}
                    </Picker>
                </View>     
                <View style={styles.blockContainer}>
                    <Text style={[Typography.H5, styles.title]}>Size</Text>
                    <Picker
                        selectedValue={size}
                        onValueChange={(item) => setSize(item)} >
                            <Picker.Item label="Select size" value={null} enabled={false} />
                            {sizes.map((item, index) => (
                                <Picker.Item key={index} label={item.label} value={item.id} />
                            ))}
                    </Picker>
                </View>
                <View style={styles.blockContainer}>
                    <Text style={[Typography.H5, styles.title]}>Type</Text>
                    <Picker
                        selectedValue={type}
                        onValueChange={(item) => setType(item)} >
                            <Picker.Item label="Select type" value={null} enabled={false} />
                            {types.map((item, index) => (
                                <Picker.Item key={index} label={item.label} value={item.id} />
                            ))}
                    </Picker>
                </View>        
            </View>
            
            {/* Footer */}
            <View style={styles.footerContainer}>
                <Button
                    text='Save'
                    onPress={onClose} />
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
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
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
        padding: 20,
        backgroundColor: Colors.WHITE
    },
    blockContainer: {
        marginBottom: 10
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