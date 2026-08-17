
      const vipShops = [{"name":"한국미인테라피","area":"서울 · 경기 · 인천","address":"한국미인테라피 업체의 지역·코스·이용 정보를 한눈에 확인할 수 있는 VIP 추천입니다. 원하는 일정에 맞춰 상세 안내를 확인해보세요.","price":"100,000원~","image":"/assets/images/main-recommend/vip-01.png","link":"/shops/seoul/gangnam-gu/한국미인테라피/index.html","type":"VIP","sort":1},{"name":"너무이쁜테라피","area":"서울 · 경기 · 인천","address":"너무이쁜테라피 업체의 지역·코스·이용 정보를 한눈에 확인할 수 있는 VIP 추천입니다. 원하는 일정에 맞춰 상세 안내를 확인해보세요.","price":"60,000원~","image":"/assets/images/main-recommend/vip-02.png","link":"/shops/seoul/gangnam-gu/역삼동/너무이쁜테라피/index.html","type":"VIP","sort":2},{"name":"love테라피","area":"서울 · 경기 · 인천","address":"love테라피 업체의 지역·코스·이용 정보를 한눈에 확인할 수 있는 VIP 추천입니다. 원하는 일정에 맞춰 상세 안내를 확인해보세요.","price":"60,000원~","image":"/assets/images/main-recommend/vip-03.png","link":"/shops/seoul/gangnam-gu/역삼동/love테라피/index.html","type":"VIP","sort":3},{"name":"프리미엄테라피","area":"서울 · 경기 · 인천","address":"프리미엄테라피 업체의 지역·코스·이용 정보를 한눈에 확인할 수 있는 VIP 추천입니다. 원하는 일정에 맞춰 상세 안내를 확인해보세요.","price":"60,000원~","image":"/assets/images/main-recommend/vip-04.png","link":"/shops/seoul/gangnam-gu/역삼동/프리미엄테라피/index.html","type":"VIP","sort":4}];

      const premiumShops = [{"name":"마인드좋은테라피","area":"화성 · 하남 · 군포","address":"마인드좋은테라피 업체의 이용 조건과 코스 정보를 편리하게 비교할 수 있는 프리미엄 추천입니다. 상세페이지에서 필요한 내용을 확인해보세요.","price":"60,000원~","image":"/assets/images/main-recommend/premium-01.png","link":"/shops/seoul/gangdong-gu/강일동/마인드좋은테라피/index.html","type":"PICK","sort":1},{"name":"S썸바디테라피","area":"대전 · 청주 · 공주","address":"S썸바디테라피 업체의 이용 조건과 코스 정보를 편리하게 비교할 수 있는 프리미엄 추천입니다. 상세페이지에서 필요한 내용을 확인해보세요.","price":"50,000원~","image":"/assets/images/main-recommend/premium-02.png","link":"/shops/other/daejeon/daedeok-gu/대화동/S썸바디테라피/index.html","type":"PICK","sort":2},{"name":"24시미녀테라피","area":"대전","address":"24시미녀테라피 업체의 이용 조건과 코스 정보를 편리하게 비교할 수 있는 프리미엄 추천입니다. 상세페이지에서 필요한 내용을 확인해보세요.","price":"60,000원~","image":"/assets/images/main-recommend/premium-03.png","link":"/shops/other/daejeon/daedeok-gu/대화동/24시미녀테라피/index.html","type":"PICK","sort":3},{"name":"레드테라피","area":"청주","address":"레드테라피 업체의 이용 조건과 코스 정보를 편리하게 비교할 수 있는 프리미엄 추천입니다. 상세페이지에서 필요한 내용을 확인해보세요.","price":"60,000원~","image":"/assets/images/main-recommend/premium-04.png","link":"/shops/other/cheongju/sangdang-gu/가덕면/레드테라피/index.html","type":"PICK","sort":4}];

      const shops = [...vipShops, ...premiumShops];

const card = (s, type, idx=0) => `
<article class="card">
  <div class="thumb">
    <img src="${s.image || ('assets/images/shops/room-' + ((idx % 8) + 1) + '.jpg')}" alt="${s.name} 추천 이미지">
    <span class="badge" data-label="${type}" aria-label="${type}"></span>
    <div class="thumb-title">${s.area}</div>
  </div>
  <div class="card-body">
    <h3>${s.name}</h3>
    <div class="card-sub">${s.area}</div>
    <div class="stats"><span>${type}</span><span>추천 업체</span></div>
    <div class="distance">현재 위치에서 거리 계산 중...</div>
    <div class="address">${s.address}</div>
    <div class="card-bottom">
      <div class="price">${s.price}</div>
            <a href="${s.link || '#'}" class="detail-btn">자세히 보기</a>
    </div>
  </div>
</article>`;

document.querySelector("#vipCards").innerHTML = vipShops.map((s,i)=>card(s,"VIP",i)).join("");

