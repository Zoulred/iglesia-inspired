
import React from 'react';
import type { Certification } from '../../types';
import { Card, CardHeader, CardContent } from '../ui/Card';

interface CertificationsProps {
  certifications: Certification[];
}

export const Certifications: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <Card className="mb-6 [.cyber_&]:border-cyan-500/30 [.cyber_&]:bg-black/40 [.cyber_&]:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white [.cyber_&]:text-cyan-400 [.cyber_&]:drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">Certifications</h2>
      </CardHeader>
      <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certifications.map((cert) => (
          <div key={cert.id} className="flex items-center gap-4 p-3 rounded-xl border border-gray-50 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-800/30 [.cyber_&]:border-cyan-500/20 [.cyber_&]:bg-cyan-900/10 hover:[.cyber_&]:border-cyan-400/50 hover:[.cyber_&]:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all">
            <div className="w-10 h-10 shrink-0 rounded-lg bg-white dark:bg-gray-700 flex items-center justify-center shadow-sm dark:shadow-gray-900 [.cyber_&]:bg-gray-900 [.cyber_&]:shadow-[0_0_10px_rgba(6,182,212,0.2)]">
              <svg className="w-6 h-6 text-blue-600 dark:text-blue-400 [.cyber_&]:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-gray-900 dark:text-white [.cyber_&]:text-cyan-100 truncate" title={cert.title}>{cert.title}</h3>
              <p className="text-xs text-gray-500 dark:text-gray-400 [.cyber_&]:text-cyan-300/70">{cert.issuer} • {cert.date}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
