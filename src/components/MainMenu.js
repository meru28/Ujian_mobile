import React from 'react';
import { createBottomTabNavigator, createAppContainer, TabNavigator } from 'react-navigation';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';
import EmployeeEdit from './EmployeeEdit';
import Profile from './Profile';
import { Icon } from 'react-native-elements';

export default createBottomTabNavigator(
    {
        EmployeeList: {
            screen: EmployeeList,
            navigationOptions: {
                tabBarLabel: "Home",
                tabBarIcon: ({ tintColor }) => <Icon name='home' color={tintColor} size={35} />,
            },
        },
        AddNewEmployee: {
            screen: EmployeeCreate,
            navigationOptions: {
                tabBarLabel: "Profile",
                tabBarIcon: ({ tintColor }) => <Icon name='account-circle' color={tintColor} size={35} />,
            },
        },
    },
    {
        initialRouteName: 'EmployeeList',
        headerMode: 'none'
    }
);
