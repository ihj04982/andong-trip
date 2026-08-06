const STORAGE_KEY = "andong-trip-state-v2";

const places = [
  {
    id: "stay-usim",
    name: "스테이유심 월영교점",
    category: "stay",
    typeLabel: "숙소",
    address: "경북 안동시 와룡면 동악골길 157-26",
    lat: 36.5976,
    lng: 128.784,
    indoor: true,
    fixed: true,
    summary: "오늘 밤 돌아올 고정 숙소예요. 선택 후보가 아니라 언제든 주소만 확인합니다.",
    hours: "체크인 시간은 예약 정보를 확인하세요.",
    parking: "숙소 주차 정보는 예약 안내를 확인하세요.",
    tip: "폭염 시간대에는 숙소를 중간 휴식지로 잡아도 좋아요."
  },
  {
    id: "terminal",
    name: "안동터미널",
    category: "reference",
    typeLabel: "참고",
    address: "경북 안동시 경동로 130",
    lat: 36.5744,
    lng: 128.6761,
    indoor: true,
    fixed: true,
    summary: "도착/출발 기준점으로만 쓰는 참고 지점입니다.",
    hours: "터미널 운영",
    parking: "필요할 때만 주소 확인용으로 둡니다.",
    tip: "여행 시작 위치로 쓰기 좋습니다."
  },
  {
    id: "iljik",
    name: "일직식당",
    category: "food",
    subcategory: "fish",
    typeLabel: "식당",
    address: "경북 안동시 경동로 676 1층",
    lat: 36.5629,
    lng: 128.7319,
    indoor: true,
    summary: "안동 간고등어 구이·조림 정식으로 유명한 오래된 한식당.",
    hours: "08:00~21:00, 라스트오더 20:30, 월요일 휴무",
    parking: "식당 뒤 금성유료주차장 1시간 무료 안내가 많아요.",
    tip: "생선 메뉴가 당길 때 좋아요. 조림은 2인 이상 주문인 경우가 많습니다."
  },
  {
    id: "wolyeong-galbi",
    name: "월영갈비",
    category: "food",
    subcategory: "galbi",
    typeLabel: "식당",
    address: "경북 안동시 경동로 677-8",
    lat: 36.5635,
    lng: 128.7324,
    indoor: true,
    summary: "안동 갈비골목 쪽 한우갈비 식당. 고기 식사가 필요할 때 선택.",
    hours: "대체로 11:00~21:30",
    parking: "매장 앞 주차 가능 안내가 많아요.",
    tip: "찜닭이나 간고등어가 아닌 고기 메뉴를 원할 때 좋습니다."
  },
  {
    id: "kimdaegam",
    name: "안동김대감",
    category: "food",
    subcategory: "set",
    typeLabel: "식당",
    address: "경북 안동시 석주로 193 1,2층",
    lat: 36.577,
    lng: 128.7577,
    indoor: true,
    summary: "월영교 근처에서 찜닭과 간고등어를 한 번에 먹기 좋은 식당.",
    hours: "11:00~21:00, 15:00~16:30 브레이크타임, 20:00 라스트오더",
    parking: "주차 가능 안내가 많아요.",
    tip: "월영교 주변 동선에 있을 때 식사 후보로 좋습니다."
  },
  {
    id: "sinssegye-jjimdak",
    name: "안동신세계찜닭",
    category: "food",
    subcategory: "jjimdak",
    typeLabel: "식당",
    address: "경북 안동시 번영길 10 1층",
    lat: 36.5655,
    lng: 128.7276,
    indoor: true,
    summary: "안동구시장 찜닭골목의 찜닭집. 넓은 실내에서 든든하게 먹기 좋아요.",
    hours: "09:30~21:00, 라스트오더 19:50, 연중무휴 안내",
    parking: "안동구시장 공영주차장 이용 권장.",
    tip: "찜닭골목 안이라 원조안동찜닭과 가까워 비교 선택하기 쉽습니다."
  },
  {
    id: "wonjo-jjimdak",
    name: "원조안동찜닭",
    category: "food",
    subcategory: "jjimdak",
    typeLabel: "식당",
    address: "경북 안동시 번영1길 47 1층",
    lat: 36.5654,
    lng: 128.7279,
    indoor: true,
    summary: "안동찜닭 원조 분위기의 시장 식당. 당면과 간장 양념 찜닭이 대표.",
    hours: "08:30~20:00, 라스트오더 19:30",
    parking: "안동구시장 공영주차장 이용 권장.",
    tip: "안동에 왔으니 찜닭을 먹자는 분위기일 때 가장 직관적인 선택입니다."
  },
  {
    id: "sancheong",
    name: "산청식당",
    category: "food",
    subcategory: "korean",
    typeLabel: "식당",
    address: "경북 안동시 대석3길 14-1",
    lat: 36.5661,
    lng: 128.7257,
    indoor: true,
    summary: "시내 대석동 쪽 한식당. 든든한 한식이 필요할 때 후보.",
    hours: "방문 전 영업 여부를 확인하세요.",
    parking: "주변 주차 공간을 확인하세요.",
    tip: "구시장·시내 동선에 있을 때 식사 후보로 넣기 좋습니다."
  },
  {
    id: "geumjae",
    name: "동악골금재가든",
    category: "food",
    subcategory: "garden",
    typeLabel: "식당",
    address: "경북 안동시 와룡면 동악골길 166 1층",
    lat: 36.5968,
    lng: 128.7841,
    indoor: true,
    summary: "숙소 바로 근처 가든 식당. 저녁이나 체크인 전후로 가기 좋아요.",
    hours: "방문 전 영업 여부를 확인하세요.",
    parking: "가게 주변 주차 안내가 많아요.",
    tip: "스테이유심과 붙어 있어 이동 부담이 거의 없습니다."
  },
  {
    id: "sinchon-jokbal",
    name: "신촌족발보쌈",
    category: "food",
    subcategory: "jokbal",
    typeLabel: "식당",
    address: "경북 안동시 송하1길 124 1층",
    lat: 36.5677,
    lng: 128.6934,
    indoor: true,
    summary: "옥동 쪽 족발·보쌈집. 고기 안주나 야식으로 든든하게.",
    hours: "방문 전 영업 여부를 확인하세요.",
    parking: "매장 근처 주차 가능 여부를 확인하세요.",
    tip: "시내 서쪽(옥동) 동선일 때 선택하기 좋습니다."
  },
  {
    id: "hyoja-chicken",
    name: "효자통닭",
    category: "food",
    subcategory: "chicken",
    typeLabel: "식당",
    address: "경북 안동시 당북길 54 1층",
    lat: 36.5661,
    lng: 128.7189,
    indoor: true,
    summary: "당북동 통닭집. 가볍게 치킨이 당길 때 후보.",
    hours: "방문 전 영업 여부를 확인하세요.",
    parking: "주변 주차 공간을 확인하세요.",
    tip: "시내에서 캐주얼하게 먹을 때 좋습니다."
  },
  {
    id: "mammoth",
    name: "맘모스",
    category: "cafe",
    subcategory: "bakery",
    typeLabel: "카페/간식",
    address: "경북 안동시 문화광장길 34 1층",
    lat: 36.5646,
    lng: 128.731,
    indoor: true,
    summary: "크림치즈빵으로 유명한 안동 대표 베이커리. 실내 좌석도 있어요.",
    hours: "08:30~19:00, 설·추석 당일 휴무",
    parking: "매장 앞 주차 불가. 문화의거리 공영주차장 등 이용.",
    tip: "빵이 빨리 소진될 수 있어 오전이나 이른 오후가 편합니다."
  },
  {
    id: "wolyeongdang",
    name: "월영당",
    category: "cafe",
    subcategory: "hanok",
    typeLabel: "카페",
    address: "경북 안동시 민속촌길 26",
    lat: 36.5789,
    lng: 128.7646,
    indoor: true,
    summary: "월영교 근처 한옥 카페. 대마씨앗라떼, 쑥 디저트, 야경 동선에 좋아요.",
    hours: "10:00~22:00",
    parking: "안동시립민속박물관 공영주차장 이용이 편리합니다.",
    tip: "밤까지 열어 월영교 야경 전후로 쉬기 좋습니다."
  },
  {
    id: "achaga",
    name: "아차가",
    category: "cafe",
    subcategory: "gelato",
    typeLabel: "간식",
    address: "경북 안동시 문화광장길 40-5 1층",
    lat: 36.5649,
    lng: 128.7313,
    indoor: true,
    summary: "수제 젤라또 전문점. 양반쌀, 막걸리 등 지역색 있는 맛이 유명해요.",
    hours: "화~일 12:00~18:00, 월요일 휴무, 재료 소진 시 조기 마감 가능",
    parking: "문화의거리 주차장 또는 웅부공원 공영주차장 권장.",
    tip: "더울 때 가장 만족도가 높은 짧은 간식 코스입니다."
  },
  {
    id: "gurume-396",
    name: "구름에396커피",
    category: "cafe",
    subcategory: "hanok",
    typeLabel: "카페",
    address: "경북 안동시 민속촌길 200",
    lat: 36.5724,
    lng: 128.768,
    indoor: true,
    summary: "한옥 리조트 안의 조용한 카페. 월영교·민속촌권에서 쉬기 좋아요.",
    hours: "08:00~18:00",
    parking: "카페 입구 맞은편 주차 공간 안내가 많아요.",
    tip: "한옥 분위기와 커피를 같이 원할 때 선택하세요."
  },
  {
    id: "coffee-396",
    name: "396커피컴퍼니",
    category: "cafe",
    subcategory: "coffee",
    typeLabel: "카페",
    address: "경북 안동시 옥동길 32 1층",
    lat: 36.56,
    lng: 128.6999,
    indoor: true,
    summary: "안동 로컬 커피 브랜드 본점. 로스팅 커피와 베이커리 메뉴가 강점.",
    hours: "월~토 09:00~21:00, 일 09:00~18:00",
    parking: "가게 앞 주차 가능 안내가 있어요.",
    tip: "시내 서쪽으로 움직일 때 쉬어가기 좋습니다."
  },
  {
    id: "sahyuwon",
    name: "사효원",
    category: "cafe",
    subcategory: "tea",
    typeLabel: "차/카페",
    address: "경북 안동시 먼달길 164",
    lat: 36.5504,
    lng: 128.7243,
    indoor: true,
    summary: "전통 찻집. 한옥 분위기에서 차 한잔하며 쉬기 좋아요.",
    hours: "방문 전 영업 여부를 확인하세요.",
    parking: "주변 주차 공간을 확인하세요.",
    tip: "커피 대신 전통차가 당길 때 선택하세요."
  },
  {
    id: "hahoe",
    name: "안동하회마을",
    category: "sight",
    subcategory: "village",
    typeLabel: "관광지",
    address: "경북 안동시 풍천면 하회리 1176-1",
    lat: 36.539,
    lng: 128.5181,
    indoor: false,
    summary: "유네스코 세계유산 전통마을. 넓고 야외 도보가 많아 폭염엔 시간 선택이 중요해요.",
    hours: "하절기 09:00~18:00, 입장마감 17:30",
    parking: "마을 입구 무료 주차장 이용 후 셔틀 이동.",
    tip: "8월 폭염에는 오전 일찍 또는 해가 기운 뒤가 낫습니다."
  },
  {
    id: "byeongsan",
    name: "병산서원",
    category: "sight",
    subcategory: "seowon",
    typeLabel: "관광지",
    address: "경북 안동시 풍천면 병산길 386",
    lat: 36.5406,
    lng: 128.5526,
    indoor: false,
    summary: "낙동강과 만대루가 아름다운 서원. 야외 관람이라 더위와 햇빛 대비가 필요해요.",
    hours: "하절기 09:00~18:00",
    parking: "병산서원 동쪽 무료 주차장 안내가 많아요.",
    tip: "하회마을과 묶기 좋지만 한낮에는 체력 소모가 큽니다."
  },
  {
    id: "dosanseowon",
    name: "도산서원",
    category: "sight",
    subcategory: "seowon",
    typeLabel: "관광지",
    address: "경북 안동시 도산면 도산서원길 154",
    lat: 36.7273,
    lng: 128.8435,
    indoor: false,
    summary: "퇴계 이황을 기리는 유네스코 세계유산 서원. 도산·예끼마을 동선과 잘 맞아요.",
    hours: "하절기 09:00~18:00 안내가 많아요.",
    parking: "서원 입구 주차장을 이용하세요.",
    tip: "예끼마을·군자마을과 묶어 북쪽 코스로 잡기 좋습니다."
  },
  {
    id: "gunja",
    name: "오천군자마을",
    category: "sight",
    subcategory: "village",
    typeLabel: "관광지",
    address: "경북 안동시 와룡면 군자리길 29",
    lat: 36.6737,
    lng: 128.8023,
    indoor: false,
    summary: "광산김씨 고택이 모인 전통마을. 안동호 풍경과 함께 둘러보기 좋아요.",
    hours: "야외 관람 위주. 낮 시간 권장",
    parking: "마을 입구 주차 공간을 이용하세요.",
    tip: "도산서원 가는 길에 들르기 좋습니다."
  },
  {
    id: "yekki",
    name: "예끼마을",
    category: "sight",
    subcategory: "village",
    typeLabel: "관광지",
    address: "경북 안동시 도산면 선성길 14",
    lat: 36.6995,
    lng: 128.8124,
    indoor: false,
    summary: "예술이 입혀진 도산 서부리 마을. 벽화골목과 한옥 갤러리를 천천히 걷기 좋아요.",
    hours: "마을 산책은 낮~해질녘 권장",
    parking: "마을 입구 주차 공간을 이용하세요.",
    tip: "도산서원과 묶으면 북쪽 코스가 완성됩니다."
  },
  {
    id: "imcheonggak",
    name: "임청각",
    category: "sight",
    subcategory: "short",
    typeLabel: "관광지",
    address: "경북 안동시 임청각길 63",
    lat: 36.5651,
    lng: 128.7447,
    indoor: false,
    summary: "독립운동가 석주 이상룡 선생의 고택. 짧게 들르기 좋은 역사 코스.",
    hours: "주요 고택 관람은 낮 시간 권장",
    parking: "주변 정비 주차장 이용 가능 안내가 있어요.",
    tip: "월영교·시내 동선 중간에 넣기 좋습니다."
  },
  {
    id: "manhyujeong",
    name: "만휴정",
    category: "sight",
    subcategory: "pavilion",
    typeLabel: "관광지",
    address: "경북 안동시 길안면 묵계하리길 42",
    lat: 36.4104,
    lng: 128.9099,
    indoor: false,
    summary: "계곡과 정자가 아름다운 길안면 명소. 이동 거리가 있어 따로 시간 잡기 좋아요.",
    hours: "야외 관람. 낮 시간 권장",
    parking: "입구 근처 주차 후 걸어 들어가세요.",
    tip: "시내에서 꽤 멀어서 전용 코스로 잡는 편이 낫습니다."
  },
  {
    id: "nakgang",
    name: "낙강물길공원",
    category: "sight",
    subcategory: "park",
    typeLabel: "관광지",
    address: "경북 안동시 상아동 423",
    lat: 36.5879,
    lng: 128.7709,
    indoor: false,
    summary: "월영교 위쪽 물길 공원. 산책과 사진 찍기 좋은 야외 코스.",
    hours: "상시 개방 안내가 많아요.",
    parking: "월영교 주변 공영주차장을 이용하면 편합니다.",
    tip: "월영교·월영당과 이어서 걷기 좋습니다."
  },
  {
    id: "wolyeonggyo",
    name: "월영교",
    category: "sight",
    subcategory: "bridge",
    typeLabel: "관광지",
    address: "경북 안동시 상아동 502-1",
    lat: 36.5769,
    lng: 128.7583,
    indoor: false,
    summary: "안동 대표 다리와 야경 명소. 낮에도 좋고 저녁 산책으로도 좋아요.",
    hours: "상시 개방. 야경은 해진 뒤",
    parking: "월영교 공영주차장을 목적지 도착용으로 쓰면 됩니다.",
    tip: "주차장은 별도 장소가 아니라 월영교에 가기 위한 도착 지점입니다."
  }
];

