import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, LockKeyhole, Mail, ShieldCheck } from 'lucide-react';
import Brand from '../components/Brand';
import { api, getErrorMessage, unwrapData } from '../services/api';

export default function AdminLogin({ onLogin }) {
  const [email,setEmail]=useState(''),[password,setPassword]=useState(''),[loading,setLoading]=useState(false),[error,setError]=useState('');
  const navigate=useNavigate();
  async function submit(e){
    e.preventDefault();setLoading(true);setError('');
    try{
      if(import.meta.env.VITE_DEMO_ADMIN_LOGIN === 'true') {
        const demoEmail=import.meta.env.VITE_DEMO_ADMIN_EMAIL || 'admin@zipzaver.demo';
        const demoPassword=import.meta.env.VITE_DEMO_ADMIN_PASSWORD || 'ZipzaverDemo@2026';
        if(email.trim().toLowerCase() !== demoEmail.toLowerCase() || password !== demoPassword) throw new Error('Demo login details match nahi hue. .env.example mein diye credentials use karein.');
        localStorage.setItem('zipzaver_admin_token','local-demo-session-not-secure');
        onLogin(); navigate('/admin/dashboard',{replace:true}); return;
      }
      const response=await api.post(import.meta.env.VITE_ADMIN_LOGIN_PATH||'/admin/login',{email,password});
      const payload=unwrapData(response)||{};
      const token=payload.token||payload.accessToken||payload.access_token||response.data?.token;
      if(!token) throw new Error('Login response mein token nahi mila. Apne backend ke response format ke hisaab se AdminLogin.jsx update karein.');
      localStorage.setItem('zipzaver_admin_token',token);
      onLogin();
      navigate('/admin/dashboard',{replace:true});
    }catch(e){setError(getErrorMessage(e));}
    finally{setLoading(false);}
  }
  return <div className="login-page"><div className="login-decoration login-decoration-one"/><div className="login-decoration login-decoration-two"/><div className="login-card">
    <Link to="/" className="back-website"><ArrowLeft size={15}/> Back to website</Link>
    <Brand/>
    <div className="login-icon"><LockKeyhole size={23}/></div>
    <div className="login-heading"><div className="section-kicker">SECURE ADMIN ACCESS</div><h1>Welcome back.</h1><p>Sign in to manage your Zipzaver operations.</p></div>
    <form className="login-form" onSubmit={submit}>
      <label>Email address<div className="login-input"><Mail size={17}/><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="admin@yourcompany.com" autoComplete="username" required/></div></label>
      <label>Password<div className="login-input"><LockKeyhole size={17}/><input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Enter your password" autoComplete="current-password" required/></div></label>
      {error&&<div className="login-error">{error}</div>}
      <button className="login-submit" disabled={loading}>{loading?'Signing in…':'Sign in to admin'} <ArrowRight size={17}/></button>
    </form>
    <div className="login-secure-note"><ShieldCheck size={15}/><span>Authorized administrators only</span></div>
    <p className="login-help">{import.meta.env.VITE_DEMO_ADMIN_LOGIN === 'true' ? 'Local demo mode is enabled. Do not use demo login on a public production site.' : 'Login credentials are verified by your backend API.'}</p>
  </div></div>;
}