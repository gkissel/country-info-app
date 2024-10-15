'use client'

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'

export const description = 'A bar chart'

export function PopulationChart({
  populationCounts,
  name,
}: {
  populationCounts: {
    value: number
    year: number
  }[]
  name: string
}) {
  const chartConfig = {
    desktop: {
      label: 'Desktop',
      color: 'hsl(var(--chart-1))',
    },
  } satisfies ChartConfig

  return (
    <Card>
      <CardHeader>
        <CardTitle>Population of {name}</CardTitle>
        <CardDescription>
          {populationCounts[0]?.year} -{' '}
          {populationCounts[populationCounts.length - 1]?.year}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={populationCounts}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="value" fill="var(--color-desktop)" radius={8} />
            <YAxis dataKey="value" tickLine={true} axisLine={true} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
