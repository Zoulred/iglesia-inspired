
import React from 'react';
import type { Recommendation } from '../../types';
import { profileData } from '../../data/portfolio';
import { Card, CardHeader, CardContent } from '../ui/Card';

interface RecommendationsProps {
  recommendations: Recommendation[];
}

export const Recommendations: React.FC<RecommendationsProps> = ({ recommendations }) => {
  return (
    <Card className="mb-6 [.cyberhacker_&]:border-cyan-500/50 [.cyberhacker_&]:bg-gradient-to-br [.cyberhacker_&]:from-gray-900/80 [.cyberhacker_&]:to-black/60 [.cyberhacker_&]:shadow-[0_0_25px_rgba(0,191,255,0.3)]">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900 dark:text-white [.cyberhacker_&]:text-transparent [.cyberhacker_&]:bg-clip-text [.cyberhacker_&]:bg-gradient-to-r [.cyberhacker_&]:from-cyan-300 [.cyberhacker_&]:to-blue-400 [.cyberhacker_&]:drop-shadow-[0_0_10px_rgba(0,191,255,1)]">Recommendations</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        {recommendations.map((rec) => (
          <div key={rec.id} className="bg-gray-50/50 dark:bg-gray-800/30 [.cyberhacker_&]:bg-gradient-to-br [.cyberhacker_&]:from-gray-900/40 [.cyberhacker_&]:to-black/30 p-4 rounded-2xl border border-gray-50 dark:border-gray-800 [.cyberhacker_&]:border-cyan-500/40 [.cyberhacker_&]:hover:border-cyan-400 [.cyberhacker_&]:shadow-[0_0_15px_rgba(0,191,255,0.2)] transition-all">
            <p className="text-gray-600 dark:text-gray-300 [.cyberhacker_&]:text-cyan-100 italic mb-4 text-sm">"{rec.content}"</p>
            <div className="flex items-center gap-3">
              {rec.avatar && (
                <img src={rec.avatar} alt={rec.name} className="w-10 h-10 rounded-full object-cover [.cyberhacker_&]:ring-2 [.cyberhacker_&]:ring-cyan-500/60 [.cyberhacker_&]:shadow-[0_0_10px_rgba(0,191,255,0.4)]" />
              )}
              <div>
                <h4 className="text-sm font-bold text-gray-900 dark:text-white [.cyberhacker_&]:text-cyan-200">{rec.name}</h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 [.cyberhacker_&]:text-red-400">{rec.role}</p>
              </div>
            </div>
          </div>
        ))}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 [.cyberhacker_&]:border-cyan-500/30">
          <div className="space-y-3">
            {profileData.socials.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 p-3 bg-stone-50 dark:bg-gray-800 [.cyberhacker_&]:bg-gradient-to-r [.cyberhacker_&]:from-gray-900/50 [.cyberhacker_&]:to-black/30 border border-gray-100 dark:border-gray-700 [.cyberhacker_&]:border-cyan-500/40 rounded-md hover:shadow-sm dark:hover:shadow-gray-900/50 [.cyberhacker_&]:hover:border-cyan-400 [.cyberhacker_&]:hover:shadow-[0_0_15px_rgba(0,191,255,0.3)] transition"
              >
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 flex items-center justify-center rounded-md bg-gray-50 dark:bg-gray-700 [.cyberhacker_&]:bg-gray-900 border border-gray-100 dark:border-gray-600 [.cyberhacker_&]:border-cyan-500/50 text-gray-700 dark:text-gray-200 [.cyberhacker_&]:text-cyan-300 [.cyberhacker_&]:shadow-[0_0_8px_rgba(0,191,255,0.3)]">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      {social.icon === 'github' && <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />}
                      {social.icon === 'facebook' && <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />}
                      {social.icon === 'instagram' && <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.766 9.726c.003.159.005.32.005.484 0 4.789-3.644 10.312-10.312 10.312-2.048 0-3.953-.597-5.57-1.629.284.034.574.052.867.052 1.701 0 3.266-.581 4.507-1.555-1.59-.029-2.93-1.08-3.39-2.523.223.035.452.053.686.053.331 0 .651-.043.958-.12-1.663-.334-2.914-1.8-2.914-3.562v-.044c.49.275 1.051.44 1.651.459-.975-.652-1.617-1.766-1.617-3.03 0-.667.179-1.291.492-1.828 1.792 2.2 4.473 3.648 7.49 3.798-.062-.267-.094-.544-.094-.829 0-2.007 1.628-3.635 3.636-3.635 1.047 0 1.991.442 2.654 1.15.827-.162 1.605-.464 2.308-1.002-.271.847-.846 1.557-1.596 2.008.735-.086 1.433-.283 2.082-.573-.486.723-1.1 1.357-1.81 1.867z" />}
                      {social.icon === 'linkedin' && <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.469v6.766z" />}
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-gray-900 dark:text-white [.cyberhacker_&]:text-cyan-200">{social.platform}</span>
                </div>
                <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 [.cyberhacker_&]:text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
