package com.acrtech.aimarket.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

/**
 * Main controller for all page routes.
 * Backend logic will be added later - this serves the frontend views.
 */
@Controller
public class PageController {

    // ========== PUBLIC PAGES ==========
    
    @GetMapping("/")
    public String home(Model model) {
        model.addAttribute("pageTitle", "Ana Sayfa");
        return "public/home";
    }
    
    @GetMapping("/search")
    public String search(Model model) {
        model.addAttribute("pageTitle", "Keşfet");
        return "public/search";
    }
    
    @GetMapping("/creator/{id}")
    public String creatorProfile(@PathVariable String id, Model model) {
        model.addAttribute("pageTitle", "Creator Profili");
        model.addAttribute("creatorId", id);
        return "public/creator-profile";
    }
    
    @GetMapping("/gig/{id}")
    public String gigDetail(@PathVariable String id, Model model) {
        model.addAttribute("pageTitle", "İlan Detayı");
        model.addAttribute("gigId", id);
        return "public/gig-detail";
    }
    
    // ========== AUTH PAGES ==========
    
    @GetMapping("/login")
    public String login(Model model) {
        model.addAttribute("pageTitle", "Giriş Yap");
        return "public/login";
    }
    
    @GetMapping("/register")
    public String register(Model model) {
        model.addAttribute("pageTitle", "Kayıt Ol");
        return "public/register";
    }
    
    // ========== BRAND PAGES ==========
    
    @GetMapping("/brand/dashboard")
    public String brandDashboard(Model model) {
        model.addAttribute("pageTitle", "Dashboard");
        return "brand/dashboard";
    }
    
    @GetMapping("/brand/orders")
    public String brandOrders(Model model) {
        model.addAttribute("pageTitle", "Siparişlerim");
        return "brand/orders";
    }
    
    @GetMapping("/brand/checkout/{gigId}")
    public String brandCheckout(@PathVariable String gigId, Model model) {
        model.addAttribute("pageTitle", "Sipariş Ver");
        model.addAttribute("gigId", gigId);
        return "brand/checkout";
    }
    
    // ========== CREATOR PAGES ==========
    
    @GetMapping("/creator/dashboard")
    public String creatorDashboard(Model model) {
        model.addAttribute("pageTitle", "Dashboard");
        return "creator/dashboard";
    }
    
    @GetMapping("/creator/onboarding")
    public String creatorOnboarding(Model model) {
        model.addAttribute("pageTitle", "Profilini Tamamla");
        return "creator/onboarding";
    }
    
    @GetMapping("/creator/gigs")
    public String creatorGigs(Model model) {
        model.addAttribute("pageTitle", "İlanlarım");
        return "creator/gigs";
    }
    
    @GetMapping("/creator/gigs/new")
    public String creatorNewGig(Model model) {
        model.addAttribute("pageTitle", "Yeni İlan");
        return "creator/new-gig";
    }
    
    @GetMapping("/creator/gigs/{id}/edit")
    public String creatorEditGig(@PathVariable String id, Model model) {
        model.addAttribute("pageTitle", "İlan Düzenle");
        model.addAttribute("gigId", id);
        return "creator/gig-edit";
    }
    
    @GetMapping("/creator/orders")
    public String creatorOrders(Model model) {
        model.addAttribute("pageTitle", "Siparişler");
        return "creator/orders";
    }
    
    @GetMapping("/creator/characters")
    public String creatorCharacters(Model model) {
        model.addAttribute("pageTitle", "Karakterlerim");
        return "creator/characters";
    }
    
    @GetMapping("/creator/characters/new")
    public String creatorCharactersNew(Model model) {
        model.addAttribute("pageTitle", "Yeni Karakter");
        return "creator/characters-new";
    }
    
    @GetMapping("/creator/characters/{id}")
    public String creatorCharacterEdit(@PathVariable String id, Model model) {
        model.addAttribute("pageTitle", "Karakter Düzenle");
        model.addAttribute("characterId", id);
        return "creator/characters-new";  // Re-use form for edit
    }
    
    @GetMapping("/creator/social")
    public String creatorSocial(Model model) {
        model.addAttribute("pageTitle", "Sosyal Hesaplarım");
        return "creator/social";
    }
    
    @GetMapping("/creator/orders/{id}/deliver")
    public String creatorOrderDeliver(@PathVariable String id, Model model) {
        model.addAttribute("pageTitle", "Sipariş Teslimi");
        model.addAttribute("orderId", id);
        return "creator/order-deliver";
    }
    
    @GetMapping("/creator/earnings")
    public String creatorEarnings(Model model) {
        model.addAttribute("pageTitle", "Kazançlarım");
        return "creator/earnings";
    }
    
    @GetMapping("/creator/earnings/withdraw")
    public String creatorEarningsWithdraw(Model model) {
        model.addAttribute("pageTitle", "Para Çek");
        return "creator/earnings-withdraw";
    }

    @GetMapping("/creator/settings")
    public String creatorSettings(Model model) {
        model.addAttribute("pageTitle", "Ayarlar");
        return "creator/settings";
    }
    
    // ========== ADMIN PAGES ==========
    
    @GetMapping("/admin/dashboard")
    public String adminDashboard(Model model) {
        model.addAttribute("pageTitle", "Admin Panel");
        return "admin/dashboard";
    }
    
    @GetMapping("/admin/pending-creators")
    public String adminPendingCreators(Model model) {
        model.addAttribute("pageTitle", "Onay Bekleyenler");
        return "admin/pending-creators";
    }
    
    @GetMapping("/admin/disputes")
    public String adminDisputes(Model model) {
        model.addAttribute("pageTitle", "İtirazlar");
        return "admin/disputes";
    }
}
