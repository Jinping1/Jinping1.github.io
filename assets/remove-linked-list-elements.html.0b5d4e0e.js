import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c,a as n,b as e,d as s,e as t,r as l}from"./app.9df2c7c9.js";const i={},u=n("h1",{id:"_2-\u79FB\u9664\u94FE\u8868\u5143\u7D20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_2-\u79FB\u9664\u94FE\u8868\u5143\u7D20","aria-hidden":"true"},"#"),s(" 2.\u79FB\u9664\u94FE\u8868\u5143\u7D20")],-1),r=n("h2",{id:"_203-\u79FB\u9664\u94FE\u8868\u5143\u7D20",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_203-\u79FB\u9664\u94FE\u8868\u5143\u7D20","aria-hidden":"true"},"#"),s(" 203.\u79FB\u9664\u94FE\u8868\u5143\u7D20")],-1),d={href:"https://leetcode.cn/problems/remove-linked-list-elements/",target:"_blank",rel:"noopener noreferrer"},k=s("\u9898\u76EE\u94FE\u63A5"),v=t(`<p>\u9898\u76EE\u63CF\u8FF0\uFF1A \u5220\u9664\u94FE\u8868\u4E2D\u7B49\u4E8E\u7ED9\u5B9A\u503C val \u7684\u6240\u6709\u8282\u70B9\u3002</p><p>\u793A\u4F8B 1\uFF1A \u8F93\u5165\uFF1Ahead = [1,2,6,3,4,5,6], val = 6 \u8F93\u51FA\uFF1A[1,2,3,4,5]</p><p>\u793A\u4F8B 2\uFF1A \u8F93\u5165\uFF1Ahead = [], val = 1 \u8F93\u51FA\uFF1A[]</p><p>\u793A\u4F8B 3\uFF1A \u8F93\u5165\uFF1Ahead = [7,7,7,7], val = 7 \u8F93\u51FA\uFF1A[]</p><h3 id="\u865A\u62DF\u5934\u7ED3\u70B9" tabindex="-1"><a class="header-anchor" href="#\u865A\u62DF\u5934\u7ED3\u70B9" aria-hidden="true">#</a> \u865A\u62DF\u5934\u7ED3\u70B9</h3><p>\u79FB\u9664\u5934\u7ED3\u70B9\u548C\u79FB\u9664\u5176\u4ED6\u8282\u70B9\u7684\u64CD\u4F5C\u662F\u4E0D\u4E00\u6837\u7684\uFF0C\u56E0\u4E3A\u94FE\u8868\u7684\u5176\u4ED6\u8282\u70B9\u90FD\u662F\u901A\u8FC7\u524D\u4E00\u4E2A\u8282\u70B9\u6765\u79FB\u9664\u5F53\u524D\u8282\u70B9\uFF0C\u800C\u5934\u7ED3\u70B9\u6CA1\u6709\u524D\u4E00\u4E2A\u8282\u70B9\u3002</p><p>\u79FB\u9664\u5934\u7ED3\u70B9\u8981\u5C06\u5934\u7ED3\u70B9\u5411\u540E\u79FB\u52A8\u4E00\u4F4D\uFF0C\u518D\u5C06\u539F\u5934\u7ED3\u70B9\u4ECE\u5185\u5B58\u4E2D\u5220\u9664\u3002</p><p>\u5728\u5355\u94FE\u8868\u4E2D\u79FB\u9664\u5934\u7ED3\u70B9 \u548C \u79FB\u9664\u5176\u4ED6\u8282\u70B9\u7684\u64CD\u4F5C\u65B9\u5F0F\u662F\u4E0D\u4E00\u6837\uFF0C\u5176\u5B9E\u5728\u5199\u4EE3\u7801\u7684\u65F6\u5019\u4E5F\u4F1A\u53D1\u73B0\uFF0C \u9700\u8981\u5355\u72EC\u5199\u4E00\u6BB5\u903B\u8F91\u6765\u5904\u7406\u79FB\u9664\u5934\u7ED3\u70B9\u7684\u60C5\u51B5\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * Definition for singly-linked list.
 * function ListNode(val, next) <span class="token punctuation">{</span>
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * <span class="token punctuation">}</span>
 */</span>
<span class="token doc-comment comment">/**
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span> <span class="token parameter">head</span>
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>number<span class="token punctuation">}</span></span> <span class="token parameter">val</span>
 * <span class="token keyword">@return</span> <span class="token class-name"><span class="token punctuation">{</span>ListNode<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">var</span> <span class="token function-variable function">removeElements</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> dummy<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  dummy<span class="token punctuation">.</span>next<span class="token operator">=</span>head<span class="token punctuation">;</span>
  <span class="token keyword">let</span> cur<span class="token operator">=</span>dummy<span class="token punctuation">;</span><span class="token comment">//\u8BB0\u5F55\u5F53\u524D\u7ED3\u70B9\u7684\u524D\u4E00\u4E2A\u7ED3\u70B9</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token operator">===</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
        cur<span class="token punctuation">.</span>next<span class="token operator">=</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        cur<span class="token operator">=</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
 <span class="token punctuation">}</span>
 <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u9012\u5F52" tabindex="-1"><a class="header-anchor" href="#\u9012\u5F52" aria-hidden="true">#</a> \u9012\u5F52</h3><p>\u94FE\u8868\u7684\u5B9A\u4E49\u5177\u6709\u9012\u5F52\u7684\u6027\u8D28\uFF0C\u56E0\u6B64\u94FE\u8868\u9898\u76EE\u5E38\u53EF\u4EE5\u7528\u9012\u5F52\u7684\u65B9\u6CD5\u6C42\u89E3\u3002\u8FD9\u9053\u9898\u8981\u6C42\u5220\u9664\u94FE\u8868\u4E2D\u6240\u6709\u8282\u70B9\u503C\u7B49\u4E8E\u7279\u5B9A\u503C\u7684\u8282\u70B9\uFF0C\u53EF\u4EE5\u7528\u9012\u5F52\u5B9E\u73B0\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">removeElements</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>head<span class="token operator">===</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token keyword">return</span> head<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  head<span class="token punctuation">.</span>next<span class="token operator">=</span><span class="token function">removeElements</span><span class="token punctuation">(</span>head<span class="token punctuation">.</span>next<span class="token punctuation">,</span>val<span class="token punctuation">)</span>
  <span class="token keyword">return</span> head<span class="token punctuation">.</span>val<span class="token operator">===</span>val <span class="token operator">?</span> head<span class="token punctuation">.</span>next <span class="token operator">:</span> head<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_18-\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9" tabindex="-1"><a class="header-anchor" href="#_18-\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9" aria-hidden="true">#</a> 18.\u5220\u9664\u94FE\u8868\u4E2D\u7684\u8282\u70B9</h2>`,13),m={href:"https://leetcode.cn/problems/shan-chu-lian-biao-de-jie-dian-lcof/description/",target:"_blank",rel:"noopener noreferrer"},h=s("\u94FE\u63A5"),b=t(`<p>\u5220\u9664\u94FE\u8868\u7684\u8282\u70B9</p><ol><li>\u5934\u8282\u70B9,\u76F4\u63A5\u8FD4\u56DE\u5934\u7ED3\u70B9\u4E0B\u4E00\u4E2A\u8282\u70B9</li><li>\u975E\u5934\u8282\u70B9</li></ol><p>\u7528\u865A\u62DF\u5934\u7ED3\u70B9\uFF0C\u4E0D\u5FC5\u8003\u8651\u662F\u4E0D\u662F\u5934\u7ED3\u70B9\u7684\u95EE\u9898</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> <span class="token function-variable function">deleteNode</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">head<span class="token punctuation">,</span> val</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> dummy<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ListNode</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
  dummy<span class="token punctuation">.</span>next<span class="token operator">=</span>head<span class="token punctuation">;</span>
  <span class="token keyword">let</span> cur<span class="token operator">=</span>dummy<span class="token punctuation">;</span> <span class="token comment">//\u4E0D\u80FD\u76F4\u63A5\u7528dummy\uFF0C\u8981\u8FD4\u56DEdummy.next,dummy\u4E0D\u5E94\u8BE5\u53D8</span>
  <span class="token keyword">while</span><span class="token punctuation">(</span>cur<span class="token operator">&amp;&amp;</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">)</span><span class="token punctuation">{</span>
     <span class="token keyword">if</span><span class="token punctuation">(</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>val<span class="token operator">===</span>val<span class="token punctuation">)</span><span class="token punctuation">{</span>
         cur<span class="token punctuation">.</span>next<span class="token operator">=</span>cur<span class="token punctuation">.</span>next<span class="token punctuation">.</span>next
     <span class="token punctuation">}</span>
     cur<span class="token operator">=</span>cur<span class="token punctuation">.</span>next
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> dummy<span class="token punctuation">.</span>next
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function x(y,_){const a=l("ExternalLinkIcon");return o(),c("div",null,[u,r,n("p",null,[n("a",d,[k,e(a)])]),v,n("p",null,[n("a",m,[h,e(a)])]),b])}var g=p(i,[["render",x],["__file","remove-linked-list-elements.html.vue"]]);export{g as default};