document.querySelector("#premiumCards").innerHTML = premiumShops.map((s,i)=>card(s,"PICK",i+4)).join("");

const regions = {"서울":[{"name":"한국미인테라피","area":"서울","price":"100,000원~","link":"/shops/seoul/gangnam-gu/한국미인테라피/index.html"},{"name":"너무이쁜테라피","area":"서울","price":"60,000원~","link":"/shops/seoul/gangnam-gu/역삼동/너무이쁜테라피/index.html"},{"name":"love테라피","area":"서울","price":"60,000원~","link":"/shops/seoul/gangnam-gu/역삼동/love테라피/index.html"},{"name":"프리미엄테라피","area":"서울","price":"60,000원~","link":"/shops/seoul/gangnam-gu/역삼동/프리미엄테라피/index.html"}],"경기":[{"name":"한국미인테라피","area":"경기","price":"100,000원~","link":"/shops/seoul/mapo-gu/성산동/한국미인테라피/index.html"},{"name":"너무이쁜테라피","area":"경기","price":"60,000원~","link":"/shops/seoul/mapo-gu/성산동/너무이쁜테라피/index.html"},{"name":"love테라피","area":"경기","price":"60,000원~","link":"/shops/seoul/mapo-gu/성산동/love테라피/index.html"},{"name":"프리미엄테라피","area":"경기","price":"60,000원~","link":"/shops/seoul/mapo-gu/성산동/프리미엄테라피/index.html"}],"인천":[{"name":"한국미인테라피","area":"인천","price":"100,000원~","link":"/shops/incheon/ganghwa-gun/강화읍/한국미인테라피/index.html"},{"name":"너무이쁜테라피","area":"인천","price":"60,000원~","link":"/shops/incheon/ganghwa-gun/강화읍/너무이쁜테라피/index.html"},{"name":"love테라피","area":"인천","price":"60,000원~","link":"/shops/incheon/ganghwa-gun/강화읍/love테라피/index.html"},{"name":"프리미엄테라피","area":"인천","price":"60,000원~","link":"/shops/incheon/ganghwa-gun/강화읍/프리미엄테라피/index.html"}],"기타지역":[{"name":"한국미인테라피","area":"천안 · 아산","price":"100,000원~","link":"/shops/other/asan/도고면/한국미인테라피/index.html"},{"name":"love테라피","area":"천안 · 아산","price":"60,000원~","link":"/shops/other/asan/도고면/love테라피/index.html"},{"name":"S썸바디테라피","area":"대전 · 청주 · 공주","price":"50,000원~","link":"/shops/other/daejeon/daedeok-gu/대화동/S썸바디테라피/index.html"},{"name":"24시미녀테라피","area":"대전","price":"60,000원~","link":"/shops/other/daejeon/daedeok-gu/대화동/24시미녀테라피/index.html"}]};

function drawRegion(key){
  document.querySelector("#regionItems").innerHTML = regions[key].map((x,i)=>`
    <a class="region-row" href="${x.link || '#'}" style="text-decoration:none;color:inherit">
      <i>${i+1}</i>
      <div>
        <h3>${x.name}</h3>
        <p>${x.area} · 등록 업체</p>
      </div>
      <strong>${x.price}</strong>
    </a>`).join("");
}
drawRegion("서울");

document.querySelectorAll(".tabs button").forEach(btn=>{
  btn.addEventListener("click",()=>{
    document.querySelectorAll(".tabs button").forEach(x=>x.classList.remove("active"));
    btn.classList.add("active");
    drawRegion(btn.dataset.tab);
  });
});

const drawer = document.querySelector("#drawer");
const overlay = document.querySelector("#overlay");

function menu(open){
  drawer.classList.toggle("open",open);
  overlay.classList.toggle("show",open);
  drawer.setAttribute("aria-hidden",String(!open));
}
document.querySelector("#openMenu").addEventListener("click",()=>menu(true));
document.querySelector("#closeMenu").addEventListener("click",()=>menu(false));
overlay.addEventListener("click",()=>menu(false));

document.querySelector("#searchForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const q = document.querySelector("#q").value.trim().toLowerCase();
  if(!q) return;
  document.querySelectorAll(".card,.region-row").forEach(el=>{
    const hit = el.textContent.toLowerCase().includes(q);
    el.style.outline = hit ? "2px solid #d8aa4a" : "";
    el.style.outlineOffset = hit ? "2px" : "";
  });
  document.querySelector("#vipCards").scrollIntoView({behavior:"smooth",block:"center"});
});

/* ===== v26 badge dedupe ===== */
function normalizeCardBadges(){
  document.querySelectorAll(".thumb").forEach((thumb)=>{
    const badges = Array.from(thumb.children).filter((el)=>el.classList && el.classList.contains("badge"));
    badges.forEach((badge,index)=>{
      if(index>0) badge.remove();
    });
  });
}
normalizeCardBadges();
requestAnimationFrame(normalizeCardBadges);


