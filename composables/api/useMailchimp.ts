import axios from 'axios';

export default function useApiCall() {
    async function addToMailchimp(member) {
        const isLoading = ref(false);
        const error = ref(null);
        const success = ref(false);
        const {email, name} = member;

        const apiKey = 'xxx';
        const audienceId = 'xxx';
        const datacenter = 'xxx';

        const url = `https://${datacenter}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

        const data = {
            email_address: email,
            status: 'subscribed',
            merge_fields: {
              FNAME: name,
            },
          };

        try {
            isLoading.value = true;
          const response = await axios.post(url, data, {
            headers: {
              Authorization: `Bearer ${apiKey}`,
              'Content-Type': 'application/json',
            },
          });
          console.log('User added successfully:', response.data);
            success.value = true;
            isLoading.value = false;
        } catch (err) {
            error.value = err.response.data;
            isLoading.value = false;

          console.error('Error adding user to Mailchimp:', error.response.data);
        }
      }

      return {
        addToMailchimp,
      }

}
