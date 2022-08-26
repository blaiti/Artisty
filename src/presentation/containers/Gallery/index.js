import React, {useState, useContext} from "react";
import Icon from 'react-native-vector-icons/Feather';
import { StyleSheet, View, Text, TextInput, FlatList, Modal } from 'react-native';

import { Colors, Typography } from '../../styles';
import { DataContext } from '../../../application';

import PictureCard from "../../components/Cards/PictureCard";
import SearchByName from "../../../application/utils/search";
import SortModal from "../../components/Modals/SortModal";

export default function Gallery ({navigation}) {
    const {state} = useContext(DataContext);

    const [modalVisible, setModalVisible] = useState(false);
    const [search, setSearch] = useState("");
    const [data, setData] = useState(state.data);
    
    const __search = (text) => {
        setSearch(text);
        setData(text.length === 0 ? state.data : SearchByName(state.data, text));
    }

    return(
        <View style={styles.container}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)} >
                    <SortModal 
                        data={data}
                        setData={setData}
                        onClose={() => setModalVisible(!modalVisible)} />
            </Modal>

            {/* Header */}
            <View style={styles.headerContainer}>
                <View style={styles.rowContainer}>
                    <Icon name="align-left" color={Colors.BLACK} size={20} onPress={() => navigation.toggleDrawer()} />
                    <Text style={[Typography.H4, styles.title]} numberOfLines={1}>Home</Text>
                    <Icon name="filter" color={Colors.BLACK} size={20} onPress={() => setModalVisible(true)} />
                </View>
                <View style={styles.rowContainer}>
                    <TextInput
                        value={search}
                        style={styles.searchInput}
                        onChangeText={text => __search(text)}
                        placeholder="Search.."
                        placeholderTextColor={Colors.GRAY_DARK} />
                    <Icon name="sliders" color={Colors.BLACK} size={20} onPress={() => setModalVisible(true)} />
                </View>
            </View>

            {/* Body */}
            <FlatList
                data={data}
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
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: Colors.WHITE,
    },
    rowContainer: {
        paddingTop: 10,
        paddingBottom: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    title: {
        textAlign: 'center',
        color: Colors.BLACK
    },
    searchInput: {
        flex: 1,
        padding: 5,
        marginRight: 5,
        borderRadius: 5,
        color: Colors.BLACK,
        backgroundColor: Colors.GRAY_THIN
    },
    // Body
    bodyContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: Colors.GRAY_THIN,
    }
});