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
    Component.Graph(),
    Component.Backlinks(),
  ],
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