import { api } from '@/lib/axios'

export interface GetMonthRevenuesResponse {
  receipt: number
  diffFromLastMonth: number
}

export async function getMonthRevenue() {
  const response = await api.get<GetMonthRevenuesResponse>(
    '/metrics/month-receipt',
  )

  return response.data
}
