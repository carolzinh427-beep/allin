export const MENU_CATEGORIES = [
  { id: 'todos', label: 'Todos os Itens', icon: '✨' },
  { id: 'happy-hour', label: 'Happy Hour', icon: '🍺' },
  { id: 'hamburgueres', label: 'Hambúrgueres', icon: '🍔' },
  { id: 'aperitivos', label: 'Aperitivos', icon: '🍴' },
  { id: 'espetinhos', label: 'Espetinhos', icon: '🍢' },
  { id: 'drinks', label: 'Drinks', icon: '🍹' },
  { id: 'sem-alcool', label: 'Sem Álcool', icon: '🥤' },
  { id: 'cervejas', label: 'Cervejas', icon: '🍻' },
  { id: 'combos-cerveja', label: 'Combos de Cerveja', icon: '🧊' },
  { id: 'doses', label: 'Doses & Destilados', icon: '🥃' },
  { id: 'combos-garrafas', label: 'Combos & Garrafas', icon: '🍾' },
  { id: 'bebidas', label: 'Bebidas & Sucos', icon: '🧃' },
  { id: 'vinhos-espumantes', label: 'Vinhos & Espumantes', icon: '🍷' },
  { id: 'sobremesas-omeletes', label: 'Sobremesas & Omeletes', icon: '🍰' }
];

