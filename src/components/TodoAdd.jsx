
import React from 'react';
import { useState } from 'react';
import Axios from '../AxiosConfig/Axios'
import img from '../img/clock-watch-svgrepo-com.svg';


export default function TodoAdd() {
    const center = {
        maxWidth:'500px',
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#ECBB5C',
        borderRadius:'20px',
        height:'20.938rem',    
    }
    const taskCalender = {
        height:'3rem',
        width:'24rem',
        margin:'1.5rem',
        paddingLeft:'20px'    
    }
    const taskDatedetails = {
        display:'block',
        width:'17.5rem',
        height:'9rem',
        paddingTop:'15px'
        
       
    }
    const addButton= {
            width: '5rem',
            height: '3rem',
            display: 'flex',
            marginTop:'1.4rem',
            position:'fixed'
    }
const [Task , setTask] = useState({task : "",date: ""})

const handleSubmit = async (event)=>{
    try {
        event.preventDefault();
        await Axios.post('/addpost',Task)
            .then( res => console.log(res))
           .catch( err => console.error('Error', err));
    } catch (error) {
        console.log(error);
    }
    
}
    return(
        
         <React.Fragment>  
         <section className='container m-5' style={{position:'fixed'}}>
            <div className='row'>
                <div className='col-12'>
                 <div style={center} className="m-auto">
                            <div style={taskCalender}>
                                <div style={{fontFamily:"'IM Fell English SC', serif"}}><b><p style={{fontSize:'22px', paddingTop:'13px'}}>New Task</p></b></div>
                                <form onSubmit={handleSubmit}>
                                    <input className="form-control" type="text" placeholder="Enter Your Task Details.." name='task' aria-label="default input example"
                                    value={Task.task}
                                     onChange={e => setTask({...Task,task: e.target.value})}
                                     /><br/>
                                    <div class="input-group date" id="datepicker"  >
                                        <input type="date" class="form-control" id="date" autoComplete="off" value={Task.date} onChange={e => setTask({...Task,date: e.target.value})}/>  
                                    </div>

                                    <div className='addButton' style={addButton}>
                                      <button className='btn btn-dark' style={{borderRadius:'50px', fontSize:'19px',width:'5rem', height:'3rem',paddingTop:'6px',fontFamily:"'IM Fell English SC', serif"}}  name='submit'>Done</button>
                                    </div>  
                                </form>    
                            </div>
                            
                            <div className='taskDatedetails m-2' style={taskDatedetails} >
                                 <a href="/" style={{textDecoration:'none',color:'#211E1E'}}>
                                <img src={img} alt="" style={{  boxShadow:' 7px 16px 22px -9px #111',borderRadius:'80px',width:'5rem',height:'5rem',marginLeft:'27px',textDecoration:'none'}}/>
                                <h4 style={{fontFamily:"'IM Fell English SC', serif",fontSize:'18px', marginLeft:'14px',marginTop:'10px',filter:'blur(.3px)'}}>Set Reminder</h4>
                                <h4 style={{fontFamily:"'IM Fell English SC', serif",fontSize:'11px', marginLeft:'14px',marginTop:'3px',filter:'blur(.3px)'}}>(Tap Your Clock)</h4>
                                </a>
                                
                            </div>                       
                   </div>
              
            </div>
        </div>    
        </section> 
     </React.Fragment>      
    )
}
