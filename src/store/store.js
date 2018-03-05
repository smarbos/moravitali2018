import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let cv = [
  {
  "anio": 2017,
  "items": [
    {
      "nombre":"Cartas de Muerte y Amenazas de Amor, exposición individual en la Casa de Madera.",
      "link":"",
    },
    {
      "nombre":"Aquelarre, exposición colectiva de Artistas Feministas Autoconvocadas, en La Rosa Blindada.",
      "link":"",
    },
    {
      "nombre":"Creadores de Imágenes, taller de fotografía a cargo de Julia Sbriller",
      "link":"",
    }
  ]
},
{
  "anio":2016,
  "items": [
    {
      "nombre":"Empoderadas, exposición colectiva en El Emergente.",
      "link":""
    }
  ]
},
{
  "anio": 2013,
  "items": [
    {
      "nombre":"ARTE contra la TRATA, Exposición colectiva coordinada por la Fundación Alameda en la Biblioteca Popular Juventud Moderna.",
      "link":"http://www.0223.com.ar/k/2013-7-9-arte-contra-la-trata",
    },
    {
      "nombre":"Las Mo(i)ras, Exposición individual, en Espacio de Arte Irene Melillo. ",
      "link":"",
    },
    {
      "nombre":"Seminario sobre fotografía dictado por Gaby Herbstein.",
      "link":"http://www.0223.com.ar/k/2013-7-9-arte-contra-la-trata",
    },
    {
      "nombre":"Abriendo las puertas de la percepción, exposición junto a Maria Casalins en Ofelia, Casa Teatro, CABA.",
      "link":"http://www.arte-online.net/Agenda/Exposiciones_Muestras/Abriendo_las_puertas_de_la_percepcion",
    }
  ]
},
{
  "anio": 2011,
  "items": [
    {
      "nombre":"A Simple Love Story, exposición individual. Colgada en la Casa de Madera, y en la Biblioteca Central de la UNMDP.",
      "link":"http://galeriacasademadera.blogspot.com.ar/2011/06/simple-love-story-muestra-fotografica.html",
      "video":"https://www.youtube.com/watch?v=EQy8asYEYm4"
    }
  ]
},
{
  "anio": 2010,
  "items": [
    {
      "nombre":"La Mirada. Diez mujeres marplatenses, exposición colectiva en la Casa de Madera.",
      "link":"http://www.mdphoy.com/la-mirada-de-la-mujer-en-el-arte-16380/"
    }
  ]
},
{
  "anio": 2009,
  "items": [
    {
      "nombre":"Título en Fotografía Profesional, Escuela de Artes Visuales Martín A. Malharro, Mar del Plata.",
      "link":"",
    },
    {
      "nombre":"Sólo los superficiales se conocen a sí mismos, exposición individual en el Teatro Diagonal.",
      "link":"",
    },
    {
      "nombre":"Novia en rojo, exposición individual acompañando la pieza teatral del mismo nombre, por el grupo de Teatro del Secadero.",
      "link":"",
    },
    {
      "nombre":"El Viaje, exposición colectiva expuesta en el Centro Cultural Recoleta.",
      "link":"",
    },
    {
      "nombre":"La Pampa, exposición colectiva con la Universidad de Birmingham, en el centro cultural Villa Victoria Ocampo.",
      "link":"",
    }
  ]
},
{
  "anio": 2008,
  "items": [
    {
      "nombre":"Homenaje a Piazzolla, exposición colectiva en el centro cultural Villa Victoria Ocampo.",
      "link":"",
    },
    {
      "nombre":"Técnica Ayudante en el seminario Manipulación de Imágenes con Medios Digitales Universidad Tecnológica Nacional.",
      "link":"",
    },
    {
      "nombre":"A la manera de Hockney, exposición colectiva, SUM de la escuela de Artes Visuales, SUM de La Trattoria.",
      "link":"",
    }
  ]
},
{
  "anio": 2007,
  "items": [{
    "nombre":"Tecnicatura en Fotografía, Escuela de Artes Visuales Martín A. Malharro, Mar del Plata.",
    "link":""
  },
  {
    "nombre":"Vida, exposición al aire libre en la plaza San Martín, organizada por la Federación de Estudiantes Secundarios en conmemoración al aniversario de la Noche de los Lápices.",
    "link":"",
  }]
},
{
  "anio": 2006,
  "items": [{
    "nombre":"Desde adentro. Miradas del Complejo Centenario, exposición colectiva en la Facultad de Humanidades. Participación con una fotografía del libro del mismo título.",
    "link":""
  }]
}];

