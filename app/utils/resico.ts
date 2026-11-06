export type ResicoPeriod = 'mensual' | 'anual'

export const resicoIncomeLimit = 350_000_000

export interface ResicoInputs {
  income: number
  otherIncome: number
  withheld: number
  paid: number
}

export interface ResicoResult {
  income: number
  rate: number
  tax: number
  withheld: number
  paid: number
  difference: number
}

const rates: Record<ResicoPeriod, ReadonlyArray<readonly [number, number]>> = {
  mensual: [
    [2_500_000, 100],
    [5_000_000, 110],
    [8_333_333, 150],
    [20_833_333, 200],
    [resicoIncomeLimit, 250]
  ],
  anual: [
    [30_000_000, 100],
    [60_000_000, 110],
    [100_000_000, 150],
    [250_000_000, 200],
    [resicoIncomeLimit, 250]
  ]
}

export function calculateResico(period: ResicoPeriod, input: ResicoInputs): ResicoResult {
  for (const [name, value] of Object.entries(input)) {
    if (!Number.isSafeInteger(value) || value < 0 || value > resicoIncomeLimit) {
      throw new RangeError(`Invalid RESICO input: ${name}`)
    }
  }
  if (period === 'mensual' && input.paid !== 0) {
    throw new RangeError('Monthly RESICO calculations do not include annual payments')
  }

  const income = input.income + input.otherIncome
  const bracket = rates[period].find(([limit]) => income <= limit)
  if (!bracket) throw new RangeError('RESICO income exceeds the supported limit')

  const rate = bracket[1]
  const tax = Math.round((income * rate) / 10_000)
  return {
    income,
    rate: rate / 100,
    tax,
    withheld: input.withheld,
    paid: input.paid,
    difference: tax - input.withheld - input.paid
  }
}
