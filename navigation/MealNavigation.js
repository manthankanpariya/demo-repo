import React, { Component } from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import { createAppContainer} from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMeals';
import MealDetailScreen from '../screens/MealDetailScreen';
import LoginScreen from '../screens/LoginScreen';
import LoginScreen1 from '../screens/LoginScreen1';             
import NextLoginScreen from '../screens/NextLoginScreen';
import CreateAccount from '../screens/CreateAccount';
import ForgotPassword from '../screens/ForgotPassword';
import PhoneVerify from '../screens/PhoneVerify';
import LoginWelcome from '../screens/LoginWelcome';
import RegisterSuccess from '../screens/RegisterSuccess';
import LodingScreen from '../screens/LodingScreen';
import Picker from '../screens/Picker';
import Checkout from '../screens/Checkout';
import ImageVideoPicker from '../screens/ImageVideoPicker';
import VideoCompress from '../screens/VideoCompress';
import DataFatch from '../screens/DataFatch';

const MealsNavigation = createStackNavigator({
    LodingScreen : LodingScreen,
    LoginScreen : LoginScreen,
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMeals,
    DataFatchScreen: DataFatch,
    ImagePickerScreen: ImageVideoPicker,
    VideoCompressScreen: VideoCompress,
    MealDetail: MealDetailScreen,
    LoginScreen1 : LoginScreen1,
    NextLoginScreen : NextLoginScreen,
    CreateAccountScreen : CreateAccount,
    ForgotPasswordScreen : ForgotPassword,
    PhoneVerifyScreen : PhoneVerify,
    LoginWelcomeScreen : LoginWelcome,
    RegisterSuccessScreen : RegisterSuccess,
    PickerScreen : Picker,
    CheckoutScreen : Checkout,
},
{initialRouteName:"LodingScreen"}
);

export default createAppContainer(MealsNavigation);