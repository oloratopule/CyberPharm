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

const Home = ({ navigation }) => {

    return (
        <View style={styles.homeContent}>
            <View style={styles.top}>
                <HomePageText style={styles.title} />
                <SosButton />
                <NotificationCenter />
            </View>

            <View>
                <Search />
                
            </View>

            <ScrollView horizontal={true} contentContainerStyle={styles.inconList}>
                <TouchableOpacity  onPress={() => navigation.navigate('Vaccination')}>
                    <VaccinateIcon text="Vaccination"/>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Doctors')}>
                    <Book text="Book Dr." />
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('DonateBlood')}>
                    <Donate text="Donate" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
                    <SOSIcon text="Contacts" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Symptom')}>
                    <SymptomsIcon text="Symptom" />
                </TouchableOpacity>
            </ScrollView>

            <TouchableOpacity  onPress={() => navigation.navigate('Covid')}>
                <CovidPalette />
            </TouchableOpacity>
        
        
            

            <View style={styles.tipsBoxContainer}>
                <TouchableOpacity>
                    <TipsBox1 />
                </TouchableOpacity>
                <TouchableOpacity>
                    <TipsBox1 />
                </TouchableOpacity>
            </View>



        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    homeContent: {
        justifyContent: 'center',
        alignItems: 'center'
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
    tipsBoxContainer: {
        flexDirection: 'row'
    }
    ,
    inconList: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    nav: {
        backgroundColor: '#054EDE',
        margin: 0,
        borderRadius: 20,
        marginTop: 30,

    }
    ,
    navItem: {
        alignSelf: 'center'
    },

    alert:{
        marginTop: -229
    },

    

    icon2: {
        width: 20,
        height:20,
        backgroundColor: '#fff',
        marginTop:-20,
        marginLeft:300,
        paddingTop:50
       
       
    },
})
