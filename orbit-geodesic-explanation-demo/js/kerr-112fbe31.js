var KERR=function(t,i,h){var s=function(t){t=h.extend({},t),this.t=0,this.r=1,this.phi=0,this.theta=0,this.M=0,this.a=0,this.C=1,this.E=0,this.L=0,this.kappa=0,this.S=0};Object.defineProperties(s.prototype,{Delta:{get:function(){return this.r*this.r-2*this.M*this.r+this.a*this.a}},Sigma:{get:function(){var t=this.a*Math.cos(this.theta);return this.r*this.r+t*t}},Theta:{get:function(){var t=Math.cos(this.theta),i=this.L/Math.sin(this.theta);return this.C+t*t*((this.kappa+this.E*this.E)*this.a*this.a-i*i)}},R:{get:function(){var t=this.L-this.a*this.E,i=this.Delta*(-this.C+this.kappa*this.r*this.r-t*t),h=this.E*(this.r*this.r+this.a*this.a)-this.L*this.a;return i+h*h}}}),s.prototype.deriv=function(t){var i=[],h=(t[0],t[1],t[2],t[3],1/this.Sigma);i[0]=0,i[1]=h*Math.sqrt(this.Theta),i[2]=h*Math.sqrt(this.R),i[3]=0},s.prototype.integrate=function(){}}(window,document,jQuery);