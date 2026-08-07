export type CallStatus = 'OPEN' | 'CLOSED'

export interface Call {
  id: number
  status: CallStatus
  title: string
  deadline?: string
  link?: {
    href: string
    label: string
  }
}

export const CALLS = Object.freeze<Call[]>([
  {
    id: 1,
    status: 'CLOSED',
    title: 'Edital da XV Semana Acadêmica de Moda',
    deadline: 'Inscrições até 1 de agosto de 2026',
    link: {
      href: 'https://canva.link/uas7jzle0xi4m2w',
      label: 'Acessar edital',
    },
  },
  {
    id: 2,
    status: 'CLOSED',
    title: 'Edital de Seleção do PET-Moda',
  },
])
