const config = {
  locales: {
    nl: {
      ui: {
        submit: 'Verzenden',
        reset: 'Resetten',
        invalid: 'Dit formulier is ongeldig',
      },
      validation: {
        formIncomplete: '',
        inComplete: '',
        required: 'Dit veld is verplicht',
        email: 'Voer een geldig e-mailadres in',
        min: 'Moet minstens {args} tekens bevatten',
        max: 'Mag niet meer dan {args} tekens bevatten',
        between: 'Moet tussen {args[0]} en {args[1]} liggen',
      },
    },
  },
  locale: 'nl', // Standaardtaal
};

export default config;
