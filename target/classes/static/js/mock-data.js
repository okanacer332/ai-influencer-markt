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
            avatar: '/images/influencers/aylin.png',
            status: 'ACTIVE',
            createdAt: '2024-01-15T10:00:00Z'
        },
        {
            id: 'creator_2',
            email: 'nova@example.com',
            role: 'CREATOR',
            name: 'Nova',
            avatar: '/images/influencers/nova.png',
            status: 'ACTIVE',
            createdAt: '2024-02-20T14:30:00Z'
        },
        {
            id: 'creator_3',
            email: 'elif@example.com',
            role: 'CREATOR',
            name: 'Elif',
            avatar: '/images/influencers/elif.png',
            status: 'ACTIVE',
            createdAt: '2024-03-01T10:00:00Z'
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
            id: 'aylin',
            creatorId: 'creator_1',
            name: 'Aylin',
            age: 24,
            gender: 'Kadın',
            ethnicity: 'Türk',
            hairColor: 'Kahverengi',
            eyeColor: 'Yeşil',
            style: 'Photorealistic',
            bio: 'Moda ve yaşam tarzı içerikleri üreten AI influencer. Cafe ortamları ve şehir hayatı temalı çekimler. Minimalist ve sofistike bir tarzım var.',
            profileImages: [
                '/images/influencers/aylin.png',
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
                completedOrders: 127,
                avgRating: 4.9,
                responseTime: '1 saat'
            }
        },
        {
            id: 'nova',
            creatorId: 'creator_2',
            name: 'Nova',
            age: 22,
            gender: 'Kadın',
            ethnicity: 'Avrupalı',
            hairColor: 'Kızıl',
            eyeColor: 'Yeşil',
            style: 'Luxury',
            bio: 'Premium markalar için zarif ve lüks içerik üretimi uzmanı. Yüksek moda ve mücevher çekimleri için ideal yüz.',
            profileImages: [
                '/images/influencers/nova.png',
                'https://picsum.photos/seed/nova2/400/500',
                'https://picsum.photos/seed/nova3/400/500'
            ],
            portfolioImages: [
                'https://picsum.photos/seed/nport1/600/800',
                'https://picsum.photos/seed/nport2/600/800'
            ],
            stats: {
                completedOrders: 156,
                avgRating: 4.9,
                responseTime: '30 dakika'
            }
        },
        {
            id: 'elif',
            creatorId: 'creator_3',
            name: 'Elif',
            age: 25,
            gender: 'Kadın',
            ethnicity: 'Türk',
            hairColor: 'Sarı',
            eyeColor: 'Mavi',
            style: 'Casual',
            bio: 'Sıcak ve samimi marka iletişimi için doğal, enerjik karakter. Günlük yaşam, spor ve sağlıklı yaşam ürünleri için mükemmel.',
            profileImages: [
                '/images/influencers/elif.png',
                'https://picsum.photos/seed/elif2/400/500',
                'https://picsum.photos/seed/elif3/400/500'
            ],
            portfolioImages: [
                'https://picsum.photos/seed/eport1/600/800',
                'https://picsum.photos/seed/eport2/600/800',
                'https://picsum.photos/seed/eport3/600/800'
            ],
            stats: {
                completedOrders: 98,
                avgRating: 4.8,
                responseTime: '2 saat'
            }
        }
    ],

    // ========== GIGS (Service Listings) ==========
    gigs: [
        {
            id: 'gig_1',
            personaId: 'aylin',
            creatorId: 'creator_1',
            title: 'Cafe ortamında ürün fotoğrafı',
            description: 'Ürününüzle birlikte şık bir cafe ortamında profesyonel fotoğraf çekimi.',
            price: 500,
            deliveryDays: 2,
            revisions: 1,
            category: 'Ürün Fotoğrafçılığı',
            tags: ['cafe', 'lifestyle', 'ürün'],
            thumbnail: 'https://picsum.photos/seed/gig1/400/300',
            status: 'ACTIVE',
            createdAt: '2024-03-01T10:00:00Z'
        },
        {
            id: 'gig_2',
            personaId: 'aylin',
            creatorId: 'creator_1',
            title: 'Instagram Story Paketi',
            description: '5 adet özelleştirilmiş Instagram story görseli. Marka renklerinizle.',
            price: 1200,
            deliveryDays: 3,
            revisions: 2,
            category: 'Sosyal Medya',
            tags: ['instagram', 'story'],
            thumbnail: 'https://picsum.photos/seed/gig2/400/300',
            status: 'ACTIVE',
            createdAt: '2024-03-05T14:00:00Z'
        },
        {
            id: 'gig_3',
            personaId: 'nova',
            creatorId: 'creator_2',
            title: 'Lüks Mücevher Çekimi',
            description: 'Yüksek kaliteli mücevher ve aksesuar çekimleri.',
            price: 1500,
            deliveryDays: 4,
            revisions: 2,
            category: 'Lüks Markalar',
            tags: ['mücevher', 'lüks', 'moda'],
            thumbnail: 'https://picsum.photos/seed/gig3/400/300',
            status: 'ACTIVE',
            createdAt: '2024-03-10T09:00:00Z'
        },
        {
            id: 'gig_4',
            personaId: 'elif',
            creatorId: 'creator_3',
            title: 'Spor Giyim Tanıtımı',
            description: 'Spor giyim ve aktif yaşam ürünleri için dinamik çekimler.',
            price: 450,
            deliveryDays: 2,
            revisions: 1,
            category: 'Moda',
            tags: ['spor', 'giyim', 'fitness'],
            thumbnail: 'https://picsum.photos/seed/gig4/400/300',
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
            status: 'IN_PROGRESS',
            brief: {
                productImage: 'https://picsum.photos/seed/product1/300/300',
                scenario: 'Kahve içerken ürünü elinde tutarak rahat bir poz.',
                format: 'square'
            },
            price: 500,
            createdAt: '2024-03-20T10:00:00Z',
            deliveryDue: '2024-03-22T10:00:00Z'
        },
        {
            id: 'order_2',
            gigId: 'gig_2',
            brandId: 'brand_1',
            creatorId: 'creator_1',
            status: 'DELIVERED',
            brief: {
                productImage: 'https://picsum.photos/seed/product2/300/300',
                scenario: 'Yeni sezon koleksiyonu tanıtımı.',
                format: 'vertical'
            },
            price: 1200,
            createdAt: '2024-03-18T14:00:00Z',
            deliveryDue: '2024-03-21T14:00:00Z',
            deliveredAt: '2024-03-20T16:00:00Z',
            deliveryFile: 'https://picsum.photos/seed/delivery2/600/800',
            deliveryNote: 'Storyler hazır!'
        }
    ],

    // ========== FILTER OPTIONS ==========
    filterOptions: {
        genders: ['Kadın', 'Erkek'],
        hairColors: ['Siyah', 'Kahverengi', 'Sarı', 'Kızıl'],
        styles: ['Photorealistic', 'Anime', 'Luxury', 'Casual', 'Business'],
        categories: ['Ürün Fotoğrafçılığı', 'Sosyal Medya', 'Moda', 'Lüks Markalar']
    },

    // ========== HELPER METHODS ==========
    getPersonaById(id) {
        return this.personas.find(p => p.id === id);
    },

    getGigById(id) {
        return this.gigs.find(g => g.id === id);
    },

    getGigsByCreator(creatorId) {
        // Find persona for creator first
        const persona = this.personas.find(p => p.creatorId === creatorId);
        if (!persona) return [];
        return this.gigs.filter(g => g.personaId === persona.id);
    },
    
    getGigsByPersona(personaId) {
        return this.gigs.filter(g => g.personaId === personaId);
    }
};

window.MockData = MockData;
