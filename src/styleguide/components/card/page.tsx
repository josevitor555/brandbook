import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardAction,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreVertical, ExternalLink, Heart, Share2 } from "lucide-react"

export default function CardShowcase() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Cards</h1>
        <p className="text-muted-foreground mt-2">
          Versatile containers for grouping related content and actions.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Basic Card */}
        <Card>
          <CardHeader>
            <CardTitle>Project Overview</CardTitle>
            <CardDescription>A brief summary of your current project milestones.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm">
              Your project "Instagram Post Series" is 80% complete. All design tokens have been syncronized and the styleguide is active.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full">View Details</Button>
          </CardFooter>
        </Card>

        {/* Card with Action */}
        <Card>
          <CardHeader className="border-b mb-4">
            <CardTitle>Analytics Dashboard</CardTitle>
            <CardDescription>Live stats from the past 24 hours.</CardDescription>
            <CardAction>
              <Button variant="ghost" size="icon">
                <MoreVertical className="h-4 w-4" />
              </Button>
            </CardAction>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Views</span>
              <span className="font-bold">12.5k</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Engagement</span>
              <span className="font-bold text-success">+15.2%</span>
            </div>
          </CardContent>
        </Card>

        {/* Card with Image (Placeholder Simulation) */}
        <Card>
          <div className="h-40 bg-muted flex items-center justify-center relative">
             <div className="absolute top-2 right-2 flex gap-1">
                <Badge variant="secondary">New</Badge>
             </div>
             <span className="text-muted-foreground/50 font-bold italic">POST COVER</span>
          </div>
          <CardHeader>
            <CardTitle>Instagram Post #02</CardTitle>
            <CardDescription>Updated 2 hours ago</CardDescription>
          </CardHeader>
          <CardContent>
             <p className="text-sm">
                Focus on the dark theme implementation with gold accents.
             </p>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="ghost" size="sm">
               <Heart className="h-4 w-4 mr-2" /> 24
            </Button>
            <Button variant="ghost" size="sm">
               <Share2 className="h-4 w-4 mr-2" /> Share
            </Button>
          </CardFooter>
        </Card>

        {/* Brand Themed Card */}
        <Card className="bg-primary text-primary-foreground border-primary shadow-lg">
          <CardHeader>
            <CardTitle className="text-primary-foreground">Brand Mission</CardTitle>
            <CardDescription className="text-primary-foreground/70">Our core values and identity.</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm font-medium">
              We empower creators by providing high-fidelity design systems and automated brand consistency tools.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" className="bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Learn More <ExternalLink className="ml-2 h-3 w-3" />
            </Button>
          </CardFooter>
        </Card>

        {/* Documentation Usage */}
        <div className="md:col-span-2 space-y-4">
          <h3 className="text-xl font-bold">Usage</h3>
          <p className="text-sm text-muted-foreground">
            Cards are built using semantic sub-components. Use <code>CardAction</code> for elements that should sit in the header corner.
          </p>
          <pre className="p-4 bg-muted rounded-md text-[13px] overflow-auto">
{`import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
  CardAction,
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
    <CardAction>
       <Button variant="ghost">X</Button>
    </CardAction>
  </CardHeader>
  <CardContent>Body content...</CardContent>
  <CardFooter>Action area</CardFooter>
</Card>`}
          </pre>
        </div>
      </div>
    </div>
  )
}
