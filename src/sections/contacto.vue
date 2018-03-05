<template>
  <div id="contacto">
    <b-row>
      <b-col class="col-sm-12">
        <h2>Contacto</h2>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="col-sm-12">
        <form ng-submit="submit(contactform)" name="contactform" method="post" action="" class="form-horizontal contactForm ng-pristine ng-valid ng-scope">
          <div class="form-group">
            <label for="inputName3" class="col-sm-1">Name</label>
            <b-col class="col-sm-4">
              <input type="text" ng-model="formData.inputName" name="name" class="form-control" id="inputName3" required>
            </b-col>
          </div>
          <div class="form-group">
            <label for="inputEmail3" class="col-sm-1">Email</label>
            <b-col class="col-sm-4">
              <input type="email" ng-model="formData.inputEmail" name="email" class="form-control" id="inputEmail3" required>
            </b-col>
          </div>
          <div class="form-group">
            <label for="inputPassword3" class="col-sm-1">Mensaje</label>
            <b-col class="col-sm-4">
              <textarea class="form-control" ng-model="formData.inputMessage" name="message" id="inputPassword3" required></textarea>
            </b-col>
          </div>
          <div class="form-group">
            <b-col class="col-sm-offset-2 col-sm-10">
              <button type="submit" class="btn btn-success" ng-disabled="submitButtonDisabled">Enviar</button>
            </b-col>
          </div>
        </form>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: 'contacto',
  data () {
    return {
      content: 'contacto contacto contacto contacto'
    }
  }
}
</script>
