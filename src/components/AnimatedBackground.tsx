import React from 'react';
import { motion } from 'motion/react';

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Deep space gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-indigo-950 to-slate-950" />
      
      {/* Aurora-like gradient overlays */}
      <motion.div
        className="absolute inset-0 opacity-60"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 80%, rgba(119, 255, 198, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 40% 20%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 80%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 40%, rgba(119, 255, 198, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 20% 40%, rgba(255, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 20%, rgba(119, 255, 198, 0.3) 0%, transparent 50%)',
          ],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Animated grid pattern with aurora colors */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="w-full h-full"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating cosmic shapes */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute ${
            i % 4 === 0 ? 'w-40 h-40 rounded-full bg-gradient-to-br from-violet-500/20 via-purple-500/20 to-fuchsia-500/20' :
            i % 4 === 1 ? 'w-32 h-32 rounded-lg bg-gradient-to-br from-cyan-400/20 via-blue-500/20 to-indigo-600/20 rotate-45' :
            i % 4 === 2 ? 'w-24 h-24 bg-gradient-to-br from-pink-400/20 via-rose-500/20 to-orange-500/20 rounded-full' :
            'w-28 h-28 bg-gradient-to-br from-emerald-400/20 via-teal-500/20 to-cyan-500/20 rounded-lg rotate-12'
          } backdrop-blur-sm shadow-2xl`}
          animate={{
            x: [0, 120, -80, 0],
            y: [0, -120, 80, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.3, 0.8, 1],
          }}
          transition={{
            duration: 18 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            left: `${2 + (i * 6) % 85}%`,
            top: `${5 + (i * 7) % 80}%`,
          }}
        />
      ))}

      {/* Cosmic stars/particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: `radial-gradient(circle, ${
                i % 3 === 0 ? '#a78bfa' : i % 3 === 1 ? '#06b6d4' : '#f472b6'
              } 0%, transparent 70%)`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Large glowing orbs */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(59, 130, 246, 0.3) 30%, transparent 70%)',
          filter: 'blur(60px)',
          left: '5%',
          top: '15%'
        }}
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -100, 150, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, rgba(249, 115, 22, 0.3) 30%, transparent 70%)',
          filter: 'blur(60px)',
          right: '10%',
          bottom: '20%'
        }}
        animate={{
          x: [0, -200, 100, 0],
          y: [0, 250, -100, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(16, 185, 129, 0.3) 30%, transparent 70%)',
          filter: 'blur(60px)',
          left: '60%',
          top: '40%'
        }}
        animate={{
          x: [0, 150, -100, 0],
          y: [0, -150, 200, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Shooting stars */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            background: `linear-gradient(45deg, ${
              i % 4 === 0 ? '#a78bfa' : 
              i % 4 === 1 ? '#06b6d4' : 
              i % 4 === 2 ? '#f472b6' : '#10b981'
            }, transparent)`,
            boxShadow: `0 0 6px ${
              i % 4 === 0 ? '#a78bfa' : 
              i % 4 === 1 ? '#06b6d4' : 
              i % 4 === 2 ? '#f472b6' : '#10b981'
            }`,
            left: `${Math.random() * 50}%`,
            top: `${Math.random() * 50}%`,
          }}
          animate={{
            x: [-20, window.innerWidth + 20],
            y: [-20, window.innerHeight + 20],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 8,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Aurora waves */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          background: `
            linear-gradient(45deg, 
              transparent 0%, 
              rgba(139, 92, 246, 0.1) 25%, 
              transparent 50%, 
              rgba(236, 72, 153, 0.1) 75%, 
              transparent 100%
            )
          `,
          backgroundSize: '200% 200%',
        }}
      />
    </div>
  );
}