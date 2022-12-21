import{_ as y,u as m,q as g,r as b,o as a,c as u,a as t,t as n,p as d,d as o,b as p,n as v}from"./index.1f24928c.js";import{h as f}from"./moment.9709ab41.js";import{B as w}from"./TheBoycotts.a4c3750a.js";const B={name:"ProfileView",components:{Boycotts:w},data(){return{user:{},boycottsCount:{},toast:m()}},computed:{...g(v,["currentUser","accessToken","isAdmin","isModerator"])},async created(){try{let r;if(this.$route.params.userId)try{let e=await fetch("https://boycott-service.onrender.com/api/user/"+this.$route.params.userId),i=await e.json();e.status===200?(this.user=i.user,this.user.photo=this.user.photo?"https://images.kalanso.top/"+this.user.photo:"https://images.kalanso.top/uploads/0/63a2943ebd8e3.png",r=new Date(this.user.createdAt)):this.toast.error(i.message)}catch(e){this.toast.error(e)}else this.user=this.currentUser,this.user._id=this.user.id,r=new Date(this.currentUser.createdAt);this.user.createdAt=f(r).format("MM-DD-YYYY")}catch{this.$router.push("/")}},methods:{async onFileChange(r){try{let e=r.target.files[0],i=new FormData;i.append("image",e),i.append("imageSize",300);const h=await fetch("https://boycott-service.onrender.com/api/uploadOne",{method:"POST",headers:{"x-access-token":localStorage.accessToken},body:i}),s=await h.json();h.status==201?(this.changeAvatar(s),this.currentUser.photo="https://images.kalanso.top/"+s,localStorage.setItem("currentUser",JSON.stringify(this.currentUser)),this.user.photo="https://images.kalanso.top/"+s):this.toast.error(s.message)}catch(e){this.toast.error(e)}},async changeAvatar(r){try{let e=await fetch("https://boycott-service.onrender.com/api/updateAvatar",{method:"PUT",headers:{"x-access-token":localStorage.accessToken,"Content-type":"application/json"},body:JSON.stringify({photo:r})}),i=e.json();e.status===201?this.toast.success("Votre photo a \xE9t\xE9 modifi\xE9e"):this.toast.error(i.message)}catch(e){this.toast.error(e)}},getBoycotts(r,e){this.boycottsCount[e]=r}}},k={key:0,id:"main","data-aos":"fade","data-aos-delay":"500"},C={class:"page-header d-flex align-items-center mb-4"},S={class:"container position-relative"},A={class:"row d-flex justify-content-center"},I={class:"col-lg-6 text-center"},N={id:"about",class:"about"},U={class:"container"},j={class:"row gy-4 justify-content-center"},x={class:"col-lg-4 text-center"},T=["src"],V={key:0},D=t("label",{for:"upload",class:"btn-get-started mt-3"},"T\xE9l\xE9charger image",-1),M={class:"col-lg-5 content"},P={class:"row"},q={class:"col-lg-12"},F=t("i",{class:"bi bi-chevron-right"},null,-1),O=t("strong",null,"Pays:",-1),Y=t("i",{class:"bi bi-chevron-right"},null,-1),G=t("strong",null,"R\xE9gion:",-1),J=t("i",{class:"bi bi-chevron-right"},null,-1),z=t("strong",null,"Ville:",-1),E=t("i",{class:"bi bi-chevron-right"},null,-1),R=t("strong",null,"Membre depuis:",-1),W=t("i",{class:"bi bi-chevron-right"},null,-1),H=t("strong",null,"Nombre de boycotts cr\xE9e:",-1),K=t("i",{class:"bi bi-chevron-right"},null,-1),L=t("strong",null,"Nombre de boycotts suivis:",-1),Q=t("i",{class:"bi bi-chevron-right"},null,-1),X=t("strong",null,"Nombre d'avertissements:",-1),Z={key:0,class:"container my-4"},$={class:"section-header"},tt=t("h2",null,"Mes boycotts",-1),st={key:1,class:"container my-4"},et={class:"section-header"},ot=t("h2",null,"Boycotts que je suis",-1),rt={key:2,class:"container my-4"},nt={class:"section-header"},it=t("h2",null,"Boycotts que j'ai des avertissements",-1);function lt(r,e,i,h,s,c){const _=b("Boycotts");return s.user?(a(),u("main",k,[t("div",C,[t("div",S,[t("div",A,[t("div",I,[t("h2",null,n(s.user.login),1)])])])]),t("section",N,[t("div",U,[t("div",j,[t("div",x,[t("img",{src:s.user.photo,class:"img-fluid",alt:""},null,8,T),r.currentUser&&r.currentUser.id==s.user._id?(a(),u("div",V,[D,t("input",{type:"file",id:"upload",hidden:"",onChange:e[0]||(e[0]=(...l)=>c.onFileChange&&c.onFileChange(...l))},null,32)])):d("",!0)]),t("div",M,[t("div",P,[t("div",q,[t("ul",null,[t("li",null,[F,o(),O,o(),t("span",null,n(s.user.country),1)]),t("li",null,[Y,o(),G,o(),t("span",null,n(s.user.state),1)]),t("li",null,[J,o(),z,o(),t("span",null,n(s.user.city),1)]),t("li",null,[E,o(),R,o(),t("span",null,n(s.user.createdAt),1)]),t("li",null,[W,o(),H,o(),t("span",null,n(s.boycottsCount.all),1)]),t("li",null,[K,o(),L,o(),t("span",null,n(s.boycottsCount.follow),1)]),t("li",null,[Q,o(),X,o(),t("span",null,n(s.boycottsCount.warn),1)])])])])])])])]),s.user._id?(a(),u("div",Z,[t("div",$,[tt,t("p",null,n(s.boycottsCount.all)+" boycott(s) a(ont) \xE9t\xE9 cr\xE9\xE9(s)",1)]),p(_,{createdBy:"user",userId:s.user._id,onGetBoycotts:e[1]||(e[1]=l=>c.getBoycotts(l,"all"))},null,8,["userId"])])):d("",!0),s.user._id?(a(),u("div",st,[t("div",et,[ot,t("p",null,n(s.boycottsCount.follow)+" boycott(s) est(sont) suivi(s)",1)]),p(_,{createdBy:"user",type:"follow",userId:s.user._id,onGetBoycotts:e[2]||(e[2]=l=>c.getBoycotts(l,"follow"))},null,8,["userId"])])):d("",!0),s.user._id?(a(),u("div",rt,[t("div",nt,[it,t("p",null,n(s.boycottsCount.warn)+" boycott(s) est(sont) avertis\xE9(s)",1)]),p(_,{createdBy:"user",type:"warn",userId:s.user._id,onGetBoycotts:e[3]||(e[3]=l=>c.getBoycotts(l,"warn"))},null,8,["userId"])])):d("",!0)])):d("",!0)}const dt=y(B,[["render",lt]]);export{dt as default};
