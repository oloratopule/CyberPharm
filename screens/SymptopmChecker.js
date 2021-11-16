import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View, Dimensions } from 'react-native'
import SymptomList from '../API/SymptomList'
import { List, RadioButton, Modal, Portal, Provider, Button, Title } from 'react-native-paper'
const request = require('request')
const { width, height } = Dimensions.get('screen')
const SymptopmChecker = () => {
    const [value, setValue] = useState('male');
    const [symptomId, setSymptomId] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [issues, setIssues] = useState([]);

    const [visible, setVisible] = useState(false);
    const [title, setTitel] = useState('');
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20, width: width - 30, alignSelf: 'center' };
    const Pressable = (symptomId, theTitle) => {
        console.log(symptomId, theTitle)
        setTitel(theTitle)
        setSymptomId(symptomId);
    }

    async function submitForm(symptomId, value, birthYear) {
        const options = {
            method: 'GET',
            url: 'https://priaid-symptom-checker-v1.p.rapidapi.com/diagnosis',
            qs: { gender: value, year_of_birth: birthYear, symptoms: `[${symptomId}]`, language: 'en-gb' },
            headers: {
                'x-rapidapi-host': 'priaid-symptom-checker-v1.p.rapidapi.com',
                'x-rapidapi-key': 'a03eea83aemshf6f0ec9c239e73fp1980cdjsn3fcb68379662',
                useQueryString: true
            }
        };
        request(options, function (error, response, body) {
            if (error) throw new Error(error);
            setIssues([...body, body]);
            console.log(issues)
        });


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
                                    <TouchableOpacity onPress={() => Pressable(symptom.tagId, symptom.title)}>
                                        <Text key={symptom.tagId}>{symptom.title}</Text>
                                    </TouchableOpacity>
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
                        <Text>{title}</Text>
                        <Text>{symptomId}</Text>
                        <Text>{birthYear}</Text>
                        <Text>{value}</Text>
                        <View>
                            {issues.map((s) => {
                                return (
                                    <View style={styles.textMap}>
                                        <Text>{s}</Text>
                                    </View>
                                )
                            })}
                        </View>
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
