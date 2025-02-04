export class SupaBaseCrudFactory {
    defaultConfig = {
      idKey: "id",
    };
    supabase;
    table;
    config;
    constructor(supabaseClient, table, config = {}) {
      this.config = { ...this.defaultConfig, ...config };
      this.table = table;
      this.supabase = supabaseClient;
    }

    // Haal alle records op
    async getAll() {
      const { data, error } = await this.supabase.from(this.table).select();
      if (error) {
        throw new Error(`Error fetching all records from ${this.table}: ${error.message}`);
      }
      return data;
    }

    // Haal één record op op basis van ID
    async getOne(id) {
      const { data, error } = await this.supabase.from(this.table).select().eq(this.idKey, id)
  .single();
      if (error) {
        throw new Error(`Error fetching record from ${this.table}: ${error.message}`);
      }
      return data;
    }

    // Voeg één record toe
    async addOne(payload) {
      const { data, error } = await this.supabase.from(this.table).insert([payload]);
      if (error) {
        throw new Error(`Error adding record to ${this.table}: ${error.message}`);
      }
      return data;
    }

    // Voeg meerdere records toe
    async addMany(payload) {
      const { data, error } = await this.supabase.from(this.table).insert(payload);
      if (error) {
        throw new Error(`Error adding multiple records to ${this.table}: ${error.message}`);
      }
      return data;
    }

    // Update een record
    async updateOne(id, payload) {
      const { data, error } = await this.supabase.from(this.table).update(payload).eq(this.idKey, id);
      if (error) {
        throw new Error(`Error updating record in ${this.table}: ${error.message}`);
      }
      return data;
    }

    // Verwijder een record
    async deleteOne(id) {
      const { data, error } = await this.supabase.from(this.table).delete().eq(this.idKey, id);
      if (error) {
        throw new Error(`Error deleting record from ${this.table}: ${error.message}`);
      }
      return data;
    }

    get idKey() {
      return this.config.idKey;
    }
  }
