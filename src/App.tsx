import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from "react-router-dom"
import StyleguideLayout from "./styleguide/layout"
import StyleguidePage from "./styleguide/page"
import ChartShowcase from "./styleguide/components/chart/page"
import ButtonShowcase from "./styleguide/components/button/page"
import AlertDialogShowcase from "./styleguide/components/alert-dialog/page"
import CardShowcase from "./styleguide/components/card/page"
import PostPreviewPage from "./pages/PostPreviewPage"

// Import CSS
import "./App.css"

const ComponentLoader = () => {
  const { name } = useParams<{ name: string }>()

  switch (name) {
    case "post-preview":
      return <PostPreviewPage />
    // case "pricing":
    //   return <PricingPage />
    case "alert-dialog":
      return <AlertDialogShowcase />
    case "button":
      return <ButtonShowcase />
    case "card":
      return <CardShowcase />
    case "chart":
      return <ChartShowcase />
    default:
      return (
        <div className="p-10 text-center border-2 border-dashed rounded-lg bg-muted/50">
          <h2 className="text-xl font-semibold">Component "{name}" not found</h2>
          <p className="text-muted-foreground mt-2">This component showcase is still under development.</p>
        </div>
      )
  }
}

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/styleguide" replace />} />

        {/* Solo Page Route */}
        <Route path="/post-preview" element={<PostPreviewPage />} />

        <Route path="/styleguide" element={<StyleguideLayout />}>
          <Route index element={<StyleguidePage />} />
          <Route path="components/:name" element={<ComponentLoader />} />
          <Route path="pages/:name" element={<ComponentLoader />} />
        </Route>

        <Route path="*" element={<div className="p-10 text-center">404 - Page Not Found</div>} />
      </Routes>
    </Router>
  )
}

export default App;
