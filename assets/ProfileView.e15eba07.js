import{_ as p,u as m,p as g,r as b,o as c,c as a,a as t,t as n,n as d,d as o,b as y,l as f}from"./index.21bf1f37.js";import{h as v}from"./moment.9709ab41.js";import{B as w}from"./TheBoycotts.09139d99.js";import{_ as B}from"./boycott.abc0ad59.js";const k={name:"ProfileView",components:{Boycotts:w},data(){return{user:{},boycottsCount:{},toast:m()}},computed:{...g(f,["currentUser","accessToken","isAdmin","isModerator"])},async created(){try{let r;if(this.$route.params.userId)try{let e=await fetch("https://boycott-service.onrender.com/api/user/"+this.$route.params.userId),i=await e.json();e.status===200?(this.user=i.user,r=new Date(this.user.createdAt)):this.toast.error(i.message)}catch(e){this.toast.error(e)}else this.user=this.currentUser,this.user._id=this.user.id,r=new Date(this.currentUser.createdAt);this.user.createdAt=v(r).format("MM-DD-YYYY")}catch{this.$router.push("/")}},methods:{async onFileChange(r){try{let e=r.target.files[0],i=new FormData;i.append("image",e),i.append("imageSize",300);const h=await fetch("https://boycott-service.onrender.com/api/uploadOne",{method:"POST",headers:{"x-access-token":localStorage.accessToken},body:i}),s=await h.json();h.status==201?(this.changeAvatar(s),this.currentUser.photo="https://images.kalanso.top/"+s,localStorage.setItem("currentUser",JSON.stringify(this.currentUser)),this.user.photo="https://images.kalanso.top/"+s):this.toast.error(s.message)}catch(e){this.toast.error(e)}},async changeAvatar(r){try{let e=await fetch("https://boycott-service.onrender.com/api/updateAvatar",{method:"PUT",headers:{"x-access-token":localStorage.accessToken,"Content-type":"application/json"},body:JSON.stringify({photo:r})}),i=e.json();e.status===201?this.toast.success("Votre photo a \xE9t\xE9 modifi\xE9e"):this.toast.error(i.message)}catch(e){this.toast.error(e)}},getBoycotts(r,e){this.boycottsCount[e]=r}}},C={key:0,id:"main","data-aos":"fade","data-aos-delay":"500"},S={class:"page-header d-flex align-items-center mb-4"},A={class:"container position-relative"},I={class:"row d-flex justify-content-center"},N={class:"col-lg-6 text-center"},U={id:"about",class:"about"},j={class:"container"},x={class:"row gy-4 justify-content-center"},T={class:"col-lg-4 text-center"},V=["src"],D={key:1,src:B,class:"img-fluid",alt:""},M={key:2},P=t("label",{for:"upload",class:"btn-get-started mt-3"},"T\xE9l\xE9charger image",-1),F={class:"col-lg-5 content"},O={class:"row"},Y={class:"col-lg-12"},q=t("i",{class:"bi bi-chevron-right"},null,-1),G=t("strong",null,"Pays:",-1),J=t("i",{class:"bi bi-chevron-right"},null,-1),z=t("strong",null,"R\xE9gion:",-1),E=t("i",{class:"bi bi-chevron-right"},null,-1),R=t("strong",null,"Ville:",-1),W=t("i",{class:"bi bi-chevron-right"},null,-1),H=t("strong",null,"Membre depuis:",-1),K=t("i",{class:"bi bi-chevron-right"},null,-1),L=t("strong",null,"Nombre de boycotts cr\xE9e:",-1),Q=t("i",{class:"bi bi-chevron-right"},null,-1),X=t("strong",null,"Nombre de boycotts suivis:",-1),Z=t("i",{class:"bi bi-chevron-right"},null,-1),$=t("strong",null,"Nombre d'avertissements:",-1),tt={key:0,class:"container my-4"},st={class:"section-header"},et=t("h2",null,"Mes boycotts",-1),ot={key:1,class:"container my-4"},rt={class:"section-header"},nt=t("h2",null,"Boycotts que je suis",-1),it={key:2,class:"container my-4"},lt={class:"section-header"},ct=t("h2",null,"Boycotts que j'ai des avertissements",-1);function at(r,e,i,h,s,u){const _=b("Boycotts");return s.user?(c(),a("main",C,[t("div",S,[t("div",A,[t("div",I,[t("div",N,[t("h2",null,n(s.user.login),1)])])])]),t("section",U,[t("div",j,[t("div",x,[t("div",T,[s.user.photo?(c(),a("img",{key:0,src:"https://images.kalanso.top/"+s.user.photo,class:"img-fluid",alt:""},null,8,V)):(c(),a("img",D)),r.currentUser&&r.currentUser.id==s.user._id?(c(),a("div",M,[P,t("input",{type:"file",id:"upload",hidden:"",onChange:e[0]||(e[0]=(...l)=>u.onFileChange&&u.onFileChange(...l))},null,32)])):d("",!0)]),t("div",F,[t("div",O,[t("div",Y,[t("ul",null,[t("li",null,[q,o(),G,o(),t("span",null,n(s.user.country),1)]),t("li",null,[J,o(),z,o(),t("span",null,n(s.user.state),1)]),t("li",null,[E,o(),R,o(),t("span",null,n(s.user.city),1)]),t("li",null,[W,o(),H,o(),t("span",null,n(s.user.createdAt),1)]),t("li",null,[K,o(),L,o(),t("span",null,n(s.boycottsCount.all),1)]),t("li",null,[Q,o(),X,o(),t("span",null,n(s.boycottsCount.follow),1)]),t("li",null,[Z,o(),$,o(),t("span",null,n(s.boycottsCount.warn),1)])])])])])])])]),s.user._id?(c(),a("div",tt,[t("div",st,[et,t("p",null,n(s.boycottsCount.all)+" boycott(s) a(ont) \xE9t\xE9 cr\xE9\xE9(s)",1)]),y(_,{createdBy:"user",userId:s.user._id,onGetBoycotts:e[1]||(e[1]=l=>u.getBoycotts(l,"all"))},null,8,["userId"])])):d("",!0),s.user._id?(c(),a("div",ot,[t("div",rt,[nt,t("p",null,n(s.boycottsCount.follow)+" boycott(s) est(sont) suivi(s)",1)]),y(_,{createdBy:"user",type:"follow",userId:s.user._id,onGetBoycotts:e[2]||(e[2]=l=>u.getBoycotts(l,"follow"))},null,8,["userId"])])):d("",!0),s.user._id?(c(),a("div",it,[t("div",lt,[ct,t("p",null,n(s.boycottsCount.warn)+" boycott(s) est(sont) avertis\xE9(s)",1)]),y(_,{createdBy:"user",type:"warn",userId:s.user._id,onGetBoycotts:e[3]||(e[3]=l=>u.getBoycotts(l,"warn"))},null,8,["userId"])])):d("",!0)])):d("",!0)}const yt=p(k,[["render",at]]);export{yt as default};
