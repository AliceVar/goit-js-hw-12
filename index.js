import{a as w,S as b,i as n}from"./assets/vendor-CucEYOFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const S="56671223-37e43b5ca49c43ffc47d09138",P="https://pixabay.com/api/",q=15;async function d(r,o){return(await w.get(P,{params:{key:S,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:q}})).data}const u=document.querySelector(".gallery"),f=document.querySelector(".loader-container"),p=document.querySelector(".load-more-btn"),R=new b(".gallery a");function B(){u.innerHTML=""}function m(){f.classList.remove("is-hidden")}function g(){f.classList.add("is-hidden")}function h(r){const o=r.map(e=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${e.largeImageURL}">
            <img
              class="gallery-image"
              src="${e.webformatURL}"
              alt="${e.tags}"
            />
          </a>

          <div class="image-info">
            <div class="info-item">
              <p class="info-label">Likes</p>
              <p class="info-value">${e.likes}</p>
            </div>

            <div class="info-item">
              <p class="info-label">Views</p>
              <p class="info-value">${e.views}</p>
            </div>

            <div class="info-item">
              <p class="info-label">Comments</p>
              <p class="info-value">${e.comments}</p>
            </div>

            <div class="info-item">
              <p class="info-label">Downloads</p>
              <p class="info-value">${e.downloads}</p>
            </div>
          </div>
        </li>
      `).join("");u.insertAdjacentHTML("beforeend",o),R.refresh()}function y(){p.classList.remove("is-hidden")}function v(){p.classList.add("is-hidden")}const L=document.querySelector(".form"),M=document.querySelector(".load-more-btn");let l="",a=1;L.addEventListener("submit",$);M.addEventListener("click",E);async function $(r){r.preventDefault();const o=r.currentTarget.elements["search-text"].value.trim();if(o===""){n.error({message:"Please enter a search term!",position:"topRight"});return}l=o,a=1,B(),v(),m();try{const e=await d(l,a);if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(e.hits),y(),L.reset()}catch(e){n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}finally{g()}}async function E(){a+=1,v(),m();try{const r=await d(l,a);h(r.hits);const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"}),y()}catch(r){n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(r)}finally{g()}}
//# sourceMappingURL=index.js.map
