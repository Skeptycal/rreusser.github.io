window.ART=window.ART||{},window.ART.Ball=function(){var t=function(t){var e,a=this,o=$.extend({width:400,height:400,color:"#fff",fill:.9},t);a.initialize=function(){e=new CTK.OffscreenCanvas({width:o.width,height:o.height}),a.canvas=e.canvas,a.draw()},a.draw=function(){var t=e.ctx;t.save(),t.fillStyle=o.color,t.beginPath();var a=0,r=0;o.position.match(/left/)&&(r-=.5*o.width),o.position.match(/right/)&&(r+=.5*o.width),o.position.match(/bottom/)&&(a+=.5*o.height),o.position.match(/top/)&&(a-=.5*o.height),t.arc(.5*o.width+r,.5*o.height+a,.5*o.width*o.fill,0,2*Math.PI),t.fill(),t.restore()},a.resize=function(t,r){o.width=t,o.height=r,e.resizeCanvas(t,r),a.draw()},a.initialize()},e=function(a){var o,r,i,n=this,s=[];n.setBounds=function(t){n.left=t.left,n.top=t.top,n.width=t.width,n.height=t.height,n.cx=t.left+.5*t.width,n.cy=t.top+.5*t.height,n.radius=.9*(.5*n.width-10)},n.randomColors=function(){return[Math.floor(3*Math.random()),Math.floor(3*Math.random()),Math.floor(3*Math.random()),Math.floor(3*Math.random())]},n.initialize=function(){var e=$.extend({},a);o=e.size,r=e.fill||(o-2)/o,s=e.colors||n.randomColors(),i=new CTK.OffscreenCanvas({width:o,height:o}),n.whiteArc=new t({width:o,height:o/2,position:"center bottom",fill:r,color:"#fff"}),n.blackArc=new t({width:o,height:o/2,position:"center bottom",fill:r,color:"rgba(83,105,134,1)"})},n.initialize(),n.draw=function(t,a){var o,r,s,h,c,l,d,g,f,u,w,m,b,v,p,k=t.ctx;k.save(),v=i.ctx,p=i.canvas,s=n.whiteArc.canvas.width,h=n.whiteArc.canvas.height,c=p.width,l=p.height,g=c/s,f=n.simplifyFaces(e.getFrontFacingQuadrants(a.t));var M=["destination-out","source-over"],C=[n.whiteArc.canvas,n.blackArc.canvas],I=(c+1)/c;for(a.debug&&(a.debug[0]&&a.debug[0].clear(),a.debug[1]&&a.debug[1].clear()),a.stroke&&(v.lineWidth=3),j=0;2>j;j++)for(k.globalCompositeOperation=M[j],source=C[j],o=f[j].length-1;o>=0;o--)d=f[j][o],u=d[1],w=d[2],v.setTransform(1,0,0,1,0,0),v.clearRect(0,0,c,l),1>w?(r=Math.sin(.5*Math.PI*(1-w)),v.setTransform(g,0,0,-g,.5*h*g,h*g),v.globalCompositeOperation="source-over",v.drawImage(source,.5*-h,-h),a.stroke&&(v.strokeStyle="blue",v.beginPath(),v.rect(.5*-h,-h,2*h,h),v.stroke()),v.scale(I,I*r),a.stroke&&(v.strokeStyle="red",v.beginPath(),v.rect(.5*-h,-h,2*h,h),v.stroke()),v.globalCompositeOperation="destination-out",v.drawImage(n.blackArc.canvas,.5*-h*I,-h)):u>1?(r=Math.sin(.5*Math.PI*(-1+u)),v.setTransform(g,0,0,g,.5*h*g,h*g),v.globalCompositeOperation="source-over",v.drawImage(source,.5*-h,-h),a.stroke&&(v.strokeStyle="blue",v.beginPath(),v.rect(.5*-h,-h,2*h,h),v.stroke()),v.scale(I,I*r),a.stroke&&(v.strokeStyle="red",v.beginPath(),v.rect(.5*-h,-h,2*h,h),v.stroke()),v.globalCompositeOperation="destination-out",v.drawImage(n.blackArc.canvas,.5*-h*I,-h)):(v.globalCompositeOperation="source-over",m=Math.sin(.5*Math.PI*(-1+u)),v.setTransform(g,0,0,g*m,0,h*g),v.drawImage(source,0,-h),a.stroke&&(v.strokeStyle="blue",v.beginPath(),v.rect(0,-h,2*h,h),v.stroke()),b=Math.sin(.5*Math.PI*(1-w)),v.setTransform(g,0,0,-g*b,0,h*g),v.drawImage(source,0,-h),a.stroke&&(v.strokeStyle="blue",v.beginPath(),v.rect(0,-h,2*h,h),v.stroke())),k.drawImage(p,0,0),a.debug&&a.debug[j]&&a.debug[j].ctx.drawImage(p,0,0);k.restore()},n.simplifyFaces=function(t){var e,a,o,r=t.length,i=[t[0].slice(0)],n=[],h=[];for(e=0;r-1>e;e++)s[t[e][0]]==s[t[e+1][0]]?i[i.length-1][2]=t[e+1][2]:i.push(t[e+1].slice(0));for(e=0;e<i.length;e++)switch(o=i[e],a=s[o[0]]){case 0:h.push(o);break;case 2:n.push(o)}return[n,h]}};return e.getFrontFacingQuadrants=function(t){var e,a,o,r,i,n=[];i=4*t;for(var a=0;3>a;a++)e=Math.floor(i+a),o=Math.min(2,Math.max(0,e-i)),r=Math.min(2,Math.max(0,e+1-i)),r>o&&n.push([(e+4)%4,o,r]);return n},e}();