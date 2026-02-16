<template>
  <div class="card mb-4">
    <div class="card-header">
      Formulario de Contacto
    </div>
    <div class="card-body">
      <form @submit.prevent="submitForm">
        <div class="row">
          <div class="col-md-4 mb-3">
            <label for="tipoIdentificacion" class="form-label">Tipo de Identificación</label>
            <select class="form-select" id="tipoIdentificacion" v-model="contact.TipoIdentificacion" required>
              <option value="" disabled>Seleccione...</option>
              <option value="CC">CC</option>
              <option value="TI">TI</option>
              <option value="NIT">NIT</option>
            </select>
          </div>
          <div class="col-md-4 mb-3">
            <label for="identificacion" class="form-label">Identificación</label>
            <input type="text" class="form-control" id="identificacion" v-model="contact.Identificacion" maxlength="20" required>
          </div>
          <div class="col-md-4 mb-3">
             <div class="form-check mt-4">
              <input class="form-check-input" type="checkbox" id="cliente" v-model="contact.Cliente">
              <label class="form-check-label" for="cliente">
                ¿Es Cliente?
              </label>
            </div>
          </div>
        </div>
        
        <div class="row">
          <div class="col-md-6 mb-3">
            <label for="nombres" class="form-label">Nombres</label>
            <input type="text" class="form-control" id="nombres" v-model="contact.Nombres" maxlength="50" required>
          </div>
          <div class="col-md-6 mb-3">
             <label for="apellido" class="form-label">Apellidos</label>
             <input type="text" class="form-control" id="apellido" v-model="contact.Apellido" maxlength="50" required>
          </div>
        </div>
        
        <div class="row">
           <div class="col-md-6 mb-3">
            <label for="telefono" class="form-label">Teléfono</label>
            <input type="number" class="form-control" id="telefono" v-model="contact.Telefono" max="9999999999" required>
          </div>
          <div class="col-md-6 mb-3">
            <label for="correo" class="form-label">Correo Electrónico</label>
            <input type="email" class="form-control" id="correo" v-model="contact.Correo" maxlength="120" required>
          </div>
        </div>

        <div class="mb-3">
           <label for="direccion" class="form-label">Dirección</label>
           <input type="text" class="form-control" id="direccion" v-model="contact.Direccion" maxlength="120" required>
        </div>

        <button type="submit" class="btn btn-primary">{{ isEditing ? 'Actualizar' : 'Guardar' }}</button>
        <button type="button" class="btn btn-secondary ms-2" v-if="isEditing" @click="cancelEdit">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';

const props = defineProps({
  contactToEdit: {
    type: Object,
    default: null
  }
});

const emit = defineEmits(['save-contact', 'cancel-edit']);

const contact = ref({
  TipoIdentificacion: '',
  Identificacion: '',
  Nombres: '',
  Apellido: '',
  Telefono: '',
  Direccion: '',
  Correo: '',
  Cliente: false
});

const isEditing = ref(false);

watch(() => props.contactToEdit, (newVal) => {
  if (newVal) {
    contact.value = { ...newVal };
    isEditing.value = true;
  } else {
    resetForm();
  }
});

const submitForm = () => {
    emit('save-contact', contact.value);
    if (!isEditing.value) {
        resetForm();
    }
};

const cancelEdit = () => {
    resetForm();
    emit('cancel-edit');
};

const resetForm = () => {
    contact.value = {
        TipoIdentificacion: '',
        Identificacion: '',
        Nombres: '',
        Apellido: '',
        Telefono: '',
        Direccion: '',
        Correo: '',
        Cliente: false
    };
    isEditing.value = false;
};
</script>
