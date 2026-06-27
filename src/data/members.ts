export interface Member {
  id: number
  initials: string
  name: string
  role: string
  bio: string
  researchArea: string
  gradient: string
}

export const MEMBERS = Object.freeze<Member[]>([
  {
    id: 1,
    initials: 'AL',
    name: 'Profa. Dra. Ana Lima',
    role: 'Tutora',
    bio: 'Professora do curso de Design-Moda da UFC, doutora em Artes pela UFMG. Pesquisa moda, identidade cultural e processos criativos no Nordeste brasileiro.',
    researchArea: 'Identidade & Cultura',
    gradient: 'linear-gradient(155deg, #7d1621 0%, #600611 100%)',
  },
  {
    id: 2,
    initials: 'MF',
    name: 'Maria Fernanda Costa',
    role: 'Bolsista PET',
    bio: 'Mestranda em Design pela UFC. Investiga a relação entre sustentabilidade e design de moda, com ênfase em práticas têxteis agroecológicas.',
    researchArea: 'Sustentabilidade',
    gradient: 'linear-gradient(155deg, #1a1a1a 0%, #3a3a3a 100%)',
  },
  {
    id: 3,
    initials: 'JV',
    name: 'João Victor Santos',
    role: 'Bolsista PET',
    bio: 'Graduando em Design-Moda. Pesquisa a moda nordestina como expressão de resistência cultural e identidade territorial no Ceará.',
    researchArea: 'Moda & Território',
    gradient: 'linear-gradient(155deg, #bb441f 0%, #7a2a0d 100%)',
  },
  {
    id: 4,
    initials: 'LM',
    name: 'Larissa Menezes',
    role: 'Bolsista PET',
    bio: 'Graduanda em Design-Moda. Pesquisa moda e inclusão, com foco em acessibilidade e representatividade nos processos de criação.',
    researchArea: 'Moda & Inclusão',
    gradient: 'linear-gradient(155deg, #166d4e 0%, #0c3d2e 100%)',
  },
  {
    id: 5,
    initials: 'BF',
    name: 'Beatriz Farias',
    role: 'Bolsista PET',
    bio: 'Graduanda em Design-Moda. Estuda editorial de moda e fotografia como linguagens críticas e artísticas contemporâneas.',
    researchArea: 'Editorial de Moda',
    gradient: 'linear-gradient(155deg, #a62333 0%, #600611 100%)',
  },
  {
    id: 6,
    initials: 'RA',
    name: 'Renata Alves',
    role: 'Bolsista PET',
    bio: 'Graduanda em Design-Moda. Pesquisa os vínculos entre moda, arte e feminismos, investigando práticas de criação coletiva e performativas.',
    researchArea: 'Moda & Arte',
    gradient: 'linear-gradient(155deg, #333 0%, #111 100%)',
  },
])
