import AsyncStorage from "@react-native-async-storage/async-storage";

const getData = async (key) => {
    let jsonData = [];
    try {
        jsonData = await AsyncStorage.getItem(key);
    } catch (e) {
        console.log(e);
    }
    return jsonData;
};

const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
        console.log(e);
    }
};

export {
    getData,
    storeData
}