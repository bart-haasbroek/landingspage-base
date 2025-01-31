import { ChartBarIcon, ClockIcon, UserGroupIcon } from '@heroicons/vue/24/outline';

export const homeContent = [
    {
      name: 'hero',
      props: {
          title: 'De gids voor ontwerpers om overzicht te bewaren in je project',
          subtitle: 'Door een kaartenreeks met vragen te beantwoorden krijg je helder hoe je verder moet in je project!',
          usps: [
              'Doorbreek creatieve blokkades door nieuwe inzichten te krijgen',
              'Begin of hervat gestructureerd aan je project. Krijg overzicht en voorkom chaos!',
              'Kies een van de vele sjablonen met vragen! Voor elke situatie is er wel een',
              'Maak het nog persoonlijker door vragen te wijzigen of toe te voegen'
          ],
      }
    },
    {
    name: 'usps',
    props: {
      title: 'Waar loop jij op vast?',
      subtitle: 'Ontdek de verschillende situaties die de kaartenreeksen kunnen oplossen',
      cols: '4',
      usps: [
          {
            icon: UserGroupIcon,
            title: 'Wat wil ik ontwerpen?',
            description: 'Wat moet ik tekenen? Waar moet je beginnen? Wat is een goede compositie? Hoe kan ik mijn tekening verbeteren?',
            animation: 'fade-right'
          },
          {
            icon: UserGroupIcon,
            title: 'Characters ontwikkelen',
            description: 'Wat moet ik tekenen? Waar moet je beginnen? Wat is een goede compositie? Hoe kan ik mijn tekening verbeteren?',
            animation: 'fade-right'
          },
          {
            icon: UserGroupIcon,
            title: 'Concept vinden',
            description: 'Weet je niet hoe je het perfecte beeld vastlegt? Of hoe je je compositie en licht kunt verbeteren?',
            animation: 'fade-left'
          },
          {
            icon: UserGroupIcon,
            title: 'Welke uitstraling moet mijn ontwerp hebben?',
            description: 'Heb je moeite met het vinden van een sterk concept? Of weet je niet hoe je je ontwerp kunt verfijnen?',
            animation: 'fade-right'
          },
        ],
      }
    },
    {
      name: 'steps',
      props: {
        title: 'Drie eenvoudige stappen',
        steps: [
          {
            number: 1,
            title: 'Kies een van beschibkare sjablonen met vragen',
            description: 'Er zijn al sjablonen voor allerlei situaties. Mis je er een of wil je er een aanpassen? Geen probleem!',
            icon: ChartBarIcon
          },
          {
            number: 2,
            title: 'Beantwoord de vragen op de kaarten',
            description: 'Hierdoor krijg je een helder overzicht van jouw (volgende) stappen in je project',
            icon: ChartBarIcon
          },
          {
            number: 3,
            title: 'Start of vervolg je project',
            description: 'Je kunt nu doelgericht verder! Loop je op een later moment weer vast? Geen probleem! Je kunt altijd jouw gegeven antwoorden raadplegen, of een nieuwe kaartenreeks starten',
            icon: ChartBarIcon
          }
        ]
      }
    },
    {
      name: 'testimonials',
      props: {
        title: '123What Our Customers Say',
        subtitle: 'Don\'t just take our word for it - hear from our satisfied customers',
        testimonials: [
          {
            id: 1,
            content: "This product has completely transformed how we work. The efficiency gains are remarkable!",
            author: "Sarah Johnson",
            role: "CEO at TechCorp",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150"
          },
          {
            id: 2,
            content: "The best investment we've made this year. Customer satisfaction is up by 40%.",
            author: "Michael Chen",
            role: "Product Manager",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
          },
          {
            id: 3,
            content: "Incredible support team and fantastic features. Couldn't be happier!",
            author: "Emily Rodriguez",
            role: "Director of Operations",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150"
          }
        ],
      },
    },
    {
      name: 'faq',
      props: {
        title: 'Stay Updated!!',
        subtitle: 'Subscribe to our newsletter for the latest updates and features',
        items: [
          {
            question: 'How do I create my first form?',
            answer: 'Creating your first form is easy! Simply click the "Create Form" button in your dashboard and follow our intuitive form builder interface. You can add various question types, customize the design, and set up validation rules.'
          },
          {
            question: 'Is there a limit to the number of responses I can collect?',
            answer: 'Our free plan includes up to 100 responses per month. For unlimited responses and advanced features, check out our Pro and Enterprise plans.'
          },
          {
            question: 'Can I export my form responses?',
            answer: 'Yes! You can export your form responses in various formats including CSV, Excel, and PDF. This feature is available on all plans.'
          },
          {
            question: 'How secure are my form submissions?',
            answer: 'We take security seriously. All form submissions are encrypted using industry-standard SSL/TLS protocols, and we comply with GDPR and other privacy regulations.'
          }
        ]
      }
    },
    {
      name: 'subscribe',
    }
]