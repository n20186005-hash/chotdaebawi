// 专题页内容（四语）。slug 必须在四种语言间保持一致，路由据此生成页面。
export interface TopicContent {
  title: string;
  description: string;
  intro: string;
  sections: { heading: string; body: string }[];
  faq: { q: string; a: string }[];
}

export const topics: Record<string, Record<string, TopicContent>> = {
  ko: {
    sunrise: {
      title: '추암 촛대바위 일출 시간 및 촬영 명소',
      description:
        '추암 촛대바위 일출 명소 가이드. 내일 일출 시간 확인, 추천 도착 시각, 동쪽 해면 조망 포인트, 악천후 대체 코스와 촬영 팁을 정리했습니다.',
      intro:
        '추암 촛대바위는 강원도 동해시를 대표하는 해맞이(해돋이) 명소입니다. 정동(正東) 해면을 향해 솟은 바위와 외로운 소나무가 새해 첫 햇살을 맞이하는 풍경은 수많은 방문객이 찾는 이유입니다. 아래는 날짜별 일출 시간 확인법, 추천 도착 시각, 조망 포인트와 악천후 대체 코스입니다.',
      sections: [
        {
          heading: '내일 일출 시간 확인과 추천 도착 시각',
          body: '동해시 추암의 일출 시간은 계절에 따라 크게 달라집니다. 동짓무렵(12월 말)은 약 07:30, 하지 무렵(6월 말)은 약 05:10 전후입니다. 정확한 내일 일출 시각은 기상청 또는 Open-Meteo 등에서 위도·경도(약 37.479°N, 129.160°E) 기준으로 확인하세요. 붉은 빛이 뜨기 직전의 부드러운 새벽빛을 함께 담으려면 일출 약 40분 전, 즉 새벽 4~7시 무렵 해안 도착을 권장합니다.',
        },
        {
          heading: '추천 조망 포인트',
          body: '해변 산책로: 촛대바위와 외로운 소나무를 가장 가까이서 정면으로 조망합니다. 추암출렁다리: 다리 위에서 촛대바위·할머니바위·동해를 한 프레임에 담을 수 있는 높은 앵글입니다. 할머니바위 전망대: 건너편에서 촛대바위와 일출을 함께 담합니다.',
        },
        {
          heading: '악천후 대체 코스',
          body: '비·안개·강풍이 심하면 안전한 실내 방문지를 고려하세요. 출렁다리도 기상에 따라 통제될 수 있으므로 방문 전 현장 안내와 날씨를 확인하세요.',
        },
      ],
      faq: [
        {
          q: '추암 촛대바위 일출은 언제 가장 좋나요?',
          a: '새해 첫날(1월 1일) 해맞이가 가장 붐비지만, 평소에도 맑은 겨울·초봄 아침이 시야가 탁 트여 좋습니다. 여름은 이른 시간대라 더위 부담도 적습니다.',
        },
        {
          q: '주차는 어떻게 하나요?',
          a: '해안 공영 주차장(추암해수욕장 공영 주차장, 추암출렁다리 주차장)이 도보권입니다. 공영 유료, 성수기·주말 만차 잦음—일찍 또는 대중교통을 이용하세요. 자세한 요금·노선은 주차장·가는 길 가이드를 참고하세요.',
        },
        {
          q: '입장료가 있나요?',
          a: '촛대바위 해안 관람은 무료·연중 개방입니다. 다만 추암출렁다리와 추암해수욕장은 별도 관리 시간이 있을 수 있으니 현장 안내를 확인하세요.',
        },
      ],
    },
    'parking-directions': {
      title: '추암 촛대바위 주차장 및 가는 길 안내',
      description:
        '추암 촛대바위 주차장·대중교통 안내. 동해역·추암역에서의 버스·택시, 네비게이션 목적지, 자차 주차 요금과 만차 대응을 정리했습니다.',
      intro:
        '추암 촛대바위는 강원특별자치도 동해시 촛대바위길 28에 있습니다. 안내 주소(촛대바위길 28)는 추암출렁다리·공영주차장 입구 권역을 가리킵니다. 자차·대중교통 모두 이용 가능하며, 성수기에는 만차가 잦으니 교통편을 미리 확인하세요.',
      sections: [
        {
          heading: '자차 이용과 주차',
          body: '한국관광공사는 추암해변 촛대바위길 26 입구에 장애인 주차장을 안내합니다. 촛대바위·출렁다리 권역의 안내 주소 28과 구분하세요. 요금과 빈자리는 현장 표지, 충전소는 출발 전 별도로 확인하세요.',
        },
        {
          heading: '대중교통: 동해역·추암역',
          body: '동해역(강릉선·영동선)에서 시내버스 또는 택시로 환승합니다. 추암역(동해선)은 촛대바위와 가장 가까운 역으로, 하차 후 관암 산책로까지 도보 약 5분입니다. 서울·강릉·원주 등지에서 고속·시외버스로 동해시외버스터미널 근처까지 올 수도 있습니다.',
        },
        {
          heading: '네비게이션 목적지 설정',
          body: "내비게이션 목적지는 '추암 촛대바위' 또는 주소 '강원특별자치도 동해시 촛대바위길 28'로 설정하세요. 해안 도로는 골목과 일방통행이 섞여 있으니 주변 공영 주차장 안내를 따르세요.",
        },
      ],
      faq: [
        {
          q: '동해역에서 추암 촛대바위까지 어떻게 가나요?',
          a: '동해역에서 시내버스(추암 방면) 또는 택시로 환승합니다. 거리는 약 5~7km, 택시로 10~15분 내외입니다.',
        },
        {
          q: '주차 요금은 얼마인가요?',
          a: '요금과 이용 조건은 현장 표지를 확인하세요.',
        },
        {
          q: '가장 가까운 역은?',
          a: '추암역(동해선)이 가장 가깝고, 하차 후 관암 산책로까지 도보 약 5분입니다.',
        },
      ],
    },
    'chuam-beach': {
      title: '추암해변 (추암해수욕장) 안내',
      description:
        '추암해변(추암해수욕장) 가이드. 촛대바위가 있는 북단 해변, 여름 성수기, 무료 공공 해안, 주차와 연계 동선을 정리했습니다.',
      intro:
        '추암해변(추암해수욕장)은 촛대바위가 있는 강원도 동해시의 공공 해변입니다. 해변 북단에 촛대바위와 할머니바위가 있어 해수욕과 일출·기암 감상이 한곳에서 어우러집니다. 아래는 이용 시기와 주의사항, 촛대바위와의 연계 동선입니다.',
      sections: [
        {
          heading: '이용 시기와 성수기',
          body: '추암해수욕장은 여름(대개 7~8월)에 본격적으로 해수욕장으로 운영되며, 그 외 기간에는 조용한 공공 해안 산책로로 이용됩니다. 해수욕 시즌 외에도 해변 산책과 일출 감상은 자유롭습니다. 성수기에는 샤워·편의시설과 안전 요원이 배치되나 혼잡하니 이른 시간을 권장합니다.',
        },
        {
          heading: '촛대바위와의 연계 동선',
          body: '해변 북단을 따라 관암 산책로를 걸으면 촛대바위와 외로운 소나무를 정면에서 조망합니다. 해변—출렁다리—할머니바위 전망대를 잇는 약 30분~1시간 산책이 추암의 핵심 코스입니다. 해수욕 후 해변 산책로로 이어지므로 가족·친구 동선으로 좋습니다.',
        },
        {
          heading: '주의사항',
          body: '공공 해안이므로 취사·노상 불피우기·야영은 금지되며, 해변과 기암 주변 암초 구간은 미끄럼과 파도에 주의하세요. 쓰레기는 되가져가는 저영향 관광을 지켜주세요.',
        },
      ],
      faq: [
        {
          q: '추암해변은 언제 가면 좋나요?',
          a: '여름 해수욕 성수기(7~8월)가 가장 활기찹니다. 일출과 기암 감상은 계절과 무관하게 가능하며, 한적한 산책을 원하면 비수기를 추천합니다.',
        },
        {
          q: '입장료가 있나요?',
          a: '추암해변 공공 해안 구간은 무료입니다. 다만 성수기 편의시설 이용이나 주차는 별도 요금이 있을 수 있습니다.',
        },
        {
          q: '촛대바위까지 어떻게 가나요?',
          a: '해변 북단 관암 산책로를 따라 도보로 바로 갈 수 있으며, 추암출렁다리·할머니바위 전망대와 함께 둘러볼 수 있습니다.',
        },
      ],
    },
    'chuam-suspension-bridge': {
      title: '추암출렁다리 (해상 출렁다리) 안내',
      description:
        '추암출렁다리(해상 출렁다리) 가이드. 2019년 설치, 길이 약 72m, 무료·운영 시간·날씨 제한, 촛대바위 조망 앵글과 주의사항을 정리했습니다.',
      intro:
        "추암출렁다리(출렁다리)는 2019년 6월 해상에 설치된 길이 약 72m의 보행 교량입니다. 촛대바위·할머니바위·해안 산책로를 한 동선으로 잇는 동해의 대표적인 새 랜드마크로, '다리 위에서 바위 보기' 앵글을 완성합니다.",
      sections: [
        {
          heading: '개요와 무료 이용',
          body: '추암출렁다리는 2019년 6월에 설치되었으며, 보행 전용·무료로 이용할 수 있습니다. 파도를 타며 가볍게 흔들리는 해상 산책로에서 촛대바위와 탁 트인 동해를 내려다볼 수 있습니다.',
        },
        {
          heading: '운영 시간과 날씨 제한',
          body: '출렁다리는 바람·파도·기상 상황에 따라 운영이 제한될 수 있습니다. 악천후(강풍·폭우·태풍 등)에는 통제될 수 있으니 현장 안내와 기상 정보를 사전 확인하세요. 성수기에는 대기와 혼잡이 생기므로 이른 시간 방문을 권장합니다.',
        },
        {
          heading: '주의사항',
          body: '다리가 약간 흔들리므로 잡고 천천히 걷고, 뛰거나 흔드는 행동은 삼가세요. 아동·노약자는 동반자의 손을 잡고 이용하세요. 해상 난간 너머로 기대거나 몸을 숙이는 행동은 위험합니다.',
        },
      ],
      faq: [
        {
          q: '추암출렁다리는 언제 생겼나요?',
          a: '2019년 6월에 해상에 설치되었습니다. (과거 일부 자료에서 2024년으로 잘못 소개된 적이 있으나, 한국관광공사 등 공식 자료는 2019년 설치입니다.)',
        },
        {
          q: '이용료가 있나요?',
          a: '추암출렁다리는 무료 보행 교량입니다.',
        },
        {
          q: '운영 시간이 정해져 있나요?',
          a: '공공 교량이나 기상(강풍·폭우 등)에 따라 통제될 수 있습니다. 방문 전 현장 안내와 기상 정보를 확인하세요.',
        },
      ],
    },
    'nearby-itinerary': {
      "title": "추암 촛대바위 주변 명소 · 반나절 도보 코스",
      "description": "추암 촛대바위에서 북평해암정, 추암출렁다리, 추암조각공원과 추암해변을 잇는 반나절 여행 동선과 방문 팁.",
      "intro": "여러 지역을 무리하게 하루에 묶기보다, 촛대바위 주변에서 실제로 연결되는 바다·역사·산책 공간을 차례로 둘러보는 반나절 코스입니다. 각 장소는 서로 다른 명소이며 현장 표지에 따라 이동합니다.",
      "sections": [
        {
          "heading": "1. 촛대바위 해안 전망 지점",
          "body": "먼저 해변 북쪽의 안전한 전망 지점에서 촛대바위와 주변 기암을 감상합니다. 일출 촬영이 목적이면 당일 동해시 일출 시각을 확인하고 여유 있게 도착하세요. 바위 자체에 접근하거나 젖은 암초로 내려가지 마세요."
        },
        {
          "heading": "2. 북평해암정: 바다 옆 역사 정자",
          "body": "전망 지점에서 이어지는 동선을 따라 북평해암정(海巖亭)을 둘러봅니다. 한국관광공사 관광 자료에는 1361년 건립, 1790년경 중수한 정자로 소개되어 있습니다. 정자는 촛대바위의 별명이 아닌 별도의 역사 유산입니다."
        },
        {
          "heading": "3. 해상 출렁다리와 추암조각공원",
          "body": "이어서 추암출렁다리에서 동해 바다와 해안 지형을 다른 각도로 봅니다. 다리는 2019년 6월 조성된 약 72m 보행 교량이며 한국관광공사에 기재된 일반 안내 시간은 09:00~20:00입니다. 출렁다리 끝 구간에서 추암조각공원으로 이동할 수 있으나 강풍·악천후 시 통제에 따르세요."
        },
        {
          "heading": "4. 추암해변에서 마무리",
          "body": "마지막은 추암해변의 모래사장과 해안 풍경입니다. 여름 수영 구역 운영과 무관하게 산책에 적합한 해변이며, 공공 해안은 상시 개방으로 안내됩니다. 여행 마무리 때는 귀가 교통편과 주차 위치를 재확인하세요."
        }
      ],
      "faq": [
        {
          "q": "도보로 묶기 좋은 명소는?",
          "a": "촛대바위 전망 지점, 북평해암정, 출렁다리, 추암조각공원, 추암해변이 같은 해안권에 있어 현장 연결 산책로를 따라 둘러볼 수 있습니다."
        },
        {
          "q": "출렁다리를 일출 직후에도 걸을 수 있나요?",
          "a": "일반 안내 시간은 09:00~20:00로 게시되어 있으므로 이른 일출 시간에는 다리가 열려 있다고 가정하지 마세요."
        },
        {
          "q": "해암정과 할머니바위가 같은 곳인가요?",
          "a": "아닙니다. 북평해암정은 역사 정자이고, 할머니바위는 주변 바위와 관련된 지명·전설입니다."
        }
      ]
    },
  },
  en: {
    sunrise: {
      title: 'Chuam Chotdaebawi Rock — Sunrise Time & Photo Spots',
      description:
        'A guide to sunrise at Chuam Chotdaebawi Rock: how to check tomorrow’s sunrise, suggested arrival time, east-sea viewpoints, bad-weather alternatives and photography tips.',
      intro:
        'Chuam Chotdaebawi Rock is one of Donghae’s most famous sunrise (해맞이) spots. Facing the open east sea, the pillar and its lone pine meeting the first light of the new year is why so many visitors come. Below: how to check the date-specific sunrise, when to arrive, where to view, and what to do in bad weather.',
      sections: [
        {
          heading: 'Checking tomorrow’s sunrise & when to arrive',
          body: 'Sunrise at Chuam varies a lot by season — around 07:30 near the winter solstice (late December) and about 05:10 near the summer solstice (late June). Check the exact time for tomorrow using a weather service with the local coordinates (about 37.479°N, 129.160°E). To catch the soft pre-dawn glow before the reddest light, aim to be on the coast about 40 minutes before sunrise — roughly between 04:00 and 07:00.',
        },
        {
          heading: 'Recommended viewpoints',
          body: 'Shore boardwalk: view the candle rock and lone pine head-on, up close. Chuam Suspension Bridge: a raised angle framing the rock, Grandmother Rock and the East Sea together. Grandmother Rock observatory: across the water, frame both the rock and the sunrise.',
        },
        {
          heading: 'Bad-weather alternatives',
          body: 'In rain, fog or strong wind, consider a safe indoor stop. The bridge can also close due to weather; check conditions and local notices before visiting.',
        },
      ],
      faq: [
        {
          q: 'When is the best time for sunrise at Chuam?',
          a: 'New Year’s Day (Jan 1) is the most crowded. Clear winter and early-spring mornings have the clearest views; summer starts early so there’s less heat.',
        },
        {
          q: 'Where do I park?',
          a: 'Public parking (Chuam Beach / Chuam Bridge lots) is within walking distance; paid, and often full on peak weekends — arrive early or use transit. See the Parking & directions guide for rates and routes.',
        },
        {
          q: 'Is there an entrance fee?',
          a: 'Viewing the rock from the public coast is free and open year-round. The bridge and beach may have separate managed hours — check on-site notices.',
        },
      ],
    },
    'parking-directions': {
      title: 'Chuam Chotdaebawi Rock — Parking & Directions',
      description:
        'How to get to Chuam Chotdaebawi Rock: public parking, buses and taxis from Donghae Station and Chuam Station, navigation destinations, and what to do when lots are full.',
      intro:
        'Chuam Chotdaebawi Rock is at 28 Chotdaebawi-gil, Donghae-si, Gangwon-do. The guide address (28 Chotdaebawi-gil) points to the bridge and public-parking entrance area. Reachable by car or transit; lots fill up in peak season, so plan ahead.',
      sections: [
        {
          heading: 'By car & parking',
          body: 'VisitKorea lists accessible parking at the entrance to Chuam Beach, 26 Chotdaebawi-gil; distinguish it from the rock and bridge area at 28. Check parking signs for rates and availability and confirm charging separately before travel.',
        },
        {
          heading: 'Transit: Donghae Station & Chuam Station',
          body: 'From Donghae Station (Gangneung/Yeongdong lines) transfer to a local bus or taxi. Chuam Station (Donghae Line) is closest to the rock — about a 5-minute walk to the viewing boardwalk after alighting. Express/city buses from Seoul, Gangneung and Wonju also reach near the Donghae bus terminal.',
        },
        {
          heading: 'Navigation destination',
          body: "Set your navigation to '추암 촛대바위' (Chuam Chotdaebawi Rock) or the address '28 Chotdaebawi-gil, Donghae-si, Gangwon-do'. Coastal roads mix alleys and one-ways; follow the public-parking signs.",
        },
      ],
      faq: [
        {
          q: 'How do I get from Donghae Station to the rock?',
          a: 'Transfer to a local bus (Chuam direction) or a taxi. It’s about 5–7 km, roughly 10–15 minutes by taxi.',
        },
        {
          q: 'What are the parking fees?',
          a: 'Check the posted rates and conditions on arrival.',
        },
        {
          q: 'Which station is closest?',
          a: 'Chuam Station (Donghae Line) is closest — about a 5-minute walk to the viewing boardwalk.',
        },
      ],
    },
    'chuam-beach': {
      title: 'Chuam Beach (추암해수욕장) Guide',
      description:
        'Chuam Beach (추암해수욕장) guide: the public beach where Chotdaebawi Rock sits, summer season, free public coast, parking and how to combine it with the rock.',
      intro:
        'Chuam Beach (추암해수욕장) is the public beach in Donghae-si where Chotdaebawi Rock stands. The rock and Grandmother Rock at the north end combine sea bathing with sunrise and sea-stack viewing in one place. Below: timing, cautions, and how to combine it with the rock.',
      sections: [
        {
          heading: 'Season & peak period',
          body: 'Chuam Beach operates as a full swimming beach mainly in summer (typically July–August); outside that window it’s a quiet public shore for walking. Sunrise viewing and the sea-stack walk are free year-round. In peak season showers, facilities and lifeguards are on duty, but it gets crowded — go early.',
        },
        {
          heading: 'Combining with Chotdaebawi Rock',
          body: 'Follow the viewing boardwalk north along the beach to see the candle rock and lone pine head-on. The beach–bridge–Grandmother Rock observatory loop of about 30 min–1 hr is Chuam’s core route; it connects naturally after swimming, good for families and friends.',
        },
        {
          heading: 'Cautions',
          body: 'As a public coast, cooking, open fires and camping are prohibited; watch for slippery rocks and waves around the sea-stack. Follow low-impact tourism and take your trash with you.',
        },
      ],
      faq: [
        {
          q: 'When should I visit Chuam Beach?',
          a: 'Summer swimming season (Jul–Aug) is liveliest. Sunrise and sea-stack viewing are possible any season; for a quiet walk choose the off-season.',
        },
        {
          q: 'Is there an entrance fee?',
          a: 'The public coast is free. Peak-season facilities or parking may cost extra.',
        },
        {
          q: 'How do I reach the rock from the beach?',
          a: 'Walk north along the viewing boardwalk — you reach the rock directly, and can continue to the bridge and Grandmother Rock observatory.',
        },
      ],
    },
    'chuam-suspension-bridge': {
      title: 'Chuam Suspension Bridge (해상 출렁다리) Guide',
      description:
        'Chuam Suspension Bridge (해상 출렁다리) guide: installed June 2019, about 72 m long, free, operating limits in bad weather, rock-viewing angles and cautions.',
      intro:
        "The Chuam Suspension Bridge (출렁다리) is a ~72 m pedestrian bridge installed over the sea in June 2019. It links the candle rock, Grandmother Rock and the coastal trail into one walk, and is Donghae’s signature recent landmark — completing the 'view the rock from the bridge' angle.",
      sections: [
        {
          heading: 'Overview & free access',
          body: 'Installed in June 2019, the bridge is a pedestrian-only, free crossing. From the gently swaying sea trail you look down on Chotdaebawi and the open East Sea.',
        },
        {
          heading: 'Operating hours & weather limits',
          body: 'The bridge may be restricted by wind, waves and weather; it can be closed in severe conditions (strong wind, heavy rain, typhoons) — check on-site notices and the forecast beforehand. Peak season brings queues, so arrive early.',
        },
        {
          heading: 'Cautions',
          body: 'The bridge sways slightly — hold on and walk slowly; don’t run or shake it. Children and the elderly should hold a companion’s hand. Never lean over or climb the railings.',
        },
      ],
      faq: [
        {
          q: 'When was the bridge built?',
          a: 'It was installed over the sea in June 2019. (Some older sources mistakenly said 2024; official tourism data, including VisitKorea, give 2019.)',
        },
        {
          q: 'Is there a fee?',
          a: 'The Chuam Suspension Bridge is a free pedestrian bridge.',
        },
        {
          q: 'Does it have fixed hours?',
          a: 'It’s a public bridge but can be closed in bad weather (strong wind, heavy rain). Check on-site notices and the forecast before visiting.',
        },
      ],
    },
    'nearby-itinerary': {
      "title": "Chuam Chotdaebawi: Nearby Sights & Half-Day Walk",
      "description": "A practical half-day coastal route linking Chotdaebawi Rock, Bukpyeong Haeamjeong Pavilion, Chuam Suspension Bridge, the sculpture park and Chuam Beach.",
      "intro": "This half-day walk keeps to the connected Chuam coast rather than treating distant towns as nearby stops. It links distinct sea viewpoints, a historic pavilion, a bridge and the beach.",
      "sections": [
        {
          "heading": "1. Start at the rock viewpoint",
          "body": "Begin at the safe viewing area near the north end of Chuam Beach. For sunrise photography, check the date-specific sunrise time in Donghae and arrive ahead of first light. Stay away from wet rocks, cliff edges and restricted coastal sections."
        },
        {
          "heading": "2. Visit historic Bukpyeong Haeamjeong",
          "body": "Continue towards Bukpyeong Haeamjeong Pavilion beside the coast. VISITKOREA describes a pavilion first established in 1361 and rebuilt around 1790. It is a separate historic pavilion, not another name for the rock or a character in the rock's legend."
        },
        {
          "heading": "3. Walk the suspension bridge and sculpture park",
          "body": "Chuam Suspension Bridge is an approximately 72-metre ocean walkway installed in June 2019. The Korean tourism listing gives regular ocean-trail hours as 09:00–20:00, so do not assume access during dawn. The route connects towards Chuam Sculpture Park; temporary closures can apply in strong winds or high surf."
        },
        {
          "heading": "4. Finish by Chuam Beach",
          "body": "Return to the sand and sheltered areas of Chuam Beach for a relaxed coastal stroll. The public beach is described as open year-round, while swimming services operate seasonally. Before leaving, check your transport departure and the location of your parking area."
        }
      ],
      "faq": [
        {
          "q": "Which nearby sights fit together on foot?",
          "a": "The rock viewpoint, Haeamjeong Pavilion, Chuam Suspension Bridge, Chuam Sculpture Park and Chuam Beach share the local coastal area and can form a connected visit."
        },
        {
          "q": "Can I use the bridge at sunrise?",
          "a": "The usual ocean-trail hours are published as 09:00–20:00; early-morning access is not guaranteed and weather closures are possible."
        },
        {
          "q": "Is Haeamjeong Pavilion the same as Grandmother Rock?",
          "a": "No. Haeamjeong is a historic pavilion. Grandmother Rock is a separate nearby rock name associated with local legends."
        }
      ]
    },
  },
  zh: {
    sunrise: {
      title: '楚岩燭台岩日出時間與攝影名勝',
      description:
        '楚岩燭台岩日出名勝指南：明日日出時間查詢、建議抵達時刻、朝東海面觀景點、惡劣天氣替代路線與攝影建議。',
      intro:
        '楚岩燭台岩是東海市最具代表性的日出（해맞이）名勝。朝正東海面矗立的岩柱與孤松迎接新年第一道曙光，正是無數遊客前來的原因。以下說明如何依日期查日出、何時抵達、哪裡觀景，以及天氣不佳時如何安排。',
      sections: [
        {
          heading: '查詢明日日出與建議抵達',
          body: '楚岩日出隨季節差異很大：冬至前後（12月底）約 07:30，夏至前後（6月底）約 05:10。請以當地座標（約 37.479°N, 129.160°E）經氣象服務查詢明日確切時間。想在一天中最紅的光芒升起前捕捉柔和晨曦，建議比日出提前約 40 分鐘、約清晨 4~7 點抵達海岸。',
        },
        {
          heading: '推薦觀景點',
          body: '海濱步道：最近距離正面觀賞燭台岩與孤松。楚岩吊橋：居高臨下，將岩體、望夫岩與東海收進同一框。望夫岩展望台：隔海同時框入岩體與日出。',
        },
        {
          heading: '惡劣天氣替代路線',
          body: '雨、霧或強風時可考慮安全的室內行程。吊橋也可能因天氣關閉，前往前請確認天氣與現場公告。',
        },
      ],
      faq: [
        {
          q: '楚岩燭台岩日出什麼時候最好？',
          a: '元旦（1/1）新年日出最擁擠；晴朗的冬季與初春清晨視野最通透；夏季時段早，也較不炎熱。',
        },
        {
          q: '停車怎麼辦？',
          a: '海濱公共停車場（楚岩海水浴場、楚岩吊橋停車場）步行可達，收費且旺季週末常客滿，請早到或搭大眾運輸。收費與路線見「停車場·交通」指南。',
        },
        {
          q: '需要門票嗎？',
          a: '海濱公共海岸觀賞岩體免費、全年開放。吊橋與海水浴場可能有各自管理時間，請以現場公告為準。',
        },
      ],
    },
    'parking-directions': {
      title: '楚岩燭台岩停車場與交通指南',
      description:
        '前往楚岩燭台岩：公共停車場、東海站與楚岩站的巴士與計程車、導航目的地，以及客滿時的對應方式。',
      intro:
        '楚岩燭台岩位於江原道東海市燭台岩路 28 號。導覽地址（촛대바위길 28）對應吊橋與公共停車場入口一帶。無論自駕或大眾運輸皆可抵達；旺季常客滿，請提前確認。',
      sections: [
        {
          heading: '自駕與停車',
          body: '韓國觀光公社記載楚岩海邊燭台岩路 26 號入口設有無障礙停車位，請與岩石及吊橋區域的 28 號區分。費率和空位請看現場告示，充電地點請另行確認。',
        },
        {
          heading: '大眾運輸：東海站·楚岩站',
          body: '東海站（江陵線·嶺東線）可轉乘市內巴士或計程車。楚岩站（東海線）離岩體最近，下車後步行約 5 分鐘即達觀岩步道。首爾、江陵、原州等地也有高速·市外巴士抵達東海市外巴士客運站附近。',
        },
        {
          heading: '導航目的地設定',
          body: "導航請設為「추암 촛대바위」（楚岩燭台岩）或地址「강원특별자치도 동해시 촛대바위길 28」。海岸道路巷弄與單行道交錯，請依公共停車場指示。",
        },
      ],
      faq: [
        {
          q: '從東海站怎麼到燭台岩？',
          a: '於東海站轉乘楚岩方向市內巴士或計程車。距離約 5~7 公里，計程車約 10~15 分鐘。',
        },
        {
          q: '停車費多少？',
          a: '請以現場告示確認費率及使用條件。',
        },
        {
          q: '最近車站是？',
          a: '楚岩站（東海線）最近，下車後步行約 5 分鐘即達觀岩步道。',
        },
      ],
    },
    'chuam-beach': {
      title: '楚岩海灘（추암해수욕장）指南',
      description:
        '楚岩海灘（추암해수욕장）指南：燭台岩所在的北端海灘、夏季旺季、免費公共海岸、停車與岩體串聯動線。',
      intro:
        '楚岩海灘（추암해수욕장）是燭台岩所在的東海市公共海灘。北端坐落燭台岩與望夫岩，戲水、日出與奇岩觀賞在同一處交融。以下說明適宜時節、注意事項，以及與岩體的串聯動線。',
      sections: [
        {
          heading: '適宜時節與旺季',
          body: '楚岩海水浴場主要於夏季（通常 7~8 月）正式作為海水浴場營運；其餘期間是寧靜的公共海岸步道。日出與奇岩散步全年免費開放。旺季有淋浴·便民設施與救生員，但擁擠，建議早到。',
        },
        {
          heading: '與燭台岩串聯',
          body: '沿海濱北端觀岩步道步行，可正面近距離觀賞燭台岩與孤松。海灘—吊橋—望夫岩展望台約 30 分~1 小時的散步，是楚岩核心路線；戲水後順勢接步道，適合親子與朋友同行。',
        },
        {
          heading: '注意事項',
          body: '公共海岸禁止炊事、路邊生火與露營；奇岩周邊礁石濕滑、留意海浪。請落實低衝擊旅遊，垃圾自行帶走。',
        },
      ],
      faq: [
        {
          q: '楚岩海灘何時去最好？',
          a: '夏季戲水旺季（7~8 月）最熱鬧。日出與奇岩觀賞不受季節限制；想安靜散步可選淡季。',
        },
        {
          q: '需要門票嗎？',
          a: '公共海岸免費。旺季便民設施或停車可能另收費。',
        },
        {
          q: '從海灘怎麼到燭台岩？',
          a: '沿北端觀岩步道步行即可直達，還可續往吊橋與望夫岩展望台。',
        },
      ],
    },
    'chuam-suspension-bridge': {
      title: '楚岩吊橋（해상 출렁다리）指南',
      description:
        '楚岩吊橋（해상 출렁다리）指南：2019 年 6 月設立、長約 72 公尺、免費、惡劣天氣營運限制、觀岩視角與注意事項。',
      intro:
        '楚岩吊橋（출렁다리）是 2019 年 6 月架設於海上的長約 72 公尺人行橋。它把燭台岩、望夫岩與海岸步道串成同一段動線，是東海近年的招牌新地標，也補齊了「登橋看岩」的視角。',
      sections: [
        {
          heading: '概況與免費開放',
          body: '2019 年 6 月設立，為人行專用、免費通行的橋梁。在隨波輕晃的海上步道上，可俯瞰燭台岩與開闊的東海。',
        },
        {
          heading: '營運時間與天氣限制',
          body: '吊橋可能因風、浪與天氣狀況限制通行；惡劣天氣（強風、暴雨、颱風等）可能封橋，請事前查看現場公告與天氣預報。旺季會排隊，建議早到。',
        },
        {
          heading: '注意事項',
          body: '橋面會輕微晃動，請扶好慢行，勿奔跑或摇晃。兒童與長者請牽伴同行。切勿倚靠或翻越海側欄杆。',
        },
      ],
      faq: [
        {
          q: '楚岩吊橋何時興建？',
          a: '2019 年 6 月架設於海上。（部分舊資料誤寫為 2024 年；韓國觀光公社等官方資料為 2019 年。）',
        },
        {
          q: '需要費用嗎？',
          a: '楚岩吊橋為免費人行橋。',
        },
        {
          q: '有固定營運時間嗎？',
          a: '屬公共橋梁，但惡劣天氣（強風、暴雨）可能封橋，請事前查看現場公告與天氣預報。',
        },
      ],
    },
    'nearby-itinerary': {
      "title": "湫岩燭臺岩周邊景點與半日海岸步行路線",
      "description": "串聯燭臺岩、北坪海岩亭、湫岩吊橋、雕塑公園及湫岩海灘的半日觀光路線與交通提醒。",
      "intro": "這條半日路線集中在湫岩海岸相互連通的景點，不把遠方城市的景點混充為步行可達。可依天候和實際開放情況調整順序。",
      "sections": [
        {
          "heading": "1. 從燭臺岩觀景處開始",
          "body": "在湫岩海灘北側安全觀景區欣賞海上岩柱與周圍奇岩。若要拍攝日出，先查詢東海市當天日出時刻並提早抵達；切勿走上濕滑礁石或越過管制線。"
        },
        {
          "heading": "2. 北坪海岩亭的歷史",
          "body": "沿海岸遊步道前往北坪海岩亭（북평해암정）。韓國觀光公社資料記載該亭建於1361年、約在1790年重修。海岩亭是一座獨立的歷史亭閣，並非燭臺岩或傳說中人物的別名。"
        },
        {
          "heading": "3. 吊橋與雕塑公園",
          "body": "湫岩海上吊橋長約72公尺，於2019年6月設置。韓國觀光公社公布海岸步道／吊橋的一般時間為09:00–20:00，日出時不應預設能上橋。沿線可接續湫岩雕塑公園，遇強風或巨浪須遵守封閉公告。"
        },
        {
          "heading": "4. 在湫岩海灘結束行程",
          "body": "沿沙灘與公共海岸慢慢散步，再回到停車或交通接駁點。海灘全年開放，但夏季戲水服務、救生設施和其他附屬設備有自己的運作季節。"
        }
      ],
      "faq": [
        {
          "q": "哪些周邊景點適合一起步行遊覽？",
          "a": "燭臺岩觀景處、北坪海岩亭、湫岩吊橋、湫岩雕塑公園和海灘位於同一海岸遊覽區，可依現場步道連續參觀。"
        },
        {
          "q": "日出後就能走吊橋嗎？",
          "a": "一般公布時間為09:00–20:00，不能假定清晨日出時一定開放；天候不佳也可能暫停通行。"
        },
        {
          "q": "海岩亭和奶奶岩是同一個景點嗎？",
          "a": "不是。海岩亭是歷史亭閣，奶奶岩是附近與地方傳說相關的岩石名稱。"
        }
      ]
    },
  },
  ja: {
    sunrise: {
      title: '楚岩燭台岩の日の出時間と撮影スポット',
      description:
        '楚岩燭台岩の日の出ガイド：明日の日の出確認、おすすめ到着時刻、東向き海面の展望ポイント、悪天候時の代替コースと撮影のヒント。',
      intro:
        '楚岩燭台岩は東海市を代表する日の出（해맞이）名所です。正東の海面に立つ岩柱と孤松が新年の第一光を迎える風景が、多くの来訪者の理由です。以下は日付ごとの日の出確認、いつ到着するか、どこから見るか、悪天候時の対応です。',
      sections: [
        {
          heading: '明日の日の出確認とおすすめ到着',
          body: '楚岩の日の出は季節で大きく変わり、冬至付近（12月末）は約07:30、夏至付近（6月末）は約05:10前後です。正確な明日の時刻は、気象サービスで当地の緯度・経度（約37.479°N, 129.160°E）を基準に確認してください。いちばん赤い光が昇る直前のやわらかな朝焼けを捉えるには、日の出の約40分前、明け方4〜7時ごろの海岸到着をおすすめします。',
        },
        {
          heading: 'おすすめ展望ポイント',
          body: '海岸遊歩道：燭台岩と孤松を正面から近くで望みます。楚岩吊橋：高いアングルで岩・望夫岩・東海を1フレームに。望夫岩展望台：隔海で岩と日の出を一緒に収めます。',
        },
        {
          heading: '悪天候時の代替コース',
          body: '雨・霧・強風の際は安全な屋内の立ち寄り先を検討してください。吊橋も天候により閉鎖される場合があるため、訪問前に天気と現地案内を確認してください。',
        },
      ],
      faq: [
        {
          q: '楚岩燭台岩の日の出はいつがベスト？',
          a: '元旦（1/1）の初日の出がいちばん混みます。晴れた冬・早春の朝が視界が開け良く、夏は時間が早く暑さの負担も少ないです。',
        },
        {
          q: '駐車はどうすれば？',
          a: '海浜公共駐車場（楚岩海水浴場・楚岩吊橋）が徒歩圏。有料で週末のピークは満車必至—早めか公共交通を。料金・経路は「駐車場・アクセス」ガイドを参照。',
        },
        {
          q: '入場料は？',
          a: '海浜公共海岸からの観岩は無料・年間開放。吊橋と海水浴場は別管理時間の場合があり、現場案内を確認してください。',
        },
      ],
    },
    'parking-directions': {
      title: '楚岩燭台岩の駐車場・アクセス',
      description:
        '楚岩燭台岩への行き方：公共駐車場、東海駅・楚岩駅からのバス・タクシー、ナビ目的地、満車時の対応。',
      intro:
        '楚岩燭台岩は江原道東海市蝋燭岩路28番地にあります。案内住所（蝋燭岩路28）は吊橋・公共駐車場の入口付近を指します。車でも公共交通でも可、ピーク時は満車がちなので事前確認を。',
      sections: [
        {
          heading: '車・駐車',
          body: '韓国観光公社は楚岩海辺の촛대바위길 26入口に障害者用駐車場を案内しています。岩・吊橋周辺の28番地と区別してください。料金・空きは現地掲示、充電場所は出発前に別途確認してください。',
        },
        {
          heading: '公共交通：東海駅・楚岩駅',
          body: '東海駅（江陵線・嶺東線）から市内バスまたはタクシーに乗り継ぎます。楚岩駅（東海線）が岩体に最も近く、下車後展望遊歩道まで徒歩約5分です。ソウル・江陵・原州などから高速・市外バスで東海バスターミナル近くへも。',
        },
        {
          heading: 'ナビ目的地',
          body: "ナビは「추암 촛대바위」（楚岩燭台岩）または住所「강원특별자치도 동해시 촛대바위길 28」に設定。海岸道路は路地と一方通行が混在、公共駐車場の案内に従って。",
        },
      ],
      faq: [
        {
          q: '東海駅から燭台岩までどう行く？',
          a: '東海駅で楚岩方面の市内バスまたはタクシーに乗り継ぎ。距離約5〜7km、タクシーで約10〜15分。',
        },
        {
          q: '駐車料金は？',
          a: '料金と利用条件は現地の掲示をご確認ください。',
        },
        {
          q: 'いちばん近い駅は？',
          a: '楚岩駅（東海線）が最寄り、下車後展望遊歩道まで徒歩約5分。',
        },
      ],
    },
    'chuam-beach': {
      title: '楚岩ビーチ（추암해수욕장）ガイド',
      description:
        '楚岩ビーチ（추암해수욕장）ガイド：燭台岩のある北端ビーチ、夏のシーズン、無料公共海岸、駐車と岩体との連携動線。',
      intro:
        '楚岩ビーチ（추암해수욕장）は燭台岩のある東海市の公共ビーチです。北端に燭台岩と望夫岩があり、海水浴と日の出・奇岩観賞が一か所で融け合います。以下は時期と注意、岩体との連携動線です。',
      sections: [
        {
          heading: '時期とピーク',
          body: '楚岩海水浴場は夏（概ね7〜8月）に本格的に海水浴場として営業、それ以外は静かな公共海岸遊歩道として利用されます。海水浴シーズン外でも海岸散策と日の出観賞は自由。ピーク時はシャワー・便益施設と監視員が配置されますが混雑するので早めを。',
        },
        {
          heading: '燭台岩との連携',
          body: '海浜北端の展望遊歩道を歩くと燭台岩と孤松を正面から望みます。ビーチ—吊橋—望夫岩展望台をつなぐ約30分〜1時間の散策が楚岩の核心ルート。海水浴後そのまま遊歩道へつながり、家族・友人の動線に良いです。',
        },
        {
          heading: '注意',
          body: '公共海岸のため炊事・路肩火気・キャンプは禁止、奇岩周辺の岩礁は滑りや波に注意。低影響観光を守り、ゴミは持ち帰りを。',
        },
      ],
      faq: [
        {
          q: '楚岩ビーチはいつが良い？',
          a: '夏の海水浴シーズン（7〜8月）が最も賑わう。日の出と奇岩観賞は季節を問わず可能、静かな散策ならオフシーズンを。',
        },
        {
          q: '入場料は？',
          a: '公共海岸は無料。ピーク時の便益施設や駐車は別料金の場合あり。',
        },
        {
          q: 'ビーチから燭台岩までどう行く？',
          a: '北端展望遊歩道を歩けばすぐ到達、吊橋・望夫岩展望台も一緒に巡れます。',
        },
      ],
    },
    'chuam-suspension-bridge': {
      title: '楚岩吊橋（해상 출렁다리）ガイド',
      description:
        '楚岩吊橋（해상 출렁다리）ガイド：2019年6月設置、全長約72m、無料、悪天候時の運営制限、観岩アングルと注意。',
      intro:
        '楚岩吊橋（출렁다리）は2019年6月に海上に架けられた全長約72mの人道橋です。燭台岩・望夫岩・海岸歩道を同一動線に繋ぎ、東海の近年を代表する新ランドマークとなり、「橋の上から岩を見る」アングルを完成させました。',
      sections: [
        {
          heading: '概要と無料開放',
          body: '2019年6月に設置され、歩行者専用・無料で利用できます。波に揺れる海上歩道から燭台岩と開けた東海を望めます。',
        },
        {
          heading: '運営時間と天候制限',
          body: '吊橋は風・波・天候で通行制限される場合があり、悪天候（強風・豪雨・台風など）で閉鎖されることも。現場案内と天気予報を事前確認を。ピーク時は待ちができるので早めを。',
        },
        {
          heading: '注意',
          body: '橋は軽く揺れるので掴まってゆっくり歩き、走ったり揺さぶったりしないで。子供・高齢者は同伴者の手を握る。海側手すりにもたれたり乗り出したりしないよう。',
        },
      ],
      faq: [
        {
          q: '楚岩吊橋はいつ造られた？',
          a: '2019年6月に海上に設置されました。（一部旧資料で2024年と誤記されましたが、韓国観光公社などの公式資料は2019年です。）',
        },
        {
          q: '料金は？',
          a: '楚岩吊橋は無料の人道橋です。',
        },
        {
          q: '決まった運営時間は？',
          a: '公共橋梁ですが悪天候（強風・豪雨）で閉鎖される場合があり、現場案内と天気予報を確認を。',
        },
      ],
    },
    'nearby-itinerary': {
      "title": "楚岩燭台岩周辺の見どころ・半日散策ルート",
      "description": "燭台岩、北坪海岩亭、楚岩吊橋、彫刻公園、楚岩ビーチをつなぐ半日海岸コースと訪問のポイント。",
      "intro": "この半日コースは楚岩の海岸に集中し、遠くの市街地を「徒歩圏」として混ぜない実用的な周遊案です。天候や施設の開放状況に応じて順序を変えてください。",
      "sections": [
        {
          "heading": "1. 燭台岩の展望地点から出発",
          "body": "楚岩ビーチ北側の安全な展望場所から岩柱と周囲の奇岩を眺めます。日の出を狙う場合は東海市の当日の日の出時刻を確認し、余裕をもって到着を。濡れた岩場や立入禁止区域には近づかないでください。"
        },
        {
          "heading": "2. 北坪海岩亭の歴史を知る",
          "body": "海岸遊歩道をたどり北坪海岩亭（북평해암정）へ。韓国観光公社の案内では1361年創建、1790年頃改修の歴史的な亭閣です。燭台岩や伝説に登場する岩の別名ではありません。"
        },
        {
          "heading": "3. 海上吊橋と彫刻公園",
          "body": "2019年6月設置の楚岩吊橋は全長約72m。韓国観光公社掲載の海岸遊歩道・吊橋の通常利用時間は09:00–20:00で、日の出時から入れるとは限りません。周辺の楚岩彫刻公園へつながりますが、強風・高波時には通行規制に従ってください。"
        },
        {
          "heading": "4. 楚岩ビーチで締めくくる",
          "body": "砂浜と公共海岸でゆっくり過ごし、駐車場所や帰りの交通を確認します。海岸は通年開放と案内されていますが、遊泳サービスと関連設備には別途運営期間があります。"
        }
      ],
      "faq": [
        {
          "q": "徒歩で組み合わせやすい周辺スポットは？",
          "a": "燭台岩の展望場所、北坪海岩亭、楚岩吊橋、楚岩彫刻公園、楚岩ビーチは同じ海岸エリアにあり、現地の遊歩道に沿って巡れます。"
        },
        {
          "q": "日の出直後に吊橋を渡れますか？",
          "a": "通常の掲載時間は09:00–20:00です。早朝の入場を前提にせず、天候による閉鎖にも注意してください。"
        },
        {
          "q": "海岩亭はおばあさん岩と同じですか？",
          "a": "違います。海岩亭は歴史的な亭閣で、おばあさん岩は付近の岩や伝説に結びつく別の名称です。"
        }
      ]
    },
  },
};
