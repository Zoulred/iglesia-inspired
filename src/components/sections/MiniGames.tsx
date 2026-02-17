import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Bomberman } from '../games/Bomberman';

type GameType = 'bomberman' | null;

export const MiniGames: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<GameType>(null);
  const [playerName, setPlayerName] = useState('');
  const [isNameSet, setIsNameSet] = useState(false);

  const games = [
    {
      id: 'bomberman',
      title: 'Bomberman',
      description: 'Classic grid-based bomb placement game. Destroy walls, avoid explosions, and clear the arena!',
      icon: '💣'
    }
  ];

  const handleNameSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (playerName.trim()) {
      setIsNameSet(true);
    }
  };

  return (
    <Card className="mb-6 [.cyber_&]:border-cyan-500/30 [.cyber_&]:bg-black/40 [.cyber_&]:shadow-[0_0_20px_rgba(6,182,212,0.1)]">
      <CardHeader>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white [.cyber_&]:text-cyan-400 [.cyber_&]:drop-shadow-[0_0_5px_rgba(6,182,212,0.8)]">Mini Games 🎮</h2>
      </CardHeader>
      <CardContent>
        {!selectedGame ? (
          <div className="space-y-4">
            <p className="text-gray-600 dark:text-gray-300 [.cyber_&]:text-gray-300 text-sm mb-6">
              Take a break and play some interactive games directly on the site. All games support dark/light theme.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {games.map((game) => (
                <button
                  key={game.id}
                  onClick={() => setSelectedGame(game.id as GameType)}
                  className="p-6 rounded-xl border-2 border-gray-200 dark:border-gray-700 [.cyber_&]:border-cyan-500/30 bg-stone-50 dark:bg-gray-800 [.cyber_&]:bg-gray-900/50 hover:border-blue-500 dark:hover:border-blue-400 [.cyber_&]:hover:border-cyan-400 hover:shadow-md dark:hover:shadow-blue-900/20 [.cyber_&]:hover:shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all text-left group"
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{game.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white [.cyber_&]:text-cyan-100 mb-2">{game.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 [.cyber_&]:text-gray-400">{game.description}</p>
                  <div className="mt-4 text-xs font-semibold text-blue-600 dark:text-blue-400 [.cyber_&]:text-cyan-400">Play Now →</div>
                </button>
              ))}
            </div>
          </div>
        ) : !isNameSet ? (
          <div className="max-w-md mx-auto text-center space-y-6 py-8">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white [.cyber_&]:text-cyan-100">Enter Your Name</h3>
            <p className="text-gray-600 dark:text-gray-400 [.cyber_&]:text-gray-400">Please enter your name to start the game.</p>
            <form onSubmit={handleNameSubmit} className="space-y-4">
              <input
                type="text"
                value={playerName}
                onChange={(e) => setPlayerName(e.target.value)}
                placeholder="Player Name"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                required
                maxLength={15}
              />
              <div className="flex gap-3 justify-center">
                <button
                  type="button"
                  onClick={() => setSelectedGame(null)}
                  className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors [.cyber_&]:bg-cyan-600 [.cyber_&]:hover:bg-cyan-500"
                >
                  Start Game
                </button>
              </div>
            </form>
          </div>
        ) : (
          <div className="space-y-4">
            <button
              onClick={() => {
                setSelectedGame(null);
                setIsNameSet(false);
                setPlayerName('');
              }}
              className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 [.cyber_&]:bg-gray-800 text-gray-900 dark:text-white [.cyber_&]:text-cyan-100 hover:bg-gray-300 dark:hover:bg-gray-600 [.cyber_&]:hover:bg-gray-700 transition-colors text-sm font-medium"
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