const categoryText = {
  food: {
    title: "밥 먹으러 갈 곳",
    helper: "실내 식당 위주라 폭염 시간대에도 비교적 편합니다.",
    empty: "식당 후보는 모두 다녀왔어요."
  },
  cafe: {
    title: "카페와 간식",
    helper: "더울 때 쉬어가기 좋은 실내 후보를 먼저 보여드려요.",
    empty: "카페/간식 후보는 모두 다녀왔어요."
  },
  sight: {
    title: "구경할 곳",
    helper: "야외가 많습니다. 11~16시는 더위 경고를 꼭 확인하세요.",
    empty: "관광지 후보는 모두 다녀왔어요."
  },
  cool: {
    title: "지금은 시원한 곳",
    helper: "폭염 시간대에 쉬기 좋은 실내 장소만 모았습니다.",
    empty: "남은 실내 후보가 없어요."
  }
};

const subcategoryText = {
  food: {
    fish: {
      title: "간고등어",
      helper: "안동다운 생선 정식이 당길 때",
      empty: "간고등어 후보는 다녀왔어요."
    },
    jjimdak: {
      title: "찜닭",
      helper: "구시장 찜닭골목에서 든든하게",
      empty: "찜닭 후보는 다녀왔어요."
    },
    galbi: {
      title: "갈비/고기",
      helper: "고기 식사로 확실하게 먹고 싶을 때",
      empty: "갈비/고기 후보는 다녀왔어요."
    },
    set: {
      title: "한 번에 먹기",
      helper: "찜닭과 간고등어를 같이 고민할 때",
      empty: "세트형 후보는 다녀왔어요."
    },
    korean: {
      title: "한식",
      helper: "시내에서 든든한 한식이 필요할 때",
      empty: "한식 후보는 다녀왔어요."
    },
    garden: {
      title: "가든/숙소 근처",
      helper: "숙소 옆에서 편하게 먹고 싶을 때",
      empty: "가든 후보는 다녀왔어요."
    },
    jokbal: {
      title: "족발/보쌈",
      helper: "든든한 야식·고기 안주가 당길 때",
      empty: "족발/보쌈 후보는 다녀왔어요."
    },
    chicken: {
      title: "통닭",
      helper: "가볍게 치킨이 먹고 싶을 때",
      empty: "통닭 후보는 다녀왔어요."
    }
  },
  cafe: {
    bakery: {
      title: "빵/베이커리",
      helper: "크림치즈빵처럼 사 가기 좋은 간식",
      empty: "베이커리 후보는 다녀왔어요."
    },
    gelato: {
      title: "젤라또",
      helper: "폭염에 바로 식히는 짧은 간식",
      empty: "젤라또 후보는 다녀왔어요."
    },
    hanok: {
      title: "한옥/월영교 근처",
      helper: "월영교 동선에서 분위기 있게 쉬기",
      empty: "한옥 카페 후보는 다녀왔어요."
    },
    coffee: {
      title: "커피 본점",
      helper: "커피 맛과 실내 휴식이 우선일 때",
      empty: "커피 본점 후보는 다녀왔어요."
    },
    tea: {
      title: "전통차",
      helper: "커피 대신 찻집에서 쉬고 싶을 때",
      empty: "전통차 후보는 다녀왔어요."
    }
  },
  sight: {
    village: {
      title: "마을",
      helper: "전통마을·예술마을을 넓게 걷기",
      empty: "마을 후보는 다녀왔어요."
    },
    seowon: {
      title: "서원",
      helper: "풍경 좋은 야외 문화유산",
      empty: "서원 후보는 다녀왔어요."
    },
    short: {
      title: "짧게 보는 역사",
      helper: "시내 동선에서 부담 적게 들르기",
      empty: "짧은 역사 코스는 다녀왔어요."
    },
    pavilion: {
      title: "정자/계곡",
      helper: "만휴정처럼 풍경 좋은 정자 코스",
      empty: "정자 후보는 다녀왔어요."
    },
    park: {
      title: "공원/산책",
      helper: "물길·공원을 가볍게 걷기",
      empty: "공원 후보는 다녀왔어요."
    },
    bridge: {
      title: "월영교",
      helper: "다리 산책과 야경이 목적일 때",
      empty: "월영교는 다녀왔어요."
    }
  }
};

