
exports.seed = function (knex, Promise) {
      return knex('books').insert([
        {
          id: 10001,
          title: 'Father Brown collection of short stories',
          blurb: 'Father Brown is a Catholic Priest and amateur detective. Collection of short stories published 1910 to 1935.',
          yearPublished: '1910', procured: 'false', dateProcured: '01/01/2019'
        },
        {
          id: 10002,
          title: 'Man in the High Castle',
          blurb: 'Set in 1962, fifteen years after an alternative ending to World War II, in which America is ruled by the victorious Axis Powers.',
          yearPublished: '1962', procured: 'false', dateProcured: '01/01/2019'
        },
        {
          id: 10003,
          title: 'Coffee will make you black',
          blurb: 'About an African-American Girl growing up in 1960s America.',
          yearPublished: '1995', procured: 'false', dateProcured: '01/01/2019'
        },
        {
          id: 10004,
          title: 'The Invention of Wings',
          blurb: 'Story of two halves, Hetty "Handful" Grimke, a slave and Grimke\'s daughter Sarah and their search for freedom. Set during the slavery years and loosely based on the life of Sarah Grimke an abolitionist and women\'s rights pioneer.',
          yearPublished: '2014', procured: 'false', dateProcured: '01/01/2019'
        },
        {
          id: 10005,
          title: 'The Secret Life of Bees',
          blurb: 'A coming of age story about loss and betrayal.',
          yearPublished: '2001', procured: 'false', dateProcured: '01/01/2019'
        },
        {
          id: 10006,
          title: 'How to escape from prison: the remarkable story of how one man defied the odd',
          blurb: 'How to escape from prison chronicles Paul\'s road to redemption and a new life as a doctor of psychology.',
          yearPublished: '2019', procured: 'false', dateProcured: '01/01/2019'
        },
        {
          id: 10007,
          title: 'Talking to my daughter about the economy',
          blurb: 'A brief history of Capitalism.\nYanis Varoufakis\'s letter to his daughter.The world-renowned economist uses vivid and accessible stories to explain what economics is and why it is so dangerous.',
          yearPublished: '2013', procured: 'false', dateProcured: '01/01/2019'
        },
        {
          id: 10008,
          title: 'Catcher in the Rye',
          blurb: 'Two days in the life of 16-year-old Holden after he is expelled form prep school.',
          yearPublished: '1951', procured: 'false', dateProcured: '01/01/2019'
        },
        {
          id: 10009,
          title: 'Double entry: How the Merchants of Venice created modern finance',
          blurb: 'A well researched and insightful account of the life and times of Luca Pacioli, credited with the revolutionary introduction of double entry bookkeeping',
          yearPublished: '2011', procured: 'false', dateProcured: '01/01/2019'
        },
        {
          id: 10010,
          title: 'The Bluest Eyes',
          blurb: 'The novel tells the story of a young black girl who grows up during the years following the Great Depression.',
          yearPublished: '1970', procured: 'false', dateProcured: '01/01/2019'
        },
      ]);
    };
