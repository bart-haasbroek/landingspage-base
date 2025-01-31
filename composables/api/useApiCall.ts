import { ref } from 'vue';

export default function useApiCall() {
  // Definieer states voor loading, error en success
  const isLoading = ref(false);
  const error = ref(null);
  const success = ref(false);
  const data = ref(null);

  // Algemene functie voor het doen van een API-call
  async function apiCall(url: string, method = 'POST', body: any = null) {
    isLoading.value = true;
    success.value = false;
    error.value = null;
    data.value = null;

    try {
      const response = await $fetch(url, {
        method,
        body,
      });

      // Sla de response op in data en zet success op true
      data.value = response;
      success.value = true;
    } catch (err) {
      error.value = err.data.message || 'Er is iets misgegaan.';
    } finally {
      isLoading.value = false;
    }
  };

  async function mockCall(url, method, body, response = {}, duration = 1000) {
    isLoading.value = true;
    success.value = false;
    error.value = null;
    data.value = null;

    console.log('ssss');

    try {
      // Simuleer vertraging (netwerkverzoek)
      const result = await new Promise((resolve, reject) =>
        setTimeout(() => {
          // Simuleer fout in bepaalde gevallen (bijvoorbeeld als de response een specifieke waarde heeft)
          if (url === '/api/error') {
            reject(new Error('Er is iets misgegaan.'));
          } else {
            resolve(response); // Mock de succesvolle response
          }
        }, duration)
      );

      data.value = result;
      success.value = true;
    } catch (err) {
      error.value = err.message || 'Er is iets misgegaan.';
    } finally {
      isLoading.value = false;
    }
  }

  return {
    isLoading,
    error,
    success,
    data,
    apiCall,
    mockCall
  };
}
