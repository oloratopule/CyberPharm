import React,{useState} from 'react'
import { StyleSheet, View , TouchableOpacity} from 'react-native'
import HomePageText from '../components/HomePageText'
import CovidPalette from '../components/CovidPalette'
import SOSIcon from '../components/SOSIcon'
import Search from '../components/Search'
import SosButton from "../components/SosButton";
import VaccinateIcon from "../components/VaccinateIcon";
import Book from "../components/Book";
import Donate from "../components/Donate";
import TipsBox1 from "../components/TipsBox1";
import Card1 from "../components/Card1"



const Home = () => {

    const [visibleStatusBar, setVisibleStatusBar] = useState(false);
    const changeVisibilityStatusBar = () => {
      setVisibleStatusBar(!visibleStatusBar);
    };

    return (
        <View style={styles.homeContent}>
            <View>
                <HomePageText />
            </View>

            <SosButton />


            <View>
            
           <Card1 />

            </View>
            

            
           
           
            <View>
                <Search />
                
            </View>
            <View style={styles.inconList}>
                <TouchableOpacity>
                    <VaccinateIcon text="Vaccination"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Book text="Book Dr."/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Donate text="Donate"/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <SOSIcon text="Contacts"/>
                </TouchableOpacity>
                
            </View>

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
        alignItems: 'left'
    },
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
