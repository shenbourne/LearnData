"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[1776],{9720:(a,e)=>{e.c=(a,e)=>{const t=a.__vccOpts||a;for(const[a,r]of e)t[a]=r;return t}},9332:(a,e,t)=>{t.r(e),t.d(e,{comp:()=>T,data:()=>d});var r=t(3968);const n={href:"http://qttabbar.wikidot.com/",target:"_blank",rel:"noopener noreferrer"},o={href:"https://github.com/indiff/qttabbar",target:"_blank",rel:"noopener noreferrer"},l=(0,r.IL)('<p>目前两个版本都存在相同问题，菜单栏是灰色的选不了 QTTabBar，IE 管理加载项里是空的，第三方扩展也启用了。</p><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><p>安装完成后，资源管理器地址栏-&gt;输入「控制面板」-&gt;按下 ALT-&gt;查看-&gt;工具栏-&gt;勾选「QTTabBar」，即可开启 QTTabBar。<sup class="footnote-ref"><a href="#footnote1">[1]</a><a class="footnote-anchor" id="footnote-ref1"></a></sup></p><p>有时选项里找不到 QTTabBar，这可能是因为你的 IE 浏览器禁止了第三方插件导致的。</p><p>解决办法：打开 IE 浏览器，点击「设置」&gt;「Internet 选项」&gt;「高级」，勾选「启用第三方浏览器扩展」，重启后生效。如果重启之后还是没有找到 QTTabBar，则打开 IE 浏览器，选择「设置」&gt;「管理加载项」，点击启用再确认一次。</p><p>启用 QTTabBar 后，IE 浏览器可能变得怪怪的，别担心，把两片白色区域 x 掉，再次启动 IE 再 x 一次然后就恢复正常了。</p><h3 id="qttabbar-失效" tabindex="-1"><a class="header-anchor" href="#qttabbar-失效"><span>QTTabBar 失效</span></a></h3><p>2022.05 补丁 KB5012643 KB5012159 导致 QTTabBar 失效。</p><p>管理员方式运行命令提示符 <code>dism /online /enable-feature /featurename:netfx3 /all</code>，执行完成重启电脑。</p><h2 id="常用设置" tabindex="-1"><a class="header-anchor" href="#常用设置"><span>常用设置</span></a></h2><p>QTTabBar 的选项非常强大，有空可以慢慢研究、打造自己趁手的多标签资源管理器。以下为常用的设置项，√ 表示启用，× 表示禁用。</p><h3 id="汉化" tabindex="-1"><a class="header-anchor" href="#汉化"><span>汉化</span></a></h3><p>对准多标签栏的空白处右键单击 <code>QTTabBar Options</code>，点击右侧带下载图标的 <code>Download Language File</code> 按钮。建议下载 Author 为 MCRy 的中文语言包，然后回到 <code>QTTabBar Options</code>，选择刚才下载的翻译文件，保存选项。再重新打开这个界面时，就是中文的了。</p><h3 id="选项卡-标签设置" tabindex="-1"><a class="header-anchor" href="#选项卡-标签设置"><span>选项卡/标签设置</span></a></h3><ul><li>× 添加“+”按钮到 选项卡栏（嫌丑。我们可以通过鼠标滚轮点击文件夹或左侧盘符来新建标签页</li><li>× 在选项卡上显示关闭按钮（嫌丑 x2。熟悉 Chrome 的都知道 Ctrl+W 关闭当前标签、滚轮点击标签也可关闭。这两种快捷方式在这里同样适用</li><li>√ 已锁定选项卡的行为 - 禁止关闭窗口（Ctrl+L 锁定标签，被锁定的标签无法被关闭。开启此项后整个窗口也无法被关闭，防止误操作</li><li>√ 按 Ctrl+Tab 显示选项卡切换器（挺好用</li></ul><h3 id="窗口" tabindex="-1"><a class="header-anchor" href="#窗口"><span>窗口</span></a></h3><ul><li>√ 捕获窗口 - 通过 ShellExecuteHooks 捕获窗口（听说不开它 Win+E 就不显示 QTTabBar。</li></ul><h3 id="鼠标事件" tabindex="-1"><a class="header-anchor" href="#鼠标事件"><span>鼠标事件</span></a></h3><ul><li>互动 - 点击标签栏的 + 按钮，打开桌面。</li><li>窗口和任务栏 - 窗口的关闭按钮 - 关闭窗口（这是 Clover 的遗留习惯吧。看个人爱好。</li></ul><h3 id="预览" tabindex="-1"><a class="header-anchor" href="#预览"><span>预览</span></a></h3><ul><li>× 扩展、字体和颜色 - 删除掉一些视频文件格式（默认开启的视频预览没啥卵用，还会导致鼠标移动顿卡。</li></ul><h3 id="群组" tabindex="-1"><a class="header-anchor" href="#群组"><span>群组</span></a></h3><ul><li>建立群组，并将其设为启动群组。打开 expoloer 会自动启动。</li></ul><hr class="footnotes-sep">',24),i={class:"footnotes"},s={class:"footnotes-list"},p={id:"footnote1",class:"footnote-item"},b={href:"https://github.com/indiff/qttabbar/wiki/Windows11%E5%AE%89%E8%A3%85qttabbar",target:"_blank",rel:"noopener noreferrer"},c=(0,r.QD)("a",{href:"#footnote-ref1",class:"footnote-backref"},"↩︎",-1),h={},T=(0,t(9720).c)(h,[["render",function(a,e){const t=(0,r.E1)("ExternalLinkIcon");return(0,r.Wz)(),(0,r.An)("div",null,[(0,r.QD)("p",null,[(0,r.mY)("QTTabBar 让你在 Windows 资源管理器中使用 Tab 多标签功能。这款应用存在两个版本，一个是日本作者 @Quizo 的"),(0,r.QD)("a",n,[(0,r.mY)("原版 QTTabBar"),(0,r.K2)(t)]),(0,r.mY)("（闭源，更新慢），另一个是国内反编译出的"),(0,r.QD)("a",o,[(0,r.mY)("开源 QTTabBar"),(0,r.K2)(t)]),(0,r.mY)("。")]),l,(0,r.QD)("section",i,[(0,r.QD)("ol",s,[(0,r.QD)("li",p,[(0,r.QD)("p",null,[(0,r.QD)("a",b,[(0,r.mY)("Windows11 安装 qttabbar"),(0,r.K2)(t)]),(0,r.mY)(),c])])])])])}]]),d=JSON.parse('{"path":"/apps/tutorials/QTTabBar.html","title":"QTTabBar","lang":"zh-CN","frontmatter":{"article":false,"title":"QTTabBar","order":101,"description":"QTTabBar 让你在 Windows 资源管理器中使用 Tab 多标签功能。这款应用存在两个版本，一个是日本作者 @Quizo 的原版 QTTabBar（闭源，更新慢），另一个是国内反编译出的开源 QTTabBar。 目前两个版本都存在相同问题，菜单栏是灰色的选不了 QTTabBar，IE 管理加载项里是空的，第三方扩展也启用了。 安装 安装完成后...","head":[["meta",{"property":"og:url","content":"https://newzone.top/apps/tutorials/QTTabBar.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"QTTabBar"}],["meta",{"property":"og:description","content":"QTTabBar 让你在 Windows 资源管理器中使用 Tab 多标签功能。这款应用存在两个版本，一个是日本作者 @Quizo 的原版 QTTabBar（闭源，更新慢），另一个是国内反编译出的开源 QTTabBar。 目前两个版本都存在相同问题，菜单栏是灰色的选不了 QTTabBar，IE 管理加载项里是空的，第三方扩展也启用了。 安装 安装完成后..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-14T00:33:31.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-14T00:33:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"QTTabBar\\",\\"description\\":\\"QTTabBar 让你在 Windows 资源管理器中使用 Tab 多标签功能。这款应用存在两个版本，一个是日本作者 @Quizo 的原版 QTTabBar（闭源，更新慢），另一个是国内反编译出的开源 QTTabBar。 目前两个版本都存在相同问题，菜单栏是灰色的选不了 QTTabBar，IE 管理加载项里是空的，第三方扩展也启用了。 安装 安装完成后...\\"}"]]},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[{"level":3,"title":"QTTabBar 失效","slug":"qttabbar-失效","link":"#qttabbar-失效","children":[]}]},{"level":2,"title":"常用设置","slug":"常用设置","link":"#常用设置","children":[{"level":3,"title":"汉化","slug":"汉化","link":"#汉化","children":[]},{"level":3,"title":"选项卡/标签设置","slug":"选项卡-标签设置","link":"#选项卡-标签设置","children":[]},{"level":3,"title":"窗口","slug":"窗口","link":"#窗口","children":[]},{"level":3,"title":"鼠标事件","slug":"鼠标事件","link":"#鼠标事件","children":[]},{"level":3,"title":"预览","slug":"预览","link":"#预览","children":[]},{"level":3,"title":"群组","slug":"群组","link":"#群组","children":[]}]}],"git":{"createdTime":1707870811000,"updatedTime":1707870811000,"contributors":[{"name":"shenbourne","email":"121733766+shenbourne@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.65,"words":795},"filePathRelative":"apps/tutorials/QTTabBar.md","localizedDate":"2024年2月14日","excerpt":"<p>QTTabBar 让你在 Windows 资源管理器中使用 Tab 多标签功能。这款应用存在两个版本，一个是日本作者 @Quizo 的<a href=\\"http://qttabbar.wikidot.com/\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">原版 QTTabBar</a>（闭源，更新慢），另一个是国内反编译出的<a href=\\"https://github.com/indiff/qttabbar\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">开源 QTTabBar</a>。</p>\\n<p>目前两个版本都存在相同问题，菜单栏是灰色的选不了 QTTabBar，IE 管理加载项里是空的，第三方扩展也启用了。</p>","autoDesc":true}')}}]);