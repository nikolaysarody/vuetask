(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d21a747"],{bc1a:function(t,e,i){"use strict";i.r(e);var u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"form",on:{submit:function(e){return e.preventDefault(),t.clickHandler(e)}}},[i("h3",[t._v("Паспорт")]),i("input-select",{attrs:{"title-name":"Тип документа","title-id":"type",items:t.type,"is-required":!0,click:t.click},on:{required:t.currentValue}}),i("input-text",{attrs:{"title-name":"Серия","title-id":"series","is-required":!1}}),i("input-text",{attrs:{"title-name":"Номер","title-id":"number","is-required":!1}}),i("input-text",{attrs:{"title-name":"Кем выдан","title-id":"issuedBy","is-required":!1}}),i("input-date",{attrs:{"title-name":"Дата выдачи","title-id":"issuedDate","is-required":!0,click:t.click},on:{required:t.currentValue}}),t._m(0)],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("button",{staticClass:"form-btn",attrs:{type:"submit"}},[t._v("Завершить")])])}],n=i("b5ae"),s=i("f4c2"),a=i("40f4"),l=i("19cd"),c={name:"Passport",components:{InputDate:l["a"],InputText:a["a"],InputSelect:s["a"]},data:function(){return{series:"",number:"",issuedBy:"",issuedDate:"",type:[{value:"Паспорт"},{value:"Свидетельство о рождении"},{value:"Вод. удостоверение"}],typeValue:"Тип документа",click:!1}},validations:{issuedDate:{required:n["required"]},typeValue:{notDefault:function(){return"Тип документа"!==this.typeValue}}},methods:{currentValue:function(t,e){"issuedDate"===e&&(this.issuedDate=t),"type"===e&&(this.typeValue=t)},clickHandler:function(){if(this.click=!this.click,!this.$v.$invalid)return alert("Новый клиент успешно создан!"),this.$router.push("/");this.$v.$touch()}}},d=c,o=i("2877"),p=Object(o["a"])(d,u,r,!1,null,"5dfb00cf",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d21a747.065cb1bd.js.map