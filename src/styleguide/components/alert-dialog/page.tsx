import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function AlertDialogShowcase() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Alert Dialog</h1>
        <p className="text-muted-foreground mt-2">
          A modal dialog that interrupts the user with important content and expects a response.
        </p>
      </header>

      <div className="grid grid-cols-1 gap-8">
        {/* Basic Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Basic Usage</CardTitle>
            <CardDescription>Default alert dialog with header, footer, and actions.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="outline">Open Default Dialog</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Destructive Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Destructive Action</CardTitle>
            <CardDescription>Using the brand's destructive tokens for dangerous actions.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="destructive">Delete Project</Button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle className="text-destructive">Confirm Deletion</AlertDialogTitle>
                  <AlertDialogDescription>
                    This will immediately and permanently remove the project <strong>"Instagram Q1 Post"</strong>. 
                    This action is irreversible.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Go Back</AlertDialogCancel>
                  <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
                    Yes, Delete Forever
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Brand Theme Demo */}
        <Card>
          <CardHeader>
            <CardTitle>Brand Theme Integration</CardTitle>
            <CardDescription>Styled with primary and secondary design tokens.</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-wrap gap-4">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <Button variant="secondary" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Save Changes
                </Button>
              </AlertDialogTrigger>
              <AlertDialogContent className="border-primary/20">
                <AlertDialogHeader>
                  <AlertDialogTitle>Save to Brandbook?</AlertDialogTitle>
                  <AlertDialogDescription>
                    Do you want to save these updated design tokens to your main Brandbook configuration?
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Review Again</AlertDialogCancel>
                  <AlertDialogAction className="bg-primary text-primary-foreground hover:bg-primary/90">
                    Apply Changes
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </CardContent>
        </Card>

        {/* Documentation Usage */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Usage</h3>
          <p className="text-sm text-muted-foreground">
            The Alert Dialog relies on a trigger component (usually a Button) and several content sub-components.
          </p>
          <pre className="p-4 bg-muted rounded-md text-[13px] overflow-auto">
{`import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>This is permanent.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>`}
          </pre>
        </div>
      </div>
    </div>
  )
}
