(this.webpackJsonppizza=this.webpackJsonppizza||[]).push([[0],{83:function(e,a,t){e.exports=t(94)},88:function(e,a,t){},94:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(8),c=t.n(i),l=(t(88),t(14)),o=t(15);function u(){var e=Object(l.a)(["\n  body {\n    margin: 0;\n    background: #eee;\n  }\n"]);return u=function(){return e},e}var m=Object(o.a)(u()),s=t(134),p=t(137),d=t(136),g=t(47),z=t(135),E=t(65),v=t.n(E),f=t(66),b=t.n(f),h=t(147),y=t(133);function x(e){return e.toLocaleString("en-US",{style:"currency",currency:"USD"})}function O(e){return(a=e,.88*a).toLocaleString("de-DE",{style:"currency",currency:"EUR"});var a}var j=[{value:"USD",label:"$"},{value:"EUR",label:"\u20ac"}],S=[{title:"pizza1",priceUSD:9.5,shortDescription:"amazing pizza",description:"amazing pizza",image:"/images/pizza.png"},{title:"pizza2",priceUSD:7,shortDescription:"amazing pizza",description:"amazing pizza",image:"/images/pizza2.jpeg"},{title:"pizza2",priceUSD:5.5,shortDescription:"amazing pizza",description:"amazing pizza",image:"/images/pizza2.jpeg"},{title:"pizza2",priceUSD:8,shortDescription:"amazing pizza",description:"amazing pizza",image:"/images/pizza2.jpeg"},{title:"pizza2",priceUSD:6.5,shortDescription:"amazing pizza",description:"amazing pizza",image:"/images/pizza2.jpeg"},{title:"pizza2",priceUSD:7,shortDescription:"amazing pizza",description:"amazing pizza",image:"/images/pizza2.jpeg"},{title:"pizza2",priceUSD:6.5,shortDescription:"amazing pizza",description:"amazing pizza",image:"/images/pizza2.jpeg"},{title:"pizza2",priceUSD:6,shortDescription:"amazing pizza",description:"amazing pizza",image:"/images/pizza2.jpeg"}];function D(e){var a=e.currency,t=e.setCurrency;return r.a.createElement(h.a,{id:"standard-select-currency",select:!0,value:a,onChange:function(e){t(e.target.value)},helperText:"Please select your currency"},j.map((function(e){return r.a.createElement(y.a,{key:e.value,value:e.value},e.label)})))}function C(){var e=Object(l.a)(["\n  border-left: 1px solid grey;\n  padding-left: 25px;\n"]);return C=function(){return e},e}function U(){var e=Object(l.a)(["\n  border-right: 1px solid grey;\n  padding-right: 25px;\n"]);return U=function(){return e},e}function k(){var e=Object(l.a)(["\n  position: fixed;\n  right: 0px;\n  left:0px;\n  background: white;\n  padding: 15px 25px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  box-shadow: 0px 15px 10px -15px #111;    \n"]);return k=function(){return e},e}var w=o.b.div(k()),N=o.b.div(U()),q=o.b.div(C());function G(e){var a=e.setOpenCart,t=e.orders,n=e.currency,i=0;0!==t.length&&t.forEach((function(e){i+=e.quantity}));return r.a.createElement(w,null,r.a.createElement(N,null,r.a.createElement(s.a,{container:!0,spacing:2},r.a.createElement(s.a,{item:!0},r.a.createElement(z.a,{color:"primary"},r.a.createElement(v.a,{fontSize:"large"}))),r.a.createElement(s.a,{item:!0},r.a.createElement(g.a,{variant:"h4"},"Pizza"),r.a.createElement(g.a,{variant:"overline"},"Delivery")))),r.a.createElement(D,n),r.a.createElement(q,null,r.a.createElement(d.a,{color:"primary","aria-label":"add to shopping cart",onClick:function(){a({menuGrid:10,cartGrid:2,cartOpen:!0})}},r.a.createElement(p.a,{badgeContent:i,color:"secondary"},r.a.createElement(b.a,null)))))}var L=t(45),W=t(49),F=t(12),P=t(138),T=t(3),V=t(139),B=t(140),J=t(141),M=t(142),R=t(143),Y=t(144),$=t(69),A=t.n($),I=t(70),H=t.n(I),K=t(148),Q=t(132),X=t(68),Z=t.n(X),_=t(67),ee=t.n(_);function ae(){var e=Object(l.a)(["\n  background: #eee;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  height: 40px;\n  margin: 9.5px;\n"]);return ae=function(){return e},e}var te=o.b.div(ae()),ne=Object(P.a)((function(){return{input:{width:"24px",height:"40px",marginLeft:"10px",textAlign:"center"},controls:{"&:hover":{background:"transparent"},"&:disabled":{opacity:.3}}}}));function re(e){var a=e.quantity,t=e.onClick,n=ne();return r.a.createElement(te,null,r.a.createElement(d.a,{className:n.controls,onClick:function(){a.setValue(a.value-1),t(a.value-1)},disabled:1===a.value},r.a.createElement(ee.a,{color:"primary"})),r.a.createElement(Q.a,{variant:"filled",className:n.root},r.a.createElement(K.a,{className:n.input,value:a.value,onChange:a.onChange})),r.a.createElement(d.a,{className:n.controls,onClick:function(){a.setValue(a.value+1),t(a.value+1)}},r.a.createElement(Z.a,{color:"primary"})))}var ie=Object(P.a)((function(e){return{root:{minWidth:"300px"},media:{height:0,paddingTop:"56.25%"},expand:{transform:"rotate(0deg)",marginLeft:"auto",transition:e.transitions.create("transform",{duration:e.transitions.duration.shortest})},expandOpen:{transform:"rotate(180deg)"}}}));function ce(e){var a=e.index,t=e.parameters,i=e.setOrders,c=e.orders,l=e.currency,o=t.title,u=t.priceUSD,m=t.shortDescription,s=t.description,p=t.image,z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=Object(n.useState)(e),t=Object(F.a)(a,2),r=t[0],i=t[1];function c(e){+e.target.value>=1?i(+e.target.value):i(1)}return{value:r,setValue:i,onChange:c}}(),E=function(){var e=Object(n.useState)(!1),a=Object(F.a)(e,2);return{cardExpand:a[0],setCardExpand:a[1]}}(),v=E.cardExpand,f=E.setCardExpand,b={id:a,title:o,priceUSD:u,quantity:z.value},h=ie(),y=r.a.useState(!1),j=Object(F.a)(y,2),S=j[0],D=j[1];return r.a.createElement(V.a,{className:h.root},r.a.createElement(B.a,{title:o}),r.a.createElement(J.a,{className:h.media,image:p,title:o}),r.a.createElement(M.a,null,r.a.createElement(g.a,{variant:"body2",color:"textSecondary",component:"p"},m)),r.a.createElement(R.a,{disableSpacing:!0},S?r.a.createElement(re,{quantity:z,onClick:function(e){c.forEach((function(t){t.id===a&&(t.quantity=e)})),i(Object(W.a)(c))}}):r.a.createElement(d.a,{"aria-label":"add to cart",onClick:function(){i([].concat(Object(W.a)(c),[b])),D(!0)}},r.a.createElement(A.a,{fontSize:"large",color:"primary"})),r.a.createElement(g.a,null,"USD"===l?x(u):O(u)),r.a.createElement(d.a,{className:Object(T.a)(h.expand,Object(L.a)({},h.expandOpen,v)),onClick:function(){f(!v)},"aria-expanded":v,"aria-label":"show more"},r.a.createElement(H.a,null))),r.a.createElement(Y.a,{in:v,timeout:"auto",unmountOnExit:!0},r.a.createElement(M.a,null,r.a.createElement(g.a,{paragraph:!0},s))))}function le(){var e=Object(l.a)(["\n  padding: 120px 60px;\n"]);return le=function(){return e},e}var oe=o.b.div(le());function ue(e){var a=e.orders,t=e.currency;return r.a.createElement(oe,null,r.a.createElement(g.a,{variant:"h2",component:"h1"},"Menu"),r.a.createElement(s.a,{container:!0,spacing:2},S.map((function(e,n){return r.a.createElement(s.a,{item:!0,key:n},r.a.createElement(ce,Object.assign({index:n,parameters:e},a,t)))}))))}var me=t(146),se=t(145),pe=t(96),de=t(71),ge=t.n(de),ze=Object(P.a)({root:{padding:"20px",position:"fixed",width:"320px",top:"102px",bottom:"0px",right:"0px",display:"none",flexDirection:"column"},button:{maxWidth:"300px"},content:{height:"100%",display:"flex",flexDirection:"column",overflow:"auto"},open:{display:"flex"},list:{display:"flex",justifyContent:"space-between"},subtotal:{background:"#eee"}});function Ee(e){return e.priceUSD*e.quantity}function ve(e){var a=e.openCart,t=e.setOpenCart,n=e.orders,i=e.currency,c=n.reduce((function(e,a){return e+Ee(a)}),0),l=c+5,o=a.cartOpen,u=ze();return r.a.createElement(V.a,{className:Object(T.a)(u.root,Object(L.a)({},u.open,o))},r.a.createElement(B.a,{title:"Your order",action:r.a.createElement(d.a,{"aria-label":"close",onClick:function(){t({cartOpen:!1})}},r.a.createElement(ge.a,null))}),0===n.length?r.a.createElement(M.a,{className:u.content},r.a.createElement(g.a,{variant:"overline"},"Your cart is empty")):r.a.createElement(r.a.Fragment,null,r.a.createElement(M.a,{className:u.content},n.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(pe.a,{className:u.list},r.a.createElement(g.a,{variant:"overline"},e.quantity),r.a.createElement(g.a,{variant:"overline"},e.title),r.a.createElement(g.a,{variant:"overline"},"USD"===i?x(Ee(e)):O(Ee(e)))),r.a.createElement(se.a,null))})),r.a.createElement(pe.a,{className:Object(T.a)(u.list,u.subtotal)},r.a.createElement(g.a,{variant:"overline"},"Subtotal:"),r.a.createElement(g.a,{variant:"overline"},"USD"===i?x(c):O(c))),r.a.createElement(pe.a,{className:Object(T.a)(u.list,u.subtotal)},r.a.createElement(g.a,{variant:"overline"},"Delivery:"),r.a.createElement(g.a,{variant:"overline"},"USD"===i?x(5):O(5))),r.a.createElement(pe.a,{className:u.list},r.a.createElement(g.a,{variant:"h5"},"Total:"),r.a.createElement(g.a,{variant:"h5"},"USD"===i?x(l):O(l)))),r.a.createElement(me.a,{variant:"contained",color:"primary",className:u.button},"Proceed to checkout")))}var fe=function(){var e=function(){var e=Object(n.useState)("USD"),a=Object(F.a)(e,2);return{currency:a[0],setCurrency:a[1]}}(),a=function(){var e=Object(n.useState)({menuGrid:12,cartGrid:!1,cartOpen:!1}),a=Object(F.a)(e,2);return{openCart:a[0],setOpenCart:a[1]}}(),t=a.openCart,i=t.menuGrid,c=t.cartGrid,l=function(){var e=Object(n.useState)([]),a=Object(F.a)(e,2);return{orders:a[0],setOrders:a[1]}}();return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,null),r.a.createElement(G,Object.assign({},a,l,{currency:e})),r.a.createElement(s.a,{container:!0},r.a.createElement(s.a,{item:!0,xs:i},r.a.createElement(ue,{orders:l,currency:e})),r.a.createElement(s.a,{item:!0,xs:c},r.a.createElement(ve,Object.assign({},a,l,e)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[83,1,2]]]);
//# sourceMappingURL=main.686b1631.chunk.js.map