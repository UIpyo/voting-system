import { Button, Form } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css'
import styles from '../styles/Register.module.css'
import Input from '../components/Input'
import Link from 'next/link'

const LoginForm = () => {
    return (
        <div style={{display:"flex", height:"100vh", backgroundColor:"#2F2E41",color:"white"}}>
            <div style={{flex:1, width:"50vw", alignSelf:"center", marginRight:"15px",textAlign:"left"}}>
                <img src='./loginform.svg'/>
            </div>
            <div style={{flex:1,width: "30vw",marginLeft:"5vw", marginRight: "10vw",alignSelf:"center"}}>
                <h1 className={styles.header}>Login Form</h1>
                <Form>
                    <Input type='text' name='email' label='Email'/>
                    <Input type='password' name='password' label='Password' />
                    <div><Link href='/'>Forgot Password ?</Link></div>
                    <div className={styles.login}>Not a user ? <Link href='/register'> Register now</Link></div>
                    <Button type="submit" color="facebook">LOGIN</Button>
                </Form>
            </div>
        </div>
    )
}

export default LoginForm;