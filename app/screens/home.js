import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Title from '../components/title';
import { COLORS, SIZES } from '../constants';

const Home = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Title />
            {/* <Text>This is homw</Text> */}
            <View style={styles.bannerContainer}>
                {/* <Image source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/boy-giving-online-test-4438985-3726680.png' }} style={styles.banner}></Image> */}
                <Image source={{ uri: 'https://cdni.iconscout.com/illustration/free/thumb/idea-2103476-1768732.png' }} style={styles.banner}></Image>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={styles.startButton}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        paddingVertical: 20,
        height: '100%',
        backgroundColor: COLORS.background,
    },
    banner: {
        height: 300,
        width: 300,
    },
    bannerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    startButton: {
        width: '100%',
        // backgroundColor: COLORS.accent,
        backgroundColor: '#ff003f',
        padding: 20,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
    },
    buttonText: {
        fontSize: 24,
        fontWeight: '600',
        color: 'white',
    }
});