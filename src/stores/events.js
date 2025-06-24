// src/stores/events.js
import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useEventsStore = defineStore('events', () => {
  const events = ref([
    {
      name: "Community Outreach",
      image: "/images/logo6.png",
      date: "July 6th 2025",
      location: "Northern Kenya School",
      category: "Community Outreach"
    },
    {
      name: "Food Fair",
      image: "/images/food fair.avif",
      date: "June 30th 2025",
      location: "Uhuru Gardens",
      category: "Culture"
    },
    {
      name: "InterSports",
      image: "/images/sports.avif",
      date: "July 29th 2025",
      location: "Ulinzi Stadium",
      category: "Sports"
    },
    {
      name: "Cultural Day",
      image: "/images/cultural day.avif",
      date: "August 5th 2025",
      location: "KICC Grounds",
      category: "Culture"
    }
  ])

  return { events }
})
