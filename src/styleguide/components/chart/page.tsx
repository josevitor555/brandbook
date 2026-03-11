import { Bar, BarChart, CartesianGrid, XAxis, Line, LineChart, Pie, PieChart, Cell } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  type ChartConfig,
} from "@/components/ui/chart"

const barData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
]

const lineData = [
  { month: "Jan", sales: 400, profit: 240 },
  { month: "Feb", sales: 300, profit: 139 },
  { month: "Mar", sales: 200, profit: 980 },
  { month: "Apr", sales: 278, profit: 390 },
  { month: "May", sales: 189, profit: 480 },
  { month: "Jun", sales: 239, profit: 380 },
]

const pieData = [
  { name: "Direct", value: 400, color: "var(--color-category1)" },
  { name: "Organic", value: 300, color: "var(--color-category2)" },
  { name: "Paid", value: 300, color: "var(--color-category3)" },
  { name: "Social", value: 200, color: "var(--color-category4)" },
]

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--primary)",
  },
  mobile: {
    label: "Mobile",
    color: "var(--secondary)",
  },
  sales: {
    label: "Sales",
    color: "var(--primary)",
  },
  profit: {
    label: "Profit",
    color: "var(--secondary)",
  },
  category1: {
    label: "Direct",
    color: "var(--primary)",
  },
  category2: {
    label: "Organic",
    color: "var(--secondary)",
  },
  category3: {
    label: "Paid",
    color: "#000000",
  },
  category4: {
    label: "Social",
    color: "#666666",
  },
} satisfies ChartConfig

export default function ChartShowcase() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="text-3xl font-bold tracking-tight">Charts</h1>
        <p className="text-muted-foreground mt-2">
          Data visualization components built using Recharts and Tailwind.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Bar Chart - Mixed</CardTitle>
            <CardDescription>Comparison between Desktop and Mobile users</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <BarChart accessibilityLayer data={barData}>
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="desktop" fill="var(--color-desktop)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="mobile" fill="var(--color-mobile)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Line Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Line Chart - Analytics</CardTitle>
            <CardDescription>Sales vs Profit over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <LineChart data={lineData}>
                <CartesianGrid vertical={false} strokeDasharray="3 3" />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                />
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="var(--color-sales)"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "var(--color-sales)" }}
                />
                <Line
                  type="monotone"
                  dataKey="profit"
                  stroke="var(--color-profit)"
                  strokeWidth={2}
                  dot={{ r: 4, fill: "var(--color-profit)" }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle>Pie Chart - Traffic Sources</CardTitle>
            <CardDescription>Distribution of incoming traffic</CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="min-h-[300px] w-full">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                >
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent hideLabel />} />
                <ChartLegend content={<ChartLegendContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Documentation Style Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold">Usage</h3>
          <p className="text-sm text-muted-foreground">
            The Chart component is a wrapper around <code>recharts</code> that provides 
            a consistent look and feel based on your design system tokens.
          </p>
          <pre className="p-4 bg-muted rounded-md text-[11px] overflow-auto">
{`import { Bar, BarChart } from "recharts"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartConfig = {
  desktop: { label: "Desktop", color: "var(--primary)" },
}

export function Demo() {
  return (
    <ChartContainer config={chartConfig}>
      <BarChart data={data}>
        <Bar dataKey="desktop" fill="var(--color-desktop)" />
        <ChartTooltip content={<ChartTooltipContent />} />
      </BarChart>
    </ChartContainer>
  )
}`}
          </pre>
        </div>
      </div>
    </div>
  )
}
