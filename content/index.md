<style>
  :root { 
    --bg: #1a1a1a; --border: #444; --header-bg: #000; --cat-bg: #373a3c; 
    --link: #58a6ff; --accent: #f1e05a; --disabled: #777;
  }
  
  /* 최근 프로젝트 섹션 */
  .recent-projects { background: #222; padding: 20px; border-radius: 8px; margin-bottom: 40px; border: 1px solid var(--border); }
  .recent-title { font-size: 1.2em; color: var(--accent); margin-bottom: 15px; font-weight: bold; border-left: 4px solid var(--accent); padding-left: 10px; }
  .recent-list { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .recent-item { background: #2d2d2d; padding: 10px; border-radius: 4px; border: 1px solid var(--border); }

  /* 대형 메뉴 디자인 */
  .big-menu { font-size: 2.5em !important; font-weight: 900 !important; margin-top: 50px !important; margin-bottom: 20px !important; display: block; border-bottom: 3px solid var(--border); padding-bottom: 10px; }
  .big-menu a { color: #fff !important; text-decoration: none; transition: 0.3s; }
  .big-menu a:hover { color: var(--accent) !important; padding-left: 10px; }

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

<span class="big-menu">[[1. 철학사]]</span>

<div class="table-container">
    <div class="main-title">서양 철학사 통합 인덱스</div>
    <div class="tabs">
        <div class="tab-btn active" onclick="openTab(event, 'ancient')">고대</div>
        <div class="tab-btn" onclick="openTab(event, 'medieval')">중세</div>
        <div class="tab-btn" onclick="openTab(event, 'modern')">근대</div>
        <div class="tab-btn" onclick="openTab(event, 'contemporary')">현대</div>
    </div>
    <table id="ancient" class="wiki-table active">
        <tr><th colspan="2">소크라테스 이전 및 아테네 철학</th></tr>
        <tr><td class="cat">밀레투스/엘레아</td><td class="content">[[탈레스]]<span class="sep">·</span>[[파르메니데스]]<span class="sep">·</span>[[헤라클레이토스]]</td></tr>
        <tr><td colspan="2" class="highlight-row">[[소크라테스]]<span class="sep">·</span>[[플라톤]]<span class="sep">·</span>[[아리스토텔레스]]</td></tr>
    </table>
    <table id="medieval" class="wiki-table">
        <tr><th colspan="2">중세 철학</th></tr>
        <tr><td class="cat">스콜라</td><td class="content">[[안셀무스]]<span class="sep">·</span>[[아벨라르]]<span class="sep">·</span>[[오컴]]</td></tr>
        <tr><td colspan="2" class="highlight-row">[[아우구스티누스]]<span class="sep">·</span>[[토마스 아퀴나스]]</td></tr>
    </table>
    <table id="modern" class="wiki-table">
        <tr><th colspan="2">근대 철학</th></tr>
        <tr><td class="cat">합리/경험론</td><td class="content">[[데카르트]]<span class="sep">·</span>[[스피노자]]<span class="sep">·</span>[[로크]]<span class="sep">·</span>[[흄]]</td></tr>
        <tr><td colspan="2" class="highlight-row">[[임마누엘 칸트]]<span class="sep">·</span>[[헤겔]]</td></tr>
    </table>
    <table id="contemporary" class="wiki-table">
        <tr><th colspan="2">현대 철학</th></tr>
        <tr><td class="cat">현상학/구조주의</td><td class="content">[[후설]]<span class="sep">·</span>[[하이데거]]<span class="sep">·</span>[[푸코]]<span class="sep">·</span>[[들뢰즈]]</td></tr>
        <tr><td colspan="2" class="highlight-row">[[비트겐슈타인]]<span class="sep">·</span>[[데리다]]<span class="sep">·</span>[[라캉]]</td></tr>
    </table>
</div>

<span class="big-menu">[[2. 미학사]]</span>

<span class="big-menu">[[3. 계보학]]</span>

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
