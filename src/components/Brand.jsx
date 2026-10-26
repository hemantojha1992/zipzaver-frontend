import React from 'react';
import { CarFront } from 'lucide-react';

export default function Brand({ light = false, compact = false }) {
  return <div className={`brand ${light ? 'brand-light' : ''} ${compact ? 'brand-compact' : ''}`}>
    <div className="brand-icon"><CarFront size={23} strokeWidth={2.5}/></div>
    <div><div className="brand-name">zipzaver<span>.</span></div>{!compact && <div className="brand-tagline">EVERY RIDE, MADE SIMPLE</div>}</div>
  </div>;
}