import{_ as c,m as l,i as m,o as p,c as f,a as o,j as u,e as a,k as r,l as d}from"./index.4f75a0b3.js";const _={name:"SigninView",data(){return{login:"",password:""}},computed:{...l(d,["user","accessToken"])},async created(){await this.doVerifyConfirmationCode()},methods:{...m(d,["signin","verifyConfirmationCode"]),async doSignin(s){this.signin(this.login,this.password)},async doVerifyConfirmationCode(){let s=this.$route.query.confirmationCode;s&&await this.verifyConfirmationCode(s)}}},h={id:"main","data-aos":"fade","data-aos-delay":"500"},g=o("div",{class:"page-header d-flex align-items-center"},[o("div",{class:"container position-relative text-center"},[o("h2",null,"Se connecter")])],-1),v={id:"contact",class:"contact"},w={class:"container"},y={class:"row justify-content-center mt-4"},C={class:"col-lg-6"},S={class:"form-group mt-3"},x={class:"form-group mt-3 mb-4"},V=o("div",{class:"text-center"},[o("button",{type:"submit"},"Se connecter")],-1);function b(s,e,k,q,i,n){return p(),f("main",h,[g,o("section",v,[o("div",w,[o("div",y,[o("div",C,[o("form",{onSubmit:e[2]||(e[2]=u((...t)=>n.doSignin&&n.doSignin(...t),["prevent"])),method:"post",role:"form",class:"form mb-4"},[o("div",S,[a(o("input",{type:"text",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=t=>i.login=t),id:"login",placeholder:"Votre login ou email",required:""},null,512),[[r,i.login]])]),o("div",x,[a(o("input",{type:"password",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>i.password=t),id:"password",placeholder:"Mot de passe",required:""},null,512),[[r,i.password]])]),V],32)])])])])])}const M=c(_,[["render",b]]);export{M as default};
