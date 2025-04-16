const products = {
  "니트로 프라임": `• 파일 업로드 최대 500MB  
• 모든 서버 이모지 자유롭게 사용가능 (프로필 포함)  
• HD 화면 공유 지원  
• 슈퍼 반응 무제한 지원  
• 무료 서버 부스트 2개  
• 사용자 지정 프로필 (프로필 배너 등)  
• 밴웨이브, 회수 등 디스코드로 인한 문제 피해보상  
• 단순 변심으로 인한 환불, 교체 X  
• 구매하기 전 반드시 ⁠이용약관 채널 읽어주세요.  
• 해당 제품은 선물링크로 지급됩니다.  
가격 : 7500원`,

  "니트로 베이직": `• 파일 업로드 최대 50MB  
• 모든 서버 이모지 자유롭게 사용가능 (프로필 포함)  
• 슈퍼 반응 무제한 지원  
• 밴웨이브, 회수 등 디스코드로 인한 문제 피해보상  
• 단순 변심으로 인한 환불, 교체 X  
• 구매하기 전 반드시 이용약관 채널 읽어주세요.  
• 해당 제품은 선물링크로 지급됩니다.  
가격 : 3000원`,

  "프로필 장식품": `• 5,700원 -> 4,200원  
• 6,300원 -> 4,500원  
• 7,000원 -> 6,000원  
• 8,200원 -> 6,500원  
• 9,500원 -> 8,000원  
• 10,100원 -> 9,000원  
• 12,000원 -> 11,000원  
• 장식품 세트 가격 ( 번들 )  
• 10,800원 -> 8,500원  
• 12,000원 -> 11,500원 ( 에스파 세트 가격 )  
• 14,000원 -> 13,500원  
• 그 외 장식은 구매하실때 물어봐주세요.  
• 단순 변심으로 인한 환불, 교체 X  
• 업자 문제로 시간이 지체될 수 있으니 양해부탁드리며 재촉하시면 티켓닫겠습니다.  
• 구매하기 전 반드시 ⁠이용약관 채널 읽어주세요.  
• 해당 제품은 선물링크로 지급됩니다.`,

  "서버 부스트": `• 초대링크 배경 커스텀 가능  
• 서버 배너 추가 가능  
• 커스텀 초대 링크 (3레벨 기준)  
• 모든 멤버 최대 100MB로 업로드 제한 상향  
• 디스코드 방송 1080p 60fps 송출  
• 이모지 슬롯 100개 추가 (총 250개 사용 가능)  
• 서버부스트 30일 2개당 1,100원  
• 서버부스트 90일 2개당 2,000원  
• 서버 부스트 후 초대된 토큰 추방 시 부스트 해제  
• 부스트 계정 터짐 시 보상 불가  
• 업자 문제로 시간 지체 가능, 재촉 시 티켓 종료  
• 구매 전 반드시 이용약관 채널 읽기`,

  "유튜브 프리미엄": `• 광고 없이 YouTube & Music 이용  
• 백그라운드 재생 가능  
• 오프라인 다운로드 가능  
• '현재 재생목록에 추가' 기능 사용 가능  
• 계정 보증 : 요금제 종료일까지  
• 사용법: 이메일로 가족그룹 초대 수락  
• 가격: 30일 - 4,300원, 90일 - 9,200원, 180일 - 17,800원, 영구 - 27,000원  
• 업자 문제로 시간 지체 가능, 재촉 시 티켓 종료  
• 구매 전 반드시 이용약관 채널 읽기`,

  "스포티파이 프리미엄": `• 광고 없이 음악 감상  
• 수백만 곡 감상 가능  
• 오프라인 감상 가능  
• 순서 무관 재생, 고음질  
• 계정 보증 없음  
• 제품 형태: 이메일:비밀번호  
• 가격: 90일 - 3,600원  
• 업자 문제로 시간 지체 가능, 재촉 시 티켓 종료  
• 구매 전 반드시 이용약관 채널 읽기`,

  "스포티파이 프리미엄 영구": `• 광고 없이 음악 감상  
• 수백만 곡 감상 가능  
• 오프라인 감상 가능  
• 순서 무관 재생, 고음질  
• 계정 보증: 회수 X, 밴웨이브 X  
• 코드 지급, 본인 계정 적용 가능  
• 가격: 영구 - 10,500원  
• 업자 문제로 시간 지체 가능, 재촉 시 티켓 종료  
• 구매 전 반드시 이용약관 채널 읽기`,
};

function showProduct(name) {
  document.getElementById("home").classList.add("hidden");
  document.getElementById("product-detail").classList.remove("hidden");
  document.getElementById("product-title").textContent = name;
  document.getElementById("product-title").classList.add("text-xl");
  document.getElementById("product-description").textContent = products[name] || "설명이 준비되지 않았습니다.";
}

function goHome() {
  document.getElementById("product-detail").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

function toggleAudio() {
  const iframe = document.getElementById("youtube-iframe");
  if (!iframe) return;

  const isHidden = iframe.classList.toggle("hidden");
  if (isHidden) {
    iframe.src = ""; // 끔
  } else {
    iframe.src = "https://www.youtube.com/embed/VtJ_2SbYoIM?autoplay=1&loop=1&playlist=VtJ_2SbYoIM"; // 켬
  }
}

function fetchReviews() {
  fetch("https://your-review-endpoint.com/reviews") // 백엔드 주소로 바꿔줘
    .then((res) => res.json())
    .then((data) => {
      const ul = document.getElementById("reviews");
      ul.innerHTML = "";
      data.slice(0, 10).forEach((review) => {
        const li = document.createElement("li");
        li.textContent = review;
        ul.appendChild(li);
      });
    });
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("loader").style.display = "none";
  fetchReviews();

  const volumeSlider = document.getElementById("volumeSlider");
  volumeSlider.addEventListener("input", (e) => {
    const iframe = document.getElementById("youtube-iframe");
    // 유튜브 iframe은 JS로 직접 볼륨 조절 불가. 대신 안내 메세지 등 고려
    console.log("유튜브 볼륨 조절은 제한됨");
  });
});
// Supabase 설정
const SUPABASE_URL = "https://aeqfyztiorlbizwbvcrz.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlcWZ5enRpb3JsYml6d2J2Y3J6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4MDg4MjYsImV4cCI6MjA2MDM4NDgyNn0.hMYNE6mBINI_5tPjRPoprJ0M7Z4FnKogGqgYSNUG5zo";

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 후기 불러오기
async function loadReviews() {
  const { data, error } = await supabase
    .from('reviews')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(10);

  const reviewsList = document.getElementById('reviews');
  reviewsList.innerHTML = '';

  if (error) {
    console.error("후기 불러오기 실패:", error.message);
    reviewsList.innerHTML = '<li>후기를 불러오는 중 오류가 발생했습니다.</li>';
    return;
  }

  if (data.length === 0) {
    reviewsList.innerHTML = '<li>아직 후기가 없습니다.</li>';
  } else {
    data.forEach(review => {
      const li = document.createElement('li');
      li.textContent = review.content;
      reviewsList.appendChild(li);
    });
  }
}

// 로드될 때 후기 불러오기
document.addEventListener('DOMContentLoaded', loadReviews);
