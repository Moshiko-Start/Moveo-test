(this["webpackJsonpmoveo-test"]=this["webpackJsonpmoveo-test"]||[]).push([[0],{107:function(A,e,t){"use strict";t.r(e);var c=t(0),n=t(25),a=t.n(n),i=(t(66),t(26)),g=t(5),s=t(41),r=t.n(s),o=t(54),l=t(20),C=t(55),j=t.n(C),B={nextPage:function(A){if(A>=10)return A=1;return A+=1},prevPage:function(A){if(A<=1)return A=10;return A-=1},sortBy:function(A,e){if("age"===e)return A.sort((function(A,t){return A.dob[e]-t.dob[e]}));if("gender"===e)return A.sort((function(A,t){return A[e]>t[e]?1:-1}));if("email"===e)return A.sort((function(A,t){return A[e].toLowerCase()>t[e].toLowerCase()?1:-1}))}};var Q=t.p+"static/media/spinner.b44e28fe.gif",I=t(1),d=function(){return Object(I.jsx)("div",{children:Object(I.jsx)("img",{src:Q,alt:"loading"})})},u=t(130),E=t(133),b=t(127),D=t(128),h=t(131),w=t(132),m=t(129),O=function(){var A=Object(c.useState)(!0),e=Object(l.a)(A,2),t=e[0],n=e[1],a=Object(c.useState)([]),i=Object(l.a)(a,2),s=i[0],C=i[1],Q=Object(c.useState)(1),O=Object(l.a)(Q,2),x=O[0],p=O[1],M=Object(c.useState)(""),f=Object(l.a)(M,2),N=f[0],v=f[1],k=Object(g.f)(),P=s.map((function(A,e){return t="".concat(e+1),c="".concat(A.picture.large),n="".concat(A.name.first.charAt(0)),a="".concat(A.name.last),i="".concat(A.email),g="".concat(A.gender),s="".concat(A.dob.age),r=A.location.coordinates,{num:t,picture:c,first:n,last:a,email:i,gender:g,age:s,location:r};var t,c,n,a,i,g,s,r})),Y=function(){var A=Object(o.a)(r.a.mark((function A(){var e,t;return r.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return A.next=2,j.a.get("".concat("https://randomuser.me/api/?seed=moveo&results=10&exc=login,registered,nat,phone,cell,id","&page=").concat(x));case 2:return e=A.sent,A.next=5,e.data.results;case 5:t=A.sent,C(N?B.sortBy(t,N):t),n(!1);case 8:case"end":return A.stop()}}),A)})));return function(){return A.apply(this,arguments)}}();Object(c.useEffect)((function(){Y()}),[x,N]);if(s)return t?Object(I.jsx)(d,{}):Object(I.jsxs)("section",{className:"container",children:[Object(I.jsx)("div",{className:"header-container",children:Object(I.jsx)("h1",{children:"All users"})}),Object(I.jsx)(D.a,{component:m.a,children:Object(I.jsxs)(u.a,{sx:{maxWidth:"90%",margin:"auto"},"aria-label":"simple table",children:[Object(I.jsx)(h.a,{children:Object(I.jsxs)(w.a,{children:[Object(I.jsx)(b.a,{children:"#"}),Object(I.jsx)(b.a,{align:"center",children:"Picture"}),Object(I.jsx)(b.a,{align:"center",children:"Name"}),Object(I.jsx)(b.a,{align:"center",onClick:function(){return v("email")},children:"Email"}),Object(I.jsx)(b.a,{align:"center",onClick:function(){return v("gender")},children:"Gender"}),Object(I.jsx)(b.a,{align:"center",onClick:function(){return v("age")},children:"Age"})]})}),Object(I.jsx)(E.a,{children:P.map((function(A){return Object(I.jsxs)(w.a,{onClick:function(){return e="".concat(A.first,".").concat(A.last),t=A,void k.push({pathname:"".concat(e),person:t});var e,t},children:[Object(I.jsx)(b.a,{component:"th",scope:"row",align:"center",children:A.num}),Object(I.jsx)(b.a,{align:"center",children:Object(I.jsx)("img",{src:A.picture,alt:A.name})}),Object(I.jsx)(b.a,{align:"center",children:"".concat(A.first,".").concat(A.last)}),Object(I.jsx)(b.a,{align:"center",onClick:function(A){return function(A){A.stopPropagation(),document.location="mailto:".concat(A.target.value)}(A)},children:A.email}),Object(I.jsx)(b.a,{align:"center",children:A.gender}),Object(I.jsx)(b.a,{align:"center",children:A.age})]},A.num)}))})]})}),Object(I.jsxs)("div",{className:"table-btns-container",children:[Object(I.jsx)("button",{onClick:function(){return p(B.prevPage(x))},className:"btn",children:"prev"}),Object(I.jsxs)("span",{children:[" ",x," / ",s.length," "]}),Object(I.jsx)("button",{onClick:function(){return p(B.nextPage(x))},className:"btn",children:"next"})]})]})},x=t(56),p=t(57),M=t(59),f=t(58),N=t(37),v=function(A){Object(M.a)(t,A);var e=Object(f.a)(t);function t(){var A;Object(x.a)(this,t);for(var c=arguments.length,n=new Array(c),a=0;a<c;a++)n[a]=arguments[a];return(A=e.call.apply(e,[this].concat(n))).center={lat:+A.props.location.latitude,lng:+A.props.location.longitude},A.state={showingInfoWindow:!1,activeMarker:{},selectedPlace:{},mapCenter:{lat:A.center.lat,lng:A.center.lng}},A}return Object(p.a)(t,[{key:"render",value:function(){return Object(I.jsx)(N.Map,{style:{position:"relative",width:"300px",height:"300px"},containerStyle:{position:"realtive",width:"300px",height:"300px"},google:this.props.google,initialCenter:{lat:this.state.mapCenter.lat,lng:this.state.mapCenter.lng},zoom:5,children:Object(I.jsx)(N.Marker,{position:{lat:this.state.mapCenter.lat,lng:this.state.mapCenter.lng}})})}}]),t}(c.Component),k=Object(N.GoogleApiWrapper)({apiKey:"AIzaSyCaWcyub3jEccayAEQELi8Wl_08Ldq1DYI"})(v),P=function(A){Object(g.f)();var e=Object(c.useState)(A.location.person),t=Object(l.a)(e,2),n=t[0];t[1];return Object(I.jsxs)("section",{className:"single-user-container",children:[Object(I.jsx)("div",{className:"header",children:Object(I.jsx)("h1",{children:"User details"})}),Object(I.jsxs)("div",{className:"user-details",children:[Object(I.jsx)("div",{className:"img-container",children:Object(I.jsx)("img",{src:n.picture||"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyFpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoyNkY4RTU5QzJBMTAxMUUzQkNFQkUxNzVDOTMyOTg1MSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoyNkY4RTU5RDJBMTAxMUUzQkNFQkUxNzVDOTMyOTg1MSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjI2RjhFNTlBMkExMDExRTNCQ0VCRTE3NUM5MzI5ODUxIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI2RjhFNTlCMkExMDExRTNCQ0VCRTE3NUM5MzI5ODUxIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+VD3xWgAAFhBJREFUeNrs3d91FEcWB+BaDgFoI3BvBJ6NQO0IkCPw8ORHRAQaIpD30U+SIwBHwBABcgTMRoAcATuFqlcDSGIkzZ/qut93Th9pfeyzUNPd9bu3qnv+8enTpwQAxPLEEACAAAAACAAAgAAAAAgAAIAAAAAIAACAAAAACAAAgAAAAAgAAIAAAAAIAACAAAAACAAAgAAAAAgAAIAAAAACAAAgAAAAAgAAIAAAAAIAACAAAAACAAAgAAAAAgAAIAAAAAIAACAAAAACAAAgAAAAAgAAIAAAAAIAAAgAAIAAAAAIAACAAAAACAAAgAAAAAgAAIAAAAAIAACAAAAACAAAgAAAAAgAAIAAAAAIAADALZ628hf59ddffZqQUl9+duXIflj5/SEWy+O/5ffL5XFRfr8o/xvC+f333wUAYC+T/DDBHy6Pg+Ux2eOfZwgC71YCgnAAAgDwQMPEnif8H8vvXYV/zslKMPm6c7AowSAHgrlQAAIA8K2uTKKHZVKdNPD36b4KBosSBN6VnwsfOwgAENFRmfCPKq3utxEKpuVYDQR/6hCAAAARqvxnZdI3Hl8GgiEMvNEdAAEAxu6gTHC/pPG39betL8dputo38IcwAAIAjM1Upf8owz6I09IZGMKAZQLYAC8Cgs1PWmfL42P5afLfXGcgj+eH8lMnBQQAqKbaf7s83pffDwzJVgzLKe+NNQgAsM/JaLZSlfaGZKcmK12B/Dl0hgQEANimPNGclonnxMRTRRA7WQliPg8QAGDjE/9QcR4nrecaTQUBEABgGxP/1HAIAiAAQNuGNf73Jv4mgoCODQgA8F3H6XqN38TRThCY+TxBAICb9GWiODVRNGfYLJg7Ot7PgABgCOCzbnm8TlfP8neGw2cNAgC071hVGFKfrpcFQACAQCZl4tfuj214h0BvKBAAoH2zMvl7pzxZl66WBIRBBABovOo/MRTc4FgwRACANm/ub93cWaMbkEPAzFAgAMC45ZZu3vWtvct9nJTA6JxBAIARGlr+dvjzEH2yQRABAEZnWib/zlDwCAelEzAzFAgAUL+zcsCm5CWB18mSAAIAVFut+fIetuUo2UiKAADVGdb73ZzZ9nkmBCAAQCX65N3u7I5OEwIAVGCaPK7FfuR9JseGAQEAdu842ezHfp06Bxmjp4aAkVdfU8NABYbz8LmhQAcATP7ECwE6AQgAYPInaAiwHwUBAEz+BNQLAQgAYPInpkmyHIAAACZ/QjoSAhAAwORPTFMhAAEAHn4DNfkjBIAAgBsnCLIgANAqm6hojaUsBABYY/J/axho0GnyLYIIAHCjg1IpeYaaVs9v31qJAAA3eK1CIkAIeC3kIgDAtdwe7Q0DAUzK+Q4CAOFNk+9VxzkPAgCqIQjApkAEAMKy6Y/ofHEQAgAhnaiAEIK98wIBgFjyl6VYAwXXAgIAqh4ISzcMAYAQPAcNQjECAMHkVmdvGOAbuQMwMwwIALSoS1etTuBmlgIQAGhSfu5Z6x/uZikAAYCmHJUDuFvuAHgqAAGAJtjgBPeTlwI6w4AAQAs3M61/uF9o9opsBABGLVcx2plwf3nJrDcMCACMldY/uH4QAAimV8HAo3Tp6quDQQBA9QLBeHwWAYBRmSa7mGET8uRvHw0CAKPhjX+wOS90ARAAGIOZ6h90ARAAiHejemEYQBcAAYBYjt2kQBcAAYB4fjEEoAuAAEAs02TtH3QBEAAIx85/0AVAACCYI9U/7KwL4Ku1EQCoqioBdkO3DQGAKuTKvzcMsNNrThcAAQDVCATkiRsEAPbKeiTsh303CADs/SZkRzLsx9QQIACwLzb/wf5YBkAAYC+65TExDLDXa9ASHAIAqn8I6JkhQABg11Qe4DpEACCY3PrvDAPsnSdxEADYKZuPoB6WARAA2BkVB7geEQAIRvsf6mIZAAEA1QYEZRkAAQA3GgioNwQIAGxTbjV6+Q/Up3NtIgCwTdr/oAuAAEBAh4YAqmV5DgEAFQa4PkEAYDO65PE/EAIQAHBjAVynCAC0z/o/uE4RAAjII0bgOkUAwI0FqJB3dSAAsFG9IQBhHQEANxSgXp0hQABgU340BDAaNgIiAKCigIB07BAA2JjeEMBoHJQDBABU/6ALAAIAAgAIAAgA8B29IYDRsQSAAAAQkCd3EAB4NI8UgQ4AAgAAI2APAAIAbiSgAwACAG4kEEVnCBAAMPmDAAACAGvT/gcQAADQAUAAAEAAQACgSZYAAAQAArIJEEAAAAAEAABq9oMhQAAAiKczBAgAAIAAAAACAAAgAAAAAgAAIAAAAAIAALV6ZwgQAAAAAQAABAC43YUhABAAiOfSEAAIAACMx9wQIACgAwCAAMDa7AEAEAAAGJG5IUAAQBcAAAGAe7EPAAR3BAACWhgCENwRAIjnv4YAdAAQANABAOr3tyFAAEAAAB0AEAC4t7khAMEdAQA3E0AHAAEAAQAw+SMA0Kp3hgAEAAQA3FCAenl0FwEAAQACmhsCBAA2ZZG8WQwEAAQAdAEA1ykCADHYCAgCAAIAAc0NAQjqCAAIAIDrFAEANxdgzxbJS7sQANgS7UUQ0BEACOiNIYBq/WkIEADYlrzD2PsAQAcAAQBdAKCSyV84RwBgq+wDgPpo/yMAoAMArksQANi8SzcbqErem7MwDAgA7IJ2I9TjD0OAAMCu6ACA6xEBgIAsA0AdtP8RANg5ywCwf9r/CADs3Hny3DHUcB2CAMDOWQaA/V5/QjgCAHvxH0MAe6P9jwDA3lyUA9itRdKBQwBAFwBU/yAAsGvnyTok7OO6AwEAXQAINvkvDAMCAKoRELhBAGAvFkIA7MQ82XiLAEBlXhkCcJ0hABCzC+CxJNhu9T83DAgA1MjaJKj+EQBQoQCuLQQAonhpCED1jwBAPHmH8rlhANU/AgCqFcD1hABAAIvl8ZthgEd7o/pHAGCMVYvvCIDHsacGAYDRuUxal/AYuYu2MAwIALiBgQANAgCj8dwQwL29TJbQEAAYuXnyimC47zVzbhgQAGilC6CagfWvFxAAaEKe/O1mhu/L6/4Lw4AAQEvOk+eZ4S75LZozw4AAQIssBcDd1wcIADRpkSwFwE1elQ4ACAA06zx5KgBWzZPWPwIAQTxPNjpBdpm0/hEAcNMDYRgEAFo3T151SmznyXIYAgBBzZJHA4npIumCIQAQ3M9JC5RYLst5DwIAbobJ+wEQekEAIJzcDvV+ACLI5/ncMCAAwLXzZFMg7Z/jvxkGBAD41iz5GlTalKt+m/4QAOAO+Sbplai0JJ/PNv0hAMAafhICaMRlOZ9tckUAADdNnMcgAICbJy2fvzpZCADwABdCACZ/EAAQAmAMbGRFAAAhgICTvy/4QQAAIYAghrb/uaFAAAAhgFiT/9xQIADA9kPAwlBQ0eRvzR8BAHYUAv7tpsueLUz+CACwv8prbigQQkEAIGYIODcU7NCbZC8KAgBUIT969dIwsAM5bP5s8kcAgHr85sbMDoKmr/RFAIAKDa1Z67JsUg6V/06WmhAAoGrDY4LexsYmzJfHv4RKBAAYT8WWlwPsC+AxXiWb/RAAYJTyvoDcul0YCu4ZIPPEPzMUCAAwXsPz2ueGgjXkpaPc8p8bCgQAaKOiy7u3PSXAXefIS+cIAgC0Xd3ZIMiqXO3nLtFvhgIBANqu9H4ux8JwhD8XcmfIl0shAECwboCqL67zdNUNOjcUCAAQswJ8WYLA3HCEMLwn4nmy1o8AACaFlUlhYTiEPRAAIJbzMkG8Uh02JX+eud1vuQcEALizUpyZMJoJdP8qn6dABwIArB0EXiYbxcY88VvSAQEAHmxRJhJBwMQPAgAEDgL/TPYI1OTSxA8CAOxqwpmZcKoIZK98DiAAwD4rz/wIodcL78Y8Xb3F0eY+eKCnhgA2Oinlo1seR8vjRfmdzVX7f5TApdIHHQCocqL6rVSnw2uGVagPM3RYflqp9k3+oAMA1bsox8vSFXi2PHqdge9O+nkp5c9kSQUEAGjAm5UJbbISCCaG5nNImpdJf244QACA1jsDs+VxUMLAYaDuwKJM9O/Kz4VTAgQAiGZY5z4v/7srXYHD8rNvqML/y4QPAgBwe3Wcj9X170k5uhIMuko7BZfpurvx10qlDwgAwAMr6Isb/nnuDhyk630EhytdhG0EhMuVP0f++Xf5eWmiBwEA2J1h0r1rt/xjw8AiadmDAACMjgkc+IYXAQGAAAAACAAAgAAAj9Qtj9Pl8SFdvfgG+JK3QiIA0JTp8nhfJv7jEgRelzAAXDleuU5Ok++LQABg5NX+x+Vxdktlk294b9PVc+wQ1cFXgbgr18aH8s97Q4QAwBj0ZcIfqv2DNf79D25yBDUpVf9tS2JHJSTna2RquBAAqHXif1uO+96oDsp/NzOMBDK0/Ls1/t2uBOuP6foLpEAAoJqJ/7FV/Mk9bogwVkPgPX3gf3tSOgKCAAIAo5/4Vw0t0WNDTIOO0maWvAQBBAB2rtvSxP/1zS1XR6/d2Gio6j/bwjm9GgSEZgQAtnoD2+WGvaFa8s4AxixfL7mrNd3y9ekdGwgAbNws7W8X8vCIVD46HwUjDM1vd3juduVayf+fXiqEAMCjKpc88Z+k/bfij5K9AYzHUdrvo3t9uV5Ok2U0BAAqr1zW/XOdqm6oWFfOz1r2rwwvFLIsgABA9ZWL6oaxhuZZqvOlVsMyWm2BHgGAym4SY9p5f5y8IY06QnMOpCeV/zmH4GwZDQGAb6r+MbYJh+WK98nrhNmtSbpu93cjul5OdQMQABhj1f+9m7EbG9vWNRA6h26AvQECAAG1egPIf68P5QYtCLDpwDxL7Sw7DQXAWbKXRgAgjFmASnmarr9X3c2NTU38J41eK7kY8GSNAEDjN7K3jd7EbjNsFJwJAjxy4m/5/OmSDYICAM2apDofUdrVjXx4X7qlAUz8tztNlgQEAJoyLek++kV9kK6XBgQBbqqCz4JO/F/fL2ymFQBowFk5+PYm9yFt91sNGYd+ZeKfCsqfDV/L7doQABhptfs2eUnOOjf/t27+YUPge9eJe4gAQGvpXWV7P91KFXiW7Ihu+XPO69wffc5r00UUABjZ5O/G9vCqZ6gM3+sKNPWZDp2eY5/pveXxe23cBADqvkht9ttsmDpbqRa9NW1c+vRlV6c3JI9yVEKU+4sAQIWTvzbd9iugjyaT6kPbabre4Dk1YW18fL00SACgIjOT/8583U7WGahr0h9eZtMZlq3pkmXGJjw1BKN3luzS3eeNcFqOy+XxZnm8Kz8vDc9WQ1i/PJ6V8KXC389nkEPAT8vjwnAIAJj8dQaul2LyTfHP5TEvB4+v8odJvzccVYWAn53jAgAmf76csPIxfO9C7gr8JRDce8I/LD9V+XWHgOfL49xwCACY/PnWUTmGQDAvXYJ35eci+CTSl0n/UIU/2ntSEgIEAEz+fF9fjuHb1y5XAsGi/N7i2mqe5LuVyb5LNuwJAQgAmPxVwd9UvxclHLxbCQmXlYeD7qvjx5VJHyEAAQCTP2tWzCnd3BZfDQL559/l9/kt/84mJvXVP9ewLn94wz8jrtPUbgdLAMDkT1Vdg68DwomhYc/npUcER8CLgOo3M/kDIw0Bln0EAB5oqpoDRh4COkMhAHD/yd/rfYGxhwDfIigAcA/Du80BWrif+RZBAQAXC6CoQQDga3nSPzP5Aw2aJsuaAgC3smsWaD0ETA2DAMCXzkz+QJB7XW8YBACuHEvFQCD5yYDOMAgA0eUkbHMMEInHAwWA8LpyEQBEk5c8bQoUAMKSgIHIjtL1V2IjAIRh0x/A1RJobxgEgCimyaY/gIFuqAAQgjdiAXxp2BSIAND0Se5NfwDf6tPV158jADTpNFn3B7jNSbIfQABoUN7tOjUMAHeyH0AAaEqXPO8KsI4D90sBoCXW/QHW5/0AAkAT8kncGwaAe8n7ATrDIACMlUf+AB7Go4ECwKhZxwJ4XBE1MwwCwNjMkkf+AB7rxL1UABhbaj0xDAAboZsqADhZAYIWVTPDIADU7jhpVwFsmqcCBICqdUnrH2BbdFcFgKpPTi/8AdiOPnlBkABQoaPkhT8A23ai0BIAapJPRi/8AXC/FQACJtLOMADsxDTpuAoAFcgTvzUpgN3SBRAA9s6uVIDdmyi+BIB9svEPYH9sCBQA9kYLCmB/bAgUAPZilmz8A9i3afL2VQFgx6nzhWEAqIIugACw05PNuhNAHfp0tScLAWCrunTVcgJAF0AAcJIBoDgTAFrVJ20mgJoLNMuzAsBW+KpfgHrlyd/LgQSArVT/vWEAqNoLXQABQPUPoAuAAKD6B9AFQABQ/QPoAggAqP4BdAEEAFT/ALoAAoDqHwBdAAFA9Q+ALoAAoPoHQBdAAFD9A6ALIACMVKf6B2iqC4AAoPoHCNgFmBoGAWCd6t+JAqCwEwCCMfkDtFnc+Tp3AeBWuU1krQigTe7vAsCtjpLHRQBa1S+PiWEQAG5ijQhAF0AACJgMO8MA0LRp0ukVAKRCgJC8GEgA+L9c+dsdChDDL4ZAABhMDQGAok8AkAYBcN8XABp3lGz+A3DvFwCkQABCmAoAcXXJOhCAAlAACMfkD6AIFAAC8uw/gC6AABDMJNn8BxBd2O+AiRwAVP8AZFMBIF7qA4CQywBRA4Cv/QVgEHJJOGoA8Ow/AKvCLQtHDAAHSfsfgC+Fmxee+JAB4PMSwEQAaNsz5zkANwi1PBwtAGj/A3CbUPPDEx8uAHzWpUDLANECgPY/AHcJswygAwAAAeeJJz5UAPi/LgVZBogUALT/AVAw6gAAQNyCMUoAyO0c7/4HYN05oxMAVP8AxNMLAG2w/g+AeSNYAMit/4lzGQAdgFgBQPsfgIcUj02HgAgB4NB5DMADNL0MECEA9M5hAMwfsQJAiEc5ANjaHNLsI+StBwDVPwDmkYABwPo/AOYRHQAAMI+0HgC8/hcAc0nQAAAAugDBAoD1fwDMJwEDQO+cBWADmuwotxoA8npN55wFQEEZKwBY/wdACAgYAHrnKgAKy3gB4EfnKgDmlXgBwBIAAOaVYAHABkAABICAAUD1D8A29AKADwgAXQABoDI/OEcBML/ECwCdcxQAHYB4AaB3jgIgAMQKAKp/ALblIDX01cACAAAE7AI88cEAQLxCs7UAcODcBEAAiBcAfAcAAOYZHQAAMM9ECAD2AACwTZ0AIJkBIAAIACZ/AIJoYr5pKQBo/wNgvgkYAACAgAHAEgAA5puAAcASAADmm4ABAAAQAAAAAQAAEAAAQAAAAEJ52tjfZ+4jBWDLFi38Jf7x6dMnHyUABGMJAAAEAABAAAAABAAAQAAAAAQAAEAAAAAEAABAAAAABAAAQAAAAAQAAEAAAAAEAABAAAAABAAAQAAAAAQAABAAAAABAAAQAAAAAQAAEAAAAAEAABAAAAABAAAQAAAAAQAAEAAAAAEAABAAAAABAAAQAAAAAQAAEAAAQAAAAAQAAEAAAAAEAABAAAAABAAAQAAAAAQAAEAAAAAEAABAAAAABAAAQAAAAAQAAGBN/xNgAGFNjNECk67MAAAAAElFTkSuQmCC",alt:n.name})}),Object(I.jsxs)("div",{className:"details",children:[Object(I.jsx)("h4",{children:"Name: "}),Object(I.jsx)("p",{children:n.name})]}),Object(I.jsxs)("div",{className:"details",id:"email",onClick:function(){document.location="mailto:".concat(n.email)},children:[Object(I.jsx)("h4",{children:"Email: "}),Object(I.jsx)("p",{children:n.email})]}),Object(I.jsxs)("div",{className:"details",children:[Object(I.jsx)("h4",{children:"Gender: "}),Object(I.jsx)("p",{children:n.gender})]}),Object(I.jsxs)("div",{className:"details",children:[Object(I.jsx)("h4",{children:"Age: "}),Object(I.jsx)("p",{children:n.age})]})]}),Object(I.jsx)("div",{className:"map-container",children:Object(I.jsx)(k,{location:n.location})}),Object(I.jsx)(i.b,{to:"/Moveo-test",className:"btn",children:"Go Back"})]})},Y=function(){return Object(I.jsx)(i.a,{children:Object(I.jsxs)(g.c,{children:[Object(I.jsx)(g.a,{path:"/Moveo-test",exact:!0,component:O}),Object(I.jsx)(g.a,{path:"/Moveo-test/:name",component:P})]})})};a.a.render(Object(I.jsx)(Y,{}),document.getElementById("root"))},66:function(A,e,t){}},[[107,1,2]]]);
//# sourceMappingURL=main.bad88685.chunk.js.map