let state = loadState();
let currentView = { name: "home" };
let toastTimer;

const app = document.querySelector("#app");
const toast = document.querySelector("#toast");
const resetButton = document.querySelector("#resetButton");

resetButton.addEventListener("click", resetTrip);
window.history.replaceState({ view: { name: "home" } }, "", window.location.href);
window.addEventListener("popstate", handleBrowserBack);

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").catch(() => {});
  });
}

renderHome();

function loadState() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return {
      visited: Array.isArray(parsed?.visited) ? parsed.visited : [],
      lastPlaceId: parsed?.lastPlaceId || null,
      userLocation: parsed?.userLocation || null
    };
  } catch {
    return { visited: [], lastPlaceId: null, userLocation: null };
  }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    showToast("기록 저장은 안 됐지만 화면에서는 계속 사용할 수 있어요.");
  }
}

function renderHome() {
  currentView = { name: "home" };
  const lastPlace = findPlace(state.lastPlaceId);
  const visitedCount = state.visited.length;
  const remainingCount = selectablePlaces().filter((place) => !state.visited.includes(place.id)).length;
  const hotNow = isHotTime();

  app.innerHTML = `
    <section class="panel hero">
      <div class="hero-copy">
        <p class="eyebrow">${hotNow ? "지금은 한낮 더위 조심" : "즉석 선택 모드"}</p>
        <h2>${lastPlace ? `방금 ${lastPlace.name}에 다녀왔어요.` : "첫 장소를 골라볼까요?"}</h2>
        <p class="lead">배고픔, 더위, 거리만 보고 다음 장소를 빠르게 고르세요. 주소는 크게 보여드리고 복사할 수 있어요.</p>
      </div>
      <div class="status-row">
        <span class="pill">다녀온 곳 ${visitedCount}곳</span>
        <span class="pill">남은 후보 ${remainingCount}곳</span>
        ${hotNow ? `<span class="pill hot">11~16시 야외 주의</span>` : ""}
      </div>
      <div class="choice-grid">
        ${choiceButton("food", "밥 먹으러", "찜닭, 갈비, 통닭, 족발")}
        ${choiceButton("cafe", "카페 가기", "커피, 빵, 젤라또, 전통차")}
        ${choiceButton("sight", "구경 가기", "월영교, 하회마을, 도산서원")}
      </div>
      <div class="actions">
        <button class="secondary-button" data-action="show-category" data-category="cool" type="button">덥고 지쳤어요</button>
        <button class="secondary-button" data-action="show-detail" data-id="stay-usim" type="button">숙소 주소 보기</button>
        <button class="secondary-button" data-action="show-references" type="button">터미널 보기</button>
      </div>
    </section>

    <section class="panel">
      <div class="section-head">
        <h3>다녀온 곳</h3>
        <p class="detail-text">실수로 눌렀다면 되돌릴 수 있어요.</p>
      </div>
      ${renderVisitedList()}
    </section>
  `;

  bindActions();
}

