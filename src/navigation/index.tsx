import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import{MenuTabs} from './MenuBottomTab.navigarion'
export default function Navigation(){
    return(
        <NavigationContainer>
<MenuTabs/>
        </NavigationContainer>
    )
}