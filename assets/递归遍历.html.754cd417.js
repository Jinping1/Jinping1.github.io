import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c,a as n,b as a,e,d as t,r as l}from"./app.1b56495c.js";const i={},u=e(`<h1 id="\u9012\u5F52\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u904D\u5386" aria-hidden="true">#</a> \u9012\u5F52\u904D\u5386</h1><h2 id="\u9012\u5F52\u4E09\u8981\u7D20" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52\u4E09\u8981\u7D20" aria-hidden="true">#</a> \u9012\u5F52\u4E09\u8981\u7D20</h2><ol><li>\u786E\u5B9A\u9012\u5F52\u51FD\u6570\u7684\u53C2\u6570\u548C\u8FD4\u56DE\u503C</li></ol><ul><li>\u786E\u5B9A\u54EA\u4E9B\u53C2\u6570\u9700\u8981\u5904\u7406\uFF0C\u660E\u786E\u9012\u5F52\u7684\u8FD4\u56DE\u503C\u662F\u4EC0\u4E48</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">dfs</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>\u786E\u5B9A\u7EC8\u6B62\u6761\u4EF6</li></ol><ul><li>\u5982\u679C\u9012\u5F52\u6CA1\u6709\u7EC8\u6B62\uFF0C\u64CD\u4F5C\u7CFB\u7EDF\u7684\u5185\u5B58\u6808\u5FC5\u7136\u5C31\u4F1A\u6EA2\u51FA\u3002</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span> <span class="token keyword">return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="3"><li>\u786E\u5B9A\u5355\u5C42\u9012\u5F52\u7684\u903B\u8F91</li></ol><ul><li>\u6BCF\u4E00\u5C42\u9012\u5F52\u9700\u8981\u5904\u7406\u7684\u4FE1\u606F\uFF0C\u91CD\u590D\u8C03\u7528\u81EA\u5DF1</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>val<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),r={href:"https://leetcode.cn/problems/binary-tree-preorder-traversal/",target:"_blank",rel:"noopener noreferrer"},d=t("144.\u524D\u5E8F\u904D\u5386"),k=n("br",null,null,-1),v={href:"https://leetcode.cn/problems/binary-tree-postorder-traversal/",target:"_blank",rel:"noopener noreferrer"},m=t("145.\u540E\u5E8F\u904D\u5386"),b=n("br",null,null,-1),f={href:"https://leetcode.cn/problems/binary-tree-inorder-traversal/",target:"_blank",rel:"noopener noreferrer"},h=t("94.\u4E2D\u5E8F\u904D\u5386"),_=e(`<h2 id="_1-\u524D\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#_1-\u524D\u5E8F\u904D\u5386" aria-hidden="true">#</a> 1.\u524D\u5E8F\u904D\u5386</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// \u4E8C\u53C9\u6811\u8282\u70B9\u5B9A\u4E49</span>
<span class="token keyword">function</span> <span class="token function">TreeNode</span><span class="token punctuation">(</span><span class="token parameter">val<span class="token punctuation">,</span>left<span class="token punctuation">,</span>right</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>val <span class="token operator">=</span> <span class="token punctuation">(</span>val <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token number">0</span> <span class="token operator">:</span> val<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>left <span class="token operator">=</span> <span class="token punctuation">(</span>left <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> left<span class="token punctuation">)</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>right <span class="token operator">=</span> <span class="token punctuation">(</span>right <span class="token operator">===</span> <span class="token keyword">undefined</span> <span class="token operator">?</span> <span class="token keyword">null</span> <span class="token operator">:</span> right<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">preorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> res<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span>
 <span class="token keyword">const</span> <span class="token function-variable function">dfs</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">===</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
         <span class="token keyword">return</span>
     <span class="token punctuation">}</span>
     res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
     <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
     <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
     
 <span class="token punctuation">}</span>
 <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
 <span class="token keyword">return</span> res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-\u4E2D\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#_2-\u4E2D\u5E8F\u904D\u5386" aria-hidden="true">#</a> 2.\u4E2D\u5E8F\u904D\u5386</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">inorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
 <span class="token keyword">let</span> res<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> <span class="token function-variable function">dfs</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token operator">!</span>root<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> <span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span><span class="token punctuation">;</span>
  res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
  <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">}</span>
<span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">return</span> res<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u540E\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#_3-\u540E\u5E8F\u904D\u5386" aria-hidden="true">#</a> 3.\u540E\u5E8F\u904D\u5386</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">postorderTraversal</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> res<span class="token operator">=</span><span class="token punctuation">[</span><span class="token punctuation">]</span> 
    <span class="token keyword">const</span> <span class="token function-variable function">dfs</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">root</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>root<span class="token operator">===</span><span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">return</span>
        <span class="token punctuation">}</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>
        res<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
    <span class="token function">dfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token keyword">return</span> res

<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7);function y(g,w){const s=l("ExternalLinkIcon");return o(),c("div",null,[u,n("p",null,[n("a",r,[d,a(s)]),k,n("a",v,[m,a(s)]),b,n("a",f,[h,a(s)])]),_])}var N=p(i,[["render",y],["__file","\u9012\u5F52\u904D\u5386.html.vue"]]);export{N as default};
