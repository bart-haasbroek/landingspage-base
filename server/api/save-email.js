export default defineEventHandler(async (event) => {
    const body = await readBody(event); // Haal de body van de request op
    const { email, name } = body;

    const apiKey = process.env.MAILCHIMP_API_KEY; // Zet deze in je .env
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    const datacenter = apiKey.split('-')[1];

    const url = `https://${datacenter}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

    const data = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name,
      },
    };

    try {
      const response = await $fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Authorization: `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });

      return { success: true, data: response };
    } catch (error) {
      return { success: false, error: error.data || 'An error occurred.' };
    }
  });
