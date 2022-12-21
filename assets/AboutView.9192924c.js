import{_ as l,u as r,o as d,c as u,a as e,t as n,h as a}from"./index.8d79ea0a.js";const m="/boycott-static/assets/about_1.6674ae05.jpg",p="/boycott-static/assets/about_2.987063a8.jpg",v="/boycott-static/assets/about_3.ddb4dc9f.jpg",h="/boycott-static/assets/about_4.b0d3fee9.jpg",f={name:"AboutView",data(){return{countUsers:0,countBoycotts:0,countComments:0,countFollows:0}},async created(){await this.getCounts()},methods:{async getCounts(){const i=r();try{let t=await fetch("https://boycott-service.onrender.com/api/users"),s=await t.json();t.status==200?this.countUsers=s.totalUsers:i.error(s.message),t=await fetch("https://boycott-service.onrender.com/api/boycott/stat"),s=await t.json(),t.status==200?s.length&&s.forEach(c=>{this.countBoycotts++,this.countComments+=c.comment_count,this.countFollows+=c.likes_count}):i.error(s.message)}catch(t){i.error(t.message)}}}},g={id:"main","data-aos":"fade","data-aos-delay":"500"},_=a('<div class="page-header d-flex align-items-center mb-4"><div class="container position-relative"><div class="row d-flex justify-content-center"><div class="col-lg-10 text-center"><h2>\xC0 propos de nous</h2><p>Un boycott doit r\xE9pondre \xE0 diff\xE9rents crit\xE8res afin de faire son travail de positionnement aupr\xE8s de la client\xE8le. Pour d\xE9velopper une campagne ad\xE9quatement, il est fondamental d\u2019effectuer une profonde r\xE9flexion sur l\u2019entreprise, le produit, les comp\xE9titeurs, les forces, les faiblesses, les opportunit\xE9s et les difficult\xE9s. Une fois ce travail de fond ex\xE9cut\xE9, il devient possible de b\xE2tir une marque forte qui deviendra progressivement une promesse aux yeux du clien</p></div></div></div></div><section id="services" class="services"><div class="container"><div class="section-header"><h2>Notre \xE9quipe</h2><p>Nous sommes heureux </p></div><div class="row gy-4"><div class="col-xl-3 col-md-6 d-flex"><div class="service-item position-relative text-center"><img src="'+m+'" class="testimonial-img member mb-4" alt=""><h4><a href="" class="stretched-link">Jack Black</a></h4><p>PR\xC9SIDENT DIRECTEUR G\xC9N\xC9RAL</p><p>j.black@boycott.com</p></div></div><div class="col-xl-3 col-md-6 d-flex"><div class="service-item position-relative text-center"><img src="'+p+'" class="testimonial-img member mb-4" alt=""><h4><a href="#" class="stretched-link">Adams Sandlers</a></h4><p>ADMINISTRATION &amp; GESTION</p><p>a.sandlers@boycott.com</p></div></div><div class="col-xl-3 col-md-6 d-flex"><div class="service-item position-relative text-center"><img src="'+v+'" class="testimonial-img member mb-4" alt=""><h4><a href="#" class="stretched-link">Larry Lebonsoir</a></h4><p>SERVICE CLIENT\xC8LE</p><p>l.lebonsoir@boycott.com</p></div></div><div class="col-xl-3 col-md-6 d-flex"><div class="service-item position-relative text-center"><img src="'+h+'" class="testimonial-img member mb-4" alt=""><h4><a href="#" class="stretched-link">Ana Something</a></h4><p>MARKETING NUM\xC9RIQUE</p><p>a.something@boycott.com</p></div></div></div></div></section>',2),b={id:"pricing",class:"pricing"},x={class:"container"},y=e("div",{class:"section-header"},[e("h2",null,"Nos progr\xE8s"),e("p",null,"En mati\xE8re")],-1),N={class:"row gy-4 gx-lg-5"},j={class:"col-lg-6"},w={class:"pricing-item d-flex justify-content-between"},q=e("h3",null,"Nombre de boycotts",-1),E={class:"col-lg-6"},k={class:"pricing-item d-flex justify-content-between"},C=e("h3",null,"Nombre de membres",-1),I={class:"col-lg-6"},L={class:"pricing-item d-flex justify-content-between"},T=e("h3",null,"Nombre de commentaires",-1),U={class:"col-lg-6"},A={class:"pricing-item d-flex justify-content-between"},R=e("h3",null,"Nombre de suivis",-1),S=a('<div class="page-header d-flex align-items-center"><div class="container position-relative"><div class="row d-flex justify-content-center"><div class="col-lg-10 text-center"><h2>Notre mission</h2><p>Quand vient l\u2019heure de communiquer, les mots sont d\u2019une importance capitale. Le discours doit non seulement vous ressembler, il doit aussi \xEAtre adapt\xE9 sur mesure \xE0 la client\xE8le cibl\xE9e. Les mots sont des armes \xE0 double tranchant. Ils ont le pouvoir de faire rire, r\xE9fl\xE9chir, pleurer ou choquer. Ceci dit, ils ne doivent jamais laisser indiff\xE9rent. Notre \xE9quipe de professionnels vibre \xE0 l\u2019id\xE9e de cr\xE9er pour vous un contenu fort, touchant et bien ficel\xE9. La port\xE9e de votre message n\u2019aura d\u2019\xE9gal que l\u2019\xE9motion qui en d\xE9coulera, c\u2019est pourquoi nous mettons \xE0 votre disposition nos services de r\xE9daction, de traduction multilingue et de gestion de contenu.</p></div></div></div></div><div class="page-header d-flex align-items-center mb-4"><div class="container position-relative"><div class="row d-flex justify-content-center"><div class="col-lg-10 text-center"><h2>Nos valeurs</h2><p>La strat\xE9gie digitale utilise les nouvelles technologies de l\u2019information et de la communication (les fameuses NTIC, c\u2019est-\xE0-dire tout ce qui rel\xE8ve du Web), au service d\u2019une marque, d\u2019une soci\xE9t\xE9, d\u2019un produit\u2026 Comme une strat\xE9gie marketing \xAB classique \xBB, la strat\xE9gie digitale est l\u2019ensemble des \xE9l\xE9ments n\xE9cessaires dans un temps donn\xE9 pour atteindre certains objectifs, compte tenu des contraintes de l\u2019entreprise (moyens financiers, humains, techniques, juridiques, etc.). La strat\xE9gie digitale fait partie de la strat\xE9gie g\xE9n\xE9rale de l\u2019entreprise. Elle en est compl\xE8tement d\xE9pendante! Le Web s\u2019invite \xE0 tous les niveaux : objectif, positionnement, Mix marketing, plan d\u2019action. C\u2019est donc un objectif, un moyen, un canal de communication, un plan d\u2019action sp\xE9cifique!</p></div></div></div></div>',2);function B(i,t,s,c,o,V){return d(),u("main",g,[_,e("section",b,[e("div",x,[y,e("div",N,[e("div",j,[e("div",w,[q,e("h4",null,n(o.countBoycotts),1)])]),e("div",E,[e("div",k,[C,e("h4",null,n(o.countUsers),1)])]),e("div",I,[e("div",L,[T,e("h4",null,n(o.countComments),1)])]),e("div",U,[e("div",A,[R,e("h4",null,n(o.countFollows),1)])])])])]),S])}const M=l(f,[["render",B]]);export{M as default};
