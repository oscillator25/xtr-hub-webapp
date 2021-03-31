(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{164:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return d}));var n=a(2),r=a(9),i=(a(0),a(203)),o={id:"machine-learning",title:"Develop Machine Learning model",sidebar_label:"Develop Machine Learning model"},c={id:"machine-learning",title:"Develop Machine Learning model",description:"Problem description",source:"@site/docs/machine-learning.md",permalink:"/docs/machine-learning",editUrl:"https://github.com/openeew/openeew-docs/edit/master/docs/machine-learning.md",sidebar_label:"Develop Machine Learning model",sidebar:"someSidebar",previous:{title:"Analyze OpenEEW data",permalink:"/docs/analyze-historic"},next:{title:"Predict user intensity",permalink:"/docs/intensity-prediction"}},s=[{value:"Problem description",id:"problem-description",children:[]},{value:"What is the goal?",id:"what-is-the-goal",children:[{value:"Establish an earthquake has occured",id:"establish-an-earthquake-has-occured",children:[]},{value:"Locate earthquake or get distance from sensor",id:"locate-earthquake-or-get-distance-from-sensor",children:[]},{value:"Determine magnitude of earthquake",id:"determine-magnitude-of-earthquake",children:[]}]},{value:"Features",id:"features",children:[{value:"Labelling earthquakes",id:"labelling-earthquakes",children:[]},{value:"Performance metric",id:"performance-metric",children:[]}]},{value:"Reference projects",id:"reference-projects",children:[]}],l={rightToc:s};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"problem-description"},"Problem description"),Object(i.b)("p",null,"Machine learning could offer significant improvements to OpenEEW earthquake detection in terms of accuracy (less false positives/negatives) and speed (less stations required for confirmation of event)."),Object(i.b)("p",null,"OpenEEW sensors have been transmitting unprocessed data to the cloud since 2017 in Mexico, and captured hundreds of earthquakes including several of magnitude 6 and 7. A model trained on ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/historic-data/"}),"this data")," could be deployed on OpenEEW networks around the world (this is not a theoretical exercise!) and save many lives."),Object(i.b)("h2",{id:"what-is-the-goal"},"What is the goal?"),Object(i.b)("p",null,"To rapidly characterize the earthquake, ideally within a few seconds of the seismic waves reaching the sensor. Large earthquakes can last for a minute or more so we can't wait for the event to pass. It could be that the model is constantly updating its output so that more accurate estimates are being transmitted to nearby populations as the event goes on."),Object(i.b)("h3",{id:"establish-an-earthquake-has-occured"},"Establish an earthquake has occured"),Object(i.b)("p",null,"Initially, a model should be able to determine if an earthquake is occuring in the accelerometer data. It should know that the accelerations are caused by a seismic event and not, say, a truck passing by."),Object(i.b)("p",null,"The start of the earthquake should determined from the start of the P-wave (initial wave)."),Object(i.b)("h3",{id:"locate-earthquake-or-get-distance-from-sensor"},"Locate earthquake or get distance from sensor"),Object(i.b)("p",null,"The next challenge is to determine where it is coming from. This distance will be used in the next step."),Object(i.b)("h3",{id:"determine-magnitude-of-earthquake"},"Determine magnitude of earthquake"),Object(i.b)("p",null,"Finally, we should find the magnitude of the earthquake. For this we can use this equation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),"M = 1.23xlog10(Pd) + 1.38xlog10(R) + 5.39\n")),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"M")," = Magnitude\n",Object(i.b)("inlineCode",{parentName:"p"},"Pd")," = Peak amplitude of the P-wave in centimeters\n",Object(i.b)("inlineCode",{parentName:"p"},"R")," = distance of earthquake from the station"),Object(i.b)("h2",{id:"features"},"Features"),Object(i.b)("p",null,"The dataset consists of 1 second records of accelerations from each sensor, sent every second. These records contain:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'{\n  "country_code": "mx",\n  "device_id": "008",\n  "x": [2.723, 2.293, 2.75, ...],\n  "y": [3.134, 1.686, -4.081, ...],\n  "z": [10.636, 13.891, 13.084, ...],\n  "device_t": 1518824421.406,\n  "cloud_t": 1518824421.398,\n  "sr": 31.25\n}\n')),Object(i.b)("p",null,"Each device also has a fixed location. You can query the latitude and longitude for each ",Object(i.b)("inlineCode",{parentName:"p"},"device_id")," from the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://grillo-openeew.s3.amazonaws.com/sensor_locations.csv"}),"locations file")," in the registry."),Object(i.b)("h3",{id:"labelling-earthquakes"},"Labelling earthquakes"),Object(i.b)("p",null,"You can label seismic events in the dataset by cross-referencing with the Mexican Seismological Agency (SSN), which has a very good catalog that can be ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://www2.ssn.unam.mx:8080/catalogo/"}),"downloaded as a CSV file"),"."),Object(i.b)("p",null,"Please note that whilst very good, this catalog is not complete as small events can be missed, for example during vigorous aftershock sequences."),Object(i.b)("h3",{id:"performance-metric"},"Performance metric"),Object(i.b)("h2",{id:"reference-projects"},"Reference projects"),Object(i.b)("p",null,"Obspy - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.obspy.org/tutorial/code_snippets/trigger_tutorial.html"}),"Picking/Triggering with python library")),Object(i.b)("p",null,"CQSRG - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"http://cqsrg.org/oem/earthquakelocation/"}),"Locating an earthquake")),Object(i.b)("p",null,"Isaac Kim - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://towardsdatascience.com/earthquake-prediction-faffd7160f98"}),"Fast P-wave detection")),Object(i.b)("p",null,"H.Serdar Kuyuk - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.sciencedirect.com/science/article/pii/S1877050918319896"}),"Real-time classification of earthquake using deep learning")),Object(i.b)("p",null,"Zachary Ross - ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/interseismic"}),"Phase detection")),Object(i.b)("hr",null),Object(i.b)("img",{src:"/docs/nvidia.png",alt:"sensor",width:"200"}),Object(i.b)("p",null,"As a member of the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.nvidia.com/en-us/deep-learning-ai/startups/"}),"NVIDIA Inception")," program, we are able to support promising advances with ML and OpenEEW data with access to GPU cloud virtual machines. Please write to use at ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"mailto:hello@openeew.com"}),"hello@openeew.com")," if you are interested in applying."))}d.isMDXComponent=!0},203:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return b}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(a),h=n,b=u["".concat(o,".").concat(h)]||u[h]||p[h]||i;return a?r.a.createElement(b,c(c({ref:t},l),{},{components:a})):r.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"}}]);