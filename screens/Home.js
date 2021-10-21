import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import HomePageText from '../components/HomePageText'
import CovidPalette from '../components/CovidPalette'
import SOSIcon from '../components/SOSIcon'
import SymptomsIcon from '../components/SymptomsIcon';
import Search from '../components/Search'
import SosButton from "../components/SosButton";
import VaccinateIcon from "../components/VaccinateIcon";
import Book from "../components/Book";
import Donate from "../components/Donate";
import TipsBox1 from "../components/TipsBox1";
import Contact from './Contact'
import NotificationCenter from '../components/NotificationCenter'
import SymptopmChecker from './SymptopmChecker'
import Locate from '../components/Locate';

const Home = ({ navigation }) => {

    return (
        <View style={styles.homeContent}>
            <View style={styles.top}>
                <SosButton />
                <NotificationCenter />
            </View>

            <View style={styles.inconList}>
                <TouchableOpacity>
                    <VaccinateIcon text="Vaccination" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Doctors')}>
                    <Book text="Book Dr." />
                </TouchableOpacity>
                <TouchableOpacity >
                    <Donate text="Donate" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                    <SOSIcon text="Contacts" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Symptom')}>
                    <SymptomsIcon text="Symptom" />
                </TouchableOpacity>
            </View>

            <View>
                <CovidPalette />
            </View>

            <View>
                <Locate />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeContent: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 0,
        margin: 0
    }
    ,
    top: {
        flexDirection: 'row'
    }
    ,
    title: {
        marginRight: 20
    }
    ,


    inconList: {
        flexDirection: 'row',
        padding: 0,
        margin: 0
    },

    alert: {
        marginTop: -229
    },

})
