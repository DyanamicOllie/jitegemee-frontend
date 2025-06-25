<script setup>
import { ref, computed } from 'vue'
import { useCoursesStore } from '../stores/courses'

const coursesStore = useCoursesStore()

// computed course
const selectedCourse = computed(() =>
  coursesStore.courses.find(course => course.id === coursesStore.selectedCourse)
)

// form field refs
const firstName = ref('')
const middleName = ref('')
const lastName = ref('')
const emailAdress = ref('')
const phoneNumber = ref('')
const physicalAddress = ref('')
const gender = ref('')
const dob = ref('')
const nationality = ref('')

// object to hold all form data
const applicationFormDetails = computed(() => ({
  firstName: firstName.value,
  middleName: middleName.value,
  lastName: lastName.value,
  emailAdress: emailAdress.value,
  phoneNumber: phoneNumber.value,
  physicalAddress: physicalAddress.value,
  gender: gender.value,
  dob: dob.value,
  nationality: nationality.value
}))

// submit function
function saveData() {
  console.log('Form Submitted:')
  for (let key in applicationFormDetails.value) {
    console.log(`${key}: ${applicationFormDetails.value[key]}`)
  }
}
</script>

<template>
  <v-container>
    <v-row>
      <p v-if="selectedCourse">
        You are applying for <strong>{{ selectedCourse.name }}</strong>, the next intake is in
        <strong>{{ selectedCourse.intake }}</strong>
      </p>
      <p v-else>
        No course selected. Please go back and choose one.
      </p>
    </v-row>
  </v-container>

  <!-- Apply form -->
  <v-container>
    <v-row>
      <v-col md="4">
        <v-text-field label="First Name" v-model="firstName" />
      </v-col>
      <v-col md="4">
        <v-text-field label="Middle Name" v-model="middleName" />
      </v-col>
      <v-col md="4">
        <v-text-field label="Last Name" v-model="lastName" />
      </v-col>
    </v-row>

    <v-row>
      <v-col md="4">
        <v-text-field label="Email Address" v-model="emailAdress" />
      </v-col>
      <v-col md="4">
        <v-text-field label="Phone Number" v-model="phoneNumber" />
      </v-col>
      <v-col md="4">
        <v-text-field label="Physical Address" v-model="physicalAddress" />
      </v-col>
    </v-row>

    <v-row>
      <v-col md="4">
        <v-text-field label="Gender" v-model="gender" />
      </v-col>
      <v-col md="4">
        <v-text-field label="Date of Birth" type="date" v-model="dob" />
      </v-col>
      <v-col md="4">
        <v-text-field label="Nationality" v-model="nationality" />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-btn block color="primary" @click="saveData">
          Submit
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
