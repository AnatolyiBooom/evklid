document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll(".section-work__btn-step").forEach((function(e){e.addEventListener("click",(function(e){const t=e.currentTarget.dataset.path;console.log(t),document.querySelectorAll(".section-work__btn-step").forEach((function(e){e.classList.remove("section-work__active-step")})),this.classList.add("section-work__active-step"),document.querySelectorAll(".section-work__btn-step").forEach((function(e){e.classList.remove("section-work__active-step")})),this.classList.add("section-work__active-step"),document.querySelectorAll(".section-work__tab-content").forEach((function(e){e.classList.remove("section-work__tab-active")})),document.querySelector(`[data-target="${t}"]`).classList.add("section-work__tab-active")}))})),document.querySelectorAll(".section-questions__faq").forEach((function(e){e.addEventListener("click",(function(e){const t=e.currentTarget.dataset.path;console.log(t),document.querySelectorAll(".section-questions__faq").forEach((function(e){e.classList.remove("faq-active")})),this.classList.add("faq-active")}))})),document.querySelector("#header__content-burger").addEventListener("click",(function(){this.classList.toggle("active-burger"),document.querySelector("#header__burger-nav").classList.toggle("header__active-nav")})),$((function(){$("#accordion").accordion({collapsible:!0,active:!1})}));new Swiper(".swiper-container",{a11y:{paginationBulletMessage:"Кнопка {{index}}"},pagination:{el:".swiper-pagination",clickable:!0}});new LazyLoad({elements_selector:".lazy"})}));