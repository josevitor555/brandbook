import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const tiers = [
  {
    name: "Free",
    description: "Ideal for hobbyists and individuals exploring web app creation.",
    price: "0",
    features: ["NewMode Domain", "NewMode Badge", "10 Members", "5 Spaces"],
    buttonText: "Free",
    popular: false,
  },
  {
    name: "Pro",
    description: "Designed for creators and startups scaling their digital products.",
    price: "49",
    features: [
      "Unlimited Members",
      "Custom Domain",
      "20 Spaces",
      "25 GB Storage",
      "5 Collaborators",
      "2 Translation Locale",
    ],
    buttonText: "$49",
    popular: true,
  },
  {
    name: "Business",
    description: "For small creators and freelancers needing more and for brands, businesses or emerging enterprises growth.",
    price: "99",
    features: [
      "Unlimited Members",
      "Custom Domain",
      "30 Spaces",
      "10 Collaborators",
      "3 Translation Locale",
      "SEO optimization",
    ],
    buttonText: "$99",
    popular: false,
  },
]

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background py-20 px-4 flex items-center justify-center">
      <div className="max-w-6xl w-full">
        {/* Animated Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter">
            Choose your <span className="text-primary">plan.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simple, transparent pricing for creators who build with intention.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="relative h-full"
            >
              <Card
                className={cn(
                  "relative h-full flex flex-col transition-all duration-300",
                  "border-[0.5px] border-border shadow-none overflow-visible",
                  tier.popular && "ring-2 ring-primary shadow-2xl scale-105 z-10 bg-card"
                )}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-blue-500 hover:bg-blue-600 border-none px-4 py-1 text-[10px] font-bold tracking-widest uppercase">
                      Popular
                    </Badge>
                  </div>
                )}

                <CardHeader className="space-y-4 pb-8">
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-3xl font-black tracking-tighter">{tier.name}</CardTitle>
                  </div>
                  <CardDescription className="text-sm/relaxed min-h-[40px]">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8 flex-grow">
                  <div className="space-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black tracking-tighter">${tier.price}</span>
                      <span className="text-muted-foreground text-xs">/ per month</span>
                    </div>
                    <div className="w-16 h-[1px] bg-border" />
                  </div>

                  <ul className="space-y-4">
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-sm bg-foreground flex items-center justify-center">
                          <Check className="h-3 w-3 text-background" strokeWidth={4} />
                        </div>
                        <span className="text-[13px] font-medium text-foreground/80 leading-none">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="pt-8">
                  <Button
                    className={cn(
                      "w-full h-12 flex items-center justify-center gap-3 overflow-hidden group transition-all duration-500",
                      tier.popular ? "bg-black text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-black dark:hover:bg-white" : "variant-outline border-[0.5px] bg-transparent hover:bg-muted text-foreground"
                    )}
                  >
                    <span className="text-xs font-bold whitespace-nowrap">Get started for</span>
                    <div className="w-8 h-[1px] bg-current transition-all duration-500 group-hover:w-16" />
                    <span className="text-xs font-black">{tier.buttonText}</span>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12 text-xs text-muted-foreground"
        >
          Prices are in USD. Vat may apply depending on your location.
        </motion.p>
      </div>
    </div>
  )
}
