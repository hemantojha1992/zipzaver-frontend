import React,{useState} from 'react';
import {Navigate,Route,Routes,useLocation} from 'react-router-dom';
import PublicHome from './pages/PublicHome';
import AdminLogin from './pages/AdminLogin';
import AdminLayout from './components/AdminLayout';
import AdminDashboard from './pages/AdminDashboard';
import AdminSimplePage from './pages/AdminSimplePage';
import Reports from './pages/Reports';
import Notifications from './pages/Notifications';
import Settings from './pages/Settings';

function ProtectedAdmin({authenticated,children}){const location=useLocation();return authenticated?children:<Navigate to="/admin" replace state={{from:location.pathname}}/>}
export default function App(){
  const [authenticated,setAuthenticated]=useState(Boolean(localStorage.getItem('zipzaver_admin_token')));
  function logout(){localStorage.removeItem('zipzaver_admin_token');setAuthenticated(false)}
  return <Routes>
    <Route path="/" element={<PublicHome/>}/>
    <Route path="/admin" element={authenticated?<Navigate to="/admin/dashboard" replace/>:<AdminLogin onLogin={()=>setAuthenticated(true)}/>}/>
    <Route path="/admin/*" element={<ProtectedAdmin authenticated={authenticated}><AdminLayout onLogout={logout}/></ProtectedAdmin>}>
      <Route path="dashboard" element={<AdminDashboard/>}/>
      <Route path="rides" element={<AdminSimplePage type="rides"/>}/>
      <Route path="riders" element={<AdminSimplePage type="riders"/>}/>
      <Route path="drivers" element={<AdminSimplePage type="drivers"/>}/>
      <Route path="payments" element={<AdminSimplePage type="payments"/>}/>
      <Route path="vehicles" element={<AdminSimplePage type="vehicles"/>}/>
      <Route path="complaints" element={<AdminSimplePage type="complaints"/>}/>
      <Route path="coupons" element={<AdminSimplePage type="coupons"/>}/>
      <Route path="reviews" element={<AdminSimplePage type="reviews"/>}/>
      <Route path="support" element={<AdminSimplePage type="support"/>}/>
      <Route path="admins" element={<AdminSimplePage type="admins"/>}/>
      <Route path="reports" element={<Reports/>}/>
      <Route path="notifications" element={<Notifications/>}/>
      <Route path="settings" element={<Settings/>}/>
    </Route>
    <Route path="*" element={<Navigate to="/" replace/>}/>
  </Routes>;
}