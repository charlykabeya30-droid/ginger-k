import React, { useState, useEffect, useMemo } from "react";
import { createRoot } from "react-dom/client";
import * as LucideReact from "lucide-react";
import * as Recharts from "recharts";

const { Home, ShoppingCart, Package, BarChart2, Settings, TrendingUp, TrendingDown, Wallet, Target, Factory, Bell, Menu, ArrowLeft, Star, Plus, Calendar, Clock, CheckCircle, LogOut, Pencil, Trash2, Droplets, Save, Eye, EyeOff, Award, Activity, X } = LucideReact;
const { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Area, AreaChart } = Recharts;

import {
  Home, ShoppingCart, Package, BarChart2, Settings,
  TrendingUp, TrendingDown, Wallet, Target, Factory,
  Bell, Menu, ArrowLeft, Star, Plus,
  Calendar, Clock, CheckCircle, LogOut, Pencil, Trash2,
  Droplets, Save, Eye, EyeOff, Award, Activity, X
} from "lucide-react";

/* ═══════════ CSS ══════════════════════════════════════════════════════════════ */
const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap');
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0;}
:root{
  --orange:#FF9800;--orange2:#FFB74D;--orange3:#FFF3E0;
  --success:#22C55E;--success-bg:#F0FDF4;
  --error:#EF4444;--error-bg:#FEF2F2;
  --blue:#3B82F6;--blue-bg:#EFF6FF;
  --purple:#8B5CF6;--purple-bg:#F5F3FF;
  --bg:#F8F7F4;--card:#FFFFFF;
  --text:#1F2937;--text2:#6B7280;--text3:#9CA3AF;
  --border:#E5E7EB;
  --shadow:0 1px 3px rgba(0,0,0,.06),0 4px 16px rgba(0,0,0,.06);
  --shadow-lg:0 4px 24px rgba(0,0,0,.10);
  --shadow-orange:0 8px 32px rgba(255,152,0,.28);
  --r-sm:12px;--r-md:16px;--r-lg:24px;--r-xl:32px;
}
html,body{height:100%;}
body{font-family:'Poppins',sans-serif;background:var(--bg);color:var(--text);-webkit-font-smoothing:antialiased;-webkit-tap-highlight-color:transparent;}
.app{max-width:430px;margin:0 auto;min-height:100vh;display:flex;flex-direction:column;background:var(--bg);position:relative;overflow:hidden;}
.page{flex:1;overflow-y:auto;overflow-x:hidden;padding-bottom:96px;}
.page::-webkit-scrollbar{display:none;}

/* NAV */
.bottom-nav{position:fixed;bottom:0;left:50%;transform:translateX(-50%);width:100%;max-width:430px;background:rgba(255,255,255,.96);backdrop-filter:blur(20px);border-top:1px solid var(--border);display:flex;padding:10px 8px 20px;z-index:100;box-shadow:0 -4px 24px rgba(0,0,0,.06);}
.nav-item{flex:1;display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;padding:4px;border-radius:var(--r-sm);transition:all .2s;}
.nav-item:active{transform:scale(.92);}
.nav-icon-wrap{width:36px;height:36px;border-radius:12px;display:flex;align-items:center;justify-content:center;transition:all .25s cubic-bezier(.34,1.56,.64,1);}
.nav-item.active .nav-icon-wrap{background:var(--orange3);transform:scale(1.1);}
.nav-label{font-size:10px;font-weight:600;color:var(--text3);transition:color .2s;}
.nav-item.active .nav-label{color:var(--orange);font-weight:700;}