function choiceButton(category, label, helper) {
  return `
    <button class="choice-button" data-action="show-category" data-category="${category}" type="button">
      ${label}
      <span>${helper}</span>
    </button>
  `;
}

function renderSubcategories(category) {
  currentView = { name: "subcategories", category };
  const text = categoryText[category];
  const groups = Object.entries(subcategoryText[category] || {});

  app.innerHTML = `
    <button class="plain-button back-button" data-action="back" type="button">← 처음 화면</button>
    <section class="section-head">
      <h2>${text.title}</h2>
      <p class="lead">먼저 원하는 느낌을 골라주세요. 다음 화면에서 후보 장소를 보여드릴게요.</p>
    </section>
    <section class="subcategory-list">
      ${groups.map(([subcategory, group]) => renderSubcategoryButton(category, subcategory, group)).join("")}
    </section>
    <button class="secondary-button" data-action="show-category-list" data-category="${category}" data-subcategory="all" type="button">전체 후보 보기</button>
  `;

  bindActions();
}

function renderSubcategoryButton(category, subcategory, group) {
  const count = candidateCount(category, subcategory);
  return `
    <button class="subcategory-button" data-action="show-category-list" data-category="${category}" data-subcategory="${subcategory}" type="button" ${count ? "" : "disabled"}>
      <strong>${group.title}</strong>
      <span>${group.helper}</span>
      <small>${count ? `${count}곳 남음` : "남은 곳 없음"}</small>
    </button>
  `;
}

