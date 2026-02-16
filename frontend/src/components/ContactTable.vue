<template>
  <div class="card">
    <div class="card-header">
      Lista de Contactos
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-striped table-hover">
          <thead>
            <tr>
              <th>Nombre Completo</th>
              <th>Identificación</th>
              <th>Teléfono</th>
              <th>Correo</th>
              <th>Cliente</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="contact in contacts" :key="contact.Id">
              <td>{{ contact.Nombres }} {{ contact.Apellido }}</td>
              <td>{{ contact.TipoIdentificacion }} - {{ contact.Identificacion }}</td>
              <td>{{ contact.Telefono }}</td>
              <td>{{ contact.Correo }}</td>
              <td>
                  <span v-if="contact.Cliente" class="badge bg-success">Si</span>
                  <span v-else class="badge bg-secondary">No</span>
              </td>
              <td>
                <button class="btn btn-sm btn-warning me-2" @click="$emit('edit-contact', contact)">Editar</button>
                <button class="btn btn-sm btn-danger" @click="$emit('delete-contact', contact.Id)">Eliminar</button>
              </td>
            </tr>
            <tr v-if="contacts.length === 0">
                <td colspan="6" class="text-center">No hay contactos registrados.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  contacts: {
    type: Array,
    required: true
  }
});

defineEmits(['edit-contact', 'delete-contact']);
</script>
