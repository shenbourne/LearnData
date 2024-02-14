"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[4230],{9720:(n,e)=>{e.c=(n,e)=>{const a=n.__vccOpts||n;for(const[n,s]of e)a[n]=s;return a}},8080:(n,e,a)=>{a.r(e),a.d(e,{comp:()=>g,data:()=>m});var s=a(3968);const t={href:"https://tools.newzone.top/json-translate",target:"_blank",rel:"noopener noreferrer"},o=(0,s.QD)("figure",null,[(0,s.QD)("img",{src:"https://img.newzone.top/2023-12-18-19-18-41.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),(0,s.QD)("figcaption")],-1),p=(0,s.QD)("p",null,"该工具的设计理念与市面上其他多语言翻译器不同。常见的翻译器虽然追求一键自动化，但通常配置繁琐，且往往需要付费订阅。JsonTranslate 的设计初衷是为了解决 ChatGPT Shortcut 和 IMGPrompt 等个人或开源项目中的英汉互译问题而设计，特别适合那些翻译文件不多的项目。",-1),l=(0,s.QD)("p",null,"与传统的全站自动化翻译工具相比，JsonTranslate 更加注重根据用户需求进行精确翻译。用户可以方便地粘贴需要翻译的文本，甚至指定单个新增节点，从而简化多语言翻译流程，使得翻译工作更为高效和精确。",-1),r=(0,s.IL)('<h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明"><span>使用说明</span></a></h2><figure><img src="https://img.newzone.top/2023-12-18-16-09-04.gif?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption>JsonTranslate 使用示例</figcaption></figure><h3 id="_1-选择翻译-api" tabindex="-1"><a class="header-anchor" href="#_1-选择翻译-api"><span>1. 选择翻译 API</span></a></h3>',3),i={href:"https://docs.easyuseai.com/platform/translate/google_fanyi.html",target:"_blank",rel:"noopener noreferrer"},c={href:"https://github.com/OwO-Network/DeepLX/",target:"_blank",rel:"noopener noreferrer"},d=(0,s.IL)('<figure><img src="https://img.newzone.top/2023-12-18-19-27-32.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>需要注意的是，使用 Google Translate 时，你的翻译数据会从客户端直接发送到 Google 服务器。而 DeepL API 则不支持在网页上使用。因此，JsonTranslate 在服务器端提供了一个专门的 DeepL 翻译转发接口，该接口仅用于数据转发，不会收集任何用户数据。用户可以选择在本地环境中部署并使用这一接口。</p><h3 id="_2-语言设置" tabindex="-1"><a class="header-anchor" href="#_2-语言设置"><span>2. 语言设置</span></a></h3><p>你可以灵活地选择源语言和目标语言，以实现不同语言之间的相互翻译。目前，JsonTranslate 支持 13 种语言的互译，包括英语、中文、日语、韩语、西班牙语、法语、德语、意大利语、俄语、葡萄牙语、印地语、阿拉伯语和孟加拉语。这些语言涵盖了全球大部分主要语言区域，能满足多样化的用户需求。需要注意的是，印地语、阿拉伯语和孟加拉语目前仅能通过 Google Translate 进行翻译，因为 DeepL 尚未支持这三种语言。</p><figure><img src="https://img.newzone.top/2023-12-19-10-23-41.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="_3-翻译键名" tabindex="-1"><a class="header-anchor" href="#_3-翻译键名"><span>3. 翻译键名</span></a></h3><p>键名（key）是访问 JSON 结构中特定信息的关键，可以由数字、英文字母、中文等非符号字符组成。在命名时需注意大小写的区别。对于包含数组<code>[]</code>的 JSON 数据，建议避免使用数字作为键名，因为这会被认为是数组索引，从而可能引起混淆或错误。</p><p>为了同时指定多个键名的翻译，你可以通过逗号进行分隔，不论是使用中文还是英文逗号均可。</p><p>如果你刚开始接触 JSON 的键名，不妨参考以下的示例说明。这些示例将帮助你更好地理解键名的格式和使用方式。</p><h3 id="_4-翻译内容" tabindex="-1"><a class="header-anchor" href="#_4-翻译内容"><span>4. 翻译内容</span></a></h3><p>JsonTranslate 专为 JSON 内容翻译而设计，仅支持 JSON 格式输入。</p><p>输入内容变更时，应用会实时格式化 JSON 并验证格式正确性。请避免在输入框内进行大量修改，因为频繁的修改可能增加出错的风险。如果需要对 JSON 文件做大量的编辑或修改，建议先在其他专用的 JSON 编辑工具中完成编辑，确保格式无误后再将内容导入 JsonTranslate 进行翻译。</p><h3 id="_5-翻译结果" tabindex="-1"><a class="header-anchor" href="#_5-翻译结果"><span>5. 翻译结果</span></a></h3><p>点击「开始翻译」按钮后，翻译完成可以选择「复制结果」。</p><figure><img src="https://img.newzone.top/2023-12-19-11-42-37.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption>映射翻译示例</figcaption></figure><p>结果界面右侧还设有灰色按钮，用于切换翻译节点模式，包括单一键名模式和映射翻译模式。单一键名模式下，翻译的输入输出使用相同节点，而映射翻译模式则涉及不同节点的翻译。例如，节点 A 的值将翻译至节点 B，节点 C 的值翻译至节点 D。</p><h2 id="使用问题" tabindex="-1"><a class="header-anchor" href="#使用问题"><span>使用问题</span></a></h2><h3 id="返回-null" tabindex="-1"><a class="header-anchor" href="#返回-null"><span>返回 null</span></a></h3><p>使用 DeepLX 免费接口时，可能会返回 null。请等一会再使用，或使用自己的 API KEY。</p><h3 id="json-键名及其局限性" tabindex="-1"><a class="header-anchor" href="#json-键名及其局限性"><span>JSON 键名及其局限性</span></a></h3><p>JSON 数据是以键值对的形式存储的，其中“键”（也称为“名称”）是一个字符串，用于唯一标识数据记录中的特定项目或元素，是数据检索和操作的基础。JsonTranslate 正是利用了 JSON 键名的标识作用来实现精准化识别翻译。</p><p>以下是对示例中的几个键名的解释：</p><ul><li><code>downvote.message</code>：这是一个嵌套的键名。<code>downvote</code> 是外层对象的键名，而 <code>message</code> 是 <code>downvote</code> 对象内部的一个键名。</li><li><code>提示词.message</code>：这里 <code>提示词</code> 是一个键名，它本身包含一个对象，该对象有一个键 <code>message</code>。</li><li><code>share.owner</code>：这个键名包含了一个点（<code>.</code>），它是一个单独的键名而不是指示嵌套关系。在这种情况下，如果你想访问 <code>share.owner</code> 对象中的 <code>name</code>，你不能使用 <code>share.owner.name</code>，因为这会被错误解释为查找一个名为 <code>owner</code> 的对象内的 <code>name</code> 键，而实际上 <code>share.owner</code> 是一个完整的键名。</li></ul><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n  <span class="token property">&quot;downvote&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Downvote&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;提示词&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;message&quot;</span><span class="token operator">:</span> <span class="token string">&quot;prompt&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;share.owner&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rabbit&quot;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;data&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;001&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;cabbages&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token property">&quot;content&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;001&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello, cabbage.&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>\n      <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;002&quot;</span><span class="token punctuation">,</span>\n      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Hello, Radish.&quot;</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">]</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>目前，JsonTranslate 无法处理包含点（<code>.</code>）的 JSON 键名。这是因为点号在 JSONPath 中用于区分嵌套对象的键名，使得含点的键名可能被误解为多层嵌套对象。为避免这一问题，建议使用不含点的键名。</p><h2 id="结语" tabindex="-1"><a class="header-anchor" href="#结语"><span>结语</span></a></h2><p>JsonTranslate 是一款适合小型项目和个人开发者的多语言 JSON 翻译工具。它以简单直观的操作和对多种翻译 API 的支持，帮助用户高效处理多语言翻译任务。虽然不能与专业的全站自动化翻译工具如 Crowdin 相媲美，但对于那些追求便利性、面临有限资源或只需处理少量翻译任务的用户来说，JsonTranslate 提供了一种实用且易于上手的解决方案。</p>',27),u={},g=(0,a(9720).c)(u,[["render",function(n,e){const a=(0,s.E1)("ExternalLinkIcon"),u=(0,s.E1)("BiliBili");return(0,s.Wz)(),(0,s.An)("div",null,[(0,s.QD)("p",null,[(0,s.QD)("a",t,[(0,s.mY)("JsonTranslate"),(0,s.K2)(a)]),(0,s.mY)("，一款专为开发者和内容创作者设计的多语言 JSON 翻译工具，支持 Google Translate、DeepL 和 DeepLX 翻译 API，助力项目国际化和本地化。无论你是在开发多语言网站、应用程序还是处理多语言数据集，JsonTranslate 都能提供简便的解决方案，轻松将 JSON 文件中的内容翻译为多种目标语言。")]),o,p,l,(0,s.K2)(u,{bvid:"BV11c411b7Np"}),r,(0,s.QD)("p",null,[(0,s.mY)("在使用 JsonTranslate 时，你有多种翻译 API 的选择。首先是 Google Translate 和 DeepL Translate，这两者都需要用户自行获取 API 密钥。Google Translate 在常见句子的翻译上较为普遍，特别适合翻译用户界面 UI；而 DeepL 在长文本翻译方面表现更优，能提供更流畅的翻译结果。若想申请这些 API，可参考相关的"),(0,s.QD)("a",i,[(0,s.mY)("接口申请教程"),(0,s.K2)(a)]),(0,s.mY)("。")]),(0,s.QD)("p",null,[(0,s.mY)("此外，JsonTranslate 还提供了 DeepLX 作为一个免费选项。DeepLX 通过将 DeepL Free API 转换为本地 API 接口，允许第三方应用进行调用。它无需 API 密钥，适合少量或偶尔的翻译需求。想了解更多关于 DeepLX 的信息，可以访问其 "),(0,s.QD)("a",c,[(0,s.mY)("GitHub 页面"),(0,s.K2)(a)]),(0,s.mY)("。")]),d])}]]),m=JSON.parse('{"path":"/apps/devdocs/json-translate.html","title":"JsonTranslate 实用指南：怎样让你的项目说上 13 种语言？","lang":"zh-CN","frontmatter":{"article":true,"title":"JsonTranslate 实用指南：怎样让你的项目说上 13 种语言？","date":"2023-12-19T00:00:00.000Z","category":["工具"],"order":1,"description":"JsonTranslate，一款专为开发者和内容创作者设计的多语言 JSON 翻译工具，支持 Google Translate、DeepL 和 DeepLX 翻译 API，助力项目国际化和本地化。无论你是在开发多语言网站、应用程序还是处理多语言数据集，JsonTranslate 都能提供简便的解决方案，轻松将 JSON 文件中的内容翻译为多种目标语言。...","head":[["meta",{"property":"og:url","content":"https://newzone.top/apps/devdocs/json-translate.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"JsonTranslate 实用指南：怎样让你的项目说上 13 种语言？"}],["meta",{"property":"og:description","content":"JsonTranslate，一款专为开发者和内容创作者设计的多语言 JSON 翻译工具，支持 Google Translate、DeepL 和 DeepLX 翻译 API，助力项目国际化和本地化。无论你是在开发多语言网站、应用程序还是处理多语言数据集，JsonTranslate 都能提供简便的解决方案，轻松将 JSON 文件中的内容翻译为多种目标语言。..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://img.newzone.top/2023-12-18-19-18-41.png?imageMogr2/format/webp"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-14T00:33:31.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"JsonTranslate 实用指南：怎样让你的项目说上 13 种语言？"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:published_time","content":"2023-12-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-14T00:33:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JsonTranslate 实用指南：怎样让你的项目说上 13 种语言？\\",\\"image\\":[\\"https://img.newzone.top/2023-12-18-19-18-41.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2023-12-18-16-09-04.gif?imageMogr2/format/webp \\\\\\"JsonTranslate 使用示例\\\\\\"\\",\\"https://img.newzone.top/2023-12-18-19-27-32.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2023-12-19-10-23-41.png?imageMogr2/format/webp\\",\\"https://img.newzone.top/2023-12-19-11-42-37.png?imageMogr2/format/webp \\\\\\"映射翻译示例\\\\\\"\\"],\\"datePublished\\":\\"2023-12-19T00:00:00.000Z\\",\\"dateModified\\":\\"2024-02-14T00:33:31.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"清顺\\",\\"url\\":\\"https://newzone.top\\"}]}"]]},"headers":[{"level":2,"title":"使用说明","slug":"使用说明","link":"#使用说明","children":[{"level":3,"title":"1. 选择翻译 API","slug":"_1-选择翻译-api","link":"#_1-选择翻译-api","children":[]},{"level":3,"title":"2. 语言设置","slug":"_2-语言设置","link":"#_2-语言设置","children":[]},{"level":3,"title":"3. 翻译键名","slug":"_3-翻译键名","link":"#_3-翻译键名","children":[]},{"level":3,"title":"4. 翻译内容","slug":"_4-翻译内容","link":"#_4-翻译内容","children":[]},{"level":3,"title":"5. 翻译结果","slug":"_5-翻译结果","link":"#_5-翻译结果","children":[]}]},{"level":2,"title":"使用问题","slug":"使用问题","link":"#使用问题","children":[{"level":3,"title":"返回 null","slug":"返回-null","link":"#返回-null","children":[]},{"level":3,"title":"JSON 键名及其局限性","slug":"json-键名及其局限性","link":"#json-键名及其局限性","children":[]}]},{"level":2,"title":"结语","slug":"结语","link":"#结语","children":[]}],"git":{"createdTime":1707870811000,"updatedTime":1707870811000,"contributors":[{"name":"shenbourne","email":"121733766+shenbourne@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":6.04,"words":1813},"filePathRelative":"apps/devdocs/json-translate.md","localizedDate":"2023年12月19日","excerpt":"<p><a href=\\"https://tools.newzone.top/json-translate\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">JsonTranslate</a>，一款专为开发者和内容创作者设计的多语言 JSON 翻译工具，支持 Google Translate、DeepL 和 DeepLX 翻译 API，助力项目国际化和本地化。无论你是在开发多语言网站、应用程序还是处理多语言数据集，JsonTranslate 都能提供简便的解决方案，轻松将 JSON 文件中的内容翻译为多种目标语言。</p>\\n<figure><img src=\\"https://img.newzone.top/2023-12-18-19-18-41.png?imageMogr2/format/webp\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption></figcaption></figure>","autoDesc":true}')}}]);