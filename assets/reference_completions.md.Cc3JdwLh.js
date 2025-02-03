import{_ as n,c as o,o as a,a2 as e}from"./chunks/framework.CwCSXIY0.js";const y=JSON.parse('{"title":"Completions Files","description":"","frontmatter":{"title":"Completions Files"},"headers":[],"relativePath":"reference/completions.md","filePath":"reference/completions.md","lastUpdated":1738542678000}'),l={name:"reference/completions.md"};function t(p,s,r,c,i,D){return a(),o("div",null,s[0]||(s[0]=[e(`<h1 id="completions-files" tabindex="-1">Completions Files <a class="header-anchor" href="#completions-files" aria-label="Permalink to &quot;Completions Files&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">See Also</p><dl><dt><a href="/guide/extensibility/completions.html">Completions</a></dt><dd>Introduction to the different types of completions</dd></dl></div><p>Completions aren&#39;t limited to completions files, because other sources contribute to the completions list (see above). However, the most explicit way Sublime Text provides you to feed it completions is by means of <code>.sublime-completions</code> files.</p><p>This topic only deals with the format of a <code>.sublime-completions</code> file.</p><h2 id="file-format" tabindex="-1">File Format <a class="header-anchor" href="#file-format" aria-label="Permalink to &quot;File Format&quot;">​</a></h2><p>Completions are JSON files with the <code>.sublime-completions</code> extension. Entries in completions files can contain either snippet-like strings or plain text.</p><h3 id="example" tabindex="-1">Example <a class="header-anchor" href="#example" aria-label="Permalink to &quot;Example&quot;">​</a></h3><p>Here&#39;s an example (with HTML completions):</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">   &quot;</span><span style="color:#C792EA;">scope</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">text.html - source - meta.tag, punctuation.definition.tag.begin</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">   &quot;</span><span style="color:#C792EA;">completions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#89DDFF;">   [</span></span>
<span class="line"><span style="color:#89DDFF;">      {</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#FFCB6B;">trigger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">a</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#FFCB6B;">contents</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">&lt;a href=</span><span style="color:#BABED8;">\\&quot;</span><span style="color:#C3E88D;">$1</span><span style="color:#BABED8;">\\&quot;</span><span style="color:#C3E88D;">&gt;$0&lt;/a&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> },</span></span>
<span class="line"><span style="color:#89DDFF;">      {</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#FFCB6B;">trigger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">abbr</span><span style="color:#BABED8;">\\t</span><span style="color:#C3E88D;">&lt;abbr&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#FFCB6B;">contents</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">&lt;abbr&gt;$0&lt;/abbr&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> },</span></span>
<span class="line"><span style="color:#89DDFF;">      {</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#FFCB6B;">trigger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">acronym</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#FFCB6B;">contents</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">&lt;acronym&gt;$0&lt;/acronym&gt;</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> }</span></span>
<span class="line"><span style="color:#89DDFF;">   ]</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><dl><dt><strong>scope</strong></dt><dd><p>Determines when the completions list will be populated with this list of completions.</p><p>See <a href="/guide/extensibility/syntaxdefs.html#scopes">Scopes</a> for more information.</p></dd></dl><dl><dt><strong>completions</strong></dt><dd><p>Array of <em>completions</em>.</p></dd></dl><h2 id="types-of-completions" tabindex="-1">Types of Completions <a class="header-anchor" href="#types-of-completions" aria-label="Permalink to &quot;Types of Completions&quot;">​</a></h2><h3 id="plain-strings" tabindex="-1">Plain Strings <a class="header-anchor" href="#plain-strings" aria-label="Permalink to &quot;Plain Strings&quot;">​</a></h3><p>Plain strings are equivalent to an entry where the <code>trigger</code> is identical to the <code>contents</code>:</p><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// is equivalent to:</span></span>
<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C792EA;">trigger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C792EA;">contents</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="trigger-based-completions" tabindex="-1">Trigger-based Completions <a class="header-anchor" href="#trigger-based-completions" aria-label="Permalink to &quot;Trigger-based Completions&quot;">​</a></h3><div class="language-json line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C792EA;">trigger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C792EA;">contents</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">foobar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> }</span><span style="color:#BABED8;">,</span></span>
<span class="line"><span style="color:#89DDFF;">{</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C792EA;">trigger</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">foo</span><span style="color:#BABED8;">\\t</span><span style="color:#C3E88D;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C792EA;">contents</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#89DDFF;"> &quot;</span><span style="color:#C3E88D;">foobar</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> }</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><dl><dt><strong>trigger</strong></dt><dd><p>Text that will be displayed in the completions list and will cause the <code>contents</code> to be inserted when chosen.</p><p>You can use a <code>\\t</code> tab character to add an <em>annotation</em> for the preceding trigger. The annotation will be displayed right-aligned, slightly grayed and does not affect the trigger itself.</p></dd><dt><strong>contents</strong></dt><dd><p>Text to be inserted in the buffer. Supports the same string interpolation features as snippets.</p><p>Refer to <a href="/guide/extensibility/snippets.html#snippet-features">Snippet Features</a>.</p></dd></dl><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>If you want a literal <code>$</code>, you have to escape it like this: <code>\\\\$</code> (double backslashes are needed because we are within a JSON string).</p></div>`,19)]))}const d=n(l,[["render",t]]);export{y as __pageData,d as default};
