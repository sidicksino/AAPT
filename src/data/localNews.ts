import { NewsArticle } from '../types';

export const localNews: NewsArticle[] = [
    {
        id: -1,
        title: "Visite de l’AAPT à l’orphelinat APSOA à l’occasion de la Journée des Enfants Africains",
        excerpt: "Le jeudi 27 juin 2024, à l’occasion de la Journée des Enfants Africains, l’Association Actions Pour Tous (AAPT) a eu le plaisir de visiter le centre d’orphelinat APSOA, situé au quartier N’djari. Les membres de l’association ont passé un moment convivial et joyeux avec les enfants, partageant des sourires, des danses, des jeux et des chants. Malgré des moyens modestes, quelques kits alimentaires ont été offerts pour soutenir les enfants. L’AAPT a également transmis un message d’espoir et de soutien, encourageant les enfants à rester forts et à croire en un avenir meilleur. Cette visite a été une journée inoubliable et enrichissante, illustrant l’engagement de l’association en faveur du bien-être et du développement des enfants vulnérables.",
        date: "Jeudi 27 juin 2024",
        category: "solidarity",
        image: "/assets/local_images/1.jpg",
        linkKey: "more",
        created_at: "2026-01-10T10:00:01Z",
        type: "Article"
    },
    {
        id: -2,
        title: "Distribution de fournitures scolaires par l’AAPT",
        excerpt: "Retour sur les moments forts de notre conférence annuelle dédiée à l'accès aux soins pour les communautés isolées.",
        date: "2023-11-20",
        category: "health",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop",
        linkKey: "more",
        created_at: "2026-01-10T10:00:02Z",
        type: "Article"
    },
    {
        id: -3,
        title: "Atelier de formation des bénévoles",
        excerpt: "Plus de 50 bénévoles ont participé à notre week-end de formation intensive pour préparer les actions d'été.",
        date: "2023-06-10",
        category: "solidarity",
        image: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2074&auto=format&fit=crop",
        linkKey: "more",
        created_at: "2026-01-10T10:00:03Z",
        type: "Article"
    }
];
