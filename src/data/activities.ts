export interface Activity {
  id: number
  tag: string
  name: string
  description: string
  href: string
  gradient: string
}

export const ACTIVITIES = Object.freeze<Activity[]>([
  {
    id: 1,
    tag: 'Revista Digital',
    name: 'PET Magazine',
    description:
      'Publicação digital com curadoria de tendências, análises críticas e produções editoriais produzidas pelos membros do grupo. Lançada semestralmente, aborda moda, arte e cultura nordestina sob perspectiva acadêmica.',
    href: '#atividades',
    gradient:
      'linear-gradient(140deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
  },
  {
    id: 2,
    tag: 'Evento Anual',
    name: 'Semana de Moda UFC',
    description:
      'Evento de referência no calendário acadêmico da UFC, reunindo palestras, workshops, mesas-redondas e desfiles com profissionais e pesquisadores do campo da moda e do design contemporâneo.',
    href: '#atividades',
    gradient: 'linear-gradient(140deg, var(--color-green) 0%, #0c3d2e 100%)',
  },
  {
    id: 3,
    tag: 'Extensão',
    name: 'Oficinas de Modelagem Sustentável',
    description:
      'Série de oficinas gratuitas abertas à comunidade, com foco em técnicas de modelagem, upcycling e construção de peças com materiais sustentáveis. Realizadas mensalmente no campus do Benfica.',
    href: '#atividades',
    gradient: 'linear-gradient(140deg, var(--color-terra) 0%, #7a2a0d 100%)',
  },
])
