import React, { useEffect, useRef, useState } from 'react';

const GRID_SIZE = 10;
const TILE_SIZE = 40;
const GAME_WIDTH = GRID_SIZE * TILE_SIZE;
const GAME_HEIGHT = GRID_SIZE * TILE_SIZE;

interface Position {
  x: number;
  y: number;
}

interface Bomb {
  x: number;
  y: number;
  timer: number;
}

interface Explosion {
  x: number;
  y: number;
  timer: number;
}

export const Bomberman: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [playerPos, setPlayerPos] = useState<Position>({ x: 1, y: 1 });
  const [bombs, setBombs] = useState<Bomb[]>([]);
  const [explosions, setExplosions] = useState<Explosion[]>([]);
  const [walls, setWalls] = useState<Set<string>>(new Set());
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const keysPressed = useRef<{ [key: string]: boolean }>({});

  // Initialize walls
  useEffect(() => {
    const newWalls = new Set<string>();
    for (let x = 1; x < GRID_SIZE - 1; x++) {
      for (let y = 1; y < GRID_SIZE - 1; y++) {
        // Create some random destructible walls
        if ((x % 2 === 1 || y % 2 === 1) && Math.random() > 0.3) {
          newWalls.add(`${x},${y}`);
        }
      }
    }
    setWalls(newWalls);
  }, []);

  // Handle keyboard input
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = true;

      if (e.key === ' ') {
        e.preventDefault();
        // Place bomb
        const bombExists = bombs.some((b) => b.x === playerPos.x && b.y === playerPos.y);
        if (!bombExists && bombs.length < 3) {
          setBombs([...bombs, { x: playerPos.x, y: playerPos.y, timer: 120 }]);
        }
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keysPressed.current[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [playerPos, bombs]);

  // Game loop
  useEffect(() => {
    const gameLoop = setInterval(() => {
      if (gameOver) return;

      setPlayerPos((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        if (keysPressed.current['ArrowUp'] || keysPressed.current['w']) newY = Math.max(0, prev.y - 1);
        if (keysPressed.current['ArrowDown'] || keysPressed.current['s']) newY = Math.min(GRID_SIZE - 1, prev.y + 1);
        if (keysPressed.current['ArrowLeft'] || keysPressed.current['a']) newX = Math.max(0, prev.x - 1);
        if (keysPressed.current['ArrowRight'] || keysPressed.current['d']) newX = Math.min(GRID_SIZE - 1, prev.x + 1);

        // Check collision with walls
        const wallKey = `${newX},${newY}`;
        if (walls.has(wallKey)) {
          newX = prev.x;
          newY = prev.y;
        }

        // Check collision with bombs
        const bombCollision = bombs.some((b) => b.x === newX && b.y === newY);
        if (bombCollision) {
          newX = prev.x;
          newY = prev.y;
        }

        // Check explosion collision (game over)
        const explosionCollision = explosions.some((exp) => exp.x === newX && exp.y === newY);
        if (explosionCollision) {
          setGameOver(true);
        }

        return { x: newX, y: newY };
      });

      // Update bombs
      setBombs((prevBombs) => {
        const updated = prevBombs.map((b) => ({ ...b, timer: b.timer - 1 }));
        const newExplosions: Explosion[] = [];

        updated.forEach((bomb) => {
          if (bomb.timer <= 0) {
            // Explode
            newExplosions.push({ x: bomb.x, y: bomb.y, timer: 30 });

            // Create cross pattern explosions
            for (let dir of [[0, 1], [0, -1], [1, 0], [-1, 0]]) {
              for (let i = 1; i < 3; i++) {
                const expX = bomb.x + dir[0] * i;
                const expY = bomb.y + dir[1] * i;
                if (expX >= 0 && expX < GRID_SIZE && expY >= 0 && expY < GRID_SIZE) {
                  if (!walls.has(`${expX},${expY}`)) {
                    newExplosions.push({ x: expX, y: expY, timer: 30 });
                  } else {
                    // Destroy wall
                    setWalls((prev) => {
                      const newSet = new Set(prev);
                      newSet.delete(`${expX},${expY}`);
                      return newSet;
                    });
                    break;
                  }
                }
              }
            }
          }
        });

        if (newExplosions.length > 0) {
          setExplosions((prev) => [...prev, ...newExplosions]);
          setScore((prev) => prev + newExplosions.length * 10);
        }

        return updated.filter((b) => b.timer > 0);
      });

      // Update explosions
      setExplosions((prev) => prev.map((e) => ({ ...e, timer: e.timer - 1 })).filter((e) => e.timer > 0));
    }, 50);

    return () => clearInterval(gameLoop);
  }, [gameOver, walls, bombs, explosions, playerPos]);

  // Render canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = '#e7e5e4'; // Stone-50 for light, will be overridden for dark
    if (document.documentElement.classList.contains('dark')) {
      ctx.fillStyle = '#1f2937'; // Gray-800
    }
    ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

    // Draw grid
    ctx.strokeStyle = document.documentElement.classList.contains('dark') ? '#374151' : '#d6d3d1';
    ctx.lineWidth = 1;
    for (let x = 0; x <= GRID_SIZE; x++) {
      ctx.beginPath();
      ctx.moveTo(x * TILE_SIZE, 0);
      ctx.lineTo(x * TILE_SIZE, GAME_HEIGHT);
      ctx.stroke();
    }
    for (let y = 0; y <= GRID_SIZE; y++) {
      ctx.beginPath();
      ctx.moveTo(0, y * TILE_SIZE);
      ctx.lineTo(GAME_WIDTH, y * TILE_SIZE);
      ctx.stroke();
    }

    // Draw walls
    ctx.fillStyle = document.documentElement.classList.contains('dark') ? '#4b5563' : '#9ca3af';
    walls.forEach((wallKey) => {
      const [x, y] = wallKey.split(',').map(Number);
      ctx.fillRect(x * TILE_SIZE + 2, y * TILE_SIZE + 2, TILE_SIZE - 4, TILE_SIZE - 4);
    });

    // Draw bombs
    ctx.fillStyle = '#1f2937';
    bombs.forEach((bomb) => {
      ctx.beginPath();
      ctx.arc(
        bomb.x * TILE_SIZE + TILE_SIZE / 2,
        bomb.y * TILE_SIZE + TILE_SIZE / 2,
        TILE_SIZE / 3,
        0,
        Math.PI * 2
      );
      ctx.fill();
    });

    // Draw explosions
    ctx.fillStyle = '#ef4444';
    explosions.forEach((exp) => {
      ctx.fillRect(exp.x * TILE_SIZE + 5, exp.y * TILE_SIZE + 5, TILE_SIZE - 10, TILE_SIZE - 10);
    });

    // Draw player
    ctx.fillStyle = '#2563eb';
    ctx.fillRect(playerPos.x * TILE_SIZE + 5, playerPos.y * TILE_SIZE + 5, TILE_SIZE - 10, TILE_SIZE - 10);

    // Draw game over
    if (gameOver) {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
      ctx.fillRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
      ctx.fillStyle = '#fff';
      ctx.font = 'bold 24px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('GAME OVER', GAME_WIDTH / 2, GAME_HEIGHT / 2);
    }
  }, [playerPos, bombs, explosions, walls, gameOver]);

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex justify-between w-full items-center">
        <h3 className="text-lg font-bold text-gray-900 dark:text-white">Bomberman</h3>
        <div className="text-sm font-semibold text-gray-700 dark:text-gray-300">Score: {score}</div>
        <button
          onClick={() => {
            setPlayerPos({ x: 1, y: 1 });
            setBombs([]);
            setExplosions([]);
            setScore(0);
            setGameOver(false);
          }}
          className="px-3 py-1 bg-blue-600 dark:bg-blue-700 text-white rounded text-xs font-medium hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
        >
          Restart
        </button>
      </div>
      <canvas
        ref={canvasRef}
        width={GAME_WIDTH}
        height={GAME_HEIGHT}
        className="border-2 border-gray-300 dark:border-gray-700 rounded-lg shadow-md dark:shadow-gray-900"
      />
      <div className="text-xs text-gray-600 dark:text-gray-400 text-center">
        <p>Arrow Keys or WASD to move | Space to place bomb</p>
      </div>
    </div>
  );
};
