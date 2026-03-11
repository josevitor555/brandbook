import { Button } from "@/components/ui/button"
import { CustomButton } from "@/components/CustomButton"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, Loader2, ArrowRight, Github } from "lucide-react"

export default function ButtonShowcase() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Buttons</h1>
        <p className="text-muted-foreground mt-2">
          Interactive button components with support for multiple variants, sizes, and brand-specific intents.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {/* Core Variants */}
        <Card>
          <CardHeader>
            <CardTitle>Base Variants</CardTitle>
            <CardDescription>Standard shadcn/ui variants with brand styling</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button>Default (Primary)</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="link">Link</Button>
            <Button variant="destructive">Destructive</Button>
          </CardContent>
        </Card>

        {/* Semantic Intents */}
        <Card>
          <CardHeader>
            <CardTitle>Semantic Intents</CardTitle>
            <CardDescription>Customized triggers for specific actions using brand tokens</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <CustomButton intent="primary">Primary Brand</CustomButton>
            <CustomButton intent="secondary">Secondary Brand</CustomButton>
            <CustomButton intent="success">Success Action</CustomButton>
            <CustomButton intent="warning">Warning Notice</CustomButton>
            <CustomButton intent="info">Info Message</CustomButton>
          </CardContent>
        </Card>

        {/* Sizes */}
        <Card>
          <CardHeader>
            <CardTitle>Sizes</CardTitle>
            <CardDescription>Choose from multiple size options</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap items-center gap-4">
            <Button size="sm">Small</Button>
            <Button size="default">Default</Button>
            <Button size="lg">Large</Button>
            <Button size="icon">
              <ArrowRight className="h-4 w-4" />
            </Button>
          </CardContent>
        </Card>

        {/* States & Icons */}
        <Card>
          <CardHeader>
            <CardTitle>States & Icons</CardTitle>
            <CardDescription>Buttons with icons, loading states, and disabled states</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <Button disabled>Disabled</Button>
            <Button>
              <Mail className="mr-2 h-4 w-4" /> Login with Email
            </Button>
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" /> Github
            </Button>
            <Button disabled>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
            </Button>
          </CardContent>
        </Card>

        {/* Documentation Usage */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Usage</h3>
          <p className="text-sm text-muted-foreground">
            Use <code>Button</code> for standard variants and <code>CustomButton</code> for semantic brand intents.
          </p>
          <pre className="p-4 bg-muted rounded-md text-[13px] overflow-auto">
{`import { Button } from "@/components/ui/button"
import { CustomButton } from "@/components/CustomButton"

// Standard usage
<Button variant="outline">Label</Button>

// Brand intent usage
<CustomButton intent="success">Save Changes</CustomButton>`}
          </pre>
        </div>
      </div>
    </div>
  )
}
