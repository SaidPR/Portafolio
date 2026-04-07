import JynxImg from '../../assets/JynxCode.webp';
import AgroLogo from '../../assets/agroLogo.webp';
import FloristImg from '../../assets/FloristWeb.webp';
import AgroWebImg from '../../assets/ControlAgroWeb.webp';
import BuscadorImg from '../../assets/Rutas.webp';

export const projects = [
  {
    id: 'control-agro-web',
    title: 'Control Agro',
    description:
      'Aplicación móvil para la gestión agrícola integral: control de asistencia, producción y trabajadores en tiempo real.',
    heroImage: AgroWebImg,
    logo: AgroLogo,
    ctaLabel: 'Ver sitio',
    ctaHref: 'https://controlagro-web.vercel.app/',
    repoLabel: 'Ver repositorio',
    repoHref: 'https://github.com/SaidPR/ControlAgro25',
    techs: ['HTML', 'Tailwind CSS', 'React Native', 'Firebase', 'Expo'],
  },
  {
    id: 'florist-web',
    title: 'Landing Page - Florist Management',
    description:
      'Este sitio tiene como objetivo ilustrar de manera clara, estética y funcional los beneficios de Florist Management.',
    heroImage: FloristImg,
    logo: JynxImg,
    ctaLabel: 'Ver sitio',
    ctaHref: 'https://saidpr.github.io/Florist-Web/',
    techs: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 'buscador-rutas',
    title: 'Buscador de Rutas - Prolog',
    description:
      'Proyecto en Prolog que calcula rutas óptimas entre ciudades de Michoacán considerando distancia, tráfico, calidad de caminos y lugares de interés.',
    heroImage: BuscadorImg,
    repoLabel: 'Ver repositorio',
    repoHref: 'https://github.com/SaidPR/Buscador-de-Rutas',
    techs: ['Prolog', 'HTML', 'CSS', 'JavaScript'],
  }
];
