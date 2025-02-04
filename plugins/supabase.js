import { createClient } from '@supabase/supabase-js'

export default defineNuxtPlugin(() => {

    const config = useRuntimeConfig()

    const supabaseUrl = config.public.supabaseUrl
    const supabaseKey = config.public.supabaseKey
  // Supabase-client aanmaken
  const supabase = createClient(
    supabaseUrl,
    supabaseKey
  )

  // Supabase injecteren in de Nuxt-app
  return {
    provide: { supabase },
  }
})