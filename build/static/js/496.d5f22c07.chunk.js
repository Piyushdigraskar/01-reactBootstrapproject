"use strict";(self.webpackChunkreact_complete_guide=self.webpackChunkreact_complete_guide||[]).push([[496],{496:(e,s,a)=>{a.r(s),a.d(s,{default:()=>H});var t=a(43),l=a(139),r=a.n(l),o=a(173),n=a.n(o),c=a(579);const i={type:n().string,tooltip:n().bool,as:n().elementType},d=t.forwardRef(((e,s)=>{let{as:a="div",className:t,type:l="valid",tooltip:o=!1,...n}=e;return(0,c.jsx)(a,{...n,ref:s,className:r()(t,"".concat(l,"-").concat(o?"tooltip":"feedback"))})}));d.displayName="Feedback",d.propTypes=i;const m=d,f=t.createContext({});var u=a(852);const p=t.forwardRef(((e,s)=>{let{id:a,bsPrefix:l,className:o,type:n="checkbox",isValid:i=!1,isInvalid:d=!1,as:m="input",...p}=e;const{controlId:x}=(0,t.useContext)(f);return l=(0,u.oU)(l,"form-check-input"),(0,c.jsx)(m,{...p,ref:s,type:n,id:a||x,className:r()(o,l,i&&"is-valid",d&&"is-invalid")})}));p.displayName="FormCheckInput";const x=p,b=t.forwardRef(((e,s)=>{let{bsPrefix:a,className:l,htmlFor:o,...n}=e;const{controlId:i}=(0,t.useContext)(f);return a=(0,u.oU)(a,"form-check-label"),(0,c.jsx)("label",{...n,ref:s,htmlFor:o||i,className:r()(l,a)})}));b.displayName="FormCheckLabel";const h=b;const y=t.forwardRef(((e,s)=>{let{id:a,bsPrefix:l,bsSwitchPrefix:o,inline:n=!1,reverse:i=!1,disabled:d=!1,isValid:p=!1,isInvalid:b=!1,feedbackTooltip:y=!1,feedback:N,feedbackType:v,className:j,style:w,title:F="",type:I="checkbox",label:g,children:k,as:C="input",...R}=e;l=(0,u.oU)(l,"form-check"),o=(0,u.oU)(o,"form-switch");const{controlId:P}=(0,t.useContext)(f),L=(0,t.useMemo)((()=>({controlId:a||P})),[P,a]),U=!k&&null!=g&&!1!==g||function(e,s){return t.Children.toArray(e).some((e=>t.isValidElement(e)&&e.type===s))}(k,h),S=(0,c.jsx)(x,{...R,type:"switch"===I?"checkbox":I,ref:s,isValid:p,isInvalid:b,disabled:d,as:C});return(0,c.jsx)(f.Provider,{value:L,children:(0,c.jsx)("div",{style:w,className:r()(j,U&&l,n&&"".concat(l,"-inline"),i&&"".concat(l,"-reverse"),"switch"===I&&o),children:k||(0,c.jsxs)(c.Fragment,{children:[S,U&&(0,c.jsx)(h,{title:F,children:g}),N&&(0,c.jsx)(m,{type:v,tooltip:y,children:N})]})})})}));y.displayName="FormCheck";const N=Object.assign(y,{Input:x,Label:h});a(440);const v=t.forwardRef(((e,s)=>{let{bsPrefix:a,type:l,size:o,htmlSize:n,id:i,className:d,isValid:m=!1,isInvalid:p=!1,plaintext:x,readOnly:b,as:h="input",...y}=e;const{controlId:N}=(0,t.useContext)(f);return a=(0,u.oU)(a,"form-control"),(0,c.jsx)(h,{...y,type:l,size:n,ref:s,readOnly:b,id:i||N,className:r()(d,x?"".concat(a,"-plaintext"):a,o&&"".concat(a,"-").concat(o),"color"===l&&"".concat(a,"-color"),m&&"is-valid",p&&"is-invalid")})}));v.displayName="FormControl";const j=Object.assign(v,{Feedback:m}),w=t.forwardRef(((e,s)=>{let{className:a,bsPrefix:t,as:l="div",...o}=e;return t=(0,u.oU)(t,"form-floating"),(0,c.jsx)(l,{ref:s,className:r()(a,t),...o})}));w.displayName="FormFloating";const F=w,I=t.forwardRef(((e,s)=>{let{controlId:a,as:l="div",...r}=e;const o=(0,t.useMemo)((()=>({controlId:a})),[a]);return(0,c.jsx)(f.Provider,{value:o,children:(0,c.jsx)(l,{...r,ref:s})})}));I.displayName="FormGroup";const g=I;var k=a(602);const C=t.forwardRef(((e,s)=>{let{as:a="label",bsPrefix:l,column:o=!1,visuallyHidden:n=!1,className:i,htmlFor:d,...m}=e;const{controlId:p}=(0,t.useContext)(f);l=(0,u.oU)(l,"form-label");let x="col-form-label";"string"===typeof o&&(x="".concat(x," ").concat(x,"-").concat(o));const b=r()(i,l,n&&"visually-hidden",o&&x);return d=d||p,o?(0,c.jsx)(k.A,{ref:s,as:"label",className:b,htmlFor:d,...m}):(0,c.jsx)(a,{ref:s,className:b,htmlFor:d,...m})}));C.displayName="FormLabel";const R=C,P=t.forwardRef(((e,s)=>{let{bsPrefix:a,className:l,id:o,...n}=e;const{controlId:i}=(0,t.useContext)(f);return a=(0,u.oU)(a,"form-range"),(0,c.jsx)("input",{...n,type:"range",ref:s,className:r()(l,a),id:o||i})}));P.displayName="FormRange";const L=P,U=t.forwardRef(((e,s)=>{let{bsPrefix:a,size:l,htmlSize:o,className:n,isValid:i=!1,isInvalid:d=!1,id:m,...p}=e;const{controlId:x}=(0,t.useContext)(f);return a=(0,u.oU)(a,"form-select"),(0,c.jsx)("select",{...p,size:o,ref:s,className:r()(n,a,l&&"".concat(a,"-").concat(l),i&&"is-valid",d&&"is-invalid"),id:m||x})}));U.displayName="FormSelect";const S=U,T=t.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,as:l="small",muted:o,...n}=e;return a=(0,u.oU)(a,"form-text"),(0,c.jsx)(l,{...n,ref:s,className:r()(t,a,o&&"text-muted")})}));T.displayName="FormText";const E=T,z=t.forwardRef(((e,s)=>(0,c.jsx)(N,{...e,ref:s,type:"switch"})));z.displayName="Switch";const O=Object.assign(z,{Input:N.Input,Label:N.Label}),V=t.forwardRef(((e,s)=>{let{bsPrefix:a,className:t,children:l,controlId:o,label:n,...i}=e;return a=(0,u.oU)(a,"form-floating"),(0,c.jsxs)(g,{ref:s,className:r()(t,a),controlId:o,...i,children:[l,(0,c.jsx)("label",{htmlFor:o,children:n})]})}));V.displayName="FloatingLabel";const G=V,_={_ref:n().any,validated:n().bool,as:n().elementType},A=t.forwardRef(((e,s)=>{let{className:a,validated:t,as:l="form",...o}=e;return(0,c.jsx)(l,{...o,ref:s,className:r()(a,t&&"was-validated")})}));A.displayName="Form",A.propTypes=_;const M=Object.assign(A,{Group:g,Control:j,Floating:F,Check:N,Switch:O,Label:R,Text:E,Range:L,Select:S,FloatingLabel:G});var D=a(282);const H=e=>{const s=(0,t.useRef)(),a=(0,t.useRef)(),l=(0,t.useRef)();return(0,c.jsxs)(M,{onSubmit:t=>{t.preventDefault();const r={name:s.current.value,email:a.current.value,phone:l.current.value};console.log(r),e.onAdd(r),s.current.value="",a.current.value="",l.current.value=""},children:[(0,c.jsxs)(M.Group,{className:"mb-3",children:[(0,c.jsx)(M.Label,{children:"Name"}),(0,c.jsx)(M.Control,{type:"text",placeholder:"Enter Name",ref:s})]}),(0,c.jsxs)(M.Group,{className:"mb-3",children:[(0,c.jsx)(M.Label,{children:"Email address"}),(0,c.jsx)(M.Control,{type:"email",placeholder:"Enter Email",ref:a})]}),(0,c.jsxs)(M.Group,{className:"mb-3",children:[(0,c.jsx)(M.Label,{children:"Email address"}),(0,c.jsx)(M.Control,{type:"tel",placeholder:"Enter Phone Number",ref:l})]}),(0,c.jsx)(D.A,{variant:"primary",type:"submit",children:"submit"})]})}}}]);
//# sourceMappingURL=496.d5f22c07.chunk.js.map