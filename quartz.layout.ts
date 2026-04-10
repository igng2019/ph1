import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 1. 공통 레이아웃 (헤더, 푸터 등)
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

// ==========================================
// 2. 일반 노트(문서) 전용 레이아웃 설정
// ==========================================
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
  // 👇 일반 문서 맨 밑에 들어가는 그래프 (3틱까지만)
  afterBody: [
    Component.Graph({
      localGraph: {
        depth: 3, 
        scale: 1.1,
        linkDistance: 40,
      },
      globalGraph: {
        depth: 3,
        scale: 1.1,
      }
    }),
  ],
}

// ==========================================
// 3. 홈 화면(index) 전용 레이아웃 설정
// ==========================================
export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    // 👇 홈 화면 상단에 최근 글 4개 띄우기
    Component.RecentNotes({ 
      title: "최근 작성한 글", 
      limit: 4,
      showTags: false 
    }),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [], // 홈 화면은 오른쪽 사이드바를 비워서 넓게 씁니다.
  // 👇 홈 화면 맨 밑에 들어가는 전체 지식 지도 (최대 깊이 10)
  afterBody: [
    Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 10,       // 10틱 (사실상 전체 연결 표시)
        scale: 1.2,
        repelForce: 0.8, // 노드가 뭉치면 이 숫자를 1.0이나 1.2로 키우세요
        centerForce: 0.3,
        linkDistance: 50,
        fontSize: 0.5,
        showTags: false,
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,       // 무제한
        scale: 1.2,
        repelForce: 1.0,
        centerForce: 0.5,
      }
    }),
  ],
}
