(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("zTTH"),a("3nLz");var i=a("TqRt");t.__esModule=!0,t.default=void 0;var r,n=i(a("PJYZ")),s=i(a("VbXa")),o=i(a("8OQS")),d=i(a("pVnL")),l=i(a("q1tI")),u=i(a("17x9")),c=function(e){var t=(0,d.default)({},e),a=t.resolutions,i=t.sizes,r=t.critical;return a&&(t.fixed=a,delete t.resolutions),i&&(t.fluid=i,delete t.sizes),r&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(b&&!!window.matchMedia(t).matches)},A=function(e){var t=e.fluid,a=e.fixed;return g(t||a).src},g=function(e){if(b&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),p=function(e){var t=c(e),a=A(t);return h[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,b="undefined"!=typeof window,E=b&&window.IntersectionObserver,v=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},i&&l.default.createElement("source",{type:"image/webp",media:r,srcSet:i,sizes:n}),l.default.createElement("source",{media:r,srcSet:a,sizes:n}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function w(e){return e.map((function(e){var t=e.src,a=e.media,i=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,i=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:i})}))}function B(e,t){var a=e.srcSet,i=e.srcSetWebp,r=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(r?'media="'+r+'" ':"")+'srcset="'+(t?i:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var j=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),r);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},x=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSet?'srcset="'+e.srcSet+'" ':"",r=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?B(e,!0):"")+B(e)})).join("")+"<img "+l+s+o+a+i+t+n+r+d+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=l.default.forwardRef((function(e,t){var a=e.src,i=e.imageVariants,r=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(N,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return i.length>1?l.default.createElement("picture",null,r(i),o):o})),N=l.default.forwardRef((function(e,t){var a=e.sizes,i=e.srcSet,r=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,A=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":A,sizes:a,srcSet:i,src:r},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));N.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var L=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=b&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&E&&!a.isCritical&&!a.seenBefore;var i=a.isCritical||b&&(m||!a.useIOSupport);return a.state={isVisible:i,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=j(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=c(e),a=A(t),h[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=c(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,A=e.placeholderClassName,h=e.fluid,p=e.fixed,m=e.backgroundColor,b=e.durationFadeIn,E=e.Tag,v=e.itemProp,y=e.loading,B=e.draggable,j=!1===this.state.fadeIn||this.state.imgLoaded,L=!0===this.state.fadeIn&&!this.state.imgCached,O=(0,d.default)({opacity:j?1:0,transition:L?"opacity "+b+"ms":"none"},o),z="boolean"==typeof m?"lightgray":m,C={transitionDelay:b+"ms"},Q=(0,d.default)((0,d.default)((0,d.default)({opacity:this.state.imgLoaded?0:1},L&&C),o),f),k={title:t,alt:this.state.isVisible?"":a,style:Q,className:A,itemProp:v};if(h){var V=h,P=g(h);return l.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:P.maxWidth?P.maxWidth+"px":null,maxHeight:P.maxHeight?P.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(P.srcSet)},l.default.createElement(E,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/P.aspectRatio+"%"}}),z&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:z,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},L&&C)}),P.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:P.base64,spreadProps:k,imageVariants:V,generateSources:I}),P.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:P.tracedSVG,spreadProps:k,imageVariants:V,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(V),l.default.createElement(N,{alt:a,title:t,sizes:P.sizes,src:P.src,crossOrigin:this.props.crossOrigin,srcSet:P.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:B})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)((0,d.default)({alt:a,title:t,loading:y},P),{},{imageVariants:V}))}}))}if(p){var W=p,D=g(p),M=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:D.width,height:D.height},n);return"inherit"===n.display&&delete M.display,l.default.createElement(E,{className:(i||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(D.srcSet)},z&&l.default.createElement(E,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:z,width:D.width,opacity:this.state.imgLoaded?0:1,height:D.height},L&&C)}),D.base64&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:D.base64,spreadProps:k,imageVariants:W,generateSources:I}),D.tracedSVG&&l.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:D.tracedSVG,spreadProps:k,imageVariants:W,generateSources:w}),this.state.isVisible&&l.default.createElement("picture",null,S(W),l.default.createElement(N,{alt:a,title:t,width:D.width,height:D.height,sizes:D.sizes,src:D.src,crossOrigin:this.props.crossOrigin,srcSet:D.srcSet,style:O,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:y,draggable:B})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:x((0,d.default)((0,d.default)({alt:a,title:t,loading:y},D),{},{imageVariants:W}))}}))}return null},t}(l.default.Component);L.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),z=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});L.propTypes={resolutions:O,sizes:z,fixed:u.default.oneOfType([O,u.default.arrayOf(O)]),fluid:u.default.oneOfType([z,u.default.arrayOf(z)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var C=L;t.default=C},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("q1tI"),r=a.n(i),n=a("Bl7J"),s=(a("3nLz"),a("jaFH")),o=a("9eSz"),d=a.n(o),l=function(){var e=s.data;return r.a.createElement(d.a,{fixed:e.placeholderImage.childImageSharp.fixed})},u=a("vrFN"),c=a("UaDE");t.default=function(){return r.a.createElement(n.a,null,r.a.createElement(u.a,{title:"Home"}),r.a.createElement("div",{className:"photo"},r.a.createElement(l,null)),r.a.createElement(c.a,null),r.a.createElement("h1",null,"Web Developer"),r.a.createElement("h2",null,"Hello, I am Gabriel Jony!"),r.a.createElement("section",null,r.a.createElement("p",null,"I'm a Web Developer, I work with Full-Stack creating apps and web pages. I participate in events about technology and I like to study productivity and communication, it helps me stay organized and collaborative."),r.a.createElement("p",null,"I develop projects mainly with JavaScript using React, Vue, Angular and Node. I have great knowledge in the Java language, with the Spring Boot. Skills with Mysql Database, Postegre and Oracle.")))}},SGlo:function(e,t,a){"use strict";var i=a("rj/q"),r=a("N+BI").getWeak,n=a("1a8y"),s=a("BjK0"),o=a("xa9o"),d=a("yde8"),l=a("Wadk"),u=a("qDzq"),c=a("O1i0"),f=l(5),A=l(6),g=0,h=function(e){return e._l||(e._l=new p)},p=function(){this.a=[]},m=function(e,t){return f(e.a,(function(e){return e[0]===t}))};p.prototype={get:function(e){var t=m(this,e);if(t)return t[1]},has:function(e){return!!m(this,e)},set:function(e,t){var a=m(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=A(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var l=e((function(e,i){o(e,l,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=i&&d(i,a,e[n],e)}));return i(l.prototype,{delete:function(e){if(!s(e))return!1;var a=r(e);return!0===a?h(c(this,t)).delete(e):a&&u(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=r(e);return!0===a?h(c(this,t)).has(e):a&&u(a,this._i)}}),l},def:function(e,t,a){var i=r(n(t),!0);return!0===i?h(e).set(t,a):i[e._i]=a,e},ufstore:h}},eMsz:function(e,t,a){"use strict";var i,r=a("emib"),n=a("Wadk")(0),s=a("IYdN"),o=a("N+BI"),d=a("k5Iv"),l=a("SGlo"),u=a("BjK0"),c=a("O1i0"),f=a("O1i0"),A=!r.ActiveXObject&&"ActiveXObject"in r,g=o.getWeak,h=Object.isExtensible,p=l.ufstore,m=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},b={get:function(e){if(u(e)){var t=g(e);return!0===t?p(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(c(this,"WeakMap"),e,t)}},E=e.exports=a("94Pd")("WeakMap",m,b,l,!0,!0);f&&A&&(d((i=l.getConstructor(m,"WeakMap")).prototype,b),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=E.prototype,a=t[e];s(t,e,(function(t,r){if(u(t)&&!h(t)){this._f||(this._f=new i);var n=this._f[e](t,r);return"set"==e?this:n}return a.call(this,t,r)}))})))},jaFH:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAIDBQT/xAAWAQEBAQAAAAAAAAAAAAAAAAACAQP/2gAMAwEAAhADEAAAAcbuo0CslJDZYaSIyf8A/8QAGhAAAQUBAAAAAAAAAAAAAAAAAgABAxIhBP/aAAgBAQABBQKMbHJDRlzZJ0GiwketVib/xAAVEQEBAAAAAAAAAAAAAAAAAAABIP/aAAgBAwEBPwEj/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQIBAT8BY//EABwQAAICAgMAAAAAAAAAAAAAAAABAhEQEjFBUf/aAAgBAQAGPwJIvfa8c0KHveYibP/EABsQAQADAAMBAAAAAAAAAAAAAAEAESExQVGx/9oACAEBAAE/IWIs9fIdOyLWY1r+ypUrlrubjiBwzZTUSdlqn//aAAwDAQACAAMAAAAQoDjC/8QAGREAAgMBAAAAAAAAAAAAAAAAABEBECFB/9oACAEDAQE/EEWiJ5X/xAAXEQEBAQEAAAAAAAAAAAAAAAAAEQEx/9oACAECAQE/EKRnNV//xAAbEAEBAAMAAwAAAAAAAAAAAAABEQAhMUFRcf/aAAgBAQABPxB4SGgcYuiOgNzo36Y7RFe3Ftg03noPovnEVH4BAOj5cDotrHAkN5AxSM2xhjTNyo9imf/Z","width":125,"height":125,"src":"/static/c2c23fd5997cd511f238badb9de1b67a/bac10/gabriel.jpg","srcSet":"/static/c2c23fd5997cd511f238badb9de1b67a/bac10/gabriel.jpg 1x,\\n/static/c2c23fd5997cd511f238badb9de1b67a/1b59b/gabriel.jpg 1.5x,\\n/static/c2c23fd5997cd511f238badb9de1b67a/034c8/gabriel.jpg 2x"}}}}}')},"t+fG":function(e,t,a){var i=a("P8UN"),r=a("96qb"),n=a("ap2Z"),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},zTTH:function(e,t,a){"use strict";var i=a("P8UN"),r=a("Wadk")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),i(i.P+i.F*s,"Array",{findIndex:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),a("Dq1/")(n)}}]);
//# sourceMappingURL=component---src-pages-index-js-3a24af4b6eb73e7de25d.js.map