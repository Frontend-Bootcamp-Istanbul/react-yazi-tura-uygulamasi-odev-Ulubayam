(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(t,e,a){t.exports=a.p+"static/media/1-lira-tura.7c42669a.png"},function(t,e,a){t.exports=a.p+"static/media/1-lira-yazi.9b70882e.png"},,,function(t,e,a){t.exports=a(19)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),i=a.n(n),o=a(2),r=a.n(o),s=(a(15),a(16),a(3)),c=a(4),l=a(8),u=a(5),m=a(9),d=(a(17),a(6)),p=a.n(d),h=a(7),f=a.n(h),E=function(t){return i.a.createElement("div",{className:"Coin-container"},i.a.createElement("div",{className:"Coin ".concat(t.donuyor?"Coin-rotate":"")},i.a.createElement("img",{src:p.a,className:"yazi"===t.side?"Coin-back":"Coin-front"}),i.a.createElement("img",{src:f.a,className:"yazi"===t.side?"Coin-front":"Coin-back"})))},y=(a(18),function(t){function e(t){var a;return Object(s.a)(this,e),(a=Object(l.a)(this,Object(u.a)(e).call(this,t))).handleClick=function(){setTimeout(function(){return a.setState({donuyor:!1})},1e3);var t=Math.random()<.5?"tura":"yazi";a.setState({donuyor:!0,side:t},function(){"yazi"===a.state.side?a.setState({atisYazi:a.state.atisYazi+1}):a.setState({atisTura:a.state.atisTura+1})}),a.setState({toplam:a.state.toplam+1})},a.finish=function(){a.setState({atisTura:0,atisYazi:0,toplam:0})},a.state={side:"tura",donuyor:!1,toplam:0,atisYazi:0,atisTura:0},a}return Object(m.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"CoinFlipper"},i.a.createElement("h1",null,"Yaz\u0131 m\u0131 Tura m\u0131?"),i.a.createElement(E,{side:this.state.side,donuyor:this.state.donuyor}),i.a.createElement("button",{onClick:this.handleClick},"At!"),i.a.createElement("button",{onClick:this.finish,style:{margin:"10px"}},"Bitir!"),i.a.createElement("p",null,"Toplam",i.a.createElement("strong",null," ",this.state.toplam," "),"at\u0131\u015ftan",i.a.createElement("strong",null," ",this.state.atisTura," "),"\xfc tura",i.a.createElement("strong",null," ",this.state.atisYazi," "),"si yaz\u0131 geldi."))}}]),e}(n.Component));var g=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[10,1,2]]]);
//# sourceMappingURL=main.7144ec3b.chunk.js.map