---
title: " "
---

<style>
  /* 1. 시스템 요소 및 미리보기(Popover) 차단 */
  .article-title, .content-meta, .breadcrumb-container { display: none !important; }
  /* 홈 화면에서만 미리보기 창 안 뜨게 하기 */
  .popover { display: none !important; pointer-events: none !important; }

  /* 2. 최근 프로젝트: 반반 세로 레이아웃 (링크 오류 완벽 해결) */
  .recent-header { font-size: 1.2em !important; font-weight: bold; margin-bottom: 10px; color: var(--accent); }
  .recent-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 15px;
    background: #222;
    padding: 15px;
    border-radius: 8px;
    border: 1px solid #444;
  }
  .recent-grid .col ul { list-style: none; padding: 0; margin: 0; }
  .recent-grid .col li { margin-bottom: 5px; font-weight: bold; }

  /* 3. 소형화된 목차 디자인 */
  .custom-toc-box { margin: 20px 0; display: flex; flex-direction: column; gap: 8px; }
  .toc-btn {
    display: inline-block;
    background-color: #2d2d2d;
    color: #58a6ff !important;
    font-size: 0.95em;
    font-weight: bold;
    text-decoration: none !important;
    padding: 8px 15px;
    border-radius: 6px;
    border: 1px solid #444;
    width: fit-content;
  }
  .toc-btn:hover { background-color: #58a6ff; color: #000 !important; }

  /* 4. 표 및 모바일 최적화 (가로폭 확대) */
  .callout-title { font-size: 1.3em !important; font-weight: bold !important; cursor: pointer; }
  table { width: 100% !important; border-collapse: collapse; margin: 10px 0; }
  td { padding: 12px 8px !important; border: 1px solid #333 !important; vertical-align: middle; }
  
  /* 모바일 화면에서 표가 꽉 차게 보이도록 설정 */
  @media (max-width: 600px) {
    .callout { padding: 10px 5px !important; }
    table { font-size: 0.85em !important; }
    td { padding: 8px 4px !important; }
    .recent-grid { grid-template-columns: 1fr; } /* 모바일에서는 최근글 한 줄로 정렬 */
  }

  /* 5. 링크 스타일링 (없는 문서는 알아서 회색 처리) */
  a.internal.new { 
    color: #888888 !important; 
    pointer-events: none !important; 
    text-decoration: none !important; 
    font-style: italic;
    opacity: 0.6;
  }
  a.internal { color: #58a6ff !important; font-weight: bold; }
  a.internal:hover { text-decoration: underline; color: #f1e05a !important; }
</style>

# 철학 세미나

<div class="recent-header">🌟 최근 프로젝트</div>

<div class="recent-grid">
  <div class="col">

  - [[앙리 베르그송]]
  - [[들뢰즈]]

  </div>
  <div class="col">

  - [[바슐라르]]
  - [[리오타르]]

  </div>
</div>

<div class="custom-toc-box">
  <a href="#1-역사적-철학사" class="toc-btn">1. 역사적 철학사</a>
  <a href="#2-계보학적-철학사" class="toc-btn">2. 계보학적 철학사</a>
  <a href="#3-미학적-철학사" class="toc-btn">3. 미학적 철학사</a>
</div>

---

# 1. 역사적 철학사

> [!abstract] 🏛️ 고대 철학
> 
> | 구분 | 학파 및 주요 철학자 |
> | :--- | :--- |
> | **핵심** | **[[소크라테스]]** · **[[플라톤]]** · **[[아리스토텔레스]]** |
> | **기타** | 탈레스 · 아낙시만드로스 · 파르메니데스 · 헤라클레이토스 · 데모크리토스 · 프로타고라스 · 제논 · 에피쿠로스 · 세네카 · 아우렐리우스 · 플로티누스 |

> [!abstract] ⛪ 중세 철학
> 
> | 구분 | 학파 및 주요 철학자 |
> | :--- | :--- |
> | **핵심** | 아우구스티누스 · 토마스 아퀴나스 · 보에티우스 · 안셀무스 · 아벨라르 · 스코투스 · 오컴 · 에크하르트 |

> [!abstract] ⚙️ 근대 철학
> 
> | 구분 | 학파 및 주요 철학자 |
> | :--- | :--- |
> | **관념론** | **[[피히테]]** · **[[셸링]]** · **[[헤겔]]** · 칸트 |
> | **사회/비합리** | **[[마르크스]]** · **[[쇼펜하우어]]** · **[[니체]]** · 데카르트 · 스피노자 · 로크 · 흄 · 루소 |

> [!abstract] 💡 현대 철학
> 
> | 분야 | 주요 철학자 명단 (보유 문서는 굵게 표시) |
> | :--- | :--- |
> | **현상/생/인간** | 브렌타노 · **[[후설]]** · **[[하이데거]]** · 슈타인 · 코제브 · 레비나스 · **[[앙리 베르그송]]** · 딜타이 · 셸러 · 부버 · 겔렌 |
> | **실존/해석학** | 우나무노 · **[[사르트르]]** · 보부아르 · 메를로-퐁티 · 시오랑 · 카뮈 · 야스퍼스 · 마르셀 · 가다머 · 리쾨르 · 블루멘베르크 |
> | **마르크스주의** | 레닌 · 루카치 · 그람시 · 마오쩌둥 · **[[알튀세르]]** · 발리바르 · 랑시에르 · 네그리 · 엘스터 · 이글턴 · **[[바디우]]** |
> | **비판/구조** | 호르크하이머 · 아도르노 · 벤야민 · 마르쿠제 · 프롬 · 하버마스 · 호네트 · **[[소쉬르]]** · 라캉 · **[[레비스트로스]]** · **[[푸코]]** |
> | **포스트/실재** | **[[리오타르]]** · **[[들뢰즈]]** · **[[데리다]]** · 에코 · 아감벤 · 버틀러 · **[[지젝]]** · 해러웨이 · 라투르 · 메이야수 · 가브리엘 |
> | **분석/과학/정치** | 러셀 · 비트겐슈타인 · 콰인 · 크립키 · 설 · 포퍼 · 쿤 · **[[바슐라르]]** · 키틀러 · 롤스 · 노직 · 샌델 · 아렌트 · 싱어 |

---

# 2. 계보학적 철학사
*(내용을 입력하세요)*

---

# 3. 미학적 철학사
*(내용을 입력하세요)*
