export interface ArticleData {
    id: number;
    image: string;
    key: string;
}

export const articlesData: ArticleData[] = [
    {
        id: 1,
        image: "/assets/images/facebook/anniversary.png",
        key: "report"
    },
    {
        id: 2,
        image: "/assets/images/facebook/dinner.png",
        key: "video"
    },
    {
        id: 3,
        image: "/assets/images/facebook/sanitation.png",
        key: "article"
    },
    {
        id: 4,
        image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=2069&auto=format&fit=crop",
        key: "more"
    },
    {
        id: 5,
        image: "/assets/images/facebook/dinner.png",
        key: "actions"
    },
    {
        id: 6,
        image: "/assets/images/facebook/anniversary.png",
        key: "download"
    }
];