export const MENU_ITEMS = [
  // HAPPY HOUR (Terça a Quinta 19h às 21h)
  {
    id: 'hh-1',
    name: 'Batata Frita (Happy Hour)',
    category: 'happy-hour',
    price: 26.90,
    priceFormatted: 'R$ 26,90',
    description: 'Porção com 500g de batatas douradas e crocantes.',
    tag: 'Happy Hour Especial',
    badge: 'Terça a Quinta'
  },
  {
    id: 'hh-2',
    name: 'Quibe Recheado (Happy Hour)',
    category: 'happy-hour',
    price: 24.90,
    priceFormatted: 'R$ 24,90',
    description: '10 unidades servidas com o delicioso molho da casa.',
    tag: 'Happy Hour Especial',
    badge: 'Terça a Quinta'
  },
  {
    id: 'hh-3',
    name: 'Calabresa Acebolada (Happy Hour)',
    category: 'happy-hour',
    price: 38.90,
    priceFormatted: 'R$ 38,90',
    description: 'Rodelas suculentas feitas na manteiga de garrafa com cebola dourada.',
    tag: 'Happy Hour Especial',
    badge: 'Terça a Quinta'
  },
  {
    id: 'hh-4',
    name: 'Chopp Brahma 300ml (Happy Hour)',
    category: 'happy-hour',
    price: 8.90,
    priceFormatted: 'R$ 8,90',
    description: 'Chopp trincando de gelado, servido no ponto ideal.',
    tag: 'Happy Hour Especial',
    badge: 'R$ 8,90'
  },
  {
    id: 'hh-5',
    name: 'Caipirinha 300ml (Happy Hour)',
    category: 'happy-hour',
    price: 13.90,
    priceFormatted: 'R$ 13,90',
    description: 'Cachaça 51, xarope de açúcar e limão fresco.',
    tag: 'Happy Hour Especial',
    badge: 'Terça a Quinta'
  },
  {
    id: 'hh-6',
    name: 'Gin Tônica (Happy Hour)',
    category: 'happy-hour',
    price: 23.90,
    priceFormatted: 'R$ 23,90',
    description: 'Gin, água tônica e limão siciliano aromático.',
    tag: 'Happy Hour Especial',
    badge: 'Terça a Quinta'
  },

  // HAMBÚRGUERES
  {
    id: 'hbg-1',
    name: 'Karaokê Burger',
    category: 'hamburgueres',
    price: 34.90,
    priceFormatted: 'R$ 34,90',
    description: 'Pão brioche, hambúrguer 120g empanado, queijo cheddar, bacon caramelizado com mel e maionese da casa.',
    featured: true,
    tag: 'Destaque da Casa'
  },
  {
    id: 'hbg-2',
    name: 'All In Burger',
    category: 'hamburgueres',
    price: 37.90,
    priceFormatted: 'R$ 37,90',
    description: 'Pão australiano, hambúrguer 160g, queijo cheddar, fatias de bacon, cebola caramelizada e maionese da casa.',
    featured: true,
    tag: 'Mais Pedido'
  },
  {
    id: 'hbg-3',
    name: '305 Burger',
    category: 'hamburgueres',
    price: 28.90,
    priceFormatted: 'R$ 28,90',
    description: 'Pão brioche, hambúrguer 120g, queijo cheddar e maionese da casa.',
    featured: true
  },
  {
    id: 'hbg-4',
    name: 'All Burger',
    category: 'hamburgueres',
    price: 33.90,
    priceFormatted: 'R$ 33,90',
    description: 'Pão brioche, hambúrguer 120g, queijo mussarela, bacon e abacaxi caramelizado com mel.',
    featured: true
  },
  {
    id: 'hbg-add-1',
    name: 'Adicional: Batata Frita 100g',
    category: 'hamburgueres',
    price: 9.90,
    priceFormatted: 'R$ 9,90',
    description: 'Porção individual de batata frita crocante.'
  },
  {
    id: 'hbg-add-2',
    name: 'Adicional: Bacon',
    category: 'hamburgueres',
    price: 4.90,
    priceFormatted: 'R$ 4,90',
    description: 'Fatias extras de bacon crocante.'
  },
  {
    id: 'hbg-add-3',
    name: 'Adicional: Ovo',
    category: 'hamburgueres',
    price: 3.50,
    priceFormatted: 'R$ 3,50',
    description: 'Ovo frito no ponto.'
  },

  // APERITIVOS
  {
    id: 'ap-1',
    name: 'Carne de Sol c/ Mandioca 500g',
    category: 'aperitivos',
    price: 92.90,
    priceFormatted: 'R$ 92,90',
    description: '500g de carne de sol em cubos com queijo, cebola e mandioca cozida.'
  },
  {
    id: 'ap-2',
    name: 'Picanha Grelhada 500g',
    category: 'aperitivos',
    price: 102.90,
    priceFormatted: 'R$ 102,90',
    description: 'Fatias servidas com vinagrete caseiro e farofa de ovos.'
  },
  {
    id: 'ap-3',
    name: 'Costelinha c/ Barbecue 700g',
    category: 'aperitivos',
    price: 95.90,
    priceFormatted: 'R$ 95,90',
    description: 'Costelinha suína macia com barbecue e fritas.'
  },
  {
    id: 'ap-4',
    name: 'Torresmo 400g',
    category: 'aperitivos',
    price: 59.90,
    priceFormatted: 'R$ 59,90',
    description: 'Porção crocante e sequinha.'
  },
  {
    id: 'ap-5',
    name: 'Linguiça Apimentada 500g',
    category: 'aperitivos',
    price: 56.90,
    priceFormatted: 'R$ 56,90',
    description: 'Acompanha farofa de ovos.'
  },
  {
    id: 'ap-6',
    name: 'Frango a Passarinho 600g',
    category: 'aperitivos',
    price: 59.90,
    priceFormatted: 'R$ 59,90',
    description: 'Temperado com alho e ervas finas, frito no ponto.'
  },
  {
    id: 'ap-7',
    name: 'Isca de Frango 500g',
    category: 'aperitivos',
    price: 61.90,
    priceFormatted: 'R$ 61,90',
    description: 'Tiras de frango empanadas na farinha panko e molho da casa.'
  },
  {
    id: 'ap-8',
    name: 'Isca de Peixe 500g',
    category: 'aperitivos',
    price: 58.90,
    priceFormatted: 'R$ 58,90',
    description: 'Tiras de tilápia empanadas na farinha panko e molho da casa.'
  },
  {
    id: 'ap-9',
    name: 'Ceviche de Tilápia 300g',
    category: 'aperitivos',
    price: 34.90,
    priceFormatted: 'R$ 34,90',
    description: 'Cubos de tilápia marinados no limão, cebola roxa, coentro e pimenta dedo de moça.'
  },
  {
    id: 'ap-10',
    name: 'Batata Frita 500g',
    category: 'aperitivos',
    price: 34.90,
    priceFormatted: 'R$ 34,90',
    description: 'Porção generosa de batatas crocantes.'
  },
  {
    id: 'ap-11',
    name: 'Batata Frita All In 500g',
    category: 'aperitivos',
    price: 52.90,
    priceFormatted: 'R$ 52,90',
    description: 'Com filé, queijo cheddar cremoso e cubos de bacon crocante.'
  },
  {
    id: 'ap-12',
    name: 'Bolinho de Carne Seca c/ Mandioca',
    category: 'aperitivos',
    price: 37.90,
    priceFormatted: 'R$ 37,90',
    description: '10 unidades envolvidas na massa de mandioca temperada.'
  },
  {
    id: 'ap-13',
    name: 'Bolinho de Bacalhau',
    category: 'aperitivos',
    price: 41.90,
    priceFormatted: 'R$ 41,90',
    description: '10 unidades servidas com molho especial da casa.'
  },
  {
    id: 'ap-14',
    name: 'Bolinho de Arroz',
    category: 'aperitivos',
    price: 27.90,
    priceFormatted: 'R$ 27,90',
    description: '6 unidades servidas com molho da casa.'
  },
  {
    id: 'ap-15',
    name: 'Mini Quibe Recheado',
    category: 'aperitivos',
    price: 29.90,
    priceFormatted: 'R$ 29,90',
    description: '12 unidades servidas com molho da casa.'
  },
  {
    id: 'ap-16',
    name: 'Mini Pastéis',
    category: 'aperitivos',
    price: 45.90,
    priceFormatted: 'R$ 45,90',
    description: 'Porção mista (carne e queijo) com 10 unidades servidas com molho da casa.'
  },
  {
    id: 'ap-17',
    name: 'Dadinho de Tapioca',
    category: 'aperitivos',
    price: 38.90,
    priceFormatted: 'R$ 38,90',
    description: 'Servidos com geleia artesanal de maçã com toque suave de pimenta.'
  },

  // ESPETINHOS (Acompanha farofa temperada)
  {
    id: 'esp-1',
    name: 'Medalhão de Frango',
    category: 'espetinhos',
    price: 20.90,
    priceFormatted: 'R$ 20,90',
    description: 'Acompanha farofa temperada crocante.'
  },
  {
    id: 'esp-2',
    name: 'Contra Filé',
    category: 'espetinhos',
    price: 21.90,
    priceFormatted: 'R$ 21,90',
    description: 'Carne macia na brasa, acompanha farofa temperada.'
  },
  {
    id: 'esp-3',
    name: 'Panceta Suína',
    category: 'espetinhos',
    price: 18.90,
    priceFormatted: 'R$ 18,90',
    description: 'Sabor marcante e crocante, acompanha farofa temperada.'
  },
  {
    id: 'esp-4',
    name: 'Alcatra Grill',
    category: 'espetinhos',
    price: 20.90,
    priceFormatted: 'R$ 20,90',
    description: 'Acompanha farofa temperada da casa.'
  },
  {
    id: 'esp-5',
    name: 'Queijo Coalho',
    category: 'espetinhos',
    price: 19.90,
    priceFormatted: 'R$ 19,90',
    description: 'Dourado na brasa, macio por dentro.'
  },

  // DRINKS
  {
    id: 'drk-1',
    name: 'Kir Royal',
    category: 'drinks',
    price: 36.90,
    priceFormatted: 'R$ 36,90',
    description: 'Drink francês refinado à base de espumante e licor de cassis.'
  },
  {
    id: 'drk-2',
    name: 'Dry Martini',
    category: 'drinks',
    price: 35.90,
    priceFormatted: 'R$ 35,90',
    description: 'Gin, vermouth extra dry, guarnecido com azeitonas.'
  },
  {
    id: 'drk-3',
    name: 'Cosmopolitan',
    category: 'drinks',
    price: 36.90,
    priceFormatted: 'R$ 36,90',
    description: 'Vodka Smirnoff, licor Cointreau, suco de cranberry e sumo de limão.'
  },
  {
    id: 'drk-4',
    name: 'Coquetel de Frutas',
    category: 'drinks',
    price: 31.90,
    priceFormatted: 'R$ 31,90',
    description: 'Maracujá, morango ou abacaxi, vodka e leite condensado cremoso.'
  },
  {
    id: 'drk-5',
    name: 'Moscow Mule',
    category: 'drinks',
    price: 37.90,
    priceFormatted: 'R$ 37,90',
    description: 'Vodka, xarope de gengibre artesanal, sumo de limão e espuma de gengibre cremosa.',
    featured: true,
    tag: 'Sucesso Absoluto'
  },
  {
    id: 'drk-6',
    name: 'Mojito',
    category: 'drinks',
    price: 34.90,
    priceFormatted: 'R$ 34,90',
    description: 'Rum, sumo de limão, xarope de açúcar, água com gás e hortelã fresca.'
  },
  {
    id: 'drk-7',
    name: 'Gin Tônica',
    category: 'drinks',
    price: 33.90,
    priceFormatted: 'R$ 33,90',
    description: 'Gin, água tônica gelada e fatia de limão siciliano aromático.'
  },
  {
    id: 'drk-8',
    name: 'Gin Tropical',
    category: 'drinks',
    price: 36.90,
    priceFormatted: 'R$ 36,90',
    description: 'Gin, energético tropical da casa e laranja fresca.',
    featured: true
  },
  {
    id: 'drk-9',
    name: 'Margarita',
    category: 'drinks',
    price: 38.90,
    priceFormatted: 'R$ 38,90',
    description: 'Licor Cointreau, tequila, sumo de limão e borda de sal refinada.'
  },
  {
    id: 'drk-10',
    name: 'Aperol Spritz',
    category: 'drinks',
    price: 36.90,
    priceFormatted: 'R$ 36,90',
    description: 'Aperol, espumante, água com gás e rodelas frescas de laranja.'
  },
  {
    id: 'drk-11',
    name: 'Negroni',
    category: 'drinks',
    price: 42.90,
    priceFormatted: 'R$ 42,90',
    description: 'Gin, vermute rosso e Campari.'
  },
  {
    id: 'drk-12',
    name: 'Whisky Sour',
    category: 'drinks',
    price: 40.90,
    priceFormatted: 'R$ 40,90',
    description: 'Whisky Honey, claras de ovo, xarope de açúcar e sumo de limão.'
  },
  {
    id: 'drk-13',
    name: 'Lago Azul',
    category: 'drinks',
    price: 36.90,
    priceFormatted: 'R$ 36,90',
    description: 'Vodka, licor curaçau blue, sumo de limão, refrigerante de limão e água com gás.'
  },
  {
    id: 'drk-14',
    name: 'Piña Colada',
    category: 'drinks',
    price: 38.90,
    priceFormatted: 'R$ 38,90',
    description: 'Rum, leite condensado, leite de coco e pedaços de abacaxi fresco.'
  },
  {
    id: 'drk-15',
    name: 'Sex on the Beach',
    category: 'drinks',
    price: 39.90,
    priceFormatted: 'R$ 39,90',
    description: 'Vodka Smirnoff, licor de pêssego, suco de laranja e xarope de groselha.'
  },
  {
    id: 'drk-16',
    name: 'Cozumel',
    category: 'drinks',
    price: 20.90,
    priceFormatted: 'R$ 20,90',
    description: 'Cerveja trincando, limão espremido e borda de sal.'
  },
  {
    id: 'drk-17',
    name: 'Cozumel c/ Tequila',
    category: 'drinks',
    price: 25.90,
    priceFormatted: 'R$ 25,90',
    description: 'Cerveja, limão, dose de tequila e borda de sal.'
  },
  {
    id: 'drk-18',
    name: 'Preparo p/ Cozumel',
    category: 'drinks',
    price: 8.90,
    priceFormatted: 'R$ 8,90',
    description: 'Copo com gelo, limão e borda de sal.'
  },
  {
    id: 'drk-19',
    name: 'Caipirinha Tradicional',
    category: 'drinks',
    price: 21.90,
    priceFormatted: 'R$ 21,90',
    description: 'Cachaça, limão fresco e xarope de açúcar.'
  },
  {
    id: 'drk-20',
    name: 'Caipiroska',
    category: 'drinks',
    price: 30.90,
    priceFormatted: 'R$ 30,90',
    description: 'Vodka e xarope de açúcar. Sabores: morango, abacaxi, maracujá ou limão.'
  },

  // SEM ÁLCOOL
  {
    id: 'sa-1',
    name: 'Soda Italiana',
    category: 'sem-alcool',
    price: 19.90,
    priceFormatted: 'R$ 19,90',
    description: 'Água com gás e xarope: maracujá, maçã verde, tangerina ou frutas vermelhas.'
  },
  {
    id: 'sa-2',
    name: 'Brisa Caribe',
    category: 'sem-alcool',
    price: 29.90,
    priceFormatted: 'R$ 29,90',
    description: 'Leite de coco, leite condensado, sumo de limão e água com gás refrescante.'
  },
  {
    id: 'sa-3',
    name: 'Moscow Mule Sem Álcool',
    category: 'sem-alcool',
    price: 28.90,
    priceFormatted: 'R$ 28,90',
    description: 'Água tônica, xarope de gengibre, sumo de limão e espuma de gengibre.'
  },
  {
    id: 'sa-4',
    name: 'Cozumel Sem Álcool',
    category: 'sem-alcool',
    price: 16.90,
    priceFormatted: 'R$ 16,90',
    description: 'Cerveja zero álcool, sumo de limão e borda de sal.'
  },
  {
    id: 'sa-5',
    name: 'Limonada Suíça',
    category: 'sem-alcool',
    price: 14.90,
    priceFormatted: 'R$ 14,90',
    description: 'Sumo de limão fresco batido, xarope de açúcar e água com gás.'
  },

  // DOSES & DESTILADOS
  { id: 'dos-1', name: 'Tequila José Cuervo Ouro', category: 'doses', price: 29.90, priceFormatted: 'R$ 29,90', description: 'Dose' },
  { id: 'dos-2', name: 'Tequila José Cuervo Prata', category: 'doses', price: 28.90, priceFormatted: 'R$ 28,90', description: 'Dose' },
  { id: 'dos-3', name: 'Vodka Smirnoff', category: 'doses', price: 20.90, priceFormatted: 'R$ 20,90', description: 'Dose' },
  { id: 'dos-4', name: 'Vodka Absolut', category: 'doses', price: 24.90, priceFormatted: 'R$ 24,90', description: 'Dose' },
  { id: 'dos-5', name: 'Campari', category: 'doses', price: 16.90, priceFormatted: 'R$ 16,90', description: 'Dose' },
  { id: 'dos-6', name: 'Sagatiba', category: 'doses', price: 12.90, priceFormatted: 'R$ 12,90', description: 'Dose' },
  { id: 'dos-7', name: 'Salinas', category: 'doses', price: 12.90, priceFormatted: 'R$ 12,90', description: 'Dose' },
  { id: 'dos-8', name: 'Montila', category: 'doses', price: 12.90, priceFormatted: 'R$ 12,90', description: 'Dose' },
  { id: 'dos-9', name: 'Bananinha', category: 'doses', price: 16.90, priceFormatted: 'R$ 16,90', description: 'Dose' },
  { id: 'dos-10', name: 'Cachaça São Francisco', category: 'doses', price: 12.90, priceFormatted: 'R$ 12,90', description: 'Dose' },
  { id: 'dos-11', name: 'Cachaça 51', category: 'doses', price: 11.90, priceFormatted: 'R$ 11,90', description: 'Dose' },
  { id: 'dos-12', name: 'Gin Tanqueray', category: 'doses', price: 30.90, priceFormatted: 'R$ 30,90', description: 'Dose' },
  { id: 'dos-13', name: 'Gin Beefeater', category: 'doses', price: 26.90, priceFormatted: 'R$ 26,90', description: 'Dose' },
  { id: 'dos-14', name: 'Gin Gordons', category: 'doses', price: 22.90, priceFormatted: 'R$ 22,90', description: 'Dose' },
  { id: 'dos-15', name: 'Gin Rocks', category: 'doses', price: 20.90, priceFormatted: 'R$ 20,90', description: 'Dose' },
  { id: 'dos-16', name: 'Jack Daniel\'s Old Nº 7', category: 'doses', price: 26.90, priceFormatted: 'R$ 26,90', description: 'Dose' },
  { id: 'dos-17', name: 'Jack Fire', category: 'doses', price: 28.90, priceFormatted: 'R$ 28,90', description: 'Dose de canela' },
  { id: 'dos-18', name: 'Jack Honey', category: 'doses', price: 28.90, priceFormatted: 'R$ 28,90', description: 'Dose de mel' },
  { id: 'dos-19', name: 'Jack Apple', category: 'doses', price: 28.90, priceFormatted: 'R$ 28,90', description: 'Dose de maçã' },
  { id: 'dos-20', name: 'Black Label', category: 'doses', price: 25.90, priceFormatted: 'R$ 25,90', description: 'Dose' },
  { id: 'dos-21', name: 'Red Label', category: 'doses', price: 21.90, priceFormatted: 'R$ 21,90', description: 'Dose' },
  { id: 'dos-22', name: 'Old Parr', category: 'doses', price: 30.90, priceFormatted: 'R$ 30,90', description: 'Dose' },
  { id: 'dos-23', name: 'Chivas 12 Anos', category: 'doses', price: 29.90, priceFormatted: 'R$ 29,90', description: 'Dose' },
  { id: 'dos-24', name: 'Licor 43', category: 'doses', price: 32.90, priceFormatted: 'R$ 32,90', description: 'Dose' },
  { id: 'dos-25', name: 'Licor Amarula', category: 'doses', price: 27.90, priceFormatted: 'R$ 27,90', description: 'Dose' },

  // CERVEJAS
  { id: 'crv-1', name: 'Heineken Long Neck 330ml', category: 'cervejas', price: 14.90, priceFormatted: 'R$ 14,90', description: 'Long neck gelada' },
  { id: 'crv-2', name: 'Stella Artois Long Neck 330ml', category: 'cervejas', price: 12.90, priceFormatted: 'R$ 12,90', description: 'Long neck' },
  { id: 'crv-3', name: 'Stella Sem Glúten 330ml', category: 'cervejas', price: 13.90, priceFormatted: 'R$ 13,90', description: 'Long neck sem glúten' },
  { id: 'crv-4', name: 'Budweiser Long Neck 330ml', category: 'cervejas', price: 11.90, priceFormatted: 'R$ 11,90', description: 'Long neck' },
  { id: 'crv-5', name: 'Spaten Long Neck 330ml', category: 'cervejas', price: 12.90, priceFormatted: 'R$ 12,90', description: 'Puro malte munich' },
  { id: 'crv-6', name: 'Corona Long Neck 330ml', category: 'cervejas', price: 15.90, priceFormatted: 'R$ 15,90', description: 'Com fatia de limão' },
  { id: 'crv-7', name: 'Ice Smirnoff', category: 'cervejas', price: 11.90, priceFormatted: 'R$ 11,90', description: 'Long neck' },
  { id: 'crv-8', name: 'Beats Senses', category: 'cervejas', price: 13.90, priceFormatted: 'R$ 13,90', description: 'Long neck' },
  { id: 'crv-9', name: 'Chopp Brahma 300ml', category: 'cervejas', price: 13.90, priceFormatted: 'R$ 13,90', description: 'Chopp clássico tirado na hora' },
  { id: 'crv-10', name: 'Heineken Zero (Sem Álcool) 330ml', category: 'cervejas', price: 13.90, priceFormatted: 'R$ 13,90', description: 'Long neck 0.0%' },
  { id: 'crv-11', name: 'Budweiser Zero (Sem Álcool) 330ml', category: 'cervejas', price: 11.90, priceFormatted: 'R$ 11,90', description: 'Long neck 0.0%' },
  { id: 'crv-12', name: 'Corona Zero (Sem Álcool) 330ml', category: 'cervejas', price: 14.90, priceFormatted: 'R$ 14,90', description: 'Long neck 0.0%' },
  { id: 'crv-13', name: 'Brahma Duplo Malte Lata 350ml', category: 'cervejas', price: 9.90, priceFormatted: 'R$ 9,90', description: 'Lata' },
  { id: 'crv-14', name: 'Amstel Puro Malte Lata 269ml', category: 'cervejas', price: 8.90, priceFormatted: 'R$ 8,90', description: 'Lata' },
  { id: 'crv-15', name: 'Beats Red Mix Lata 269ml', category: 'cervejas', price: 10.90, priceFormatted: 'R$ 10,90', description: 'Lata' },

  // COMBOS DE CERVEJA (*Balde com 06 unidades)
  { id: 'cb-crv-1', name: 'Balde Heineken (6 un)', category: 'combos-cerveja', price: 82.90, priceFormatted: 'R$ 82,90', description: 'Balde de gelo com 6 unidades' },
  { id: 'cb-crv-2', name: 'Balde Corona (6 un)', category: 'combos-cerveja', price: 89.90, priceFormatted: 'R$ 89,90', description: 'Balde de gelo com 6 unidades' },
  { id: 'cb-crv-3', name: 'Balde Budweiser (6 un)', category: 'combos-cerveja', price: 67.90, priceFormatted: 'R$ 67,90', description: 'Balde de gelo com 6 unidades' },
  { id: 'cb-crv-4', name: 'Balde Spaten (6 un)', category: 'combos-cerveja', price: 72.90, priceFormatted: 'R$ 72,90', description: 'Balde de gelo com 6 unidades' },
  { id: 'cb-crv-5', name: 'Balde Stella Artois (6 un)', category: 'combos-cerveja', price: 75.90, priceFormatted: 'R$ 75,90', description: 'Balde de gelo com 6 unidades' },
  { id: 'cb-crv-6', name: 'Balde Stella S/ Glúten (6 un)', category: 'combos-cerveja', price: 79.90, priceFormatted: 'R$ 79,90', description: 'Balde de gelo com 6 unidades' },
  { id: 'cb-crv-7', name: 'Balde Beats (6 un)', category: 'combos-cerveja', price: 74.90, priceFormatted: 'R$ 74,90', description: 'Balde de gelo com 6 unidades' },
  { id: 'cb-crv-8', name: 'Balde Heineken Zero (6 un)', category: 'combos-cerveja', price: 78.90, priceFormatted: 'R$ 78,90', description: 'Balde de gelo com 6 unidades sem álcool' },
  { id: 'cb-crv-9', name: 'Balde Ice Smirnoff (6 un)', category: 'combos-cerveja', price: 65.90, priceFormatted: 'R$ 65,90', description: 'Balde de gelo com 6 unidades' },
  { id: 'cb-crv-10', name: 'Balde Amstel Puro Malte (6 latas)', category: 'combos-cerveja', price: 42.90, priceFormatted: 'R$ 42,90', description: 'Balde com 6 latas' },
  { id: 'cb-crv-11', name: 'Balde Brahma Duplo Malte (6 latas)', category: 'combos-cerveja', price: 52.90, priceFormatted: 'R$ 52,90', description: 'Balde com 6 latas' },

  // COMBOS & GARRAFAS (Whisky, Vodka, Gin, Tequila)
  {
    id: 'cb-dst-1',
    name: 'Combo Old Parr (+ 5 Red Bull)',
    category: 'combos-garrafas',
    price: 450.00,
    priceFormatted: 'R$ 450,00',
    description: '1 garrafa Old Parr acompanhada de 5 energéticos Red Bull e gelo.'
  },
  {
    id: 'cb-dst-2',
    name: 'Combo Chivas (+ 5 Red Bull)',
    category: 'combos-garrafas',
    price: 450.00,
    priceFormatted: 'R$ 450,00',
    description: '1 garrafa Chivas Regal acompanhada de 5 energéticos Red Bull e gelo.'
  },
  {
    id: 'cb-dst-3',
    name: 'Combo Black Label (+ 5 Red Bull)',
    category: 'combos-garrafas',
    price: 460.00,
    priceFormatted: 'R$ 460,00',
    description: '1 garrafa Johnnie Walker Black Label acompanhada de 5 energéticos Red Bull e gelo.'
  },
  {
    id: 'cb-dst-4',
    name: 'Combo Red Label (+ 5 Red Bull)',
    category: 'combos-garrafas',
    price: 330.00,
    priceFormatted: 'R$ 330,00',
    description: '1 garrafa Johnnie Walker Red Label acompanhada de 5 energéticos Red Bull e gelo.'
  },
  {
    id: 'cb-dst-5',
    name: 'Combo Jack Daniel\'s (+ 5 Red Bull)',
    category: 'combos-garrafas',
    price: 380.00,
    priceFormatted: 'R$ 380,00',
    description: '1 garrafa Jack Daniel\'s acompanhada de 5 energéticos Red Bull e gelo.'
  },
  {
    id: 'cb-dst-6',
    name: 'Combo Vodka Absolut (+ 5 Red Bull)',
    category: 'combos-garrafas',
    price: 370.00,
    priceFormatted: 'R$ 370,00',
    description: '1 garrafa Vodka Absolut acompanhada de 5 energéticos Red Bull e gelo.'
  },
  {
    id: 'cb-dst-7',
    name: 'Combo Vodka Smirnoff (+ 5 Red Bull)',
    category: 'combos-garrafas',
    price: 270.00,
    priceFormatted: 'R$ 270,00',
    description: '1 garrafa Vodka Smirnoff acompanhada de 5 energéticos Red Bull e gelo.'
  },
  {
    id: 'cb-dst-8',
    name: 'Combinho All In',
    category: 'combos-garrafas',
    price: 58.90,
    priceFormatted: 'R$ 58,90',
    description: 'Duas doses de gin importado ou vodka importada + 1 Red Bull à sua escolha.'
  },
  {
    id: 'cb-dst-9',
    name: 'Combo Gin Tanqueray (+ 5 Red Bull)',
    category: 'combos-garrafas',
    price: 390.00,
    priceFormatted: 'R$ 390,00',
    description: '1 garrafa Gin Tanqueray com 5 unidades de energético Red Bull e gelo.'
  },
  {
    id: 'cb-dst-10',
    name: 'Combo Gin Beefeater (+ 5 Red Bull)',
    category: 'combos-garrafas',
    price: 370.00,
    priceFormatted: 'R$ 370,00',
    description: '1 garrafa Gin Beefeater com 5 unidades de energético Red Bull e gelo.'
  },
  {
    id: 'cb-dst-11',
    name: 'Garrafa Tequila Ouro (+ 5 Red Bull)',
    category: 'combos-garrafas',
    price: 280.00,
    priceFormatted: 'R$ 280,00',
    description: '1 garrafa com 5 unidades de energético Red Bull.'
  },
  {
    id: 'cb-dst-12',
    name: 'Garrafa Tequila Prata (+ 5 Red Bull)',
    category: 'combos-garrafas',
    price: 280.00,
    priceFormatted: 'R$ 280,00',
    description: '1 garrafa com 5 unidades de energético Red Bull.'
  },
  { id: 'gar-1', name: 'Garrafa Old Parr', category: 'combos-garrafas', price: 400.00, priceFormatted: 'R$ 400,00', description: 'Apenas a garrafa' },
  { id: 'gar-2', name: 'Garrafa Chivas 12 Anos', category: 'combos-garrafas', price: 400.00, priceFormatted: 'R$ 400,00', description: 'Apenas a garrafa' },
  { id: 'gar-3', name: 'Garrafa Black Label', category: 'combos-garrafas', price: 410.00, priceFormatted: 'R$ 410,00', description: 'Apenas a garrafa' },
  { id: 'gar-4', name: 'Garrafa Red Label', category: 'combos-garrafas', price: 290.00, priceFormatted: 'R$ 290,00', description: 'Apenas a garrafa' },
  { id: 'gar-5', name: 'Garrafa Jack Daniel\'s', category: 'combos-garrafas', price: 300.00, priceFormatted: 'R$ 300,00', description: 'Apenas a garrafa' },
  { id: 'gar-6', name: 'Garrafa Absolut', category: 'combos-garrafas', price: 300.00, priceFormatted: 'R$ 300,00', description: 'Apenas a garrafa' },
  { id: 'gar-7', name: 'Garrafa Smirnoff', category: 'combos-garrafas', price: 210.00, priceFormatted: 'R$ 210,00', description: 'Apenas a garrafa' },

  // BEBIDAS & SUCOS
  { id: 'beb-1', name: 'Coca-Cola Lata 310ml', category: 'bebidas', price: 9.90, priceFormatted: 'R$ 9,90', description: 'Tradicional' },
  { id: 'beb-2', name: 'Coca-Cola Zero Lata 310ml', category: 'bebidas', price: 9.90, priceFormatted: 'R$ 9,90', description: 'Zero açúcar' },
  { id: 'beb-3', name: 'Guaraná Antarctica 310ml', category: 'bebidas', price: 9.90, priceFormatted: 'R$ 9,90', description: 'Tradicional' },
  { id: 'beb-4', name: 'Guaraná Antarctica Zero 310ml', category: 'bebidas', price: 9.90, priceFormatted: 'R$ 9,90', description: 'Zero açúcar' },
  { id: 'beb-5', name: 'Pepsi Black Zero 350ml', category: 'bebidas', price: 9.90, priceFormatted: 'R$ 9,90', description: 'Zero açúcar' },
  { id: 'beb-6', name: 'Schweppes 310ml', category: 'bebidas', price: 9.90, priceFormatted: 'R$ 9,90', description: 'Citrus / Tônica' },
  { id: 'beb-7', name: 'Água sem Gás 500ml', category: 'bebidas', price: 8.90, priceFormatted: 'R$ 8,90', description: 'Garrafa' },
  { id: 'beb-8', name: 'Água com Gás 500ml', category: 'bebidas', price: 8.90, priceFormatted: 'R$ 8,90', description: 'Garrafa' },
  { id: 'beb-9', name: 'Água Tônica 350ml', category: 'bebidas', price: 8.90, priceFormatted: 'R$ 8,90', description: 'Lata' },
  { id: 'beb-10', name: 'Red Bull Tradicional / Sabores', category: 'bebidas', price: 19.90, priceFormatted: 'R$ 19,90', description: 'Lata' },
  { id: 'beb-11', name: 'Suco Del Valle 290ml', category: 'bebidas', price: 8.90, priceFormatted: 'R$ 8,90', description: 'Lata' },
  { id: 'beb-12', name: 'Suco Natural', category: 'bebidas', price: 12.90, priceFormatted: 'R$ 12,90', description: 'Polpa fresca: morango, acerola, goiaba ou maracujá.' },

  // VINHOS & ESPUMANTES
  {
    id: 'vin-1',
    name: 'Espumante Brut',
    category: 'vinhos-espumantes',
    price: 99.90,
    priceFormatted: 'R$ 99,90',
    description: 'Garrafa servida no balde com gelo.'
  },
  {
    id: 'vin-2',
    name: 'Espumante Rosé',
    category: 'vinhos-espumantes',
    price: 99.90,
    priceFormatted: 'R$ 99,90',
    description: 'Garrafa servida no balde com gelo.'
  },
  {
    id: 'vin-3',
    name: 'Taxa de Rolha (Espumante)',
    category: 'vinhos-espumantes',
    price: 70.00,
    priceFormatted: 'R$ 70,00',
    description: 'Por garrafa trazida pelo cliente.'
  },
  {
    id: 'vin-4',
    name: 'Vinho Fino Selecionado',
    category: 'vinhos-espumantes',
    price: 89.90,
    priceFormatted: 'A partir de R$ 89,90',
    description: 'Consultar rótulos disponíveis na adega com a equipe.'
  },
  {
    id: 'vin-5',
    name: 'Taxa de Rolha (Vinho)',
    category: 'vinhos-espumantes',
    price: 60.00,
    priceFormatted: 'R$ 60,00',
    description: 'Por garrafa trazida pelo cliente.'
  },

  // SOBREMESAS & OMELETES
  {
    id: 'sob-1',
    name: 'Mini Churros',
    category: 'sobremesas-omeletes',
    price: 29.90,
    priceFormatted: 'R$ 29,90',
    description: 'Porção com 10 unidades recheadas com doce de leite cremoso, servidos com açúcar e canela.'
  },
  {
    id: 'sob-2',
    name: 'Sorvete de Creme',
    category: 'sobremesas-omeletes',
    price: 19.90,
    priceFormatted: 'R$ 19,90',
    description: 'Cobertura de chocolate ou caramelo.'
  },
  {
    id: 'sob-3',
    name: 'Petit Gâteau',
    category: 'sobremesas-omeletes',
    price: 28.90,
    priceFormatted: 'R$ 28,90',
    description: 'Bolo quente com recheio cremoso de chocolate derretido, servido com sorvete de creme.'
  },
  {
    id: 'oml-1',
    name: 'Omelete Tradicional',
    category: 'sobremesas-omeletes',
    price: 26.90,
    priceFormatted: 'R$ 26,90',
    description: 'Queijo, presunto, tomate, cebola, pimentão e ovos frescos.'
  },
  {
    id: 'oml-2',
    name: 'Omelete Vegetariana',
    category: 'sobremesas-omeletes',
    price: 28.90,
    priceFormatted: 'R$ 28,90',
    description: 'Tomate, cebola, pimentão, cheiro verde, orégano e ovos frescos.'
  }
];
