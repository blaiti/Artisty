import React from 'react';
import NetInfo from "@react-native-community/netinfo";

import DataContext from './data-context';
import { pictures } from '../../infrastructure/data';
import { getData, storeData } from '../helpers';

function DataProvider({children}) {
    const [state, dispatch] = React.useReducer(
        (prevState, action) => {
            switch (action.type) {
                case 'RESTORE_DATA':
                    return {
                        ...prevState,
                        data: action.data,
                        favorites: action.favorites,
                        isLoading: false,
                    };
                case 'STORE_DATA':
                    return {
                        ...prevState,
                        data: action.data,
                        favorites: action.favorites,
                        isLoading: false,
                    };
                case 'CHANGE_FAVORITE':
                    return {
                        ...prevState,
                        favorites: action.favorites
                    };
            }
        },
        {
            isLoading: true,
            data: [],
            favorites: []
        },
    );

    React.useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            if (state.isConnected) {
                storeData('data', pictures);
                dispatch({type: 'STORE_DATA', data: pictures, favorites: getData('favorites')});
            }
            else {
                dispatch({type: 'RESTORE_DATA', data: getData('data'), favorites: getData('favorites')});
            }
        });
        unsubscribe();
    }, []);

    const dataContext = React.useMemo(() => ({
        changeFavorites: async (picture) => {
            let favorites;
            if (state.data.includes(picture)) {
                favorites = state.data.filter(item => item !== picture);
            }
            else {
                favorites = state.data;
                favorites.push(picture);
            }
            storeData('favorites', favorites);
            dispatch({type: 'CHANGE_FAVORITE', favorites: favorites});
        },
    }), [], );

    return (
        <DataContext.Provider value={{state, dataContext}}>
            {children}
        </DataContext.Provider>
    );
}

export default DataProvider;