// sanity.js
import {createClient} from '@sanity/client'
// Import using ESM URL imports in environments that supports it:
// import {createClient} from 'https://esm.sh/@sanity/client'

export const client = createClient({
  projectId:import.meta.env.VITE_PROJECT_ID,
  //Dataset Variable from env local
  dataset:import.meta.env.VITE_DATASET_NAME,
  useCdn: false, // set to `false` to bypass the edge cache
  apiVersion: '2024-02-04', // use current date (YYYY-MM-DD) to target the latest API version
  token:import.meta.env.VITE_SANITY_TOKEN, // Only if you want to update content with the client
  ignoreBrowserTokenWarning: true
})



