(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,function(t,e,a){t.exports={form:"ContactForm_form__1MhkI",label:"ContactForm_label__3cZLA",input:"ContactForm_input__2DTli",button:"ContactForm_button__1m3pe"}},function(t,e,a){t.exports={container:"ContactList_container__GjokZ",button:"ContactList_button__1LC0J",item:"ContactList_item__2aj4p",span:"ContactList_span__8XCfh"}},,,,,function(t,e,a){t.exports={container:"App_container__2ilbd",title:"App_title__veyJG"}},function(t,e,a){t.exports={container:"Filter_container__2Ml4u",input:"Filter_input___aZTP"}},,,,,function(t,e,a){t.exports=a(18)},,,,,function(t,e,a){"use strict";a.r(e);var n=a(0),c=a.n(n),r=a(10),o=a.n(r),l=a(12),i=a(3),s=a(4),u=a(6),m=a(5),p=a(20),b=a(7),f=a.n(b),h=a(11),_=a(1),v=a.n(_),C=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleOnChange=function(e){var a=e.target,n=a.value,c=a.name;t.setState(Object(h.a)({},c,n))},t.handleSubmit=function(e){var a=t.state,n=a.name,c=a.number;e.preventDefault(),t.props.createContact(n,c),t.setState({name:""})},t}return Object(s.a)(a,[{key:"render",value:function(){var t=v.a.form,e=v.a.label,a=v.a.input,n=v.a.button,r=this.state,o=r.name,l=r.number;return c.a.createElement("form",{className:t,onSubmit:this.handleSubmit},c.a.createElement("label",{className:e},"Name",c.a.createElement("input",{className:a,type:"text",name:"name",onChange:this.handleOnChange,value:o,placeholder:"Enter name",required:!0})),c.a.createElement("label",{className:e},"Number",c.a.createElement("input",{className:a,type:"number",name:"number",onChange:this.handleOnChange,value:l,placeholder:"Enter number",required:!0})),c.a.createElement("button",{className:n,type:"submit"}," Add contact"))}}]),a}(n.Component),d=a(2),E=a.n(d),N=function(t){var e=t.contacts,a=t.onRemoveContact,n=E.a.container,r=E.a.button,o=E.a.item,l=E.a.span;return c.a.createElement(c.a.Fragment,null,e.map((function(t){return c.a.createElement("ul",{key:t.id,className:n},c.a.createElement("li",{className:o},c.a.createElement("span",{className:l},"Name:")," ",t.name),c.a.createElement("li",{className:o},c.a.createElement("span",{className:l},"Ph.")," ",t.number),c.a.createElement("button",{className:r,type:"button",onClick:function(){return a(t.id)}}))})))},y=a(8),g=a.n(y),F=function(t){var e=t.value,a=t.onFilter,n=g.a.container,r=g.a.input;return c.a.createElement("div",{className:n},c.a.createElement("p",null,"Find conctact by name"),c.a.createElement("input",{className:r,type:"text",onChange:function(t){return a(t.target.value)},value:e}))},O=function(t){Object(u.a)(a,t);var e=Object(m.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.removeContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t.addContact=function(e,a){var n={id:Object(p.a)(),name:e,number:a};t.state.contacts.some((function(t){return t.name===n.name}))?alert("".concat(n.name," is already in contacts ")):t.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[n])}}))},t.changeFilter=function(e){t.setState({filter:e})},t.getVisibleFilter=function(){return t.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t.state.filter.toLocaleLowerCase())}))},t}return Object(s.a)(a,[{key:"render",value:function(){var t=this.state.filter,e=f.a.container,a=f.a.title;return c.a.createElement("section",{className:e},c.a.createElement("h2",{className:a},"Phonebook"),c.a.createElement(C,{createContact:this.addContact}),c.a.createElement("h2",{className:a},"Contacts"),c.a.createElement(N,{onRemoveContact:this.removeContact,contacts:this.getVisibleFilter()}),c.a.createElement(F,{value:t,onFilter:this.changeFilter}))}}]),a}(n.Component);o.a.render(c.a.createElement(O,null),document.getElementById("root"))}],[[13,1,2]]]);
//# sourceMappingURL=main.6bdc37e2.chunk.js.map