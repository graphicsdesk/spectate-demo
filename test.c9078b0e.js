parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"c36W":[function(require,module,exports) {
var t=d3.select("svg"),a=+t.attr("width"),r=+t.attr("height"),n=100,e=-70,c=40,d=50,i=20,p=-70,o=t.append("g").attr("transform","translate(".concat(a/2,", ").concat(r/2,")")),s=o.append("circle").attr("r",200).attr("fill","yellow").attr("stroke","black"),l=o.append("g").attr("transform","translate(0, ".concat(e,")")),h=l.append("circle").attr("r",c).attr("cx",-n),g=l.append("circle").attr("r",c).attr("cx",+n),f=l.append("g").attr("transform","translate(0, ".concat(p,")"));f.transition().duration(2e3).attr("transform","translate(0, ".concat(p-30,")")).transition().duration(2e3).attr("transform","translate(0, ".concat(p,")"));var m=f.append("rect").attr("x",-n-d/2).attr("width",d).attr("height",i),u=f.append("rect").attr("x",+n-d/2).attr("width",d).attr("height",i),w=o.append("path").attr("d",d3.arc()({innerRadius:90,outerRadius:100,startAngle:Math.PI/2,endAngle:1.5*Math.PI}));
},{}]},{},["c36W"], "script")
//# sourceMappingURL=https://spectator-static-assets.s3.amazonaws.com/spectate-demo/test.c9078b0e.js.map