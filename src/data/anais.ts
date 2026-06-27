export type PublicationType = 'PAPER' | 'ABSTRACT' | 'CONFERENCE_PROCEEDINGS'

export interface Publication {
  id: number
  type: PublicationType
  title: string
  authors: string[]
  venue: string
  year: number
  url: string
}

export const PUBLICATIONS = Object.freeze<Publication[]>([
  {
    id: 1,
    type: 'PAPER',
    title: 'Moda e identidade cultural no Nordeste brasileiro',
    authors: ['Maria Fernanda Costa', 'Ana Lima'],
    venue: 'Colóquio de Moda',
    year: 2023,
    url: '#',
  },
])
