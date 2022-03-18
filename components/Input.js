// import WebFont from 'webfontloader'

const Input = ({ type, name, label}) => {

    // useEffect(()=> {
    //     WebFont.load({
    //         google: {
    //           families: ['Padauk','Sans Serif']
    //         }
    //       });
    // },[])

    // let type = 'text';

    // if(name==='password' || name==='rePassword') {
    //     type = 'password'
    // }

    return (
        <div style={{marginBottom:"13px"}}>
    <label htmlFor={name} style={{fontFamily:"Padauk"}}>{label}<span style={{color:"red"}}> *</span></label>
    {/* // if(name!=='password' || name!=='rePassword')  */}
    <input type={type} id={name} name={name} required/>
    </div>
    )
}

export default Input