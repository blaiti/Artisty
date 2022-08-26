import React, {useContext} from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import routes from '../config/routes';
import { Colors, Typography } from '../styles';
import { DataContext } from '../../application';

import Splash from '../containers/Splash';
import Gallery from '../containers/Gallery';
import ImageDetails from '../containers/ImageDetails';
import Favorites from '../containers/Favorites';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function BottomTabs() {
    return (
        <Tab.Navigator
            screenOptions={{headerShown: false, tabBarShowLabel: false}}
            activeColor={Colors.WHITE}
            inactiveColor={Colors.GRAY_DARK}
            barStyle={[Typography.BODY, { backgroundColor: Colors.BLACK }]}>
                <Tab.Screen 
                    name={routes.Gallery} 
                    component={Gallery}
                    options={{
                        tabBarLabel: 'Gallery',
                        tabBarIcon: ({ color }) => (
                            <Icon name="grid" color={color} size={23} />
                        )
                    }} />
                <Tab.Screen 
                    name={routes.Favorites} 
                    component={Favorites}
                    options={{
                        tabBarLabel: 'Favorites',
                        tabBarIcon: ({ color }) => (
                            <Icon name="heardt" color={color} size={23} />
                        )
                    }} />
        </Tab.Navigator>
    );
}

function MyDrawer() {
  return (
    <Drawer.Navigator screenOptions={{headerShown: false}}>
      <Drawer.Screen name={routes.Gallery} component={Gallery} />
      <Drawer.Screen name={routes.Favorites} component={Favorites} />
    </Drawer.Navigator>
  );
}

export default function RootNavigator () {  
    const {state} = useContext(DataContext);

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{headerShown: false}}>
                {state.isLoading ?
                    <Stack.Screen name={routes.Splash} component={Splash} />
                : 
                    <>
                        <Stack.Screen name={routes.MainApp} component={Platform.OS === 'android' ? MyDrawer : BottomTabs} />
                        <Stack.Screen name={routes.ImageDetails} component={ImageDetails} />
                    </>
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};