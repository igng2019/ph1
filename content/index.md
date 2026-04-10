<style>
  :root { 
    --bg: #1a1a1a; --border: #444; --header-bg: #000; --cat-bg: #373a3c; 
    --link: #58a6ff; --accent: #f1e05a; --disabled: #777;
  }
  
  /* 최근 프로젝트 섹션 */
  .recent-projects { background: #222; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid var(--border); }
  .recent-title { font-size: 1.2em; color: var(--accent); margin-bottom: 15px; font-weight: bold; border-left: 4px solid var(--accent); padding-left: 10px; }
  .recent-list { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .recent-item { background: #2d2d2d; padding: 10px; border-radius: 4px; border: 1px solid var(--border); }

  /* 수동 목차(TOC) 디자인 */
  .custom-toc { background: #1e1e1e; padding: 20px; border-radius: 8px; border: 1px solid var(--border); margin-bottom: 40px; }
  .custom-toc p { font-size: 1.2em; font-weight: bold; color: #fff; margin-top: 0; margin-bottom: 10px; border-bottom: 1px solid var(--border); padding-bottom: 10px; }
  .custom-toc ul { list-style: none; padding-left: 0; margin: 0; }
  .custom-toc li { margin-bottom: 10px; font-size: 1.1em; }
  .custom-toc a { color: var(--link); text-decoration: none; font-weight: bold; transition: 0.2s; }
  .custom-toc a:hover { color: var(--accent); }

  /* 대형 메뉴 디자인 (크기 한 단계 축소) */
  .big-menu { font-size: 1.8em !important; font-weight: 900 !important; margin-top: 60px !important; margin-bottom: 20px !important; display: block; border-bottom: 3px solid var(--border); padding-bottom: 10px; scroll-margin-top: 80px; }
  
  /* 표 디자인 */
  .table-container { background-color: var(--bg); color: #eee; font-family: 'Malgun Gothic', sans-serif; padding: 15px; font-size: 13px; max-width: 1000px; margin: 20px 0; border: 1px solid var(--border); }
  .main-title { background: var(--header-bg); color: #fff; text-align: center; padding: 15px; font-size: 1.5em; font-weight: bold; border-bottom: 2px solid var(--border); }
  .tabs { display: flex; background: #222; margin: 0; padding: 0; }
  .tab-btn { flex: 1; padding: 12px; text-align: center; cursor: pointer; color: #aaa; border-right: 1px solid var(--border); font-weight: bold; transition: 0.3s; margin: 0; }
  .tab-btn:hover { background: #333; color: #fff; }
  .tab-btn.active { color: var(--accent); background: #2d2d2d; border-bottom: 3px solid var(--accent); }
  table.wiki-table { width: 100%; border-collapse: collapse; display: none; margin: 0; }
  table.wiki-table.active { display: table; }
  th { background: var(--header-bg); color: #fff; padding: 10px; font-size: 1.1em; border: 1px solid var(--border); }
  td { border: 1px solid var(--border); padding: 8px 12px; }
  .cat { background: var(--cat-bg); width: 140px; text-align: center; font-weight: bold; color: #fff; }
  .content { line-height: 1.8; }
  .highlight-row { background: #2d2d2d; text-align: center; font-weight: bold; color: var(--link); }
  .sub-label { font-weight: bold; color: var(--accent); font-size: 0.9em; margin-right: 5px; }
  .table-container a.internal { color: var(--link); text-decoration: none; }
  .table-container a.internal:hover { color: var(--accent); text-decoration: underline; }
  .table-container a.internal.new { color: var(--disabled); pointer-events: none; font-style: italic; }
  .sep { color: #666; margin: 0 4px; }
</style>

# 철학 세미나 도서관

<div class="recent-projects">
  <div class="recent-title">최근 프로젝트</div>
  <div class="recent-list">
    <div class="recent-item">[[최근문서1]]</div>
    <div class="recent-item">[[최근문서2]]</div>
    <div class="recent-item">[[최근문서3]]</div>
    <div class="recent-item">[[최근문서4]]</div>
  </div>
</div>

<div class="custom-toc">
  <p>📚 목차</p>
  <ul>
    <li><a href="#section-1">1. 철학사</a></li>
    <li><a href="#section-2">2. 미학사</a></li>
    <li><a href="#section-3">3. 계보학</a></li>
  </ul>
</div>

<h1 id="section-1" class="big-menu">1. 철학사</h1>

<div class="table-container">
    <div class="main-title">서양 철학사 통합 인덱스</div>
    
    <div class="tabs">
        <div class="tab-btn active" onclick="openTab(event, 'ancient')">고대</div>
        <div class="tab-btn" onclick="openTab(event, 'medieval')">중세</div>
        <div class="tab-btn" onclick="openTab(event, 'modern')">근대</div>
        <div class="tab-btn" onclick="openTab(event, 'contemporary')">현대</div>
    </div>

    <table id="ancient" class="wiki-table active">
        <tr><th colspan="2">소크라테스 이전 철학</th></tr>
        <tr><td class="cat">밀레투스학파</td><td class="content">[[탈레스]]<span class="sep">·</span>[[아낙시만드로스]]<span class="sep">·</span>[[아낙시메네스]]<span class="sep">·</span>[[헤라클레이토스]]</td></tr>
        <tr><td class="cat">피타고라스학파</td><td class="content">[[피타고라스]]<span class="sep">·</span>[[필롤라오스]]</td></tr>
        <tr><td class="cat">엘레아학파</td><td class="content">[[크세노파네스]]<span class="sep">·</span>[[파르메니데스]]<span class="sep">·</span>[[제논]]<span class="sep">·</span>[[멜리소스]]</td></tr>
        <tr><td class="cat">다원론/원자론</td><td class="content">[[엠페도클레스]]<span class="sep">·</span>[[아낙사고라스]]<span class="sep">·</span>[[레우키포스]]<span class="sep">·</span>[[데모크리토스]]</td></tr>
        <tr><th colspan="2">아테네 철학</th></tr>
        <tr><td class="cat">소피스트</td><td class="content">[[프로타고라스]]<span class="sep">·</span>[[고르기아스]]<span class="sep">·</span>[[히피아스]]<span class="sep">·</span>[[프로디코스]]<span class="sep">·</span>[[트라시마코스]]<span class="sep">·</span>[[안티폰]]</td></tr>
        <tr><td colspan="2" class="highlight-row">[[소크라테스]]<span class="sep">·</span>[[플라톤]]<span class="sep">·</span>[[아리스토텔레스]]</td></tr>
    </table>

    <table id="medieval" class="wiki-table">
        <tr><th colspan="2">교부 철학</th></tr>
        <tr><td class="cat">학파별</td><td class="content"><span class="sub-label">알렉산드리아:</span>[[클레멘스]]<span class="sep">·</span>[[오리게네스]]<span class="sep">·</span><span class="sub-label">라틴:</span>[[암브로시우스]]<span class="sep">·</span>[[보에티우스]]</td></tr>
        <tr><td colspan="2" class="highlight-row">[[아우구스티누스]]</td></tr>
        <tr><th colspan="2">스콜라 철학</th></tr>
        <tr><td class="cat">초기/이슬람/유대</td><td class="content">[[안셀무스]]<span class="sep">·</span>[[아벨라르]]<span class="sep">·</span>[[이븐 시나]]<span class="sep">·</span>[[이븐 루시드]]<span class="sep">·</span>[[마이모니데스]]</td></tr>
        <tr><td colspan="2" class="highlight-row">[[토마스 아퀴나스]]</td></tr>
        <tr><td class="cat">후기 스콜라</td><td class="content">[[둔스 스코투스]]<span class="sep">·</span>[[오컴]]<span class="sep">·</span>[[마이스터 에크하르트]]<span class="sep">·</span>[[쿠자누스]]</td></tr>
    </table>

    <table id="modern" class="wiki-table">
        <tr><th colspan="2">16-18세기</th></tr>
        <tr><td class="cat">르네상스/합리</td><td class="content">[[마키아벨리]]<span class="sep">·</span>[[몽테뉴]]<span class="sep">·</span>[[데카르트]]<span class="sep">·</span>[[스피노자]]<span class="sep">·</span>[[라이프니츠]]</td></tr>
        <tr><td class="cat">경험/계몽</td><td class="content">[[베이컨]]<span class="sep">·</span>[[홉스]]<span class="sep">·</span>[[로크]]<span class="sep">·</span>[[흄]]<span class="sep">·</span>[[루소]]<span class="sep">·</span>[[애덤 스미스]]</td></tr>
        <tr><td colspan="2" class="highlight-row">[[임마누엘 칸트]]</td></tr>
        <tr><th colspan="2">19세기</th></tr>
        <tr><td class="cat">독일 관념론</td><td class="content">[[피히테]]<span class="sep">·</span>[[셸링]]<span class="sep">·</span><span class="sub-label">헤겔:</span>[[헤겔]]<span class="sep">·</span>[[포이어바흐]]</td></tr>
        <tr><td class="cat">공리/실증/사회</td><td class="content">[[벤담]]<span class="sep">·</span>[[존 스튜어트 밀]]<span class="sep">·</span>[[오귀스트 콩트]]<span class="sep">·</span>[[막스 베버]]<span class="sep">·</span>[[마르크스]]<span class="sep">·</span>[[엥겔스]]</td></tr>
        <tr><td class="cat">비합리주의</td><td class="content">[[키르케고르]]<span class="sep">·</span>[[쇼펜하우어]]<span class="sep">·</span>[[니체]]</td></tr>
    </table>

    <table id="contemporary" class="wiki-table">
        <tr><th colspan="2">현대 대륙 철학</th></tr>
        <tr><td class="cat">현상학/생철학</td><td class="content">[[후설]]<span class="sep">·</span>[[하이데거]]<span class="sep">·</span>[[베르그송]]<span class="sep">·</span>[[레비나스]]<span class="sep">·</span>[[폴 리쾨르]]</td></tr>
        <tr><td class="cat">실존/해석학</td><td class="content">[[사르트르]]<span class="sep">·</span>[[보부아르]]<span class="sep">·</span>[[메를로-퐁티]]<span class="sep">·</span>[[알베르 카뮈]]<span class="sep">·</span>[[가다머]]</td></tr>
        <tr><td class="cat">마르크스주의</td><td class="content"><span class="sub-label">레닌주의:</span>[[레닌]]<span class="sep">·</span>[[루카치]]<span class="sep">·</span>[[그람시]]<span class="sep">·</span><span class="sub-label">서구:</span>[[에른스트 블로흐]]<span class="sep">·</span>[[기 드보르]]<span class="sep">·</span><span class="sub-label">구조:</span>[[알튀세르]]<span class="sep">·</span><span class="sub-label">분석:</span>[[엘스터]]<span class="sep">·</span>[[코헨]]</td></tr>
        <tr><td class="cat">비판이론</td><td class="content"><span class="sub-label">1세대:</span>[[호르크하이머]]<span class="sep">·</span>[[아도르노]]<span class="sep">·</span>[[발터 벤야민]]<span class="sep">·</span><span class="sub-label">2세대:</span>[[하버마스]]<span class="sep">·</span><span class="sub-label">3세대:</span>[[호네트]]</td></tr>
        <tr><td class="cat">구조/포스트</td><td class="content">[[소쉬르]]<span class="sep">·</span>[[라캉]]<span class="sep">·</span>[[레비스트로스]]<span class="sep">·</span>[[푸코]]<span class="sep">·</span>[[들뢰즈]]<span class="sep">·</span>[[가타리]]<span class="sep">·</span>[[데리다]]<span class="sep">·</span>[[지젝]]</td></tr>
        <tr><th colspan="2">현대 분석 철학 / 과학 / 정치</th></tr>
        <tr><td class="cat">수학/언어/심리</td><td class="content">[[프레게]]<span class="sep">·</span>[[러셀]]<span class="sep">·</span>[[비트겐슈타인]]<span class="sep">·</span>[[콰인]]<span class="sep">·</span>[[크립키]]<span class="sep">·</span>[[설]]<span class="sep">·</span>[[차머스]]</td></tr>
        <tr><td class="cat">과학/기술/매체</td><td class="content">[[포퍼]]<span class="sep">·</span>[[쿤]]<span class="sep">·</span>[[라카토슈]]<span class="sep">·</span>[[매클루언]]<span class="sep">·</span>[[키틀러]]</td></tr>
        <tr><td class="cat">정치/윤리/법</td><td class="content">[[하이에크]]<span class="sep">·</span>[[롤스]]<span class="sep">·</span>[[노직]]<span class="sep">·</span>[[아렌트]]<span class="sep">·</span>[[매킨타이어]]<span class="sep">·</span>[[샌델]]<span class="sep">·</span>[[싱어]]</td></tr>
    </table>
</div>

<script>
    function openTab(evt, tabId) {
        var tables = document.querySelectorAll("table.wiki-table");
        tables.forEach(function(table) {
            table.classList.remove("active");
            table.style.display = "none";
        });
        var tablinks = document.querySelectorAll(".tab-btn");
        tablinks.forEach(function(btn) {
            btn.classList.remove("active");
        });
        document.getElementById(tabId).classList.add("active");
        document.getElementById(tabId).style.display = "table";
        evt.currentTarget.classList.add("active");
    }
</script>

<br><br>

<h1 id="section-2" class="big-menu">2. 미학사</h1>
*(여기에 미학사 내용을 채워주세요)*

<br><br>

<h1 id="section-3" class="big-menu">3. 계보학</h1>
*(여기에 계보학 내용을 채워주세요)*
