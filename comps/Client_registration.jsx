import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, Keyboard, TouchableOpacity} from 'react-native';
import { Cli_Registration } from './obj/FunctionAPICode';
import Input from './obj/Input';


const Client_registration = () => {
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

  const handleRegistrationC = () => {
   
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
    Cli_Registration(data).then((result) => {

      console.log('yes', result)

      if(result.status==200){
        // Notificationss("OK", "התור נוסף בהצלחה") 
        Alert.alert(
           'ישששש',
          'שמחים שהצטרפת למשפחת Beauty Me',
          [
            { text: 'ייאאלה בואו נתחיל', onPress: () => navigation.navigate('LogIn') },
          ],
          { cancelable: false }
        );
      }
    }).catch(error => {
        console.log(error);
        Alert.alert(
          'אופס',
         'אחד הפרטים לא נכונים'+ error ,
         [
           { text: 'נסה שוב'},
         ],
         { cancelable: false }
       );
    });
      
    
  };

  return (
    <TouchableOpacity style={styles.container} onPress={Keyboard.dismiss}>
    <View style={{backgroundColor:'#f8f8ff' }}>
      <Text style={styles.title}>איזה כיף שהחלטת להצטרף לקהילת הלקוחות שלנו!</Text>
      <Text style={styles.titp}> אנא מלא/י את הפרטים הבאים:</Text>

        {/* <Input styleText={styles.title} styleView={styles.inp} styleTextInput={styles.input} placeholder="תעודת זהות" value={ID_number} onBlur={(text) => setid(text)} textt="תעודת זהות:" /> */}

      <View style={styles.inp}>
         <TextInput style={styles.textInputS} 
           placeholder="תעודת זהות"
           value={ID_number}
           onChangeText={(text) => setid(text)}
         />
         <Text>תעודת זהות:</Text>
      </View>

      <View style={styles.inp}>
        <TextInput style={styles.textInputS}
          placeholder="שם פרטי"
          value={First_name}
          onChangeText={(text) => setFirstName(text)}
        />
        <Text>שם פרטי</Text>
      </View>

      <View style={styles.inp}>
        <TextInput style={styles.textInputS}
          placeholder="שם משפחה"
          value={Last_name}
          onChangeText={(text) => setLastName(text)}
        />
        <Text>שם משפחה</Text>
      </View>

      <View style={styles.inp}>
        <TextInput style={styles.textInputS}
          placeholder="מין"
          value={gender}
          onChangeText={(text) => setGender(text)}
        />
        <Text>מין</Text>
      </View>

      <View style={styles.inp}>
        <TextInput style={styles.textInputS}
          placeholder="תאריך לידה"
          value={birth_date}
          onChangeText={(text) => setDateOfBirth(text)}
        />
        <Text>שם משפחה</Text>
      </View>

      <View style={styles.inp}>
        <TextInput style={styles.textInputS}
          placeholder="פלאפון"
          value={phone}
          onChangeText={(text) => setPhone(text)}
        />
        <Text>פלאפון</Text>
      </View>
      <View style={styles.inp}>
        <TextInput style={styles.textInputS}
          placeholder="אימייל"
          value={Email}
          onChangeText={(text) => setEmail(text)}
        />
        <Text>איימיל</Text>
      </View>


      <View style={styles.inp}>
        <TextInput style={styles.textInputS}
          placeholder="רחוב"
          value={AddressStreet}
          onChangeText={(text) => setStreet(text)}
        />
        <Text>רחוב</Text>
      </View>


      <View style={styles.inp}>
        <TextInput style={styles.textInputS}
          placeholder="מספר בית"
          value={AddressHouseNumber}
          onChangeText={(text) => setHouseNumber(text)}
        />
        <Text>מספר בית</Text>
      </View>

      <View style={styles.inp}>
        <TextInput style={styles.textInputS}
          placeholder="עיר"
          value={AddressCity}
          onChangeText={(text) => setCity(text)}
        />
        <Text>עיר</Text>
      </View>

      <View style={styles.inp}>
        <TextInput style={styles.textInputS}
          placeholder="סיסמא"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <Text>סיסמא</Text>
      </View>

      <Button color='#9acd32' title="סיום הרשמה" onPress={handleRegistrationC} />
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  inp: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
    color: 'red',
  },
  textInputS: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: "80%",
    marginRight: 8,
  },
  title: {
    padding: 60,
    justifyContent: 'center',
    textAlign: 'center'
  },
  titp: {
    textAlign: 'center',
    Color: '#9acd32'
  }
});


export default Client_registration;



//   console.log('yes', result)

    // }, (error) => {
    //   console.log('error', error)
    // });

    // fetch('http:proj.ruppin.ac.il/cgroup93/prod/api/Client/NewClient', {
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