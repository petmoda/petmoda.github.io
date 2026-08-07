export type PublicationType = 'PAPER' | 'ABSTRACT' | 'CONFERENCE_PROCEEDINGS'

export interface Publication {
  id: number
  type: PublicationType
  title: string
  authors: string[]
  venue: string
  year: number
  url?: string
}

export const PUBLICATIONS = Object.freeze<Publication[]>([
  // Volumes dos Anais da Semana Acadêmica de Moda (SAM)
  {
    id: 1,
    type: 'CONFERENCE_PROCEEDINGS',
    title: 'Anais 2014, v.1, n.1',
    authors: [],
    venue:
      'III Semana Acadêmica de Moda – Moda encontra arte, arte encontra moda',
    year: 2014,
    url: 'https://drive.google.com/file/d/1zQRx1ZTzd9_Q8l-PDlZnPbJzkAqALUjR/view',
  },
  {
    id: 2,
    type: 'CONFERENCE_PROCEEDINGS',
    title: 'Anais 2015, v.2, n.2',
    authors: [],
    venue:
      'IV Semana Acadêmica de Moda – Autoral: Identidade, inovação e mercado',
    year: 2015,
    url: 'https://drive.google.com/file/d/1c_3dYLRVqOP3uIS6u5wUL4IMr2d5WNhj/view',
  },
  {
    id: 3,
    type: 'CONFERENCE_PROCEEDINGS',
    title: 'Anais 2016, v.3, n.3',
    authors: [],
    venue: 'V Semana Acadêmica de Moda – Destecendo gênero',
    year: 2016,
    url: 'https://drive.google.com/file/d/1N_yLHqcnJ4RELvFQeV-N-6T9-wpB53sJ/view',
  },
  {
    id: 4,
    type: 'CONFERENCE_PROCEEDINGS',
    title: 'Anais 2017, v.4, n.4',
    authors: [],
    venue:
      'VI Semana Acadêmica de Moda – Coexistir: Consumo, sustentabilidade e moda',
    year: 2017,
    url: 'https://drive.google.com/file/d/1CTh9ErLiGWpjaz4UJeudQidlF47VVE6W/view',
  },
  {
    id: 5,
    type: 'CONFERENCE_PROCEEDINGS',
    title: 'Anais 2018, v.5, n.5',
    authors: [],
    venue: 'VII Semana Acadêmica de Moda – Moda, memória, resistência',
    year: 2018,
    url: 'https://drive.google.com/file/d/1clgNSB1gslwUj1OVzVnW_mny0vFvagNb/view',
  },
  {
    id: 6,
    type: 'CONFERENCE_PROCEEDINGS',
    title: 'Anais 2019, v.6, n.6',
    authors: [],
    venue:
      'VIII Semana Acadêmica de Moda – Ressignificar: Quando a cultura entra na moda',
    year: 2019,
    url: 'https://drive.google.com/file/d/1y6pJ8X4bP9OtSJVWVuamMEfUnZCOfa5e/view',
  },
  {
    id: 7,
    type: 'CONFERENCE_PROCEEDINGS',
    title: 'Anais 2021, v.7, n.7',
    authors: [],
    venue: 'X Semana Acadêmica de Moda – Análogo X Digital: Dualidades na Moda',
    year: 2021,
    url: 'https://drive.google.com/file/d/155yyO8aj-ZXRBKRsFpBV9Zc6PeQdXnVn/view',
  },
  {
    id: 8,
    type: 'CONFERENCE_PROCEEDINGS',
    title: 'Anais 2022, v.8, n.8',
    authors: [],
    venue:
      'XI Semana Acadêmica de Moda – Moda em desconstrução: É tempo de repensar',
    year: 2022,
    url: 'https://drive.google.com/file/d/1XbO5UCdEg1h--LdI6IiFE_pPcKKsBBlX/view',
  },
  {
    id: 9,
    type: 'CONFERENCE_PROCEEDINGS',
    title: 'Anais 2023, v.9, n.9',
    authors: [],
    venue:
      'XII Semana Acadêmica de Moda – Além das fronteiras da moda: Diálogos possíveis',
    year: 2023,
    url: 'https://drive.google.com/file/d/1AAol_G8oC9AnJLCTGDEAZQ89fgEMOacG/view',
  },
  {
    id: 10,
    type: 'CONFERENCE_PROCEEDINGS',
    title: 'Anais 2024, v.10, n.10',
    authors: [],
    venue:
      'XIII Semana Acadêmica de Moda – Além do vestir: Linguagem social da moda',
    year: 2024,
    url: 'https://drive.google.com/file/d/1xQn3L7IGbAS4WZHScnjUAWuASbv1QVfz/view',
  },
  {
    id: 11,
    type: 'CONFERENCE_PROCEEDINGS',
    title: 'Anais 2025, v.11, n.11',
    authors: [],
    venue:
      'XIV Semana Acadêmica de Moda – Vestindo memórias: Saberes, ausências e afetos',
    year: 2025,
    url: 'https://ica.ufc.br/wp-content/uploads/2025/11/anais-sam-xiv.pdf',
  },
  // Publicações individuais
  {
    id: 12,
    type: 'CONFERENCE_PROCEEDINGS',
    title:
      'Distorção do significado da bandeira do Brasil e blusa da seleção brasileira por Bolsonaro',
    authors: [
      'Sarah Jessica Dias da Fonseca',
      'Naiara Emilly Cavalcante da Silva',
      'Francisca Raimunda Nogueira Mendes',
    ],
    venue: '20º Colóquio de Moda',
    year: 2025,
    url: 'https://anais.abepem.org/getTrabalhos?chave=DISTOR%C3%87%C3%83O+DO+SIGNIFICADO+DA+BANDEIRA+DO+BRASIL+E+BLUSA+DA+SELE%C3%87%C3%83O+BRASILEIRA+POR+BOLSONARO&search_column=titulo',
  },
  {
    id: 13,
    type: 'CONFERENCE_PROCEEDINGS',
    title:
      'A retomada da blusa azul da seleção brasileira de futebol pelos brasileiros, após a distorção de significado de símbolos nacionais por Bolsonaro',
    authors: [
      'Naiara Emilly Cavalcante da Silva',
      'Sarah Jessica Dias da Fonseca',
      'Francisca Raimunda Nogueira Mendes',
    ],
    venue: 'XIV Semana Acadêmica de Moda',
    year: 2025,
    url: 'https://ica.ufc.br/wp-content/uploads/2025/11/anais-sam-xiv.pdf',
  },
  {
    id: 14,
    type: 'ABSTRACT',
    title:
      'Apropriação e distorção de símbolos nacionais em campanhas políticas e seus efeitos na coletividade',
    authors: [
      'Sarah Jessica Dias da Fonseca',
      'Naiara Emilly Cavalcante da Silva',
      'Francisca Raimunda Nogueira Mendes',
    ],
    venue:
      'Encontros Universitários da UFC – XII Encontro de Programas de Educação Tutorial',
    year: 2025,
  },
  {
    id: 15,
    type: 'CONFERENCE_PROCEEDINGS',
    title:
      'Evocando a nostalgia: O olfato como estratégia de consumo na marca Melissa',
    authors: [
      'Fernanda Malena Castro Dantas',
      'Sophia Araújo Garcez',
      'Francisca Raimunda Nogueira Mendes',
    ],
    venue:
      'XIV Semana Acadêmica de Moda – Vestindo memórias: Saberes, ausências e afetos',
    year: 2025,
    url: 'https://ica.ufc.br/wp-content/uploads/2025/11/anais-sam-xiv.pdf',
  },
  {
    id: 16,
    type: 'ABSTRACT',
    title:
      'Entre inovação e tradição: A reutilização de símbolos da marca na estreia de JW Anderson para Dior',
    authors: [
      'Fernanda Malena Castro Dantas',
      'Sophia Araújo Garcez',
      'Francisca Raimunda Nogueira Mendes',
    ],
    venue:
      'Encontros Universitários da UFC – XII Encontro de Programas de Educação Tutorial',
    year: 2025,
  },
  {
    id: 17,
    type: 'CONFERENCE_PROCEEDINGS',
    title:
      'Consumo e nostalgia: Análise da campanha "Sempre igual, sempre diferente" da Melissa',
    authors: [
      'Fernanda Malena Castro Dantas',
      'Sophia Araújo Garcez',
      'Francisca Raimunda Nogueira Mendes',
    ],
    venue: '20º Colóquio de Moda',
    year: 2025,
  },
  {
    id: 18,
    type: 'CONFERENCE_PROCEEDINGS',
    title:
      'Os concursos de beleza e as representações de padrões estéticos no filme Dumplin',
    authors: [
      'Alícia Paixão Oliveira',
      'Luísa Nunes Franco',
      'Francisca Raimunda Nogueira Mendes',
    ],
    venue:
      'XIV Semana Acadêmica de Moda – Vestindo memórias: Saberes, ausências e afetos',
    year: 2025,
    url: 'https://ica.ufc.br/wp-content/uploads/2025/11/anais-sam-xiv.pdf',
  },
  {
    id: 19,
    type: 'CONFERENCE_PROCEEDINGS',
    title:
      'Conhece ou é: O filme DUFF e a relação dos padrões de beleza com o corpo feminino',
    authors: [
      'Alícia Paixão Oliveira',
      'Luísa Nunes Franco',
      'Francisca Raimunda Nogueira Mendes',
    ],
    venue: '20º Colóquio de Moda',
    year: 2025,
    url: 'https://anais.abepem.org/getTrabalhos?chave=conhece+ou+%C3%A9&search_column=titulo',
  },
])
