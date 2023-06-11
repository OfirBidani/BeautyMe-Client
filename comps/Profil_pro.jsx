import React, { useContext, useEffect } from 'react';
import { StyleSheet, View, Text,TouchableOpacity} from 'react-native';
import Menu_professional from './obj/Menu_professional';
import { UserContext } from './UserDietails';
import Header from './obj/Header';
import Button from './obj/Button';
// import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation} from "@react-navigation/core";
const Profil_pro = (Props) => {
    const { userDetails, setUserDetails } = useContext(UserContext);
const navigation=useNavigation();
useEffect(()=>{
    console.log("profile pro = "+JSON.stringify(userDetails));
},[])
    return (
        <View style={styles.view}>
        
            <View style={styles.container}>
                
                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Update_personal_details_Professional')} >
                    <Text style={styles.buttonText}>עריכת פרטים אישים </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Update_personal_details_Bussines')}>
                    <Text style={styles.buttonText}> עריכת פרטי העסק  </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('Set_notifications')}>
                    <Text style={styles.buttonText}> הגדרת התראות </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate('ShowReviews',{BusinessNumber:JSON.stringify(userDetails.Business_Number)})}>
                    <Text style={styles.buttonText}> ביקורות על העסק </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>הוספת סוג טיפול נוסף </Text>
                </TouchableOpacity>
            </View>
            <Menu_professional />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f8ff',
        opacity: 0.9,
        borderColor: '#800080',
        borderWidth: 2,
        borderRadius: 10,
        width: '80%',
        height: '50%'
    },
    view: {
        flex: 1,
        backgroundColor: '#f8f8ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#9370DB',
        padding: 10,
        marginTop: 10,
        borderRadius: 5,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
});

export default Profil_pro; 