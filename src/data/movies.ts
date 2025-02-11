type Movie = {
    type: Genre[],
    name: string,
    image: string,
    comment: comment[]
};

type Genre = 'romance' | 'comedy' | 'drama' | 'other';

type comment = {
    name: string,
    text: string
};

const data: Movie[] = [
    {
        type: ['romance'],
        name: 'Quatro Amigas e um Jeans Viajante',
        image: 'public/movies/images/4_amigas_jeans_viajante.jpg',
        comment: [
            {
              name: "Alice",
              text: "A masterpiece!"
            },
            {
              name: "Bob",
              text: "Incrível! Um dos melhores filmes."
            }
          ]
    },

    {
        type: ['comedy'],
        name: '17 Outra Vez',
        image: 'public/movies/images/17_Again.jpg',
        comment: []
    },

    {
        type: ['romance'],
        name: 'Brilho Eterno de uma Mente sem Lembranças',
        image: 'public/movies/images/brilho_eterno.jpg',
        comment: []
    },

    {
        type: ['romance', 'comedy'],
        name: 'Como Perder um Homem em 10 Dias',
        image: 'public/movies/images/como_perder_um_homem_em_10_dias.jpg',
        comment: []
    },

    {
        type: ['romance', 'comedy'],
        name: 'Como Se Fosse a Primeira Vez',
        image: 'public/movies/images/como_se_fosse_a_primeira_vez.jpg',
        comment: []
    },

    {
        type: ['romance', 'comedy'],
        name: 'De Repente 30',
        image: 'public/movies/images/de_repente_30.jpg',
        comment: []
    }, 

    {
        type: ['romance', 'comedy'],
        name: 'Diário de uma Paixão',
        image: 'public/movies/images/diario_de_uma_paixao.jpg',
        comment: []
    }, 

    {
        type: ['comedy'],
        name: 'O Diário da Princesa',
        image: 'public/movies/images/diario_de_uma_princesa.jpg',
        comment: []
    }, 

    {
        type: ['comedy'],
        name: 'Encantada',
        image: 'public/movies/images/encantada.jpg',
        comment: []
    }, 

    {
        type: ['comedy'],
        name: 'Herbie - Meu Fusca Turbinado',
        image: 'public/movies/images/herbie_meu_fusca_turbinado.jpg',
        comment: []
    }, 

    {
        type: ['romance', 'comedy'],
        name: 'Sorte no Amor',
        image: 'public/movies/images/just_my_luck.jpg',
        comment: []
    }, 

    {
        type: ['romance', 'comedy'],
        name: 'Legalmente Loira',
        image: 'public/movies/images/legalmente_loira.jpg',
        comment: []
    }, 

    {
        type: ['comedy'],
        name: 'Meninas Malvadas',
        image: 'public/movies/images/meninas_malvadas.jpg',
        comment: []
    }, 

    {
        type: ['comedy'],
        name: 'O Amor É Cego',
        image: 'public/movies/images/o_amor_e_cego.jpg',
        comment: []
    }, 

    {
        type: ['comedy', 'drama'],
        name: 'O Diabo Veste Prada',
        image: 'public/movies/images/o_diabo_veste_prada.jpg',
        comment: []
    }, 

    {
        type: ['romance'],
        name: 'P.S. Eu Te Amo',
        image: 'public/movies/images/P_s_i_love_you.jpg',
        comment: []
    }, 

    {
        type: ['romance'],
        name: 'Orgulho e Preconceito',
        image: 'public/movies/images/Pride_and_Prejudice.jpg',
        comment: []
    }, 

    {
        type: ['comedy'],
        name: 'Sexta-Feira Muito Louca',
        image: 'public/movies/images/sexta_feira_muito_louca.jpg',
        comment: []
    }, 

    {
        type: ['comedy'],
        name: 'Superbad',
        image: 'public/movies/images/super_bad.jpg',
        comment: []
    },

    {
        type: ['romance', 'comedy'],
        name: 'A Proposta',
        image: 'public/movies/images/The_Proposal.jpg',
        comment: []
    },

    {
        type: ['romance', 'comedy'],
        name: 'Vestida para Casar',
        image: 'public/movies/images/vestida_para_casar.jpg',
        comment: []
    },
];

