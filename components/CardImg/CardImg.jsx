import React from "react";
import { Image, StyleSheet, View } from "react-native";





const CardImg = ({ imagen }) => {
    return (
        <View style={styles.cardImg}>
            <Image source={imagen} style={{  resizeMode: 'contain', width: '100%',  }} />
        </View>
    )
};

const styles = StyleSheet.create({
    cardImg: {
        backgroundColor: 'white',
        width: '100%',
        borderRadius: 12,
        overflow: 'hidden',
        alignItems: 'center',          
        justifyContent: 'center',
        flex: 1,

        //IOS
        shadowColor: 'black',
        shadowOffset: {width:0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 4,

        //Android
        elevation: 1,
    },
})


export default CardImg;