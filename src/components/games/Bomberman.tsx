import React, { useState, useEffect, useRef } from 'react';

// Game Constants
const GRID_W = 15;
const GRID_H = 13;

type Position = { x: number; y: number };
type Entity = Position & { id: number };
type Bomb = Entity & { timer: number; range: number };
type Explosion = Entity & { timer: number };
type Enemy = Entity & { dir: Position };

// --- Assets (SVGs) ---

const PlayerAvatar = ({ dir, moving }: { dir: Position, moving: boolean }) => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
    <g className={`transition-transform duration-150 ${moving ? 'scale-105' : 'scale-100'}`}>
      {/* Body */}
      <circle cx="50" cy="55" r="35" className="fill-blue-600 dark:fill-blue-500 [.cyber_&]:fill-cyan-500" />
      <circle cx="50" cy="45" r="35" className="fill-blue-400 dark:fill-blue-400 [.cyber_&]:fill-cyan-400" />
      
      {/* Face/Visor Area */}
      <path d="M 25 40 Q 50 20 75 40 Q 75 65 50 65 Q 25 65 25 40" className="fill-black/20" />
      
      {/* Eyes - Directional */}
      <g transform={`translate(${dir.x * 6}, ${dir.y * 2})`}>
        <ellipse cx="38" cy="42" rx="6" ry="9" className="fill-white" />
        <ellipse cx="62" cy="42" rx="6" ry="9" className="fill-white" />
        <circle cx="38" cy="42" r="3" className="fill-black" />
        <circle cx="62" cy="42" r="3" className="fill-black" />
      </g>

      {/* Helmet Details */}
      <path d="M 50 15 L 50 5" stroke="white" strokeWidth="4" strokeLinecap="round" />
      <circle cx="50" cy="5" r="4" className="fill-red-500 [.cyber_&]:fill-fuchsia-500" />
    </g>
  </svg>
);

const EnemySVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm animate-bounce">
    <circle cx="50" cy="55" r="30" className="fill-red-700/50 [.cyber_&]:fill-fuchsia-700/50" />
    <circle cx="50" cy="50" r="35" className="fill-red-500 [.cyber_&]:fill-fuchsia-500" />
    {/* Angry Eyes */}
    <path d="M 30 45 L 45 55" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <path d="M 70 45 L 55 55" stroke="white" strokeWidth="4" strokeLinecap="round" />
    <circle cx="40" cy="55" r="3" className="fill-white" />
    <circle cx="60" cy="55" r="3" className="fill-white" />
    {/* Mouth */}
    <path d="M 40 70 Q 50 60 60 70" stroke="white" strokeWidth="3" fill="none" />
  </svg>
);

const BombSVG = () => (
  <svg viewBox="0 0 100 100" className="w-full h-full animate-pulse">
    <circle cx="50" cy="55" r="35" className="fill-gray-900" />
    <circle cx="40" cy="45" r="10" className="fill-gray-700" />
    {/* Fuse */}
    <path d="M 50 20 L 50 10" stroke="orange" strokeWidth="4" className="animate-ping" />
    <path d="M 50 20 Q 60 10 70 20" stroke="white" strokeWidth="3" fill="none" />
  </svg>
);

const WallBlock = () => (
  <div className="w-full h-full bg-gray-700 [.cyber_&]:bg-cyan-900/50 rounded-sm border-t-4 border-l-4 border-gray-600 [.cyber_&]:border-cyan-700 border-b-4 border-r-4 border-gray-800 [.cyber_&]:border-cyan-900 shadow-inner" />
);

const SoftBlock = () => (
  <div className="w-full h-full bg-amber-700 [.cyber_&]:bg-fuchsia-900/50 rounded-sm border-4 border-amber-800 [.cyber_&]:border-fuchsia-800 relative shadow-sm">
    <div className="absolute inset-1 border-2 border-amber-900/20 [.cyber_&]:border-fuchsia-900/20" />
    <div className="absolute top-1 left-1 w-1 h-1 bg-amber-500/50 [.cyber_&]:bg-fuchsia-500/50 rounded-full" />
  </div>
);

// --- Main Component ---

