(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{11:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),i=(a(11),a(2)),l=a.n(i),s=a(5),u=a(1),m=function(e){return r.a.createElement("div",{className:"searchbar"},r.a.createElement("form",{onSubmit:e.handleSubmit},r.a.createElement("label",{htmlFor:"search"},"Search: "),r.a.createElement("input",{type:"text",onChange:e.changeSearch}),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Submit")))},h=function(){return r.a.createElement("header",{className:"hero"},r.a.createElement("h3",null,"Weather App"),r.a.createElement("p",null,"By Cory S."))},p=function(e){return r.a.createElement("div",{className:"weather-card"},r.a.createElement("h1",null,e.city),r.a.createElement("div",{className:"weather-info"},r.a.createElement("p",{className:"weather-description"},e.description," ",r.a.createElement("img",{alt:e.description,src:e.imageURL})),r.a.createElement("p",{className:"temp"},e.temp," \xb0",e.degrees.charAt(0))))};a(13);var d=function(){var e=Object(n.useState)("brooklyn"),t=Object(u.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)("Brooklyn"),i=Object(u.a)(o,2),d=i[0],b=i[1],f=Object(n.useState)(""),E=Object(u.a)(f,2),w=E[0],v=E[1],g=Object(n.useState)("Fahrenheit"),j=Object(u.a)(g,2),O=j[0],S=j[1];Object(n.useEffect)((function(){D()}),[O]);var y=Object(n.useState)(""),k=Object(u.a)(y,2),N=k[0],x=k[1],C=Object(n.useState)(""),F=Object(u.a)(C,2),A=F[0],B=F[1],L=Object(n.useState)(""),M=Object(u.a)(L,2),U=M[0],W=M[1],D=function(){var e=Object(s.a)(l.a.mark((function e(){var t,n,r;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(a,"&appid=e37f24ef6174dba03b645be482f88b30"));case 3:return t=e.sent,e.next=6,t.json();case 6:n=e.sent,r="Fahrenheit"===O?$(n.main.temp):I(n.main.temp),q(),x(r),R(n),B(n.weather[0].main),J(n),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.log("Data not found");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(){return e.apply(this,arguments)}}(),J=function(e){var t=e.weather[0].icon;"01d"!==t&&"01n"!==t&&"02d"!==t&&"02n"!==t||v("sunny"),"03d"!==t&&"03n"!==t&&"04d"!==t&&"04n"!==t||v("cloudy"),"09d"!==t&&"09n"!==t&&"10d"!==t&&"10n"!==t&&"11d"!==t&&"11n"!==t&&"50d"!==t&&"50n"!==t||v("rain"),"13d"!==t&&"13n"!==t||v("snow")},R=function(e){var t=e.weather[0].icon;console.log(t),W("http://openweathermap.org/img/wn/".concat(t,".png"))},q=function(){var e=a.toLowerCase(),t=e.charAt(0).toUpperCase();b(t+e.slice(1))},I=function(e){return Math.round(e-273.15)},$=function(e){return Math.round(9*e/5-459.67)};return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:w},r.a.createElement(h,null),r.a.createElement(m,{handleSubmit:function(e){e.preventDefault(),D()},changeSearch:function(e){c(e.target.value)}}),r.a.createElement(p,{city:d,temp:N,degrees:O,description:A,imageURL:U}),r.a.createElement("button",{onClick:function(){S("Fahrenheit"===O?"Celsius":"Fahrenheit")}},O)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,a){e.exports=a(14)}},[[6,1,2]]]);
//# sourceMappingURL=main.c984096b.chunk.js.map