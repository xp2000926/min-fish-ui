import{j as u}from"./jsx-runtime-QvZ8i92b.js";import{r as k}from"./index-uubelm5h.js";import{m as q,w as W,c as G,t as O,a as U,b as Y}from"./FishProvider-fbpEsjVz.js";function l(n,t){J(n)&&(n="100%");const e=K(n);return n=t===360?n:Math.min(t,Math.max(0,parseFloat(n))),e&&(n=parseInt(String(n*t),10)/100),Math.abs(n-t)<1e-6?1:(t===360?n=(n<0?n%t+t:n%t)/parseFloat(String(t)):n=n%t/parseFloat(String(t)),n)}function v(n){return Math.min(1,Math.max(0,n))}function J(n){return typeof n=="string"&&n.indexOf(".")!==-1&&parseFloat(n)===1}function K(n){return typeof n=="string"&&n.indexOf("%")!==-1}function P(n){return n=parseFloat(n),(isNaN(n)||n<0||n>1)&&(n=1),n}function M(n){return Number(n)<=1?`${Number(n)*100}%`:n}function x(n){return n.length===1?"0"+n:String(n)}function Q(n,t,e){return{r:l(n,255)*255,g:l(t,255)*255,b:l(e,255)*255}}function I(n,t,e){n=l(n,255),t=l(t,255),e=l(e,255);const r=Math.max(n,t,e),s=Math.min(n,t,e);let a=0,i=0;const o=(r+s)/2;if(r===s)i=0,a=0;else{const h=r-s;switch(i=o>.5?h/(2-r-s):h/(r+s),r){case n:a=(t-e)/h+(t<e?6:0);break;case t:a=(e-n)/h+2;break;case e:a=(n-t)/h+4;break}a/=6}return{h:a,s:i,l:o}}function C(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*(6*e):e<1/2?t:e<2/3?n+(t-n)*(2/3-e)*6:n}function z(n,t,e){let r,s,a;if(n=l(n,360),t=l(t,100),e=l(e,100),t===0)s=e,a=e,r=e;else{const i=e<.5?e*(1+t):e+t-e*t,o=2*e-i;r=C(o,i,n+1/3),s=C(o,i,n),a=C(o,i,n-1/3)}return{r:r*255,g:s*255,b:a*255}}function L(n,t,e){n=l(n,255),t=l(t,255),e=l(e,255);const r=Math.max(n,t,e),s=Math.min(n,t,e);let a=0;const i=r,o=r-s,h=r===0?0:o/r;if(r===s)a=0;else{switch(r){case n:a=(t-e)/o+(t<e?6:0);break;case t:a=(e-n)/o+2;break;case e:a=(n-t)/o+4;break}a/=6}return{h:a,s:h,v:i}}function Z(n,t,e){n=l(n,360)*6,t=l(t,100),e=l(e,100);const r=Math.floor(n),s=n-r,a=e*(1-t),i=e*(1-s*t),o=e*(1-(1-s)*t),h=r%6,b=[e,i,a,a,o,e][h],d=[o,e,e,i,a,a][h],R=[a,a,o,e,e,i][h];return{r:b*255,g:d*255,b:R*255}}function D(n,t,e,r){const s=[x(Math.round(n).toString(16)),x(Math.round(t).toString(16)),x(Math.round(e).toString(16))];return r&&s[0].startsWith(s[0].charAt(1))&&s[1].startsWith(s[1].charAt(1))&&s[2].startsWith(s[2].charAt(1))?s[0].charAt(0)+s[1].charAt(0)+s[2].charAt(0):s.join("")}function X(n,t,e,r,s){const a=[x(Math.round(n).toString(16)),x(Math.round(t).toString(16)),x(Math.round(e).toString(16)),x(ee(r))];return s&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}function _(n,t,e,r){const s=n/100,a=t/100,i=e/100,o=r/100,h=255*(1-s)*(1-o),b=255*(1-a)*(1-o),d=255*(1-i)*(1-o);return{r:h,g:b,b:d}}function j(n,t,e){let r=1-n/255,s=1-t/255,a=1-e/255,i=Math.min(r,s,a);return i===1?(r=0,s=0,a=0):(r=(r-i)/(1-i)*100,s=(s-i)/(1-i)*100,a=(a-i)/(1-i)*100),i*=100,{c:Math.round(r),m:Math.round(s),y:Math.round(a),k:Math.round(i)}}function ee(n){return Math.round(parseFloat(n)*255).toString(16)}function F(n){return g(n)/255}function g(n){return parseInt(n,16)}function te(n){return{r:n>>16,g:(n&65280)>>8,b:n&255}}const $={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};function ne(n){let t={r:0,g:0,b:0},e=1,r=null,s=null,a=null,i=!1,o=!1;return typeof n=="string"&&(n=ae(n)),typeof n=="object"&&(f(n.r)&&f(n.g)&&f(n.b)?(t=Q(n.r,n.g,n.b),i=!0,o=String(n.r).substr(-1)==="%"?"prgb":"rgb"):f(n.h)&&f(n.s)&&f(n.v)?(r=M(n.s),s=M(n.v),t=Z(n.h,r,s),i=!0,o="hsv"):f(n.h)&&f(n.s)&&f(n.l)?(r=M(n.s),a=M(n.l),t=z(n.h,r,a),i=!0,o="hsl"):f(n.c)&&f(n.m)&&f(n.y)&&f(n.k)&&(t=_(n.c,n.m,n.y,n.k),i=!0,o="cmyk"),Object.prototype.hasOwnProperty.call(n,"a")&&(e=n.a)),e=P(e),{ok:i,format:n.format||o,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:e}}const re="[-\\+]?\\d+%?",se="[-\\+]?\\d*\\.\\d+%?",y="(?:"+se+")|(?:"+re+")",H="[\\s|\\(]+("+y+")[,|\\s]+("+y+")[,|\\s]+("+y+")\\s*\\)?",A="[\\s|\\(]+("+y+")[,|\\s]+("+y+")[,|\\s]+("+y+")[,|\\s]+("+y+")\\s*\\)?",m={CSS_UNIT:new RegExp(y),rgb:new RegExp("rgb"+H),rgba:new RegExp("rgba"+A),hsl:new RegExp("hsl"+H),hsla:new RegExp("hsla"+A),hsv:new RegExp("hsv"+H),hsva:new RegExp("hsva"+A),cmyk:new RegExp("cmyk"+A),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function ae(n){if(n=n.trim().toLowerCase(),n.length===0)return!1;let t=!1;if($[n])n=$[n],t=!0;else if(n==="transparent")return{r:0,g:0,b:0,a:0,format:"name"};let e=m.rgb.exec(n);return e?{r:e[1],g:e[2],b:e[3]}:(e=m.rgba.exec(n),e?{r:e[1],g:e[2],b:e[3],a:e[4]}:(e=m.hsl.exec(n),e?{h:e[1],s:e[2],l:e[3]}:(e=m.hsla.exec(n),e?{h:e[1],s:e[2],l:e[3],a:e[4]}:(e=m.hsv.exec(n),e?{h:e[1],s:e[2],v:e[3]}:(e=m.hsva.exec(n),e?{h:e[1],s:e[2],v:e[3],a:e[4]}:(e=m.cmyk.exec(n),e?{c:e[1],m:e[2],y:e[3],k:e[4]}:(e=m.hex8.exec(n),e?{r:g(e[1]),g:g(e[2]),b:g(e[3]),a:F(e[4]),format:t?"name":"hex8"}:(e=m.hex6.exec(n),e?{r:g(e[1]),g:g(e[2]),b:g(e[3]),format:t?"name":"hex"}:(e=m.hex4.exec(n),e?{r:g(e[1]+e[1]),g:g(e[2]+e[2]),b:g(e[3]+e[3]),a:F(e[4]+e[4]),format:t?"name":"hex8"}:(e=m.hex3.exec(n),e?{r:g(e[1]+e[1]),g:g(e[2]+e[2]),b:g(e[3]+e[3]),format:t?"name":"hex"}:!1))))))))))}function f(n){return typeof n=="number"?!Number.isNaN(n):m.CSS_UNIT.test(n)}class c{constructor(t="",e={}){if(t instanceof c)return t;typeof t=="number"&&(t=te(t)),this.originalInput=t;const r=ne(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=e.format??r.format,this.gradientType=e.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){const t=this.toRgb();return(t.r*299+t.g*587+t.b*114)/1e3}getLuminance(){const t=this.toRgb();let e,r,s;const a=t.r/255,i=t.g/255,o=t.b/255;return a<=.03928?e=a/12.92:e=Math.pow((a+.055)/1.055,2.4),i<=.03928?r=i/12.92:r=Math.pow((i+.055)/1.055,2.4),o<=.03928?s=o/12.92:s=Math.pow((o+.055)/1.055,2.4),.2126*e+.7152*r+.0722*s}getAlpha(){return this.a}setAlpha(t){return this.a=P(t),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){const{s:t}=this.toHsl();return t===0}toHsv(){const t=L(this.r,this.g,this.b);return{h:t.h*360,s:t.s,v:t.v,a:this.a}}toHsvString(){const t=L(this.r,this.g,this.b),e=Math.round(t.h*360),r=Math.round(t.s*100),s=Math.round(t.v*100);return this.a===1?`hsv(${e}, ${r}%, ${s}%)`:`hsva(${e}, ${r}%, ${s}%, ${this.roundA})`}toHsl(){const t=I(this.r,this.g,this.b);return{h:t.h*360,s:t.s,l:t.l,a:this.a}}toHslString(){const t=I(this.r,this.g,this.b),e=Math.round(t.h*360),r=Math.round(t.s*100),s=Math.round(t.l*100);return this.a===1?`hsl(${e}, ${r}%, ${s}%)`:`hsla(${e}, ${r}%, ${s}%, ${this.roundA})`}toHex(t=!1){return D(this.r,this.g,this.b,t)}toHexString(t=!1){return"#"+this.toHex(t)}toHex8(t=!1){return X(this.r,this.g,this.b,this.a,t)}toHex8String(t=!1){return"#"+this.toHex8(t)}toHexShortString(t=!1){return this.a===1?this.toHexString(t):this.toHex8String(t)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){const t=Math.round(this.r),e=Math.round(this.g),r=Math.round(this.b);return this.a===1?`rgb(${t}, ${e}, ${r})`:`rgba(${t}, ${e}, ${r}, ${this.roundA})`}toPercentageRgb(){const t=e=>`${Math.round(l(e,255)*100)}%`;return{r:t(this.r),g:t(this.g),b:t(this.b),a:this.a}}toPercentageRgbString(){const t=e=>Math.round(l(e,255)*100);return this.a===1?`rgb(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%)`:`rgba(${t(this.r)}%, ${t(this.g)}%, ${t(this.b)}%, ${this.roundA})`}toCmyk(){return{...j(this.r,this.g,this.b)}}toCmykString(){const{c:t,m:e,y:r,k:s}=j(this.r,this.g,this.b);return`cmyk(${t}, ${e}, ${r}, ${s})`}toName(){if(this.a===0)return"transparent";if(this.a<1)return!1;const t="#"+D(this.r,this.g,this.b,!1);for(const[e,r]of Object.entries($))if(t===r)return e;return!1}toString(t){const e=!!t;t=t??this.format;let r=!1;const s=this.a<1&&this.a>=0;return!e&&s&&(t.startsWith("hex")||t==="name")?t==="name"&&this.a===0?this.toName():this.toRgbString():(t==="rgb"&&(r=this.toRgbString()),t==="prgb"&&(r=this.toPercentageRgbString()),(t==="hex"||t==="hex6")&&(r=this.toHexString()),t==="hex3"&&(r=this.toHexString(!0)),t==="hex4"&&(r=this.toHex8String(!0)),t==="hex8"&&(r=this.toHex8String()),t==="name"&&(r=this.toName()),t==="hsl"&&(r=this.toHslString()),t==="hsv"&&(r=this.toHsvString()),t==="cmyk"&&(r=this.toCmykString()),r||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new c(this.toString())}lighten(t=10){const e=this.toHsl();return e.l+=t/100,e.l=v(e.l),new c(e)}brighten(t=10){const e=this.toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(255*-(t/100)))),e.g=Math.max(0,Math.min(255,e.g-Math.round(255*-(t/100)))),e.b=Math.max(0,Math.min(255,e.b-Math.round(255*-(t/100)))),new c(e)}darken(t=10){const e=this.toHsl();return e.l-=t/100,e.l=v(e.l),new c(e)}tint(t=10){return this.mix("white",t)}shade(t=10){return this.mix("black",t)}desaturate(t=10){const e=this.toHsl();return e.s-=t/100,e.s=v(e.s),new c(e)}saturate(t=10){const e=this.toHsl();return e.s+=t/100,e.s=v(e.s),new c(e)}greyscale(){return this.desaturate(100)}spin(t){const e=this.toHsl(),r=(e.h+t)%360;return e.h=r<0?360+r:r,new c(e)}mix(t,e=50){const r=this.toRgb(),s=new c(t).toRgb(),a=e/100,i={r:(s.r-r.r)*a+r.r,g:(s.g-r.g)*a+r.g,b:(s.b-r.b)*a+r.b,a:(s.a-r.a)*a+r.a};return new c(i)}analogous(t=6,e=30){const r=this.toHsl(),s=360/e,a=[this];for(r.h=(r.h-(s*t>>1)+720)%360;--t;)r.h=(r.h+s)%360,a.push(new c(r));return a}complement(){const t=this.toHsl();return t.h=(t.h+180)%360,new c(t)}monochromatic(t=6){const e=this.toHsv(),{h:r}=e,{s}=e;let{v:a}=e;const i=[],o=1/t;for(;t--;)i.push(new c({h:r,s,v:a})),a=(a+o)%1;return i}splitcomplement(){const t=this.toHsl(),{h:e}=t;return[this,new c({h:(e+72)%360,s:t.s,l:t.l}),new c({h:(e+216)%360,s:t.s,l:t.l})]}onBackground(t){const e=this.toRgb(),r=new c(t).toRgb(),s=e.a+r.a*(1-e.a);return new c({r:(e.r*e.a+r.r*r.a*(1-e.a))/s,g:(e.g*e.a+r.g*r.a*(1-e.a))/s,b:(e.b*e.a+r.b*r.a*(1-e.a))/s,a:s})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){const e=this.toHsl(),{h:r}=e,s=[this],a=360/t;for(let i=1;i<t;i++)s.push(new c({h:(r+i*a)%360,s:e.s,l:e.l}));return s}equals(t){const e=new c(t);return this.format==="cmyk"||e.format==="cmyk"?this.toCmykString()===e.toCmykString():this.toRgbString()===e.toRgbString()}}const ie={backgroundImage:"url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAJUlEQVQYV2N89erVfwY0ICYmxoguxjgUFKI7GsTH5m4M3w1ChQC1/Ca8i2n1WgAAAABJRU5ErkJggg==)"},S=n=>{var a,i;const t=k.useRef(),e=k.useRef(),[r,s]=k.useState();return e.current=(i=(a=n.value)==null?void 0:a.match(/^var\((.+)\)$/))==null?void 0:i[1],k.useEffect(()=>{const o=window.getComputedStyle(t.current),h=o.getPropertyValue("background-color"),b=new c(h),d=b.isDark(),R=b.getAlpha()<.5;if(t.current.style.color=R?"#000":d?"#fff":"#000",e.current){const T=o.getPropertyValue(e.current);T&&s(T)}}),u.jsx("div",{style:ie,children:u.jsxs("div",{ref:t,style:{display:"flex",justifyContent:"space-between",padding:"1.5vh",background:n.value,width:"150px",boxSizing:"border-box",alignItems:"center",height:"100%"},children:[n.name&&u.jsx("span",{children:n.name}),n.value&&u.jsx("span",{children:e.current??n.value}),r&&u.jsx("span",{children:r})]})})};S.__docgenInfo={description:"",methods:[],displayName:"ColorRampItem",props:{name:{required:!1,tsType:{name:"string"},description:"Name of the color"},value:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"A CSS color value"}}};const p={webLight:W,webDark:G,teamsLight:O,teamsDark:U,teamsHighContrast:Y},he=q({searchContainer:{display:"flex",alignItems:"center"},inputSearch:{width:"100%"}}),N=Object.keys(p.webLight).filter(n=>n.match(/^color(?!Palette).*/)||n.startsWith("colorPalette")),w=()=>{const[n,t]=k.useState(N),[e,r]=k.useState(""),s=he(),a=k.useCallback(h=>{const b=N.filter(d=>d.toLowerCase().includes(h)||p.webLight[d].toString().includes(h)||p.webDark[d].toString().includes(h)||p.teamsLight[d].toString().includes(h)||p.teamsDark[d].toString().includes(h)||p.teamsHighContrast[d].toString().includes(h));t(b)},[t]),i=oe(a,220),o=k.useCallback(h=>{const b=h.target.value;i(b.trim().toLocaleLowerCase()),r(b.trim().toLocaleLowerCase())},[i]);return u.jsxs(u.Fragment,{children:[u.jsx("div",{className:s.searchContainer,children:u.jsx("input",{placeholder:"Search for tokens by name or color",onChange:o,value:e,className:s.inputSearch})}),u.jsxs("div",{style:{display:"inline-grid",gridTemplateColumns:"24em repeat(5, auto)",columnGap:"1em",alignItems:"stretch"},children:[u.jsx("h3",{style:{padding:"1em",margin:0},children:"Design Token"},"hrToken"),u.jsx("h3",{style:{padding:"1em",margin:0},children:"Light"},"hrLight"),u.jsx("h3",{style:{padding:"1em",margin:0},children:"Dark"},"hrDark"),u.jsx("h3",{style:{padding:"1em",margin:0},children:"Teams Light"},"hrTeamsLight"),u.jsx("h3",{style:{padding:"1em",margin:0},children:"Teams Dark"},"hrTeamsDark"),u.jsx("h3",{style:{padding:"1em",margin:0},children:"Teams High Contrast"},"hrHC"),n==null?void 0:n.map(h=>[u.jsx("div",{style:{padding:"0 1em",fontWeight:"bold",display:"flex",alignItems:"center"},children:h},`${h}Token`),u.jsx(S,{value:p.webLight[h]},`${h}Light`),u.jsx(S,{value:p.webDark[h]},`${h}Dark`),u.jsx(S,{value:p.teamsLight[h]},`${h}TeamsLight`),u.jsx(S,{value:p.teamsDark[h]},`${h}TeamsDark`),u.jsx(S,{value:p.teamsHighContrast[h]},`${h}HC`)])]})]})},oe=(n,t)=>{const e=k.useRef(0);return k.useCallback((...r)=>{clearTimeout(e.current),e.current=window.setTimeout(()=>{n(...r)},t)},[t,n])},fe={title:"主题/Colors",parameters:{docs:{canvas:{sourceState:"none",withToolbar:!1}}}};w.__docgenInfo={description:"",methods:[],displayName:"Colors"};var E,V,B;w.parameters={...w.parameters,docs:{...(E=w.parameters)==null?void 0:E.docs,source:{originalSource:`() => {
  const [tokensSearchResult, setTokensSearchResult] = React.useState<Array<keyof Theme> | undefined>(tokens);

  // Text typed in the input bar
  const [inputValue, setInputValue] = React.useState("");
  const styles = useStyles();

  // It returns tokens matching the input value.
  const searchToken = React.useCallback((newSearchValue: string) => {
    const tokensFoundBySearch = tokens.filter(token => token.toLowerCase().includes(newSearchValue) || theme.webLight[token].toString().includes(newSearchValue) || theme.webDark[token].toString().includes(newSearchValue) || theme.teamsLight[token].toString().includes(newSearchValue) || theme.teamsDark[token].toString().includes(newSearchValue) || theme.teamsHighContrast[token].toString().includes(newSearchValue));
    setTokensSearchResult(tokensFoundBySearch);
  }, [setTokensSearchResult]);
  const updateSearchDebounced = useDebounce((searchToken as (...args: unknown[]) => void), 220);
  const onInputChange = React.useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    updateSearchDebounced(value.trim().toLocaleLowerCase());
    setInputValue(value.trim().toLocaleLowerCase());
  }, [updateSearchDebounced]);
  return <>\r
      <div className={styles.searchContainer}>\r
        <input placeholder={"Search for tokens by name or color"} onChange={onInputChange} value={inputValue} className={styles.inputSearch} />\r
      </div>\r
\r
      <div style={{
      display: "inline-grid",
      gridTemplateColumns: "24em repeat(5, auto)",
      columnGap: "1em",
      alignItems: "stretch"
    }}>\r
        <h3 key="hrToken" style={{
        padding: "1em",
        margin: 0
      }}>\r
          Design Token\r
        </h3>\r
        <h3 key="hrLight" style={{
        padding: "1em",
        margin: 0
      }}>\r
          Light\r
        </h3>\r
        <h3 key="hrDark" style={{
        padding: "1em",
        margin: 0
      }}>\r
          Dark\r
        </h3>\r
        <h3 key="hrTeamsLight" style={{
        padding: "1em",
        margin: 0
      }}>\r
          Teams Light\r
        </h3>\r
        <h3 key="hrTeamsDark" style={{
        padding: "1em",
        margin: 0
      }}>\r
          Teams Dark\r
        </h3>\r
        <h3 key="hrHC" style={{
        padding: "1em",
        margin: 0
      }}>\r
          Teams High Contrast\r
        </h3>\r
        {tokensSearchResult?.map(name => [<div key={\`\${name}Token\`} style={{
        padding: "0 1em",
        fontWeight: "bold",
        display: "flex",
        alignItems: "center"
      }}>\r
            {name}\r
          </div>, <ColorRampItem key={\`\${name}Light\`} value={theme.webLight[name]} />, <ColorRampItem key={\`\${name}Dark\`} value={theme.webDark[name]} />, <ColorRampItem key={\`\${name}TeamsLight\`} value={theme.teamsLight[name]} />, <ColorRampItem key={\`\${name}TeamsDark\`} value={theme.teamsDark[name]} />, <ColorRampItem key={\`\${name}HC\`} value={theme.teamsHighContrast[name]} />])}\r
      </div>\r
    </>;
}`,...(B=(V=w.parameters)==null?void 0:V.docs)==null?void 0:B.source}}};const ge=["Colors"];export{w as Colors,ge as __namedExportsOrder,fe as default};
