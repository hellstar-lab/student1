import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Users, Code, Trophy, Zap, Rocket } from 'lucide-react';
import logoImage from 'figma:asset/a18067bec8226a34c58754996c559c1ca7c22489.png';

export function HeroSection() {
  const features = [
    {
      icon: Code,
      title: "Hands-on Workshops",
      description: "Learn cutting-edge technologies with practical projects",
      gradient: "from-violet-500 to-purple-600"
    },
    {
      icon: Users,
      title: "Tech Community",
      description: "Connect with like-minded developers and innovators",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      icon: Trophy,
      title: "Skill Building",
      description: "Enhance your technical skills with expert guidance",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      icon: Rocket,
      title: "Innovation Hub",
      description: "Be part of groundbreaking tech initiatives",
      gradient: "from-emerald-500 to-teal-600"
    }
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-20">
      {/* Logo and main heading */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="text-center mb-20"
      >
        <motion.div
          className="mb-12 relative"
          animate={{
            scale: [1, 1.05, 1],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          {/* Glowing backdrop for logo */}
          <motion.div
            className="absolute inset-0 rounded-full blur-3xl opacity-60"
            animate={{
              background: [
                'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(236, 72, 153, 0.4) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)',
                'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, transparent 70%)',
              ],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
          />
          <img 
            src={logoImage} 
            alt="Pixel Plus Tech Community" 
            className="w-56 h-56 mx-auto drop-shadow-2xl relative z-10"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-7xl md:text-8xl mb-8"
        >
          <motion.span
            className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
            animate={{
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            Welcome to the Future
          </motion.span>
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="relative"
        >
          <motion.p
            className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-6"
            animate={{
              color: ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.9)'],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
            }}
          >
            Join{' '}
            <motion.span
              className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              style={{
                backgroundSize: '200% 200%',
              }}
            >
              Pixel Plus Tech Community
            </motion.span>{' '}
            and be part of an exclusive network of innovators, creators, and tech enthusiasts shaping tomorrow's technology.
          </motion.p>
          
          {/* Floating sparkles around text */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                background: `radial-gradient(circle, ${
                  i % 3 === 0 ? '#a78bfa' : i % 3 === 1 ? '#06b6d4' : '#f472b6'
                } 0%, transparent 70%)`,
                left: `${10 + i * 10}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 1, 0.4],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      {/* Enhanced features grid */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 w-full max-w-7xl"
      >
        {features.map((feature, index) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.15, duration: 0.8 }}
            whileHover={{ 
              scale: 1.08, 
              y: -15,
              rotateY: 5,
              transition: { duration: 0.3 }
            }}
            className="group perspective-1000"
          >
            <div className="relative backdrop-blur-2xl bg-white/[0.08] border border-white/20 rounded-3xl p-8 text-center transition-all duration-500 h-full overflow-hidden hover:bg-white/[0.12] hover:border-white/30">
              {/* Animated background gradient */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`}
                animate={{
                  backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                style={{
                  backgroundSize: '200% 200%',
                }}
              />
              
              {/* Glowing icon container */}
              <motion.div
                className={`relative w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-2xl`}
                whileHover={{ 
                  rotateX: 15,
                  rotateY: 15,
                  scale: 1.1,
                }}
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(139, 92, 246, 0.3)',
                    '0 0 40px rgba(236, 72, 153, 0.3)',
                    '0 0 20px rgba(6, 182, 212, 0.3)',
                    '0 0 20px rgba(139, 92, 246, 0.3)',
                  ],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              >
                <feature.icon className="w-10 h-10 text-white drop-shadow-lg" />
                
                {/* Icon glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-2xl"
                  animate={{
                    background: [
                      `radial-gradient(circle, ${feature.gradient.includes('violet') ? 'rgba(139, 92, 246, 0.4)' : 
                                                 feature.gradient.includes('cyan') ? 'rgba(6, 182, 212, 0.4)' :
                                                 feature.gradient.includes('pink') ? 'rgba(236, 72, 153, 0.4)' :
                                                 'rgba(16, 185, 129, 0.4)'} 0%, transparent 70%)`,
                      'transparent',
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                />
              </motion.div>
              
              <motion.h3 
                className="text-white mb-3 text-xl"
                whileHover={{ scale: 1.05 }}
              >
                {feature.title}
              </motion.h3>
              
              <motion.p 
                className="text-white/80 text-sm leading-relaxed"
                whileHover={{ color: 'rgba(255,255,255,0.95)' }}
              >
                {feature.description}
              </motion.p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Enhanced call to action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="text-center relative"
      >
        {/* Pulsing background */}
        <motion.div
          className="absolute inset-0 rounded-full blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            background: [
              'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(6, 182, 212, 0.3) 0%, transparent 70%)',
              'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            ],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
          }}
        />
        
        <motion.div
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          <motion.div
            className="text-white/90 mb-6 flex items-center justify-center gap-3 text-lg"
            animate={{
              opacity: [0.8, 1, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="w-6 h-6 text-violet-400" />
            </motion.div>
            <span>Ready to level up your tech journey?</span>
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-6 h-6 text-cyan-400" />
            </motion.div>
          </motion.div>
          
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-r from-violet-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent text-xl"
            style={{
              backgroundSize: '200% 200%',
            }}
          >
            ↓ Register below to get started ↓
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced floating tech elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['React', 'AI', 'Web3', 'ML', 'IoT', 'AR', 'VR', 'Blockchain'].map((tech, index) => (
          <motion.div
            key={tech}
            className="absolute backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/20 shadow-lg"
            style={{
              background: `linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2))`,
              left: `${5 + index * 12}%`,
              top: `${15 + index * 8}%`,
            }}
            animate={{
              x: [0, 60, -40, 0],
              y: [0, -50, 30, 0],
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 10 + index * 1.5,
              repeat: Infinity,
              delay: index * 2,
            }}
          >
            <motion.span
              className="text-white/90 text-sm tracking-wide"
              animate={{
                color: [
                  'rgba(255,255,255,0.9)',
                  'rgba(139, 92, 246, 1)',
                  'rgba(236, 72, 153, 1)',
                  'rgba(6, 182, 212, 1)',
                  'rgba(255,255,255,0.9)',
                ],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: index * 0.5,
              }}
            >
              {tech}
            </motion.span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}