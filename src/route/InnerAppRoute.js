import React, { useEffect, useState } from 'react';
import { I18nManager, View } from 'react-native';
import { AppConfig } from '../manager/AppConfig';
import { AsyncStorageManager } from '../manager/AsyncStorageManager';
import { Loger } from '../utils/Loger';
import AppRoute from './AppRoute'

const route = () => {

    const [isSelect, setSelect] = useState(false);
    useEffect(() => {
        languageRestart();
    }, [])

    const languageRestart = async () => {
        let value = await AsyncStorageManager.onGetLanguagesCode();
        setSelect(true);

    };

    return isSelect ? <AppRoute /> : null;
}

export default route;