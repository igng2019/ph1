import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 1. 공통 레이아웃 (헤더, 푸터)
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jackyzha0/quartz",
    },
  }),
}

// 2. 일반 문서용 레이아웃 (여기에 있어야 일반 철학자 문서에 뜹니다)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.Breadcrumbs(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
  // ✨ 본문 하단 대형 그래프
  afterBody: [
    Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 3,         // 일반 노트는 3틱까지만!
        scale: 1.2,       // 👈 초기 줌(확대)을 약간 당겨서 더 크고 시원하게 보임
        repelForce: 0.8,
        centerForce: 0.3,
        linkDistance: 45,
        fontSize: 0.8,    // 👈 [핵심] 글자 크기를 대폭 키워 선명도 확보 (기본값 0.6)
        opacityScale: 1,  // 👈 [핵심] 멀리 있는 글씨가 흐리멍덩해지는 현상 방지
        showTags: false,
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,        // 홈 화면에서 탭 클릭 시 우주 전체 표시
        scale: 1.1,
        repelForce: 1.5,  // 노드가 뭉치지 않게 강하게 밀어냄
        centerForce: 0.3,
        linkDistance: 50,
        fontSize: 0.5,    // 전체 지도는 노드가 1천 개가 넘으므로 글씨를 얇게 유지
        showTags: false,
      }
    }),
  ],
}

// 3. 목록 및 홈 화면용 레이아웃 (여기에 있어야 홈 화면 밑에도 무조건 뜹니다!)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ItemMeta(),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [], // 홈 화면 등에서는 사이드바를 비워 넓게 씁니다.
  // ✨ 홈 화면 하단에도 완벽하게 동일한 그래프 적용
  afterBody: [
    Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 3,         // 홈 화면 첫 로딩 시에는 가볍게
        scale: 1.2,       // 초기 줌 당김
        repelForce: 0.8,
        centerForce: 0.3,
        linkDistance: 45,
        fontSize: 0.8,    // 👈 선명한 글씨 적용
        opacityScale: 1,  // 👈 흐림 현상 방지
        showTags: false,
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,        // 👉 홈 화면에서 이 Global 탭을 누르면 모든 데이터가 뜹니다!
        scale: 1.1,
        repelForce: 1.5,
        centerForce: 0.3,
        linkDistance: 50,
        fontSize: 0.5,
        showTags: false,
      }
    }),
  ],
}
