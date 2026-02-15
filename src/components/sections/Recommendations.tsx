
import React from 'react';
import { Recommendation } from '../../types';
import { Card, CardHeader, CardContent } from '../ui/Card';

interface RecommendationsProps {
  recommendations: Recommendation[];
}

export const Recommendations: React.FC<RecommendationsProps> = ({ recommendations }) => {
  return (
    <Card className="mb-6">
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900">Recommendations</h2>
      </CardHeader>
      <CardContent className="space-y-6">
        {recommendations.map((rec) => (
          <div key={rec.id} className="bg-gray-50/50 p-4 rounded-2xl border border-gray-50">
            <p className="text-gray-600 italic mb-4 text-sm">"{rec.content}"</p>
            <div className="flex items-center gap-3">
              {rec.avatar && (
                <img src={rec.avatar} alt={rec.name} className="w-10 h-10 rounded-full object-cover" />
              )}
              <div>
                <h4 className="text-sm font-bold text-gray-900">{rec.name}</h4>
                <p className="text-xs text-gray-500">{rec.role}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
