import React, { Component } from 'react'
import { Text, StyleSheet, View, ActivityIndicator } from 'react-native'

export default class Loader extends Component {
    constructor() {
        super()
        this.state = { showMe: true }
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                showMe: false
            })
        }, 7000)
    }

    render() {
        return (
            <View style={[styles.container, styles.horizontal]}>
                {
                    this.state.showMe ?
                        <ActivityIndicator size="large" color="#00ff00" />
                        :
                        <View>
                            <Text>Loader is hidedn now</Text>
                        </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    },
    horizontal: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})
