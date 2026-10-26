import React, { useState } from 'react';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { LayoutDashboard, CarFront, Users, UserRound, Wallet, ChartNoAxesCombined, Bell, Settings, LogOut, Menu, X, ExternalLink, Bike, Ticket, Star, MessageSquare, ShieldCheck, Car, CircleHelp } from 'lucide-react';
import Brand from './Brand';

const links = [
  {to:'/admin/dashboard', label:'Overview', icon:LayoutDashboard},
  {to:'/admin/rides', label:'Rides', icon:CarFront},
  {to:'/admin/riders', label:'Riders', icon:Users},
  {to:'/admin/drivers', label:'Drivers', icon:UserRound},
  {to:'/admin/payments', label:'Payments', icon:Wallet},
  {to:'/admin/vehicles', label:'Vehicles', icon:Car},
  {to:'/admin/coupons', label:'Coupons & promos', icon:Ticket},
  {to:'/admin/reviews', label:'Ratings & reviews', icon:Star},
  {to:'/admin/complaints', label:'Complaints', icon:MessageSquare},
  {to:'/admin/support', label:'Support tickets', icon:CircleHelp},
  {to:'/admin/admins', label:'Admin users', icon:ShieldCheck},
  {to:'/admin/reports', label:'Reports', icon:ChartNoAxesCombined},
  {to:'/admin/notifications', label:'Notifications', icon:Bell},
  {to:'/admin/settings', label:'Settings', icon:Settings},
];

export default function AdminLayout({ onLogout }) {
  const [open,setOpen] = useState(false);
  const navigate = useNavigate();
  function logout(){ onLogout(); navigate('/admin',{replace:true}); }
  return <div className="admin-shell">
    {open && <button className="admin-scrim" aria-label="Close menu" onClick={()=>setOpen(false)}/>}
    <aside className={`admin-sidebar ${open?'open':''}`}>
      <div className="admin-brand-row"><Brand light/><button className="mobile-close" onClick={()=>setOpen(false)} aria-label="Close menu"><X/></button></div>
      <div className="sidebar-label">ADMIN WORKSPACE</div>
      <nav className="admin-nav">{links.map(({to,label,icon:Icon})=><NavLink key={to} to={to} onClick={()=>setOpen(false)} className={({isActive})=>`admin-nav-link ${isActive?'selected':''}`}><Icon size={18}/><span>{label}</span></NavLink>)}</nav>
      <div className="sidebar-bottom">
        <div className="sidebar-tip"><div className="tip-symbol">✦</div><strong>Keep every ride moving</strong><p>Manage your ride booking operations from one place.</p></div>
        <button className="logout-btn" onClick={logout}><LogOut size={17}/> Sign out</button>
      </div>
    </aside>
    <main className="admin-main">
      <header className="admin-topbar"><button className="mobile-menu" onClick={()=>setOpen(true)} aria-label="Open menu"><Menu/></button><div className="topbar-title">Zipzaver <span>/</span> Admin panel</div><div className="topbar-right"><a href="/" className="view-site" target="_blank" rel="noreferrer"><ExternalLink size={15}/> View website</a><div className="admin-avatar">ZA</div><div className="admin-user"><strong>Administrator</strong><span>Admin account</span></div></div></header>
      <div className="admin-content"><Outlet/></div>
    </main>
  </div>;
}