function renderCategory(category, subcategory = "all") {
  currentView = { name: "category", category, subcategory };
  const text = categoryText[category];
  const group = subcategory === "all" ? null : subcategoryText[category]?.[subcategory];
  const list = sortedCandidates(category, subcategory);
  const backLabel = category === "cool" ? "처음 화면" : categoryBackLabel(category);

  app.innerHTML = `
    <button class="plain-button back-button" data-action="back" data-category="${category}" type="button">← ${backLabel}</button>
    <section class="section-head">
      <p class="eyebrow">${text.title}</p>
      <h2>${group ? group.title : "전체 후보"}</h2>
      <p class="lead">${group ? group.helper : text.helper}</p>
    </section>
    ${renderSortBar()}
    ${list.length ? `<section class="place-list">${list.map(renderPlaceCard).join("")}</section>` : `<p class="empty">${group ? group.empty : text.empty}</p>`}
  `;

  bindActions();
}

function renderSortBar() {
  return `
    <section class="sort-bar" aria-label="목록 정렬">
      <p class="sort-label">${locationLabel()}</p>
      <div class="sort-actions">
        <button class="secondary-button" data-action="use-current-location" type="button">
          ${state.userLocation ? "현재 위치로 다시 정렬" : "가까운 순으로 보기"}
        </button>
        ${
          state.userLocation
            ? `<button class="secondary-button" data-action="clear-current-location" type="button">방문지 기준으로</button>`
            : ""
        }
      </div>
    </section>
  `;
}

