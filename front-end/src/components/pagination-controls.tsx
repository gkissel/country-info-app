'use client'

import { CaretLeft, CaretRight } from '@phosphor-icons/react/dist/ssr'
import { useRouter, useSearchParams } from 'next/navigation'
import { FC } from 'react'

import { Button } from './ui/button'

interface PaginationControlsProps {
  hasNextPage: boolean
  hasPrevPage: boolean
  total: number
  actualPage: string
}

const PaginationControls: FC<PaginationControlsProps> = ({
  hasNextPage,
  hasPrevPage,
  total,
  actualPage,
}) => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = searchParams.get('page') ?? '1'
  const perPage = searchParams.get('per_page') ?? '12'

  return (
    <div className="flex flex-col py-2 items-center gap-2 w-full">
      <p>You are on page</p>
      <div className="flex items-center gap-3">
        <Button
          size="icon"
          className="border"
          disabled={!hasPrevPage}
          onClick={() => {
            router.push(
              `/${actualPage}/?page=${Number(page) - 1}&per_page=${perPage}`,
            )
          }}
        >
          <CaretLeft className="h-full w-full" />
        </Button>

        <div>
          {page} / {Math.ceil(total / Number(perPage))}
        </div>

        <Button
          size="icon"
          disabled={!hasNextPage}
          className="border"
          onClick={() => {
            router.push(
              `/${actualPage}/?page=${Number(page) + 1}&per_page=${perPage}`,
            )
          }}
        >
          <CaretRight className="h-full w-full" />
        </Button>
      </div>
    </div>
  )
}

export default PaginationControls
