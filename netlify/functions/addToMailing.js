import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

dotenv.config();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

export async function handler(event, context) {
    const { email, name } = JSON.parse(event.body);

    const { data: existingUser, error: checkError } = await supabase
    .from('newsletter_subscribers')
    .select('id')
    .eq('email', email)
    .single();

    if (checkError && checkError.code !== 'PGRST116') {
        return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Er is een fout opgetreden bij het controleren van het e-mailadres', error: checkError }),
        };
    }

    if (existingUser) {
        return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Dit e-mailadres is al ingeschreven.' }),
        };
    }

    // Voeg de gebruiker toe aan de nieuwsbrief tabel
    const { data, error } = await supabase
      .from('newsletter_subscribers')  // Verander 'newsletter_subscribers' naar jouw tabelnaam
      .insert([
        { email, name }
      ]);

    if (error) {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: 'Er is een fout opgetreden', error }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Gebruiker succesvol ingeschreven', data }),
    };
  }