function renderReferences() {
  currentView = { name: "references" };
  const references = places.filter((place) => place.category === "reference");

  app.innerHTML = `
    <button class="plain-button back-button" data-action="back" type="button">← 처음 화면</button>
    <section class="section-head">
      <h2>참고 지점</h2>
      <p class="lead">추천 후보에는 넣지 않고, 필요할 때 주소만 봅니다.</p>
    </section>
    <section class="place-list">${references.map(renderPlaceCard).join("")}</section>
  `;

  bindActions();
}

function renderPlaceCard(place) {
  const hotWarning = !place.indoor && isHotTime();
  const visited = state.visited.includes(place.id);
  return `
    <article class="place-card ${visited ? "visited" : ""}">
      <div class="place-top">
        <div class="place-meta">
          <span class="tag">${place.typeLabel}</span>
          ${subcategoryTag(place)}
          <span class="tag ${place.indoor ? "good" : "hot"}">${place.indoor ? "실내 위주" : "야외 많음"}</span>
          ${distanceTag(place)}
          ${hotWarning ? `<span class="tag hot">지금은 너무 더워요</span>` : ""}
          ${visited ? `<span class="tag good">갔음</span>` : ""}
        </div>
        <h3>${place.name}</h3>
        <p class="description">${place.summary}</p>
      </div>
      ${addressBox(place)}
      <div class="actions">
        <button class="primary-button" data-action="show-detail" data-id="${place.id}" type="button">자세히 보기</button>
        ${
          place.fixed
            ? `<button class="secondary-button" data-action="show-detail" data-id="${place.id}" type="button">주소 크게 보기</button>`
            : visited
            ? `<button class="secondary-button" data-action="unvisit" data-id="${place.id}" type="button">갔음 취소</button>`
            : `<button class="secondary-button" data-action="visit" data-id="${place.id}" type="button">갔다 왔어요</button>`
        }
      </div>
    </article>
  `;
}

