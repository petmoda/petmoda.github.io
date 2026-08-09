export interface Activity {
  id: number
  tag: string
  name: string
  description: string
  href?: string
  imageSrc?: string
  gradient: string
}

export const ACTIVITIES = Object.freeze<Activity[]>([
  {
    id: 1,
    tag: 'Evento',
    name: 'Semana Acadêmica de Moda',
    description:
      'A Semana Acadêmica de Moda (SAM) é um evento gratuito e aberto ao público, idealizado e realizado pelo PET Moda UFC. Criada para fortalecer a produção acadêmica e ampliar os espaços de diálogo na universidade, a SAM oferece aos estudantes a oportunidade de apresentar pesquisas e compartilhar conhecimentos com a comunidade. A cada edição, a SAM é organizada a partir de uma temática específica, que orienta as atividades e estimula reflexões sobre diferentes questões contemporâneas relacionadas ao campo da moda. A programação reúne apresentações de trabalhos, minicursos, oficinas e mesas-redondas que promovem discussões sobre moda a partir de diferentes perspectivas, incluindo áreas como arte, cultura, sociedade e fazeres manuais, incentivando a troca de experiências entre estudantes, pesquisadores, profissionais e público em geral.',
    gradient:
      'linear-gradient(140deg, var(--color-primary) 0%, var(--color-primary-dark) 100%)',
  },
  {
    id: 2,
    tag: 'Oficina',
    name: 'PET Grupos',
    description:
      'Os Pet Grupos são minicursos abertos promovidos pelo PET Moda UFC com o objetivo de promover conversas, aprendizados e trocas de conhecimentos sobre temas relacionados à arte, à moda, à cultura e à pesquisa. Realizadas durante o segundo semestre do ano, essas oficinas são planejadas e ministradas pelos(as) petianos(as), que escolhem livremente um tema de seu interesse pessoal para compartilhar com o público. A iniciativa busca incentivar o intercâmbio de saberes, a construção coletiva do conhecimento e o diálogo entre a universidade e a sociedade. As atividades são abertas à comunidade. Para participar, basta realizar a inscrição na oficina de seu interesse.',
    gradient: 'linear-gradient(140deg, var(--color-green) 0%, #0c3d2e 100%)',
  },
])
