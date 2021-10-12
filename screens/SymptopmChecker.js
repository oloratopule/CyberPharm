import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import SymptomList from '../API/SymptomList'
import { List, RadioButton, Modal, Portal, Provider, Button, Title } from 'react-native-paper'

const SymptopmChecker = () => {
    const [value, setValue] = useState('male');
    const [symptomId, setSymptomId] = useState('');
    const [birthYear, setBirthYear] = useState('');
    const [issues, setIssues] = useState([]);
    const [visible, setVisible] = useState(false);

    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const containerStyle = { backgroundColor: 'white', padding: 20 };

    const Pressable = (symptomId) => {
        console.log(symptomId)
        setSymptomId(symptomId)

    }


    async function submitForm() {
        try {

            console.log(birthYear);
            console.log(symptomId)
            const data = await fetch(`https://healthservice.priaid.ch/diagnosis?symptoms=[${symptomId}]&gender=${value}&year_of_birth=${birthYear}&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InRoYXRvNzMybWFobG9rb0BnbWFpbC5jb20iLCJyb2xlIjoiVXNlciIsImh0dHA6Ly9zY2hlbWFzLnhtbHNvYXAub3JnL3dzLzIwMDUvMDUvaWRlbnRpdHkvY2xhaW1zL3NpZCI6IjcxMjUiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL3ZlcnNpb24iOiIxMDkiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xpbWl0IjoiMTAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwIjoiQmFzaWMiLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDIxLTEwLTExIiwiaXNzIjoiaHR0cHM6Ly9hdXRoc2VydmljZS5wcmlhaWQuY2giLCJhdWQiOiJodHRwczovL2hlYWx0aHNlcnZpY2UucHJpYWlkLmNoIiwiZXhwIjoxNjM0MDQxMzk1LCJuYmYiOjE2MzQwMzQxOTV9._JLOvYXlPwge-MDlLCJ9vgHGLk12G1u2H5DangKL9jo&format=json&language=en-gb`)
                .then((res) => res.json())
                .then((data) => data);
            setIssues([...data.Issues, issues])
            console.log(data);
        } catch (err) {

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
                                    <TouchableOpacity onPress={() => Pressable(symptom.tagId)}>
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

            <TouchableOpacity style={styles.submitBtn} onPress={() => submitForm()}>
                <Text style={styles.sumbitLabel}>SUBMIT</Text>
            </TouchableOpacity>


            <Provider>
                <Portal>
                    <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
                        <Text>Hello</Text>
                        {issues.map((data) => {
                            return (
                                <Text>{data}</Text>
                            )
                        })}
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
        textAlign: 'left',
        marginLeft: 80,
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
})
