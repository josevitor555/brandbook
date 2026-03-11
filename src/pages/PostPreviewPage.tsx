import { useRef } from "react"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const POSTS = [
  {
    id: 1,
    title: "Sustainability Report 2026",
    subtitle: "Eco-Conscious Branding Strategy",
    slides: [
      { id: 1, label: "01. Introduction", color: "var(--chart-1)" },
      { id: 2, label: "02. Core Pillars", color: "var(--chart-2)" },
      { id: 3, label: "03. Impact Stats", color: "var(--chart-1)" },
      { id: 4, label: "04. Future Goals", color: "var(--chart-2)" },
      { id: 5, label: "05. Call to Action", color: "var(--chart-1)" },
      { id: 6, label: "06. Credits", color: "var(--chart-2)" },
    ]
  },
  {
    id: 2,
    title: "Brand Identity Evolution",
    subtitle: "Visual Language Refinement",
    slides: [
      { id: 1, label: "01. The Hook", color: "var(--chart-2)" },
      { id: 2, label: "02. Visual Language", color: "var(--chart-1)" },
      { id: 3, label: "03. Typography Mesh", color: "var(--chart-2)" },
      { id: 4, label: "04. Outcome", color: "var(--chart-1)" },
    ]
  }
]

function PostRow({ post }: { post: typeof POSTS[0] }) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.offsetWidth * 0.8
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      })
    }
  }

  return (
    <section className="space-y-10 group/section">
      <div className="space-y-2 px-2">
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-primary" />
          <span className="text-[10px] font-mono font-semibold tracking-widest uppercase text-primary">
            Project View
          </span>
        </div>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl md:text-4xl font-black leading-none italic uppercase tracking-tighter">
              {post.title}
            </h2>
            <p className="text-muted-foreground font-medium md:text-lg tracking-tight mt-2">
              {post.subtitle}
            </p>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("left")}
                className="h-10 w-10 rounded-full border-border bg-accent/50 hover:bg-accent text-foreground"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => scroll("right")}
                className="h-10 w-10 rounded-full border-border bg-accent/50 hover:bg-accent text-foreground"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            <div className="hidden md:flex items-center gap-4 text-muted-foreground">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider">
                {post.slides.length} Slides
              </span>
              <div className="h-4 w-px bg-border" />
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-secondary-foreground">
                Carousel Post
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        {/* Row Container - The "Filmstrip" */}
        <div
          className={cn(
            "relative overflow-hidden rounded-3xl bg-secondary/30 border border-border p-4 md:p-12 shadow-2xl",
            "before:absolute before:inset-0 before:bg-gradient-to-tr before:from-primary/5 before:to-transparent before:opacity-0 group-hover/section:before:opacity-100 transition-all duration-1000"
          )}
        >
          {/* Noise Texture Layer */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3BaseFilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/baseFilter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            }}
          ></div>

          {/* Horizontal Scroll Area */}
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-auto pb-12 pt-6 snap-x snap-mandatory scrollbar-hide px-4"
          >
            {post.slides.map((slide, index) => (
              <div
                key={slide.id}
                className="flex-none w-[320px] sm:w-[380px] md:w-[460px] snap-center"
              >
                <Card className="aspect-square relative overflow-hidden transition-all duration-700 hover:-translate-y-4 hover:shadow-xl border-border bg-card group/card rounded-2xl ring-1 ring-border hover:ring-primary/20">
                  <CardContent className="p-0 h-full flex flex-col">
                    {/* Slide Content Representation */}
                    <div
                      className="flex-1 flex items-center justify-center relative overflow-hidden"
                      style={{ backgroundColor: slide.color }}
                    >
                      {/* Glossy Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/10 via-transparent to-background/20 pointer-events-none" />

                      {/* Dynamic Background ID */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-[0.07] pointer-events-none select-none">
                        <span className="text-foreground font-black text-[20rem] tracking-tighter -rotate-12 translate-x-12">
                          {slide.id}
                        </span>
                      </div>

                      {/* Technical Centered Label */}
                      <div className="relative z-10 scale-90 group-hover/card:scale-100 transition-transform duration-700">
                        <div className="bg-background/90 backdrop-blur-md text-foreground px-6 py-3 rounded-full shadow-lg border border-border group-hover/card:border-primary transition-colors">
                          <span className="text-sm font-mono font-black uppercase tracking-wider">
                            {slide.label.split(".")[1].trim()}
                          </span>
                        </div>
                      </div>

                      {/* Corner Accent */}
                      <div className="absolute top-6 left-6 h-10 w-10 border-l border-t border-foreground/10" />
                    </div>

                    {/* Premium Footer */}
                    <div className="p-6 flex justify-between items-center bg-card">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-mono font-semibold tracking-widest uppercase text-muted-foreground">
                          Sequential Unit
                        </span>
                        <span className="text-xs font-semibold text-muted-foreground/60">
                          MASTER_ASSET_v2
                        </span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="h-1.5 w-16 bg-muted rounded-full overflow-hidden hidden sm:block">
                          <div
                            className="h-full bg-primary transition-all duration-1000 ease-out"
                            style={{
                              width: `${((index + 1) / post.slides.length) * 100}%`,
                            }}
                          />
                        </div>
                        <span className="text-sm font-mono font-black text-primary">
                          {index + 1}
                          <span className="text-muted-foreground/20">/</span>
                          {post.slides.length}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}

            {/* "Add Slide" Placeholder or End Marker */}
            <div className="flex-none w-[200px] snap-center flex items-center justify-center opacity-20 hover:opacity-100 transition-opacity">
              <div className="text-center group/btn cursor-pointer">
                <div className="h-16 w-16 rounded-full border-2 border-dashed border-border flex items-center justify-center mx-auto mb-4 group-hover/btn:border-primary group-hover/btn:rotate-90 transition-all duration-500">
                  <ArrowRight className="h-8 w-8 text-muted-foreground group-hover/btn:text-primary" />
                </div>
                <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground">
                  Next Post
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function PostPreviewPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      {/* 1. Header Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="flex h-16 items-center px-6 md:px-12">
          <Button
            variant="ghost"
            size="sm"
            className="gap-2 text-muted-foreground hover:text-foreground hover:bg-accent transition-all rounded-full px-4"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="font-medium tracking-tight">Back to Planner</span>
          </Button>
        </div>
      </nav>

      {/* 2. Main Feed Area */}
      <main className="mx-auto max-w-7xl px-6 py-16 md:py-24 space-y-32">
        {POSTS.map((post) => (
          <PostRow key={post.id} post={post} />
        ))}

        {/* Dynamic Footer Design */}
        <footer className="pt-24 pb-12 flex flex-col items-center gap-10">
          <div className="w-px h-32 bg-gradient-to-b from-primary via-primary/50 to-transparent" />
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black italic tracking-tighter uppercase opacity-50">
              Visual Proof Complete
            </h3>
            <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
              Brandbook System © 2026
            </p>
          </div>
        </footer>
      </main>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}
