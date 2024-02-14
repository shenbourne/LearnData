"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[8914],{9720:(e,n)=>{n.c=(e,n)=>{const a=e.__vccOpts||e;for(const[e,t]of n)a[e]=t;return a}},3416:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>$,data:()=>ee});var t=a(3968);const s=(0,t.QD)("blockquote",null,[(0,t.QD)("p",null,"开源工具、效率方法、心理学探索的自我提升笔记")],-1),l={href:"https://discord.gg/PZTQfJ4GjX",target:"_blank",rel:"noopener noreferrer"},o=(0,t.QD)("img",{src:"https://img.shields.io/discord/1048780149899939881?color=%2385c8c8&label=Discord&logo=discord&style=for-the-badge",alt:"",tabindex:"0",loading:"lazy"},null,-1),i=(0,t.QD)("figcaption",null,null,-1),r=(0,t.IL)('<h2 id="✨-初衷" tabindex="-1"><a class="header-anchor" href="#✨-初衷"><span>✨ 初衷</span></a></h2><p>曾经，我采用了 Notion、Obsidian 和 飞书 等多款知识管理工具来存储我的心得与笔记。然而，这种方式导致我的资料分散，难以管理和分享。</p><p>更重要的是，<strong>笔记里的知识并不属于你，只有经过消化、应用，才会成为我们的财富。</strong></p><p>为此，我基于 VuePress 和 vuepress-theme-hope 构建了 LearnData 开源笔记，将我所有的笔记与文章聚合到同一页面形成知识库，便于集中管理和分享。</p><figure><img src="https://img.newzone.top/2022-08-22-19-28-25.png?imageMogr2/thumbnail/600x" alt="" tabindex="0" loading="lazy"><figcaption>笔记 + 文章 = LearnData 知识库</figcaption></figure><figure><img src="https://img.newzone.top/2022-08-24-19-14-59.png" alt="" tabindex="0" loading="lazy"><figcaption>笔记/博客自动化发布</figcaption></figure><h2 id="🧱-笔记结构" tabindex="-1"><a class="header-anchor" href="#🧱-笔记结构"><span>🧱 笔记结构</span></a></h2><ul><li>置顶：日常习惯、健身、阅读；</li><li>软件应用：常用应用、Chrome 扩展和相关教程；</li><li>Docker 服务：NAS 和服务器上的后端应用，主要以 Docker 方式部署；</li><li>系统问题：Windows 系统优化和相关问题；</li><li>代码编程：常用代码的学习和使用笔记，页面开发攻略和网站相关的工具和知识收集；</li><li>生活角落：说明书、生活记录和小技巧；</li><li>博客汇总：聚合所有博客文章，以分类、标签、时间轴等方式进行组合。</li></ul><h2 id="🍥-搭建-learndata" tabindex="-1"><a class="header-anchor" href="#🍥-搭建-learndata"><span>🍥 搭建 LearnData</span></a></h2>',9),c={href:"https://github.com/rockbenben/LearnData",target:"_blank",rel:"noopener noreferrer"},p=(0,t.QD)("figure",null,[(0,t.QD)("img",{src:"https://img.newzone.top/2022-08-10-19-32-05.png?imageMogr2/format/webp",alt:"",tabindex:"0",loading:"lazy"}),(0,t.QD)("figcaption")],-1),d=(0,t.QD)("figure",null,[(0,t.QD)("img",{src:"https://img.newzone.top/2022-08-10-19-34-13.png?imageMogr2/thumbnail/500x",alt:"",tabindex:"0",loading:"lazy"}),(0,t.QD)("figcaption")],-1),u=(0,t.IL)('<li><p>接着，进入项目仓库的「Settings」&gt;「Actions」&gt;「General」，选中底部 Workflow permissions 中的 <code>Read and write permissions</code>，然后点击保存即可。如果未授权，GitHub Page 部署会由于 repo 权限不足而报错 <code>failed with exit code 128</code>。</p><figure><img src="https://img.newzone.top/2023-03-14-04-02-16.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>接下来，请进入菜单栏顶部的「Actions」&gt;「最新的 workflow」，并点击右上方的「Re-run jobs」&gt;「Re-run all jobs」，以重新生成网页。若部署正确，GitHub 将自动搭建 gh-page 分支页面。</p><figure><img src="https://img.newzone.top/2023-03-14-04-04-52.gif?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>然后点击「Settings」, 修改 <code>Repository name</code> 为 <code>用户名.github.io</code>。假设你的仓库链接是 <code>https://github.com/xxx/LearnData</code>，那么中间的 <code>xxx</code> 就是你的用户名。如果该仓库名称已被使用，GitHub Pages 将无法正常显示样式，请查看页面底部的常见问题来设置子域名。</p><figure><img src="https://img.newzone.top/20180505202201.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>在同一页面选择「Settings」&gt;「Pages」&gt;「Build and deployment」&gt;「Branch」, 将 gh-page branch 设为 GitHub Pages 的来源，网站运行目录默认为 <code>/(root)</code>。设置完成后，点击「Save」。如果找不到 gh-pages 分支，可以按照上面提到的第三步进行操作，或在 GitHub 中修改任意文件以手动触发 GitHub Action，等待其执行完成后，再重新设置 Pages 的来源。</p><figure><img src="https://img.newzone.top/2022-08-10-19-39-15.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></li><li><p>设置成功后，页面会提示访问链接：<code>https://xxx.github.io/</code>。此时，你的知识库就已经搭建完成了。</p><p>如果未出现访问链接提示或不能打开 GitHub Pages，则删除 <code>docs/_posts</code> 路径下的博客文章。这是因为 GitHub Pages 有时会对旧文章里的代码报错。</p></li>',5),m=(0,t.QD)("h2",{id:"🔣-配置-learndata",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#🔣-配置-learndata"},[(0,t.QD)("span",null,"🔣 配置 LearnData")])],-1),g=(0,t.QD)("h3",{id:"文档结构",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#文档结构"},[(0,t.QD)("span",null,"文档结构")])],-1),h=(0,t.QD)("code",null,"docs",-1),b={href:"https://github.com/rockbenben/LearnData/blob/main/samplepage.md?plain=1",target:"_blank",rel:"noopener noreferrer"},v=(0,t.QD)("code",null,"order",-1),k=(0,t.IL)('<p>docs 目录结构如下：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>docs\n<span class="token operator">|</span>── .vuepress               <span class="token comment"># 网站配置</span>\n│   ├── config.ts           <span class="token comment"># 网站环境依赖和网站属性</span>\n│   ├── sidebar.ts          <span class="token comment"># 侧边栏</span>\n│   ├── navbar.ts           <span class="token comment"># 导航栏</span>\n│   ├── theme.ts            <span class="token comment"># 主题和插件</span>\n│   └── templateBuild.html  <span class="token comment"># 网页模板，网站关键词和统计</span>\n<span class="token operator">|</span>── _posts                  <span class="token comment"># 博客文章目录</span>\n├── _temp                   <span class="token comment"># 草稿箱</span>\n├── reading                 <span class="token comment"># 读书笔记</span>\n├── anyname                 <span class="token comment"># 自定义笔记</span>\n├── blog.md                 <span class="token comment"># 博客页面</span>\n└── intro.md                <span class="token comment"># 博主个人介绍</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',2),f=(0,t.QD)("code",null,"docs/.vuepress",-1),D={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress",target:"_blank",rel:"noopener noreferrer"},y=(0,t.QD)("code",null,"docs/.vuepress/sidebar.ts",-1),Q=(0,t.QD)("code",null,"docs/.vuepress/theme.ts",-1),w={href:"https://newzone.top/web/Comments.html",target:"_blank",rel:"noopener noreferrer"},x=(0,t.IL)('<p>注意：</p><ul><li>LearnData 默认采用 algolia 进行全文检索。如果你没用 algolia，可在 <code>docs/.vuepress/theme.ts</code> 文件的 plugins 部分删除 docsearch 区块，并激活 searchPro。这样，网站将转用本地全文索引来进行搜索。</li><li><code>docs/_temp</code> 文件夹默认不同步到 GitHub 上。你可以手动在本地建立 <code>_temp</code> 文件夹，用来存放草稿。</li><li>自 VuePress2 的 beta.54 版本开始，文件夹名前缀为 <code>_</code> 在生成链接时将被省略，例如文章路径为 <code>/_posts/</code>，但网页链接路径会是 <code>/posts/</code>。</li></ul><h3 id="看板娘" tabindex="-1"><a class="header-anchor" href="#看板娘"><span>看板娘</span></a></h3>',3),Y={href:"https://github.com/stevenjoezhang/live2d-widget",target:"_blank",rel:"noopener noreferrer"},_=(0,t.QD)("code",null,"docs\\.vuepress\\public",-1),L=(0,t.IL)("<p>如果网站部署在子页面 <code>https://xxx.github.io/yyy</code>，则需将子页面路径 yyy 加入到以下两个文件：</p><ul><li>将 <code>docs\\.vuepress\\public\\live2d-widget\\autoload.js</code> 文件第三行的 <code>const live2d_path = &quot;/live2d-widget/&quot;</code> 修改为 <code>const live2d_path = &quot;/yyy/live2d-widget/&quot;</code>。</li><li>将 <code>docs\\.vuepress\\templateBuild.html</code> 文件中看板娘区块代码 <code>&lt;script src=&quot;/live2d-widget/autoload.js&quot;&gt;</code> 修改为 <code>&lt;script src=&quot;/yyy/live2d-widget/autoload.js&quot;&gt;</code>。</li></ul>",2),P=(0,t.QD)("code",null,"docs\\.vuepress\\public\\live2d-widget",-1),z={href:"https://github.com/fghrsh/live2d_api",target:"_blank",rel:"noopener noreferrer"},E=(0,t.IL)('<h3 id="读书笔记" tabindex="-1"><a class="header-anchor" href="#读书笔记"><span>读书笔记</span></a></h3><p>读书笔记中可能会有大量的原文引用，这与 LearnData 精简化知识点的初衷并不相符。因此，我们使用 docsify 来构建读书笔记，并将其放置于 <code>docs/reading</code> 目录下。在生成静态页面后，该路径下的文件不会被转换为 HTML 文件，而是将被自动复制到静态网站下，完成 docsify 页面构建和独立的读书笔记搜索索引。</p><p>由于读书笔记架构更换到 docsify，不能使用相对链接。请调整 <code>docs\\.vuepress\\sidebar.ts</code> 的 <code>{ text: &quot;读书笔记&quot;, icon: &quot;read&quot;, link: &quot;https://newzone.top/reading/&quot; }</code>，将 <code>newzone.top</code> 替换为你的博客域名。</p><p>如果你没有部署 Waline，或不需统计阅读量和评论功能，可移除 <code>docs\\reading\\index.html</code> 中的 Waline 代码块。</p><div class="language-javascript line-numbers-mode" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="token literal-property property">waline</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n   <span class="token literal-property property">serverURL</span><span class="token operator">:</span> <span class="token string">&quot;https://waline.newzone.top&quot;</span><span class="token punctuation">,</span>\n   <span class="token operator">...</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="本地图片引用" tabindex="-1"><a class="header-anchor" href="#本地图片引用"><span>本地图片引用</span></a></h3><p>为了避免在生成静态页面时出现 <code>Rollup failed to resolve import</code> 错误，本地图片必须保存在 <code>docs/.vuepress/public</code> 路径下。如果图片名称为 <code>1.png</code>，保存在 <code>docs/.vuepress/public/imgs</code> 路径下，则可以使用以下链接来引用该图片：<code>/imgs/1.png</code> 或使用 Markdown 图片链接：<code>![](/imgs/1.png)</code>。本方法也适用于将附件部署到网站上。</p><h2 id="🖥️-网站部署" tabindex="-1"><a class="header-anchor" href="#🖥️-网站部署"><span>🖥️ 网站部署</span></a></h2><p>在将 LearnData 推送到 GitHub 后，会自动生成可访问的网页。但由于国内访问 GitHub Pages 的速度不稳定，为了确保网站能够正常访问，建议增加国内的访问节点。</p><p>很多人选择使用 Gitee Pages 作为国内节点，通过 GitHub Actions 将新文档同步到 Gitee 上，从而生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 有很多限制，例如必须实名认证、免费版无法自定义域名，近期也发生过下架风波。因此，我没有选择 Gitee，而是将文档同步到国内服务器（域名需要备案）或 Vercel（国外服务可能会出现断网）。</p><h3 id="同步到服务器" tabindex="-1"><a class="header-anchor" href="#同步到服务器"><span>同步到服务器</span></a></h3><p>如果你的项目已经搭建好，但出现了红色的叉叉提示，这可能是 GitHub Actions 同步到服务器时发生了错误。你需要进入项目仓库的「Setting」&gt;「Secrets」&gt;「Action」，并添加 <code>FTP_HOST</code>、<code>FTP_PORT</code>、<code>FTP_USERNAME</code> 和 <code>FTP_PASSWORD</code> 的密钥。之后，每当文件发生变化时，GitHub Actions 就会将修改推送到服务器的 FTP 上。</p>',12),G={href:"https://newzone.top/deploy/Static.html#%E5%90%8C%E6%AD%A5%E5%88%B0-oss",target:"_blank",rel:"noopener noreferrer"},A=(0,t.QD)("h3",{id:"部署到-vercel",tabindex:"-1"},[(0,t.QD)("a",{class:"header-anchor",href:"#部署到-vercel"},[(0,t.QD)("span",null,"部署到 Vercel")])],-1),V=(0,t.QD)("p",null,[(0,t.mY)("Vercel 的速度相对 GitHub Pages 更快，但 "),(0,t.QD)("code",null,"*.vercel.app"),(0,t.mY)(" 域名已受 DNS 污染影响。为保证国内用户访问稳定，需绑定自定义域名。")],-1),H=(0,t.QD)("p",null,"Vercel 部署步骤如下：",-1),T={href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frockbenben%2FLearnData%2Ftree%2Fgh-pages",target:"_blank",rel:"noopener noreferrer"},R=(0,t.QD)("img",{src:"https://vercel.com/button",alt:"Vercel",loading:"lazy"},null,-1),S=(0,t.QD)("code",null,"https://vercel.com/new/clone?repository-url=https://github.com/rockbenben/LearnData/tree/gh-pages",-1),O=(0,t.QD)("code",null,"rockbenben/LearnData",-1),q=(0,t.QD)("code",null,"你的用户名/仓库名",-1),F=(0,t.IL)('<li><p>输入一个你喜欢的 Vercel 项目名称，默认 private 即可，然后点击 <code>Create</code>。</p><figure><img src="https://img.newzone.top/2022-08-24-17-24-16.png" alt="" tabindex="0" loading="lazy"><figcaption>创建 Vercel 项目</figcaption></figure></li><li><p>接着，Vercel 会基于 LearnData 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。几十秒后，满屏的烟花会庆祝你部署成功。此时，点击 <code>Go to Dashboard</code> 跳转到应用的控制台。</p><figure><img src="https://img.newzone.top/2022-08-24-17-21-58.png" alt="" tabindex="0" loading="lazy"><figcaption>Vercel 部署成功提示</figcaption></figure></li>',2),N=(0,t.QD)("p",null,[(0,t.mY)("为了让 Vercel 页面与 GitHub Pages 自动保持同步更新，你需要配置 "),(0,t.QD)("code",null,"PERSONAL_TOKEN"),(0,t.mY)(" 和 GitHub Actions。")],-1),j={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},M=(0,t.QD)("li",null,"在项目仓库中选择「setting」>「Secrets」>「Action」，新建密钥 PERSONAL_TOKEN，并填入刚复制的 token 值。",-1),K=(0,t.QD)("li",null,[(0,t.mY)("将下方代码编辑到 "),(0,t.QD)("code",null,".github/workflows/main.yml"),(0,t.mY)(" 文件末尾，注意修改 "),(0,t.QD)("code",null,"dst_owner"),(0,t.mY)(" 和 "),(0,t.QD)("code",null,"dst_repo_name"),(0,t.mY)("。")],-1),C=(0,t.IL)('<div class="language-yaml line-numbers-mode" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="token comment"># 将页面更新到 Vercel</span>\n<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy file to Vercel\n  <span class="token key atrule">if</span><span class="token punctuation">:</span> always()\n  <span class="token key atrule">uses</span><span class="token punctuation">:</span> andstor/copycat<span class="token punctuation">-</span>action@v3\n  <span class="token key atrule">with</span><span class="token punctuation">:</span>\n    <span class="token key atrule">personal_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PERSONAL_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>\n    <span class="token key atrule">src_path</span><span class="token punctuation">:</span> /.\n    <span class="token key atrule">dst_path</span><span class="token punctuation">:</span> /\n    <span class="token comment"># 你的用户名</span>\n    <span class="token key atrule">dst_owner</span><span class="token punctuation">:</span> rockbenben\n    <span class="token comment"># 与 Vercel 链接的仓库名，也就是 Vercel 部署时新建的仓库</span>\n    <span class="token key atrule">dst_repo_name</span><span class="token punctuation">:</span> LearnData<span class="token punctuation">-</span>Vercel\n    <span class="token key atrule">dst_branch</span><span class="token punctuation">:</span> main\n    <span class="token key atrule">src_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages\n    <span class="token key atrule">clean</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',1),I=(0,t.IL)('<h2 id="🤔-常见问题" tabindex="-1"><a class="header-anchor" href="#🤔-常见问题"><span>🤔 常见问题</span></a></h2><h3 id="网页显示异常" tabindex="-1"><a class="header-anchor" href="#网页显示异常"><span>网页显示异常</span></a></h3><p>如果你的网站只显示文字而不能正常显示网页，可能是因为网站路径不正确导致的页面样式错误。比如，GitHub Page 提示访问链接 <code>https://xxx.github.io/yyy</code>，则需要将 <code>docs/.vuepress/config.ts</code> 中的 base 改为 <code>/yyy</code>，其默认值为 <code>/</code>。请按照此路径将网站的 base 设置正确，以确保你的网站能够正常显示。</p><figure><img src="https://img.newzone.top/2023-03-14-06-11-10.png?imageMogr2/format/webp" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h3 id="同步服务器报错" tabindex="-1"><a class="header-anchor" href="#同步服务器报错"><span>同步服务器报错</span></a></h3><ul><li><p><code>Error: Input required and not supplied: server</code> 表示服务器配置错误，请按照上方的网站部署步骤检查配置。如果你不需要将<strong>网页部署同步到服务器</strong>，可以删除 <code>.github/workflows/main.yml</code> 中 Sync files 区块的代码。</p></li><li><p><code>FTPError: 530 Login authentication failed</code> 指 FTP 密码错误或账号不存在，可使用 FileZilla 来测试 FTP 的有效性。</p></li><li><p><code>Error: Timeout (control socket)</code> 指同步服务器出现超时报错。如果出现该错误，可以进入 Actions 页面，点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭服务器防火墙，检查 GitHub 服务器 IP 是否屏蔽了。</p></li></ul><h3 id="err-module" tabindex="-1"><a class="header-anchor" href="#err-module"><span>ERR_MODULE</span></a></h3><p>如果出现 <code>Error [ERR_MODULE_NOT_FOUND]: Cannot find module</code> 的报错，可能是第三方插件或 pacakge.json 环境依赖未正确配置。此报错出现的几率极低，如果遇到，可以使用最新版本的 <code>package.json</code> 和 <code>pnpm-lock.yaml</code> 来覆盖本地设置，或者删除主目录下的 <code>.npmrc</code> 文件。</p><h3 id="本地运行-learndata" tabindex="-1"><a class="header-anchor" href="#本地运行-learndata"><span>本地运行 LearnData</span></a></h3>',9),W={href:"https://newzone.top/deploy/VPS.html#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"},B=(0,t.QD)("li",null,[(0,t.mY)("将 LearnData 项目下载到本地后，在项目目录下打开终端，输入命令 "),(0,t.QD)("code",null,"pnpm i"),(0,t.mY)(" 安装依赖。")],-1),U=(0,t.QD)("li",null,[(0,t.mY)("在终端中输入命令 "),(0,t.QD)("code",null,"pnpm docs:dev"),(0,t.mY)("，若成功则会提示访问链接，默认为 "),(0,t.QD)("code",null,"http://localhost:8080/"),(0,t.mY)("。")],-1),Z=(0,t.QD)("p",null,[(0,t.mY)("本地服务运行后，修改文件时页面会同步更新预览。若需停止本地服务器，可在终端中按下 "),(0,t.QD)("code",null,"Ctrl + C"),(0,t.mY)("。")],-1),J={href:"https://newzone.top/posts/2024-01-28-learndata-advanced.html",target:"_blank",rel:"noopener noreferrer"},X={},$=(0,a(9720).c)(X,[["render",function(e,n){const a=(0,t.E1)("ExternalLinkIcon");return(0,t.Wz)(),(0,t.An)("div",null,[s,(0,t.QD)("figure",null,[(0,t.QD)("a",l,[o,(0,t.K2)(a)]),i]),r,(0,t.QD)("ol",null,[(0,t.QD)("li",null,[(0,t.QD)("p",null,[(0,t.mY)("首先，进入 "),(0,t.QD)("a",c,[(0,t.mY)("LearnData"),(0,t.K2)(a)]),(0,t.mY)(" 项目页，点击右上角「Use this template」后选择「Create a new repository」。")]),p,d]),u]),m,g,(0,t.QD)("p",null,[(0,t.mY)("LearnData 网站的配置和文本都存放在 "),h,(0,t.mY)(" 文件夹中。文章和页面的配置可参考主目录下的 "),(0,t.QD)("a",b,[(0,t.mY)("samplepage.md"),(0,t.K2)(a)]),(0,t.mY)("。其中，"),v,(0,t.mY)(" 参数表示侧边栏的顺序，数字越小越靠前，支持非整数和负数。我个人的偏好是将非干货或随想短文的 order 设置在 -0.01 到 -0.99，将干货类长文的 order 设置在 -1 到负无穷。每次新增文章都会在上一篇的基础上递减 order 值。这种设置使我能随时记录低于 1000 字的短文，同时不会影响那些寻求干货文章的用户体验，因为干货文章的排序始终保持在最上方。")]),k,(0,t.QD)("p",null,[f,(0,t.mY)(" 路径下是网站的配置文件，我已添加了详细的注释。你可以参考注释和 "),(0,t.QD)("a",D,[(0,t.mY)("vuepress-theme-hope 配置案例"),(0,t.K2)(a)]),(0,t.mY)("来调整配置。请在 "),y,(0,t.mY)(" 文件中修改文件夹路径，后台会自动抓取路径下的 md 文件来生成侧边栏。"),Q,(0,t.mY)(" 有"),(0,t.QD)("a",w,[(0,t.mY)("评论插件"),(0,t.K2)(a)]),(0,t.mY)("的相关配置。")]),x,(0,t.QD)("p",null,[(0,t.mY)("LearnData 集成了看板娘 "),(0,t.QD)("a",Y,[(0,t.mY)("Live2D Widget"),(0,t.K2)(a)]),(0,t.mY)("，支持随机对话、切换人物服饰和玩打飞机游戏，能提升网站美观度和趣味性。如果不需要看板娘，可以删除 "),_,(0,t.mY)(" 下的 live2d-widget 文件夹。")]),L,(0,t.QD)("p",null,[(0,t.mY)("如果你想要修改看板娘模型，请参考 "),P,(0,t.mY)(" 路径下的 README 和修改说明。如果你想在服务器上自建 "),(0,t.QD)("a",z,[(0,t.mY)("live2d api"),(0,t.K2)(a)]),(0,t.mY)("，请注意添加跨域配置，否则可能会出现只显示文字而不显示看板娘图片的情况。")]),E,(0,t.QD)("p",null,[(0,t.mY)("你也可以参考文章 "),(0,t.QD)("a",G,[(0,t.mY)("GitHub 同步到 OSS"),(0,t.K2)(a)]),(0,t.mY)("，将网页部署到云存储上。")]),A,V,H,(0,t.QD)("ol",null,[(0,t.QD)("li",null,[(0,t.QD)("p",null,[(0,t.mY)("点击 "),(0,t.QD)("a",T,[R,(0,t.K2)(a)]),(0,t.mY)(" 或将 "),S,(0,t.mY)(" 中的 "),O,(0,t.mY)(" 改为 "),q,(0,t.mY)("，然后会跳转至 Vercel 进行网页部署。如果你未登录，Vercel 提示你注册或登录，请使用 GitHub 账户进行快捷登录。")])]),F,(0,t.QD)("li",null,[N,(0,t.QD)("ul",null,[(0,t.QD)("li",null,[(0,t.mY)("新建 "),(0,t.QD)("a",j,[(0,t.mY)("Personal access tokens"),(0,t.K2)(a)]),(0,t.mY)("，勾选权限「repo (Full control of private repositories)」，生成后复制 token 值。")]),M,K]),C])]),I,(0,t.QD)("ol",null,[(0,t.QD)("li",null,[(0,t.mY)("为了本地运行，你需要安装 npm 和 pnpm 环境，可参考"),(0,t.QD)("a",W,[(0,t.mY)("环境部署教程"),(0,t.K2)(a)]),(0,t.mY)("。")]),B,U]),Z,(0,t.QD)("p",null,[(0,t.mY)("如果你想深入了解 LearnData 的高级技巧，请浏览 "),(0,t.QD)("a",J,[(0,t.mY)("LearnData 博客：高效知识管理和进阶应用技巧"),(0,t.K2)(a)]),(0,t.mY)("。")])])}]]),ee=JSON.parse('{"path":"/","title":"LearnData 开源笔记","lang":"zh-CN","frontmatter":{"article":false,"title":"LearnData 开源笔记","icon":"note","description":" 开源工具、效率方法、心理学探索的自我提升笔记 ✨ 初衷 曾经，我采用了 Notion、Obsidian 和 飞书 等多款知识管理工具来存储我的心得与笔记。然而，这种方式导致我的资料分散，难以管理和分享。 更重要的是，笔记里的知识并不属于你，只有经过消化、应用，才会成为我们的财富。 为此，我基于 VuePress 和 vuepress-theme-ho...","head":[["meta",{"property":"og:url","content":"https://newzone.top/"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"LearnData 开源笔记"}],["meta",{"property":"og:description","content":" 开源工具、效率方法、心理学探索的自我提升笔记 ✨ 初衷 曾经，我采用了 Notion、Obsidian 和 飞书 等多款知识管理工具来存储我的心得与笔记。然而，这种方式导致我的资料分散，难以管理和分享。 更重要的是，笔记里的知识并不属于你，只有经过消化、应用，才会成为我们的财富。 为此，我基于 VuePress 和 vuepress-theme-ho..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:image","content":"https://img.shields.io/discord/1048780149899939881?color=%2385c8c8&label=Discord&logo=discord&style=for-the-badge"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-14T00:33:31.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"LearnData 开源笔记"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-14T00:33:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"LearnData 开源笔记\\",\\"description\\":\\" 开源工具、效率方法、心理学探索的自我提升笔记 ✨ 初衷 曾经，我采用了 Notion、Obsidian 和 飞书 等多款知识管理工具来存储我的心得与笔记。然而，这种方式导致我的资料分散，难以管理和分享。 更重要的是，笔记里的知识并不属于你，只有经过消化、应用，才会成为我们的财富。 为此，我基于 VuePress 和 vuepress-theme-ho...\\"}"]]},"headers":[{"level":2,"title":"✨ 初衷","slug":"✨-初衷","link":"#✨-初衷","children":[]},{"level":2,"title":"🧱 笔记结构","slug":"🧱-笔记结构","link":"#🧱-笔记结构","children":[]},{"level":2,"title":"🍥 搭建 LearnData","slug":"🍥-搭建-learndata","link":"#🍥-搭建-learndata","children":[]},{"level":2,"title":"🔣 配置 LearnData","slug":"🔣-配置-learndata","link":"#🔣-配置-learndata","children":[{"level":3,"title":"文档结构","slug":"文档结构","link":"#文档结构","children":[]},{"level":3,"title":"看板娘","slug":"看板娘","link":"#看板娘","children":[]},{"level":3,"title":"读书笔记","slug":"读书笔记","link":"#读书笔记","children":[]},{"level":3,"title":"本地图片引用","slug":"本地图片引用","link":"#本地图片引用","children":[]}]},{"level":2,"title":"🖥️ 网站部署","slug":"🖥️-网站部署","link":"#🖥️-网站部署","children":[{"level":3,"title":"同步到服务器","slug":"同步到服务器","link":"#同步到服务器","children":[]},{"level":3,"title":"部署到 Vercel","slug":"部署到-vercel","link":"#部署到-vercel","children":[]}]},{"level":2,"title":"🤔 常见问题","slug":"🤔-常见问题","link":"#🤔-常见问题","children":[{"level":3,"title":"网页显示异常","slug":"网页显示异常","link":"#网页显示异常","children":[]},{"level":3,"title":"同步服务器报错","slug":"同步服务器报错","link":"#同步服务器报错","children":[]},{"level":3,"title":"ERR_MODULE","slug":"err-module","link":"#err-module","children":[]},{"level":3,"title":"本地运行 LearnData","slug":"本地运行-learndata","link":"#本地运行-learndata","children":[]}]}],"git":{"createdTime":1707870811000,"updatedTime":1707870811000,"contributors":[{"name":"shenbourne","email":"121733766+shenbourne@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":10.3,"words":3090},"filePathRelative":"README.md","localizedDate":"2024年2月14日","excerpt":"<blockquote>\\n<p>开源工具、效率方法、心理学探索的自我提升笔记</p>\\n</blockquote>\\n<figure><a href=\\"https://discord.gg/PZTQfJ4GjX\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\"><img src=\\"https://img.shields.io/discord/1048780149899939881?color=%2385c8c8&amp;label=Discord&amp;logo=discord&amp;style=for-the-badge\\" alt=\\"\\" tabindex=\\"0\\" loading=\\"lazy\\"></a><figcaption></figcaption></figure>","autoDesc":true}')}}]);