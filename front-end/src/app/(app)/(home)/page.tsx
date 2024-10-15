import { MagnifyingGlass } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

import PaginationControls from '@/components/pagination-controls'
import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { getAvailableCountriesAction } from '@/server/actions/country'
export default async function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const page = searchParams.page ?? '1'
  const perPage = searchParams.per_page ?? '12'

  const countries = await getAvailableCountriesAction()

  const start = (Number(page) - 1) * Number(perPage)
  const end = start + Number(perPage)

  const entries = countries.slice(start, end)

  return (
    <div className="bg-primary py-8 xl:py-20 min-h-screen w-full text-primary-foreground px-5 xl:px-0">
      <div className="w-full mx-auto max-w-7xl">
        <h1 className="text-primary-foreground text-3xl pb-10">Countries</h1>
      </div>
      <div className="w-full flex gap-2 flex-col max-w-7xl mx-auto border rounded ">
        <Table className="">
          <TableHeader>
            <TableRow>
              <TableHead className="w-[120px] border-r">Country Code</TableHead>
              <TableHead className="">Country Name</TableHead>
              <TableHead className="text-right">More info</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="border-b">
            {entries.map((country) => (
              <TableRow key={country.countryCode + country.name}>
                <TableCell className="font-medium border-r w-[100px]">
                  {country.countryCode}
                </TableCell>

                <TableCell>{country.name}</TableCell>

                <TableCell className="text-right">
                  <Button
                    size="icon"
                    className="text-right border border-primary-foreground/45 hover:border-primary-foreground"
                  >
                    <Link
                      href={`/country/${country.countryCode}`}
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
        <div className="w-full">
          <PaginationControls
            actualPage=""
            hasNextPage={end < countries.length}
            hasPrevPage={start > 0}
            total={countries.length}
          />
        </div>
      </div>
    </div>
  )
}
