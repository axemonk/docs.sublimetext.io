import{_ as e,C as o,c as p,o as t,a2 as r,j as s,G as l}from"./chunks/framework.CwCSXIY0.js";const g=JSON.parse('{"title":"Symbols","description":"","frontmatter":{"title":"Symbols"},"headers":[],"relativePath":"reference/symbols.md","filePath":"reference/symbols.md","lastUpdated":1738542678000}'),c={name:"reference/symbols.md"},i={tabindex:"0"};function y(F,n,D,d,m,b){const a=o("Key");return t(),p("div",null,[n[4]||(n[4]=r(`<h1 id="symbols" tabindex="-1">Symbols <a class="header-anchor" href="#symbols" aria-label="Permalink to &quot;Symbols&quot;">​</a></h1><p>Sublime Text provides basic support for <a href="/guide/usage/file-management/navigation.html#goto-anything-operators">symbol navigation</a> (jumping to class and function definitions, etc.). Symbol navigation can be enabled for any type of file.</p><p>The symbol navigation framework in Sublime Text is strictly text-based. No lexical or syntactical analysis is performed.</p><h2 id="format" tabindex="-1">Format <a class="header-anchor" href="#format" aria-label="Permalink to &quot;Format&quot;">​</a></h2><p>Symbols are defined using metadata files. Because symbol definition files are commonly required by packages, they are discussed separately in this page for convenience.</p><p>Just as regular metadata files, symbol definition files have the <code>.tmPreferences</code> extension and use the Property List format. The file name is ignored by Sublime Text.</p><div class="info custom-block"><p class="custom-block-title">See Also</p><dl><dt><a href="./metadata.html">Metadata</a></dt><dd>Detailed documentation on metadata files.</dd></dl></div><h2 id="defining-symbols" tabindex="-1">Defining Symbols <a class="header-anchor" href="#defining-symbols" aria-label="Permalink to &quot;Defining Symbols&quot;">​</a></h2><p>Sublime Text features two types of symbol list: a local symbol list (active file) and a global symbol list (project-wide). Using symbol definition files, you can target both individually.</p><p>Symbol definition files use scope selectors to capture symbols in source code files.</p><p>Several symbol definition files can coexist in the same package. For example, two symbol definition files could work in tandem: one would define all symbols, and a second one could selectively hide some of them if they were uninteresting for users.</p><p>Let&#39;s see an example of a symbol definition file:</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#F07178;">xml</span><span style="color:#C792EA;"> version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;"> encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F78C6C;">DOCTYPE</span><span style="color:#BABED8;"> plist</span><span style="color:#89DDFF;"> PUBLIC &quot;-//Apple Computer//DTD PLIST 1.0//EN&quot; &quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">plist</span><span style="color:#C792EA;"> version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dict</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">name</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Symbol List</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">scope</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">source.python meta.function.python, source.python meta.class.python</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">settings</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">dict</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">        &lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">showInSymbolList</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">        &lt;</span><span style="color:#F07178;">integer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">integer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;/</span><span style="color:#F07178;">dict</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dict</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">plist</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>Using the file above, Sublime Text would scan source code files for scope names <code>source.python meta.function.python</code> and <code>source.python meta.class.python</code>, and text within would be indexed as symbols. The <code>showInSymbolList</code> setting tells Sublime Text to use the local symbol list.</p><h2 id="text-transformations" tabindex="-1">Text Transformations <a class="header-anchor" href="#text-transformations" aria-label="Permalink to &quot;Text Transformations&quot;">​</a></h2><p>It is possible to apply transformations to symbols before they are displayed to the user. Symbol transformations consist of text substitutions defined as regular expressions using the <a href="https://github.com/kkos/oniguruma/blob/master/doc/RE" target="_blank" rel="noreferrer">Oniguruma</a> syntax.</p><p>This is an example of a text substitution:</p><div class="language-perl line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">perl</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">s</span><span style="color:#89DDFF;">/</span><span style="color:#C3E88D;">class</span><span style="color:#BABED8;">\\s</span><span style="color:#C3E88D;">+([A-Za-z_][A-Za-z0-9_]*.+?</span><span style="color:#BABED8;">\\)</span><span style="color:#C3E88D;">?)(</span><span style="color:#BABED8;">\\:</span><span style="color:#C3E88D;">|$)</span><span style="color:#89DDFF;">/$</span><span style="color:#BABED8;">1</span><span style="color:#89DDFF;">/</span><span style="color:#89DDFF;font-style:italic;">g</span><span style="color:#BABED8;">;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>In this case, a captured symbol such as <code>class FooBar(object)</code> would show up as <code>FooBar(object)</code> in the symbol list.</p><p>Let&#39;s expand our previous example to use a symbol transformation:</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#F07178;">xml</span><span style="color:#C792EA;"> version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;"> encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F78C6C;">DOCTYPE</span><span style="color:#BABED8;"> plist</span><span style="color:#89DDFF;"> PUBLIC &quot;-//Apple Computer//DTD PLIST 1.0//EN&quot; &quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">plist</span><span style="color:#C792EA;"> version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dict</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">name</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Symbol List</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">scope</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">source.python meta.function.python, source.python meta.class.python</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">settings</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;</span><span style="color:#F07178;">dict</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        &lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">showInSymbolList</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        &lt;</span><span style="color:#F07178;">integer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">integer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        &lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">symbolTransformation</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">        &lt;</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line highlighted"><span style="color:#BABED8;">            s/class\\s+([A-Za-z_][A-Za-z0-9_]*.+?\\)?)(\\:|$)/$1/g;</span></span>
<span class="line highlighted"><span style="color:#BABED8;">            s/def\\s+([A-Za-z_][A-Za-z0-9_]*\\()(?:(.{0,40}?\\))|((.{40}).+?\\)))(\\:)/$1(?2:$2)(?3:$4…\\))/g;</span></span>
<span class="line"><span style="color:#89DDFF;">        &lt;/</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">    &lt;/</span><span style="color:#F07178;">dict</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dict</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">plist</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="structure-of-a-symbol-definition-file" tabindex="-1">Structure of a Symbol Definition File <a class="header-anchor" href="#structure-of-a-symbol-definition-file" aria-label="Permalink to &quot;Structure of a Symbol Definition File&quot;">​</a></h2><p>All metadata files share the same topmost structure, which is inherited from the Property List format.</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#F07178;">xml</span><span style="color:#C792EA;"> version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;"> encoding</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">UTF-8</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">?&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;!</span><span style="color:#F78C6C;">DOCTYPE</span><span style="color:#BABED8;"> plist</span><span style="color:#89DDFF;"> PUBLIC &quot;-//Apple Computer//DTD PLIST 1.0//EN&quot; &quot;http://www.apple.com/DTDs/PropertyList-1.0.dtd&quot;&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">plist</span><span style="color:#C792EA;"> version</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dict</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">    ...</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dict</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">plist</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>These are all the valid elements in a symbol definition file:</p><dl><dt><code>name</code></dt><dd><p><strong>Optional.</strong> Name of the symbol definition. Ignored by Sublime Text.</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">name</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">Some arbitrary name goes here</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></dd><dt><code>scope</code></dt><dd><p><strong>Required.</strong> Comma-separated list of scope names that Sublime Text will use to capture symbols in files.</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">scope</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">source.python meta.function.python, source.python meta.class.python</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></dd><dt><code>settings</code></dt><dd><p><strong>Required.</strong> A container for settings.</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">settings</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">dict</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">   ...</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">dict</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div></dd><dt><code>uuid</code></dt><dd><p><strong>Optional.</strong> A unique identifier for the file. Ignored by Sublime Text.</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">uuid</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">BC062860-3346-4D3B-8421-C5543F83D11F</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></dd></dl><h2 id="settings-subelements" tabindex="-1"><code>settings</code> Subelements <a class="header-anchor" href="#settings-subelements" aria-label="Permalink to &quot;\`settings\` Subelements&quot;">​</a></h2><dl><dt><code>showInSymbolList</code></dt><dd><p><strong>Optional.</strong> Links symbols to the local symbol list. Valid values are <code>0</code> or <code>1</code>. If <code>0</code>, the corresponding symbols will not be displayed.</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">showInSymbolList</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">integer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">integer</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></dd><dt><code>showInIndexedSymbolList</code></dt><dd><p><strong>Optional.</strong> Links symbols to the global symbol list. Valid values are <code>0</code> or <code>1</code>. If <code>0</code>, the corresponding symbols will not be displayed.</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">showInIndexedSymbolList</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">integer</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">1</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">integer</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div></dd><dt><code>symbolTransformation</code></dt><dd><p><strong>Optional.</strong> Targets the local symbol list. Semicolon-separated list of text substitutions expressed as regular expressions using the <a href="https://github.com/kkos/oniguruma/blob/master/doc/RE" target="_blank" rel="noreferrer">Oniguruma</a> syntax. Whitespace between substitution instructions is ignored.</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">symbolTransformation</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">   s/class\\s+([A-Za-z_][A-Za-z0-9_]*.+?\\)?)(\\:|$)/$1/g;</span></span>
<span class="line"><span style="color:#BABED8;">   s/def\\s+([A-Za-z_][A-Za-z0-9_]*\\()(?:(.{0,40}?\\))|((.{40}).+?\\)))(\\:)/$1(?2:$2)(?3:$4…\\))/g;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></dd><dt><code>symbolIndexTransformation</code></dt><dd><p><strong>Optional.</strong> Targets the global symbol list. Semicolon-separated list of text substitutions expressed as regular expressions using the <a href="https://github.com/kkos/oniguruma/blob/master/doc/RE" target="_blank" rel="noreferrer">Oniguruma</a> syntax. Whitespace between substitution instructions is ignored.</p><div class="language-xml line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki material-theme-palenight vp-code" tabindex="0"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span><span style="color:#BABED8;">symbolIndexTransformation</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">key</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#BABED8;">   s/class\\s+([A-Za-z_][A-Za-z0-9_]*.+?\\)?)(\\:|$)/$1/g;</span></span>
<span class="line"><span style="color:#BABED8;">   s/def\\s+([A-Za-z_][A-Za-z0-9_]*\\()(?:(.{0,40}?\\))|((.{40}).+?\\)))(\\:)/$1(?2:$2)(?3:$4…\\))/g;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">string</span><span style="color:#89DDFF;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></dd></dl><h2 id="navigating-symbols" tabindex="-1">Navigating Symbols <a class="header-anchor" href="#navigating-symbols" aria-label="Permalink to &quot;Navigating Symbols&quot;">​</a></h2><p>Once symbols are defined, you can navigate them using standard key bindings:</p>`,30)),s("table",i,[n[3]||(n[3]=s("thead",null,[s("tr",null,[s("th",null,"Shortcut"),s("th",null,"Description")])],-1)),s("tbody",null,[s("tr",null,[s("td",null,[l(a,{k:"f12"})]),n[0]||(n[0]=s("td",null,"Go to definition",-1))]),s("tr",null,[s("td",null,[l(a,{k:"ctrl+r"})]),n[1]||(n[1]=s("td",null,"Show local symbol list",-1))]),s("tr",null,[s("td",null,[l(a,{k:"ctrl+shift+r"})]),n[2]||(n[2]=s("td",null,"Show global symbol list",-1))])])]),n[5]||(n[5]=s("div",{class:"info custom-block"},[s("p",{class:"custom-block-title"},"See Also"),s("dl",null,[s("dt",null,[s("a",{href:"/guide/usage/file-management/navigation.html#goto-anything"},"Goto Anything")]),s("dd",null,"Browsing symbols using Goto Anything.")])],-1))])}const h=e(c,[["render",y]]);export{g as __pageData,h as default};
