export type CallStatus = 'OPEN' | 'CLOSED'

export interface Call {
  id: number
  status: CallStatus
  title: string
  deadline: string
  href: string
  linkLabel: string
}

export const CALLS = Object.freeze<Call[]>([
  {
    id: 1,
    status: 'OPEN',
    title: 'Edital de Seleção de Novos Membros 2026.2',
    deadline: 'Inscrições até 31 de julho de 2026 · Curso de Design-Moda UFC',
    href: '/editais/edital-selecao-novos-membros-2026-2.html',
    linkLabel: 'Acessar edital',
  },
  {
    id: 2,
    status: 'OPEN',
    title: 'Submissão de Artigos — Colóquio de Moda 2026',
    deadline: 'Prazo: 15 de agosto de 2026 · Tema: Corpos, afetos e moda',
    href: '/editais/submissao-artigos-coloquio-moda-2026.html',
    linkLabel: 'Acessar edital',
  },
  {
    id: 3,
    status: 'CLOSED',
    title: 'Apoio a Projetos de Extensão em Moda — UFC/PIBEX',
    deadline: 'Encerrado em 30 de março de 2026 · Resultado disponível',
    href: '/editais/resultado-apoio-projetos-extensao-moda-ufc-pibex.html',
    linkLabel: 'Ver resultado',
  },
])
