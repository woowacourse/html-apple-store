const ANCHORS = {
  EVENT_APPLICATION: { text: "이벤트 신청하기", href: "#" },
  MORE_DETAIL: { text: "더 알아보기", href: "#" },
  PRICE: { text: "가격 보기", href: "#" },
}

export const mainSectionContents = [
  { 
    title: "매 순간이 하이라이트", 
    subtitle: "새롭게 선보이는 iPhone 13Pro, iPhone 13, Apple Watch Series7 그리고 신형 iPad mini 및 iPad.", 
    anchors: [ANCHORS.EVENT_APPLICATION],
    direction: "bottom",
  },
  { 
    title: "iPhone 13 Pro", 
    subtitle: "비약적으로 강화된 카메라 시스템. ProMotion 기술이 적용된 완전히 새로운 OLED 디스플레이. 스마트폰 사상 가장 빠른 칩. 획기적인 도약을 이뤄낸 배터리 성능", 
    anchors: [ANCHORS.MORE_DETAIL, ANCHORS.PRICE],
    direction: "right",
  },
  { 
    title: "iPhone 13", 
    subtitle: "Apple 사상 가장 앞선 듀얼 카메라 시스템. 더욱 향상된 밝기를 자랑하는 OLED 디스플레이. 타의 추종을 불허하는 전광석화 같은 칩. 획기적인 도약을 이뤄낸 배터리 성능.", 
    anchors: [ANCHORS.MORE_DETAIL, ANCHORS.PRICE],
    direction: "left",
  },
  { 
    title: "WATCH", 
    subtitle: "가장 크고 앞선 상시표시형 Retina 디스플레이. 이제껏 가장 탁월한 내구성을 자랑하는 Apple Watch. 혁신적인 건강 관리 기능. 최대 33% 더 빠른 충전 속도.", 
    anchors: [ANCHORS.MORE_DETAIL, ANCHORS.PRICE],
    direction: "top",
  },
  { 
    title: "iPad mini", 
    subtitle: "강력한 A15 Bionic 칩. 새로운 전면 화면 디자인. 초고속 5G. 센터 스테이지 기술이 적용된 울트라 와이드 전면 카메라. 이제 4가지 아름다운 컬러로.", 
    anchors: [ANCHORS.MORE_DETAIL, ANCHORS.PRICE],
    direction: "left",
  },
  { 
    title: "iPad", 
    subtitle: "첨단 A13 Bionic 칩. True Tone 기술. 센터 스테이지 기술이 적용된 울트라 와이드 전면 카메라. 이제 64GB 저장용량부터 시작", 
    anchors: [ANCHORS.MORE_DETAIL, ANCHORS.PRICE],
    direction: "right",
  },
];