interface CalculatorBase {
  title: string
  category: 'Fiscal' | 'Finanzas'
  description: string
}

interface AvailableCalculator extends CalculatorBase {
  slug: 'isr-resico-mensual'
  status: 'available'
  category: 'Fiscal'
}

interface ComingSoonCalculator extends CalculatorBase {
  status: 'coming-soon'
}

export type Calculator = AvailableCalculator | ComingSoonCalculator

export const calculators: Calculator[] = [
  {
    slug: 'isr-resico-mensual',
    status: 'available',
    title: 'ISR RESICO para personas físicas',
    category: 'Fiscal',
    description:
      'Estima el ISR mensual o anual sobre ingresos efectivamente cobrados, sin IVA ni deducciones.'
  },
  {
    status: 'coming-soon',
    title: 'Retenciones ISR e IVA - Personas Físicas',
    category: 'Fiscal',
    description: 'Estima las retenciones de ISR e IVA aplicables a personas físicas.'
  },
  {
    status: 'coming-soon',
    title: 'Calculadora de inflación',
    category: 'Finanzas',
    description: 'Consulta cómo cambia el poder adquisitivo de un importe con la inflación.'
  }
]

export const availableCalculators = calculators.filter(
  (calculator): calculator is AvailableCalculator => calculator.status === 'available'
)

export function parseDecimal(value: string, max: number): number | null {
  const trimmed = value.trim()
  if (!/^\d+(?:\.\d{1,2})?$/.test(trimmed)) return null
  const [whole = '', decimals = ''] = trimmed.split('.')
  const scaled = Number(whole) * 100 + Number(decimals.padEnd(2, '0'))
  return Number.isSafeInteger(scaled) && scaled <= max ? scaled : null
}
