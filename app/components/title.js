import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Title = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Quizller</Text>
        </View>
    )
}

export default Title;

const styles = StyleSheet.create({
    container: {
        // paddingTop: 40,
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingHorizontal: 16,
    },
    title: {
        fontSize: 40,
        fontWeight: '600',
        color: 'white',
    }
});