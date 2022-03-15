(this["webpackJsonpboxless-web"]=this["webpackJsonpboxless-web"]||[]).push([[0],{171:function(e,t,a){e.exports=a(315)},176:function(e,t,a){},315:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(36),l=a.n(i),o=(a(176),a(37)),c=a(50),s=a(32),u=a(21),p=a.n(u),h=a(23),d=a(14),m=a(15),y=a(17),g=a(16),f=a(71),v=a.n(f),x=(a(79),function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=document.createElement("script");e.src="./static.js",e.async=!0,document.body.appendChild(e)}},{key:"componentWillUnmount",value:function(){for(var e=document.getElementsByTagName("script"),t=e.length;t>=0;t--)e[t]&&null!==e[t].getAttribute("src")&&-1!==e[t].getAttribute("src").indexOf("./static.js")&&e[t].parentNode.removeChild(e[t])}},{key:"render",value:function(){var e=this.props,t=e.width,a=e.height,n=e.maxWidth;return r.a.createElement("div",{style:b.container},r.a.createElement("canvas",{id:"tv",style:{height:a,width:t,maxWidth:n}}))}}]),a}(r.a.Component)),b={container:{display:"flex",justifyContent:"center",alignItems:"center"}},k=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={initials:"",phone:"",width:0,height:0},e.updateDimensions=function(){e.setState({width:window.innerWidth,height:window.innerHeight})},e.handleChange=function(t){return function(a){e.setState(Object(o.a)({},t,a.target.value))}},e.handleSubmit=function(){var t=Object(h.a)(p.a.mark((function t(a){var n,r,i,l,o,c;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.preventDefault(),n=e.state,r=n.initials,i=n.phone,"https://boxless.herokuapp.com",t.next=5,fetch("".concat("https://boxless.herokuapp.com","/api/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({initials:r,phone:i})});case 5:if(!(l=t.sent).ok){t.next=13;break}return t.next=9,l.json();case 9:(o=t.sent).token&&(localStorage.setItem("token",o.token),(0,e.props.handleLogin)()),t.next=17;break;case 13:return t.next=15,l.text();case 15:c=t.sent,console.log(c);case 17:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.updateDimensions),this.setState({width:window.innerWidth,height:window.innerHeight})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions)}},{key:"render",value:function(){var e=this.state,t=e.height,a=e.width;return r.a.createElement("div",{className:"login-container"},r.a.createElement(x,{width:a,height:t+100}),r.a.createElement("div",{style:E.loginContainer},r.a.createElement("form",{style:E.login,onSubmit:this.handleSubmit},r.a.createElement("h1",null,"boxless"),r.a.createElement("label",null,r.a.createElement("input",{style:E.input,type:"text",value:this.state.initials,onChange:this.handleChange("initials"),placeholder:"initials",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"})),r.a.createElement("br",null),r.a.createElement("label",null,r.a.createElement("input",{style:E.input,type:"text",value:this.state.phone,onChange:this.handleChange("phone"),placeholder:"phone",autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",spellCheck:"false"})),r.a.createElement("br",null),r.a.createElement("input",{style:E.button,type:"submit",value:"enter"}))))}}]),a}(r.a.Component),E={title:{color:"white",height:"100px"},login:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"},input:{fontSize:"16px",width:"200px",height:"48px",backgroundColor:"rgba(0,0,0,0.5)",border:"none",color:"white",padding:"0 20px",borderRadius:"0px",textAlign:"center"},button:{fontSize:"16px",width:"200px",height:"48px",backgroundColor:"rgba(0,0,0,0.5)",border:"none",color:"white",padding:"0 20px",borderRadius:"0px"},loginContainer:{height:"100px",width:"100px",position:"absolute",left:"50%",marginLeft:"-50px",top:"50%",marginTop:"-50px"}},C=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.vidId,a=(e.playNext,e.onPlay),n=e.onPause,i=e.playing,l=e.lengthMax,o=(e.onError,e.muted),c=e.endSong;return null===i&&(i=!0),r.a.createElement("div",{style:w.container},r.a.createElement(v.a,{url:"https://www.youtube.com/watch?v=".concat(t),width:"100%",height:"250px",controls:!0,playing:i,onEnded:c,onPlay:a,onPause:n,onError:function(){console.log("error"),c()},config:{youtube:{playerVars:{start:0,end:l}}},muted:o}))}}]),a}(r.a.Component),w={container:{display:"flex",justifyContent:"center",alignItems:"center",width:"100vw",maxWidth:450},center:{width:50}},j=C,M=a(322),S={container:{position:"fixed",width:"100vw",bottom:0,display:"flex",justifyContent:"center"},innerContainer:{width:"100%",maxWidth:450}},O=function(e){var t=e.activeTab,a=e.handleTabClick;return r.a.createElement("div",{style:S.container},r.a.createElement("div",{style:S.innerContainer},r.a.createElement(M.a,{attached:"bottom",inverted:!0,widths:4},r.a.createElement(M.a.Item,{name:"options",active:"options"===t,onClick:a},r.a.createElement("i",{className:"material-icons"},"music_note")),r.a.createElement(M.a.Item,{name:"pick",active:"pick"===t,onClick:a},r.a.createElement("i",{className:"material-icons"},"touch_app")),r.a.createElement(M.a.Item,{name:"search",active:"search"===t,onClick:a},r.a.createElement("i",{className:"material-icons"},"search")),r.a.createElement(M.a.Item,{name:"playlist",active:"playlist"===t,onClick:a},r.a.createElement("i",{className:"material-icons"},"queue_music")))))},I=a(321),P=[{key:"jan",text:"Jan",value:"jan"},{key:"feb",text:"Feb",value:"feb"},{key:"mar",text:"Mar",value:"mar"},{key:"apr",text:"Apr",value:"apr"},{key:"may",text:"May",value:"may"},{key:"jun",text:"Jun",value:"jun"},{key:"jul",text:"Jul",value:"jul"},{key:"aug",text:"Aug",value:"aug"},{key:"sep",text:"Sep",value:"sep"},{key:"oct",text:"Oct",value:"oct"},{key:"nov",text:"Nov",value:"nov"},{key:"dec",text:"Dec",value:"dec"}],A=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onChangeValue=function(t,a){var n=a.value,r=e.props;(0,r.handleChange)(r.monthType,P.findIndex((function(e){return e.value===n})))},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.month;return r.a.createElement(I.a,{inline:!0,scrolling:!0,options:P,value:P[e].value,onChange:this.onChangeValue})}}]),a}(r.a.Component),V=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onChangeValue=function(t,a){var n=a.value,r=e.props;(0,r.handleChange)(r.dayType,n)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.day,a=e.days,n=Object(c.a)(Array(a).keys()).map((function(e){return{key:e+1,text:(e+1).toString(),value:e+1}}));return r.a.createElement(I.a,{style:{margin:"0 8px"},inline:!0,scrolling:!0,options:n,value:t,onChange:this.onChangeValue})}}]),a}(r.a.Component),N=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onChangeValue=function(t,a){var n=a.value,r=e.props;(0,r.handleChange)(r.yearType,n)},e}return Object(m.a)(a,[{key:"render",value:function(){for(var e=this.props,t=e.year,a=e.min,n=e.max,i=[],l=a;l<=n;l+=1)i.push({key:l,text:l.toString(),value:l});return r.a.createElement(I.a,{inline:!0,scrolling:!0,options:i,value:t,onChange:this.onChangeValue})}}]),a}(r.a.Component),T=(new Date).getFullYear(),D={date:{display:"inline"},dash:{display:"inline",margin:"0 8px"}},R=function(e){var t=e.dayMin,a=e.dayMax,n=e.monthMin,i=e.monthMax,l=e.yearMin,o=e.yearMax,c=e.handleChange;return r.a.createElement("span",null,r.a.createElement("div",{style:D.date},r.a.createElement(A,{month:n,handleChange:c,monthType:"monthMin"}),r.a.createElement(V,{day:t,days:31,handleChange:c,dayType:"dayMin"}),r.a.createElement(N,{year:l,min:1960,max:T,handleChange:c,yearType:"yearMin"})),r.a.createElement("div",{style:D.dash},"-"),r.a.createElement("div",{style:D.date},r.a.createElement(A,{month:i,handleChange:c,monthType:"monthMax"}),r.a.createElement(V,{day:a,days:31,handleChange:c,dayType:"dayMax"}),r.a.createElement(N,{year:o,min:1960,max:T,handleChange:c,yearType:"yearMax"})))},_=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onChangeValue=function(t,a){var n=a.value,r=e.props;(0,r.handleChange)(r.rankType,n)},e}return Object(m.a)(a,[{key:"render",value:function(){for(var e=this.props,t=e.min,a=e.max,n=e.value,i=[],l=t;l<=a;l+=1)i.push({key:l,text:l.toString(),value:l});return r.a.createElement(I.a,{inline:!0,scrolling:!0,options:i,value:n,onChange:this.onChangeValue})}}]),a}(r.a.Component),z={dash:{display:"inline",margin:"0 8px"},rank:{margin:"10px"}},B=function(e){for(var t=e.rankMin,a=e.rankMax,n=e.handleChange,i=[],l=t;l<=a;l+=1)i.push({key:l,text:l.toString(),value:l});return r.a.createElement("span",{style:z.rank},r.a.createElement(_,{min:1,max:a,value:t,rankType:"rankMin",handleChange:n}),r.a.createElement("div",{style:z.dash},"-"),r.a.createElement(_,{min:t,max:100,value:a,rankType:"rankMax",handleChange:n}))},W=function(e){var t=e.name,a=e.on,n=e.toggle,i=e.label,l={container:{flex:1},button:{border:"none",cursor:"pointer",background:"none",height:"100%",letterSpacing:"1px",fontSize:"inherit",transition:"all 0.3s",outline:"none",margin:"10px",color:a?"#faab1a":"white"}};return r.a.createElement("div",{style:l.container},r.a.createElement("button",{style:l.button,onClick:n,name:t},i))},F=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onChangeValue=function(t,a){var n=a.value,r=e.props;(0,r.handleChange)(r.optionName,n)},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.value,t=[{key:0,text:"Max",value:1/0},{key:1,text:"15 sec",value:15},{key:2,text:"30 sec",value:30},{key:3,text:"1 min",value:60},{key:4,text:"2 min",value:120},{key:5,text:"3 min",value:180},{key:6,text:"4 min",value:240},{key:7,text:"5 min",value:300}];return r.a.createElement(I.a,{style:{margin:"10px"},inline:!0,scrolling:!0,options:t,value:e,onChange:this.onChangeValue})}}]),a}(r.a.Component),L={container:{display:"flex",alignItems:"center",justifyContent:"center",flex:1,flexDirection:"column",textAlign:"center",backgroundColor:"#3D3E3F",color:"white",padding:"44px 0"},optionsRow:{display:"flex",justifyContent:"center",alignItems:"center"},genreRow:{width:"100%",display:"flex",flex:1,justifyContent:"center",alignItems:"center"},divider:{width:"82%",background:"#555",height:"1px"}},q=function(e){var t=e.options,a=t.lyrics,n=t.clean,i=t.norepeats,l=t.alternative,o=t.country,c=t.dance,s=t.electronic,u=t.hiphop,p=t.house,h=t.latin,d=t.pop,m=t.rap,y=t.randb,g=t.rock,f=t.trance,v=t.dayMin,x=t.dayMax,b=t.monthMin,k=t.monthMax,E=t.yearMin,C=t.yearMax,w=t.rankMin,j=t.rankMax,M=t.lengthMax,S=e.toggle,O=e.handleChange;return r.a.createElement("div",{style:L.container},r.a.createElement("div",{style:L.optionsRow},r.a.createElement(R,{dayMin:v,dayMax:x,monthMin:b,monthMax:k,yearMin:E,yearMax:C,handleChange:O})),r.a.createElement("div",{style:L.optionsRow},r.a.createElement(B,{rankMin:w,rankMax:j,handleChange:O})),r.a.createElement("div",{style:L.divider}),r.a.createElement("div",{style:L.optionsRow},r.a.createElement(W,{toggle:S,on:a,name:"lyrics",label:"Lyrics"}),r.a.createElement(W,{toggle:S,on:n,name:"clean",label:"Clean"}),r.a.createElement(F,{value:M,optionName:"lengthMax",handleChange:O}),r.a.createElement(W,{toggle:S,on:i,name:"norepeats",label:"No Repeats"})),r.a.createElement("div",{style:L.divider}),r.a.createElement("div",{style:L.genreRow},r.a.createElement(W,{toggle:S,on:l,name:"alternative",label:"Alternative"}),r.a.createElement(W,{toggle:S,on:o,name:"country",label:"Country"}),r.a.createElement(W,{toggle:S,on:c,name:"dance",label:"Dance"})),r.a.createElement("div",{style:L.genreRow},r.a.createElement(W,{toggle:S,on:s,name:"electronic",label:"Electronic"}),r.a.createElement(W,{toggle:S,on:h,name:"latin",label:"Latin"}),r.a.createElement(W,{toggle:S,on:d,name:"pop",label:"Pop"})),r.a.createElement("div",{style:L.genreRow},r.a.createElement(W,{toggle:S,on:m,name:"rap",label:"Rap"}),r.a.createElement(W,{toggle:S,on:y,name:"randb",label:"R&B"}),r.a.createElement(W,{toggle:S,on:g,name:"rock",label:"Rock"})),r.a.createElement("div",{style:L.divider}),r.a.createElement("div",{style:L.genreRow},r.a.createElement(W,{toggle:S,on:u,name:"hiphop",label:"Hip Hop"}),r.a.createElement(W,{toggle:S,on:p,name:"house",label:"House"}),r.a.createElement(W,{toggle:S,on:f,name:"trance",label:"Trance"})))},H=function(e){var t=e.info,a=e.playNext,n=e.playPrevious,i=e.cachedVid,l=e.togglePlayPause,o=e.playing,c=e.playlistPosition,s=e.playlist,u=void 0,p=void 0,h=void 0;t&&(t.title&&(u=t.title),t.artist&&(p=t.artist),t.vidId&&(h=t.vidId));var d={container:{display:"flex",flex:1,flexDirection:"column",backgroundColor:"#3D3E3F",color:"white",backgroundImage:h?"url(https://i.ytimg.com/vi/".concat(h,"/hqdefault.jpg)"):"none",backgroundRepeat:"no-repeat",backgroundPosition:"center center",justifyContent:"space-evenly",minHeight:"200px"},title:{flex:1,display:"flex",alignItems:"center",justifyContent:"center",fontSize:"15px",padding:"20px",textAlign:"center",background:"rgba(0, 0, 0, 0.2)",height:"72px"},text:{width:"315px"},controls:{display:"flex",alignItems:"center",justifyContent:"space-around",background:"rgba(0, 0, 0, 0.2)",height:"33px"},controlsIcons:{fontSize:"36px",cursor:"pointer"},disabledControlsIcons:{opacity:0,fontSize:"36px",cursor:"default"}},m="";return u&&p?m="".concat(u," - ").concat(p):u&&(m="".concat(u)),r.a.createElement("div",{style:d.container},r.a.createElement("div",{style:d.thumbnail},r.a.createElement("div",{style:d.title},r.a.createElement("p",{style:d.text},m))),r.a.createElement("div",{style:d.controls},0!==c?r.a.createElement("i",{className:"material-icons",style:d.controlsIcons,onClick:n},"skip_previous"):r.a.createElement("i",{className:"material-icons",style:d.disabledControlsIcons},"skip_previous"),o?r.a.createElement("i",{className:"material-icons",style:d.controlsIcons,onClick:l},"pause"):r.a.createElement("i",{className:"material-icons",style:d.controlsIcons,onClick:l},"play_arrow"),null!==i||c<s.length-1?r.a.createElement("i",{className:"material-icons",style:d.controlsIcons,onClick:function(){return a("manual")}},"skip_next"):r.a.createElement("i",{className:"material-icons",style:d.disabledControlsIcons},"skip_next")))},J=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){return Object(d.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.refresh,a=e.addToPlaylist,n=e.pickVid1,i=e.pickVid2;return r.a.createElement("div",{style:U.container},r.a.createElement("div",{style:U.pick},n&&i?r.a.createElement("div",{style:U.left,onClick:function(){a(n),t()}},r.a.createElement("div",{style:U.thumbnail},r.a.createElement("img",{src:"https://i.ytimg.com/vi/".concat(n.vidId,"/hqdefault.jpg"),alt:"left",style:U.image}),r.a.createElement("p",{style:U.title},r.a.createElement("p",null,n.title," - ",n.artist)))):r.a.createElement("div",{style:U.left},r.a.createElement("div",{style:U.thumbnail},r.a.createElement("div",{style:U.blank}))),r.a.createElement("div",{style:U.middle},r.a.createElement("div",{style:U.circle},r.a.createElement("p",{style:U.or},"or"))),n&&i?r.a.createElement("div",{style:U.right,onClick:function(){a(i),t()}},r.a.createElement("div",{style:U.thumbnail},r.a.createElement("img",{src:"https://i.ytimg.com/vi/".concat(i.vidId,"/hqdefault.jpg"),alt:"right",style:U.image}),r.a.createElement("p",{style:U.title},i.title," - ",i.artist))):r.a.createElement("div",{style:U.right},r.a.createElement("div",{style:U.thumbnail},r.a.createElement("div",{style:U.blank})))),r.a.createElement("div",{style:U.refresh},r.a.createElement("i",{style:U.refreshIcon,class:"material-icons",onClick:function(){return t()}},"refresh")))}}]),a}(r.a.Component),U={container:{display:"flex",flex:1,flexDirection:"column",textAlign:"center",backgroundColor:"#3D3E3F",color:"white",padding:"20px 0 0 0",minWidth:"375px"},pick:{display:"flex",alignItems:"center"},left:{flex:1,cursor:"pointer"},thumbnail:{display:"flex",flexDirection:"column",alignItems:"center"},image:{width:"175px",flex:1},title:{fontSize:"14px",padding:"10px 10px",background:"black",width:"175px",flex:1,textAlign:"left"},middle:{display:"flex",justifyContent:"center",margin:"0 -23px"},circle:{background:"#3D3E3F",borderRadius:"50%",height:"40px",width:"40px",position:"relative"},or:{position:"relative",fontSize:"18px",top:"6px"},right:{flex:1,cursor:"pointer"},refresh:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},refreshIcon:{cursor:"pointer"},blank:{backgroundColor:"black",height:"175px",width:"175px"}},Y=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={current:0,search:""},e.handleNext=function(){var t=e.state.current;t<e.props.searchResults.vids.length-1&&e.setState({current:t+1})},e.handlePrev=function(){var t=e.state.current;t>0&&e.setState({current:t-1})},e.handleChange=function(t){var a=t.target.value;e.setState({search:a})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props,t=e.getSearchVids,a=e.searchResults,n=e.addToPlaylist,i=(a.searchTerm,a.vids),l=this.state,o=l.current,c=l.search;return r.a.createElement("div",{style:G.container},i&&r.a.createElement("div",{style:G.carousel},r.a.createElement("div",{style:G.left},r.a.createElement("i",{class:"material-icons",style:G.arrow,onClick:this.handlePrev},"chevron_left")),r.a.createElement("div",{style:G.center,onClick:function(){return n({vidId:i[o].vidId,title:i[o].title})}},r.a.createElement("div",{style:G.thumbnail},r.a.createElement("img",{src:"https://i.ytimg.com/vi/".concat(i[o].vidId,"/hqdefault.jpg"),style:G.image,alt:"thumbnail"}),r.a.createElement("p",{style:G.title},"".concat(i[o].title)))),r.a.createElement("div",{style:G.right},r.a.createElement("i",{class:"material-icons",style:G.arrow,onClick:this.handleNext},"chevron_right"))),r.a.createElement("div",{style:G.search},r.a.createElement("input",{type:"text",name:"search",placeholder:"Search",style:G.input,value:c,onChange:this.handleChange}),r.a.createElement("div",{style:G.button,onClick:function(){return t(c)}},r.a.createElement("i",{style:G.searchIcon,class:"material-icons"},"search"))))}}]),a}(r.a.Component),G={container:{display:"flex",flex:1,flexDirection:"column",textAlign:"center",backgroundColor:"#3D3E3F",color:"white"},carousel:{display:"flex"},left:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},arrow:{fontSize:"36px",cursor:"pointer"},center:{flex:3,display:"flex"},thumbnail:{display:"flex",flexDirection:"column",margin:"33px 0",cursor:"pointer"},image:{width:"275px"},title:{flex:1,fontSize:"14px",height:"28px",background:"black",padding:"10px"},right:{flex:1,display:"flex",alignItems:"center",justifyContent:"center"},search:{flex:1,display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"33px"},input:{border:"none",background:"black",color:"#ddd",paddingLeft:"10px",height:"45px",width:"275px"},button:{border:"none",background:"#666",color:"#ddd",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",height:"45px"},searchIcon:{margin:"0 13px"}},$=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={selected:null},e.handleSelect=function(t){t===e.state.selected?e.setState({selected:null}):e.setState({selected:t})},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.playlist,n=t.playlistPosition,i=this.state.selected,l=a.map((function(t,a){var l="";return t.title&&t.artist?l="".concat(t.title," - ").concat(t.artist):t.title&&(l="".concat(t.title)),r.a.createElement("div",{key:a},i===a?r.a.createElement("div",{style:K.rowSelected,key:a.toString(),onClick:function(){return e.handleSelect(a)}},r.a.createElement("div",{style:K.rowTop},a===n?r.a.createElement("i",{class:"material-icons",style:K.play},"music_note"):r.a.createElement("i",{class:"material-icons",style:K.play}),r.a.createElement("img",{src:"https://i.ytimg.com/vi/".concat(t.vidId,"/hqdefault.jpg"),alt:"thumbnail",style:K.image}),r.a.createElement("p",{style:K.title},l)),r.a.createElement("div",{style:K.rowBottom},r.a.createElement("i",{class:"material-icons",style:K.button},"play_arrow"),r.a.createElement("i",{class:"material-icons",style:K.button},"keyboard_arrow_down"),r.a.createElement("i",{class:"material-icons",style:K.button},"keyboard_arrow_up"),r.a.createElement("i",{class:"material-icons",style:K.button},"add"),r.a.createElement("i",{class:"material-icons",style:K.button},"remove"))):r.a.createElement("div",{style:K.row,key:a.toString(),onClick:function(){return e.handleSelect(a)}},a===n?r.a.createElement("i",{class:"material-icons",style:K.play},"music_note"):r.a.createElement("i",{class:"material-icons",style:K.play}),r.a.createElement("img",{src:"https://i.ytimg.com/vi/".concat(t.vidId,"/hqdefault.jpg"),alt:"thumbnail",style:K.image}),r.a.createElement("p",{style:K.title},l)))}));return r.a.createElement("div",{style:K.container},r.a.createElement("div",{style:K.scrollable},l))}}]),a}(r.a.Component),K={container:{display:"flex",flex:1,flexDirection:"column",backgroundColor:"#3D3E3F",color:"white"},scrollable:{height:"330px",overflow:"auto"},row:{flex:1,display:"flex",borderBottom:"1px black solid",alignItems:"center",cursor:"pointer"},play:{width:"45px",textAlign:"center"},image:{height:"50px",margin:"2px 15px 2px 0"},title:{margin:"0px",width:"216px"},rowSelected:{display:"flex",flexDirection:"column",borderBottom:"1px black solid",cursor:"pointer",flex:1},rowTop:{display:"flex",alignItems:"center"},rowBottom:{display:"flex",textAlign:"center",padding:"0 33px 13px 33px"},button:{flex:1}},Q=function(e){var t=e.options,a=t.dayMin,n=t.dayMax,r=t.monthMin,i=t.monthMax,l=t.yearMin,o=t.yearMax;return{dateMin:"".concat(l,"-").concat(r+1,"-").concat(a),dateMax:"".concat(o,"-").concat(i+1,"-").concat(n)}},X=function(){var e=Object(h.a)(p.a.mark((function e(t,a){var n,r,i,l,o,c,s,u,h,d,m,y,g,f,v,x,b,k,E,C,w,j,M,S,O,I,P,A;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.options,r=n.rankMin,i=n.rankMax,l=n.alternative,o=n.country,c=n.dance,s=n.electronic,u=n.hiphop,h=n.house,d=n.latin,m=n.pop,y=n.rap,g=n.randb,f=n.rock,v=n.trance,x=t.hiphopAfter,b=t.hiphopCount,k=t.houseAfter,E=t.houseCount,C=t.tranceAfter,w=t.tranceCount,j=Q(t),M=j.dateMin,S=j.dateMax,"https://boxless.herokuapp.com",e.prev=3,O=new AbortController,I=O.signal,setTimeout((function(){O.abort()}),1e4),e.next=9,fetch("".concat("https://boxless.herokuapp.com","/api/vid?dateMin=").concat(M,"&dateMax=").concat(S,"&rankMin=").concat(r,"&rankMax=").concat(i,"&pop=").concat(m,"&rap=").concat(y,"&latin=").concat(d,"&alternative=").concat(l,"&electronic=").concat(s,"&country=").concat(o,"&randb=").concat(g,"&rock=").concat(f,"&dance=").concat(c,"&hiphop=").concat(u,"&house=").concat(h,"&trance=").concat(v,"&lyrics=false&clean=false&karaoke=false&hiphopAfter=").concat(x,"&hiphopCount=").concat(b,"&houseAfter=").concat(k,"&houseCount=").concat(E,"&tranceAfter=").concat(C,"&tranceCount=").concat(w),{signal:I,method:"GET",headers:{"content-type":"application/json",Authorization:a}});case 9:if(!(P=e.sent).ok){e.next=17;break}return e.next=13,P.json();case 13:return A=e.sent,e.abrupt("return",A);case 17:return e.abrupt("return",null);case 18:e.next=23;break;case 20:return e.prev=20,e.t0=e.catch(3),e.abrupt("return",null);case 23:case"end":return e.stop()}}),e,null,[[3,20]])})));return function(t,a){return e.apply(this,arguments)}}(),Z=function(){var e=Object(h.a)(p.a.mark((function e(t,a){var n,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"https://boxless.herokuapp.com",e.prev=1,e.next=4,fetch("".concat("https://boxless.herokuapp.com","/api/searchvids?search=").concat(a.replace(/ /g,"%")),{method:"GET",headers:{"content-type":"application/json",Authorization:t}});case 4:if(!(n=e.sent).ok){e.next=12;break}return e.next=8,n.json();case 8:return r=e.sent,e.abrupt("return",r);case 12:return e.abrupt("return",null);case 13:e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(1),e.abrupt("return",null);case 18:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t,a){return e.apply(this,arguments)}}(),ee=function(){var e=new Date,t=new Date(e.getTime()-2628e6);return{yearMax:e.getFullYear(),monthMax:e.getMonth(),dayMax:e.getDate(),yearMin:t.getFullYear(),monthMin:t.getMonth(),dayMin:t.getDate()}}(),te=ee.dayMin,ae=ee.monthMin,ne=ee.yearMin,re=ee.dayMax,ie=ee.monthMax,le=ee.yearMax,oe=function(e){Object(y.a)(a,e);var t=Object(g.a)(a);function a(){var e;Object(d.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={loggedIn:!1,options:{lyrics:!1,clean:!1,karaoke:!1,norepeats:!0,alternative:!0,country:!0,dance:!0,electronic:!0,hiphop:!0,house:!0,latin:!0,pop:!0,rap:!0,randb:!0,rock:!0,trance:!0,dayMin:te,dayMax:re,monthMin:ae,monthMax:ie,yearMin:ne,yearMax:le,rankMin:1,rankMax:100,lengthMax:60},currentVid:null,activeTab:"options",searchResults:{},playlist:[],playlistPosition:0,cachedVid:null,playing:null,hiphopAfter:"",hiphopCount:"",houseAfter:"",houseCount:"",tranceAfter:"",tranceCount:"",fetchingVid:!1,shouldPlayNext:!1,playedNext:!1},e.handleLogin=function(){e.setState({loggedIn:!0},(function(){e.getVid()}))},e.getVid=function(){e.setState({fetchingVid:!0},Object(h.a)(p.a.mark((function t(){var a,n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.state.options.norepeats,t.next=3,X(e.state,localStorage.getItem("token"));case 3:null===(n=t.sent)?(localStorage.clear(),e.setState({loggedIn:!1})):(r=e.checkRepeat(n)&&a,n.vidId&&v.a.canPlay("https://www.youtube.com/watch?v=".concat(n.vidId))&&!r?e.setState({fetchingVid:!1},(function(){0===e.state.playlist.length?e.addToPlaylist(n):e.cacheVid(n)})):setTimeout((function(){e.getVid()}),4e3));case 5:case"end":return t.stop()}}),t)}))))},e.addToPlaylist=function(t){var a=e.state.playlist,n={};t.genre&&(n=e.getUpdateBeforeAndCount(t)),e.setState(Object(s.a)({playlist:[].concat(Object(c.a)(a),[t])},n),(function(){var t=e.state.playlist;1===t.length&&e.setState({currentVid:t[0]},(function(){e.getVid()}))}))},e.cacheVid=function(t){var a=e.state.shouldPlayNext,n={};t.genre&&(n=e.getUpdateBeforeAndCount(t)),a?e.setState(Object(s.a)({shouldPlayNext:!1,cachedVid:t},n),(function(){e.playNext()})):e.setState(Object(s.a)({cachedVid:t},n))},e.getUpdateBeforeAndCount=function(t){var a=e.state,n=a.hiphopAfter,r=a.hiphopCount,i=a.houseAfter,l=a.houseCount,o=a.tranceAfter,c=a.tranceCount,s={};return"hiphop"===t.genre&&(n===t.hiphopAfter&&r===t.hiphopCount?(s.hiphopAfter="",s.hiphopCount=""):(s.hiphopAfter=t.hiphopAfter,s.hiphopCount=t.hiphopCount)),"house"===t.genre&&(i===t.houseAfter&&l===t.houseCount?(s.houseAfter="",s.houseCount=""):(s.houseAfter=t.houseAfter,s.houseCount=t.houseCount)),"trance"===t.genre&&(o===t.tranceAfter&&c===t.tranceCount?(s.tranceAfter="",s.tranceCount=""):(s.tranceAfter=t.tranceAfter,s.tranceCount=t.tranceCount)),s},e.playNext=function(){var t=Object(h.a)(p.a.mark((function t(a){var n,r,i,l,o,s,u,h,d,m,y,g,f,v;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.state.playedNext,"manual"===a?(r=e.state,i=r.playlist,l=r.playlistPosition,o=r.cachedVid,l<i.length-1?(s=i[l+1],e.setState({playlistPosition:l+1,currentVid:s})):o&&(u=o,e.setState({cachedVid:null,playlist:[].concat(Object(c.a)(i),[u]),playlistPosition:l+1,currentVid:u},(function(){return e.getVid()})))):n?e.setState({playedNext:!1}):(h=e.state,d=h.playlist,m=h.playlistPosition,y=h.cachedVid,g=h.fetchingVid,m<d.length-1?(f=d[m+1],e.setState({playedNext:!0},(function(){e.setState({playlistPosition:m+1,currentVid:f,playedNext:!0})}))):y?(v=y,e.setState({playedNext:!0},(function(){e.setState({cachedVid:null,playlist:[].concat(Object(c.a)(d),[v]),playlistPosition:m+1,currentVid:v,playedNext:!0},(function(){return e.getVid()}))}))):g&&e.setState({shouldPlayNext:!0}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.playPrevious=function(){var t=e.state,a=t.playlist,n=t.playlistPosition;if(n>0){var r=a[n-1];e.setState({playlistPosition:n-1,currentVid:r})}},e.getSearchVids=function(){var t=Object(h.a)(p.a.mark((function t(a){var n,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Z(localStorage.getItem("token"),a);case 2:null===(n=t.sent)?(localStorage.clear(),e.setState({loggedIn:!1})):(r=n.searchResults,e.setState({searchResults:r}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.handleError=Object(h.a)(p.a.mark((function t(){return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null===e.state.cachedVid){t.next=5;break}e.playNext(),t.next=8;break;case 5:return t.next=7,e.getVid();case 7:e.playNext();case 8:case"end":return t.stop()}}),t)}))),e.checkRepeat=function(t){var a=e.state.playlist,n=!1;return a.forEach((function(e){t.vidId===e.vidId&&(n=!0)})),n},e.handleTabClick=function(t,a){var n=a.name;e.setState({activeTab:n})},e.handleOptionClick=function(t){var a=t.target.name;e.setState({options:Object(s.a)(Object(s.a)({},e.state.options),{},Object(o.a)({},a,!e.state.options[a]))})},e.handleDropDownChange=function(t,a){e.setState({options:Object(s.a)(Object(s.a)({},e.state.options),{},Object(o.a)({},t,a))})},e.onPlay=function(){e.setState({playing:!0})},e.onPause=function(){e.setState({playing:!1})},e.togglePlayPause=function(){var t=e.state.playing;e.setState({playing:!t})},e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("token")&&this.setState({loggedIn:!0},(function(){return e.getVid()}))}},{key:"render",value:function(){var e=this.state,t=e.loggedIn,a=e.currentVid,n=e.activeTab,i=e.options,l=e.playlist,o=e.playlistPosition,c=e.playing,s=e.cachedVid,u=e.searchResults;return t?r.a.createElement("div",{style:ce.outerContainer},r.a.createElement("div",{style:ce.container},a&&a.vidId?r.a.createElement(j,{vidId:a.vidId,playNext:this.playNext,onPlay:this.onPlay,onPause:this.onPause,playing:c,lengthMax:i.lengthMax,onError:this.handleError,endSong:this.playNext}):r.a.createElement(x,{width:"100%",height:"250px",maxWidth:"450px"}),"none"!==n&&r.a.createElement(H,{info:a,playNext:this.playNext,playPrevious:this.playPrevious,cachedVid:s,togglePlayPause:this.togglePlayPause,playing:c,playlistPosition:o,playlist:l}),"options"===n&&r.a.createElement(q,{options:i,toggle:this.handleOptionClick,handleChange:this.handleDropDownChange}),"pick"===n&&r.a.createElement(J,{refresh:this.getPickVids,addToPlaylist:this.addToPlaylist}),"search"===n&&r.a.createElement(Y,{getSearchVids:this.getSearchVids,searchResults:u,addToPlaylist:this.addToPlaylist}),"playlist"===n&&r.a.createElement($,{playlist:l,playlistPosition:o}),r.a.createElement("div",{style:ce.bottomPadding})),r.a.createElement(O,{activeTab:n,handleTabClick:this.handleTabClick})):r.a.createElement(k,{handleLogin:this.handleLogin})}}]),a}(n.Component),ce={outerContainer:{display:"flex",justifyContent:"center",backgroundColor:"#1e1e1e"},container:{display:"flex",justifyContent:"center",flexDirection:"column"},bottomPadding:{height:"50px",backgroundColor:"#3D3E3F"}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},79:function(e,t,a){}},[[171,1,2]]]);
//# sourceMappingURL=main.70c2f6a1.chunk.js.map