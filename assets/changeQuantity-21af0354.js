import{i as n,O as d,j as e,F as l,p as a,ag as x,ah as p,ai as u,a9 as c}from"./index-bac23c4f.js";const C=({product:r})=>{const i=n(),t=d(s=>s.data.cart);return e.jsxs(l,{justify:"flex-end",border:"1px solid #e4e4e4",p:"3px",children:[e.jsx(a,{size:"sm",borderColor:"gray.100",fontSize:"10px",borderRadius:"0",p:"1",onClick:()=>i(x(r.id)),children:e.jsx(p,{})}),t.filter(s=>s.id===r.id).map((s,o)=>e.jsx(a,{size:"sm",type:"number",borderColor:"gray.100",fontSize:"12px",borderRadius:"0",bgColor:"whiteAlpha.500",w:"40px",children:s.quantity||1},o)),e.jsx(a,{size:"sm",borderColor:"gray.100",fontSize:"10px",borderRadius:"0",p:"1",onClick:()=>i(u(r.id)),children:e.jsx(c,{})})]})};export{C};
