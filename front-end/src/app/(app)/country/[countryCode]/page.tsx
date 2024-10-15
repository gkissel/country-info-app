import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getCountryInfo } from '@/http/country/get-country-info'
import { getAvailableCountriesAction } from '@/server/actions/country'

import { PopulationChart } from './components/population-chart'

export async function generateStaticParams() {
  const countries = await getAvailableCountriesAction()
  return countries.map(({ countryCode }) => ({ countryCode }))
}

export default async function Home({
  params,
}: {
  params: { countryCode: string }
}) {
  const { name, flag, borders, populationCounts } = await getCountryInfo({
    countryCode: params.countryCode,
  })

  return (
    <div className="bg-primary py-8 xl:py-10 min-h-screen w-full text-primary-foreground px-5 xl:px-0 space-y-10">
      <div className="w-full mx-auto max-w-7xl flex-col lg:flex-row gap-4 flex lg:justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-primary-foreground text-3xl">{name}</h1>
          <Image
            src={flag}
            alt={name}
            width={400}
            height={400}
            className="w-48 lg:w-80"
          />
        </div>

        <div className="p-2 border h-fit rounded">
          <Table className="">
            <TableCaption>Countries that border {name}</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[120px] border-r">
                  Country Code
                </TableHead>
                <TableHead className="border-r">Country Name</TableHead>
                <TableHead className="border-r">Region</TableHead>
                <TableHead className="text-right">More info</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {borders.map((border) => (
                <TableRow key={border.commonName + name}>
                  <TableCell className="font-medium border-r w-[100px]">
                    {border.countryCode}
                  </TableCell>

                  <TableCell className="border-r">
                    {border.commonName}
                  </TableCell>

                  <TableCell className="border-r">{border.region}</TableCell>

                  <TableCell className="text-right">
                    <Button
                      size="icon"
                      className="text-right border border-primary-foreground/45 hover:border-primary-foreground"
                    >
                      <Link
                        href={`/country/${border.countryCode}`}
                        className="w-full flex items-center justify-center h-full"
                      >
                        <MagnifyingGlass />
                      </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
      <div className="w-full flex gap-2 flex-col max-w-7xl mx-auto">
        <PopulationChart populationCounts={populationCounts} name={name} />
      </div>
    </div>
  )
}
