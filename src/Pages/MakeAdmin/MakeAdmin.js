import React, {  useState } from 'react';

const MakeAdmin=()=>{
    const[email,setEmail]=useState('');
    
    const handleEmail=(e)=>{
setEmail(e.target.value);
    }
    const handleSubmit = e => {
     const user= {email }
       fetch('https://nameless-wave-90962.herokuapp.com/users/admin',{
           method:'PUT',
           headers:{
               'content-type':'application/json'
           },
           body:JSON.stringify(user)
       }).then(res=>res.json()).then(data=>{
           if(data.modifiedCount){
            setEmail('')
            alert('Admin created Successfully');
           
           }
       })
       e.preventDefault();
    };
    return(
        <div>
<div className="col-md-12 col-lg-6 mt-5" >
                <h3>Make an Admin--</h3>
                <form onSubmit={handleSubmit} className="orderForm" name="email" onBlur={handleEmail} >
             Email: <input className="ms-3 mt-3"   />
                    <br />
                    <input className="ms-3 mt-3" type="submit"  />
                </form>
            </div>
        </div>
    );
};


export default MakeAdmin;