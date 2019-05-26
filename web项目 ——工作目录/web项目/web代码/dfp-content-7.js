var googletag = googletag || {};
googletag.cmd = googletag.cmd || [];
(function() {
var gads = document.createElement('script');
gads.async = true;
gads.type = 'text/javascript';
var useSSL = 'https:' == document.location.protocol;
gads.src = (useSSL ? 'https:' : 'http:') + 
'//www.googletagservices.com/tag/js/gpt.js';
var node = document.getElementsByTagName('script')[0];
node.parentNode.insertBefore(gads, node);
})();
googletag.cmd.push(function() {
googletag.defineSlot('/1103991/美食天下内容页左幅300x250', [300, 250], 'div-gpt-ad-1415072274645-0').addService(googletag.pubads());
googletag.defineSlot('/1103991/美食天下内容页右幅300x250', [300, 250], 'div-gpt-ad-1415072274645-1').addService(googletag.pubads());
googletag.defineSlot('/1103991/美食天下菜谱页右侧一(首屏)300x250', [300, 250], 'div-gpt-ad-1415072274645-2').addService(googletag.pubads());
googletag.defineSlot('/1103991/美食天下菜谱页右侧二300x250', [300, 250], 'div-gpt-ad-1415072274645-3').addService(googletag.pubads());
googletag.defineSlot('/1103991/美食天下菜谱页右侧三300x250', [300, 250], 'div-gpt-ad-1415072274645-4').addService(googletag.pubads());
googletag.defineSlot('/1103991/美食天下菜谱页右侧四300x250', [300, 250], 'div-gpt-ad-1415072274645-5').addService(googletag.pubads());
googletag.defineSlot('/1103991/美食天下菜谱页右侧(悬浮)300x250', [300, 510], 'div-gpt-ad-1415072274645-6').addService(googletag.pubads());
googletag.pubads().enableSingleRequest();
googletag.enableServices();
});