function renderDetail(placeId) {
  const place = findPlace(placeId);
  if (!place) {
    renderHome();
    return;
  }

  currentView = { name: "detail", id: place.id };
  const visited = state.visited.includes(place.id);

  app.innerHTML = `
    <button class="plain-button back-button" data-action="back" type="button">← 뒤로</button>
    <article class="panel hero">
      <div class="place-meta">
        <span class="tag">${place.typeLabel}</span>
        <span class="tag ${place.indoor ? "good" : "hot"}">${place.indoor ? "실내 위주" : "야외 많음"}</span>
        ${distanceTag(place)}
        ${!place.indoor && isHotTime() ? `<span class="tag hot">한낮 폭염 주의</span>` : ""}
      </div>
      <div class="hero-copy">
        <h2>${place.name}</h2>
        <p class="lead">${place.summary}</p>
      </div>
      ${addressBox(place)}
      <div class="detail-grid">
        ${detailItem("영업/관람", place.hours)}
        ${detailItem("주차", place.parking)}
        ${detailItem("선택 팁", place.tip)}
      </div>
      <div class="actions">
        ${
          place.fixed
            ? `<button class="secondary-button" data-action="home" type="button">확인했어요</button>`
            : visited
            ? `<button class="secondary-button" data-action="unvisit" data-id="${place.id}" type="button">갔음 취소</button>`
            : `<button class="primary-button" data-action="visit" data-id="${place.id}" type="button">갔다 왔어요</button>`
        }
      </div>
    </article>
  `;

  bindActions();
}

function detailItem(label, text) {
  return `
    <div class="detail-item">
      <p class="detail-label">${label}</p>
      <p class="detail-text">${text}</p>
    </div>
  `;
}

function addressBox(place) {
  return `
    <div class="address-box">
      <p class="address-label">주소</p>
      <p class="address">${place.address}</p>
      <button class="copy-button" data-action="copy-address" data-id="${place.id}" aria-label="${place.name} 주소 복사" type="button">주소 복사</button>
    </div>
  `;
}

function subcategoryTag(place) {
  const label = subcategoryText[place.category]?.[place.subcategory]?.title;
  return label ? `<span class="tag">${label}</span>` : "";
}

function categoryBackLabel(category) {
  if (category === "food") return "밥 먹으러";
  if (category === "cafe") return "카페 가기";
  if (category === "sight") return "구경 가기";
  return "처음 화면";
}

function renderVisitedList() {
  const visited = state.visited.map(findPlace).filter(Boolean);
  if (!visited.length) {
    return `<p class="empty" style="margin-top: 14px;">아직 다녀온 곳이 없어요. 장소를 고른 뒤 "갔다 왔어요"를 누르세요.</p>`;
  }

  return `
    <div class="visited-list" style="margin-top: 14px;">
      ${visited
        .map(
          (place) => `
          <article class="place-card visited">
            <h3>${place.name}</h3>
            <p class="description">${place.typeLabel} · ${place.address}</p>
            <button class="secondary-button" data-action="unvisit" data-id="${place.id}" type="button">갔음 취소</button>
          </article>
        `
        )
        .join("")}
    </div>
  `;
}

function bindActions() {
  app.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", handleAction);
  });
}

function handleAction(event) {
  const target = event.currentTarget;
  const action = target.dataset.action;
  const id = target.dataset.id;
  const category = target.dataset.category;
  const subcategory = target.dataset.subcategory;

  if (action === "home") {
    if (currentView.name === "home") {
      renderHome();
      replaceHistoryEntry();
    } else {
      window.history.back();
    }
  }
  if (action === "back") {
    window.history.back();
  }
  if (action === "show-category") {
    if (category === "cool") {
      renderCategory(category);
    } else {
      renderSubcategories(category);
    }
    pushHistoryEntry();
  }
  if (action === "show-category-list") {
    renderCategory(category, subcategory);
    pushHistoryEntry();
  }
  if (action === "show-detail") {
    renderDetail(id);
    pushHistoryEntry();
  }
  if (action === "show-references") {
    renderReferences();
    pushHistoryEntry();
  }
  if (action === "visit") markVisited(id);
  if (action === "unvisit") unmarkVisited(id);
  if (action === "copy-address") copyAddress(id);
  if (action === "use-current-location") useCurrentLocation();
  if (action === "clear-current-location") clearCurrentLocation();
}

function markVisited(id) {
  if (!id || findPlace(id)?.fixed) return;
  if (!state.visited.includes(id)) {
    state.visited.push(id);
  }
  state.lastPlaceId = id;
  saveState();
  showToast("갔음 처리했어요.");
  renderHome();
  replaceHistoryEntry();
}

