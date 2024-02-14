"use strict";(self.webpackChunklearn_data=self.webpackChunklearn_data||[]).push([[7456],{9720:(e,n)=>{n.c=(e,n)=>{const a=e.__vccOpts||e;for(const[e,s]of n)a[e]=s;return a}},7700:(e,n,a)=>{a.r(n),a.d(n,{comp:()=>g,data:()=>f});var s=a(3968);const o=(0,s.QD)("p",null,"Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。",-1),r=(0,s.QD)("h2",{id:"docker-命令",tabindex:"-1"},[(0,s.QD)("a",{class:"header-anchor",href:"#docker-命令"},[(0,s.QD)("span",null,"Docker 命令")])],-1),t={href:"https://yeasy.gitbook.io/docker_practice/introduction/what",target:"_blank",rel:"noopener noreferrer"},l=(0,s.IL)('<ul><li>列出所有容器：<code>sudo docker ps -a</code>。</li><li>停止容器运行：<code>sudo docker stop &lt;CONTAINER ID/NAME&gt;</code>。部分容器名有可能无法识别，最好在容器名称中添加数字。</li><li>删除指定容器：<code>sudo docker rm &lt;CONTAINER ID/NAME&gt;</code>，删除前需先停止容器。</li><li>清理容器（慎重）：<code>sudo docker system prune -a</code>，用于清理磁盘，删除关闭的容器、无用的数据卷和网络，以及无 tag 和没使用的镜像。</li><li>清理数据卷（慎重）：<code>sudo docker volume prune</code>，关闭的容器数据卷会被删除，有可能破坏有用数据，需极度谨慎。</li><li>导出容器中的 mysql 数据库 <code>sudo docker exec &lt;container_id&gt; mysqldump -u root -p&lt;your_mysql_root_password&gt; your_database_name &gt; &lt;output_file&gt;</code>。将 &lt;container_id&gt; 替换为实际的容器 ID，将 &lt;output_file&gt; 替换为你想要保存导出文件的路径和文件名。请将 &lt;your_mysql_root_password&gt; 替换为你的 MySQL root 用户密码。完成后，你将得到一个 MySQL 数据库备份文件。比如导出 Huginn 数据库，<code>sudo docker exec 3de3058e4468 mysqldump -u root -p&lt;your_mysql_root_password&gt; huginn_production &gt; /volume1/docker/huginn/backup.sql</code>。</li></ul><h2 id="定制-docker-镜像" tabindex="-1"><a class="header-anchor" href="#定制-docker-镜像"><span>定制 Docker 镜像</span></a></h2>',2),c={href:"https://blog.csdn.net/a772304419/article/details/123199579",target:"_blank",rel:"noopener noreferrer"},i=(0,s.IL)('<p>例如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">docker</span> commit <span class="token punctuation">\\</span>\n    <span class="token parameter variable">--message</span> <span class="token string">&quot;基于 Ubuntu 18.04 构建的 Huginn&quot;</span> <span class="token punctuation">\\</span>\n    ubuntu <span class="token punctuation">\\</span>\n    huginnxubuntu:1.0\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，可以使用 Dockerfile 来构建镜像，如：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>    build:\n      context: /volume1/docker/danmuji\n      dockerfile: Dockerfile\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如何将镜像推送到 DockerHub：</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token builtin class-name">echo</span> <span class="token string">&quot;您的密码&quot;</span> <span class="token operator">|</span> <span class="token function">docker</span> login <span class="token parameter variable">--username</span><span class="token operator">=</span>您的用户名 --password-stdin\n\n<span class="token function">docker</span> build <span class="token parameter variable">-t</span> rockben/cors-anywhere:0.4.4 <span class="token builtin class-name">.</span>\n<span class="token function">docker</span> push rockben/cors-anywhere:0.4.4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果你的 Dockerfile 有后缀，则可以用 -f 指定 Dockerfile 文件路径</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 构建容器 gramps-api-dev</span>\n<span class="token builtin class-name">cd</span> D:<span class="token punctuation">\\</span>Backup<span class="token punctuation">\\</span>Libraries<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>Gramps.js-main<span class="token punctuation">\\</span>dev\n<span class="token function">docker</span> build <span class="token parameter variable">-t</span> rockben/gramps-api-dev <span class="token parameter variable">-f</span> ./Dockerfile.api <span class="token builtin class-name">.</span>\n<span class="token function">docker</span> push rockben/gramps-api-dev\n\n<span class="token comment"># 构建容器 gramps-frontend-dev</span>\n<span class="token comment"># 将 ./dev/Dockerfile.frontend 复制到解压路径</span>\n<span class="token builtin class-name">cd</span> D:<span class="token punctuation">\\</span>Backup<span class="token punctuation">\\</span>Libraries<span class="token punctuation">\\</span>Desktop<span class="token punctuation">\\</span>Gramps.js-main\n<span class="token function">docker</span> build <span class="token parameter variable">-t</span> rockben/gramps-frontend-dev <span class="token parameter variable">-f</span> ./dev/Dockerfile.frontend <span class="token builtin class-name">.</span>\n<span class="token function">docker</span> push rockben/gramps-frontend-dev\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-数据库管理" tabindex="-1"><a class="header-anchor" href="#docker-数据库管理"><span>Docker 数据库管理</span></a></h2><p>在 Docker 中，数据库可以引用外部资源并被永久保留。但保存的外部数据是多个小文件而不是完整的 MySQL 文件。在实际操作中，我们应关注正在运行的数据库，而非外部存储文件。</p><p>首先，应将 Docker 数据库的端口暴露给外部，如将 MySQL 的默认端口 3306 映射到外部的 3307 端口。随后，使用数据库工具连接到 <code>192.168.3.3:3307</code>。这类似于使用 phpMyAdmin，可以轻松查看、编辑和导出 Docker 内的数据库。如果数据库连接遭到拒绝，可以参照 Huginn 的内部数据库连接设置，确保当前外部连接 IP 是允许的。</p><h2 id="其他使用" tabindex="-1"><a class="header-anchor" href="#其他使用"><span>其他使用</span></a></h2><h3 id="windows-docker" tabindex="-1"><a class="header-anchor" href="#windows-docker"><span>Windows Docker</span></a></h3>',13),p={href:"https://www.runoob.com/docker/windows-docker-install.html",target:"_blank",rel:"noopener noreferrer"},d={href:"https://newzone.top/posts/2022-09-05-stable_diffusion_ai_painting.html#docker-%E7%8E%AF%E5%A2%83%E9%85%8D%E7%BD%AE",target:"_blank",rel:"noopener noreferrer"},u=(0,s.QD)("p",null,[(0,s.mY)("Windows 本地磁盘被挂载到 Linux 的 mnt 目录下，因此，如果需要在 WSL 中访问 Windows 文件，需要在路径前添加 "),(0,s.QD)("code",null,"/mnt/"),(0,s.mY)(" 前缀，并将磁盘符号改为小写字母，将反斜杠 "),(0,s.QD)("code",null,"\\"),(0,s.mY)(" 替换为正斜杠 "),(0,s.QD)("code",null,"/"),(0,s.mY)("。例如，如果 Windows 文件位于「D:\\Backup\\Libraries\\Desktop\\stable-diffusion-webui-docker」目录下，则其在 Linux 中的路径为「/mnt/d/Backup/Libraries/Desktop/stable-diffusion-webui-docker」。Windows 上的 WSL 本地路径为 "),(0,s.QD)("code",null,"\\\\wsl.localhost\\"),(0,s.mY)("。")],-1),k={href:"https://learn.microsoft.com/zh-cn/windows/dev-environment/javascript/nodejs-on-wsl",target:"_blank",rel:"noopener noreferrer"},m=(0,s.QD)("h3",{id:"宝塔镜像",tabindex:"-1"},[(0,s.QD)("a",{class:"header-anchor",href:"#宝塔镜像"},[(0,s.QD)("span",null,"宝塔镜像")])],-1),b={href:"https://www.bt.cn/bbs/thread-79499-1-1.html",target:"_blank",rel:"noopener noreferrer"},v={href:"http://blog.huangyuqiang.cn/index.php/2022/11/02/docker%E5%AE%89%E8%A3%85%E5%AE%9D%E5%A1%94%E7%8E%AF%E5%A2%83/",target:"_blank",rel:"noopener noreferrer"},h=(0,s.IL)('<div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token comment"># 按需求修改映射端口和目录，1024 以下的端口不能给普通用户用</span>\n<span class="token function">sudo</span> <span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--restart</span> unless-stopped <span class="token parameter variable">--name</span> baota <span class="token parameter variable">-p</span> <span class="token number">8889</span>:8888 <span class="token parameter variable">-p</span> <span class="token number">1033</span>:22 <span class="token parameter variable">-p</span> <span class="token number">1044</span>:443 <span class="token parameter variable">-p</span> <span class="token number">1081</span>:80 <span class="token parameter variable">-p</span> <span class="token number">1889</span>:888 <span class="token parameter variable">-v</span> /volume1/docker/btpanel/website_data:/www/wwwroot <span class="token parameter variable">-v</span> /volume1/docker/btpanel/mysql_data:/www/server/data <span class="token parameter variable">-v</span> /volume1/docker/btpanel/vhost:/www/server/panel/vhost btpanel/baota:lnmp\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>在站点设置中，绑定你的本地域名 home.xx.com 和内部地址 192.168.x.x，这样你就可以通过访问 home.xx.com:1081 来访问该站点。</p><ul><li>默认地址 <code>http://192.168.x.x:8889/btpanel</code> 上的宝塔面板。</li><li>默认用户：btpanel</li><li>默认密码：btpaneldocker</li><li>镜像默认 SSH 密码：btpaneldocker</li></ul><p>如果宝塔镜像仅用于测试环境，可以使用 <code>rm -f /www/server/panel/data/admin_path.pl</code> 命令来关闭面板入口。如果你关闭了 NAS 的 SSH 功能，宝塔面板也将停止，但不会影响已运行的网站。</p>',4),D={},g=(0,a(9720).c)(D,[["render",function(e,n){const a=(0,s.E1)("RouteLink"),D=(0,s.E1)("ExternalLinkIcon");return(0,s.Wz)(),(0,s.An)("div",null,[o,(0,s.QD)("p",null,[(0,s.mY)("Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来管理多个 Docker 容器，并配置应用程序需要的所有服务。在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。强烈推荐使用 Compose 搭建所有 Docker，流程参考 "),(0,s.K2)(a,{to:"/services/NAS.html#nas-docker"},{default:(0,s.Ql)((()=>[(0,s.mY)("NAS 上搭建 Docker")])),_:1}),(0,s.mY)("。")]),r,(0,s.QD)("p",null,[(0,s.mY)("Docker 使用查看 "),(0,s.QD)("a",t,[(0,s.mY)("Docker — 从入门到实践"),(0,s.K2)(D)]),(0,s.mY)("。")]),l,(0,s.QD)("p",null,[(0,s.mY)("有时官方镜像可能不满足我们的需求。这时，我们可以使用 docker commit 命令定制自己的镜像。如何使用，可以查看"),(0,s.QD)("a",c,[(0,s.mY)("如何保存修改后的容器为镜像"),(0,s.K2)(D)]),(0,s.mY)("。")]),i,(0,s.QD)("p",null,[(0,s.mY)("在 Windows 系统上，可以使用 "),(0,s.QD)("a",p,[(0,s.mY)("Docker Desktop"),(0,s.K2)(D)]),(0,s.mY)(" 来管理容器，配置方法可参考 "),(0,s.QD)("a",d,[(0,s.mY)("Windows Docker 环境配置"),(0,s.K2)(D)]),(0,s.mY)("。")]),u,(0,s.QD)("p",null,[(0,s.mY)("请注意：WSL 上的 Linux 环境与其他环境有所不同，须查看"),(0,s.QD)("a",k,[(0,s.mY)("在适用于 Linux 的 Windows 子系统 (WSL2) 上安装 Node.js"),(0,s.K2)(D)]),(0,s.mY)("。")]),m,(0,s.QD)("p",null,[(0,s.mY)("如果要在 Docker 上部署网站，推荐使用宝塔官方的集成镜像。它基于 CentOS 7.9，解决了 Docker 内部链接问题，还支持将数据库定时备份到本地。有关配置信息，请参考"),(0,s.QD)("a",b,[(0,s.mY)("宝塔面板定制 docker 镜像发布 - 集成 LN/AMP 支持"),(0,s.K2)(D)]),(0,s.mY)("和 "),(0,s.QD)("a",v,[(0,s.mY)("Docker 安装宝塔环境"),(0,s.K2)(D)]),(0,s.mY)("。但是，该镜像不适用于 Huginn 的部署，因为 Huginn 不支持 CentOS。我曾尝试将安装命令从 apt-get 替换为 yum，但仍然无法部署。当我尝试在 Docker 中直接安装宝塔而不使用官方集成镜像时，遇到了无法启动数据库的问题。")]),h])}]]),f=JSON.parse('{"path":"/services/Docker.html","title":"Docker","lang":"zh-CN","frontmatter":{"article":false,"title":"Docker","icon":"any","order":2,"description":"Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。 Compose 是...","head":[["meta",{"property":"og:url","content":"https://newzone.top/services/Docker.html"}],["meta",{"property":"og:site_name","content":"LearnData-开源笔记"}],["meta",{"property":"og:title","content":"Docker"}],["meta",{"property":"og:description","content":"Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。 Compose 是..."}],["meta",{"property":"og:type","content":"website"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-14T00:33:31.000Z"}],["meta",{"property":"article:author","content":"清顺"}],["meta",{"property":"article:modified_time","content":"2024-02-14T00:33:31.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"WebPage\\",\\"name\\":\\"Docker\\",\\"description\\":\\"Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。 Compose 是...\\"}"]]},"headers":[{"level":2,"title":"Docker 命令","slug":"docker-命令","link":"#docker-命令","children":[]},{"level":2,"title":"定制 Docker 镜像","slug":"定制-docker-镜像","link":"#定制-docker-镜像","children":[]},{"level":2,"title":"Docker 数据库管理","slug":"docker-数据库管理","link":"#docker-数据库管理","children":[]},{"level":2,"title":"其他使用","slug":"其他使用","link":"#其他使用","children":[{"level":3,"title":"Windows Docker","slug":"windows-docker","link":"#windows-docker","children":[]},{"level":3,"title":"宝塔镜像","slug":"宝塔镜像","link":"#宝塔镜像","children":[]}]}],"git":{"createdTime":1707870811000,"updatedTime":1707870811000,"contributors":[{"name":"shenbourne","email":"121733766+shenbourne@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":5.16,"words":1547},"filePathRelative":"services/Docker.md","localizedDate":"2024年2月14日","excerpt":"<p>Docker 是一个开源的应用容器引擎，可以让开发者打包他们的应用以及依赖包到一个轻量级、可移植的容器中，然后发布到任何流行的 Linux 机器上，也可以实现虚拟化。借助 Docker，您可以与管理应用程序相同的方式来管理基础架构。简单点说，用 Docker 你不懂太多代码知识，直接用其他人的打包容器，小白也可以部署复杂的服务应用。</p>\\n<p>Compose 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来管理多个 Docker 容器，并配置应用程序需要的所有服务。在配置文件中，所有的容器通过 services 来定义，然后使用 docker-compose 脚本来启动，停止和重启应用，和应用中的服务以及所有依赖服务的容器，非常适合组合使用多个容器进行开发的场景。强烈推荐使用 Compose 搭建所有 Docker，流程参考 <a href=\\"/services/NAS.html#nas-docker\\" target=\\"_blank\\">NAS 上搭建 Docker</a>。</p>","autoDesc":true}')}}]);