let portfolio = [ {
  "name":"Cartas de muerte y amenazas de amor.",
  "ref":"cartas",
  "items":[ {
    "id":0,
    "type":"txt",
    "titulo":"Cartas de muerte y amenazas de amor.",
    "content":"Accidente es un concepto metafísico, propuesto por Aristóteles. <br>Aristóteles dice que el ser está compuesto por la sustancia, inmutable salvo por los momentos de generacion y corrupcion, y que lo demás está determinado por los accidentes. <br>Los accidentes son mutables. Entonces, si el ser de la sustancia es una persona, puede morir, o nacer. Todo lo demás es accidente. Tamaño, accidente. Forma, accidente. Color, accidente. Lugar, accidente. Relación, accidente. Pasión, accidente. Cuerpo, accidente. <br><br>Para la fotografía, la sustancia sería algo así como la luz, tal vez la luz combinada con el instante. Lo demas es accidente.",
    "thumbnail":"asimplelovestori_02_thumb.jpg"
  },
  {
    "id":1,
    "type":"img",
    "titulo":"Titulo 1",
    "content":"cartasOdioAmenazasAmor_01.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_01_thumb.jpg"
  },
  {
    "id":2,
    "type":"img",
    "titulo":"Titulo 2",
    "content":"cartasOdioAmenazasAmor_02.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_02_thumb.jpg"
  },
  {
    "id":3,
    "type":"img",
    "titulo":"Titulo 3",
    "content":"cartasOdioAmenazasAmor_03.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_03_thumb.jpg"
  },
  {
    "id":4,
    "type":"img",
    "titulo":"Titulo 4",
    "content":"cartasOdioAmenazasAmor_04.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_04_thumb.jpg"
  }, {
    "id":5,
    "type":"img",
    "titulo":"Titulo 5",
    "content":"cartasOdioAmenazasAmor_05.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_05_thumb.jpg"
  }, {
    "id":6,
    "type":"img",
    "titulo":"Titulo 6",
    "content":"cartasOdioAmenazasAmor_06.jpg",
    "thumbnail":"imgcartasOdioAmenazasAmor_thumb.jpg"
  },
  {
    "id":7,
    "type":"img",
    "titulo":"Titulo 7",
    "content":"cartasOdioAmenazasAmor_07.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_07_thumb.jpg"
  },
  {
    "id":8,
    "type":"img",
    "titulo":"Titulo 8",
    "content":"cartasOdioAmenazasAmor_08.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_08_thumb.jpg"
  },
  {
    "id":9,
    "type":"img",
    "titulo":"Titulo 9",
    "content":"cartasOdioAmenazasAmor_09.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_09_thumb.jpg"
  },
  {
    "id":10,
    "type":"img",
    "titulo":"Titulo 10",
    "content":"cartasOdioAmenazasAmor_10.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_10_thumb.jpg"
  },
  {
    "id":11,
    "type":"img",
    "titulo":"Titulo 11",
    "content":"cartasOdioAmenazasAmor_11.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_11_thumb.jpg"
  },
  {
    "id":12,
    "type":"img",
    "titulo":"Titulo 12",
    "content":"cartasOdioAmenazasAmor_12.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_12_thumb.jpg"
  },
  {
    "id":13,
    "type":"img",
    "titulo":"Titulo 13",
    "content":"cartasOdioAmenazasAmor_13.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_13_thumb.jpg"
  },
  {
    "id":14,
    "type":"img",
    "titulo":"Titulo 14",
    "content":"cartasOdioAmenazasAmor_14.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_14_thumb.jpg"
  },
  {
    "id":15,"type":"img",
    "titulo":"Titulo 15",
    "content":"cartasOdioAmenazasAmor_15.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_15_thumb.jpg"
  },
  {
    "id":15,"type":"img",
    "titulo":"Titulo 15",
    "content":"cartasOdioAmenazasAmor_5.jpg",
    "thumbnail":"cartasOdioAmenazasAmor_15_thumb.jpg"
  }]
},
{
  "name":"a simple love story",
  "ref":"lovestory",
  "items":[
  {
    "id":1,
    "type":"img",
    "titulo":"Titulo 1",
    "content":"asimplelovestori_01.jpg",
    "thumbnail":"asimplelovestori_01_thumb.jpg"
  },
  {
    "id":3,
    "type":"img",
    "titulo":"Titulo 3",
    "content":"asimplelovestori_03.jpg",
    "thumbnail":"asimplelovestori_03_thumb.jpg"
  },
  {
    "id":4,
    "type":"img",
    "titulo":"Titulo 4",
    "content":"asimplelovestori_04.jpg",
    "thumbnail":"asimplelovestori_04_thumb.jpg"
  },
  {
    "id":5,
    "type":"img",
    "titulo":"Titulo 5",
    "content":"asimplelovestori_05.jpg",
    "thumbnail":"asimplelovestori_05_thumb.jpg"
  },
  {
    "id":6,
    "type":"img",
    "titulo":"Titulo 6",
    "content":"asimplelovestori_06.jpg",
    "thumbnail":"asimplelovestori_06_thumb.jpg"
  },
  {
    "id":7,
    "type":"img",
    "titulo":"Titulo 7",
    "content":"asimplelovestori_07.jpg",
    "thumbnail":"asimplelovestori_07_thumb.jpg"
  },
  {
    "id":8,
    "type":"img",
    "titulo":"Titulo 8",
    "content":"asimplelovestori_08.jpg",
    "thumbnail":"asimplelovestori_08_thumb.jpg"
  },
  {
    "id":9,
    "type":"img",
    "titulo":"Titulo 9",
    "content":"asimplelovestori_09.jpg",
    "thumbnail":"asimplelovestori_09_thumb.jpg"
  },
  {
    "id":10,
    "type":"img",
    "titulo":"Titulo 10",
    "content":"asimplelovestori_10.jpg",
    "thumbnail":"asimplelovestori_10_thumb.jpg"
  },
  {
    "id":11,
    "type":"img",
    "titulo":"Titulo 11",
    "content":"asimplelovestori_11.jpg",
    "thumbnail":"asimplelovestori_11_thumb.jpg"
  },
  {
    "id":12,
    "type":"img",
    "titulo":"Titulo 12",
    "content":"asimplelovestori_12.jpg",
    "thumbnail":"asimplelovestori_12_thumb.jpg"
  },
  {
    "id":13,
    "type":"img",
    "titulo":"Titulo 13",
    "content":"asimplelovestori_13.jpg",
    "thumbnail":"asimplelovestori_13_thumb.jpg"
  },
  {
    "id":14,
    "type":"img",
    "titulo":"Titulo 14",
    "content":"asimplelovestori_14.jpg",
    "thumbnail":"asimplelovestori_14_thumb.jpg"
  },
  {
    "id":15,"type":"img",
    "titulo":"Titulo 15",
    "content":"asimplelovestori_15.jpg",
    "thumbnail":"asimplelovestori_15_thumb.jpg"
  }]
},
{
  "name":"novia en rojo",
  "ref":"noviaenrojo",
  "items":[
  {
    "id":1,
    "type":"img",
    "titulo":"Titulo 1",
    "content":"noviaenrojo_1.jpg",
    "thumbnail":"noviaenrojo_1_thumb.jpg"
  },
  {
    "id":2,
    "type":"img",
    "titulo":"Titulo 2",
    "content":"noviaenrojo_2.jpg",
    "thumbnail":"noviaenrojo_2_thumb.jpg"
  },
  {
    "id":3,
    "type":"img",
    "titulo":"Titulo 3",
    "content":"noviaenrojo_3.jpg",
    "thumbnail":"noviaenrojo_3_thumb.jpg"
  },
  {
    "id":4,
    "type":"img",
    "titulo":"Titulo 4",
    "content":"noviaenrojo_4.jpg",
    "thumbnail":"noviaenrojo_4_thumb.jpg"
  },
  {
    "id":5,
    "type":"img",
    "titulo":"Titulo 5",
    "content":"noviaenrojo_5.jpg",
    "thumbnail":"noviaenrojo_5_thumb.jpg"
  },
  {
    "id":6,
    "type":"img",
    "titulo":"Titulo 6",
    "content":"noviaenrojo_6.jpg",
    "thumbnail":"noviaenrojo_6_thumb.jpg"
  }]
},
{
  "name":"Analogicas",
  "ref":"analogicas",
  "items":[
  {
    "id":1,
    "type":"img",
    "titulo":"Titulo 1",
    "content":"toycams_1.JPG",
    "thumbnail":"toycams_1_thumb.jpg"
  },
  {
    "id":2,
    "type":"img",
    "titulo":"Titulo 2",
    "content":"toycams_2.JPG",
    "thumbnail":"toycams_2_thumb.jpg"
  },
  {
    "id":4,
    "type":"img",
    "titulo":"Titulo 4",
    "content":"toycams_4.JPG",
    "thumbnail":"toycams_4_thumb.jpg"
  },
  {
    "id":5,
    "type":"img",
    "titulo":"Titulo 5",
    "content":"toycams_5.JPG",
    "thumbnail":"toycams_5_thumb.jpg"
  }]
},
{
  "name":"las mo(i)ras",
  "ref":"lasmoiras",
  "items":[
  {
    "id":1,
    "type":"img",
    "titulo":"Titulo 1",
    "content":"las_moiras_1.jpg",
    "thumbnail":"las_moiras_1_thumb.jpg"
  },
  {
    "id":2,
    "type":"img",
    "titulo":"Titulo 2",
    "content":"las_moiras_2.jpg",
    "thumbnail":"las_moiras_2_thumb.jpg"
  },
  {
    "id":3,
    "type":"img",
    "titulo":"Titulo 3",
    "content":"las_moiras_3.jpg",
    "thumbnail":"las_moiras_3_thumb.jpg"
  },
  {
    "id":4,
    "type":"img",
    "titulo":"Titulo 4",
    "content":"las_moiras_4.jpg",
    "thumbnail":"las_moiras_4_thumb.jpg"
  },
  {
    "id":5,
    "type":"img",
    "titulo":"Titulo 5",
    "content":"las_moiras_5.jpg",
    "thumbnail":"las_moiras_5_thumb.jpg"
  },
  {
    "id":6,
    "type":"img",
    "titulo":"Titulo 6",
    "content":"las_moiras_6.jpg",
    "thumbnail":"las_moiras_6_thumb.jpg"
  },
  {
    "id":7,
    "type":"img",
    "titulo":"Titulo 7",
    "content":"las_moiras_7.jpg",
    "thumbnail":"las_moiras_7_thumb.jpg"
  },
  {
    "id":8,
    "type":"img",
    "titulo":"Titulo 8",
    "content":"las_moiras_8.jpg",
    "thumbnail":"las_moiras_8_thumb.jpg"
  }]
},
{
  "name":"arte contra la trata",
  "ref":"artecontralatrata",
  "items":[
    {
      "id":1,
      "type":"img",
      "titulo":"Titulo 1",
      "content":"alameda_1.jpg",
      "thumbnail":"alameda_1_thumb.jpg"
    },
    {
      "id":2,
      "type":"img",
      "titulo":"Titulo 2",
      "content":"alameda_2.jpg",
      "thumbnail":"alameda_2_thumb.jpg"
    },
    {
      "id":3,
      "type":"img",
      "titulo":"Titulo 3",
      "content":"alameda_3.jpg",
      "thumbnail":"alameda_3_thumb.jpg"
    }]
}];

