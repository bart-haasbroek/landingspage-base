export const useSupabase = (tableName) => {
    const { $supabase: supabase } = useNuxtApp()
    const loading = ref(false)
    const error = ref(null)

    // Foutafhandelingsfunctie
    const handleError = (errorMessage) => {
      error.value = errorMessage
      loading.value = false
    }

    // Haal alle items op uit een bepaalde tabel
    async function getAll() {
      loading.value = true
      error.value = null // reset error
      try {
        const { data, error: dbError } = await supabase.from(tableName).select('*')
        if (dbError) throw new Error(dbError.message)
        loading.value = false
        return data
      } catch (err) {
        handleError(err.message)
      }
    }

    // Haal één item op uit een tabel
    async function getOne(id) {
      loading.value = true
      error.value = null // reset error
      try {
        const { data, error: dbError } = await supabase.from(tableName).select('*').eq('id', id).single()
        if (dbError) throw new Error(dbError.message)
        loading.value = false
        return data
      } catch (err) {
        handleError(err.message)
      }
    }

    // Voeg meerdere items toe aan een tabel
    async function addMany(items) {
      loading.value = true
      error.value = null // reset error
      try {
        const { data, error: dbError } = await supabase.from(tableName).insert(items)
        if (dbError) throw new Error(dbError.message)
        loading.value = false
        return data
      } catch (err) {
        handleError(err.message)
      }
    }

    // Voeg één item toe aan een tabel
    async function addOne(item) {
      loading.value = true
      error.value = null // reset error
      try {
        const { data, error: dbError } = await supabase.from(tableName).insert(item)
        if (dbError) throw new Error(dbError.message)
        loading.value = false
        return data
      } catch (err) {
        handleError(err.message)
      }
    }

    // Werk één item bij in een tabel
    async function updateOne(id, updatedItem) {
      loading.value = true
      error.value = null // reset error
      try {
        const { data, error: dbError } = await supabase.from(tableName).update(updatedItem).eq('id', id)
        if (dbError) throw new Error(dbError.message)
        loading.value = false
        return data
      } catch (err) {
        handleError(err.message)
      }
    }

    // Werk meerdere items bij in een tabel
    async function updateMany(ids, updatedItems) {
      loading.value = true
      error.value = null // reset error
      try {
        const { data, error: dbError } = await supabase.from(tableName).update(updatedItems).in('id', ids)
        if (dbError) throw new Error(dbError.message)
        loading.value = false
        return data
      } catch (err) {
        handleError(err.message)
      }
    }

    // Verwijder één item uit een tabel
    async function deleteOne(id) {
      loading.value = true
      error.value = null // reset error
      try {
        const { data, error: dbError } = await supabase.from(tableName).delete().eq('id', id)
        if (dbError) throw new Error(dbError.message)
        loading.value = false
        return data
      } catch (err) {
        handleError(err.message)
      }
    }

    // Verwijder meerdere items uit een tabel
    async function deleteMany(ids) {
      loading.value = true
      error.value = null // reset error
      try {
        const { data, error: dbError } = await supabase.from(tableName).delete().in('id', ids)
        if (dbError) throw new Error(dbError.message)
        loading.value = false
        return data
      } catch (err) {
        handleError(err.message)
      }
    }

    return {
      loading,
      error,
      getAll,
      getOne,
      addMany,
      addOne,
      updateOne,
      updateMany,
      deleteOne,
      deleteMany,
    }
  }