/* LOGIN */
.login-page{min-height:100vh;background:linear-gradient(165deg,#FFF8F0 0%,#FFF3E0 40%,#FFE0B2 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 28px;}
.login-icon-wrap{width:96px;height:96px;background:linear-gradient(135deg,var(--orange),var(--orange2));border-radius:28px;margin:0 auto 20px;display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow-orange);}
.login-brand{font-size:38px;font-weight:900;color:var(--orange);letter-spacing:-1px;line-height:1;text-align:center;}
.login-tagline{font-size:12px;font-weight:600;color:var(--text2);letter-spacing:3px;text-transform:uppercase;margin-top:6px;text-align:center;}
.login-card{background:#fff;border-radius:var(--r-xl);padding:32px 28px;width:100%;box-shadow:var(--shadow-lg);margin-top:32px;}
.lf-label{font-size:11px;font-weight:700;color:var(--text2);letter-spacing:1px;text-transform:uppercase;display:block;margin-bottom:8px;}
.lf-input-wrap{position:relative;margin-bottom:16px;}
.lf-input{width:100%;padding:14px 44px 14px 16px;background:var(--bg);border:2px solid var(--border);border-radius:var(--r-md);font-family:'Poppins',sans-serif;font-size:15px;font-weight:500;color:var(--text);outline:none;transition:border .2s,box-shadow .2s;}
.lf-input:focus{border-color:var(--orange);box-shadow:0 0 0 4px rgba(255,152,0,.12);}
.lf-eye{position:absolute;right:14px;top:50%;transform:translateY(-50%);cursor:pointer;color:var(--text3);}
.lf-btn{width:100%;padding:16px;margin-top:8px;background:linear-gradient(135deg,var(--orange),var(--orange2));border:none;border-radius:var(--r-md);font-family:'Poppins',sans-serif;font-size:15px;font-weight:700;color:#fff;cursor:pointer;box-shadow:var(--shadow-orange);transition:all .2s;}
.lf-btn:active{transform:scale(.97);}
.lf-hint{font-size:12px;color:var(--text3);text-align:center;margin-top:14px;font-weight:500;}
.lf-err{color:var(--error);font-size:13px;font-weight:600;text-align:center;margin-top:10px;}

/* TOPBAR */
.topbar{padding:20px 24px 0;display:flex;align-items:center;justify-content:space-between;}
.topbar-menu{width:40px;height:40px;background:var(--card);border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:var(--shadow);transition:transform .15s;}
.topbar-menu:active{transform:scale(.93);}
.topbar-brand-name{font-size:22px;font-weight:900;color:var(--orange);letter-spacing:-1px;line-height:1;}
.topbar-brand-sub{font-size:9px;font-weight:700;color:var(--text3);letter-spacing:3px;text-transform:uppercase;text-align:center;}
.topbar-bell{width:40px;height:40px;background:var(--card);border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;box-shadow:var(--shadow);position:relative;cursor:pointer;}
.notif-dot{position:absolute;top:8px;right:8px;width:8px;height:8px;background:var(--error);border-radius:50%;border:2px solid #fff;}

/* GREETING */
.greeting{padding:16px 24px 0;}
.greeting h2{font-size:24px;font-weight:800;color:var(--text);}
.greeting p{font-size:13px;font-weight:500;color:var(--text2);margin-top:3px;}

/* HERO */
.hero-card{margin:20px 24px 0;background:linear-gradient(135deg,#FF9800 0%,#FFB74D 60%,#FFCC02 100%);border-radius:var(--r-xl);padding:24px;position:relative;overflow:hidden;box-shadow:var(--shadow-orange);}
.hero-card::before{content:'';position:absolute;top:-40px;right:-40px;width:180px;height:180px;background:rgba(255,255,255,.12);border-radius:50%;}
.hero-card::after{content:'';position:absolute;bottom:-50px;left:-30px;width:130px;height:130px;background:rgba(255,255,255,.08);border-radius:50%;}
.hero-label{font-size:11px;font-weight:700;color:rgba(255,255,255,.75);letter-spacing:2px;text-transform:uppercase;margin-bottom:8px;}
.hero-amount{font-size:40px;font-weight:900;color:#fff;letter-spacing:-1.5px;line-height:1.1;position:relative;z-index:1;}
.hero-trend{display:inline-flex;align-items:center;gap:6px;background:rgba(255,255,255,.22);backdrop-filter:blur(8px);border-radius:20px;padding:6px 13px;margin-top:12px;font-size:12px;font-weight:700;color:#fff;}
.hero-ring{position:absolute;right:24px;top:50%;transform:translateY(-50%);text-align:center;z-index:1;}
.ring-svg{display:block;transform:rotate(-90deg);}
.ring-text{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;}
.ring-pct{font-size:17px;font-weight:900;color:#fff;line-height:1;}
.ring-sub{font-size:9px;font-weight:700;color:rgba(255,255,255,.8);margin-top:2px;letter-spacing:.5px;}
.ring-label{font-size:10px;font-weight:700;color:rgba(255,255,255,.8);margin-top:8px;text-transform:uppercase;letter-spacing:1px;}

/* KPI */
.kpi-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin:16px 24px 0;}
.kpi-card{background:var(--card);border-radius:var(--r-lg);padding:16px 12px;box-shadow:var(--shadow);transition:transform .2s;}
.kpi-card:active{transform:scale(.96);}
.kpi-icon-wrap{width:40px;height:40px;border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:10px;}
.kpi-lbl{font-size:10px;font-weight:600;color:var(--text2);margin-bottom:4px;}
.kpi-val{font-size:15px;font-weight:800;color:var(--text);line-height:1.2;}
.kpi-sub{font-size:10px;color:var(--text3);font-weight:500;margin-top:1px;}
.kpi-badge{display:inline-flex;align-items:center;gap:3px;border-radius:20px;padding:3px 7px;font-size:10px;font-weight:700;margin-top:5px;}

/* OBJECTIF */
.objectif-card{margin:16px 24px 0;background:var(--card);border-radius:var(--r-lg);padding:20px;box-shadow:var(--shadow);}
.obj-top{display:flex;align-items:center;gap:12px;margin-bottom:14px;}
.obj-icon-wrap{width:44px;height:44px;border-radius:14px;background:var(--orange3);display:flex;align-items:center;justify-content:center;flex-shrink:0;}
.obj-title{font-size:11px;font-weight:700;color:var(--text2);letter-spacing:1px;text-transform:uppercase;}
.obj-bottles{font-size:18px;font-weight:800;color:var(--text);margin-top:2px;}
.obj-pct{margin-left:auto;font-size:20px;font-weight:900;color:var(--orange);}
.prog-track{height:10px;background:var(--bg);border-radius:99px;overflow:hidden;margin-bottom:12px;}
.prog-fill{height:100%;background:linear-gradient(90deg,var(--orange),var(--orange2));border-radius:99px;transition:width .6s cubic-bezier(.34,1,.64,1);}
.obj-footer{display:flex;align-items:center;justify-content:space-between;}
.obj-count{font-size:13px;font-weight:600;color:var(--text2);}
.obj-count strong{color:var(--text);font-weight:800;}
.motivate-btn{display:flex;align-items:center;gap:5px;background:var(--orange3);border-radius:20px;padding:6px 12px;font-size:11px;font-weight:700;color:var(--orange);}

/* SECTION */
.sec-head{padding:20px 24px 12px;display:flex;align-items:center;justify-content:space-between;}
.sec-title{font-size:14px;font-weight:800;color:var(--text);letter-spacing:-.2px;}

/* ACTIONS */
.actions-row{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;padding:0 24px;}
.action-item{display:flex;flex-direction:column;align-items:center;gap:8px;cursor:pointer;transition:transform .2s cubic-bezier(.34,1.56,.64,1);}
.action-item:active{transform:scale(.88);}
.action-circle{width:60px;height:60px;border-radius:50%;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 16px rgba(0,0,0,.10);transition:box-shadow .2s;}
.action-lbl{font-size:11px;font-weight:700;color:var(--text);text-align:center;line-height:1.3;}

/* APERÇU */
.apercu-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;padding:0 24px;}
.apercu-card{background:var(--card);border-radius:var(--r-md);padding:14px 10px;box-shadow:var(--shadow);text-align:center;}
.apercu-icon-wrap{display:flex;justify-content:center;margin-bottom:6px;}
.apercu-lbl{font-size:10px;font-weight:600;color:var(--text2);margin-bottom:3px;}
.apercu-val{font-size:13px;font-weight:800;}

/* INNER HEADER */
.inner-header{background:rgba(255,255,255,.96);backdrop-filter:blur(20px);padding:16px 20px;display:flex;align-items:center;gap:14px;border-bottom:1px solid var(--border);position:sticky;top:0;z-index:50;}
.back-btn{width:38px;height:38px;background:var(--bg);border:none;border-radius:var(--r-sm);display:flex;align-items:center;justify-content:center;cursor:pointer;flex-shrink:0;transition:transform .15s;}
.back-btn:active{transform:scale(.9);}
.inner-title{font-size:18px;font-weight:800;color:var(--text);}
.header-action-btn{margin-left:auto;padding:8px 16px;background:linear-gradient(135deg,var(--orange),var(--orange2));border:none;border-radius:var(--r-sm);font-family:'Poppins',sans-serif;font-size:12px;font-weight:700;color:#fff;cursor:pointer;box-shadow:0 2px 10px rgba(255,152,0,.3);transition:all .15s;display:flex;align-items:center;gap:6px;}
.header-action-btn:active{transform:scale(.96);}

/* FORMS */
.form-wrap{padding:24px;}
.f-field{margin-bottom:18px;}
.f-label{font-size:11px;font-weight:700;color:var(--text2);letter-spacing:.8px;text-transform:uppercase;display:block;margin-bottom:8px;}
.f-input{width:100%;padding:14px 16px;background:var(--bg);border:2px solid var(--border);border-radius:var(--r-md);font-family:'Poppins',sans-serif;font-size:15px;font-weight:500;color:var(--text);outline:none;transition:border .2s,box-shadow .2s;}
.f-input:focus{border-color:var(--orange);box-shadow:0 0 0 4px rgba(255,152,0,.10);}
select.f-input{appearance:none;-webkit-appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%236B7280' stroke-width='1.8' fill='none' stroke-linecap='round'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 16px center;padding-right:40px;background-color:var(--bg);}
.stock-banner{background:var(--orange3);border-radius:var(--r-md);padding:14px 16px;margin-bottom:20px;display:flex;align-items:center;gap:12px;}
.stock-banner-val{font-size:22px;font-weight:900;color:var(--orange);}
.stock-banner-lbl{font-size:11px;font-weight:600;color:var(--text2);}
.calc-preview{background:linear-gradient(135deg,#FF9800,#FFB74D);border-radius:var(--r-lg);padding:22px;text-align:center;margin:4px 0 20px;box-shadow:var(--shadow-orange);}
.calc-lbl{font-size:11px;font-weight:600;color:rgba(255,255,255,.75);letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;}
.calc-amount{font-size:36px;font-weight:900;color:#fff;letter-spacing:-1px;}
.calc-detail{font-size:13px;font-weight:600;color:rgba(255,255,255,.7);margin-top:4px;}
.submit-btn{width:100%;padding:16px;background:linear-gradient(135deg,var(--orange),var(--orange2));border:none;border-radius:var(--r-md);font-family:'Poppins',sans-serif;font-size:15px;font-weight:700;color:#fff;cursor:pointer;box-shadow:var(--shadow-orange);transition:all .2s;}
.submit-btn:active{transform:scale(.97);}
.submit-btn:disabled{opacity:.45;cursor:not-allowed;transform:none;}
.toast-success{background:var(--success-bg);border:1.5px solid #BBF7D0;border-radius:var(--r-md);padding:13px 16px;display:flex;align-items:center;gap:10px;color:var(--success);font-size:14px;font-weight:700;margin-bottom:18px;}
.toast-error{background:var(--error-bg);border:1.5px solid #FCA5A5;border-radius:var(--r-md);padding:12px 16px;display:flex;align-items:center;gap:10px;color:var(--error);font-size:14px;font-weight:600;margin-bottom:16px;}
.back-dash-btn{width:100%;padding:14px;margin-top:10px;background:none;border:2px solid var(--border);border-radius:var(--r-md);font-family:'Poppins',sans-serif;font-size:14px;font-weight:700;color:var(--text2);cursor:pointer;transition:all .15s;}
.back-dash-btn:active{transform:scale(.97);}

/* HISTORY */
.hist-filter{padding:12px 24px;display:flex;gap:8px;}
.hist-date-in{flex:1;padding:11px 14px;background:var(--card);border:2px solid var(--border);border-radius:var(--r-sm);font-family:'Poppins',sans-serif;font-size:14px;font-weight:500;color:var(--text);outline:none;}
.hist-date-in:focus{border-color:var(--orange);}
.clear-btn{padding:0 14px;background:var(--card);border:2px solid var(--border);border-radius:var(--r-sm);font-size:13px;font-weight:700;color:var(--text2);cursor:pointer;font-family:'Poppins',sans-serif;}
.day-block{padding:0 24px 16px;}
.day-badge{display:inline-flex;align-items:center;gap:6px;background:var(--card);border-radius:20px;padding:6px 12px;font-size:12px;font-weight:700;color:var(--text2);box-shadow:var(--shadow);margin-bottom:8px;}
.hist-row{background:var(--card);border-radius:var(--r-md);padding:14px 16px;margin-bottom:8px;display:flex;align-items:center;justify-content:space-between;box-shadow:var(--shadow);}
.hist-pill{font-size:10px;font-weight:700;padding:4px 10px;border-radius:20px;display:inline-block;margin-bottom:3px;}
.hist-pill.vente{background:var(--success-bg);color:var(--success);}
.hist-pill.depense{background:var(--error-bg);color:var(--error);}
.hist-pill.production{background:var(--blue-bg);color:var(--blue);}
.hist-desc{font-size:12px;font-weight:500;color:var(--text2);}
.hist-time{font-size:11px;font-weight:500;color:var(--text3);margin-top:1px;display:flex;align-items:center;gap:3px;}
.hist-amt{font-size:16px;font-weight:800;}
.hist-amt.pos{color:var(--success);}
.hist-amt.neg{color:var(--error);}
.hist-amt.neu{color:var(--blue);}
.hist-actions{display:flex;gap:6px;margin-left:10px;}
.icon-btn{width:32px;height:32px;border-radius:10px;border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s;}
.icon-btn:active{transform:scale(.9);}
.icon-btn.edit{background:var(--blue-bg);}
.icon-btn.del{background:var(--error-bg);}

/* PRODUITS */
.product-chips{display:flex;gap:8px;flex-wrap:wrap;margin-bottom:4px;}
.product-chip{padding:8px 16px;border-radius:20px;border:2px solid var(--border);background:var(--card);font-family:'Poppins',sans-serif;font-size:13px;font-weight:600;color:var(--text2);cursor:pointer;transition:all .2s;}
.product-chip.active{border-color:var(--orange);background:var(--orange3);color:var(--orange);}
.product-card{background:var(--card);border-radius:var(--r-lg);padding:16px;margin-bottom:10px;box-shadow:var(--shadow);display:flex;align-items:center;justify-content:space-between;}
.product-card-left{display:flex;align-items:center;gap:12px;}
.product-emoji{width:44px;height:44px;border-radius:14px;background:var(--orange3);display:flex;align-items:center;justify-content:center;font-size:22px;flex-shrink:0;}
.product-name{font-size:15px;font-weight:700;color:var(--text);}
.product-stock{font-size:12px;font-weight:600;color:var(--text2);margin-top:2px;}
.product-price{font-size:14px;font-weight:800;color:var(--orange);}

/* RAPPORTS */
.period-pills{display:flex;gap:8px;padding:14px 24px 4px;overflow-x:auto;}
.period-pills::-webkit-scrollbar{display:none;}
.period-pill{flex-shrink:0;padding:8px 18px;border-radius:20px;font-family:'Poppins',sans-serif;font-size:12px;font-weight:700;cursor:pointer;border:2px solid var(--border);background:var(--card);color:var(--text2);transition:all .2s;}
.period-pill.active{background:var(--orange);color:#fff;border-color:var(--orange);box-shadow:0 4px 14px rgba(255,152,0,.3);}
.report-card{background:var(--card);border-radius:var(--r-lg);margin:12px 24px;padding:20px;box-shadow:var(--shadow);}
.report-card-title{font-size:12px;font-weight:700;color:var(--text2);letter-spacing:1px;text-transform:uppercase;margin-bottom:14px;}
.rep-row{display:flex;align-items:center;justify-content:space-between;padding:12px 0;border-bottom:1px solid var(--bg);}
.rep-row:last-child{border-bottom:none;}
.rep-left{display:flex;align-items:center;gap:10px;}
.rep-icon{width:34px;height:34px;border-radius:10px;display:flex;align-items:center;justify-content:center;}
.rep-lbl{font-size:13px;font-weight:600;color:var(--text2);}
.rep-val{font-size:16px;font-weight:800;}
.product-filter-tabs{display:flex;gap:6px;padding:4px 24px 12px;overflow-x:auto;}
.product-filter-tabs::-webkit-scrollbar{display:none;}
.prod-tab{flex-shrink:0;padding:6px 14px;border-radius:20px;font-family:'Poppins',sans-serif;font-size:12px;font-weight:600;cursor:pointer;border:1.5px solid var(--border);background:var(--card);color:var(--text2);transition:all .2s;display:flex;align-items:center;gap:5px;}
.prod-tab.active{background:var(--text);color:#fff;border-color:var(--text);}

/* CHARTS */
.chart-card{background:var(--card);border-radius:var(--r-lg);margin:12px 24px;padding:20px;box-shadow:var(--shadow);}
.chart-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;}
.chart-title{font-size:14px;font-weight:800;color:var(--text);}
.chart-sub{font-size:11px;font-weight:600;color:var(--text3);}

/* STOCK PAGE */
.stock-hero{margin:20px 24px 0;background:linear-gradient(135deg,#FF9800,#FFB74D);border-radius:var(--r-xl);padding:28px;text-align:center;box-shadow:var(--shadow-orange);}
.stock-hero-num{font-size:64px;font-weight:900;color:#fff;letter-spacing:-2px;line-height:1;}
.stock-hero-lbl{font-size:14px;font-weight:700;color:rgba(255,255,255,.8);margin-top:4px;letter-spacing:1px;}

/* PARAMS */
.params-section-title{font-size:11px;font-weight:700;color:var(--text2);letter-spacing:1.5px;text-transform:uppercase;padding:0 24px;margin-bottom:10px;}
.param-row{background:var(--card);margin:0 24px 8px;border-radius:var(--r-md);padding:15px 16px;display:flex;align-items:center;justify-content:space-between;box-shadow:var(--shadow);}
.param-label{font-size:14px;font-weight:700;color:var(--text);}
.param-sub{font-size:12px;font-weight:500;color:var(--text2);margin-top:2px;}
.param-val-input{border:none;font-family:'Poppins',sans-serif;font-size:14px;font-weight:700;color:var(--orange);text-align:right;background:none;outline:none;width:90px;}
.logout-btn{width:calc(100% - 48px);margin:0 24px;padding:15px;background:var(--error-bg);border:2px solid #FCA5A5;border-radius:var(--r-md);font-family:'Poppins',sans-serif;font-size:15px;font-weight:700;color:var(--error);cursor:pointer;display:flex;align-items:center;justify-content:center;gap:10px;}

/* MODAL */
.modal-overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);backdrop-filter:blur(4px);z-index:200;display:flex;align-items:flex-end;}
.modal-sheet{background:#fff;border-radius:28px 28px 0 0;padding:28px 24px 40px;width:100%;max-height:90vh;overflow-y:auto;}
.modal-handle{width:40px;height:4px;background:var(--border);border-radius:2px;margin:0 auto 20px;}
.modal-title{font-size:18px;font-weight:800;color:var(--text);margin-bottom:20px;}
.modal-close{position:absolute;top:20px;right:20px;width:36px;height:36px;background:var(--bg);border:none;border-radius:10px;cursor:pointer;display:flex;align-items:center;justify-content:center;}

/* EMOJI PICKER */
.emoji-grid{display:flex;flex-wrap:wrap;gap:8px;margin-bottom:4px;}
.emoji-opt{width:42px;height:42px;border-radius:12px;border:2px solid var(--border);background:var(--bg);font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all .15s;}
.emoji-opt.sel{border-color:var(--orange);background:var(--orange3);}

.empty{text-align:center;color:var(--text3);padding:36px 0;font-size:14px;font-weight:600;}
.divider{height:1px;background:var(--border);margin:4px 0;}

@keyframes fadeUp{from{opacity:0;transform:translateY(18px);}to{opacity:1;transform:translateY(0);}}
@keyframes scaleIn{from{opacity:0;transform:scale(.94);}to{opacity:1;transform:scale(1);}}
.fade-up{animation:fadeUp .3s ease both;}
.scale-in{animation:scaleIn .25s ease both;}
.s1{animation-delay:.04s}.s2{animation-delay:.08s}.s3{animation-delay:.12s}.s4{animation-delay:.16s}
`;

/* ═══════════ HELPERS ═══════════════════════════════════════════════════════════ */
const fmt      = n => new Intl.NumberFormat('fr-FR').format(n) + " FC";
const isoToday = () => new Date().toISOString().slice(0,10);
const fmtDate  = iso => { const [y,m,d]=iso.split("-"); return `${d}/${m}/${y}`; };
const nowTime  = () => new Date().toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
const load = (k,d) => { try{ const v=localStorage.getItem(k); return v?JSON.parse(v):d; }catch{ return d; } };
const save = (k,v) => { try{ localStorage.setItem(k,JSON.stringify(v)); }catch{} };

const DAYS_FR   = ["Dimanche","Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"];
const MONTHS_FR = ["janvier","février","mars","avril","mai","juin","juillet","août","septembre","octobre","novembre","décembre"];
const DEPENSE_CATS = ["Gingembre","Sucre","Citron","Bouteilles","Étiquettes","Transport","Autre"];
const EMOJIS = ["🧃","🫚","🍋","🌿","🌺","🍊","🥭","🍓","🍇","🍵","🥤","🫖","💧","🧋","🍹","🥐","🍞","🍰","🍫","🧁"];

const DEFAULT_PRODUCTS = [
  { id: 1, name: "Ginger Nature", emoji: "🫚", prix: 2000 },
];

/* ═══════════ APP ROOT ══════════════════════════════════════════════════════════ */
function App() {
  const [auth,       setAuth]       = useState(() => load("gc3_auth", false));
  const [userName,   setUserName]   = useState(() => load("gc3_user", "Charly"));
  const [objectif,   setObjectif]   = useState(() => load("gc3_obj", 50));
  const [tab,        setTab]        = useState("accueil");
  const [sub,        setSub]        = useState(null); // "vente"|"depense"|"production"|"addProduct"

  const [products,    setProducts]    = useState(() => load("gc3_products",    DEFAULT_PRODUCTS));
  const [sales,       setSales]       = useState(() => load("gc3_sales",       []));
  const [expenses,    setExpenses]    = useState(() => load("gc3_expenses",    []));
  const [productions, setProductions] = useState(() => load("gc3_prods",       []));

  useEffect(()=>save("gc3_auth",       auth),        [auth]);
  useEffect(()=>save("gc3_user",       userName),    [userName]);
  useEffect(()=>save("gc3_obj",        objectif),    [objectif]);
  useEffect(()=>save("gc3_products",   products),    [products]);
  useEffect(()=>save("gc3_sales",      sales),       [sales]);
  useEffect(()=>save("gc3_expenses",   expenses),    [expenses]);
  useEffect(()=>save("gc3_prods",      productions), [productions]);

  // stock par produit — useMemo AVANT tout return conditionnel (règle des hooks)
  const stockByProduct = useMemo(() => {
    const map = {};
    products.forEach(p => { map[p.id] = 0; });
    productions.forEach(pr => { if (map[pr.productId] !== undefined) map[pr.productId] += pr.qty; });
    sales.forEach(s => { if (map[s.productId] !== undefined) map[s.productId] -= s.qty; });
    Object.keys(map).forEach(k => { map[k] = Math.max(0, map[k]); });
    return map;
  }, [products, productions, sales]);

  const totalStock = Object.values(stockByProduct).reduce((a,b)=>a+b, 0);

  if (!auth) return <LoginScreen onLogin={n=>{ setUserName(n); setAuth(true); }} />;

  const addSale       = s  => setSales(p=>[s,...p]);
  const addExpense    = e  => setExpenses(p=>[e,...p]);
  const addProduction = pr => {
    setProductions(p=>[pr,...p]);
    if (pr.cout > 0) addExpense({ id:pr.id+1, category:"Production", amount:pr.cout, comment:`Production ${pr.qty} unités — ${pr.productName}`, date:pr.date, time:pr.time, productId: pr.productId });
  };
  const delProduction = id => setProductions(p=>p.filter(x=>x.id!==id));
  const editProduction = (id, updates) => setProductions(p=>p.map(x=>x.id===id?{...x,...updates}:x));
  const delSale        = id => setSales(p=>p.filter(x=>x.id!==id));
  const delExpense     = id => setExpenses(p=>p.filter(x=>x.id!==id));
  const addProduct     = prod => setProducts(p=>[...p,prod]);
  const delProduct     = id => setProducts(p=>p.filter(x=>x.id!==id));
  const editProduct    = (id, updates) => setProducts(p=>p.map(x=>x.id===id?{...x,...updates}:x));

  const NAV = [
    { key:"accueil",  Icon:Home,        label:"Accueil"  },
    { key:"ventes",   Icon:ShoppingCart,label:"Ventes"   },
    { key:"stock",    Icon:Package,     label:"Stock"    },
    { key:"rapports", Icon:BarChart2,   label:"Rapports" },
    { key:"params",   Icon:Settings,    label:"Params"   },
  ];

  const renderPage = () => {
    if (sub==="vente")      return <VentePage      products={products} stockByProduct={stockByProduct} onSave={addSale}       onBack={()=>setSub(null)} />;
    if (sub==="depense")    return <DepensePage    onSave={addExpense}    onBack={()=>setSub(null)} />;
    if (sub==="production") return <ProductionPage products={products}                onSave={addProduction} onBack={()=>setSub(null)} />;
    if (sub==="addProduct") return <AddProductPage onSave={p=>{ addProduct(p); setSub(null); }} onBack={()=>setSub(null)} />;
    switch(tab) {
      case "accueil":  return <Dashboard    products={products} sales={sales} expenses={expenses} productions={productions} totalStock={totalStock} stockByProduct={stockByProduct} objectif={objectif} userName={userName} onAction={setSub} />;
      case "ventes":   return <VentesPage   products={products} sales={sales} onNew={()=>setSub("vente")} onDelete={delSale} />;
      case "stock":    return <StockPage    products={products} productions={productions} sales={sales} stockByProduct={stockByProduct} onNew={()=>setSub("production")} onDelete={delProduction} onEdit={editProduction} onAddProduct={()=>setSub("addProduct")} onDeleteProduct={delProduct} onEditProduct={editProduct} />;
      case "rapports": return <RapportsPage products={products} sales={sales} expenses={expenses} productions={productions} />;
      case "params":   return <ParamsPage   userName={userName} setUserName={setUserName} objectif={objectif} setObjectif={setObjectif} onLogout={()=>setAuth(false)} />;
      default: return null;
    }
  };

  return (
    <>
      <style>{CSS}</style>
      <div className="app">
        <div className="page">{renderPage()}</div>
        {!sub && (
          <nav className="bottom-nav">
            {NAV.map(({key,Icon,label})=>(
              <div key={key} className={`nav-item ${tab===key?"active":""}`} onClick={()=>setTab(key)}>
                <div className="nav-icon-wrap">
                  <Icon size={20} color={tab===key?"var(--orange)":"var(--text3)"} strokeWidth={tab===key?2.5:2} />
                </div>
                <span className="nav-label">{label}</span>
              </div>
            ))}
          </nav>
        )}
      </div>
    </>
  );
}

/* ═══════════ LOGIN ══════════════════════════════════════════════════════════════ */
function LoginScreen({ onLogin }) {
  const [user,setUser]=useState(""); const [pass,setPass]=useState("");
  const [show,setShow]=useState(false); const [err,setErr]=useState("");
  const handle = () => { if(pass==="1234") onLogin(user.trim()||"Charly"); else setErr("Mot de passe incorrect — essaie 1234"); };
  return (
    <>
      <style>{CSS}</style>
      <div className="login-page fade-up">
        <div className="login-icon-wrap"><Droplets size={44} color="#fff" strokeWidth={1.5}/></div>
        <div className="login-brand">Ginger</div>
        <div className="login-tagline">Compta · Kiosque</div>
        <div className="login-card">
          <label className="lf-label">Nom d'utilisateur</label>
          <div className="lf-input-wrap"><input className="lf-input" placeholder="Ex : Charly" value={user} onChange={e=>setUser(e.target.value)}/></div>
          <label className="lf-label">Mot de passe</label>
          <div className="lf-input-wrap">
            <input className="lf-input" type={show?"text":"password"} placeholder="••••" value={pass} onChange={e=>setPass(e.target.value)} onKeyDown={e=>e.key==="Enter"&&handle()}/>
            <span className="lf-eye" onClick={()=>setShow(s=>!s)}>{show?<EyeOff size={18}/>:<Eye size={18}/>}</span>
          </div>
          <button className="lf-btn" onClick={handle}>Se connecter</button>
          {err&&<div className="lf-err">{err}</div>}
          <div className="lf-hint">Mot de passe : 1234</div>
        </div>
      </div>
    </>
  );
}

/* ═══════════ DASHBOARD ══════════════════════════════════════════════════════════ */
function Dashboard({ products, sales, expenses, productions, totalStock, stockByProduct, objectif, userName, onAction }) {
  const today  = isoToday();
  const now    = new Date();
  const dateStr = `${DAYS_FR[now.getDay()]} ${now.getDate()} ${MONTHS_FR[now.getMonth()]} ${now.getFullYear()}`;

  const tSales = sales.filter(s=>s.date===today);
  const tExp   = expenses.filter(e=>e.date===today);
  const venteJour  = tSales.reduce((s,x)=>s+x.total,0);
  const depJour    = tExp.reduce((s,x)=>s+x.amount,0);
  const benef      = venteJour - depJour;
  const bottlesSold= tSales.reduce((s,x)=>s+x.qty,0);
  const progPct    = objectif>0 ? Math.min(100,Math.round((bottlesSold/objectif)*100)) : 0;

  const ystIso  = new Date(now.getTime()-86400000).toISOString().slice(0,10);
  const ystRev  = sales.filter(s=>s.date===ystIso).reduce((s,x)=>s+x.total,0);
  const trendPct= ystRev>0 ? Math.round(((venteJour-ystRev)/ystRev)*100) : null;
  const trendUp = trendPct===null?true:trendPct>=0;

  const weekStart = new Date(now); weekStart.setDate(now.getDate()-now.getDay());
  const weekCA    = sales.filter(s=>new Date(s.date)>=weekStart).reduce((s,x)=>s+x.total,0);
  const weekExp2  = expenses.filter(e=>new Date(e.date)>=weekStart).reduce((s,x)=>s+x.amount,0);
  const dayTotals = {};
  sales.forEach(s=>{ const d=DAYS_FR[new Date(s.date).getDay()]; dayTotals[d]=(dayTotals[d]||0)+s.total; });
  const bestDay = Object.entries(dayTotals).sort((a,b)=>b[1]-a[1])[0]?.[0]||"—";

  const R=32, CIRC=2*Math.PI*R;

  return (
    <div className="fade-up">
      <div className="topbar">
        <div className="topbar-menu"><Menu size={18} color="var(--text)"/></div>
        <div style={{textAlign:"center"}}>
          <div style={{fontSize:24,fontWeight:900,letterSpacing:-1,background:"linear-gradient(135deg,#FF9800,#E65100)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",lineHeight:1,fontStyle:"italic"}}>Ginger</div>
          <div style={{fontSize:8,fontWeight:800,color:"var(--text3)",letterSpacing:4,textTransform:"uppercase",marginTop:1}}>COMPTA</div>
        </div>
        <div className="topbar-bell"><Bell size={18} color="var(--text)"/><div className="notif-dot"/></div>
      </div>

      <div className="greeting" style={{position:"relative",overflow:"visible"}}>
        <h2>Bonjour, {userName}</h2>
        <p>{dateStr}</p>
        {/* Bouteille + gingembre discrets en haut à droite */}
        <div style={{position:"absolute",right:-8,top:-56,pointerEvents:"none",userSelect:"none",opacity:.92,display:"flex",alignItems:"flex-end",gap:2}}>
          <span style={{fontSize:34,filter:"drop-shadow(0 4px 8px rgba(0,0,0,.15))",transform:"rotate(-8deg)",display:"block"}}>🫚</span>
          <span style={{fontSize:44,filter:"drop-shadow(0 4px 12px rgba(255,152,0,.3))",transform:"rotate(6deg)",display:"block",marginBottom:-4}}>🍶</span>
        </div>
      </div>

      <div className="hero-card s1 fade-up">
        <div className="hero-label">Ventes du jour</div>
        <div className="hero-amount">{fmt(venteJour)}</div>
        <div style={{fontSize:13,fontWeight:600,color:"rgba(255,255,255,.85)",marginTop:4,marginBottom:4}}>
          {bottlesSold} bouteille{bottlesSold>1?"s":""} vendues
        </div>
        {trendPct!==null && (
          <div className="hero-trend">
            {trendUp?<TrendingUp size={13}/>:<TrendingDown size={13}/>}
            {trendUp?"+":""}{trendPct}% vs hier
          </div>
        )}
        <div className="hero-ring">
          <div style={{position:"relative",width:80,height:80}}>
            <svg className="ring-svg" width="80" height="80" viewBox="0 0 80 80">
              <circle cx="40" cy="40" r={R} fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="8"/>
              <circle cx="40" cy="40" r={R} fill="none" stroke="#fff" strokeWidth="8"
                strokeDasharray={CIRC} strokeDashoffset={CIRC*(1-progPct/100)}
                strokeLinecap="round" style={{transition:"stroke-dashoffset .8s cubic-bezier(.34,1,.64,1)"}}/>
            </svg>
            <div className="ring-text"><span className="ring-pct">{progPct}%</span><span className="ring-sub">objectif</span></div>
          </div>
          <div className="ring-label">Atteint</div>
        </div>
      </div>

      <div className="kpi-strip">
        <div className="kpi-card s2 fade-up">
          <div className="kpi-icon-wrap" style={{background:"var(--orange3)"}}><Package size={18} color="var(--orange)"/></div>
          <div className="kpi-lbl">Stock total</div>
          <div className="kpi-val" style={{color:"var(--orange)",fontSize:22,fontWeight:900}}>{totalStock}</div>
          <div className="kpi-sub">bouteilles</div>
        </div>
        <div className="kpi-card s3 fade-up">
          <div className="kpi-icon-wrap" style={{background:"var(--success-bg)"}}><TrendingUp size={18} color="var(--success)"/></div>
          <div className="kpi-lbl">Bénéfice</div>
          <div className="kpi-val" style={{color:benef>=0?"var(--success)":"var(--error)"}}>{fmt(benef)}</div>
          {trendPct!==null&&<div className="kpi-badge" style={{background:trendUp?"var(--success-bg)":"var(--error-bg)",color:trendUp?"var(--success)":"var(--error)"}}>{trendUp?<TrendingUp size={9}/>:<TrendingDown size={9}/>} {Math.abs(trendPct)}%</div>}
        </div>
        <div className="kpi-card s4 fade-up">
          <div className="kpi-icon-wrap" style={{background:"var(--error-bg)"}}><Wallet size={18} color="var(--error)"/></div>
          <div className="kpi-lbl">Dépenses</div>
          <div className="kpi-val" style={{color:"var(--error)"}}>{fmt(depJour)}</div>
        </div>
      </div>

      <div className="objectif-card s3 fade-up">
        <div className="obj-top">
          <div className="obj-icon-wrap"><Target size={22} color="var(--orange)"/></div>
          <div><div className="obj-title">Objectif du jour</div><div className="obj-bottles">{objectif} bouteilles</div></div>
          <div className="obj-pct">{progPct}%</div>
        </div>
        <div className="prog-track"><div className="prog-fill" style={{width:`${progPct}%`}}/></div>
        <div className="obj-footer">
          <div className="obj-count"><strong>{bottlesSold}</strong> / {objectif} bouteilles</div>
          <div className="motivate-btn"><Star size={12}/>{progPct<50?"Courage !":progPct<100?"Garde le cap !":"Objectif ! 🎉"}</div>
        </div>
      </div>

      <div className="sec-head"><span className="sec-title">Actions rapides</span></div>
      <div className="actions-row">
        {[
          {label:"Nouvelle vente",   bg:"linear-gradient(135deg,#FF9800,#FFB74D)", Icon:ShoppingCart, action:"vente"},
          {label:"Produire du stock",bg:"linear-gradient(135deg,#22C55E,#4ADE80)", Icon:Factory,      action:"production"},
          {label:"Nouvelle dépense", bg:"linear-gradient(135deg,#EF4444,#F87171)", Icon:Wallet,       action:"depense"},
          {label:"Rapports",         bg:"linear-gradient(135deg,#8B5CF6,#A78BFA)", Icon:BarChart2,    action:null},
        ].map(({label,bg,Icon,action},i)=>(
          <div key={label} className={`action-item s${i+1} fade-up`} onClick={()=>action&&onAction(action)}>
            <div className="action-circle" style={{background:bg}}><Icon size={24} color="#fff" strokeWidth={2}/></div>
            <span className="action-lbl">{label}</span>
          </div>
        ))}
      </div>

      <div className="sec-head"><span className="sec-title">Aperçu rapide</span></div>
      <div className="apercu-strip">
        <div className="apercu-card"><div className="apercu-icon-wrap"><Activity size={18} color="var(--orange)"/></div><div className="apercu-lbl">Ventes semaine</div><div className="apercu-val" style={{color:"var(--orange)"}}>{fmt(weekCA)}</div></div>
        <div className="apercu-card"><div className="apercu-icon-wrap"><TrendingUp size={18} color="var(--success)"/></div><div className="apercu-lbl">Bénéfice semaine</div><div className="apercu-val" style={{color:"var(--success)"}}>{fmt(weekCA-weekExp2)}</div></div>
        <div className="apercu-card"><div className="apercu-icon-wrap"><Award size={18} color="var(--blue)"/></div><div className="apercu-lbl">Meilleur jour</div><div className="apercu-val" style={{color:"var(--blue)"}}>{bestDay}</div></div>
      </div>
      <div style={{height:8}}/>
    </div>
  );
}

/* ═══════════ VENTE PAGE ════════════════════════════════════════════════════════ */
function VentePage({ products, stockByProduct, onSave, onBack }) {
  const [productId, setProductId] = useState(products[0]?.id||null);
  const [qty,  setQty]  = useState("");
  const [prix, setPrix] = useState(() => { const p = products[0]; return p?.prix ? String(p.prix) : ""; });
  const [ok,   setOk]   = useState(false);
  const [err,  setErr]  = useState("");

  const product  = products.find(p=>p.id===productId);
  const stockDispo = productId ? (stockByProduct[productId]||0) : 0;
  const total    = (parseInt(qty)||0)*(parseInt(prix)||0);

  const selectProduct = p => {
    setProductId(p.id);
    setPrix(String(p.prix||""));
    setErr("");
  };

  const handle = () => {
    setErr("");
    const q=parseInt(qty)||0, p=parseInt(prix)||0;
    if (!productId)  { setErr("Sélectionnez un produit."); return; }
    if (!q||!p)      { setErr("Remplissez la quantité et le prix."); return; }
    if (q>stockDispo){ setErr(`Stock insuffisant ! Seulement ${stockDispo} unités disponibles.`); return; }
    const now = new Date();
    onSave({ id:Date.now(), productId, productName:product.name, productEmoji:product.emoji, qty:q, prix:p, total:q*p, date:now.toISOString().slice(0,10), time:now.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit',second:'2-digit'}) });
    setQty(""); setOk(true);
    setTimeout(()=>setOk(false),3000);
  };

  return (
    <div className="fade-up">
      <div className="inner-header">
        <button className="back-btn" onClick={onBack}><ArrowLeft size={18} color="var(--text)"/></button>
        <span className="inner-title">Nouvelle vente</span>
      </div>
      <div className="form-wrap">
        {ok  && <div className="toast-success"><CheckCircle size={18}/> Vente enregistrée — {fmtDate(isoToday())} à {nowTime().slice(0,5)}</div>}
        {err && <div className="toast-error">{err}</div>}

        <div className="f-field">
          <label className="f-label">Produit vendu</label>
          <div className="product-chips">
            {products.map(p=>(
              <button key={p.id} className={`product-chip ${productId===p.id?"active":""}`} onClick={()=>selectProduct(p)}>
                {p.emoji} {p.name}
              </button>
            ))}
          </div>
          {product && (
            <div className="stock-banner" style={{marginTop:10,marginBottom:0}}>
              <div style={{width:40,height:40,borderRadius:12,background:"var(--orange)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:20,flexShrink:0}}>{product.emoji}</div>
              <div><div className="stock-banner-lbl">Stock disponible</div><div className="stock-banner-val">{stockDispo} bouteilles</div></div>
            </div>
          )}
        </div>

        <div className="f-field">
          <label className="f-label">Quantité vendue</label>
          <input className="f-input" type="number" placeholder="Ex : 5" value={qty} onChange={e=>{setQty(e.target.value);setErr("");}}/>
        </div>
        <div className="f-field">
          <label className="f-label">Prix unitaire (FC)</label>
          <input className="f-input" type="number" placeholder="Ex : 2 000" value={prix} onChange={e=>{setPrix(e.target.value);setErr("");}}/>
        </div>

        {qty&&prix && (
          <div className="calc-preview scale-in">
            <div className="calc-lbl">Total calculé automatiquement</div>
            <div className="calc-amount">{fmt(total)}</div>
            <div className="calc-detail">{qty} × {fmt(parseInt(prix)||0)}</div>
          </div>
        )}
        <button className="submit-btn" onClick={handle} disabled={!qty||!prix||!productId}>Enregistrer la vente</button>
        {ok && <button className="back-dash-btn" onClick={onBack}>← Retour au tableau de bord</button>}
      </div>
    </div>
  );
}

/* ═══════════ DÉPENSE PAGE ══════════════════════════════════════════════════════ */
function DepensePage({ onSave, onBack }) {
  const [cat,setCat]=useState("Gingembre"); const [amount,setAmount]=useState(""); const [comment,setComment]=useState(""); const [ok,setOk]=useState(false);
  const handle = () => {
    if(!amount) return;
    const now=new Date();
    onSave({id:Date.now(),category:cat,amount:parseInt(amount)||0,comment,date:now.toISOString().slice(0,10),time:now.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})});
    setAmount(""); setComment(""); setOk(true);
  };
  return (
    <div className="fade-up">
      <div className="inner-header">
        <button className="back-btn" onClick={onBack}><ArrowLeft size={18} color="var(--text)"/></button>
        <span className="inner-title">Nouvelle dépense</span>
      </div>
      <div className="form-wrap">
        {ok&&<div className="toast-success"><CheckCircle size={18}/> Dépense enregistrée !</div>}
        <div className="f-field">
          <label className="f-label">Catégorie</label>
          <select className="f-input" value={cat} onChange={e=>setCat(e.target.value)}>
            {DEPENSE_CATS.map(c=><option key={c}>{c}</option>)}
          </select>
        </div>
        <div className="f-field">
          <label className="f-label">Montant (FC)</label>
          <input className="f-input" type="number" placeholder="Ex : 10 000" value={amount} onChange={e=>setAmount(e.target.value)}/>
        </div>
        <div className="f-field">
          <label className="f-label">Commentaire</label>
          <input className="f-input" placeholder="Ex : Achat de gingembre" value={comment} onChange={e=>setComment(e.target.value)}/>
        </div>
        {amount&&(
          <div className="calc-preview scale-in" style={{background:"linear-gradient(135deg,#EF4444,#F87171)",boxShadow:"0 8px 24px rgba(239,68,68,.3)",marginBottom:20}}>
            <div className="calc-lbl">Montant</div>
            <div className="calc-amount">{fmt(parseInt(amount)||0)}</div>
            <div className="calc-detail">{cat}</div>
          </div>
        )}
        <button className="submit-btn" onClick={handle} disabled={!amount}>Enregistrer</button>
        {ok&&<button className="back-dash-btn" onClick={onBack}>← Retour</button>}
      </div>
    </div>
  );
}

/* ═══════════ PRODUCTION PAGE ═══════════════════════════════════════════════════ */
function ProductionPage({ products, onSave, onBack }) {
  const [productId, setProductId] = useState(products[0]?.id||null);
  const [date,setDate]=useState(isoToday()); const [qty,setQty]=useState(""); const [cout,setCout]=useState(""); const [ok,setOk]=useState(false);
  const product = products.find(p=>p.id===productId);
  const handle = () => {
    const q=parseInt(qty)||0;
    if(!q||!productId) return;
    const now=new Date();
    onSave({id:Date.now(),productId,productName:product.name,productEmoji:product.emoji,qty:q,cout:parseInt(cout)||0,date,time:now.toLocaleTimeString('fr-FR',{hour:'2-digit',minute:'2-digit'})});
    setQty(""); setCout(""); setOk(true);
  };
  return (
    <div className="fade-up">
      <div className="inner-header">
        <button className="back-btn" onClick={onBack}><ArrowLeft size={18} color="var(--text)"/></button>
        <span className="inner-title">Production de stock</span>
      </div>
      <div className="form-wrap">
        {ok&&<div className="toast-success"><CheckCircle size={18}/> Production enregistrée ! Stock mis à jour.</div>}
        <div className="f-field">
          <label className="f-label">Produit</label>
          <div className="product-chips">
            {products.map(p=>(
              <button key={p.id} className={`product-chip ${productId===p.id?"active":""}`} onClick={()=>setProductId(p.id)}>
                {p.emoji} {p.name}
              </button>
            ))}
          </div>
        </div>
        <div className="f-field">
          <label className="f-label">Date de production</label>
          <input className="f-input" type="date" value={date} onChange={e=>setDate(e.target.value)}/>
        </div>
        <div className="f-field">
          <label className="f-label">Nombre d'unités produites</label>
          <input className="f-input" type="number" placeholder="Ex : 50" value={qty} onChange={e=>setQty(e.target.value)}/>
        </div>
        <div className="f-field">
          <label className="f-label">Coût de production (FC)</label>
          <input className="f-input" type="number" placeholder="Ex : 25 000" value={cout} onChange={e=>setCout(e.target.value)}/>
        </div>
        {(qty||cout)&&(
          <div className="calc-preview scale-in" style={{background:"linear-gradient(135deg,#3B82F6,#60A5FA)",boxShadow:"0 8px 24px rgba(59,130,246,.3)",marginBottom:20}}>
            <div className="calc-lbl">Résumé — {product?.name}</div>
            <div className="calc-amount">{qty||0} unités</div>
            <div className="calc-detail">Coût : {fmt(parseInt(cout)||0)}</div>
          </div>
        )}
        <button className="submit-btn" onClick={handle} disabled={!qty||!productId}>Enregistrer la production</button>
        {ok&&<button className="back-dash-btn" onClick={onBack}>← Retour</button>}
      </div>
    </div>
  );
}

/* ═══════════ ADD PRODUCT PAGE ═══════════════════════════════════════════════════ */
function AddProductPage({ onSave, onBack }) {
  const [name,setName]=useState(""); const [emoji,setEmoji]=useState("🧃"); const [prix,setPrix]=useState(""); const [ok,setOk]=useState(false);
  const handle = () => {
    if(!name.trim()) return;
    onSave({id:Date.now(),name:name.trim(),emoji,prix:parseInt(prix)||0});
    setOk(true);
  };
  return (
    <div className="fade-up">
      <div className="inner-header">
        <button className="back-btn" onClick={onBack}><ArrowLeft size={18} color="var(--text)"/></button>
        <span className="inner-title">Nouveau produit</span>
      </div>
      <div className="form-wrap">
        {ok&&<div className="toast-success"><CheckCircle size={18}/> Produit créé avec succès !</div>}
        <div className="f-field">
          <label className="f-label">Choisir une icône</label>
          <div className="emoji-grid">
            {EMOJIS.map(e=>(
              <button key={e} className={`emoji-opt ${emoji===e?"sel":""}`} onClick={()=>setEmoji(e)}>{e}</button>
            ))}
          </div>
        </div>
        <div className="f-field">
          <label className="f-label">Nom du produit</label>
          <input className="f-input" placeholder="Ex : Jus de bissap, Café glacé..." value={name} onChange={e=>setName(e.target.value)}/>
        </div>
        <div className="f-field">
          <label className="f-label">Prix de vente par défaut (FC)</label>
          <input className="f-input" type="number" placeholder="Ex : 1 500" value={prix} onChange={e=>setPrix(e.target.value)}/>
        </div>
        <button className="submit-btn" onClick={handle} disabled={!name.trim()}>Créer le produit</button>
        {ok&&<button className="back-dash-btn" onClick={onBack}>← Retour au stock</button>}
      </div>
    </div>
  );
}

/* ═══════════ VENTES LIST PAGE ═══════════════════════════════════════════════════ */
function VentesPage({ products, sales, onNew, onDelete }) {
  const [filter,setFilter]=useState("");
  const filtered = filter?sales.filter(s=>s.date===filter):sales;
  const groups={};
  filtered.forEach(s=>{ if(!groups[s.date]) groups[s.date]=[]; groups[s.date].push(s); });
  const dates=Object.keys(groups).sort((a,b)=>b.localeCompare(a));
  return (
    <div className="fade-up">
      <div className="inner-header">
        <div className="inner-title">Ventes</div>
        <button className="header-action-btn" onClick={onNew}><Plus size={14}/> Nouvelle</button>
      </div>
      <div className="hist-filter">
        <input className="hist-date-in" type="date" value={filter} onChange={e=>setFilter(e.target.value)}/>
        {filter&&<button className="clear-btn" onClick={()=>setFilter("")}>✕</button>}
      </div>
      {dates.length===0&&<div className="empty">Aucune vente enregistrée</div>}
      {dates.map(date=>(
        <div className="day-block" key={date}>
          <div className="day-badge"><Calendar size={12}/> {fmtDate(date)}</div>
          {groups[date].map(s=>(
            <div className="hist-row" key={s.id}>
              <div>
                <span className="hist-pill vente">Vente</span>
                <div className="hist-desc">{s.productEmoji||"🧃"} {s.productName||"Produit"} · {s.qty} unité(s) × {fmt(s.prix)}</div>
                <div className="hist-time"><Clock size={10}/> {s.time}</div>
              </div>
              <div style={{display:"flex",alignItems:"center",gap:8}}>
                <span className="hist-amt pos">+{fmt(s.total)}</span>
                <div className="hist-actions">
                  <button className="icon-btn del" onClick={()=>{ if(window.confirm("Supprimer cette vente ?")) onDelete(s.id); }}><Trash2 size={13} color="var(--error)"/></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

/* ═══════════ STOCK PAGE ════════════════════════════════════════════════════════ */
function StockPage({ products, productions, sales, stockByProduct, onNew, onDelete, onEdit, onAddProduct, onDeleteProduct, onEditProduct }) {
  const [editingId, setEditingId] = useState(null);
  const [editModal, setEditModal] = useState(null); // production to edit
  const totalStock = Object.values(stockByProduct).reduce((a,b)=>a+b,0);

  return (
    <div className="fade-up">
      <div className="inner-header">
        <div className="inner-title">Stock</div>
        <button className="header-action-btn" onClick={onNew}><Plus size={14}/> Produire</button>
      </div>

      {/* Stock hero */}
      <div className="stock-hero">
        <div style={{fontSize:11,fontWeight:700,color:"rgba(255,255,255,.75)",letterSpacing:2,textTransform:"uppercase",marginBottom:8}}>Stock total</div>
        <div className="stock-hero-num">{totalStock}</div>
        <div className="stock-hero-lbl">bouteilles disponibles — {products.length} produit(s)</div>
      </div>

      {/* Par produit */}
      <div className="sec-head">
        <span className="sec-title">Stock par produit</span>
        <button style={{display:"flex",alignItems:"center",gap:5,background:"var(--orange3)",border:"none",borderRadius:20,padding:"6px 14px",fontFamily:"Poppins,sans-serif",fontSize:12,fontWeight:700,color:"var(--orange)",cursor:"pointer"}} onClick={onAddProduct}>
          <Plus size={13}/> Nouveau produit
        </button>
      </div>
      <div style={{padding:"0 24px"}}>
        {products.map(p=>{
          const st=stockByProduct[p.id]||0;
          const isEditingPrice=editingId===p.id;
          return (
            <div key={p.id} className="product-card">
              <div className="product-card-left">
                <div className="product-emoji">{p.emoji}</div>
                <div>
                  <div className="product-name">{p.name}</div>
                  <div className="product-stock" style={{color:st===0?"var(--error)":st<5?"var(--orange)":"var(--text2)"}}>
                    {st===0?"⚠ Rupture de stock":`${st} unités dispo`}
                  </div>
                  {isEditingPrice
                    ? <div style={{display:"flex",alignItems:"center",gap:6,marginTop:4}}>
                        <input style={{width:100,padding:"4px 8px",border:"2px solid var(--orange)",borderRadius:8,fontFamily:"Poppins,sans-serif",fontSize:13,fontWeight:700,outline:"none"}}
                          type="number" defaultValue={p.prix}
                          onBlur={e=>{ onEditProduct(p.id,{prix:parseInt(e.target.value)||0}); setEditingId(null); }}
                          autoFocus/>
                        <span style={{fontSize:11,color:"var(--text2)",fontWeight:600}}>FC</span>
                      </div>
                    : <div className="product-price" style={{cursor:"pointer"}} onClick={()=>setEditingId(p.id)}>{fmt(p.prix)} <Pencil size={11} style={{verticalAlign:"middle"}}/></div>
                  }
                </div>
              </div>
              <div>
                <button className="icon-btn del" onClick={()=>{ if(window.confirm(`Supprimer "${p.name}" ?`)) onDeleteProduct(p.id); }} style={{marginLeft:"auto"}}><Trash2 size={14} color="var(--error)"/></button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Historique productions */}
      <div className="sec-head"><span className="sec-title">Historique des productions</span></div>
      <div style={{padding:"0 24px"}}>
        {productions.length===0&&<div className="empty">Aucune production</div>}
        {productions.slice(0,30).map(pr=>(
          <div className="hist-row" key={pr.id}>
            <div>
              <span className="hist-pill production">Production</span>
              <div className="hist-desc">{pr.productEmoji||"📦"} {pr.productName||"Produit"} · {pr.qty} unités · {fmtDate(pr.date)}</div>
              <div className="hist-time"><Clock size={10}/> {pr.time} · Coût : {fmt(pr.cout||0)}</div>
            </div>
            <div className="hist-actions">
              <button className="icon-btn edit" onClick={()=>setEditModal(pr)}><Pencil size={13} color="var(--blue)"/></button>
              <button className="icon-btn del"  onClick={()=>{ if(window.confirm("Supprimer cette production ?")) onDelete(pr.id); }}><Trash2 size={13} color="var(--error)"/></button>
            </div>
          </div>
        ))}
      </div>
      <div style={{height:8}}/>

      {/* Edit modal */}
      {editModal && (
        <EditProductionModal
          production={editModal}
          onSave={(updates)=>{ onEdit(editModal.id,updates); setEditModal(null); }}
          onClose={()=>setEditModal(null)}
        />
      )}
    </div>
  );
}

/* ═══════════ EDIT PRODUCTION MODAL ════════════════════════════════════════════ */
function EditProductionModal({ production, onSave, onClose }) {
  const [qty,  setQty]  = useState(String(production.qty));
  const [cout, setCout] = useState(String(production.cout||0));
  const [date, setDate] = useState(production.date);
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-sheet" onClick={e=>e.stopPropagation()}>
        <div className="modal-handle"/>
        <div style={{position:"relative"}}>
          <div className="modal-title">Modifier la production</div>
          <button className="modal-close" onClick={onClose}><X size={16} color="var(--text2)"/></button>
        </div>
        <div style={{background:"var(--blue-bg)",borderRadius:14,padding:"12px 16px",marginBottom:18,display:"flex",alignItems:"center",gap:10}}>
          <span style={{fontSize:22}}>{production.productEmoji||"📦"}</span>
          <span style={{fontSize:14,fontWeight:700,color:"var(--blue)"}}>{production.productName}</span>
        </div>
        <div className="f-field">
          <label className="f-label">Date</label>
          <input className="f-input" type="date" value={date} onChange={e=>setDate(e.target.value)}/>
        </div>
        <div className="f-field">
          <label className="f-label">Quantité produite</label>
          <input className="f-input" type="number" value={qty} onChange={e=>setQty(e.target.value)}/>
        </div>
        <div className="f-field">
          <label className="f-label">Coût de production (FC)</label>
          <input className="f-input" type="number" value={cout} onChange={e=>setCout(e.target.value)}/>
        </div>
        <button className="submit-btn" onClick={()=>onSave({qty:parseInt(qty)||0,cout:parseInt(cout)||0,date})}>
          <Save size={16} style={{display:"inline",verticalAlign:"middle",marginRight:6}}/> Sauvegarder les modifications
        </button>
      </div>
    </div>
  );
}

/* ═══════════ RAPPORTS PAGE ═════════════════════════════════════════════════════ */
function RapportsPage({ products, sales, expenses, productions }) {
  const [period,  setPeriod]  = useState("jour");
  const [prodFilter, setProdFilter] = useState("all"); // "all" or product id

  const now = new Date();
  const filterDate = iso => {
    const d=new Date(iso);
    if(period==="jour")    return iso===isoToday();
    if(period==="semaine") { const s=new Date(now); s.setDate(now.getDate()-now.getDay()); return d>=s&&d<=now; }
    if(period==="mois")    return d.getFullYear()===now.getFullYear()&&d.getMonth()===now.getMonth();
    return d.getFullYear()===now.getFullYear();
  };

  const fSalesAll = sales.filter(s=>filterDate(s.date));
  const fExpAll   = expenses.filter(e=>filterDate(e.date));
  const fProdAll  = productions.filter(p=>filterDate(p.date));

  const fSales = prodFilter==="all" ? fSalesAll : fSalesAll.filter(s=>s.productId===prodFilter);
  const fExp   = prodFilter==="all" ? fExpAll   : fExpAll.filter(e=>e.productId===prodFilter);
  const fProd  = prodFilter==="all" ? fProdAll  : fProdAll.filter(p=>p.productId===prodFilter);

  const ca      = fSales.reduce((s,x)=>s+x.total,0);
  const dep     = fExp.reduce((s,x)=>s+x.amount,0);
  const ben     = ca - dep;
  const bottles = fSales.reduce((s,x)=>s+x.qty,0);
  const prodQty = fProd.reduce((s,p)=>s+p.qty,0);

  // per-product breakdown (global only)
  const byProduct = useMemo(()=>{
    const map={};
    products.forEach(p=>{ map[p.id]={name:p.name,emoji:p.emoji,ca:0,qty:0,cout:0}; });
    fSalesAll.forEach(s=>{ if(map[s.productId]){ map[s.productId].ca+=s.total; map[s.productId].qty+=s.qty; } });
    fProdAll.forEach(p=>{ if(map[p.productId]) map[p.productId].cout+=p.cout||0; });
    return Object.values(map);
  },[fSalesAll,fProdAll,products]);

  const chartData = useMemo(()=>{
    const days=[];
    for(let i=6;i>=0;i--){
      const d=new Date(); d.setDate(d.getDate()-i);
      const iso=d.toISOString().slice(0,10);
      const lbl=d.toLocaleDateString('fr-FR',{weekday:'short'});
      const daySales = prodFilter==="all" ? sales.filter(s=>s.date===iso) : sales.filter(s=>s.date===iso&&s.productId===prodFilter);
      const dayExp   = prodFilter==="all" ? expenses.filter(e=>e.date===iso) : expenses.filter(e=>e.date===iso&&e.productId===prodFilter);
      days.push({ name:lbl, Ventes:daySales.reduce((s,x)=>s+x.total,0), Dépenses:dayExp.reduce((s,x)=>s+x.amount,0) });
    }
    return days;
  },[sales,expenses,prodFilter]);

  return (
    <div className="fade-up">
      <div className="inner-header"><div className="inner-title">Rapports</div></div>

      {/* Période */}
      <div className="period-pills">
        {[["jour","Aujourd'hui"],["semaine","Semaine"],["mois","Mois"],["annee","Année"]].map(([k,l])=>(
          <button key={k} className={`period-pill ${period===k?"active":""}`} onClick={()=>setPeriod(k)}>{l}</button>
        ))}
      </div>

      {/* Filtre par produit */}
      <div className="product-filter-tabs">
        <button className={`prod-tab ${prodFilter==="all"?"active":""}`} onClick={()=>setProdFilter("all")}>
          <BarChart2 size={12}/> Tous les produits
        </button>
        {products.map(p=>(
          <button key={p.id} className={`prod-tab ${prodFilter===p.id?"active":""}`} onClick={()=>setProdFilter(p.id)}>
            {p.emoji} {p.name}
          </button>
        ))}
      </div>

      {/* Résultats */}
      <div className="report-card">
        <div className="report-card-title">{prodFilter==="all"?"Tous les produits":products.find(p=>p.id===prodFilter)?.name||""}</div>
        {[
          {Icon:Factory,      label:"Unités produites",    val:prodQty,     color:"var(--blue)",    bg:"var(--blue-bg)"},
          {Icon:ShoppingCart, label:"Unités vendues",      val:bottles,     color:"var(--orange)",  bg:"var(--orange3)"},
          {Icon:TrendingUp,   label:"Chiffre d'affaires",  val:fmt(ca),     color:"var(--orange)",  bg:"var(--orange3)"},
          {Icon:Wallet,       label:"Dépenses",            val:fmt(dep),    color:"var(--error)",   bg:"var(--error-bg)"},
          {Icon:Activity,     label:"Bénéfice net",        val:fmt(ben),    color:ben>=0?"var(--success)":"var(--error)", bg:ben>=0?"var(--success-bg)":"var(--error-bg)"},
        ].map(({Icon,label,val,color,bg})=>(
          <div className="rep-row" key={label}>
            <div className="rep-left"><div className="rep-icon" style={{background:bg}}><Icon size={16} color={color}/></div><span className="rep-lbl">{label}</span></div>
            <span className="rep-val" style={{color}}>{val}</span>
          </div>
        ))}
      </div>

      {/* Ventilation par produit (seulement si "tous") */}
      {prodFilter==="all" && (
        <div className="report-card">
          <div className="report-card-title">Ventilation par produit</div>
          {byProduct.map(p=>(
            <div className="rep-row" key={p.name}>
              <div className="rep-left">
                <div style={{fontSize:20,width:34,textAlign:"center"}}>{p.emoji}</div>
                <div><div style={{fontSize:13,fontWeight:700,color:"var(--text)"}}>{p.name}</div><div style={{fontSize:11,color:"var(--text2)"}}>{p.qty} ventes · coût {fmt(p.cout)}</div></div>
              </div>
              <div style={{textAlign:"right"}}>
                <div style={{fontSize:15,fontWeight:800,color:"var(--orange)"}}>{fmt(p.ca)}</div>
                <div style={{fontSize:11,fontWeight:700,color:p.ca-p.cout>=0?"var(--success)":"var(--error)"}}>{p.ca-p.cout>=0?"+":""}{fmt(p.ca-p.cout)}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Graphique */}
      <div className="chart-card">
        <div className="chart-head"><span className="chart-title">Ventes & Dépenses</span><span className="chart-sub">7 derniers jours</span></div>
        {chartData.some(d=>d.Ventes>0||d.Dépenses>0) ? (
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={chartData} barSize={16} barGap={4}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false}/>
              <XAxis dataKey="name" tick={{fontSize:11,fill:"var(--text2)",fontFamily:"Poppins",fontWeight:600}} axisLine={false} tickLine={false}/>
              <YAxis tick={{fontSize:10,fill:"var(--text3)"}} axisLine={false} tickLine={false} width={38} tickFormatter={v=>v>=1000?`${Math.round(v/1000)}k`:v}/>
              <Tooltip formatter={v=>fmt(v)} contentStyle={{borderRadius:12,border:"1px solid var(--border)",fontFamily:"Poppins",fontSize:12}}/>
              <Bar dataKey="Ventes"   fill="var(--orange)" radius={[6,6,0,0]}/>
              <Bar dataKey="Dépenses" fill="#FECACA"       radius={[6,6,0,0]}/>
            </BarChart>
          </ResponsiveContainer>
        ) : <div className="empty">Pas encore de données</div>}
      </div>

      <div className="chart-card" style={{marginBottom:24}}>
        <div className="chart-head"><span className="chart-title">Évolution des ventes</span><span className="chart-sub">7 jours</span></div>
        {chartData.some(d=>d.Ventes>0) ? (
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="gO" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="var(--orange)" stopOpacity={0.2}/>
                  <stop offset="95%" stopColor="var(--orange)" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false}/>
              <XAxis dataKey="name" tick={{fontSize:11,fill:"var(--text2)",fontFamily:"Poppins",fontWeight:600}} axisLine={false} tickLine={false}/>
              <YAxis tick={{fontSize:10,fill:"var(--text3)"}} axisLine={false} tickLine={false} width={38} tickFormatter={v=>v>=1000?`${Math.round(v/1000)}k`:v}/>
              <Tooltip formatter={v=>fmt(v)} contentStyle={{borderRadius:12,border:"1px solid var(--border)",fontFamily:"Poppins",fontSize:12}}/>
              <Area type="monotone" dataKey="Ventes" stroke="var(--orange)" strokeWidth={2.5} fill="url(#gO)" dot={{fill:"var(--orange)",r:4,strokeWidth:0}}/>
            </AreaChart>
          </ResponsiveContainer>
        ) : <div className="empty">Pas encore de données</div>}
      </div>
    </div>
  );
}

/* ═══════════ PARAMS PAGE ═══════════════════════════════════════════════════════ */
function ParamsPage({ userName, setUserName, objectif, setObjectif, onLogout }) {
  const [name,setName]=useState(userName); const [obj,setObj]=useState(objectif); const [saved,setSaved]=useState(false);
  const handleSave=()=>{ setUserName(name); setObjectif(parseInt(obj)||50); setSaved(true); setTimeout(()=>setSaved(false),2000); };
  return (
    <div className="fade-up">
      <div className="inner-header"><div className="inner-title">Paramètres</div></div>
      <div style={{padding:"20px 0"}}>
        {saved&&<div style={{margin:"0 24px 16px"}}><div className="toast-success"><CheckCircle size={18}/> Paramètres sauvegardés !</div></div>}
        <div style={{marginBottom:20}}>
          <div className="params-section-title" style={{marginBottom:10}}>Profil</div>
          <div className="param-row"><div><div className="param-label">Nom d'utilisateur</div><div className="param-sub">Affiché sur l'accueil</div></div><input className="param-val-input" value={name} onChange={e=>setName(e.target.value)}/></div>
        </div>
        <div style={{marginBottom:20}}>
          <div className="params-section-title" style={{marginBottom:10}}>Objectifs</div>
          <div className="param-row"><div><div className="param-label">Objectif quotidien</div><div className="param-sub">Unités à vendre par jour</div></div><input className="param-val-input" type="number" value={obj} onChange={e=>setObj(e.target.value)}/></div>
        </div>
        <div style={{padding:"0 24px",marginBottom:12}}>
          <button className="submit-btn" onClick={handleSave}><Save size={16} style={{display:"inline",verticalAlign:"middle",marginRight:6}}/> Sauvegarder</button>
        </div>
        <button className="logout-btn" onClick={onLogout}><LogOut size={18}/> Se déconnecter</button>
      </div>
    </div>
  );
}


const root = document.getElementById('root');
const loading = document.getElementById('loading');
root.style.display = 'block';
loading.style.display = 'none';
createRoot(root).render(React.createElement(React.StrictMode, null, React.createElement(App)));
