import{r as t,j as s,B as x,H as i,T as p,A as u,k as c,l as m,m as g,F as h,p as d,q as b,e as j,z as w,C as y}from"./index-bac23c4f.js";const f=()=>{const[o,n]=t.useState(""),[r,e]=t.useState({status:"",msg:""}),l=()=>{o===""?e({status:"error",msg:"Please enter your email address"}):w(y,o).then(()=>{e({status:"success",msg:"Password reset email sent!"})}).catch(a=>{e({error:a.message})})};return s.jsxs(x,{px:[null,"20px","5%","10%"],py:"5%",textAlign:"center",children:[s.jsx(i,{py:"20px",children:"Forgot Password"}),s.jsx(p,{children:"Enter your email address. We will send you a code to reset your password"}),r.msg!==""?s.jsxs(u,{status:r.status,display:"flex",justifyContent:"space-between",w:["100%","400px","500px"],mx:"auto",my:"30px",children:[s.jsx(c,{children:r.msg}),s.jsx(m,{onClick:()=>e({status:"",msg:""})})]}):"",s.jsx(g,{mt:"4",w:["100%","400px","500px"],mx:"auto",py:"30px",children:s.jsxs(h,{align:"center",w:"100%",p:"2px",border:"1px",borderColor:"gray.100",borderRadius:"0",children:[s.jsx(d,{href:"/",bgColor:"gray.100",p:"3",border:"1px",borderRadius:"0",borderColor:"gray.100",children:s.jsx(b,{})}),s.jsx(j,{type:"email",fontSize:"14px",borderRadius:"0",border:"none",placeholder:"Enter email address",onChange:a=>n(a.target.value)})]})}),s.jsx(d,{fontSize:"14px",borderRadius:"2px",border:"1px solid brand.900",bgColor:"brand.900",color:"white",mx:"auto",w:["100%","400px","500px"],mt:"6",_hover:{bgColor:"brand.800"},onClick:()=>l(),children:"Reset Password"})]})};export{f as default};
