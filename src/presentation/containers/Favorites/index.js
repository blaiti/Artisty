import React, {useContext} from "react";
import { StyleSheet, View, Text, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import { Colors, Typography } from '../../styles';
import { DataContext } from '../../../application';

import PictureCard from "../../components/Cards/PictureCard";

export default function Favorites ({navigation}) {
    const {state} = useContext(DataContext);

    return(
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.headerContainer}>
                <Icon name="align-left" color={Colors.BLACK} size={20} onPress={() => navigation.toggleDrawer()} />
                <Text style={[Typography.H4, styles.title]} numberOfLines={1}>Favorites</Text>
                <Icon name="filter" color={Colors.BLACK} size={20} />
            </View>

            {/* Body */}
            <FlatList
                data={state.favorites}
                numColumns={2}
                style={styles.bodyContainer}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.id} 
                renderItem={({item}) => <PictureCard picture={item} navigation={navigation} />}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    // Header
    headerContainer: {
        elevation: 2,
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Colors.WHITE,
    },
    title: {
        textAlign: 'center',
        color: Colors.BLACK
    },
    // Body
    bodyContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.GRAY_THIN,
    }
});