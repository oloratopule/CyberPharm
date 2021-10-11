import React, { useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import SymptomList from '../API/SymptomList'
import { List } from 'react-native-paper'
const SymptopmChecker = () => {
    const Pressable = (v) => {
        console.log(v)

    }
    return (
        <View>
            <List.Section title="Accordions">
                <List.Accordion
                    title="Uncontrolled Accordion"
                    left={props => <List.Icon {...props} icon="folder" />}>
                    {
                        <View>
                            {SymptomList.map(symptom => {
                                return (
                                    <TouchableOpacity onPress={()=>Pressable(symptom.title)}>
                                        <Text key={symptom.tagId}>{symptom.title}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </View>
                    }
                </List.Accordion>

            </List.Section>

            <Text>Birth year</Text>
            <TextInput placeholder={'Enter birth year'} />
            <Text>Symptoms</Text>
            <TextInput placeholder={'Enter Symptom'} />
            <Text></Text>
            <TextInput placeholder={''} />
            <TouchableOpacity>
                <Text>SUBMIT</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SymptopmChecker

const styles = StyleSheet.create({})
