import{d as l,r,c as u,w as i,v as c,a as t,F as m,u as p,o as d,s as f}from"./index-DxyS-XYp.js";const _=t("h2",null,"请输入神秘代码",-1),x=l({__name:"LoginView",setup(v){const e=r(""),a=p();function n(){e.value?(localStorage.setItem(f,e.value),a.push({name:"home"})):alert("请输入有效内容！")}return(g,o)=>(d(),u(m,null,[_,i(t("input",{"onUpdate:modelValue":o[0]||(o[0]=s=>e.value=s),type:"text"},null,512),[[c,e.value]]),t("button",{onClick:n},"确定")],64))}});export{x as default};
