import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'emerald' | 'amber' | 'blue' | 'purple';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'emerald' }) => {
  const styles = {
    emerald: 'text-emerald-400 bg-emerald-400/10',
    amber: 'text-amber-400 bg-amber-400/10',
    blue: 'text-blue-400 bg-blue-400/10',
    purple: 'text-purple-400 bg-purple-400/10',
  };

  return (
    <span className={`text-[10px] font-bold px-2 py-1 rounded uppercase tracking-tighter ${styles[variant]}`}>
      {children}
    </span>
  );
};