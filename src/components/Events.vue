<script setup>
import {ref} from 'vue'
    const events = ref([
        {
            name : 'Community Outreach at Nothern Kenya',
            image : "../../public/events/donations.jpg",
            date : '16th July',
            location : 'Nothern Kenya',
            category : 'Community Outreach'
        },
         
  {
    name: 'Africa Para Volleyball Championship',
    image: "../../public/events/volleyball.jpg",
    date: '1st - 10th July',
    location: 'Moi Sports Centre, Kasarani',
    category: 'Sports'
  },
  {
    name: 'Dance Life Festival 2025',
    image: "../../public/events/art.jpg",
    date: '4th - 6th July',
    location: 'Hilton Square & various Nairobi venues',
    category: 'Arts & Culture'
  },
  {
    name: 'CTW - China Trade Week - Kenya 2025',
    image: "../../public/events/china.jpg",
    date: '8th - 10th July',
    location: 'Kenyatta International Conference Center, Nairobi',
    category: 'Business & Trade'
  },
  {
    name: 'Saturday Live Band Nairobi',
    image: "../../public/events/jazz.jpg",
    date: '5th July',
    location: 'Roast By Carnivore, Tatu City',
    category: 'Music'
  },
  
    
])
</script>

<template>
    <v-container>
      <v-row>
        <v-col md="4" v-for="event in events":key = 'event'>
          <v-card
    class="mx-auto"
    max-width="400"
    color="green
    "
  >
    <v-img
      class="align-end text-white"
      height="200"
      :src="event.image"
      cover
    >
      <v-card-title>{{event.name}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pt-4">
      Number 10
    </v-card-subtitle>

    <v-card-text>
      <div>{{event.location}}</div>

      <div>Whitsunday Island, Whitsunday Islands</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" :text="event.category"></v-btn>

      <v-btn color="orange" text="Explore"></v-btn>
    </v-card-actions>
  </v-card>
        </v-col>

      </v-row>
    </v-container>
</template>