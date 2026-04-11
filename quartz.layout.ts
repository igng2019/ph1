import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// 1. 공통 레이아웃
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

// 2. 일반 문서용 레이아웃
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(), // 👈 ItemMeta 대신 올바른 이름으로 수정
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
  afterBody: [
    Component.Graph({
      localGraph: {
        drag: true,
        zoom: true,
        depth: 3,
        scale: 1.2,
        repelForce: 0.8,
        centerForce: 0.3,
        linkDistance: 45,
        fontSize: 0.8,    // 👈 텍스트 선명도 강화
        opacityScale: 1,  // 👈 흐림 방지
        showTags: false,
      },
      globalGraph: {
        drag: true,
        zoom: true,
        depth: -1,
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

// 3. 목록 및 홈 화면용 레이아웃 (배포 보장 버전)
export const defaultListPageLayout: PageLayout = {
  ...defaultContentPageLayout, // 👈 복잡한 중복 대신 상단 설정을 그대로 이어받아 오류 방지
  beforeBody: [
    Component.ArticleTitle(),
    Component.ContentMeta(), // 👈 여기도 올바른 이름으로 수정
  ],
}
