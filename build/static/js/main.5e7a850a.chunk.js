(this["webpackJsonpexpensify-app"]=this["webpackJsonpexpensify-app"]||[]).push([[0],{238:function(e,t,n){},247:function(e,t){},293:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(25),s=n.n(o),c=n(28),i=n(29),u=n(9),d=n(12),p=n(4),j=n.n(p),h=n(149),l=n.n(h),b=n(1),O=function(e){var t=e.id,n=e.description,r=e.amount,a=e.createdAt;return Object(b.jsxs)("div",{children:[Object(b.jsx)(i.b,{to:"/edit/".concat(t),children:Object(b.jsx)("h3",{children:n})}),Object(b.jsxs)("p",{children:[l()(r/100).format("$0, 0.00"),"-",j()(a).format("MMMM do, YYYY")]})]})},f=function(e,t){var n=t.text,r=t.sortBy,a=t.startDate,o=t.endDate;return e.filter((function(e){var t=j()(e.createdAt),r=!a||a.isSameOrBefore(t,"day"),s=!o||o.isSameOrAfter(t,"day"),c=e.description.toLowerCase().includes(n.toLowerCase());return r&&s&&c})).sort((function(e,t){return"date"===r?e.createdAt<t.createdAt?1:-1:"amount"===r?e.amount<t.amount?1:-1:void 0}))},x=Object(c.b)((function(e){return{expenses:f(e.expenses,e.filters)}}))((function(e){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"Expense List"}),Object(b.jsx)("div",{children:0===e.expenses.length?Object(b.jsx)("h2",{children:"No expneses"}):e.expenses.map((function(e){return Object(b.jsx)(O,Object(d.a)({},e),e.id)}))})]})})),v=n(33),m=n(34),E=n(36),D=n(35),g=n(60),S=function(e){Object(E.a)(n,e);var t=Object(D.a)(n);function n(){var e;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={calendarFocused:null},e.onDatesChange=function(t){var n=t.startDate,r=t.endDate;e.props.setStartDate(n),e.props.setEndDate(r)},e.onFocusChange=function(t){e.setState((function(){return{calendarFocused:t}}))},e.onTextChange=function(t){e.props.setTextFilter(t.target.value)},e.onSortChange=function(t){"date"===t.target.value?e.props.sortByDate():e.props.sortByAmount()},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("input",{type:"text",value:this.props.filters.text,onChange:this.onTextChange}),Object(b.jsxs)("select",{value:this.props.filters.sortBy,onChange:this.onSortChange,children:[Object(b.jsx)("option",{value:"date",children:"Date"}),Object(b.jsx)("option",{value:"amount",children:"Amount"})]}),Object(b.jsx)(g.DateRangePicker,{startDate:this.props.filters.startDate,endDate:this.props.filters.endDate,onDatesChange:this.onDatesChange,focusedInput:this.state.calendarFocused,onFocusChange:this.onFocusChange,showClearDates:!0,numberOfMonths:1,isOutsideRange:function(){return!1},startDateId:"1",endDateId:"2"})]})}}]),n}(a.a.Component),y=Object(c.b)((function(e){return{filters:e.filters}}),(function(e){return{sortByDate:function(){return e({type:"SORT_BY_DATE"})},sortByAmount:function(){return e({type:"SORT_BY_AMOUNT"})},setTextFilter:function(t){return e(function(){return{type:"SET_TEXT_FILTER",text:arguments.length>0&&void 0!==arguments[0]?arguments[0]:""}}(t))},setStartDate:function(t){return e(function(e){return{type:"SET_START_DATE",startDate:e}}(t))},setEndDate:function(t){return e(function(e){return{type:"SET_END_DATE",endDate:e}}(t))}}}))(S),C=function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(y,{}),Object(b.jsx)(x,{})]})},T=(j()(),function(e){Object(E.a)(n,e);var t=Object(D.a)(n);function n(e){var r;return Object(v.a)(this,n),(r=t.call(this,e)).onDescriptionChange=function(e){var t=e.target.value;r.setState((function(){return{description:t}}))},r.onNoteChange=function(e){var t=e.target.value;r.setState((function(){return{note:t}}))},r.onAmountChange=function(e){var t=e.target.value;t&&!t.match(/^\d{1,}(\.\d{0,2})?$/)||r.setState((function(){return{amount:t}}))},r.onDateChange=function(e){e&&r.setState((function(){return{createdAt:e}}))},r.onFocusChange=function(e){var t=e.focused;r.setState((function(){return{calendarFocused:t}}))},r.onSubmitForm=function(e){e.preventDefault(),r.state.description&&r.state.amount?(r.setState((function(){return{error:""}})),r.props.onSubmitJD({description:r.state.description,amount:100*parseFloat(r.state.amount,10),note:r.state.note,createdAt:r.state.createdAt.valueOf()})):r.setState((function(){return{error:"Please provide required information!"}}))},r.state={description:e.expense?e.expense.description:"",note:e.expense?e.expense.note:"",amount:e.expense?(e.expense.amount/100).toString():"",createdAt:e.expense?j()(e.expense.createdAt):j()(),calendarFocused:!1,error:""},r}return Object(m.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:this.state.error}),Object(b.jsxs)("form",{onSubmit:this.onSubmitForm,children:[Object(b.jsx)("input",{type:"text",placeholder:"Description",autoFocus:!0,value:this.state.description,onChange:this.onDescriptionChange}),Object(b.jsx)("input",{type:"text",placeholder:"Amount",value:this.state.amount,onChange:this.onAmountChange}),Object(b.jsx)(g.SingleDatePicker,{date:this.state.createdAt,onDateChange:this.onDateChange,focused:this.state.calendarFocused,onFocusChange:this.onFocusChange,numberOfMonths:1,isOutsideRange:function(){return!1}}),Object(b.jsx)("textarea",{placeholder:"Add a note for your expense (optional)",value:this.state.note,onChange:this.onNoteChange}),Object(b.jsx)("button",{children:"Add Expense"})]})]})}}]),n}(a.a.Component)),_=n(295),A=function(e){Object(E.a)(n,e);var t=Object(D.a)(n);function n(){var e;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onSubmit=function(t){e.props.addExpense(t),e.props.history.push("/")},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)("h3",{children:"Add Expense"}),Object(b.jsx)(T,{onSubmitJD:this.onSubmit})]})}}]),n}(a.a.Component),F=Object(c.b)(void 0,(function(e){return{addExpense:function(t){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.description,n=void 0===t?"":t,r=e.note,a=void 0===r?"":r,o=e.amount,s=void 0===o?0:o,c=e.createdAt,i=void 0===c?0:c;return{type:"ADD_EXPENSE",expense:{id:Object(_.a)(),description:n,note:a,amount:s,createdAt:i}}}(t))}}}))(A),N=function(e){Object(E.a)(n,e);var t=Object(D.a)(n);function n(){var e;Object(v.a)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).onSubmit=function(t){e.props.editExpense(e.props.expense.id,t),e.props.history.push("/")},e.onRemove=function(){e.props.removeExpense({id:e.props.expense.id}),e.props.history.push("/")},e}return Object(m.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{children:[Object(b.jsx)(T,{expense:this.props.expense,onSubmitJD:this.onSubmit}),Object(b.jsx)("button",{onClick:this.onRemove,children:"Remove"})]})}}]),n}(a.a.Component),R=Object(c.b)((function(e,t){return{expense:e.expenses.find((function(e){return e.id===t.match.params.id}))}}),(function(e,t){return{editExpense:function(t,n){return e(function(e,t){return{type:"EDIT_EXPENSE",id:e,updates:t}}(t,n))},removeExpense:function(t){return e(function(){return{type:"REMOVE_EXPENSE",id:(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).id}}(t))}}}))(N),B=function(){return Object(b.jsx)("div",{children:"Help Page"})},w=function(){return Object(b.jsxs)("div",{children:["404! - ",Object(b.jsx)(i.b,{to:"/",children:"Go home"})]})},X=function(){return Object(b.jsxs)("header",{children:[Object(b.jsx)("h1",{children:"Expensify"}),Object(b.jsx)(i.c,{activeClassName:"is-active",to:"/",exact:!0,children:"Home page"}),Object(b.jsx)(i.c,{activeClassName:"is-active",to:"/create",children:"Create expense"}),Object(b.jsx)(i.c,{activeClassName:"is-active",to:"/help",children:"Help page"})]})},I=function(){return Object(b.jsx)(i.a,{children:Object(b.jsxs)("div",{children:[Object(b.jsx)(X,{}),Object(b.jsxs)(u.c,{children:[Object(b.jsx)(u.a,{path:"/",component:C,exact:!0}),Object(b.jsx)(u.a,{path:"/create",component:F}),Object(b.jsx)(u.a,{path:"/edit/:id",component:R}),Object(b.jsx)(u.a,{path:"/help",component:B}),Object(b.jsx)(u.a,{component:w})]})]})})},M=n(80),P=n(150),k=[],Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_EXPENSE":return[].concat(Object(P.a)(e),[t.expense]);case"REMOVE_EXPENSE":return e.filter((function(e){return e.id!==t.id}));case"EDIT_EXPENSE":return e.map((function(e){return e.id===t.id?Object(d.a)(Object(d.a)({},e),t.updates):e}));default:return e}},L={text:"",sortBy:"date",startDate:j()().startOf("month"),endDate:j()().endOf("month")},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_TEXT_FILTER":return Object(d.a)(Object(d.a)({},e),{},{text:t.text});case"SORT_BY_AMOUNT":return Object(d.a)(Object(d.a)({},e),{},{sortBy:"amount"});case"SORT_BY_DATE":return Object(d.a)(Object(d.a)({},e),{},{sortBy:"date"});case"SET_START_DATE":return Object(d.a)(Object(d.a)({},e),{},{startDate:t.startDate});case"SET_END_DATE":return Object(d.a)(Object(d.a)({},e),{},{endDate:t.endDate});default:return e}},U=(n(238),n(239),n(292),Object(M.b)(Object(M.a)({expenses:Y,filters:J}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),V=Object(b.jsx)(c.a,{store:U,children:Object(b.jsx)(I,{})});s.a.render(V,document.getElementById("root"))}},[[293,1,2]]]);
//# sourceMappingURL=main.5e7a850a.chunk.js.map