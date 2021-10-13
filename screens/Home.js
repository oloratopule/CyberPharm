import React from 'react'
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native'
import HomePageText from '../components/HomePageText'
import CovidPalette from '../components/CovidPalette'
import SOSIcon from '../components/SOSIcon'
import Search from '../components/Search'
import SosButton from "../components/SosButton";
import VaccinateIcon from "../components/VaccinateIcon";
import Book from "../components/Book";
import Donate from "../components/Donate";
import TipsBox1 from "../components/TipsBox1";
import Contacts from './Contacts'
import NotifyIcon from '../components/NotifyIcon'

const Home = ({ navigation }) => {

    return (
        <View style={styles.homeContent}>
            <View style={styles.top}>
                <HomePageText style={styles.title} />
                <SosButton />
                <NotifyIcon />            
            </View>


            <View>
                <Search />
            </View>

            <ScrollView horizontal={true} contentContainerStyle={styles.inconList}>
                <TouchableOpacity>
                    <VaccinateIcon text="Vaccination" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Book text="Book Dr." />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Donate text="Donate" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate = (Contacts) }}>
                    <SOSIcon text="Contacts" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { navigation.navigate = (Home) }}>
                    <VaccinateIcon text="Symptom" />
                </TouchableOpacity>
            </ScrollView>

            <TouchableOpacity>
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
    }
})