function unmarkVisited(id) {
  state.visited = state.visited.filter((visitedId) => visitedId !== id);
  if (state.lastPlaceId === id) {
    state.lastPlaceId = state.visited.at(-1) || null;
  }
  saveState();
  showToast("갔음 처리를 취소했어요.");
  renderHome();
  replaceHistoryEntry();
}

async function copyAddress(id) {
  const place = findPlace(id);
  if (!place) return;

  try {
    await navigator.clipboard.writeText(place.address);
    showToast("주소를 복사했어요.");
  } catch {
    const textarea = document.createElement("textarea");
    textarea.value = place.address;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    const copied = document.execCommand("copy");
    textarea.remove();
    showToast(copied ? "주소를 복사했어요." : "주소를 길게 눌러 복사해 주세요.");
  }
}

function useCurrentLocation() {
  if (!navigator.geolocation) {
    showToast("현재 위치를 사용할 수 없는 브라우저예요.");
    return;
  }

  showToast("현재 위치를 확인하는 중이에요.");
  navigator.geolocation.getCurrentPosition(
    (position) => {
      state.userLocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
      saveState();
      showToast("현재 위치 기준으로 정렬합니다.");
      renderHistoryView(currentView);
      replaceHistoryEntry();
    },
    () => showToast("위치 권한이 없어 마지막 장소 기준으로 보여드릴게요."),
    { enableHighAccuracy: true, timeout: 8000, maximumAge: 300000 }
  );
}

function clearCurrentLocation() {
  state.userLocation = null;
  saveState();
  showToast("마지막 방문지 기준으로 바꿨어요.");
  renderHistoryView(currentView);
  replaceHistoryEntry();
}

function resetTrip() {
  const confirmed = window.confirm("다녀온 기록을 전부 지우고 처음부터 다시 시작할까요?");
  if (!confirmed) return;

  state = { visited: [], lastPlaceId: null, userLocation: null };
  saveState();
  showToast("처음부터 다시 시작합니다.");
  renderHome();
  replaceHistoryEntry();
}

function sortedCandidates(category, subcategory = "all") {
  const candidates = selectablePlaces().filter((place) => {
    if (category === "cool") return place.indoor && !state.visited.includes(place.id);
    if (place.category !== category || state.visited.includes(place.id)) return false;
    return subcategory === "all" || place.subcategory === subcategory;
  });

  return candidates.sort((a, b) => scorePlace(a) - scorePlace(b));
}

function candidateCount(category, subcategory) {
  return sortedCandidates(category, subcategory).length;
}

function scorePlace(place) {
  const basis = getBasisLocation();
  const distance = basis ? distanceKm(basis, place) : 0;
  const heatPenalty = isHotTime() && !place.indoor ? 80 : 0;
  return distance + heatPenalty;
}

function selectablePlaces() {
  return places.filter((place) => !place.fixed && place.category !== "reference");
}

function getBasisLocation() {
  if (state.userLocation) return state.userLocation;
  const lastPlace = findPlace(state.lastPlaceId);
  return lastPlace || findPlace("terminal");
}

function locationLabel() {
  if (state.userLocation) return "지금 내 위치에서 가까운 순이에요.";
  const basis = getBasisLocation();
  if (basis?.id === state.lastPlaceId) return `${basis.name}에서 가까운 순이에요.`;
  if (basis) return `${basis.name} 기준으로 가까운 순이에요.`;
  return "아직 거리 기준이 없어요.";
}

function distanceTag(place) {
  const basis = getBasisLocation();
  if (!basis || basis.id === place.id) return "";
  const km = distanceKm(basis, place);
  return `<span class="tag">${km.toFixed(km < 10 ? 1 : 0)}km</span>`;
}

function distanceKm(a, b) {
  const radius = 6371;
  const dLat = toRad(b.lat - a.lat);
  const dLng = toRad(b.lng - a.lng);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLng / 2) ** 2;
  return 2 * radius * Math.asin(Math.sqrt(h));
}

function toRad(value) {
  return (value * Math.PI) / 180;
}

function isHotTime() {
  const hour = new Date().getHours();
  return hour >= 11 && hour < 16;
}

function findPlace(id) {
  return places.find((place) => place.id === id);
}

function handleBrowserBack(event) {
  renderHistoryView(event.state?.view || { name: "home" });
}

function renderHistoryView(view) {
  if (view.name === "subcategories") {
    renderSubcategories(view.category);
    return;
  }
  if (view.name === "category") {
    renderCategory(view.category, view.subcategory);
    return;
  }
  if (view.name === "detail") {
    renderDetail(view.id);
    return;
  }
  if (view.name === "references") {
    renderReferences();
    return;
  }
  renderHome();
}

function pushHistoryEntry() {
  window.history.pushState({ view: { ...currentView } }, "", window.location.href);
}

function replaceHistoryEntry() {
  window.history.replaceState({ view: { ...currentView } }, "", window.location.href);
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}
