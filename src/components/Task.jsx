import React from 'react';
import  Axios from '../AxiosConfig/Axios';
import { useState,useEffect } from 'react';

export default function Task() {
    const [Task ,setTasks]= useState([]);
    const [Tno,setTno] = useState(0);
   
    useEffect(()=>{
         Axios.get('/getdata')
    //    console.log(dats)
        // .then(res => console.log(res.data))
        .then(res => setTasks(res.data))
        .catch(error => console.log(error))
     },[])
    if (Task.length === 0) {
        return(
            <div className='task' style={{display:'block',width:'100%',overflow:'auto'}}>
              <h4>No TasK Yet..</h4>                                           
            </div>
        )
        
    } else {
        return(
                <div className='task' style={{display:'block',width:'100%',overflow:'auto'}}>                                          
                        {
                            Task.map(obj =>{
                                return(
                                    <React.Fragment>
                                        <div style={{display:'flex'}}>
                                        <div style={{width: '139%',height: '4rem', overflow:'auto',display:'flex',justifyContent:'start' }}>                  
                                           <label class="form-check-label" for="inlineRadio1"><b>*</b></label> &nbsp; &nbsp;
                                            <h4>{obj.DetailTask}</h4>
                                        </div> 
                                         <div className='Date' style={{fontFamily: "'Inika', serif",width:'50%',height: '4rem',justifyContent:'end',display:'flex'}}>{obj.Date}</div>
                                        </div>
                                   </React.Fragment>
                                )
                            })
                        }
                </div>
        )
    }
 }
