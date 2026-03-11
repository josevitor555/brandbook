import { Link, useLocation, Outlet } from "react-router-dom"
import { cn } from "@/lib/utils"
import { navigation } from "./navigation"

export default function StyleguideLayout() {
  const { pathname } = useLocation()

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      {/* Sidebar - Fixed */}
      <aside className="w-64 border-r bg-card p-6 flex flex-col gap-6 fixed top-0 left-0 h-screen overflow-y-auto">
        <div>
          <Link to="/styleguide" className="text-xl font-bold flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded-sm" />
            Design System
          </Link>
        </div>

        <nav className="flex flex-col gap-6">
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs uppercase tracking-wider font-semibold text-muted-foreground mb-4">
                {section.title}
              </h3>
              <ul className="flex flex-col gap-1">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      to={item.href}
                      className={cn(
                        "block px-3 py-2 rounded-md text-sm transition-colors font-medium",
                        pathname === item.href
                          ? "bg-primary text-primary-foreground shadow-sm"
                          : "text-muted-foreground hover:bg-muted hover:text-foreground"
                      )}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content - offset by sidebar width */}
      <main className="flex-1 ml-64 overflow-auto p-10">
        <div className="max-w-5xl mx-auto">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
