import{a as w,S,i as n}from"./assets/vendor-CucEYOFD.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function e(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(t){if(t.ep)return;t.ep=!0;const s=e(t);fetch(t.href,s)}})();const P="56671223-37e43b5ca49c43ffc47d09138",R="https://pixabay.com/api/",q=15;async function f(r,o){return(await w.get(R,{params:{key:P,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:q}})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader-container"),h=document.querySelector(".load-more-btn"),E=new S(".gallery a");function $(){m.innerHTML=""}function g(){p.classList.remove("is-hidden")}function y(){p.classList.add("is-hidden")}function v(r){const o=r.map(e=>`
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
      `).join("");m.insertAdjacentHTML("beforeend",o),E.refresh()}function d(){h.classList.remove("is-hidden")}function l(){h.classList.add("is-hidden")}const L=document.querySelector(".form"),B=document.querySelector(".load-more-btn"),b=15;let u="",a=1;L.addEventListener("submit",I);B.addEventListener("click",M);async function I(r){r.preventDefault();const o=r.currentTarget.elements["search-text"].value.trim();if(o===""){n.error({message:"Please enter a search term!",position:"topRight"});return}u=o,a=1,$(),l(),g();try{const e=await f(u,a);if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}if(v(e.hits),L.reset(),a*b>=e.totalHits){l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}d()}catch(e){n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(e)}finally{y()}}async function M(){a+=1,l(),g();try{const r=await f(u,a);v(r.hits);const o=document.querySelector(".gallery-item");if(o){const i=o.getBoundingClientRect().height;window.scrollBy({top:i*2,behavior:"smooth"})}if(a*b>=r.totalHits){l(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"});return}d()}catch(r){a-=1,n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),d(),console.error(r)}finally{y()}}
//# sourceMappingURL=index.js.map
