import{i as l,r as c}from"./chunk-4A6CZG53.js";import{I as n,S as a,X as g,aa as r,n as s}from"./chunk-MRLDANVD.js";var d=(()=>{let t=class t{constructor(e,o){this.http=e,this.router=o,this.isUserLoggedIn=!1,this.url="https://api.1exch.net/login"}login(e){return this.isUserLoggedIn=e.code=="Patanahi@123"&&e.password=="Patanahi@123",localStorage.setItem("isUserLoggedIn",this.isUserLoggedIn?"true":"false"),s(this.isUserLoggedIn).pipe(n(1e3),a(o=>{console.log("Is User Authentication is successful: "+o)}))}getToken(){return typeof localStorage<"u"?localStorage.getItem("isUserLoggedIn"):null}logOut(){this.isUserLoggedIn=!1,this.router.navigate(["/login"]),localStorage.removeItem("isUserLoggedIn")}};t.\u0275fac=function(o){return new(o||t)(r(l),r(c))},t.\u0275prov=g({token:t,factory:t.\u0275fac,providedIn:"root"});let i=t;return i})();export{d as a};
