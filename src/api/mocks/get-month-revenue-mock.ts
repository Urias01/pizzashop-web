import { http, HttpResponse } from 'msw'

import { GetMonthRevenuesResponse } from '../get-month-revenue'

export const getMonthRevenueMock = http.get<
  never,
  never,
  GetMonthRevenuesResponse
>('/metrics/month-receipt', () => {
  return HttpResponse.json({
    receipt: 20,
    diffFromLastMonth: -5,
  })
})
