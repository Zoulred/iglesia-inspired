import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Bomberman } from '../games/Bomberman';

type GameType = 'bomberman' | null;

export const MiniGames: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameType>(null);

  const games = [
    {
      id: 'bomberman',
      title: 'Bomberman',
      description: 'Classic grid-based bomb placement game. Destroy walls, avoid explosions, and clear the arena!',
      icon: '💣'
    }
  ];

  return (
    <Card className="mb-6">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Mini Games 🎮</h2>
      </CardHeader>
      <CardContent>
        {!selectedGame ? (
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-6">
              Take a break and play some interactive games directly on the site. All games support dark/light theme.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {games.map((game) => (
                <button
                  key={game.id}
                  onClick={() => setSelectedGame(game.id as GameType)}
                  className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-stone-50 dark:bg-gray-800 hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-md dark:hover:shadow-blue-900/20 transition-all text-left group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{game.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">{game.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{game.description}</p>
                  <div className="mt-4 text-xs font-semibold text-blue-600 dark:text-blue-400">Play Now →</div>
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <button
              onClick={() => setSelectedGame(null)}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-sm font-medium"
            >
              ← Back to Games
            </button>
            {selectedGame === 'bomberman' && <Bomberman />}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
