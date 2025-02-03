import{_ as n,C as r,c as d,o as c,a2 as l,j as a,a as i,G as t,w as s}from"./chunks/framework.CwCSXIY0.js";const y=JSON.parse('{"title":"Packages","description":"","frontmatter":{"title":"Packages"},"headers":[],"relativePath":"guide/extensibility/packages.md","filePath":"guide/extensibility/packages.md","lastUpdated":1738542678000}'),p={name:"guide/extensibility/packages.md"};function g(u,e,m,k,h,f){const o=r("Term");return c(),d("div",null,[e[23]||(e[23]=l("",37)),a("p",null,[e[0]||(e[0]=i("Since packages in ")),e[1]||(e[1]=a("code",null,".sublime-package",-1)),e[2]||(e[2]=i(" zip archives ")),e[3]||(e[3]=a("a",{href:"#sublime-package-packages"},"are read-only",-1)),e[4]||(e[4]=i(", you cannot modify them directly. However, Sublime Text allows you to create an ")),t(o,{term:"override_package"}),e[5]||(e[5]=i(": that will effectively inject files into the original archive without modifying the archive itself."))]),e[24]||(e[24]=l("",5)),a("p",null,[e[6]||(e[6]=i("If an ")),t(o,{term:"override_package"}),e[7]||(e[7]=i(" exists for a ")),e[8]||(e[8]=a("code",null,".sublime-package",-1)),e[9]||(e[9]=i(" package, it will be loaded at the same time as the ")),e[10]||(e[10]=a("code",null,".sublime-package",-1)),e[11]||(e[11]=i(" archive."))]),e[25]||(e[25]=a("p",null,"Sublime Text loads packages in this order:",-1)),a("ol",null,[e[21]||(e[21]=a("li",null,[a("code",null,"Packages/Default"),i(";")],-1)),a("li",null,[t(o,{term:"shipped_package"},{default:s(()=>e[12]||(e[12]=[i("shipped packages")])),_:1}),e[13]||(e[13]=i(" in lexicographical order;"))]),a("li",null,[t(o,{term:"installed_package"},{default:s(()=>e[14]||(e[14]=[i("installed packages")])),_:1}),e[15]||(e[15]=i(" in lexicographical order;"))]),a("li",null,[e[17]||(e[17]=i("all remaining ")),t(o,{term:"user_package"},{default:s(()=>e[16]||(e[16]=[i("user packages")])),_:1}),e[18]||(e[18]=i(", except for ")),e[19]||(e[19]=a("code",null,"Packages/User",-1)),e[20]||(e[20]=i(", that did not override anything, in lexicographical order;"))]),e[22]||(e[22]=a("li",null,[a("code",null,"Packages/User")],-1))]),e[26]||(e[26]=a("h2",{id:"reverting-sublime-text-to-its-default-configuration",tabindex:"-1"},[i("Reverting Sublime Text to Its Default Configuration "),a("a",{class:"header-anchor",href:"#reverting-sublime-text-to-its-default-configuration","aria-label":'Permalink to "Reverting Sublime Text to Its Default Configuration"'},"​")],-1)),e[27]||(e[27]=a("p",null,"Reverting Sublime Text to a fresh state solves many problems that appear to be bugs in Sublime Text but are in fact caused by misbehaving packages and plugins.",-1)),e[28]||(e[28]=a("p",null,[i("To revert Sublime Text to its default configuration and remove all your settings and configurations, delete the "),a("a",{href:"./../getting-started/basic-concepts.html#the-data-directory"},"Data directory"),i(" and restart the editor. Keep in mind that the "),a("code",null,"Installed Packages"),i(" folder will be deleted too, so you'll lose all your installed packages.")],-1)),e[29]||(e[29]=a("p",null,"Always make sure to back up your data before taking an extreme measure like this one!",-1))])}const P=n(p,[["render",g]]);export{y as __pageData,P as default};
