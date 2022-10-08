(()=>{"use strict";var t=document.querySelector("#gameScreen"),e=t.getContext("2d");function i(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var r,s=function(){function r(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),n(this,"x",0),n(this,"y",t.height-227),n(this,"width",276),n(this,"height",227),n(this,"sX",0),n(this,"sY",0)}var s,h;return s=r,(h=[{key:"init",value:function(){this.spriteSheet=new Image,this.spriteSheet.src="assets/spritesheet.png"}},{key:"draw",value:function(){e.drawImage(this.spriteSheet,this.sX,this.sY,this.width,this.height,this.x,this.y,this.width,this.height),e.drawImage(this.spriteSheet,this.sX,this.sY,this.width,this.height,this.x+this.width,this.y,this.width,this.height),e.drawImage(this.spriteSheet,this.sX,this.sY,this.width,this.height,this.x+2*this.width,this.y,this.width,this.height)}}])&&i(s.prototype,h),Object.defineProperty(s,"prototype",{writable:!1}),r}();function h(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}!function(t){t[t.ready=0]="ready",t[t.start=1]="start",t[t.over=2]="over"}(r||(r={}));var a,o,u,c=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,i;return e=t,i=[{key:"setCurrent",value:function(t){this.current=t}}],null&&h(e.prototype,null),i&&h(e,i),Object.defineProperty(e,"prototype",{writable:!1}),t}();function l(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}a=c,o="current",u=r.ready,o in a?Object.defineProperty(a,o,{value:u,enumerable:!0,configurable:!0,writable:!0}):a[o]=u;var d=function(){function i(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),f(this,"x",0),f(this,"y",t.height-112),f(this,"sX",276),f(this,"sY",0),f(this,"width",224),f(this,"height",112),f(this,"xSpeed",2)}var n,s;return n=i,(s=[{key:"position",get:function(){return{x:this.x,y:this.y}}},{key:"init",value:function(){this.spriteSheet=new Image,this.spriteSheet.src="assets/spritesheet.png"}},{key:"draw",value:function(){e.drawImage(this.spriteSheet,this.sX,this.sY,this.width,this.height,this.x,this.y,this.width,this.height),e.drawImage(this.spriteSheet,this.sX,this.sY,this.width,this.height,this.x+this.width,this.y,this.width,this.height),e.drawImage(this.spriteSheet,this.sX,this.sY,this.width,this.height,this.x+2*this.width,this.y,this.width,this.height),e.drawImage(this.spriteSheet,this.sX,this.sY,this.width,this.height,this.x+3*this.width,this.y,this.width,this.height),e.drawImage(this.spriteSheet,this.sX,this.sY,this.width,this.height,this.x+4*this.width,this.y,this.width,this.height),e.drawImage(this.spriteSheet,this.sX,this.sY,this.width,this.height,this.x+5*this.width,this.y,this.width,this.height)}},{key:"update",value:function(){c.current!==r.over&&(this.x=(this.x-this.xSpeed)%(t.width/2))}}])&&l(n.prototype,s),Object.defineProperty(n,"prototype",{writable:!1}),i}();function p(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function y(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function g(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var w=function(){function i(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i)}var n,r;return n=i,r=[{key:"createGameObjects",value:function(t){var e,n;(e=i.gameObjects).push.apply(e,function(t){if(Array.isArray(t))return p(t)}(n=t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(n)||function(t,e){if(t){if("string"==typeof t)return p(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);return"Object"===i&&t.constructor&&(i=t.constructor.name),"Map"===i||"Set"===i?Array.from(t):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?p(t,e):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}())}},{key:"getGameObject",value:function(t){return this.gameObjects.find((function(e){return e instanceof t}))}},{key:"draw",value:function(){e.clearRect(0,0,t.width,t.height),i.gameObjects.forEach((function(t){return t.draw&&t.draw()}))}},{key:"update",value:function(){i.gameObjects.forEach((function(t){return t.update&&t.update()}))}},{key:"loop",value:function(){i.update(),i.draw(),i.framesCount++,requestAnimationFrame((function(){return i.loop()}))}},{key:"init",value:function(){i.gameObjects.forEach((function(t){return t.init&&t.init()})),i.loop()}}],null&&y(n.prototype,null),r&&y(n,r),Object.defineProperty(n,"prototype",{writable:!1}),i}();function b(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function v(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}g(w,"gameObjects",[]),g(w,"framesCount",0);var m=function(){function i(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),v(this,"width",34),v(this,"height",24),v(this,"gravity",.8),v(this,"mass",.3),v(this,"velocity",0),v(this,"flapImpulse",5),v(this,"angle",0),v(this,"angleSpeed",6),v(this,"angleLimit",60),v(this,"animationSpeed",4),v(this,"sprites",[{sX:276,sY:114},{sX:276,sY:140},{sX:276,sY:166},{sX:276,sY:140}]),v(this,"spriteIndex",0)}var n,s;return n=i,(s=[{key:"position",get:function(){return{x:this.x,y:this.y}}},{key:"scale",get:function(){return{width:this.width,height:this.height}}},{key:"init",value:function(){var e=this;this.spriteSheet=new Image,this.spriteSheet.src="assets/spritesheet.png",this.floor=w.getGameObject(d),this.y=t.height/3,window.outerWidth<=720?this.x=100:this.x=t.width/2,t.addEventListener("click",(function(){switch(c.current){case r.ready:c.current=r.start,t.parentElement.requestFullscreen(),e.flap();break;case r.start:e.flap()}})),window.addEventListener("resize",(function(){window.outerWidth<=720?e.x=100:e.x=t.width/2}))}},{key:"draw",value:function(){var t=this.sprites[this.spriteIndex],i=t.sX,n=t.sY,r=Math.PI*this.angle/180;e.save(),e.translate(this.x,this.y),e.rotate(r),e.drawImage(this.spriteSheet,i,n,this.width,this.height,-this.width/2,-this.height/2,this.width,this.height),e.restore()}},{key:"update",value:function(){this.checkFloorCollision(),this.velocity<0?this.angle=Math.max(-this.angleLimit,this.angle-this.angleSpeed):this.velocity>0&&(this.angle=Math.min(this.angleLimit,this.angle+this.angleSpeed)),c.current!==r.over&&(w.framesCount%this.animationSpeed==0&&this.spriteIndex++,this.spriteIndex=this.spriteIndex%this.sprites.length),this.y+=this.velocity}},{key:"applyGravity",value:function(){this.velocity+=this.gravity*this.mass}},{key:"flap",value:function(){this.velocity=-this.flapImpulse}},{key:"checkFloorCollision",value:function(){c.current!==r.ready&&(this.y+this.height>=this.floor.position.y?(c.setCurrent(r.over),this.die()):this.applyGravity())}},{key:"die",value:function(){this.y=this.floor.position.y-this.height/2,this.velocity=0,this.spriteIndex=0}}])&&b(n.prototype,s),Object.defineProperty(n,"prototype",{writable:!1}),i}();function x(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function k(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var O=function(){function i(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,i),k(this,"width",52),k(this,"height",400),k(this,"gap",85),k(this,"xSpeed",2),k(this,"pipesGenerationInterval",100),k(this,"instances",[]),k(this,"generationOriginX",t.width),k(this,"sprites",[{sX:502,sY:0},{sX:554,sY:0}])}var n,s;return n=i,(s=[{key:"init",value:function(){var e=this;this.spriteSheet=new Image,this.spriteSheet.src="assets/spritesheet.png",this.bird=w.getGameObject(m),window.outerWidth<=720&&(this.generationOriginX=t.width/2),window.addEventListener("resize",(function(){window.outerWidth<=720?e.generationOriginX=t.width/2:e.generationOriginX=t.width}))}},{key:"draw",value:function(){var t=this;this.instances.forEach((function(i){var n=t.sprites[0],r=t.sprites[1],s=i.y+t.height+t.gap;e.drawImage(t.spriteSheet,r.sX,r.sY,t.width,t.height,i.x,i.y,t.width,t.height),e.drawImage(t.spriteSheet,n.sX,n.sY,t.width,t.height,i.x,s,t.width,t.height)}))}},{key:"update",value:function(){var t=this;c.current===r.start&&this.generatePipes(),this.instances.forEach((function(e){c.current===r.start&&(e.x-=t.xSpeed),e.x<-t.width&&t.instances.shift(),e.x<t.bird.position.x+t.bird.scale.width/3&&e.x+t.width>t.bird.position.x&&(e.y+t.height>t.bird.position.y-t.bird.scale.height/2||e.y+t.height+t.gap<t.bird.position.y+t.bird.scale.height/2)&&c.setCurrent(r.over)}))}},{key:"generatePipes",value:function(){w.framesCount%this.pipesGenerationInterval==0&&this.instances.push({x:this.generationOriginX,y:Math.floor(200*Math.random()-325)})}}])&&x(n.prototype,s),Object.defineProperty(n,"prototype",{writable:!1}),i}();w.createGameObjects([new s,new m,new O,new d]),w.init()})();
//# sourceMappingURL=bundle.js.map