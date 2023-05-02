import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView, Keyboard } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LogIn from './GenralComps/LogIn';
import Create_Business_Pro from './Create_Business_Pro';
import { TouchableOpacity } from 'react-native';
import { Professional_Registration } from './obj/FunctionAPICode';

// http://proj.ruppin.ac.il/cgroup93/prod/api/

const Professional_registration = (props) => {

  const [ID_number, setid] = useState('');
  const [First_name, setFirstName] = useState('');
  const [Last_name, setLastName] = useState('');
  const [birth_date, setDateOfBirth] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [Email, setEmail] = useState('');
  const [AddressStreet, setStreet] = useState('');
  const [AddressHouseNumber, setHouseNumber] = useState('');
  const [AddressCity, setCity] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    const data = {
      ID_number: ID_number,
      First_name: First_name,
      Last_name: Last_name,
      birth_date: birth_date,
      gender: gender,
      phone: phone,
      Email: Email,
      AddressStreet: AddressStreet,
      AddressHouseNumber: AddressHouseNumber,
      AddressCity: AddressCity,
      password: password,
    }
    Professional_Registration(data).then((result) => {
      console.log('yes', result)
      props.navigation.navigate('Create_Business_Pro', { ID: ID_number, })
    }, (error) => {
      console.log('error', error)
    });


    // fetch('http://proj.ruppin.ac.il/cgroup93/prod/api/Professional/NewProfessional', {
    //   method: 'POST',
    //   headers: new Headers({
    //     "Content-type": "application/json; charset=UTF-8",
    //     'Accept': "application/json; charset=UTF-8",
    //   }),
    //   body: JSON.stringify({
    //     ID_number,
    //     First_name,
    //     Last_name,
    //     birth_date,
    //     gender,
    //     phone,
    //     Email,
    //     AddressStreet,
    //     AddressHouseNumber,
    //     AddressCity,
    //     password,
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((data) => console.log(data))

    //   .catch((error) => console.error(error));

    // props.navigation.navigate('Create_Business_Pro')

  };


  return (
    <ScrollView>
      <TouchableOpacity onPress={Keyboard.dismiss}>

        <View style={styles.container}>
          <Text style={styles.title}>איזה כיף שהחלטת להצטרף לקהילת בעלי העסקים שלנו!</Text>
          <Text style={styles.titp}>רק עוד כמה פרטים קטנים בשביל שנוכל להמשיך</Text>

          <View style={styles.inp}>
            <TextInput style={styles.textInputS}
              placeholder="תעודת זהות"
              value={ID_number}
              placeholderTextColor="#92a2bd"
              onChangeText={(text) => setid(text)}
            />
            {/* <Text style={styles.text}>תעודת זהות </Text> */}
          </View>

          <View style={styles.inp}>
            <TextInput style={styles.textInputS}
              placeholder="שם פרטי"
              value={First_name}
              placeholderTextColor="#92a2bd"
              onChangeText={(text) => setFirstName(text)}
            />
            {/* <Text style={styles.text}>שם פרטי</Text> */}
          </View>

          <View style={styles.inp}>
            <TextInput style={styles.textInputS}
              placeholder="שם משפחה"
              value={Last_name}
              placeholderTextColor="#92a2bd"
              onChangeText={(text) => setLastName(text)}
            />
            {/* <Text>שם משפחה</Text> */}
          </View>

          <View style={styles.inp}>
            <TextInput style={styles.textInputS}
              placeholder="מין"
              value={gender}
              placeholderTextColor="#92a2bd"
              onChangeText={(text) => setGender(text)}
            />
            {/* <Text>מין</Text> */}
          </View>

          <View style={styles.inp}>
            <TextInput style={styles.textInputS}
              placeholder="תאריך לידה"
              value={birth_date}
              placeholderTextColor="#92a2bd"
              onChangeText={(text) => setDateOfBirth(text)}
            />
            {/* <Text>תאריך</Text> */}
          </View>

          <View style={styles.inp}>
            <TextInput style={styles.textInputS}
              placeholder="פלאפון"
              placeholderTextColor="#92a2bd"
              value={phone}
              onChangeText={(text) => setPhone(text)}
            />
            {/* <Text>פלאפון</Text> */}
          </View>
          <View style={styles.inp}>
            <TextInput style={styles.textInputS}
              placeholder="אימייל"
              placeholderTextColor="#92a2bd"
              value={Email}
              onChangeText={(text) => setEmail(text)}
            />
            {/* <Text>איימיל</Text> */}
          </View>


          <View style={styles.inp}>
            <TextInput style={styles.textInputS}
              placeholder="רחוב"
              placeholderTextColor="#92a2bd"
              value={AddressStreet}
              onChangeText={(text) => setStreet(text)}
            />
            {/* <Text>רחוב</Text> */}
          </View>


          <View style={styles.inp}>
            <TextInput style={styles.textInputS}
              placeholder="מספר בית"
              placeholderTextColor="#92a2bd"
              value={AddressHouseNumber}
              onChangeText={(text) => setHouseNumber(text)}
            />
            {/* <Text>מספר בית</Text> */}
          </View>

          <View style={styles.inp}>
            <TextInput style={styles.textInputS}
              placeholder="עיר"
              placeholderTextColor="#92a2bd"
              value={AddressCity}
              onChangeText={(text) => setCity(text)}
            />
            {/* <Text>עיר</Text> */}
          </View>

          <View style={styles.inp}>
            <TextInput style={styles.textInputS}
              placeholder="סיסמא"
              placeholderTextColor="#92a2bd"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />
            {/* <Text>סיסמא</Text> */}
          </View>


          <View>
            <TouchableOpacity style={styles.but} onPress={handleRegistration}>
              <View>
                <Text style={styles.thachtext}>המשך</Text>
              </View>

            </TouchableOpacity>
          </View>
        </View>

      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  inp: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'center',
    width: '80%',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    backgroundColor: '#fffaf0'

  },
  textInputS: {
    // height: 40,
    // width: "80%",
    // margin: 10,
    // borderWidth: 1,
    // padding: 10,
    color: '#808080',
    // height: 50,
    fontSize: 25,
    textAlign: 'right',
    fontWeight: 'bold',
    opacity: 0.5,

  },
  title: {
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 25,
    color: '#fff',
    fontWeight: 'bold',

  },

  titp: {
    textAlign: 'center',
    color: '#fffaf0',
    fontSize: 17,
  },

  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9acd32'
  },

  text: {


    textAlign: 'right',
    paddingBottom: 10,

  },
  but: {
    textAlign: 'center',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    backgroundColor: '#ff69b4',
    padding: 15,
    margin: 10,
    marginTop: 10,
    
  },
  thachtext: {
    textAlign: 'center',
    color: '#fffaf0',
    fontSize:25,
    fontWeight:'bold',
    //borderRadius: 10,
     height: 50,
    // marginBottom: 20,
    // backgroundColor: '#fffaf0',
    // padding: 15,
    // margin: 10,
    // marginTop: 20,
  },

});

export default Professional_registration;