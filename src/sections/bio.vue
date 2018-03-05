<template>
  <div id="bio">
    <b-row>
      <b-col class="col-sm-12">
        <h2>Bio</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="col-sm-12">
        <p>
          Mora Vitali nació en Mar del Plata, en 1988. Cursó la carrera de Fotografía en la Escuela de Artes Visuales Martín A. Malharro. Sus trabajos han recorrido espacios de arte como la histórica galería Casa de Madera y la sala de la Biblioteca Central de la UNMDP, el Teatro Diagonal, y  centros culturales de Argentina y Venezuela.Participó en distintas muestras colectivas, en el Centro Cultural Recoleta, (El Viaje, curada por Pilar Altilio, también vista en el Espacio Contemporáneo de Arte ECA Mendoza), Villa Victoria Ocampo y El Centro Cultural Auditorium. Sus fotos participan de publicaciones gráficas como la revista 'AfterPop', y el libro 'Desde adentro. Miradas del Complejo Centenario'. En este momento cursa en la UBA la Licenciatura en Artes Plásticas, y vive en la Ciudad de Buenos Aires.
        </p>
        <p>
            <a href="http://www.flickr.com/photos/mint_morning/">www.flickr.com/mint_morning/</a>
        </p>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'bio',
  data () {
    return {
      content: 'bio bio bio bio'
    }
  }
}
</script>

<style lang="scss" scoped>
  #bio {
    text-align: left;
  }
</style>
