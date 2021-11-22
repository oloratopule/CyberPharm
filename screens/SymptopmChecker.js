import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions, ScrollView } from 'react-native';
import SymptomList from '../API/SymptomList';
import { List, RadioButton, Modal, Portal, Provider, Button, Title } from 'react-native-paper';
const request = require('request');
const { width, height } = Dimensions.get('screen');

const SymptopmChecker = () => {
    const [value, setValue] = useState('');
    const [treatment, setTreatment] = useState('');
    const [diagnosis, setDiagnosis] = useState('');
    const [symptomId, setSymptomId] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [issues, setIssues] = useState([{}]);

    const [visible, setVisible] = useState(false);
    const [title, setTitel] = useState('');
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, width: width - 30 , alignSelf:'center' };
    const Pressable = (symptomId, theTitle) => {
        console.log(symptomId, theTitle)
        setTitel(theTitle)
        setSymptomId(symptomId);
    }

    async function submitForm(symptomId, value, birthYear) {
        try {
            fetch(`https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[${symptomId}]&gender=${value}&year_of_birth=${birthYear}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRoYXRvNzMybWFobG9rb0BnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6Ijk3NjMiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIyMDAiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiOTk5OTk5OTk5IiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiUHJlbWl1bSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbGFuZ3VhZ2UiOiJlbi1nYiIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvZXhwaXJhdGlvbiI6IjIwOTktMTItMzEiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL21lbWJlcnNoaXBzdGFydCI6IjIwMjEtMTAtMTEiLCJpc3MiOiJodHRwczovL3NhbmRib3gtYXV0aHNlcnZpY2UucHJpYWlkLmNoIiwiYXVkIjoiaHR0cHM6Ly9oZWFsdGhzZXJ2aWNlLnByaWFpZC5jaCIsImV4cCI6MTYzNzU3MjIxNywibmJmIjoxNjM3NTY1MDE3fQ.p-xsdxRylrwkt8Tl2Wf9EwcWUsuRqYrjFS7kAqrm7Fw&format=json&language=en-gb`)
                .then((response) => response.json())
                .then((data) => {
                    setIssues(data)
                    // console.log(issues)
                    // console.log(issues[0].Issue.IcdName)
                    // console.log(issues[1].Issue.IcdName) // it works
                    // console.log(issues[0].Specialisation[1].Name) // it works
                    // console.log(issues.Issue.Name)
                    // issues[1].Issue.IcdName
                    setDiagnosis(issues[0].Issue.IcdName) //it works
                    setTreatment(issues[0].Specialisation[0].Name) //it works

                }
                );
        } catch (err) {
            console.log(err.text)
        }


    }

    return (
        <View style={styles.formContainer}>
            <List.Section title="Symptom List" style={styles.symptom}>
                <List.Accordion
                    title="Select symptom"
                    left={props => <List.Icon {...props} icon="folder" />}>
                    {
                        <View>
                            {SymptomList.map(symptom => {
                                return (
                                    <ScrollView >
                                        <TouchableOpacity onPress={() => Pressable(symptom.tagId, symptom.title)}>
                                            <Text key={symptom.tagId}>{symptom.title}</Text>
                                        </TouchableOpacity>
                                    </ScrollView>
                                )
                            })}
                        </View>
                    }
                </List.Accordion>
            </List.Section>

            <Text style={styles.inputlabel}>Birth year</Text>
            <TextInput style={styles.input} placeholder={'Enter birth year'} onChangeText={(birthYear) => setBirthYear(birthYear)} />
            <View style={styles.radioGroup}>
                <RadioButton.Group onValueChange={newValue => setValue(newValue)} value={value}>
                    <View>
                        <Text>Male</Text>
                        <RadioButton value="male" onPress={console.log(value)} />
                    </View>
                    <View>
                        <Text>Female</Text>
                        <RadioButton value="female" />
                    </View>
                </RadioButton.Group>
            </View>

            <TouchableOpacity style={styles.submitBtn} onPress={() => submitForm(symptomId, value, birthYear)}>
                <Text style={styles.sumbitLabel}>SUBMIT</Text>
            </TouchableOpacity>


            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Text style={{ textAlign: 'center' }}>{title}</Text>
                        <Text style={{ textAlign: 'center' }}>{symptomId}</Text>
                        <Text style={{ textAlign: 'center' }}>{birthYear}</Text>
                        <Text style={{ textAlign: 'center' }}>{value}</Text>
                        <Text style={{ textAlign: 'center' }}>Diagnosis:</Text>
                        <Text style={{ textAlign: 'center' }}>{diagnosis}</Text>
                        <Text style={{ textAlign: 'center' }}>Treatment:{" " + treatment}</Text>
                    </Modal>
                </Portal>
            </Provider >
            <Button style={{ marginTop: 30 }} onPress={showModal}>
                Show
            </Button>


        </View>
    )
}

export default SymptopmChecker

const styles = StyleSheet.create({
    formContainer: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        with: 360
    }
    ,
    symptom: {
        borderRadius: 10
    }
    ,
    symptomList: {
        height: 200
    }
    ,
    input: {
        backgroundColor: '#D7D7D7',
        borderRadius: 10,
        width: 360,
        height: 50,
        paddingLeft: 15,
        alignSelf: 'center',
        marginTop: 10
    }
    ,
    inputlabel: {
        alignSelf: 'center',
        marginTop: 20
    }
    ,
    radioGroup: {
        alignSelf: 'center',
        marginTop: 20
    }
    ,
    sumbitLabel: {
        color: '#fff',
        fontSize: 20
    }
    ,
    submitBtn: {
        alignSelf: 'center',
        marginTop: 20,
        height: 60,
        width: 360,
        textAlign: 'center',
        justifyContent: 'center',
        backgroundColor: '#3E64FF',
        borderRadius: 10
    }
    ,
    textMap: {
        flexDirection: 'row'
    }
})
