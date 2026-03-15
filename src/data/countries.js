export const countries = [
  // EUROPE
  { id: 1, name: "Portugal", code: "pt" },
  { id: 2, name: "France", code: "fr" },
  { id: 3, name: "Italy", code: "it" },
  { id: 4, name: "Spain", code: "es" },
  { id: 5, name: "United Kingdom", code: "gb" },
  { id: 6, name: "Germany", code: "de" },

  // AMERICAS
  { id: 7, name: "Brazil", code: "br" },
  { id: 8, name: "USA", code: "us" },
  { id: 9, name: "Argentina", code: "ar" },
  { id: 10, name: "Mexico", code: "mx" },
  { id: 11, name: "Canada", code: "ca" },

  // AFRICA (PALOP & Others)
  { id: 12, name: "Angola", code: "ao" },
  { id: 13, name: "Cape Verde", code: "cv" },
  { id: 14, name: "Mozambique", code: "mz" },
  { id: 15, name: "Guinea-Bissau", code: "gw" },
  { id: 16, name: "São Tomé and Príncipe", code: "st" },
  { id: 17, name: "South Africa", code: "za" },

  // ASIA & OCEANIA
  { id: 18, name: "Japan", code: "jp" },
  { id: 19, name: "China", code: "cn" },
  { id: 20, name: "Thailand", code: "th" },
  { id: 21, name: "Australia", code: "au" },
];

