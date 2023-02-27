import React from 'react';
import img from '../img/Circle-icons-calendar.svg.png';
import Tassk from './Task';


 export default function TodoList() {
    const center = {
        maxWidth:'500px',
        display:'flex',
        justifyContent:'center',
        backgroundColor:'#ECBB5C',
        borderRadius:'20px',
        height:'20.938rem',    
    }
    const taskCalender = {
        display:'flex',
        justifyContent:'space-between',
        height:'3rem',
        width:'24rem',
        margin:'1.5rem',
        paddingLeft:'20px'    
    }
    const taskDatedetails = {
        display:'flex',
        justifyContent:'space-between',
        width:'25.5rem',
        height:'9rem',
        paddingLeft:'1rem',
        fontFamily:"'IM Fell English SC', serif",
        fontSize:'18px',
        overFlow:'auto'
    }
    const addButton= {
            width: '26rem',
            height: '3rem',
            display: 'flex',
            justifyContent: 'end',
            position:'fixed'
    } 
    
   
   

    return(
        
        <section className='container m-5' style={{position:'fixed'}}>
            <div className='row'>
                <div className='col-12'>
                 <div style={center} className="m-auto">
                    <div style={{display:'block', height:'21rem', width:'30rem',}}>
                            <div style={taskCalender}>
                                <div style={{fontFamily:"'IM Fell English SC', serif"}}><b><p style={{fontSize:'22px', paddingTop:'13px'}}>Tasks</p></b></div>
                                <img src={img} alt="" style={{  boxShadow:' 7px 16px 22px -9px #111',borderRadius:'30px' }}/>
                            </div>
                            <div className='taskDatedetails m-2' style={taskDatedetails}>
                                <Tassk/>
                                    
                            </div>
                        <div className='addButton' style={addButton}>
                            <a href="/addTask"><button className='btn btn-dark' style={{borderRadius:'50px', fontSize:'32px',width:'3.5rem', height:'3.5rem',paddingTop:'unset'}}>+</button></a>
                        </div>
                    </div>
              </div>
            </div>
        </div>    
        </section>
    
    )
    
}
