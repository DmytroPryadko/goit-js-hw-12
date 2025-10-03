import{a as y,S as h,i}from"./assets/vendor-BSTwZ_tR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const f={url:"https://pixabay.com/api/",key:"44811580-9eab9f49684dd01a2a36a0ef4"};async function u({query:a="",page:r=1,pageSize:l=5}={}){try{return(await y.get(`${f.url}`,{params:{key:f.key,q:a,image_type:"photo",orient:"horizontal",safeSearch:!0,page:r,per_page:l}})).data}catch(o){throw o}}const c=document.querySelector(".js-load-more");function p(a){const r=document.querySelector(".gallery"),l=a.map(o=>`<li class="img-wrap">
        <a href="${o.largeImageURL}">
          <img
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        </a>
        <div class="gallery-info-wrapper">
          <div class="info-likes">
            <p class="title">Likes</p>
            <p class="subtitle">${o.likes}</p>
          </div>
          <div class="info-views">
            <p class="title">Views</p>
            <p class="subtitle">${o.views}</p>
          </div>
          <div class="info-comments">
            <p class="title">Comments</p>
            <p class="subtitle">${o.comments}</p>
          </div>
          <div class="info-downloads">
            <p class="title">Downloads</p>
            <p class="subtitle">${o.downloads}</p>
          </div>
        </div>
      </li>
          `).join("");r.insertAdjacentHTML("beforeend",l),new h(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250,overlayOpacity:.8}).refresh()}function v(){const a=document.querySelector(".gallery");a.innerHTML=""}function g(){document.querySelector(".loader-wrapp").classList.remove("hide")}function d(){document.querySelector(".loader-wrapp").classList.add("hide")}function m(){c.classList.remove("hide")}function n(){c.classList.add("hide")}document.addEventListener("DOMContentLoaded",function(){const a=document.querySelector(".form"),r={query:"",page:1,pageSize:15,totalResults:0};a.addEventListener("submit",l);async function l(e){v(),r.page=1,e.preventDefault();const t=e.target;if(r.query=t.elements.query.value.trim(),r.query===""){i.error({backgroundColor:"#EF4040",message:"Please fill the form",titleColor:"#fff",messageColor:"#fff",progressBarColor:"#B51B1B"});return}try{const s=await u(r);if(r.totalResults=s.totalHits,r.maxPage=Math.ceil(r.totalResults/r.pageSize),s.hits.length===0){i.error({backgroundColor:"#EF4040",message:"Sorry, there are no images matching your search query. Please try again!",titleColor:"#fff",messageColor:"#fff",progressBarColor:"#B51B1B"}),d(),n();return}else g(),p(s.hits);s.hits.length>=15?m():n()}catch(s){console.log(s),i.error({backgroundColor:"#EF4040",message:"Sorry, something goes wrong. Please, try again later!",titleColor:"#fff",messageColor:"#fff",progressBarColor:"#B51B1B"})}finally{d()}t.reset()}c.addEventListener("click",o);async function o(){r.page+=1,g(),n();try{const e=await u(r);p(e.hits);const s=document.querySelector(".img-wrap").getBoundingClientRect().height;window.scrollBy({top:s*2,behavior:"smooth"})}catch(e){console.log(e),i.error({backgroundColor:"#EF4040",message:"Sorry, something goes wrong. Please, try again later!",titleColor:"#fff",messageColor:"#fff",progressBarColor:"#B51B1B"})}finally{d(),m()}r.page===r.maxPage&&(n(),i.error({backgroundColor:"#EF4040",message:"We're sorry, but you've reached the end of search results.",titleColor:"#fff",messageColor:"#fff",progressBarColor:"#B51B1B"}),c.removeEventListener("click",o))}});
//# sourceMappingURL=index.js.map