export const quizData = {
  Portugal: [
    {
      q: "What is the capital of Portugal?",
      o: ["Porto", "Lisbon", "Coimbra", "Braga"],
      a: "Lisbon",
    },
    {
      q: "Who wrote the epic poem 'Os Lusíadas'?",
      o: ["Pessoa", "Saramago", "Camões", "Queirós"],
      a: "Camões",
    },
    {
      q: "What is a typical bread-based dish from the Alentejo region?",
      o: ["Francesinha", "Açorda", "Bacalhau à Brás", "Cozido"],
      a: "Açorda",
    },
    {
      q: "In which year did the Carnation Revolution take place?",
      o: ["1910", "1974", "1945", "1986"],
      a: "1974",
    },
    {
      q: "Which of these islands belongs to the Azores?",
      o: ["Madeira", "Porto Santo", "Terceira", "Deserta"],
      a: "Terceira",
    },
  ],
  France: [
    {
      q: "What is the most visited museum in Paris?",
      o: ["Orsay", "Louvre", "Pompidou", "Rodin"],
      a: "Louvre",
    },
    {
      q: "What is the nickname of the French national football team?",
      o: ["La Roja", "Les Bleus", "Azzurra", "Orange"],
      a: "Les Bleus",
    },
    {
      q: "Who was the French heroine in the Hundred Years' War?",
      o: ["Marie Antoinette", "Joan of Arc", "Coco Chanel", "Edith Piaf"],
      a: "Joan of Arc",
    },
    {
      q: "Which river flows through Paris?",
      o: ["Rhône", "Loire", "Seine", "Garonne"],
      a: "Seine",
    },
    {
      q: "Which of these cheeses is of French origin?",
      o: ["Mozzarella", "Cheddar", "Brie", "Gouda"],
      a: "Brie",
    },
  ],
  Brazil: [
    {
      q: "What is the capital of Brazil?",
      o: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
      a: "Brasília",
    },
    {
      q: "What is the largest Brazilian state by area?",
      o: ["São Paulo", "Amazonas", "Minas Gerais", "Bahia"],
      a: "Amazonas",
    },
    {
      q: "Who proclaimed the Independence of Brazil?",
      o: ["Cabral", "Dom Pedro I", "Vargas", "Tiradentes"],
      a: "Dom Pedro I",
    },
    {
      q: "Which musical rhythm was born in the hills of Rio de Janeiro?",
      o: ["Sertanejo", "Samba", "Axé", "Forró"],
      a: "Samba",
    },
    {
      q: "What is the official currency of Brazil?",
      o: ["Peso", "Dollar", "Real", "Cruzeiro"],
      a: "Real",
    },
  ],
  Angola: [
    {
      q: "What is the capital of Angola?",
      o: ["Benguela", "Huambo", "Luanda", "Lubango"],
      a: "Luanda",
    },
    {
      q: "Which desert extends through southern Angola?",
      o: ["Sahara", "Namib", "Kalahari", "Gobi"],
      a: "Namib",
    },
    {
      q: "What is the official language of Angola?",
      o: ["Umbundu", "Kimbundu", "Portuguese", "French"],
      a: "Portuguese",
    },
    {
      q: "The 'Kalandula Falls' are famous...?",
      o: ["Mountains", "Waterfalls", "Ancient Cities", "Caves"],
      a: "Waterfalls",
    },
    {
      q: "Which tree is a national symbol of Angola?",
      o: ["Cork Oak", "Baobab", "Palm Tree", "Pine"],
      a: "Baobab",
    },
  ],
  "Guinea-Bissau": [
    {
      q: "What is the capital of Guinea-Bissau?",
      o: ["Bafatá", "Gabú", "Bissau", "Cacheu"],
      a: "Bissau",
    },
    {
      q: "What is the official language of Guinea-Bissau?",
      o: ["French", "Portuguese", "English", "Spanish"],
      a: "Portuguese",
    },
    {
      q: "Which of these is a famous archipelago in Guinea-Bissau?",
      o: ["Azores", "Bijagós", "Canary Islands", "Cape Verde"],
      a: "Bijagós",
    },
    {
      q: "Who was the main leader of the independence movement?",
      o: [
        "Amílcar Cabral",
        "Agostinho Neto",
        "Samora Machel",
        "Eduardo Mondlane",
      ],
      a: "Amílcar Cabral",
    },
    {
      q: "Guinea-Bissau is a top global exporter of which nut?",
      o: ["Walnut", "Cashew Nut", "Peanut", "Almond"],
      a: "Cashew Nut",
    },
  ],
  "Cape Verde": [
    {
      q: "What is the capital of Cape Verde?",
      o: ["Mindelo", "Praia", "Espargos", "Assomada"],
      a: "Praia",
    },
    {
      q: "Who was known as the 'Barefoot Diva'?",
      o: ["Mayra Andrade", "Cesária Évora", "Lura", "Tito Paris"],
      a: "Cesária Évora",
    },
    {
      q: "How many inhabited islands make up the archipelago?",
      o: ["5", "7", "9", "12"],
      a: "9",
    },
    {
      q: "Which island is home to an active volcano?",
      o: ["Sal", "Boa Vista", "Fogo", "Santo Antão"],
      a: "Fogo",
    },
    {
      q: "What is the national dish of Cape Verde?",
      o: ["Muamba", "Cachupa", "Feijoada", "Calulu"],
      a: "Cachupa",
    },
  ],
  Mozambique: [
    {
      q: "What is the capital of Mozambique?",
      o: ["Beira", "Nampula", "Maputo", "Pemba"],
      a: "Maputo",
    },
    {
      q: "Who was the famous Mozambican-born footballer who starred for Benfica?",
      o: ["Mário Coluna", "Eusébio", "Hilário", "Chiquinho Conde"],
      a: "Eusébio",
    },
    {
      q: "What is the name of the famous archipelago in the north of the country?",
      o: ["Bazaruto", "Quirimbas", "Anahambane", "Seychelles"],
      a: "Quirimbas",
    },
    {
      q: "What is the country's main historical island?",
      o: [
        "Island of Mozambique",
        "Ibo Island",
        "Inhaca Island",
        "Xefina Island",
      ],
      a: "Island of Mozambique",
    },
    {
      q: "Mozambique borders which ocean?",
      o: ["Atlantic", "Indian", "Pacific", "Arctic"],
      a: "Indian",
    },
  ],
  USA: [
    {
      q: "What is the capital of the United States?",
      o: ["New York", "Los Angeles", "Washington D.C.", "Chicago"],
      a: "Washington D.C.",
    },
    {
      q: "How many states make up the USA?",
      o: ["48", "50", "52", "55"],
      a: "50",
    },
    {
      q: "Who was the first President of the USA?",
      o: ["Lincoln", "Kennedy", "Washington", "Jefferson"],
      a: "Washington",
    },
    {
      q: "In which city is the Statue of Liberty located?",
      o: ["Miami", "San Francisco", "New York", "Boston"],
      a: "New York",
    },
    {
      q: "What is the most popular sport in the USA?",
      o: ["Soccer", "Baseball", "American Football", "Basketball"],
      a: "American Football",
    },
  ],
  Italy: [
    {
      q: "What is the capital of Italy?",
      o: ["Milan", "Venice", "Rome", "Florence"],
      a: "Rome",
    },
    {
      q: "Which city is famous for its canals?",
      o: ["Naples", "Genoa", "Venice", "Turin"],
      a: "Venice",
    },
    {
      q: "Who painted the 'Mona Lisa'?",
      o: ["Michelangelo", "Da Vinci", "Raphael", "Botticelli"],
      a: "Da Vinci",
    },
    {
      q: "Which island is home to Mount Etna?",
      o: ["Sardinia", "Sicily", "Capri", "Elba"],
      a: "Sicily",
    },
    {
      q: "Which pasta is shaped like long strings?",
      o: ["Penne", "Fusilli", "Spaghetti", "Ravioli"],
      a: "Spaghetti",
    },
  ],
  Germany: [
    {
      q: "What is the capital of Germany?",
      o: ["Munich", "Hamburg", "Berlin", "Frankfurt"],
      a: "Berlin",
    },
    {
      q: "Which beer festival takes place in Munich?",
      o: ["Summerfest", "Oktoberfest", "Winterfest", "Beerfest"],
      a: "Oktoberfest",
    },
    {
      q: "Who composed the 9th Symphony?",
      o: ["Bach", "Mozart", "Beethoven", "Wagner"],
      a: "Beethoven",
    },
    {
      q: "What was the name of the barrier that divided Berlin?",
      o: ["Iron Wall", "Berlin Wall", "Siegfried Line", "Ice Wall"],
      a: "Berlin Wall",
    },
    {
      q: "Which car brand is German?",
      o: ["Fiat", "Renault", "BMW", "Toyota"],
      a: "BMW",
    },
  ],
  Japan: [
    {
      q: "What is the capital of Japan?",
      o: ["Kyoto", "Osaka", "Tokyo", "Hiroshima"],
      a: "Tokyo",
    },
    {
      q: "What is the traditional dress of Japan?",
      o: ["Hanbok", "Kimono", "Sari", "Cheongsam"],
      a: "Kimono",
    },
    {
      q: "Which mountain is the highest in Japan?",
      o: ["Mount Kita", "Mount Fuji", "Mount Aso", "Mount Yari"],
      a: "Mount Fuji",
    },
    {
      q: "What is the currency used in Japan?",
      o: ["Won", "Yuan", "Yen", "Baht"],
      a: "Yen",
    },
    {
      q: "Japan is known as the Land of the Rising...?",
      o: ["Moon", "Star", "Sun", "Cloud"],
      a: "Sun",
    },
  ],
  China: [
    {
      q: "What is the capital of China?",
      o: ["Shanghai", "Guangzhou", "Beijing", "Shenzhen"],
      a: "Beijing",
    },
    {
      q: "Which man-made structure is visible from space?",
      o: ["Great Wall", "Forbidden City", "Terracotta Army", "Potala Palace"],
      a: "Great Wall",
    },
    {
      q: "What is the official language of China?",
      o: ["Cantonese", "Mandarin", "Hokkien", "Wu"],
      a: "Mandarin",
    },
    {
      q: "Which animal is a national treasure of China?",
      o: ["Tiger", "Red Panda", "Giant Panda", "Dragon"],
      a: "Giant Panda",
    },
    {
      q: "Which river is the longest in China?",
      o: ["Yellow River", "Pearl River", "Yangtze", "Mekong"],
      a: "Yangtze",
    },
  ],
  Thailand: [
    {
      q: "What is the capital of Thailand?",
      o: ["Phuket", "Bangkok", "Chiang Mai", "Pattaya"],
      a: "Bangkok",
    },
    {
      q: "Thailand was formerly known as...?",
      o: ["Siam", "Ceylon", "Burma", "Indochina"],
      a: "Siam",
    },
    {
      q: "What is the most popular martial art in Thailand?",
      o: ["Karate", "Muay Thai", "Judo", "Taekwondo"],
      a: "Muay Thai",
    },
    {
      q: "Which of these is a famous Thai soup?",
      o: ["Pho", "Tom Yum", "Ramen", "Laksa"],
      a: "Tom Yum",
    },
    {
      q: "What is the predominant religion in Thailand?",
      o: ["Islam", "Hinduism", "Buddhism", "Christianity"],
      a: "Buddhism",
    },
  ],
  Australia: [
    {
      q: "What is the capital of Australia?",
      o: ["Sydney", "Melbourne", "Canberra", "Perth"],
      a: "Canberra",
    },
    {
      q: "Which large coral reef system is in Australia?",
      o: ["Great Barrier Reef", "Belize Reef", "Red Sea Reef", "Apo Reef"],
      a: "Great Barrier Reef",
    },
    {
      q: "What is the nickname for Australians?",
      o: ["Kiwis", "Yanks", "Aussies", "Canucks"],
      a: "Aussies",
    },
    {
      q: "Which of these animals is native to Australia?",
      o: ["Tiger", "Kangaroo", "Elephant", "Panda"],
      a: "Kangaroo",
    },
    {
      q: "The Australian Outback is mostly...?",
      o: ["Forest", "Desert", "Mountains", "Snow"],
      a: "Desert",
    },
  ],
  Spain: [
    {
      q: "What is the capital of Spain?",
      o: ["Barcelona", "Valencia", "Madrid", "Seville"],
      a: "Madrid",
    },
    {
      q: "Which famous architect designed the Sagrada Família?",
      o: ["Gaudí", "Picasso", "Dalí", "Miró"],
      a: "Gaudí",
    },
    {
      q: "What is the name of the traditional Spanish rice dish?",
      o: ["Risotto", "Paella", "Couscous", "Ratatouille"],
      a: "Paella",
    },
    {
      q: "Which dance style originated in the Andalusia region?",
      o: ["Salsa", "Tango", "Flamenco", "Bachata"],
      a: "Flamenco",
    },
    {
      q: "What is the official currency of Spain?",
      o: ["Peseta", "Euro", "Pound", "Franc"],
      a: "Euro",
    },
  ],
  "United Kingdom": [
    {
      q: "What is the capital of the United Kingdom?",
      o: ["Manchester", "Edinburgh", "London", "Birmingham"],
      a: "London",
    },
    {
      q: "Who is the legendary playwright of 'Romeo and Juliet'?",
      o: [
        "Charles Dickens",
        "William Shakespeare",
        "Jane Austen",
        "George Orwell",
      ],
      a: "William Shakespeare",
    },
    {
      q: "Which prehistoric monument is located in Wiltshire?",
      o: ["Stonehenge", "Colosseum", "Parthenon", "Petra"],
      a: "Stonehenge",
    },
    {
      q: "What is the name of the famous clock tower at the Palace of Westminster?",
      o: ["Big Ben", "The Shard", "London Eye", "Tower Bridge"],
      a: "Big Ben",
    },
    {
      q: "What is the official currency of the UK?",
      o: ["Euro", "Dollar", "Pound Sterling", "Crown"],
      a: "Pound Sterling",
    },
  ],
  Argentina: [
    {
      q: "What is the capital of Argentina?",
      o: ["Rosario", "Córdoba", "Buenos Aires", "Mendoza"],
      a: "Buenos Aires",
    },
    {
      q: "Which dance and music genre originated in Argentina?",
      o: ["Samba", "Tango", "Reggaeton", "Cumbia"],
      a: "Tango",
    },
    {
      q: "Who is the famous Argentine football player known as 'D10S'?",
      o: ["Messi", "Maradona", "Pele", "Ronaldo"],
      a: "Maradona",
    },
    {
      q: "Which mountain range runs along the west of Argentina?",
      o: ["Alps", "Rockies", "Andes", "Himalayas"],
      a: "Andes",
    },
    {
      q: "What is the popular herbal tea drink in Argentina?",
      o: ["Matcha", "Chai", "Mate", "Earl Grey"],
      a: "Mate",
    },
  ],
  Mexico: [
    {
      q: "What is the capital of Mexico?",
      o: ["Guadalajara", "Cancún", "Mexico City", "Monterrey"],
      a: "Mexico City",
    },
    {
      q: "Which ancient civilisation built the pyramid of Chichén Itzá?",
      o: ["Inca", "Aztec", "Maya", "Olmec"],
      a: "Maya",
    },
    {
      q: "What is the famous holiday celebrating ancestors in Mexico?",
      o: ["Day of the Dead", "Cinco de Mayo", "Carnival", "Easter"],
      a: "Day of the Dead",
    },
    {
      q: "What is the main ingredient in guacamole?",
      o: ["Tomato", "Onion", "Avocado", "Pepper"],
      a: "Avocado",
    },
    {
      q: "Which spirit is traditionally made from the blue agave plant?",
      o: ["Rum", "Vodka", "Tequila", "Gin"],
      a: "Tequila",
    },
  ],
  Canada: [
    {
      q: "What is the capital of Canada?",
      o: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      a: "Ottawa",
    },
    {
      q: "What is the national symbol on the Canadian flag?",
      o: ["Eagle", "Maple Leaf", "Beaver", "Moose"],
      a: "Maple Leaf",
    },
    { q: "How many oceans border Canada?", o: ["1", "2", "3", "4"], a: "3" },
    {
      q: "Which sport is considered Canada's national winter sport?",
      o: ["Basketball", "Ice Hockey", "Skiing", "Curling"],
      a: "Ice Hockey",
    },
    {
      q: "What is the official currency of Canada?",
      o: ["US Dollar", "Pound", "Canadian Dollar", "Euro"],
      a: "Canadian Dollar",
    },
  ],
  "São Tomé and Príncipe": [
    {
      q: "What is the capital of São Tomé and Príncipe?",
      o: ["Santo António", "São Tomé", "Neves", "Trindade"],
      a: "São Tomé",
    },
    {
      q: "The country was once the world's largest producer of which crop?",
      o: ["Coffee", "Cocoa", "Sugar", "Cotton"],
      a: "Cocoa",
    },
    {
      q: "Which ocean surrounds these islands?",
      o: ["Indian", "Pacific", "Atlantic", "Southern"],
      a: "Atlantic",
    },
    {
      q: "What is the official language?",
      o: ["French", "Portuguese", "Spanish", "English"],
      a: "Portuguese",
    },
    {
      q: "What is the famous rock formation (plug) on São Tomé island?",
      o: ["Sugarloaf", "Pico Cão Grande", "Table Mountain", "Uluru"],
      a: "Pico Cão Grande",
    },
  ],
  "South Africa": [
    {
      q: "What is the largest city in South Africa?",
      o: ["Cape Town", "Durban", "Johannesburg", "Pretoria"],
      a: "Johannesburg",
    },
    {
      q: "How many official languages does South Africa have?",
      o: ["2", "5", "11", "15"],
      a: "11",
    },
    {
      q: "Who was the first black president of South Africa?",
      o: ["Desmond Tutu", "Nelson Mandela", "Thabo Mbeki", "Jacob Zuma"],
      a: "Nelson Mandela",
    },
    {
      q: "What is the nickname for the national rugby team?",
      o: ["Bafana Bafana", "Springboks", "Wallabies", "All Blacks"],
      a: "Springboks",
    },
    {
      q: "What is the currency of South Africa?",
      o: ["Rand", "Pound", "Dollar", "Shilling"],
      a: "Rand",
    },
  ],
};
