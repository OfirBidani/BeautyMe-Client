import { View, Text } from 'react-native'
import React from 'react'
import { Fetch,Axios } from './Fetch'

//התחברות לקוח
export const LogInF = (ID_number, password) => {
    console.log(`Client/OneClient/${ID_number}/${password}`)
    return Fetch(`Client/OneClient/${ID_number}/${password}`, 'get')
}

//התחברות בעל עסק
export const LogInPro = (ID_number, password) => {
    console.log(`Professional/OneProfessional/${ID_number}/${password}`)
    return Fetch(`Professional/OneProfessional`, 'post')
}

//הרשמת לקוח -פרטיים אישים
export const Professional_Registration = (body) => {

    return Axios(`Professional/NewProfessional`, 'post',body)

}

// הרשמת לקוח
export const Cli_Registration = (body) => {

    return Axios(`Client/NewClient`, 'post',body) 

}

//הרשמת בעל עסק-פרטי העסק
export const Professional_Business = (body) => {

    return Axios(`Business/NewBusiness`, 'post',body)

}


export const NewAppointmentPost = (body) => {
    return Axios(`Appointment/NewAppointment`, 'post', body) //פונקצייה להוספת תור חדש דרך פונקציית פוסט בשרת.

}
