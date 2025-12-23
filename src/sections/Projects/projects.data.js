import JynxImg from '../../assets/JynxCode.webp';
import AgroLogo from '../../assets/agroLogo.webp';
import FloristImg from '../../assets/FloristWeb.webp';
import AgroWebImg from '../../assets/ControlAgroWeb.webp';

export const projects = [
  {
    id: 'control-agro-web',
    title: 'Control Agro',
    description:
      'Aplicación móvil para la gestión agrícola integral: control de asistencia, producción y trabajadores en tiempo real.',
    heroImage: AgroWebImg,
    logo: AgroLogo,
    ctaLabel: 'Ver repositorio',
    ctaHref: 'https://github.com/SaidPR/ControlAgro25',
    techs: ['React Native', 'Firebase', 'Expo'],
  },
  {
    id: 'florist-web',
    title: 'Florist Web',
    description:
      'Este sitio tiene como objetivo ilustrar de manera clara, estética y funcional los beneficios de Florist Management.',
    heroImage: FloristImg,
    logo: JynxImg,
    ctaLabel: 'Ver sitio',
    ctaHref: 'https://saidpr.github.io/Florist-Web/',
    techs: ['HTML', 'CSS', 'JavaScript'],
  },
];
