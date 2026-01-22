/**
 * AI Influencer Marketplace - Main Application JavaScript
 * Alpine.js stores and global utilities
 */

// ========== ALPINE.JS STORES ==========

document.addEventListener('alpine:init', () => {
    
    // Auth Store - Manages user authentication state
    Alpine.store('auth', {
        user: JSON.parse(localStorage.getItem('user')) || null,
        isLoggedIn: false,
        
        init() {
            this.isLoggedIn = !!this.user;
        },
        
        login(email, password, role) {
            // Mock login - in real app, this would be an API call
            const user = {
                id: 'user_' + Date.now(),
                email: email,
                role: role, // 'BRAND', 'CREATOR', 'ADMIN'
                name: email.split('@')[0],
                avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
                createdAt: new Date().toISOString(),
                status: role === 'CREATOR' ? 'PENDING_REVIEW' : 'ACTIVE'
            };
            
            this.user = user;
            this.isLoggedIn = true;
            localStorage.setItem('user', JSON.stringify(user));
            
            return user;
        },
        
        register(email, password, role) {
            return this.login(email, password, role);
        },
        
        logout() {
            this.user = null;
            this.isLoggedIn = false;
            localStorage.removeItem('user');
            window.location.href = '/';
        },
        
        getRedirectUrl() {
            if (!this.user) return '/login';
            switch(this.user.role) {
                case 'ADMIN': return '/admin/dashboard';
                case 'CREATOR': return '/creator/dashboard';
                case 'BRAND': return '/brand/dashboard';
                default: return '/';
            }
        }
    });
    
    // Notification Store
    Alpine.store('notify', {
        messages: [],
        
        show(message, type = 'info', duration = 3000) {
            const id = Date.now();
            this.messages.push({ id, message, type });
            
            setTimeout(() => {
                this.messages = this.messages.filter(m => m.id !== id);
            }, duration);
        },
        
        success(message) { this.show(message, 'success'); },
        error(message) { this.show(message, 'error'); },
        warning(message) { this.show(message, 'warning'); },
        info(message) { this.show(message, 'info'); }
    });
    
    // Theme Store
    Alpine.store('theme', {
        current: localStorage.getItem('theme') || 'light',
        
        init() {
            document.documentElement.setAttribute('data-theme', this.current);
        },
        
        toggle() {
            this.current = this.current === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', this.current);
            document.documentElement.setAttribute('data-theme', this.current);
        },
        
        set(theme) {
            this.current = theme;
            localStorage.setItem('theme', theme);
            document.documentElement.setAttribute('data-theme', theme);
        }
    });
    
    // Cart/Order Store (for checkout flow)
    Alpine.store('cart', {
        currentGig: null,
        brief: {
            productImage: null,
            scenario: '',
            format: 'square'
        },
        
        setGig(gig) {
            this.currentGig = gig;
            localStorage.setItem('currentGig', JSON.stringify(gig));
        },
        
        clear() {
            this.currentGig = null;
            this.brief = { productImage: null, scenario: '', format: 'square' };
            localStorage.removeItem('currentGig');
        }
    });
});

// ========== UTILITY FUNCTIONS ==========

const Utils = {
    // Format currency
    formatPrice(amount) {
        return new Intl.NumberFormat('tr-TR', {
            style: 'currency',
            currency: 'TRY'
        }).format(amount);
    },
    
    // Format date
    formatDate(dateString) {
        return new Intl.DateTimeFormat('tr-TR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        }).format(new Date(dateString));
    },
    
    // Relative time (e.g., "2 gün önce")
    timeAgo(dateString) {
        const seconds = Math.floor((new Date() - new Date(dateString)) / 1000);
        const intervals = {
            yıl: 31536000,
            ay: 2592000,
            hafta: 604800,
            gün: 86400,
            saat: 3600,
            dakika: 60
        };
        
        for (const [unit, value] of Object.entries(intervals)) {
            const interval = Math.floor(seconds / value);
            if (interval >= 1) {
                return `${interval} ${unit} önce`;
            }
        }
        return 'Az önce';
    },
    
    // Generate unique ID
    generateId() {
        return 'id_' + Math.random().toString(36).substr(2, 9);
    },
    
    // Debounce function
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
};

// ========== IMAGE UPLOAD HELPER ==========

const ImageUploader = {
    // Convert file to base64 (for mock storage)
    toBase64(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    },
    
    // Validate image file
    validate(file, maxSizeMB = 5) {
        const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
        
        if (!validTypes.includes(file.type)) {
            return { valid: false, error: 'Geçersiz dosya formatı. JPG, PNG veya WebP kullanın.' };
        }
        
        if (file.size > maxSizeMB * 1024 * 1024) {
            return { valid: false, error: `Dosya boyutu ${maxSizeMB}MB'dan küçük olmalı.` };
        }
        
        return { valid: true };
    }
};

console.log('🚀 AI Influencer Marketplace initialized');
