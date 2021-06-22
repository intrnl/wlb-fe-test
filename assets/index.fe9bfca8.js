var e=Object.defineProperty,t=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,i=(t,a,l)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[a]=l,s=(e,t)=>{for(var a in t||(t={}))n.call(t,a)&&i(e,a,t[a]);if(l)for(var a of l(t))r.call(t,a)&&i(e,a,t[a]);return e},c=(e,l)=>t(e,a(l));import{R as o,g as m,u as d,r as u,z as b,y as E,A as p,a as f,b as g,G as v,x as h,c as y,E as N,D as x,d as $}from"./vendor.46b6b56e.js";function w(e,t){switch(t.type){case"LOGIN":return localStorage.setItem("id",t.data.id),c(s({},e),{id:t.data.id});case"LOGOUT":return localStorage.removeItem("id"),c(s({},e),{id:null})}}let C=o.createContext(null),k=()=>o.useContext(C);function S(e){let[t,a]=o.useReducer(w,{id:null});return o.createElement(C.Provider,{value:[t,a]},e.children)}function O(e,t){return Math.floor(Math.random()*(t-e+1)+e)}function I(e){return e.filter(Boolean).join(" ")}let P=m`
	query ($id: ID!) {
	  user (id: $id) {
	    id
	    name
	  }
	}
`;function D(e){let{children:t}=e;return o.createElement("div",{className:"min-h-screen bg-gray-200"},o.createElement("div",{className:"w-full bg-blue-700 text-white pb-6 -mb-6"},o.createElement("div",{className:"max-w-3xl mx-auto px-4 py-4 flex gap-4 justify-between"},o.createElement("div",{className:"flex gap-4 items-center"},o.createElement(L,{to:"/"},"Home"),o.createElement(L,{to:"/post"},"Posts")),o.createElement("div",{className:"flex gap-4 items-center"},o.createElement(M,null)))),o.createElement("div",{className:"md:max-w-3xl md:mx-auto md:pb-6"},o.createElement("div",{className:"bg-white py-3 px-4 md:shadow-md md:rounded"},t)))}function M(){let[e,t]=k(),a=o.useCallback((()=>{t({type:"LOGOUT"})}),[t]);return e.id?o.createElement(o.Fragment,null,o.createElement(o.Suspense,{fallback:o.createElement(q,null)},o.createElement(F,null)),o.createElement(j,{onClick:a},"Logout")):o.createElement(L,{to:"/login"},"Login")}function q(){return o.createElement("div",{style:{width:`${O(10,25)}ch`},className:"motion-safe:animate-pulse h-4 rounded bg-blue-500 mb-1"})}function F(){let[e,t]=k(),[a]=d({query:P,variables:{id:e.id}}),{id:l,name:n}=a.data.user;return u.exports.useEffect((()=>{l||t({type:"LOGOUT"})}),[l]),o.createElement(L,{to:`/user/${l}`},n)}function L(e){let{to:t,children:a}=e;return o.createElement(b,{end:!0,to:t,className:"font-bold border-b-2 border-transparent hover:border-blue-200",activeClassName:"border-blue-400"},a)}function j(e){return o.createElement("a",c(s({},e),{className:"font-bold border-b-2 border-transparent cursor-pointer hover:border-blue-200"}))}function G(){return o.createElement(o.Fragment,null,o.createElement("div",null,"404 not found"))}let z=m`
	query ($page: Int!, $limit: Int!) {
		posts (options: {
			paginate: { page: $page, limit: $limit },
			sort: { field: "id", order: DESC },
		}) {
	    items: data {
	      id
	      title
				user {
					id
					name
				}
	    }
	    meta {
	      totalCount
	    }
	  }
	}
`;function R(e){let{data:t}=e,{items:a,meta:l}=t.posts;return o.createElement("div",{className:"flex flex-col divide-y"},a.map((e=>o.createElement(T,{key:e.id,data:e}))))}function U(e){let{size:t=10}=e,a=o.useMemo((()=>Array.from({length:t},((e,t)=>o.createElement(A,{key:t})))),[t]);return o.createElement("div",{className:"flex flex-col divide-y"},a)}function T(e){let{data:t}=e;return o.createElement("div",{className:"py-2"},o.createElement("h4",{className:"text-lg"},o.createElement(E,{to:`/post/${t.id}`,className:"hover:underline"},t.title)),o.createElement("span",{className:"text-sm"},o.createElement(E,{to:`/user/${t.user.id}`,className:"hover:underline"},t.user.name)))}function A(){return o.createElement("div",{className:"py-2 motion-safe:animate-pulse"},o.createElement("div",{style:{width:`${O(10,75)}%`},className:"h-5 my-1.5 rounded bg-gray-400"}),o.createElement("div",{style:{width:`${O(10,50)}%`},className:"h-4 my-1 rounded bg-gray-400"}))}function B(){return o.createElement(o.Fragment,null,o.createElement("h2",{className:"text-lg font-semibold"},"Recent Posts"),o.createElement(o.Suspense,{fallback:o.createElement(U,null)},o.createElement(H,null)))}function H(){let[e]=d({query:z,variables:{page:1,limit:5}}),{items:t,meta:a}=e.data.posts;return t.length?o.createElement(R,{data:e.data}):o.createElement("div",{className:"mt-2"},"No recent posts.")}function J(e,t){return t.target.value}let K=(e="")=>o.useReducer(J,e);function Q(e){let t=I(["inline-block px-2 py-1 rounded","border border-gray-300","focus:outline-none focus-visible:z-10 focus-visible:ring-2 ring-offset-1","ring-gray-400",e.disabled&&"opacity-50"]);return o.createElement("input",c(s({},e),{className:t}))}function V(e){let t=I(["inline-block px-2 py-1 rounded","border border-gray-300","focus:outline-none focus-visible:z-10 focus-visible:ring-2 ring-offset-1","active:bg-gray-200 hover:bg-gray-200 ring-gray-400",e.disabled&&"opacity-50"]);return o.createElement("button",c(s({},e),{className:t}))}function W(e){let t=I(["inline-block px-2 py-1 rounded","border border-gray-300","focus:outline-none focus-visible:z-10 focus-visible:ring-2 ring-offset-1","active:bg-gray-200 hover:bg-gray-200 ring-gray-400",e.disabled&&"opacity-50"]);return e.disabled?o.createElement("a",c(s({},e),{className:t})):o.createElement(E,c(s({},e),{className:t}))}function X(){let e=p(),[t,a]=o.useContext(C),[l,n]=K();return o.useEffect((()=>{t.id&&e("/",{replace:!0})}),[t.id]),o.createElement(o.Fragment,null,o.createElement("h2",{className:"text-lg font-semibold"},"Login"),o.createElement("form",{onSubmit:e=>{e.preventDefault(),a({type:"LOGIN",data:{id:l}})}},o.createElement("fieldset",{className:"mt-2"},o.createElement("label",{htmlFor:"input-id",className:"mr-2"},"ID"),o.createElement(Q,{id:"input-id",placeholder:"id",value:l,onChange:n})),o.createElement("div",{className:"mt-2"},o.createElement(V,{type:"submit"},"Login"))))}let Y=m`
	query ($user: ID!, $page: Int!, $limit: Int!) {
		user (id: $user) {
			posts (options: {
				paginate: { page: $page, limit: $limit },
				sort: { field: "id", order: DESC },
			}) {
				items: data {
					id
					title
					user {
						id
						name
					}
				}
				meta {
					totalCount
				}
			}
		}
	}
`;function Z(e){let{data:t,self:a=!1}=e;return o.createElement("div",null,o.createElement("h2",{className:"text-lg font-semibold"},t.user.name),a&&o.createElement("div",{className:"mt-1"},o.createElement(W,{to:"/post/new"},"Create post")))}function _(){return o.createElement("div",null,o.createElement("div",{style:{width:`${O(10,50)}%`},className:"h-5 mt-0.5 mb-1.5 rounded bg-gray-400"}))}function ee(e,t){return Array.from({length:t-e+1},((t,a)=>e+a))}function te(e){let{current:t,total:a,sibling:l,onChange:n}=e,r=function(e){let{sibling:t=3,current:a,total:l}=e,n=Math.max(a-t,1),r=Math.min(a+t,l),i=1+2*t,s=n>2,c=r<l-2;return!s&&c?ee(1,i):s&&!c?ee(l-i+1,l):ee(n,r)}({current:t,total:a,sibling:l}),i=t<=1,s=t>=a,c=e=>{let{page:t}=e.currentTarget.dataset;null==n||n(Number(t))};return o.createElement("div",{className:"w-max flex rounded border border-gray-300"},o.createElement(ae,{"aria-label":"Go to first page","data-page":1,onClick:c,disabled:i},o.createElement("img",{src:"/wlb-fe-test/assets/first-page.763d86f0.svg"})),o.createElement(ae,{"aria-label":"Go to previous page","data-page":Math.max(t-1,1),onClick:c,disabled:i},o.createElement("img",{src:"/wlb-fe-test/assets/chevron-left.9ce31c80.svg"})),r.map((e=>o.createElement(ae,{key:e,"data-page":e,active:e===t,onClick:c},e))),o.createElement(ae,{"aria-label":"Go to next page","data-page":Math.min(t+1,a),onClick:c,disabled:s},o.createElement("img",{src:"/wlb-fe-test/assets/chevron-right.833bb8db.svg"})),o.createElement(ae,{"aria-label":"Go to last page","data-page":a,onClick:c,disabled:s},o.createElement("img",{src:"/wlb-fe-test/assets/last-page.ca993bf8.svg"})))}function ae(e){let t=e,{active:a=!1,children:i}=t,m=((e,t)=>{var a={};for(var i in e)n.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&l)for(var i of l(e))t.indexOf(i)<0&&r.call(e,i)&&(a[i]=e[i]);return a})(t,["active","children"]),d=I(["h-8 w-8 grid rounded","focus:outline-none focus-visible:z-10 focus-visible:ring-2 ring-offset-1",a&&"text-white bg-blue-800 active:bg-blue-800 hover:bg-blue-700 ring-blue-500",!a&&"text-current bg-transparent active:bg-gray-300 hover:bg-gray-300 ring-gray-400",e.disabled&&"opacity-50"]),u=I(["place-self-center"]);return o.createElement("button",c(s({},m),{className:d}),o.createElement("div",{className:u},i))}function le(){let{id:e}=f();return o.createElement(o.SuspenseList,null,o.createElement(o.Suspense,{fallback:o.createElement(_,null)},o.createElement(ne,{id:e})),o.createElement(o.Suspense,{fallback:o.createElement(U,null)},o.createElement(re,{id:e})))}function ne(e){let{id:t}=e,[a]=k(),[l]=d({query:P,variables:{id:t}}),{user:n}=l.data;return n.id?o.createElement(Z,{data:l.data,self:n.id===a.id}):o.createElement("div",null,"404. User not found.")}function re(e){let{id:t}=e,[a,l]=o.useState(1),[n]=d({query:Y,variables:{user:t,page:a,limit:25}}),{meta:r}=n.data.user.posts,i=Math.max(Math.ceil(r.totalCount/25),1);return o.createElement("div",{className:"flex flex-col gap-1"},o.createElement(R,{data:n.data.user}),r.totalCount>0&&o.createElement(te,{current:a,total:i,onChange:l}))}function ie(){return o.createElement(o.Fragment,null,o.createElement("h2",{className:"text-lg font-semibold"},"Posts"),o.createElement(o.Suspense,{fallback:o.createElement(U,null)},o.createElement(se,null)))}function se(){let[e,t]=o.useState(1),[a]=d({query:z,variables:{page:e,limit:10}}),{meta:l}=a.data.posts,n=Math.max(Math.ceil(l.totalCount/25),1);return o.createElement("div",{className:"flex flex-col gap-1"},o.createElement(R,{data:a.data}),l.totalCount>0&&o.createElement(te,{current:e,total:n,onChange:t}))}let ce=m`
	query ($id: ID!) {
	  post (id: $id) {
			id
	    title
	    body
	    user {
	    	id
	    	name
	    }
		}
	}
`,oe=m`
	mutation ($id: ID!) {
		deletePost (id: $id)
	}
`;function me(e){let{data:t,editable:a=!1,onDelete:l}=e,{id:n,title:r,user:i,body:s}=t.post,c=o.useMemo((()=>s.split(/\n/g).map(((e,t)=>o.createElement("p",{key:t},e)))),[s]);return o.createElement("div",null,o.createElement("div",{className:"border-b mb-2 pb-2"},o.createElement("h2",{className:"text-lg font-semibold"},r),o.createElement("span",{className:"text-sm"},o.createElement(E,{to:`/user/${i.id}`,className:"hover:underline"},i.name)),a&&o.createElement("div",{className:"mt-1 flex gap-2"},o.createElement(W,{to:`/post/${n}/edit`},"Edit"),o.createElement(V,{onClick:l},"Delete"))),o.createElement("div",{className:"flex flex-col gap-1"},c))}function de(){let[e]=o.useState((()=>O(3,10))),t=o.useMemo((()=>Array.from({length:e},((e,t)=>o.createElement("div",{key:t,style:{width:`${O(25,100)}%`},className:"h-4 rounded bg-gray-400"})))),[e]);return o.createElement("div",{className:"motion-safe:animate-pulse"},o.createElement("div",{className:"border-b mb-2 pb-2"},o.createElement("div",{style:{width:`${O(10,75)}%`},className:"h-5 my-1.5 rounded bg-gray-400"}),o.createElement("div",{style:{width:`${O(10,75)}%`},className:"h-4 my-1 rounded bg-gray-400"})),o.createElement("div",{className:"flex flex-col mt-3 gap-3"},t))}function ue(){let{id:e}=f();return o.createElement(o.Fragment,null,o.createElement(o.Suspense,{fallback:o.createElement(de,null)},o.createElement(be,{id:e})))}function be(e){let{id:t}=e,[a]=d({query:ce,variables:{id:t}}),[,l]=g(oe),n=p(),[r]=k();return a.data.post.id?o.createElement(me,{data:a.data,editable:r.id===a.data.post.user.id,onDelete:()=>{confirm("Delete this post?")&&l({id:t}).then((()=>{n("/",{replace:!0})})).catch((e=>{alert("Error caught, see console"),console.log("Failed to delete post"),console.error(e)}))}}):o.createElement("div",null,"404. Post not found.")}let Ee=m`
	mutation ($data: CreatePostInput!) {
		createPost (input: $data) {
			id
			title
			body
			user {
				id
				name
			}
		}
	}
`;function pe(e){let{disabled:t=!1,data:a={},onSubmit:l}=e,[n,r]=K(a.title),[i,s]=K(a.body);return o.createElement("form",{onSubmit:e=>{e.preventDefault(),t||l({id:a.id,user:a.user,title:n,body:i})}},o.createElement("div",{className:"border-b mb-2 pb-2"},o.createElement("input",{className:"block w-full text-lg font-semibold disabled:text-gray-600",disabled:t,placeholder:"Post title",value:n,onChange:r}),a.user&&o.createElement("span",{className:"text-sm"},o.createElement(E,{to:`/user/${a.user.id}`},a.user.name)),o.createElement("div",{className:"mt-1"},o.createElement(V,{type:"submit"},"Submit"))),o.createElement("div",null,o.createElement("textarea",{className:"w-full h-[75vh] disabled:text-gray-600",disabled:t,value:i,onChange:s})))}function fe(){let[,e]=g(Ee),t=p(),[a]=k(),[l,n]=o.useState(!1);return o.useEffect((()=>{a.id||t("/",{replace:!0})}),[a.id]),o.createElement(pe,{disabled:l,onSubmit:a=>{n(!0);let{title:l,body:r}=a;e({data:{title:l,body:r}}).then((e=>{let{createPost:a}=e.data;t(`/post/${a.id}`)})).catch((e=>{alert("Error caught, see console"),console.log("Failed to create post"),console.error(e)}))}})}let ge=m`
	mutation ($id: ID!, $data: UpdatePostInput!) {
		updatePost (id: $id, input: $data) {
			id
			title
			body
		}
	}
`;function ve(){let{id:e}=f();return o.createElement(o.Fragment,null,o.createElement(o.Suspense,{fallback:o.createElement(de,null)},o.createElement(he,{id:e})))}function he(e){let{id:t}=e,[a]=d({query:ce,variables:{id:t}}),[,l]=g(ge),n=p(),[r]=k(),[i,s]=o.useState(!1);return o.useEffect((()=>{a.data.post.id&&a.data.post.user.id!==r.id&&n("/",{replace:!0})}),[a.data,r.id]),a.data.post.id?o.createElement(pe,{disabled:i,data:a.data.post,onSubmit:e=>{s(!0);let{id:t,title:a,body:r}=e;l({id:t,data:{title:a,body:r}}).then((()=>{n(`/post/${t}`)})).catch((e=>{alert("Error caught, see console"),console.log("Failed to update post"),console.error(e)}))}}):o.createElement("div",null,"404. Post not found.")}let ye=v({url:"https://graphqlzero.almansi.me/api",suspense:!0});function Ne(){return o.createElement(h,{value:ye},o.createElement(S,null,o.createElement(y,null,o.createElement(D,null,o.createElement(N,null,o.createElement(x,{path:"/",element:o.createElement(B,null)}),o.createElement(x,{path:"/login",element:o.createElement(X,null)}),o.createElement(x,{path:"/user/:id",element:o.createElement(le,null)}),o.createElement(x,{path:"/post/*"},o.createElement(x,{path:"/",element:o.createElement(ie,null)}),o.createElement(x,{path:"/new",element:o.createElement(fe,null)}),o.createElement(x,{path:"/:id"},o.createElement(x,{path:"/",element:o.createElement(ue,null)}),o.createElement(x,{path:"/edit",element:o.createElement(ve,null)}))),o.createElement(x,{path:"/*",element:o.createElement(G,null)}))))))}$.createRoot(document.getElementById("root")).render(o.createElement(Ne,null));
