import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MyBanner = (props) => {
    // function checkActiveStatus() {
    //     // if(props.isActive)
    //     if(props.isActive === true){
    //         return null;
    //     }
    //     else {
    //         return <Text>Not Active</Text>
    //     }
    // }
    
    
    
    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
            <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
            <View>
                <Text style={[styles.text, {textAlign: props.align}]}>{props.title}</Text>
                <Text>{props.desc}</Text>
            </View>
            {/* {checkActiveStatus()} */}

            {/* {props.isActive ? null : <Text>Not Active</Text>} */}

            {!props.isActive && <Text>Not Active</Text> }


            </View>
        </View>
       
    )
}

export default MyBanner;


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eceff1',
        padding: 25,
        margin: 15,
        borderRadius: 5,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 25,
    },
})