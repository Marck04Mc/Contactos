<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">CONTACTOS</h1>
    
    <ContactForm 
      :contactToEdit="currentContact" 
      @save-contact="handleSaveContact"
      @cancel-edit="cancelEdit"
    />
    
    <ContactTable 
      :contacts="contacts" 
      @edit-contact="editContact" 
      @delete-contact="confirmDeleteContact"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import ContactForm from './components/ContactForm.vue';
import ContactTable from './components/ContactTable.vue';

const API_URL = 'http://localhost:3000/api/contactos';

const contacts = ref([]);
const currentContact = ref(null);

const fetchContacts = async () => {
  try {
    const response = await axios.get(API_URL);
    contacts.value = response.data;
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};

const handleSaveContact = async (contact) => {
  try {
    if (contact.Id) {
      await axios.put(`${API_URL}/${contact.Id}`, contact);
    } else {
      await axios.post(API_URL, contact);
    }
    fetchContacts();
    currentContact.value = null;
  } catch (error) {
    console.error("Error saving contact:", error);
  }
};

const editContact = (contact) => {
  currentContact.value = contact;
};

const cancelEdit = () => {
    currentContact.value = null;
};

const confirmDeleteContact = async (id) => {
  if (confirm("¿Está seguro de eliminar este contacto?")) {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  }
};

onMounted(() => {
  fetchContacts();
});
</script>
