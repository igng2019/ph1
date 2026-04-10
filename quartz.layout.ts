import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

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

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.Breadcrumbs(),
    Component.DesktopOnly(Component.TableOfContents()),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [
 localGraph: {
     drag: true,
      zoom: true,
      depth: 10,       // 👈 10 이상의 값을 주면 거의 모든 연결이 다 보입니다.
      scale: 1.1,
      repelForce: 0.8, // 노드끼리 밀어내는 힘 (너무 뭉치면 1.0으로 키우세요)
      centerForce: 0.3,
      linkDistance: 50,
      fontSize: 0.5,
      showTags: false,
    },
    globalGraph: {
      drag: true,
      zoom: true,
      depth: -1,       // 👈 -1은 '제한 없음'을 의미하는 경우가 많습니다.
      scale: 1.2,
      repelForce: 1.0,
      centerForce: 0.5,
      },
          afterBody: [
    Component.Graph({
      localGraph: {
        depth: 10, // 
        scale: 1.1, // 크기를 살짝 키움
        linkDistance: 40,
      },
      globalGraph: {
        depth: 2,
        scale: 1.2,
}

// 홈 화면(index) 전용 레이아웃 설정
export const defaultListPageLayout: PageLayout = {
  ...defaultContentPageLayout,
  beforeBody: [
    Component.ArticleTitle(),
    // 홈 화면 상단에 최근 글 4개를 가로로 배치하기 위한 컴포넌트
    Component.RecentNotes({ 
      title: "최근 작성한 글", 
      limit: 4,
      showTags: false 
    }),
  ],
  right: [],
}
