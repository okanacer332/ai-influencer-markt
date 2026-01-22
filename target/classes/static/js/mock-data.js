/**
 * Mock Data for AI Influencer Marketplace
 * This simulates backend data - will be replaced with real API calls later
 */

const MockData = {

    // ========== USERS ==========
    users: [
        {
            id: 'creator_1',
            email: 'aylin@example.com',
            role: 'CREATOR',
            name: 'Aylin',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=aylin',
            status: 'ACTIVE',
            createdAt: '2024-01-15T10:00:00Z'
        },
        {
            id: 'creator_2',
            email: 'nova@example.com',
            role: 'CREATOR',
            name: 'Nova',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=nova',
            status: 'ACTIVE',
            createdAt: '2024-02-20T14:30:00Z'
        },
        {
            id: 'brand_1',
            email: 'brand@company.com',
            role: 'BRAND',
            name: 'Tech Brand',
            avatar: 'https://api.dicebear.com/7.x/identicon/svg?seed=techbrand',
            status: 'ACTIVE',
            createdAt: '2024-01-10T09:00:00Z'
        }
    ],

    // ========== PERSONAS (AI Characters) ==========
    personas: [
        {
            id: 'persona_1',
            creatorId: 'creator_1',
            name: 'Aylin',
            age: 24,
            gender: 'Kadın',
            ethnicity: 'Türk',
            hairColor: 'Kahverengi',
            eyeColor: 'Yeşil',
            style: 'Photorealistic',
            bio: 'Moda ve yaşam tarzı içerikleri üreten AI influencer. Cafe ortamları ve şehir hayatı temalı çekimler.',
            profileImages: [
                'https://picsum.photos/seed/aylin1/400/500',
                'https://picsum.photos/seed/aylin2/400/500',
                'https://picsum.photos/seed/aylin3/400/500'
            ],
            portfolioImages: [
                'https://picsum.photos/seed/port1/600/800',
                'https://picsum.photos/seed/port2/600/800',
                'https://picsum.photos/seed/port3/600/800',
                'https://picsum.photos/seed/port4/600/800'
            ],
            stats: {
                completedOrders: 47,
                avgRating: 4.8,
                responseTime: '2 saat'
            }
        },
        {
            id: 'persona_2',
            creatorId: 'creator_2',
            name: 'Nova',
            age: 22,
            gender: 'Kadın',
            ethnicity: 'Kore',
            hairColor: 'Siyah',
            eyeColor: 'Kahverengi',
            style: 'Anime',
            bio: 'Anime tarzında içerikler üreten dijital karakter. Oyun ve teknoloji markaları için ideal.',
            profileImages: [
                'https://picsum.photos/seed/nova1/400/500',
                'https://picsum.photos/seed/nova2/400/500',
                'https://picsum.photos/seed/nova3/400/500'
            ],
            portfolioImages: [
                'https://picsum.photos/seed/nport1/600/800',
                'https://picsum.photos/seed/nport2/600/800'
            ],
            stats: {
                completedOrders: 23,
                avgRating: 4.9,
                responseTime: '1 saat'
            }
        },
        {
            id: 'persona_3',
            creatorId: 'creator_1',
            name: 'Elif',
            age: 28,
            gender: 'Kadın',
            ethnicity: 'Türk',
            hairColor: 'Sarı',
            eyeColor: 'Mavi',
            style: 'Photorealistic',
            bio: 'Lüks marka çekimleri için profesyonel görünüm. Kozmetik ve mücevher markaları için ideal.',
            profileImages: [
                'https://picsum.photos/seed/elif1/400/500',
                'https://picsum.photos/seed/elif2/400/500',
                'https://picsum.photos/seed/elif3/400/500'
            ],
            portfolioImages: [
                'https://picsum.photos/seed/eport1/600/800',
                'https://picsum.photos/seed/eport2/600/800',
                'https://picsum.photos/seed/eport3/600/800'
            ],
            stats: {
                completedOrders: 89,
                avgRating: 4.7,
                responseTime: '4 saat'
            }
        }
    ],

    // ========== GIGS (Service Listings) ==========
    gigs: [
        {
            id: 'gig_1',
            personaId: 'persona_1',
            creatorId: 'creator_1',
            title: 'Cafe ortamında ürün fotoğrafı',
            description: 'Ürününüzle birlikte şık bir cafe ortamında profesyonel fotoğraf çekimi. Instagram ve sosyal medya için optimize edilmiş.',
            price: 500,
            deliveryDays: 2,
            revisions: 1,
            category: 'Ürün Fotoğrafçılığı',
            tags: ['cafe', 'lifestyle', 'ürün'],
            thumbnail: 'https://picsum.photos/seed/gig1/400/300',
            images: [
                'https://picsum.photos/seed/gig1a/600/400',
                'https://picsum.photos/seed/gig1b/600/400'
            ],
            status: 'ACTIVE',
            createdAt: '2024-03-01T10:00:00Z'
        },
        {
            id: 'gig_2',
            personaId: 'persona_1',
            creatorId: 'creator_1',
            title: 'Instagram Story paketi (5 adet)',
            description: '5 adet özelleştirilmiş Instagram story görseli. Markanızın renkleri ve fontlarıyla uyumlu tasarım.',
            price: 1200,
            deliveryDays: 3,
            revisions: 2,
            category: 'Sosyal Medya',
            tags: ['instagram', 'story', 'paket'],
            thumbnail: 'https://picsum.photos/seed/gig2/400/300',
            images: [
                'https://picsum.photos/seed/gig2a/600/400'
            ],
            status: 'ACTIVE',
            createdAt: '2024-03-05T14:00:00Z'
        },
        {
            id: 'gig_3',
            personaId: 'persona_2',
            creatorId: 'creator_2',
            title: 'Anime tarzı oyun promosyonu',
            description: 'Oyununuz için anime stilinde promosyon görseli. Karakter oyununuzun temasına göre uyarlanır.',
            price: 800,
            deliveryDays: 4,
            revisions: 2,
            category: 'Oyun & Teknoloji',
            tags: ['anime', 'gaming', 'promo'],
            thumbnail: 'https://picsum.photos/seed/gig3/400/300',
            images: [
                'https://picsum.photos/seed/gig3a/600/400',
                'https://picsum.photos/seed/gig3b/600/400'
            ],
            status: 'ACTIVE',
            createdAt: '2024-03-10T09:00:00Z'
        },
        {
            id: 'gig_4',
            personaId: 'persona_3',
            creatorId: 'creator_1',
            title: 'Lüks marka ürün çekimi',
            description: 'Kozmetik, mücevher ve lüks ürünler için profesyonel stüdyo kalitesinde çekim.',
            price: 1500,
            deliveryDays: 5,
            revisions: 3,
            category: 'Lüks Markalar',
            tags: ['lüks', 'kozmetik', 'mücevher'],
            thumbnail: 'https://picsum.photos/seed/gig4/400/300',
            images: [
                'https://picsum.photos/seed/gig4a/600/400'
            ],
            status: 'ACTIVE',
            createdAt: '2024-03-15T11:00:00Z'
        }
    ],

    // ========== ORDERS ==========
    orders: [
        {
            id: 'order_1',
            gigId: 'gig_1',
            brandId: 'brand_1',
            creatorId: 'creator_1',
            status: 'IN_PROGRESS', // PENDING, IN_PROGRESS, DELIVERED, COMPLETED, DISPUTED
            brief: {
                productImage: 'https://picsum.photos/seed/product1/300/300',
                scenario: 'Kahve içerken ürünü elinde tutarak rahat bir poz.',
                format: 'square'
            },
            price: 500,
            createdAt: '2024-03-20T10:00:00Z',
            deliveryDue: '2024-03-22T10:00:00Z',
            deliveredAt: null,
            deliveryFile: null
        },
        {
            id: 'order_2',
            gigId: 'gig_2',
            brandId: 'brand_1',
            creatorId: 'creator_1',
            status: 'DELIVERED',
            brief: {
                productImage: 'https://picsum.photos/seed/product2/300/300',
                scenario: 'Yeni sezon koleksiyonu tanıtımı, enerji dolu.',
                format: 'vertical'
            },
            price: 1200,
            createdAt: '2024-03-18T14:00:00Z',
            deliveryDue: '2024-03-21T14:00:00Z',
            deliveredAt: '2024-03-20T16:00:00Z',
            deliveryFile: 'https://picsum.photos/seed/delivery2/600/800',
            deliveryNote: 'Story görselleri hazır. Beğenmeniz dileğiyle!'
        },
        {
            id: 'order_3',
            gigId: 'gig_4',
            brandId: 'brand_1',
            creatorId: 'creator_1',
            status: 'COMPLETED',
            brief: {
                productImage: 'https://picsum.photos/seed/product3/300/300',
                scenario: 'Minimal arka plan, ürün ön planda.',
                format: 'square'
            },
            price: 1500,
            createdAt: '2024-03-10T09:00:00Z',
            deliveryDue: '2024-03-15T09:00:00Z',
            deliveredAt: '2024-03-14T11:00:00Z',
            completedAt: '2024-03-14T15:00:00Z',
            deliveryFile: 'https://picsum.photos/seed/delivery3/600/600'
        }
    ],

    // ========== PENDING CREATORS (For Admin) ==========
    pendingCreators: [
        {
            id: 'pending_1',
            email: 'yeni.creator@example.com',
            name: 'Yeni Creator',
            submittedAt: '2024-03-22T08:00:00Z',
            persona: {
                name: 'Luna',
                age: 21,
                style: 'Photorealistic',
                proofImages: [
                    'https://picsum.photos/seed/proof1/400/500',
                    'https://picsum.photos/seed/proof2/400/500',
                    'https://picsum.photos/seed/proof3/400/500'
                ]
            }
        }
    ],

    // ========== FILTER OPTIONS ==========
    filterOptions: {
        genders: ['Kadın', 'Erkek', 'Non-Binary'],
        hairColors: ['Siyah', 'Kahverengi', 'Sarı', 'Kızıl', 'Beyaz', 'Mavi', 'Pembe'],
        eyeColors: ['Kahverengi', 'Mavi', 'Yeşil', 'Ela', 'Siyah'],
        styles: ['Photorealistic', 'Anime', '3D Render', 'Illustration'],
        categories: ['Ürün Fotoğrafçılığı', 'Sosyal Medya', 'Oyun & Teknoloji', 'Lüks Markalar', 'Moda', 'Yemek']
    },

    // ========== HELPER METHODS ==========

    getPersonaById(id) {
        return this.personas.find(p => p.id === id);
    },

    getGigById(id) {
        return this.gigs.find(g => g.id === id);
    },

    getGigsByCreator(creatorId) {
        return this.gigs.filter(g => g.creatorId === creatorId);
    },

    getOrdersByBrand(brandId) {
        return this.orders.filter(o => o.brandId === brandId);
    },

    getOrdersByCreator(creatorId) {
        return this.orders.filter(o => o.creatorId === creatorId);
    },

    filterPersonas(filters) {
        return this.personas.filter(p => {
            if (filters.gender && p.gender !== filters.gender) return false;
            if (filters.hairColor && p.hairColor !== filters.hairColor) return false;
            if (filters.style && p.style !== filters.style) return false;
            return true;
        });
    },

    searchGigs(query) {
        const q = query.toLowerCase();
        return this.gigs.filter(g =>
            g.title.toLowerCase().includes(q) ||
            g.description.toLowerCase().includes(q) ||
            g.tags.some(t => t.toLowerCase().includes(q))
        );
    }
};

// Make it globally available
window.MockData = MockData;

console.log('📦 Mock data loaded:', {
    personas: MockData.personas.length,
    gigs: MockData.gigs.length,
    orders: MockData.orders.length
});
