<style>
  :root { --border: #444; --link: #58a6ff; --accent: #f1e05a; }
  
  /* 대문 거슬리는 요소 숨김 */
  .article-title, .content-meta, .breadcrumb-container { display: none !important; }

  /* 최근 프로젝트 (마크다운 리스트를 그리드로 변환) */
  .recent-projects { background: #222; padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid var(--border); }
  .recent-title { font-size: 1.2em; color: var(--accent); margin-bottom: 15px; font-weight: bold; border-left: 4px solid var(--accent); padding-left: 10px; }
  .recent-projects ul { display: grid; grid-template-columns: 1fr 1fr; gap: 10px; list-style: none; padding: 0; margin: 0; }
  .recent-projects li { background: #2d2d2d; padding: 10px; border-radius: 4px; border: 1px solid var(--border); text-align: center; margin: 0; }
  .recent-projects a { color: var(--link); text-decoration: none; font-weight: bold; }
  .recent-projects a:hover { color: var(--accent); text-decoration: underline; }
  .recent-projects a.internal.new { color: #777; pointer-events: none; font-style: italic; text-decoration: none; }

  /* 목차 */
  .custom-toc { background: #1e1e1e; padding: 20px; border-radius: 8px; border: 1px solid var(--border); margin-bottom: 40px; }
  .custom-toc p { font-size: 1.2em; font-weight: bold; color: #fff; margin-top: 0; margin-bottom: 10px; border-bottom: 1px solid var(--border); padding-bottom: 10px; }
  .custom-toc ul { list-style: none; padding-left: 0; margin: 0; display: block; }
  .custom-toc li { margin-bottom: 10px; font-size: 1.1em; display: block; background: none; border: none; padding: 0; text-align: left; }
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
  
  /* 표 내부의 위키링크 회색화 마법 */
  .namu-table a.internal { color: var(--link); text-decoration: none; }
  .namu-table a.internal:hover { text-decoration: underline; }
  .namu-table a.internal.new { color: #777; pointer-events: none; font-style: italic; }

  /* 본문 제목 */
  .big-title { font-size: 2em; font-weight: 900; margin-top: 60px; margin-bottom: 20px; border-bottom: 3px solid var(--border); padding-bottom: 10
