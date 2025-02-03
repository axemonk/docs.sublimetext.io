import{_ as n,c as o,o as e,a2 as a}from"./chunks/framework.CwCSXIY0.js";const i=JSON.parse('{"title":"Mouse Bindings","description":"","frontmatter":{"title":"Mouse Bindings"},"headers":[],"relativePath":"reference/mouse_bindings.md","filePath":"reference/mouse_bindings.md","lastUpdated":1738542678000}'),p={name:"reference/mouse_bindings.md"};function l(t,s,r,c,d,D){return e(),o("div",null,s[0]||(s[0]=[a(`<h1 id="mouse-bindings" tabindex="-1">Mouse Bindings <a class="header-anchor" href="#mouse-bindings" aria-label="Permalink to &quot;Mouse Bindings&quot;">​</a></h1><p>The mousemap files (which have the extension <code>.sublime-mousemap</code>) control what commands are executed when a user performs an action with a mouse, e.g. clicking a mouse button, scrolling the scroll wheel, etc.</p><h2 id="file-format" tabindex="-1">File Format <a class="header-anchor" href="#file-format" aria-label="Permalink to &quot;File Format&quot;">​</a></h2><p>Mousmap files are JSON files, following the naming schema of Keybindings.</p><p>Here is a small excerpt from <code>Default/Default (Windows).sublime-mousemap</code>:</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">[</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">    // Basic drag select</span></span>
<span class="line"><span style="color:#89DDFF;">    {</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#C792EA;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">button1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C792EA;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#C792EA;">press_command</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">drag_select</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    },</span></span>
<span class="line"><span style="color:#89DDFF;">    {</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#C792EA;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">button1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C792EA;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C792EA;">modifiers</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ctrl</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#C792EA;">press_command</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">drag_select</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#C792EA;">press_args</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">additive</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> true}</span></span>
<span class="line"><span style="color:#89DDFF;">    },</span></span>
<span class="line"><span style="color:#89DDFF;">    {</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#C792EA;">button</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">button1</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C792EA;">count</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#F78C6C;"> 1</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C792EA;">modifiers</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> [</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">alt</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">],</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#C792EA;">press_command</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">drag_select</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">        &quot;</span><span style="color:#C792EA;">press_args</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> {</span><span style="color:#89DDFF;">&quot;</span><span style="color:#FFCB6B;">subtractive</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> true}</span></span>
<span class="line"><span style="color:#89DDFF;">    },</span></span>
<span class="line"><span style="color:#89DDFF;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>Following are the keys that a single JSON entry in a mousemap file can take.</p><dl><dt><code>button</code></dt><dd><p>The name of the button.</p><p>This defines the name of the button. There can be upto 16 buttons, <code>button1</code> to <code>button16</code> along with <code>scroll_up</code> &amp; <code>scroll_down</code> for the scroll wheel.</p></dd><dt><code>modifiers</code></dt><dd><p>A list of modifier keys.</p><p>This defines a list of modifiers keys that have to be pressed simultaneously (along with the corresponding button click) for the command to be triggered, e.g. <code>[&quot;ctrl&quot;, &quot;alt&quot;]</code>. A list of all the modifier keys can be found in the keybindings section on <a href="https://docs.sublimetext.io/reference/key_bindings.html#modifiers" target="_blank" rel="noreferrer">Modifiers</a>.</p></dd><dt><code>count</code></dt><dd><p>The count of the button press.</p><p>This defines the number of times the button has to be pressed for the corresponding <code>command</code> to trigger. Defaults to <code>1</code>.</p></dd><dt><code>command</code></dt><dd><p>The <code>command</code> to execute.</p><p>This defines the command to be executed when the corresponding button is <strong>released</strong>.</p></dd><dt><code>args</code></dt><dd><p>The arguments for <code>command</code>.</p><p>This is a mapping of arguments to be passed on to the <code>command</code>.</p></dd><dt><code>press_command</code></dt><dd><p>The <code>press_command</code> to execute.</p><p>This defines the command to be executed when the corresponding button is <strong>pressed</strong>.</p></dd><dt><code>press_args</code></dt><dd><p>The arguments for <code>press_command</code>.</p><p>This is a mapping of arguments to be passed on to the <code>press_command</code>.</p></dd></dl>`,8)]))}const u=n(p,[["render",l]]);export{i as __pageData,u as default};