export const Bomberman: React.FC = () => {
  // Game State
  const [grid, setGrid] = useState<number[][]>([]);
  const [player, setPlayer] = useState<Position & { dir: Position, moving: boolean }>({ x: 1, y: 1, dir: { x: 0, y: 1 }, moving: false });
  const [bombs, setBombs] = useState<Bomb[]>([]);
  const [explosions, setExplosions] = useState<Explosion[]>([]);
  const [enemies, setEnemies] = useState<Enemy[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [win, setWin] = useState(false);
  
  // Refs for game loop
  const stateRef = useRef({ grid, player, bombs, explosions, enemies, gameOver, win });
  useEffect(() => {
    stateRef.current = { grid, player, bombs, explosions, enemies, gameOver, win };
  }, [grid, player, bombs, explosions, enemies, gameOver, win]);

  // Initialize Game
  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    // 0: Empty, 1: Wall, 2: Soft Block
    const newGrid = Array(GRID_H).fill(0).map((_, y) => 
      Array(GRID_W).fill(0).map((_, x) => {
        if (x === 0 || x === GRID_W - 1 || y === 0 || y === GRID_H - 1 || (x % 2 === 0 && y % 2 === 0)) return 1;
        if ((x > 2 || y > 2) && Math.random() < 0.3) return 2;
        return 0;
      })
    );
    
    setGrid(newGrid);
    setPlayer({ x: 1, y: 1, dir: { x: 0, y: 1 }, moving: false });
    setBombs([]);
    setExplosions([]);
    setEnemies([
      { id: 1, x: GRID_W - 2, y: GRID_H - 2, dir: { x: 0, y: -1 } },
      { id: 2, x: GRID_W - 2, y: 1, dir: { x: -1, y: 0 } },
      { id: 3, x: 1, y: GRID_H - 2, dir: { x: 1, y: 0 } }
    ]);
    setScore(0);
    setGameOver(false);
    setWin(false);
  };

  // Game Loop
  useEffect(() => {
    const loop = setInterval(() => {
      if (stateRef.current.gameOver || stateRef.current.win) return;
      updateGame();
    }, 200);
    return () => clearInterval(loop);
  }, []);

  const updateGame = () => {
    const { grid, player, bombs, explosions, enemies } = stateRef.current;
    
    // Update Bombs & Explosions
    const newBombs = bombs.map(b => ({ ...b, timer: b.timer - 1 })).filter(b => b.timer > 0);
    const explodingBombs = bombs.filter(b => b.timer === 1);
    let newExplosions = [...explosions.map(e => ({ ...e, timer: e.timer - 1 })).filter(e => e.timer > 0)];
    
    explodingBombs.forEach(bomb => {
      newExplosions.push({ x: bomb.x, y: bomb.y, id: Date.now() + Math.random(), timer: 3 });
      [{x:0, y:1}, {x:0, y:-1}, {x:1, y:0}, {x:-1, y:0}].forEach(dir => {
        for(let i = 1; i <= bomb.range; i++) {
          const tx = bomb.x + dir.x * i;
          const ty = bomb.y + dir.y * i;
          if (grid[ty][tx] === 1) break;
          newExplosions.push({ x: tx, y: ty, id: Date.now() + Math.random(), timer: 3 });
          if (grid[ty][tx] === 2) break;
        }
      });
    });

    // Update Grid
    const newGrid = [...grid.map(row => [...row])];
    newExplosions.forEach(exp => {
      if (newGrid[exp.y][exp.x] === 2) {
        newGrid[exp.y][exp.x] = 0;
        setScore(s => s + 10);
      }
    });

    // Move Enemies
    const newEnemies = enemies.map(enemy => {
      let nextX = enemy.x + enemy.dir.x;
      let nextY = enemy.y + enemy.dir.y;
      if (newGrid[nextY][nextX] !== 0 || bombs.some(b => b.x === nextX && b.y === nextY)) {
        const dirs = [{x:0, y:1}, {x:0, y:-1}, {x:1, y:0}, {x:-1, y:0}];
        const validDirs = dirs.filter(d => newGrid[enemy.y + d.y][enemy.x + d.x] === 0);
        if (validDirs.length > 0) return { ...enemy, dir: validDirs[Math.floor(Math.random() * validDirs.length)] };
        return enemy;
      }
      return { ...enemy, x: nextX, y: nextY };
    }).filter(e => !newExplosions.some(exp => exp.x === e.x && exp.y === e.y));

    if (newEnemies.length < enemies.length) setScore(s => s + 100);
    if (newEnemies.length === 0 && enemies.length > 0) setWin(true);

    if (newExplosions.some(exp => exp.x === player.x && exp.y === player.y) || 
        newEnemies.some(e => e.x === player.x && e.y === player.y)) {
      setGameOver(true);
    }

    setGrid(newGrid);
    setBombs(newBombs);
    setExplosions(newExplosions);
    setEnemies(newEnemies);
  };

  const movePlayer = (dx: number, dy: number) => {
    if (gameOver || win) return;
    const { grid, player, bombs } = stateRef.current;
    const nextX = player.x + dx;
    const nextY = player.y + dy;

    if (grid[nextY][nextX] === 0 && !bombs.some(b => b.x === nextX && b.y === nextY)) {
      setPlayer({ x: nextX, y: nextY, dir: { x: dx, y: dy }, moving: true });
      setTimeout(() => setPlayer(p => ({ ...p, moving: false })), 150);
    } else {
       setPlayer(p => ({ ...p, dir: { x: dx, y: dy } }));
    }
  };

  const placeBomb = () => {
    if (gameOver || win) return;
    const { player, bombs } = stateRef.current;
    if (bombs.some(b => b.x === player.x && b.y === player.y)) return;
    setBombs([...bombs, { x: player.x, y: player.y, id: Date.now(), timer: 15, range: 2 }]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', ' '].includes(e.key)) e.preventDefault();
      switch(e.key) {
        case 'ArrowUp': movePlayer(0, -1); break;
        case 'ArrowDown': movePlayer(0, 1); break;
        case 'ArrowLeft': movePlayer(-1, 0); break;
        case 'ArrowRight': movePlayer(1, 0); break;
        case ' ': placeBomb(); break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="flex flex-col items-center w-full select-none">
      <div className="flex justify-between w-full mb-4 px-4">
        <div className="text-lg font-bold text-gray-700 dark:text-gray-200 [.cyber_&]:text-cyan-100">Score: {score}</div>
        <div className="text-lg font-bold">{gameOver ? <span className="text-red-500 [.cyber_&]:text-red-400">GAME OVER</span> : win ? <span className="text-green-500 [.cyber_&]:text-green-400">VICTORY!</span> : <span className="text-blue-500 [.cyber_&]:text-cyan-400">PLAYING</span>}</div>
        <button onClick={resetGame} className="px-3 py-1 bg-blue-500 [.cyber_&]:bg-cyan-600 text-white rounded hover:bg-blue-600 [.cyber_&]:hover:bg-cyan-500 text-sm shadow-sm">Reset</button>
      </div>

      <div className="relative bg-stone-200 dark:bg-stone-800 [.cyber_&]:bg-gray-900 rounded-lg overflow-hidden shadow-2xl border-4 border-stone-300 dark:border-stone-700 [.cyber_&]:border-cyan-500/50 [.cyber_&]:shadow-[0_0_30px_rgba(6,182,212,0.2)]"
           style={{ display: 'grid', gridTemplateColumns: `repeat(${GRID_W}, 1fr)`, width: '100%', maxWidth: '600px', aspectRatio: `${GRID_W}/${GRID_H}` }}>
        {grid.map((row, y) => row.map((cell, x) => (
          <div key={`${x}-${y}`} className="relative w-full h-full border-[0.5px] border-black/5 dark:border-white/5">
            {cell === 1 && <WallBlock />}
            {cell === 2 && <SoftBlock />}
          </div>
        )))}
        {bombs.map(b => <div key={b.id} className="absolute transition-all duration-200" style={{ left: `${(b.x/GRID_W)*100}%`, top: `${(b.y/GRID_H)*100}%`, width: `${100/GRID_W}%`, height: `${100/GRID_H}%` }}><div className="p-1 w-full h-full"><BombSVG /></div></div>)}
        {explosions.map(e => <div key={e.id} className="absolute bg-orange-500/80 animate-pulse" style={{ left: `${(e.x/GRID_W)*100}%`, top: `${(e.y/GRID_H)*100}%`, width: `${100/GRID_W}%`, height: `${100/GRID_H}%` }} />)}
        {enemies.map(e => <div key={e.id} className="absolute transition-all duration-200 ease-linear" style={{ left: `${(e.x/GRID_W)*100}%`, top: `${(e.y/GRID_H)*100}%`, width: `${100/GRID_W}%`, height: `${100/GRID_H}%` }}><div className="p-1 w-full h-full"><EnemySVG /></div></div>)}
        {!gameOver && <div className="absolute transition-all duration-150 ease-out z-10" style={{ left: `${(player.x/GRID_W)*100}%`, top: `${(player.y/GRID_H)*100}%`, width: `${100/GRID_W}%`, height: `${100/GRID_H}%` }}><div className="p-0.5 w-full h-full"><PlayerAvatar dir={player.dir} moving={player.moving} /></div></div>}
      </div>

      <div className="mt-6 w-full max-w-[280px] grid grid-cols-3 gap-3 md:hidden">
        <div />
        <ControlButton onClick={() => movePlayer(0, -1)} icon="↑" />
        <div />
        <ControlButton onClick={() => movePlayer(-1, 0)} icon="←" />
        <ControlButton onClick={placeBomb} icon="💣" color="red" />
        <ControlButton onClick={() => movePlayer(1, 0)} icon="→" />
        <div />
        <ControlButton onClick={() => movePlayer(0, 1)} icon="↓" />
        <div />
      </div>
      
      <div className="hidden md:block mt-4 text-sm text-gray-500 dark:text-gray-400 [.cyber_&]:text-gray-400">Use Arrow Keys to move, Space to place bomb</div>
    </div>
  );
};

const ControlButton = ({ onClick, icon, color = 'blue' }: { onClick: () => void, icon: string, color?: 'blue' | 'red' }) => (
  <button 
    className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg active:scale-95 transition-all ${color === 'blue' ? 'bg-white dark:bg-gray-700 [.cyber_&]:bg-gray-800 text-blue-600 dark:text-blue-400 [.cyber_&]:text-cyan-400 [.cyber_&]:border [.cyber_&]:border-cyan-500/30' : 'bg-red-50 dark:bg-red-900/30 [.cyber_&]:bg-red-900/20 text-red-600 dark:text-red-400 [.cyber_&]:text-red-400 border-2 border-red-100 dark:border-red-800 [.cyber_&]:border-red-500/30'}`}
    onClick={(e) => { e.preventDefault(); onClick(); }}
    onTouchStart={(e) => { e.preventDefault(); onClick(); }}
  >
    {icon}
  </button>
);