<style>
  :root { --border: #444; --link: #58a6ff; --accent: #f1e05a; }
  
  /* 대문 거슬리는 요소 숨김 */
  .article-title, .content-meta, .breadcrumb-container { display: none !important; }

  /* 최근 프로젝트 */
  .recent-projects { background: #222; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid var(--border); }
  .recent-title { font-size: 1.2em; color: var(--accent); margin-bottom: 15px; font-weight: bold; border-left: 4px solid var(--accent); padding-left: 10px; }
  .recent-list { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; }
  .recent-item { background: #2d2d2d; padding: 10px; border-radius: 4px; border: 1px solid var(--border); }

  /* 목차 (회색화 방지 절대 규칙 적용) */
  .custom-toc { background: #1e1e1e; padding: 20px; border-radius: 8px; border: 1px solid var(--border); margin-bottom: 40px; }
  .custom-toc p { font-size: 1.2em; font-weight: bold; color: #fff; margin-top: 0; margin-bottom: 10px; border-bottom: 1px solid var(--border); padding-bottom: 10px; }
  .custom-toc ul { list-style: none; padding-left: 0; margin: 0; }
  .custom-toc li { margin-bottom: 10px; font-size: 1.1em; }
  .custom-toc a { color: var(--link) !important; text-decoration: none !important; pointer-events: auto !important; font-style: normal !important; font-weight: bold; }
  .custom-toc a:hover { color: var(--accent) !important; }

  /* 나무위키 스타일 표 컨테이너 */
  .namu-container { border: 1px solid var(--border); font-size: 13px; line-height: 1.5; margin-bottom: 30px; }
  .namu-header { background: #000; color: #fff; text-align: center; padding: 10px; font-weight: bold; font-size: 1.3em; border-bottom: 1px solid var(--border); }
  .namu-tabs { display: flex; background: #1f2023; border-bottom: 1px solid var(--border); }
  .namu-tab { flex: 1; padding: 10px; text-align: center; cursor: pointer; color: #ccc; background: #2c2c2c; border: 1px solid #545454; font-weight: bold; transition: 0.2s; }
  .namu-tab.active { color: #ff0; background: #545454; }
  
  /* 표 본체 디자인 */
  .namu-table { width: 100%; border-collapse: collapse; display: none; background: transparent; }
  .namu-table.active { display: table; }
  .namu-table th { background: #000; color: #fff; padding: 8px; border: 1px solid var(--border); text-align: center; }
  .namu-table td.cat { background: #545454; color: #fff; width: 22%; text-align: center; font-weight: bold; border: 1px solid var(--border); padding: 6px; }
  .namu-table td.items { border: 1px solid var(--border); padding: 6px 10px; color: #ddd; }
  .namu-table td.highlight { background: #2f2f2f; text-align: center; font-weight: bold; border: 1px solid var(--border); padding: 8px; }
  .sub-txt { font-size: 0.85em; color: #aaa; margin-right: 4px; font-weight: bold; }
  
  /* 표 내부의 위키링크 회색화 마법 (목차에는 영향 안 줌) */
  .namu-table a.internal { color: var(--link); text-decoration: none; }
  .namu-table a.internal:hover { text-decoration: underline; }
  .namu-table a.internal.new { color: #777; pointer-events: none; font-style: italic; }

  /* 본문 제목 */
  .big-title { font-size: 2em; font-weight: 900; margin-top: 60px; margin-bottom: 20px; border-bottom: 3px solid var(--border); padding-bottom: 10px; scroll-margin-top: 80px; }
</style>

<div class="recent-projects">
  <div class="recent-title">최근 프로젝트</div>
  <div class="recent-list">
    <div class="recent-item">[[앙리 베르그송]]</div>
    <div class="recent-item">[[들뢰즈]]</div>
    <div class="recent-item">[[바슐라르]]</div>
    <div class="recent-item">[[리오타르]]</div>
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

<h1 id="section-1" class="big-title">1. 철학사</h1>

<div class="namu-container">
    <div class="namu-header">서양 철학사 통합 인덱스</div>
    
    <div class="namu-tabs">
        <div class="namu-tab active" onclick="showNamuTab(event, 'tab-ancient')">고대 철학</div>
        <div class="namu-tab" onclick="showNamuTab(event, 'tab-medieval')">중세 철학</div>
        <div class="namu-tab" onclick="showNamuTab(event, 'tab-modern')">근대 철학</div>
        <div class="namu-tab" onclick="showNamuTab(event, 'tab-contemporary')">현대 철학</div>
    </div>

    <table id="tab-ancient" class="namu-table active">
        <tr><th colspan="2">소크라테스 이전 철학</th></tr>
        <tr><td class="cat">밀레투스학파</td><td class="items">[[탈레스]] · [[아낙시만드로스]] · [[아낙시메네스]] · [[헤라클레이토스]]</td></tr>
        <tr><td class="cat">피타고라스학파</td><td class="items">[[피타고라스]] · [[필롤라오스]]</td></tr>
        <tr><td class="cat">엘레아학파</td><td class="items">[[크세노파네스]] · [[파르메니데스]] · [[엘레아의 제논|제논]] · [[멜리소스]]</td></tr>
        <tr><td class="cat">다원론</td><td class="items">[[엠페도클레스]] · [[아낙사고라스]]</td></tr>
        <tr><td class="cat">원자론</td><td class="items">[[레우키포스]] · [[데모크리토스]]</td></tr>
        <tr><th colspan="2">아테네 철학</th></tr>
        <tr><td class="cat">소피스트</td><td class="items">[[프로타고라스]] · [[고르기아스]] · [[히피아스]] · [[프로디코스]] · [[트라시마코스]] · [[칼리클레스]] · [[안티폰]]</td></tr>
        <tr><td colspan="2" class="highlight">[[소크라테스]] · [[플라톤]] · [[아리스토텔레스]]</td></tr>
        <tr><th colspan="2">헬레니즘·로마 철학</th></tr>
        <tr><td class="cat">키니코스학파</td><td class="items">[[안티스테네스]] · [[디오게네스]]</td></tr>
        <tr><td class="cat">스토아학파</td><td class="items">[[키티온의 제논|제논]] · [[클레안테스]] · [[크리시포스]] · [[루키우스 안나이우스 세네카|세네카]] · [[에픽테토스]] · [[마르쿠스 아우렐리우스|아우렐리우스]] <span class="sub-txt">/ 절충론:</span> [[마르쿠스 툴리우스 키케로|키케로]]</td></tr>
        <tr><td class="cat">에피쿠로스학파</td><td class="items">[[에피쿠로스]] · [[루크레티우스]]</td></tr>
        <tr><td class="cat">회의주의</td><td class="items">[[피론]] · [[아이네시데모스]] · [[섹스투스 엠피리쿠스|엠피리쿠스]]</td></tr>
        <tr><td class="cat">신플라톤주의</td><td class="items">[[플로티누스]] · [[포르피리오스]] · [[이암블리코스]] · [[프로클로스]]</td></tr>
        <tr><td class="cat">기타 학파</td><td class="items">[[아카데미아학파]] · [[키레네 학파|키레네학파]] · [[메가라학파]]</td></tr>
    </table>

    <table id="tab-medieval" class="namu-table">
        <tr><th colspan="2">교부 철학</th></tr>
        <tr><td class="cat">알렉산드리아학파</td><td class="items">[[알렉산드리아의 클레멘스|클레멘스]] · [[오리게네스]]</td></tr>
        <tr><td class="cat">아프리카 교부</td><td class="items">[[테르툴리아누스]]</td></tr>
        <tr><td class="cat">라틴 교부</td><td class="items">[[암브로시우스]] · [[보에티우스]]</td></tr>
        <tr><td colspan="2" class="highlight">[[아우구스티누스]]</td></tr>
        <tr><td class="cat">신플라톤-신비주의</td><td class="items">[[위 디오니시우스|위디오니시우스]] · [[미하일 프셀로스|프셀로스]]</td></tr>
        <tr><th colspan="2">스콜라 철학</th></tr>
        <tr><td class="cat">초기 스콜라철학</td><td class="items">[[요하네스 스코투스 에리우게나|에리우게나]] · [[안셀무스]] · [[피에르 아벨라르|아벨라르]]</td></tr>
        <tr><td class="cat">이슬람 철학</td><td class="items">[[알파라비]] · [[이븐 시나]] · [[알가잘리]] · [[이븐 루시드]]</td></tr>
        <tr><td class="cat">유대 철학</td><td class="items">[[솔로몬 이븐 가비롤|이븐 가비롤]] · [[마이모니데스]]</td></tr>
        <tr><td class="cat">초기 프란치스코</td><td class="items">[[보나벤투라]]</td></tr>
        <tr><td class="cat">도미니코학파</td><td class="items">[[알베르투스 마그누스|알베르투스]]</td></tr>
        <tr><td colspan="2" class="highlight">[[토마스 아퀴나스|아퀴나스]]</td></tr>
        <tr><td class="cat">후기 프란치스코</td><td class="items">[[둔스 스코투스|스코투스]]</td></tr>
        <tr><td class="cat">후기 스콜라철학</td><td class="items">[[오컴의 윌리엄|오컴]] · [[장 뷔리당|뷔리당]] · [[가브리엘 빌|빌]]</td></tr>
        <tr><td class="cat">신비주의</td><td class="items">[[마이스터 에크하르트|에크하르트]] · [[니콜라우스 쿠자누스|쿠자누스]] · [[야콥 뵈메|뵈메]]</td></tr>
    </table>

    <table id="tab-modern" class="namu-table">
        <tr><th colspan="2">16-18세기</th></tr>
        <tr><td class="cat">르네상스</td><td class="items">[[에라스뮈스]] · [[토머스 모어|모어]] · [[니콜로 마키아벨리|마키아벨리]] · [[미셸 드 몽테뉴|몽테뉴]] · [[조르다노 브루노|브루노]]</td></tr>
        <tr><td class="cat">합리주의</td><td class="items">[[르네 데카르트|데카르트]] · [[바뤼흐 스피노자|스피노자]] · [[니콜라 말브랑슈|말브랑슈]] · [[고트프리트 빌헬름 라이프니츠|라이프니츠]]</td></tr>
        <tr><td class="cat">경험주의</td><td class="items">[[프랜시스 베이컨|베이컨]] · [[토머스 홉스|홉스]] · [[존 로크|로크]] · [[조지 버클리|버클리]] · [[데이비드 흄|흄]] · [[애덤 스미스|스미스]]</td></tr>
        <tr><td class="cat">계몽주의</td><td class="items">[[몽테스키외]] · [[볼테르]] · [[드니 디드로|디드로]] · [[장 자크 루소|루소]] · [[클로드 아드리앵 엘베시우스|엘베시우스]]</td></tr>
        <tr><td colspan="2" class="highlight">[[임마누엘 칸트|칸트]] <span class="sub-txt">/</span> [[신칸트주의]]</td></tr>
        <tr><th colspan="2">19세기</th></tr>
        <tr><td class="cat">독일 관념론</td><td class="items">[[요한 고틀리프 피히테|피히테]] · [[프리드리히 빌헬름 요제프 셸링|셸링]] <span class="sub-txt">/ 낭만주의:</span> [[요한 고트프리트 헤르더|헤르더]] · [[프리드리히 슐라이어마허|슐라이어마허]] <span class="sub-txt">/ 초월주의:</span> [[랠프 월도 에머슨|에머슨]] · [[헨리 데이비드 소로|소로]]</td></tr>
        <tr><td colspan="2" class="highlight">[[게오르크 빌헬름 프리드리히 헤겔|헤겔]] <span class="sub-txt">/ 청년 헤겔학파:</span> [[루트비히 포이어바흐|포이어바흐]] · [[막스 슈티르너|슈티르너]]</td></tr>
        <tr><td class="cat">공리주의</td><td class="items">[[제러미 벤담|벤담]] · [[존 스튜어트 밀|밀]] · [[허버트 스펜서|스펜서]]</td></tr>
        <tr><td class="cat">실증주의</td><td class="items">[[오귀스트 콩트|콩트]] · [[에른스트 마흐|마흐]] <span class="sub-txt">/ 사회학:</span> [[에밀 뒤르켐|뒤르켐]] · [[막스 베버|베버]]</td></tr>
        <tr><td class="cat">사회주의</td><td class="items"><span class="sub-txt">아나키즘:</span> [[피에르조제프 프루동|프루동]] · [[미하일 바쿠닌|바쿠닌]] · [[표트르 크로포트킨|크로포트킨]]<br><span class="sub-txt">마르크스주의:</span> [[카를 마르크스|마르크스]] · [[프리드리히 엥겔스|엥겔스]]</td></tr>
        <tr><td class="cat">비합리주의</td><td class="items">[[쇠렌 키르케고르|키르케고르]] · [[아르투어 쇼펜하우어|쇼펜하우어]] · [[프리드리히 니체|니체]]</td></tr>
    </table>

    <table id="tab-contemporary" class="namu-table">
        <tr><td class="cat">현상학</td><td class="items">[[프란츠 브렌타노|브렌타노]] · [[에드문트 후설|후설]] · [[마르틴 하이데거|하이데거]] · [[에디트 슈타인|슈타인]] · [[알렉상드르 코제브|코제브]] · [[모리스 블랑쇼|블랑쇼]] · [[에마뉘엘 레비나스|레비나스]] · [[미셸 앙리|앙리]] · [[장뤽 마리옹|마리옹]] · [[숀 갤러거|갤러거]]</td></tr>
        <tr><td class="cat">철학적 인간학</td><td class="items">[[막스 셸러|셸러]] · [[마르틴 부버|부버]] · [[오토 볼노브|볼노브]] · [[아르놀트 겔렌|겔렌]] · [[페터 슬로터다이크|슬로터다이크]]</td></tr>
        <tr><td class="cat">생철학</td><td class="items">[[빌헬름 딜타이|딜타이]] · [[앙리 베르그송|베르그송]]</td></tr>
        <tr><td class="cat">실존주의</td><td class="items"><span class="sub-txt">무신론적:</span> [[미겔 데 우나무노|우나무노]] · [[장폴 사르트르|사르트르]] · [[시몬 드 보부아르|보부아르]] · [[모리스 메를로퐁티|메를로-퐁티]] · [[에밀 시오랑|시오랑]] · [[알베르 카뮈|카뮈]] <span class="sub-txt">/ 유신론적:</span> [[니콜라이 베르댜예프|베르댜예프]] · [[카를 야스퍼스|야스퍼스]] · [[루이 라벨|라벨]] · [[폴 틸리히|틸리히]] · [[가브리엘 마르셀|마르셀]] · [[마리오 코피치|코피치]]</td></tr>
        <tr><td class="cat">해석학</td><td class="items">[[에밀리오 베티|베티]] · [[한스 게오르크 가다머|가다머]] · [[폴 리쾨르|리쾨르]] · [[한스 블루멘베르크|블루멘베르크]]</td></tr>
        <tr><td class="cat">마르크스주의</td><td class="items"><span class="sub-txt">레닌주의:</span> [[블라디미르 레닌|레닌]] · [[게오르크 루카치|루카치]] · [[안토니오 그람시|그람시]] · [[마오쩌둥|마오]] · [[호세 카를로스 마리아테기|마리아테기]] · [[예발트 일리옌코프|일리옌코프]] · [[다니엘 벤사이드|벤사이드]] · [[알렉스 캘리니코스|캘리니코스]] <br><span class="sub-txt">서구:</span> [[에른스트 블로흐|블로흐]] · [[카를 코르쉬|코르쉬]] · [[앙리 르페브르|르페브르]] · [[로제 가로디|가로디]] · [[뤼시엥 골드만|골드만]] · [[기 드보르|드보르]] <br><span class="sub-txt">구조:</span> [[루이 알튀세르|알튀세르]] · [[니코스 풀란차스|풀란차스]] · [[에티엔 발리바르|발리바르]] · [[자크 랑시에르|랑시에르]] <br><span class="sub-txt">대안/포스트:</span> [[자크 비데|비데]] · [[제라르 뒤메닐|뒤메닐]] · [[프레드릭 제임슨|제임슨]] · [[에르네스토 라클라우|라클라우]] · [[샹탈 무페|무페]] <br><span class="sub-txt">자율주의/분석적:</span> [[마리오 트론티|트론티]] · [[안토니오 네그리|네그리]] · [[욘 엘스터|엘스터]] · [[제럴드 앨런 코헨|코헨]]</td></tr>
        <tr><td class="cat">비판 이론</td><td class="items"><span class="sub-txt">1세대:</span> [[막스 호르크하이머|호르크하이머]] · [[테오도어 아도르노|아도르노]] · [[발터 벤야민|벤야민]] · [[헤르베르트 마르쿠제|마르쿠제]] · [[에리히 프롬|프롬]] <br><span class="sub-txt">2/3세대:</span> [[카를오토 아펠|아펠]] · [[위르겐 하버마스|하버마스]] · [[낸시 프레이저|프레이저]] · [[악셀 호네트|호네트]]</td></tr>
        <tr><td class="cat">구조/포스트</td><td class="items">[[페르디낭 드 소쉬르|소쉬르]] · [[자크 라캉|라캉]] · [[클로드 레비스트로스|레비스트로스]] · [[미셸 푸코|푸코]] · [[장프랑수아 리오타르|리오타르]] · [[질 들뢰즈|들뢰즈]] · [[자크 데리다|데리다]] · [[조르조 아감벤|아감벤]] · [[주디스 버틀러|버틀러]]</td></tr>
        <tr><td class="cat">실재론/실용주의</td><td class="items"><span class="sub-txt">신유물론/사변적:</span> [[도나 해러웨이|해러웨이]] · [[브뤼노 라투르|라투르]] · [[메이야수]] · [[가브리엘]] <br><span class="sub-txt">실용주의:</span> [[찰스 샌더스 퍼스|퍼스]] · [[존 듀이|듀이]] · [[리처드 로티|로티]]</td></tr>
        <tr><td class="cat">분석철학/과학/언어</td><td class="items"><span class="sub-txt">수학/논리/언어:</span> [[고틀로프 프레게|프레게]] · [[버트런드 러셀|러셀]] · [[루트비히 비트겐슈타인|비트겐슈타인]] · [[콰인]] · [[솔 크립키|크립키]] <br><span class="sub-txt">심리/과학/기술:</span> [[존 설|설]] · [[대니얼 데닛|데닛]] · [[데이비드 차머스|차머스]] · [[칼 포퍼|포퍼]] · [[토머스 쿤|쿤]] · [[마셜 매클루언|매클루언]]</td></tr>
        <tr><td class="cat">정치/윤리/기타</td><td class="items"><span class="sub-txt">정치/법:</span> [[존 롤스|롤스]] · [[로버트 노직|노직]] · [[마이클 샌델|샌델]] · [[한나 아렌트|아렌트]] · [[로널드 드워킨|드워킨]] <br><span class="sub-txt">윤리/페미니즘/환경:</span> [[피터 싱어|싱어]] · [[수전 브라운밀러|브라운밀러]] · [[피터 싱어|싱어]] · [[한스 요나스|요나스]]</td></tr>
    </table>
</div>

<script>
    function showNamuTab(evt, tabId) {
        var tables = document.querySelectorAll(".namu-table");
        tables.forEach(function(table) {
            table.classList.remove("active");
        });
        var tablinks = document.querySelectorAll(".namu-tab");
        tablinks.forEach(function(btn) {
            btn.classList.remove("active");
        });
        document.getElementById(tabId).classList.add("active");
        evt.currentTarget.classList.add("active");
    }
</script>

<h1 id="section-2" class="big-title">2. 미학사</h1>
<p>*(여기에 미학사 내용을 채워주세요)*</p>

<h1 id="section-3" class="big-title">3. 계보학</h1>
<p>*(여기에 계보학 내용을 채워주세요)*</p>
