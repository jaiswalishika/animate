import React, { useContext, useState } from 'react';
import UserContext from '../context/UserContext';


  
    const Log = () => {

const [username , setUsername] = useState('');
const [password , setPassword] = useState('');

const {user} = useContext(UserContext)
      
  
const handleSubmit = (e) => {     
        e.preventDefault()
        // setUser({username})
        console.log(user)
       }
      
            
    return (
        <>
        <div className=' grid grid-cols-1 my-5'>
         <div className=' flex flex-col justify-center'>
          <form className='max-w-[400px] w-full mx-auto  bg-gray-300 p-4' onSubmit ={handleSubmit} >

            <h2 className='text-4xl font-bold text-center py-6'>ANIMATE.</h2>
            <div className='flex flex-col py-2'>
              <label>Username</label>
              <input className='border p-2' type = "text" name='username' id='username' autoComplete='off' 
              value={username} onChange ={(e) => setUsername(e.target.value)}
              />

              <label>Password</label>
              <input className='border p-2' type = "text" name='password' id='password' autoComplete='off'value={password} onChange ={(e) => setPassword(e.target.value)} />
            </div>

            <button className='border w-full my-5 py-2 bg-indigo-500 hover:bg-indigo-600' type='submit'>Sign In</button>
            <div className='flex justify-between'>
              <p className='flex items-center mr-2'><input className='mr-2' type='checkbox'/>Remember Me</p>
              <p>Create an account</p>
              
              {/* <Link to="/Reg">Create an account</Link> */}
            </div>
          </form>
        </div>
        </div>
        </>
      )
    }
    
    
export default Log