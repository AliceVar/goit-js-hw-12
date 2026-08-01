import{a as f,S as u,i as n}from"./assets/vendor-BGqwtSVv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d="56671223-37e43b5ca49c43ffc47d09138",p="https://pixabay.com/api/";function m(s){return f.get(p,{params:{key:d,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(t=>t.data)}const l=document.querySelector(".gallery"),c=document.querySelector(".loader-container"),g=new u(".gallery a");function h(){l.innerHTML=""}function y(){c.classList.remove("is-hidden")}function v(){c.classList.add("is-hidden")}function L(s){const t=s.map(r=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${r.largeImageURL}">
            <img
              class="gallery-image"
              src="${r.webformatURL}"
              alt="${r.tags}"
            />
          </a>

          <div class="image-info">
            <div class="info-item">
              <p class="info-label">Likes</p>
              <p class="info-value">${r.likes}</p>
            </div>

            <div class="info-item">
              <p class="info-label">Views</p>
              <p class="info-value">${r.views}</p>
            </div>

            <div class="info-item">
              <p class="info-label">Comments</p>
              <p class="info-value">${r.comments}</p>
            </div>

            <div class="info-item">
              <p class="info-label">Downloads</p>
              <p class="info-value">${r.downloads}</p>
            </div>
          </div>
        </li>
      `).join("");l.insertAdjacentHTML("beforeend",t),g.refresh()}const b=document.querySelector(".form");b.addEventListener("submit",w);function w(s){s.preventDefault();const t=s.currentTarget.elements["search-text"].value.trim();if(t===""){n.error({message:"Please enter a search term!",position:"topRight"});return}h(),y(),m(t).then(r=>{if(r.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}L(r.hits),s.currentTarget.reset()}).catch(r=>{n.error({message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(r)}).finally(()=>{v()}),console.log(t)}
//# sourceMappingURL=index.js.map
