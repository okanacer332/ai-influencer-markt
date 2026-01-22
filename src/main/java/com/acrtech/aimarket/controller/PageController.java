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
        return "creator/my-gigs";
    }
    
    @GetMapping("/creator/gigs/new")
    public String creatorNewGig(Model model) {
        model.addAttribute("pageTitle", "Yeni İlan");
        return "creator/new-gig";
    }
    
    @GetMapping("/creator/orders")
    public String creatorOrders(Model model) {
        model.addAttribute("pageTitle", "Siparişler");
        return "creator/orders";
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
