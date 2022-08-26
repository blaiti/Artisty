import React, {useState} from "react";
import { StyleSheet, Dimensions, Image, View, ImageBackground, ScrollView, Text } from 'react-native';

import { Colors, Typography } from '../../styles';
import ImageHeader from "../../components/Headers/ImageHeader";

export default function ImageDetails ({navigation, route}) {
    const { picture } = route.params;
    const [dimension, setDimensions] = useState({with: 0, height: 0})
    Image.getSize(picture.picture, (width, height) => setDimensions({width, height}));

    return(
        <View style={styles.container}>
            {/* Header */}
            <ImageBackground
                resizeMode='cover'
                style={styles.picture}
                source={{ uri: picture.picture }} >
                    <ImageHeader navigation={navigation} picture={picture} />
            </ImageBackground>

            {/* Body */}
            <ScrollView style={styles.bodyContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.listItem}>
                    <Text style={[Typography.H4, styles.title]} numberOfLines={1}>Title</Text>
                    <Text style={[Typography.H4, styles.subTitle]} numberOfLines={1}>{picture.name}</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={[Typography.H4, styles.title]} numberOfLines={1}>Category</Text>
                    <Text style={[Typography.H4, styles.subTitle]} numberOfLines={1}>{picture.category}</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={[Typography.H4, styles.title]} numberOfLines={1}>Type</Text>
                    <Text style={[Typography.H4, styles.subTitle]} numberOfLines={1}>{picture.type}</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={[Typography.H4, styles.title]} numberOfLines={1}>Size</Text>
                    <Text style={[Typography.H4, styles.subTitle]} numberOfLines={1}>{picture.size}</Text>
                </View>
                <View style={styles.listItem}>
                    <Text style={[Typography.H4, styles.title]} numberOfLines={1}>Dimensions</Text>
                    <Text style={[Typography.H4, styles.subTitle]} numberOfLines={1}>{dimension.width} x {dimension.height} cm</Text>
                </View>
            </ScrollView>
        </View>
    )
}

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    picture: {
        width: windowWidth,
        height: windowWidth
    },
    bodyContainer: {
        flex: 1,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: Colors.WHITE,
    },
    listItem: {
        paddingTop: 20,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: Colors.GRAY_LIGHT,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    title: {
        color: Colors.BLACK
    },
    subTitle: {
        color: Colors.GRAY_DARK
    }
});