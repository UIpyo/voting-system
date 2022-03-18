import styles from '../styles/Register.module.css'
import {Form, Button } from 'semantic-ui-react'
// import WebFont from 'webfontloader' 
import 'semantic-ui-css/semantic.min.css'
import Input from '../components/Input'
import Link from 'next/link'
// import { useEffect } from 'react/cjs/react.production.min'

const input = {
    name: ['text','Full Name'], 
    dob: ['date','Date of Birth'], 
    parentName: ['text',"Father's/Mother's Name"], 
    email: ['email',"Email"],
    mobile: ['number',"Mobile Number"],
    password: ['password',"Password"],
    rePassword: ['password',"Re-enter Password"],
    aadhar: ['number',"Aadhar Number"]
}

// const inputList = ["Full Name", "Date of Birth", "Father's/Mother's Name", "Email", "Mobile Number","Password", "Re-enter Password", "Aadhar"]

// let inputList = [];

// for(let key in input) {
//     inputList.push(<Form.Field name={key} key={key} control={Input} label={input[key]} />)
// }

// let inputList = Object.entries(input).map((key, value) => (<Form.Field name={key} key={key} control={Input} label={value} />));


const formSubmit = (event) => {
    event.preventDefault();
    if(event.target.password !== event.target.rePassword) alert("Passwords don't match")
}

const RegistrationForm = () => {

    return(
        <div style={{display:"flex", height:"100vh", backgroundColor:"#2F2E41",color:"white"}}>
        <div style={{flex:1, width:"50vw", alignSelf:"center", marginRight:"15px",textAlign:"center"}}>
            <img src='./register.svg'/>
        </div>
        <div  style={{flex:1,width: "30vw",marginLeft:"5vw", marginRight: "10vw",alignSelf:"center"}}>
            <h1 className={styles.header}>Registration Form</h1>
        <Form className={styles.registerForm} onSubmit={formSubmit}>
            {/* <Form.Field name="name" control={Input} placeholder='Full Name' label='Full Name:'/> */}
            
                {/* {inputList} */}
                {/* // inputList.map((input,index) => {
                //     return(<Form.Field key={index} control={Input} label={input}/>)
                // })
             */}
            {/* { Object.entries(input).map(([key, value]) => { return <Form.Field name={key} key={key} control={Input} label={`${value}:`} className={styles.input} required/>})} */}
            {Object.entries(input).map(([key,value])=> { return <Input type={value[0]} name={key} label={value[1]}/>})}
            <div className={styles.login}>Already a candidate?<Link href='/login'> Login now</Link></div>
            <Button type='submit' color='facebook' >SUBMIT</Button>

        </Form>
        </div>
        </div>
    )
}

export default RegistrationForm