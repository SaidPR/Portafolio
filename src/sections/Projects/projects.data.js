import JynxImg from '../../assets/JynxCode.webp';
import AgroLogo from '../../assets/agroLogo.webp';
import FloristImg from '../../assets/FloristWeb.webp';
import AgroWebImg from '../../assets/ControlAgroWeb.webp';

export const projects = [
  {
    id: 'control-agro-web',
    title: 'ControlAgro',
    description:
      'App móvil para gestión agrícola con módulos de inventario, lotes y reportes en tiempo real.',
    heroImage: AgroWebImg,
    logo: AgroLogo,
    ctaLabel: 'Ver repositorio',
    ctaHref: 'https://github.com/SaidPR/ControlAgro25',
    techs: ['React Native', 'Firebase'],
  },
  {
    id: 'florist-web',
    title: 'Florist Web',
    description:
      'Este sitio tiene como objetivo ilustrar de manera clara, estética y funcional los beneficios del software.',
    heroImage: FloristImg,
    logo: FloristImg,
    ctaLabel: 'Ver sitio',
    ctaHref: 'https://saidpr.github.io/Florist-Web/',
    techs: ['HTML', 'CSS', 'JavaScript'],
  },
];
