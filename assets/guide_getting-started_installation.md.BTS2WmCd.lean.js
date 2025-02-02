import{_ as a,c as t,o as i,a2 as s}from"./chunks/framework.D2WwjMX2.js";const c=JSON.parse('{"title":"Installation","description":"","frontmatter":{"title":"Installation"},"headers":[],"relativePath":"guide/getting-started/installation.md","filePath":"guide/getting-started/installation.md","lastUpdated":1738510916000}'),l={name:"guide/getting-started/installation.md"};function o(n,e,r,h,d,p){return i(),t("div",null,e[0]||(e[0]=[s(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h1><p>Make sure to read the <a href="https://www.sublimetext.com/buy" target="_blank" rel="noreferrer">conditions for use</a> on the official site. <strong>Sublime Text is not free</strong>. However, you may evaluate it without a license.</p><p>Download links for all supported platforms can be found on the <a href="https://www.sublimetext.com/download" target="_blank" rel="noreferrer">Download</a> page.</p><p>The process of installing Sublime Text is different for each platform.</p><h2 id="_32-or-64-bits" tabindex="-1">32 or 64 bits? <a class="header-anchor" href="#_32-or-64-bits" aria-label="Permalink to &quot;32 or 64 bits?&quot;">​</a></h2><p><strong>64 bit versions should be preferred.</strong> As of Sublime Text 4 there are no (officially supported) 32-bit versions any more. Only use a 32-bit version if you are having problems with the 64-bit version or you are running a 32-bit operating system. Note that some features, such as <a href="https://www.sublimetext.com/docs/git_integration.html" target="_blank" rel="noreferrer">Git Integration</a> are only available in the 64-bit version.</p><h3 id="macos" tabindex="-1">macOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><p>There is only one version of Sublime Text for macOS.</p><h3 id="windows" tabindex="-1">Windows <a class="header-anchor" href="#windows" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><p>You should be able to run the 64-bit version if you are using a modern and supported version Windows (read: anything older than Windows XP).</p><h3 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>Run the following command in your terminal to check your operating system&#39;s type. <code>x86_64</code> means you are on a 64-bit system.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uname</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -m</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">x86_64</span></span></code></pre></div><h2 id="portable-or-not-portable" tabindex="-1">Portable or Not Portable? <a class="header-anchor" href="#portable-or-not-portable" aria-label="Permalink to &quot;Portable or Not Portable?&quot;">​</a></h2><p>Sublime Text comes in two flavors (for Windows specifically):</p><ul><li>normal</li><li>portable.</li></ul><p>Most users should be better served by a normal installation. Use the portable version only if you know you need it.</p><p><strong>Normal installations</strong> separate data between two folders: the installation folder proper, and the <em>data directory</em> (user-specific directory for data; explained later in this guide). Normal installations also integrate Sublime Text with the File Explorer.</p><p><strong>Portable installations</strong> keep all files needed by Sublime Text in a single folder. This folder can be moved around and the editor will still work.</p><h2 id="how-to-install" tabindex="-1">How to Install <a class="header-anchor" href="#how-to-install" aria-label="Permalink to &quot;How to Install&quot;">​</a></h2><h3 id="macos-and-windows" tabindex="-1">macOS and Windows <a class="header-anchor" href="#macos-and-windows" aria-label="Permalink to &quot;macOS and Windows&quot;">​</a></h3><ol><li>Download the installer.</li><li>Double click on the installer and follow the provided steps.</li></ol><h3 id="linux-1" tabindex="-1">Linux <a class="header-anchor" href="#linux-1" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>The recommended way is to use the <a href="https://www.sublimetext.com/docs/linux_repositories.html" target="_blank" rel="noreferrer">official Linux repositories</a> for commonly used Linux distributions and follow the corresponding steps to install Sublime Text using your system&#39;s package manager.</p><p>If there is no repository for your system, you can look for a Sublime Text entry on your distro&#39;s repository.</p><h4 id="manual-installation" tabindex="-1">Manual Installation <a class="header-anchor" href="#manual-installation" aria-label="Permalink to &quot;Manual Installation&quot;">​</a></h4><p>The following sequence of Bash commands can be used to install Sublime Text manually. Replace <code>3211</code> with the latest build available (or any older build number).</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">wget</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://download.sublimetext.com/sublime_text_3_build_3211_x64.tar.bz2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> vxjf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sublime_text_3_build_</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">_x64.tar.bz2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Move the uncompressed files to an appropriate location.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sublime_text_3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/sublime_text</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Create a symbolic link to use at the command line.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/sublime_text_3/sublime_text</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/subl</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Create a symbolic link for the desktop entry.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /opt/sublime_text_3/sublime_text.desktop</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/share/applications/sublime_text.desktop</span></span></code></pre></div><h2 id="how-to-install-the-portable-version" tabindex="-1">How to Install the Portable Version <a class="header-anchor" href="#how-to-install-the-portable-version" aria-label="Permalink to &quot;How to Install the Portable Version&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>The portable version is activated whenever a <code>Data/</code> folder exists in the installation folder, i.e. the folder you extracted the portable archive to.</p></div><h3 id="windows-1" tabindex="-1">Windows <a class="header-anchor" href="#windows-1" aria-label="Permalink to &quot;Windows&quot;">​</a></h3><ol><li>Download the compressed archive with the portable version.</li><li>Unzip it to a folder of your choice.</li></ol><p>You will find the <code>sublime_text.exe</code> executable inside that folder.</p><h3 id="linux-2" tabindex="-1">Linux <a class="header-anchor" href="#linux-2" aria-label="Permalink to &quot;Linux&quot;">​</a></h3><p>The steps are similar to the <a href="#manual-installation">manual installation</a> steps above.</p><ol><li>Download the tarball.</li><li>Unzip it to a folder of your choice.</li><li>Create a <code>Data/</code> folder inside that folder.</li></ol><p>You will find the <code>sublime_text</code> executable inside that folder.</p><h3 id="macos-1" tabindex="-1">macOS <a class="header-anchor" href="#macos-1" aria-label="Permalink to &quot;macOS&quot;">​</a></h3><ol><li>Download <code>.dmg</code> file.</li><li>Open <code>.dmg</code> file.</li><li>Drag the Sublime Text 3 bundle into the <em>Applications</em> folder</li></ol><p>To create a <code>symbolic link</code> to use at the command line, issue the following command at the terminal:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ln</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -s</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> /usr/local/bin/subl</span></span></code></pre></div><h2 id="release-channels" tabindex="-1">Release Channels <a class="header-anchor" href="#release-channels" aria-label="Permalink to &quot;Release Channels&quot;">​</a></h2><p>Sublime Text currently has two release <em>channels</em>:</p><ul><li><a href="https://www.sublimetext.com/3" target="_blank" rel="noreferrer">Stable</a></li><li><a href="https://www.sublimetext.com/3dev" target="_blank" rel="noreferrer">Dev</a></li></ul><p><strong>Stable releases</strong> are better tested and more reliable for everyday use. <strong>The majority of users should only use stable releases.</strong></p><p>The <em>dev</em> channel is more unstable. Dev builds may contain bugs and not work reliably. They are updated more often than beta releases. <strong>Dev builds are only available to registered users.</strong></p><h2 id="older-versions" tabindex="-1">Older Versions <a class="header-anchor" href="#older-versions" aria-label="Permalink to &quot;Older Versions&quot;">​</a></h2><p>In the event you want to downgrade your Sublime Text, you can access binaries for any previously released version by replacing the build number in the download URL. For example, to retrieve the Windows release for Sublime Text 3.0, grab the latest download URL provided and replace it with the one from the Sublime Text 3.0 release.</p><ul><li>3.2.2 (<em>Build 3211</em>): <a href="https://download.sublimetext.com/Sublime%20Text%20Build%203211%20x64%20Setup.exe" target="_blank" rel="noreferrer">https://download.sublimetext.com/Sublime%20Text%20Build%20<strong>3211</strong>%20x64%20Setup.exe</a></li><li>3.0 (<em>Build 3143</em>): <a href="https://download.sublimetext.com/Sublime%20Text%20Build%203143%20x64%20Setup.exe" target="_blank" rel="noreferrer">https://download.sublimetext.com/Sublime%20Text%20Build%20<strong>3143</strong>%20x64%20Setup.exe</a></li></ul><p>Although discouraged, Sublime Text 2 can be found <a href="https://www.sublimetext.com/2" target="_blank" rel="noreferrer">on its old download page</a>. Because it is unsupported, you will need to figure out on your own how to install it.</p>`,50)]))}const b=a(l,[["render",o]]);export{c as __pageData,b as default};
