import{d as h,u as g,r as m,b as w,o as n,c as u,e,w as r,v as f,f as d,g as V,t as i,F as p,h as x,n as y,_ as $}from"./index-gpKbHepH.js";const k={class:"mb-4 flex items-center justify-center"},B={class:"w-30px"},a=26,c=800,C=h({__name:"color",setup(U){g(b=>({"04fbfc95":_.value}));const o=m(196),_=w(()=>c/a+"px"),s=m("hsl");return(b,t)=>(n(),u("div",null,[e("div",k,[e("label",null,[r(e("input",{type:"radio",name:"color-type",value:"hsl","onUpdate:modelValue":t[0]||(t[0]=l=>s.value=l)},null,512),[[f,s.value]]),d(" hsl ")]),e("label",null,[r(e("input",{type:"radio",name:"color-type",value:"hwb","onUpdate:modelValue":t[1]||(t[1]=l=>s.value=l)},null,512),[[f,s.value]]),d(" hwb ")]),d(" | Hue: "),r(e("input",{"onUpdate:modelValue":t[2]||(t[2]=l=>o.value=l),type:"range",min:"0",max:"360"},null,512),[[V,o.value]]),e("span",B,i(o.value),1)]),e("div",{class:"cube-layout",style:y({width:`${c}px`})},[(n(),u(p,null,x(a,l=>(n(),u(p,null,[(n(),u(p,null,x(a,v=>e("div",{class:"cube",style:y({backgroundColor:`${s.value}(${o.value} ${l*(100/a)}% ${v*(100/a)}%)`,height:`${c/a}px`})},i(l)+","+i(v),5)),64))],64))),64))],4)]))}}),F=$(C,[["__scopeId","data-v-b4362f7c"]]);export{F as default};
