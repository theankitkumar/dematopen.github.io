jQuery(document).ready((function(){var e=!1;void 0!==eztoc_smooth_local.JumpJsLinks&&1===parseInt(eztoc_smooth_local.JumpJsLinks)&&(e=!0),document.querySelectorAll(".ez-toc-link").forEach((e=>{e=e.replaceWith(e.cloneNode(!0))})),document.querySelectorAll(".ez-toc-section").forEach((e=>{e.setAttribute("ez-toc-data-id","#"+decodeURI(e.getAttribute("id")))})),jQuery("a.ez-toc-link").click((function(){let t=e?jQuery(this).attr("data-href"):jQuery(this).attr("href"),o=jQuery("#wpadminbar"),c=jQuery("header"),r=0;if(parseInt(eztoc_smooth_local.scroll_offset)>30&&(r=parseInt(eztoc_smooth_local.scroll_offset)),o.length&&(r+=o.height()),(c.length&&"fixed"==c.css("position")||"sticky"==c.css("position"))&&(r+=c.height()),jQuery('[ez-toc-data-id="'+decodeURI(t)+'"]').length>0&&(r=jQuery('[ez-toc-data-id="'+decodeURI(t)+'"]').offset().top-r),jQuery("html, body").animate({scrollTop:r},500),e)return!1}))}))
;