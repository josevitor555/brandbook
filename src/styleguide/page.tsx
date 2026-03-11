import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Info, AlertCircle, Moon, Sun } from "lucide-react"
import { useState } from "react"

export default function StyleguidePage() {
  const [isDark, setIsDark] = useState(false)

  const toggleDarkMode = () => {
    setIsDark(!isDark)
    document.documentElement.classList.toggle("dark")
  }

  return (
    <div className="space-y-12 pb-20">
      <header className="flex justify-between items-end border-b pb-8">
        <div>
          <h1 className="text-4xl font-extrabold tracking-tight">Design System</h1>
          <p className="text-xl text-muted-foreground mt-2">
            Foundation, tokens, and core components extracted from the brand design.
          </p>
        </div>
        <Button variant="outline" size="icon" onClick={toggleDarkMode}>
          {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
        </Button>
      </header>

      {/* Colors Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Color Palette</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Core Colors</h3>
            <div className="space-y-2">
              <ColorSwatch name="Main Background" variable="bg-background" />
              <ColorSwatch name="Main Foreground" variable="bg-foreground" />
              <ColorSwatch name="Primary Accent" variable="bg-primary" />
              <ColorSwatch name="Secondary Accent" variable="bg-secondary" />
              <ColorSwatch name="Muted Surface" variable="bg-muted" />
              <ColorSwatch name="Card Surface" variable="bg-card" />
              <ColorSwatch name="Border" variable="bg-border" />
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Semantic Colors</h3>
            <div className="space-y-2">
              <ColorSwatch name="Success" variable="bg-success" />
              <ColorSwatch name="Warning" variable="bg-warning" />
              <ColorSwatch name="Info" variable="bg-info" />
              <ColorSwatch name="Error" variable="bg-destructive" />
            </div>
          </div>
        </div>

        <div className="mt-10 p-6 border rounded-lg bg-muted/30">
          <p className="text-sm text-center text-muted-foreground italic">
            This design system uses specific accent pairs tailored for both light and dark themes. 
            Toggle the theme in the top right to see the adaptive color shifts.
          </p>
        </div>
      </section>

      {/* Typography Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Typography</h2>
        <div className="space-y-4">
          <div className="border p-6 rounded-lg space-y-4">
            <h1 className="text-5xl font-extrabold tracking-tight">Heading 1</h1>
            <h2 className="text-4xl font-bold tracking-tight">Heading 2</h2>
            <h3 className="text-3xl font-semibold tracking-tight">Heading 3</h3>
            <h4 className="text-2xl font-semibold tracking-tight">Heading 4</h4>
            <p className="text-base leading-relaxed">
              Body text: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapiens autem et vitia detrahere vult extra propter se expetenda. 
              <strong> Bold text example</strong> and <em>Italic text example</em>.
            </p>
            <p className="text-sm text-muted-foreground">
              Small muted text: Used for descriptions and less important info.
            </p>
          </div>
        </div>
      </section>

      {/* Spacing & Radius Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Spacing & Radius</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Border Radius</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <div className="w-16 h-16 bg-primary rounded-none flex items-center justify-center text-[10px] font-bold">NONE</div>
              <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center text-[10px] font-bold">SM</div>
              <div className="w-16 h-16 bg-primary rounded-md flex items-center justify-center text-[10px] font-bold">MD</div>
              <div className="w-16 h-16 bg-primary rounded-lg flex items-center justify-center text-[10px] font-bold">LG</div>
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-[10px] font-bold">FULL</div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Shadows</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <div className="w-16 h-16 bg-card border shadow-sm rounded-md" />
              <div className="w-16 h-16 bg-card border shadow rounded-md" />
              <div className="w-16 h-16 bg-card border shadow-md rounded-md" />
              <div className="w-16 h-16 bg-card border shadow-lg rounded-md" />
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Components Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold border-b pb-2">Demo Components</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Buttons</CardTitle>
              <CardDescription>Primary, Secondary, and Ghost variants</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-4">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Badges</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="outline">Outline</Badge>
              <Badge variant="destructive">Destructive</Badge>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-4">
            <h3 className="font-semibold">Alerts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Alert>
                <Info className="h-4 w-4" />
                <AlertTitle>Heads up!</AlertTitle>
                <AlertDescription>
                  This is a default alert using the info styling.
                </AlertDescription>
              </Alert>
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Selection Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup defaultValue="option-one">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-one" id="option-one" />
                  <Label htmlFor="option-one">Option One</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="option-two" id="option-two" />
                  <Label htmlFor="option-two">Option Two</Label>
                </div>
              </RadioGroup>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

function ColorSwatch({ name, variable }: { name: string; variable: string }) {
  return (
    <div className="flex items-center gap-4 p-2 border rounded-md">
      <div className={`w-10 h-10 rounded border shadow-inner ${variable}`} />
      <div className="flex flex-col">
        <span className="text-sm font-medium">{name}</span>
        <code className="text-xs text-muted-foreground">{variable}</code>
      </div>
    </div>
  )
}

function ScaleSwatch({ name, className }: { name: string; className: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className={`w-12 h-12 rounded shadow-inner ${className} border`} />
      <span className="text-[10px] font-medium uppercase">{name.split(' ')[1]}</span>
    </div>
  )
}
