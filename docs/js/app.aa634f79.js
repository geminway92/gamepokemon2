(function(e){function t(t){for(var o,a,i=t[0],s=t[1],u=t[2],l=0,p=[];l<i.length;l++)a=i[l],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);d&&d(t);while(p.length)p.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],o=!0,i=1;i<n.length;i++){var s=n[i];0!==r[s]&&(o=!1)}o&&(c.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={app:0},c=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var d=s;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1282:function(e,t,n){"use strict";n("a63f")},"1bcb":function(e,t,n){"use strict";n("7300")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("7a23");function r(e,t,n,r,c,a){var i=Object(o["n"])("PokemonPage");return Object(o["j"])(),Object(o["c"])(i)}Object(o["l"])("data-v-1224125d");var c={class:"gameboy"},a=Object(o["f"])("div",{class:"screen-black"},null,-1),i=Object(o["f"])("div",{class:"screen-cristal"},null,-1),s={key:0,class:"wait-message"},u={key:1,class:"img-container"},d=Object(o["f"])("h1",null,"¿Quién es este pokémon?",-1),l=Object(o["g"])('<div class="directionButtons" data-v-1224125d><div class="button-left" data-v-1224125d>◀ </div><div class="button-top" data-v-1224125d>▲</div><div class="button-right" data-v-1224125d>▶</div><div class="button-bottom" data-v-1224125d>▼</div><div class="button-center" data-v-1224125d>⬤</div></div><div class="buttonA" data-v-1224125d>A</div><div class="buttonB" data-v-1224125d>B</div>',3),p={key:0},m=Object(o["f"])("div",{class:"button-start"},null,-1),b=Object(o["f"])("div",{class:"button-select"},null,-1),f=Object(o["f"])("div",{class:"button-select-start"},[Object(o["f"])("p",null,"SELECT"),Object(o["f"])("p",null,"START")],-1);function v(e,t,n,r,v,k){var j=Object(o["n"])("PokemonPoint"),O=Object(o["n"])("PokemonPicture"),h=Object(o["n"])("PokemonOptions"),P=Object(o["n"])("PokemonAlert");return Object(o["j"])(),Object(o["e"])("div",c,[a,i,Object(o["h"])(j,{pokemonScore1:v.pokemonPoint1,pokemonScore2:v.pokemonPoint2},null,8,["pokemonScore1","pokemonScore2"]),v.pokemon?(Object(o["j"])(),Object(o["e"])("div",u,[d,Object(o["h"])(O,{pokemonId:v.pokemon.id,showPokemon:v.showPokemon},null,8,["pokemonId","showPokemon"]),l,Object(o["h"])(h,{pokemons:v.pokemonArr,onSelection:t[0]||(t[0]=function(e){return k.checkAnswer(e)})},null,8,["pokemons"]),v.showAnswer?(Object(o["j"])(),Object(o["e"])("div",p,[Object(o["h"])(P,{activeColor:v.activeColor,message:v.message,onNextPokemon:k.newGame},null,8,["activeColor","message","onNextPokemon"])])):Object(o["d"])("",!0),m,b,f])):(Object(o["j"])(),Object(o["e"])("h1",s,"Espere por favor..."))])}Object(o["k"])();var k=n("1da1");n("b0c0"),n("96cf");Object(o["l"])("data-v-25143057");var j={class:"options-container"},O=["onClick"];function h(e,t,n,r,c,a){return Object(o["j"])(),Object(o["e"])("div",j,[Object(o["f"])("ul",null,[(Object(o["j"])(!0),Object(o["e"])(o["a"],null,Object(o["m"])(n.pokemons,(function(t){return Object(o["j"])(),Object(o["e"])("li",{key:t.id,onClick:function(n){return e.$emit("selection",t.id)},class:"list-individual"},Object(o["o"])(t.name),9,O)})),128))])])}Object(o["k"])();var P={props:{pokemons:{type:Array,required:!0}}};n("be14");P.render=h,P.__scopeId="data-v-25143057";var g=P;Object(o["l"])("data-v-08179e95");var w={class:"pokemon-container"},y=["src"],A=["src"];function S(e,t,n,r,c,a){return Object(o["j"])(),Object(o["e"])("div",w,[n.showPokemon?(Object(o["j"])(),Object(o["e"])("img",{key:1,src:a.imgSrc,class:"fade-in",alt:"pokemon"},null,8,A)):(Object(o["j"])(),Object(o["e"])("img",{key:0,src:a.imgSrc,class:"hidden-pokemon",alt:"pokemon"},null,8,y))])}Object(o["k"])();n("a9e3");var x={props:{pokemonId:{type:Number,required:!0},showPokemon:{type:Boolean,required:!0,default:!1}},computed:{imgSrc:function(){return"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/".concat(this.pokemonId,".svg")}}};n("59a3");x.render=S,x.__scopeId="data-v-08179e95";var _=x;Object(o["l"])("data-v-27dafa3c");var C={class:"score-container"},I=Object(o["f"])("h1",null,"PUNTOS",-1),R={class:"scored"};function M(e,t,n,r,c,a){return Object(o["j"])(),Object(o["e"])("div",C,[I,Object(o["f"])("div",R,[Object(o["f"])("p",null,Object(o["o"])(n.pokemonScore1),1),Object(o["f"])("p",null,Object(o["o"])(n.pokemonScore2),1)])])}Object(o["k"])();var N={props:{pokemonScore1:{type:Number,default:0},pokemonScore2:{type:Number,default:0},pokemonScore3:{type:Number,default:0},showCounter3:{type:Boolean,default:!1}}};n("ce86");N.render=M,N.__scopeId="data-v-27dafa3c";var B=N;Object(o["l"])("data-v-e552f5c2");var T={class:"alert-container"};function q(e,t,n,r,c,a){return Object(o["j"])(),Object(o["e"])("div",T,[Object(o["f"])("h2",{style:Object(o["i"])({color:n.activeColor}),class:"fade-in"},Object(o["o"])(n.message),5),Object(o["f"])("button",{onClick:t[0]||(t[0]=function(t){return e.$emit("nextPokemon")})},"Siguiente")])}Object(o["k"])();var G={props:["message","activeColor"]};n("1bcb");G.render=q,G.__scopeId="data-v-e552f5c2";var E=G,L=n("3835"),$=(n("a630"),n("3ca3"),n("d81d"),n("4e82"),n("a434"),n("d3b7"),n("ddb0"),n("bc3a")),J=n.n($),Q=J.a.create({baseURL:"https://pokeapi.co/api/v2/pokemon"}),U=Q,z=function(){var e=Array.from(Array(650));return e.map((function(e,t){return t+1}))},D=function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=z().sort((function(){return Math.random()-.5})),e.next=3,F(t.splice(0,4));case 3:return n=e.sent,e.abrupt("return",n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),F=function(){var e=Object(k["a"])(regeneratorRuntime.mark((function e(){var t,n,o,r,c,a,i,s,u,d,l,p,m,b=arguments;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t=b.length>0&&void 0!==b[0]?b[0]:[],n=Object(L["a"])(t,4),o=n[0],r=n[1],c=n[2],a=n[3],i=[U.get("".concat(o)),U.get("".concat(r)),U.get("".concat(c)),U.get("".concat(a))],e.next=4,Promise.all(i);case 4:return s=e.sent,u=Object(L["a"])(s,4),d=u[0],l=u[1],p=u[2],m=u[3],e.abrupt("return",[{name:d.data.name,id:d.data.id},{name:l.data.name,id:l.data.id},{name:p.data.name,id:p.data.id},{name:m.data.name,id:m.data.id}]);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=D,K={components:{PokemonOptions:g,PokemonPicture:_,PokemonPoint:B,PokemonAlert:E},data:function(){return{pokemonArr:[],pokemon:null,showPokemon:!1,showAnswer:!1,message:"",pokemonPoint1:0,pokemonPoint2:0,activeColor:"",disabledOptions:!1}},methods:{mixPokemonArray:function(){var e=this;return Object(k["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,H();case 2:e.pokemonArr=t.sent,n=Math.floor(4*Math.random()),e.pokemon=e.pokemonArr[n],console.log(e.pokemon);case 6:case"end":return t.stop()}}),t)})))()},checkAnswer:function(e){!1===this.disabledOptions&&(this.showPokemon=!0,this.showAnswer=!0,e===this.pokemon.id?(this.activeColor="green",this.message="Correcto, era ".concat(this.pokemon.name),this.sumPoint(),this.disabledOptions=!0):(this.activeColor="red",this.message="Oops, era ".concat(this.pokemon.name),this.disabledOptions=!0))},newGame:function(){this.showPokemon=!1,this.showAnswer=!1,this.pokemonArr=[],this.pokemon=null,this.mixPokemonArray(),this.disabledOptions=!1},sumPoint:function(){!1===this.disabledOptions&&(this.record(),this.pokemonPoint2<9?this.pokemonPoint2++:(this.pokemonPoint1++,this.pokemonPoint2=0))},record:function(){9===this.pokemonPoint1&&9===this.pokemonPoint2&&(this.pokemonPoint1=0,prompt("Que máquina eres Bro!!","Lo sé"),this.pokemonPoint2=-1)}},mounted:function(){this.mixPokemonArray(),this.$emit("newGame",this.newGame)}};n("ec7a");K.render=v,K.__scopeId="data-v-1224125d";var V=K,W={name:"App",components:{PokemonPage:V}};n("1282");W.render=r;var X=W;n("90c2"),n("6924");Object(o["b"])(X).mount("#app")},"59a3":function(e,t,n){"use strict";n("b48c")},6924:function(e,t,n){},7300:function(e,t,n){},"90c2":function(e,t,n){},"9ac5":function(e,t,n){},a63f:function(e,t,n){},ae04:function(e,t,n){},b48c:function(e,t,n){},be14:function(e,t,n){"use strict";n("ae04")},ce86:function(e,t,n){"use strict";n("f979")},ec7a:function(e,t,n){"use strict";n("9ac5")},f979:function(e,t,n){}});
//# sourceMappingURL=app.aa634f79.js.map