import"./assets/modulepreload-polyfill-B5Qt9EMX.js";/* empty css                      */const s="feedback-form-state";let e={email:"",message:""};const l=window.localStorage,t=document.querySelector(".feedback-form"),m=t.elements.email,r=t.elements.message,o=l.getItem(s);o&&(e=JSON.parse(o),m.value=e.email,r.value=e.message);t.addEventListener("input",a=>{e[a.target.name]=a.target.value,l.setItem(s,JSON.stringify(e))});t.addEventListener("submit",a=>{a.preventDefault(),m.value&&r.value?(console.log(e),l.removeItem(s),e.email="",e.message="",t.reset()):window.alert("Fill please all fields")});
//# sourceMappingURL=2-form.js.map