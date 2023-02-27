import React from 'react';
// import style from './html_markups/navbar.css';
// @mport url('https://fonts.googleapis.com/css2?family=IM+Fell+English+SC&display=swap');

export default function Navbar() {
  const to_do_app = {
    display:"flex",
    justifyContent:"center",
    width:"100%", 
    marginTop:"6px",
    height:"5.375rem",
    backgroundColor:"#211E1E",
    borderRadius:"4.625rem"
  };
  const todo_title = {
    display:"flex",
    justifyContent:"center",
    color:"white"
  };
  const todo_font = {
    marginTop:"1.7rem",
    height:"2.375rem",
    fontFamily:"'IM Fell English SC', serif",
    color:"#FFD700",
    fontSize:"25px",
    fontWeight:"10px",
  };
return (
    <React.Fragment>
      <nav  style={to_do_app}>
        <div className='todo_title' style={todo_title}>
             <a href="../public/index.html" style={{textDecoration:"none"}}>
               <h2 style={todo_font} ><b>To-Do App</b></h2>
             </a>
        </div>
         </nav> 
    </React.Fragment>   
);
}
 