let publicaciones = [
    {
      "id":1,
      "titulo":"Joseph Beuys: de liebre a coyote",
      "link":"http://proa.org/documents/9-Mora-Vitali.pdf",
      "img":"/beuys.png"
    },
    {
      "id":2,
      "titulo":"Bienestar Entrevista",
      "link":"https://www.0223.com.ar/nota/2014-2-3-lo-que-funciona-y-lo-que-no-funciona",
      "img":"/bienestar.jpg"
    },
    {
      "id":3,
      "titulo":"Alice Austen y la performance de masculinidad",
      "link":"http://somosturma.com/mujeres-que-se-miran-alice-austen/",
      "img":"/fotografiayfeminismo2.jpg"
    },
    {
      "id":4,
      "titulo":"Grete Stern y Annemarie Heinrich: el autorretrato como parte de la praxis profesional",
      "link":"http://somosturma.com/fotografia-y-feminismo-2/",
      "img":"/mujeresquesemiranaliceausten.jpg"
    },
    {
      "id":5,
      "titulo":"Sobre Cartas de Muerte y Amenazas de Amor",
      "link":"http://escriturasindie.blogspot.com.ar/2017/08/visuales-mora-vitali.html",
      "img":"/visualesmoravitali.jpg"
    },
    {
      "id":6,
      "titulo":"Entrevista a Lucia Reissig. Explorando el territorio de la invisibilidad",
      "link":"https://escriturasindie.blogspot.com.ar/2017/12/que-sea-todo.html",
      "img":"/queseatodo.jpg"
    },
    {
      "id":7,
      "titulo":"Francesca Woodman y la puesta en escena de sí misma",
      "link":"http://somosturma.com/fotografia-y-feminismo-3/",
      "img":"/Francesca-Woodman-Self-deceit-web.jpg"
    }];

const state = {
  'tittle': 'Mora Vitali',
  'secciones': {
    'portfolio': portfolio,
    'bio': {},
    'cv': cv,
    'contacto': {},
    'publicaciones': publicaciones
  },
  'sideMenu': [
    {
      'name': 'portfolio',
      'childs': portfolio
    },
    {
      'name': 'bio',
      'childs': []
    },
    {
      'name': 'cv',
      'childs': []
    },
    {
      'name': 'contacto',
      'childs': []
    },
    {
      'name': 'publicaciones',
      'childs': publicaciones
    }
  ]
}

export default new Vuex.Store({
  state
})
