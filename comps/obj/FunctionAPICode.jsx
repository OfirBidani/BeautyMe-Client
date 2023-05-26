import { View, Text } from 'react-native'
import React from 'react'
import { Fetch, Axios, AxiosNum } from './Fetch'

// התחברות בעל עסק פונקציית POST עם FROMBODY...... לא דרך נכונה... צריך לשנות את זה לגט... אבל לבנתיים....................
export const LogInProo = (body) => {

    return Axios(`Professional/OneProfessional`, 'post',body) 
}

export const BussinesCanGiveTreatment = (Business_Numberr) => {
    return Axios(`Business_can_give_treatmentController/All_the_treatments_appointment_can_give/${Business_Numberr}`, 'post')
}

//הרשמת לקוח -פרטיים אישים
export const Professional_Registration = (body) => {

    return Axios(`Professional/NewProfessional`,'post',body)
}

// הרשמת לקוח
export const Cli_Registration = (body) => {

    return Axios(`Client/NewClient`, 'post',body) 

}

//הרשמת בעל עסק-פרטי העסק
export const Professional_Business = (body) => {

    return Axios(`Business/NewBusiness`, 'post',body)
}

//פונקצייה להוספת תור חדש דרך פונקציית פוסט בשרת.
export const NewAppointmentPost = (body) => {
    return Axios(`Appointment/NewAppointment`, 'post', body) 

}
  // חיפוש תור
export const Search_post = (body) => {

    return Axios(`Search/Searchh`, 'post',body) 
}
// סוגי הטיפולים לרשימה נגללת במסך חיפוש
export const Treatment_type_GET = () => {
    console.log(`Type_Treatment/AllCategory`)
    return Fetch(`Type_Treatment/AllCategory`,'get')
}

// סוגי הקטגוריות לרשימה נגללת במסך חיפוש
export const Category_GET = () => {
    console.log(`Category/AllCategory`)
    return Fetch(`Category/AllCategory`,'get')
}

//המשך הוספת תור חדש - הוספת סוגי הטיפולים האפשריים לתור
export const All_treatment_in_appointment = (body) => {

    return Axios(`Appointment_can_give_treatment/NewAppointment_can_give_treatment`, 'post', body)
}

//מחזיר את כל סוגי הטיפולים שעסק יכול לעשות
export const Type_treatment_for_businnes = (businnes_number) => {
    console.log(`Business_can_give_treatmentController/All_the_treatments_appointment_can_give${businnes_number}/${password}`)
    return Fetch(`Professional/OneProfessional`, 'post')
}
//שינוי התור מתורים פתוחים לתורים עתידיים
//appointment => future_apointment
export const New_Future_Apointment = (body) => {
    
    return Axios(`Future_Appointment/NewFuture_Appointment`, 'post',body)
}


export const LogInF = (body) => {
    return Axios(`Client/OneClient`, 'post', body)
}
//כל התורים של בעל עסק
export const allApoB= (Business_Numberr) => {
    return Axios(`Appointment/AllAppointmentForBussines/${Business_Numberr}`, 'post')
}
//כל התורים של לקוח
export const allApoC= (ID_Client) => {
    return Fetch(`Appointment/AllAppointmentForClient/${ID_Client}`, 'get')
}

// מכניס סוג טיפול חדש לתפריט טיפולים של עסק
export const NewTreatmentForBussines = (body) => {
    return Axios(`Business_can_give_treatment/PostNewTreatmentOfBussines`, 'post', body)
}

export const FutureAppointmenB = (Business_Numberr) => {
    return Axios(`Future_Appointment/AllFuture_AppointmentForProfessional/${Business_Numberr}`, 'post')
}

export const DeleteClient=(clientID_number)=>{
    return Fetch(`Client/DeleteClient/${clientID_number}`,'DELETE')
}
//מחיקת עסק קיים
export const DeleteBusiness=(businessNumber)=>{
    return Fetch(`Business/DeleteBusinesss/${businessNumber}`,'DELETE')
}
//מחיקת בעל עסק
export const DeleteProffesional=(profssinalID_number)=>{
    return Fetch(`Proffesional/DeleteProffesional/${profssinalID_number}`,'DELETE')
}
//מחיקת תור עתידי ע"י לקוח
export const CancelAppointmentByClient=(appointmentNumber)=>{
    return Fetch(`Appointment/CanceleAppointmentByClient/${appointmentNumber}`,'DELETE')
}
//עדכון פרטי לקוח 
export const UpdateClient=(body)=>{
    return Axios(`Client/UpdateClient`, 'post',body)
}
//עדכון בעל עסק
export const UpdateProffesional=(body)=>{
    return Axios(`Proffesional/UpdateProffesional`, 'post',body)
}
//התחברות כללית לשני המשתמשים
export const LogInUser = (body) => {
    return Axios(`user/checkUser`, 'post', body)
}

export const BusinessDetails= (business_num) => {
    return Axios(`Business/OneBusiness/${business_num}`, 'post')
}

//פונקציה לשים איפה שרוצים לשלוח התראות
export const  Post_SendPushNotification=(body)=>{
    return Axios( `sendpushnotification`,'POST',body);
  }

//עדכון טבלת תורים לתור עתידי (באותה הטבלה)
export const AppointmentToClient= (body) => {
    return Axios(`Appointment/ClientToAppointment`, 'post',body)
}

export const SaveTokenforID= (ID_number,token) => {
    return Axios(`Client/OneClientToken/${ID_number}/${token}`, 'post',{})
}

export const SaveTokenforIDPro= (ID_number,token) => {
    return Axios(`Client/OneProfessionalToken/${ID_number}/${token}`, 'post',{})
}

//כל התורים בשביל טוקן
export const AllApointemtDetailes= () => {
    return Axios(`Appointment/AllAppointment`, 'post',{})
}

//כל התורים ללקוח
export const AllApointemtDetailesForClient= (body) => {
    return Axios(`Appointment/AllAppointmentForClient`, 'post',body)
}
//מביא את כל התורים הפנויים הקיימים - למסך הפתיחה של הלקוח
export const GetAllAvailableAppointments = () => {
    console.log(`Appointment/AllAvailableAppointment`)
    return Fetch(`Appointment/AllAvailableAppointment`,'get')
}
export const UpdateapiBusiness=(body)=>{
    return Axios(`Business/UpdateBusinesss`, 'post',body)
}
