import React from "react";
import { StyleSheet, View } from "react-native";


const HeaderImg = () => {
    return (
        <View style={styles.container}>
            
        </View>
    )
};


const styles = StyleSheet.create({
    container: {
        width: '100%', 
        backgroundColor:'grey',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        paddingHorizontal: 24, 
        justifyContent: 'center', 
        paddingVertical: 12,
        height: 300,
    }
});

export default HeaderImg;