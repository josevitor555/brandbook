export interface NavItem {
  name: string
  href: string
}

export interface NavSection {
  title: string
  items: NavItem[]
}

export const navigation: NavSection[] = [
  {
    title: "Foundation",
    items: [
      { name: "Design Tokens", href: "/styleguide" },
      { name: "Pricing Page", href: "/styleguide/pages/pricing" },
    ]
  },
  {
    title: "Components",
    items: [
      { name: "Alert Dialog", href: "/styleguide/components/alert-dialog" },
      { name: "Button", href: "/styleguide/components/button" },
      { name: "Card", href: "/styleguide/components/card" },
      { name: "Charts", href: "/styleguide/components/chart" },
    ]
  }
]
