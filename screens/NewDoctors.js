import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native'
import { Card, Paragraph, Title } from 'react-native-paper'
const { width, height } = Dimensions.get('screen')

const NewDoctors = ({ navigation }) => {


    return (
        <ScrollView horizontal={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} contentContainerStyle={styles.profileBody}>
            <Card style={styles.card}>

                <Card style={styles.doctorProfilePicBG}>
                    <Image style={styles.doctorProfilePic} source={require('../assets/icon/circledoc.jpg')} />
                </Card>
                <View style={styles.drNameTitle}>
                    <Title>Dr. Bellamy Nicholas</Title>
                    <Paragraph style={styles.specialty}>Viralogist</Paragraph>
                </View>

                <View style={styles.points}>
                    <View style={styles.iconsAndText}>
                        <Image style={styles.expIcon} source={require('../assets/icon/patient.png')} />
                        <Title>1000+</Title>
                        <Paragraph style={styles.specialty}>Patients</Paragraph>
                    </View>

                    <View style={styles.iconsAndText}>
                        <Image style={styles.expIcon} source={require('../assets/icon/experience.png')} />
                        <Title>10 Yrs</Title>
                        <Paragraph style={styles.specialty}>Experience</Paragraph>
                    </View>

                    <View style={styles.iconsAndText}>
                        <Image style={styles.expIcon} source={require('../assets/icon/rating.png')} />
                        <Title>4.5</Title>
                        <Paragraph style={styles.specialty}>Ratings</Paragraph>
                    </View>
                </View>
            </Card>

            <View style={styles.doctorsDetialInfo}>
                <Title>About Doctor</Title>
                <Paragraph style={styles.doctorsDescription}>
                    Dr. Bellamy Nicholas is a top specialist ar London Bridge Hosptal at London. He has achieved
                    several awards and recognition for his contribution abd service in his own field. He is available for private
                    consultaion
                </Paragraph>
                <Title>Working Time</Title>
                <Paragraph style={styles.schedule}>Mon - Sat (08:30 AM - 09:30 PM)</Paragraph>

                <Title>Communication</Title>
                <View>





                    <TouchableOpacity onPress={() => navigation.navigate('Messaging')}>
                        <View style={styles.contactListTypes}>
                            <Image style={styles.icon} source={require('../assets/icon/text.png')} />
                            <View>
                                <Title>Messaging</Title>
                                <Paragraph>Chat me up, share photos.</Paragraph>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>

                        <View style={styles.contactListTypes}>
                            <Image style={styles.icon} source={require('../assets/icon/call.png')} />
                            <View>
                                <Title>Audio Call</Title>
                                <Paragraph>Call your doctor directly.</Paragraph>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.contactListTypes}>
                            <Image style={styles.icon} source={require('../assets/icon/video.png')} />
                            <View>
                                <Title>Video Call</Title>
                                <Paragraph>See your doctor live.</Paragraph>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.bookButton} onPress={() => navigation.navigate('Booking')}>
                        <Text style={styles.bookButtontext}>Book Appointment</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default NewDoctors

const styles = StyleSheet.create({
    profileBody: {
        textAlign: 'center',
        justifyContent: 'center'
    }
    ,
    card: {
        padding: 0,
        margin: 0,
        width: width,
        height: 380,
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40,
        alignItems: 'center',
        justifyContent: 'center'
    }
    ,
    doctorProfilePicBG: {
        height: 120,
        width: 120,
        padding: 5,
        marginTop: 20,
        marginLeft: 80,
        borderRadius: 60,
        backgroundColor: '#ccc',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
    ,
    doctorProfilePic: {
        height: 110,
        width: 110,
        borderRadius: 55
    }
    ,
    drNameTitle: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    }
    ,
    specialty: {
        color: 'grey',
        textAlign: 'center'
    }
    ,
    points: {
        flexDirection: 'row'
    }
    ,
    iconsAndText: {
        flexDirection: 'column',
        margin: 15,
        alignItems: 'center'
    }
    ,
    expIcon: {
        height: 60,
        width: 60
    }
    ,
    doctorsDetialInfo: {
        marginLeft: 20,
        marginTop: 20
    }
    ,
    doctorsDescription: {
        color: 'grey',
        textAlign: 'left'
    }
    ,
    schedule: {
        color: 'grey'
    }
    ,
    contactListTypes: {
        flexDirection: 'row',
        alignContent: 'center'
    }
    ,
    icon: {
        width: 40,
        height: 40,
        marginRight: 20
    }
    ,
    bookButton: {
        backgroundColor: '#3E64FF',
        width: 360, height: 60,
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 40,
        alignSelf: 'center',
        marginRight: 20
    }
    ,
    bookButtontext: {
        color: 'white',
        fontSize: 20,
    }
})
