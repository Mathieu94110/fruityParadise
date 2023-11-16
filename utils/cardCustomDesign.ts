// this part will be improved for sure now its fo tests
const getFamilyDesign = (family: string) => {
  switch (family) {
    case 'Rosaceae':
      return { borderColor: '#FFD700', emoji: '⚡️' };
    case 'Ebenaceae':
      return { borderColor: '#6493EA', emoji: '💧' };
    case 'Musaceae':
      return { borderColor: '#FF5733', emoji: '🔥' };
    case 'Solanaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Malvaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Ericaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Actinidiaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Moraceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Bromeliaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Sapindaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Rutaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Clusiaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Betulaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Cucurbitaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Lauraceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Myrtaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Vitaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Cactaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Lythraceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Caricaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Lythraceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Anacardiaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Passifloraceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    case 'Grossulariaceae':
      return { borderColor: '#66CC66', emoji: '🌿' };
    default:
      return { borderColor: '#A0A0A0', emoji: '❓' };
  }
};

const FRUITS_IMG = {
  Persimmon:
    'https://images.immediate.co.uk/production/volatile/sites/30/2020/02/persimmon-0790ddb.jpg?quality=90&resize=556,505',
  Strawberry:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg/220px-Garden_strawberry_%28Fragaria_%C3%97_ananassa%29_single2.jpg',
  Banana:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Bananas_white_background_DS.jpg/220px-Bananas_white_background_DS.jpg',
  Tomato:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/220px-Tomato_je.jpg',
  Pear: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Assortment_of_pears.jpg/220px-Assortment_of_pears.jpg',
  Durian:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Durian_in_black.jpg/220px-Durian_in_black.jpg',
  Blackberry:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Blackberry_%28Rubus_fruticosus%29.jpg/235px-Blackberry_%28Rubus_fruticosus%29.jpg',
  Lingonberry:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Tytteb%C3%A6r.jpg/200px-Tytteb%C3%A6r.jpg',
  Kiwi: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Kiwifruit_cross_section.jpg/220px-Kiwifruit_cross_section.jpg',
  Lychee:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Litchi_chinensis_Luc_Viatour.jpg/235px-Litchi_chinensis_Luc_Viatour.jpg',
  Pineapple:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Pineapple_and_cross_section.jpg/220px-Pineapple_and_cross_section.jpg',
  Fig: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Figs.jpg/220px-Figs.jpg',
  Gooseberry: 'https://the.ismaili/sites/default/files/5276.jpg',
  Passionfruit:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Passionfruit_%28whole_and_half%29.jpg/1024px-Passionfruit_%28whole_and_half%29.jpg',
  Plum: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Slivka.JPG',
  Orange:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b0/OrangeBloss_wb.jpg/220px-OrangeBloss_wb.jpg',
  GreenApple:
    'https://fruityland.co/wp-content/uploads/2021/01/Granny-smith-green-apple-FL.jpg',
  Raspberry:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Raspberries_%28Rubus_idaeus%29.jpg/1920px-Raspberries_%28Rubus_idaeus%29.jpg',
  Watermelon:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Watermelon_cross_BNC.jpg/1920px-Watermelon_cross_BNC.jpg',
  Lemon: 'https://upload.wikimedia.org/wikipedia/commons/e/e4/P1030323.JPG',
  Mango:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Mango_LangraBenarsi_Asit_fs8.jpg/220px-Mango_LangraBenarsi_Asit_fs8.jpg',
  Blueberry:
    'https://upload.wikimedia.org/wikipedia/commons/1/15/Blueberries.jpg',
  Apple: 'https://upload.wikimedia.org/wikipedia/commons/9/92/95apple.jpeg',
  Guava: 'https://upload.wikimedia.org/wikipedia/commons/0/02/Guava_ID.jpg',
  Apricot:
    'https://upload.wikimedia.org/wikipedia/commons/2/2a/Apricot_and_cross_section.jpg',
  Papaya:
    'https://img.etimg.com/thumb/msid-100496028,width-640,height-480,imgsize-82120,resizemode-4/anti-ageing.jpg',
  Melon:
    'https://upload.wikimedia.org/wikipedia/commons/b/b2/Cucumis_melo_inodorus_argos.jpg',
  Tangerine:
    'https://upload.wikimedia.org/wikipedia/commons/2/2a/TangerineFruit.jpg',
  Pitahaya:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Pitaya_cross_section_ed2.jpg/1280px-Pitaya_cross_section_ed2.jpg',
  Lime: 'https://static.libertyprim.com/files/familles/lime-large.jpg?1569491474',
  Pomegranate:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Pomegranate_Juice_%282019%29.jpg/1920px-Pomegranate_Juice_%282019%29.jpg',
  Dragonfruit:
    'https://miamifruit.org/cdn/shop/products/image_fc8a7467-0b79-4a0a-87b7-019b59264e8f_1000x1000.jpg?v=1571681688',
  Grape:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Grapefruits_-_whole-halved-segments.jpg/1920px-Grapefruits_-_whole-halved-segments.jpg',
  Morus: 'https://zfarm.fr/wp-content/uploads/2023/01/morus-nigra.jpg',
  Feijoa:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Acca_sellowiana_Fruit_MHNT_Fronton.jpg/1280px-Acca_sellowiana_Fruit_MHNT_Fronton.jpg',
  Avocado:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Avocado_Hass_-_single_and_halved.jpg/1920px-Avocado_Hass_-_single_and_halved.jpg',
  Kiwifruit:
    'https://www.planfor.fr/Donnees_Site/Produit/Images/8325/kiwi-jaune-chair-rouge_FR_500_0027658.jpg',
  Cranberry:
    'https://upload.wikimedia.org/wikipedia/commons/4/45/Cranberries20101210.jpg',
  Cherry:
    'https://upload.wikimedia.org/wikipedia/commons/d/dd/Cherry_season_%2848216568192%29.jpg',
  Peach:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Autumn_Red_peaches.jpg/1920px-Autumn_Red_peaches.jpg',
  Jackfruit:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Jack_fruits_in_Kerala_001.jpg/1920px-Jack_fruits_in_Kerala_001.jpg',
  'Horned Melon':
    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Cucumis_metuliferus_fruit_cross_section.jpg/1280px-Cucumis_metuliferus_fruit_cross_section.jpg',
  Hazelnut: 'https://upload.wikimedia.org/wikipedia/commons/3/32/Haselnuss.jpg',
  Pomelo:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Pomelo_fruit.jpg/1280px-Pomelo_fruit.jpg',
  Mangosteen:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Mangosteens_-_whole_and_opened.jpg/1920px-Mangosteens_-_whole_and_opened.jpg',
};
export { getFamilyDesign, FRUITS_IMG };
