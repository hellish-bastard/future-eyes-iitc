'use client';

import { motion } from 'framer-motion';
import { Menu, Sparkles } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen animated-gradient">
      {/* Header */}
      <motion.header 
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex items-center justify-between px-6 py-6 lg:px-12"
      >
        <motion.div 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-[#2D4A2B]" />
          </div>
          <span className="text-white text-xl font-semibold">Future Eyes</span>
        </motion.div>
        
        <motion.button 
          className="p-2"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Menu className="w-6 h-6 text-white" />
        </motion.button>
      </motion.header>

      {/* Main Content */}
      <div className="px-6 lg:px-12 py-12 lg:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Content */}
            <motion.div 
              className="space-y-8"
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 1.2, 
                delay: 0.3, 
                ease: [0.25, 0.46, 0.45, 0.94],
                type: "spring",
                stiffness: 100,
                damping: 15
              }}
            >
              <motion.h1 
                className="text-4xl lg:text-6xl xl:text-7xl font-light text-white leading-[0.9]"
                initial={{ x: -300, opacity: 0, scale: 0.8 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.5, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 80,
                  damping: 20
                }}
              >
                <motion.span
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Experience
                </motion.span>
                <br />
                <motion.span 
                  className="font-normal"
                  initial={{ x: -150, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Aceh's living
                </motion.span>
                <br />
                <motion.span
                  initial={{ x: -120, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  heritage
                </motion.span>
              </motion.h1>

              <motion.p 
                className="text-gray-200 text-lg lg:text-xl leading-relaxed max-w-md"
                initial={{ x: -200, opacity: 0, y: 20 }}
                animate={{ x: 0, opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 1.3, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 120,
                  damping: 18
                }}
              >
                Explore the rich tapestry of Acehnese culture, where
                every animation and design element tells a story.
                Dive into a world where tradition meets innovation,
                making your journey both personal and memorable.
              </motion.p>

              <motion.div 
                className="flex flex-col sm:flex-row gap-4 pt-4"
                initial={{ x: -150, opacity: 0, y: 30 }}
                animate={{ x: 0, opacity: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: 1.5, 
                  ease: [0.25, 0.46, 0.45, 0.94],
                  type: "spring",
                  stiffness: 100,
                  damping: 20
                }}
              >
                <motion.button 
                  className="px-8 py-3 bg-green-400 hover:bg-green-300 text-black font-medium rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(16, 185, 129, 0.3), 0 10px 10px -5px rgba(16, 185, 129, 0.04)",
                    x: 5
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  style={{ transitionDelay: '1.7s' }}
                >
                  Explore
                </motion.button>
                
                <motion.button 
                  className="px-8 py-3 border-2 border-white/20 hover:border-white/40 text-white font-medium rounded-full transition-all duration-300 hover:bg-white/5"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(255, 255, 255, 0.6)",
                    x: 5
                  }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  style={{ transitionDelay: '1.9s' }}
                >
                  Experience
                </motion.button>
              </motion.div>
            </motion.div>

            {/* Right Content - Image */}
            <motion.div 
              className="relative"
              initial={{ x: 100, opacity: 0, scale: 0.8 }}
              animate={{ x: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
            >
              <motion.div 
                className="relative w-full h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-blue-300 to-amber-200 opacity-90"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                
                {/* Simulated Islamic Architecture */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-200 via-purple-200 to-amber-100 relative overflow-hidden">
                    {/* Arched corridors simulation */}
                    <div className="absolute inset-0 opacity-80">
                      <div className="w-full h-full bg-gradient-to-b from-blue-200/50 via-purple-300/30 to-amber-200/40"></div>
                      
                      {/* Golden architectural details */}
                      <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-amber-300 to-amber-500 rounded-full opacity-60 blur-xl"></div>
                      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-400 rounded-full opacity-40 blur-lg"></div>
                      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-amber-200 to-amber-400 rounded-full opacity-50 blur-md"></div>
                      
                      {/* Geometric patterns overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/10 via-transparent to-amber-100/20"></div>
                    </div>
                    
                    {/* Central perspective effect */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-1/3 bg-gradient-to-t from-amber-100 to-transparent opacity-60"></div>
                  </div>
                </div>

                {/* Floating elements for depth */}
                <motion.div
                  className="absolute top-1/4 right-1/4 w-6 h-6 bg-amber-300 rounded-full opacity-60"
                  animate={{ 
                    y: [0, -20, 0],
                    opacity: [0.6, 0.8, 0.6]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                
                <motion.div
                  className="absolute bottom-1/3 left-1/4 w-4 h-4 bg-purple-400 rounded-full opacity-50"
                  animate={{ 
                    y: [0, 15, 0],
                    x: [0, 10, 0],
                    opacity: [0.5, 0.7, 0.5]
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Rolling Cards Section */}
      <div className="px-6 lg:px-12 py-20 lg:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left - Futuristic Ferris Wheel */}
            <motion.div 
              className="relative order-2 lg:order-1"
              initial={{ x: -100, opacity: 0, scale: 0.8 }}
              whileInView={{ x: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <motion.div 
                className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {/* Starry background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
                  {/* Stars */}
                  {[...Array(20)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-white rounded-full opacity-60"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 60}%`,
                      }}
                      animate={{ 
                        opacity: [0.3, 0.8, 0.3],
                        scale: [0.5, 1, 0.5]
                      }}
                      transition={{ 
                        duration: 2 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 2
                      }}
                    />
                  ))}
                </div>

                {/* Central Ferris Wheel Structure */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Main wheel structure */}
                  <motion.div 
                    className="relative w-80 h-80 lg:w-96 lg:h-96"
                    animate={{ rotate: 360 }}
                    transition={{ 
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {/* Outer ring */}
                    <div className="absolute inset-0 border-4 border-white/30 rounded-full"></div>
                    
                    {/* Inner geometric patterns */}
                    <div className="absolute inset-8 border-2 border-white/20 rounded-full"></div>
                    <div className="absolute inset-16 border border-white/15 rounded-full"></div>
                    
                    {/* Spokes */}
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-1/2 left-1/2 w-0.5 bg-gradient-to-r from-transparent via-white/40 to-transparent origin-bottom"
                        style={{
                          height: '45%',
                          transform: `translate(-50%, -100%) rotate(${i * 45}deg)`,
                        }}
                        animate={{ 
                          opacity: [0.2, 0.6, 0.2]
                        }}
                        transition={{ 
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}

                    {/* Neon light effects */}
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-3 h-3 rounded-full"
                        style={{
                          background: i % 3 === 0 ? '#ff0080' : i % 3 === 1 ? '#00ff80' : '#0080ff',
                          boxShadow: `0 0 20px ${i % 3 === 0 ? '#ff0080' : i % 3 === 1 ? '#00ff80' : '#0080ff'}`,
                          left: '50%',
                          top: '50%',
                          transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-180px)`,
                        }}
                        animate={{ 
                          scale: [0.8, 1.2, 0.8],
                          opacity: [0.6, 1, 0.6]
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Central hub */}
                  <motion.div 
                    className="absolute w-8 h-8 bg-white rounded-full shadow-lg"
                    animate={{ 
                      boxShadow: [
                        '0 0 20px rgba(255,255,255,0.5)',
                        '0 0 40px rgba(255,255,255,0.8)',
                        '0 0 20px rgba(255,255,255,0.5)'
                      ]
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity
                    }}
                  />
                </div>

                {/* Ground silhouettes */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/60 to-transparent">
                  {/* People silhouettes */}
                  {[...Array(15)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute bottom-0 w-1 bg-black/80 rounded-t-full"
                      style={{
                        height: `${8 + Math.random() * 8}px`,
                        left: `${5 + i * 6}%`,
                      }}
                    />
                  ))}
                </div>

                {/* Atmospheric lighting */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 via-transparent to-blue-900/20 pointer-events-none"></div>
              </motion.div>
            </motion.div>

            {/* Right - 4 Flip Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 order-1 lg:order-2">
              {/* Card 1: Artistry & Craft */}
              <motion.div
                className="relative h-80 w-full perspective-1000"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.1 }}
              >
                <motion.div
                  className="relative w-full h-full transform-style-preserve-3d cursor-pointer"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {/* Front of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20">
                    <div className="text-xs font-medium text-gray-500 tracking-wider uppercase mb-3">
                      ARTISTRY & CRAFT
                    </div>
                    <h3 className="text-xl font-light text-gray-900 mb-3 leading-tight">
                      Handmade stories in every detail
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Wander through vibrant patterns and woven wonders.
                    </p>
                    <div className="absolute bottom-4 right-4 text-gray-400 text-xs">
                      Hover to explore →
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-amber-50 to-orange-100 rounded-3xl p-6 shadow-xl border border-amber/20">
                    <div className="h-full flex flex-col">
                      <div className="text-xs font-medium text-amber-700 tracking-wider uppercase mb-2">
                        TRADITIONAL CRAFTS
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-amber-200 to-orange-300 rounded-2xl mb-3 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-400/20 via-orange-300/30 to-red-400/20"></div>
                        <div className="absolute inset-4 border-2 border-amber-600/30 rounded-xl"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-amber-800 font-medium text-sm">
                          Songket Weaving
                        </div>
                      </div>
                      <p className="text-amber-800 text-xs leading-relaxed">
                        Golden threads tell ancient stories in every intricate pattern of Acehnese songket.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 2: Flavors & Food */}
              <motion.div
                className="relative h-80 w-full perspective-1000"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <motion.div
                  className="relative w-full h-full transform-style-preserve-3d cursor-pointer"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {/* Front of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20">
                    <div className="text-xs font-medium text-gray-500 tracking-wider uppercase mb-3">
                      FLAVORS & FOOD
                    </div>
                    <h3 className="text-xl font-light text-gray-900 mb-3 leading-tight">
                      Savor every taste, share every story
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Spicy, sweet, and everything in between.
                    </p>
                    <div className="absolute bottom-4 right-4 text-gray-400 text-xs">
                      Hover to explore →
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-red-50 to-orange-100 rounded-3xl p-6 shadow-xl border border-red/20">
                    <div className="h-full flex flex-col">
                      <div className="text-xs font-medium text-red-700 tracking-wider uppercase mb-2">
                        SIGNATURE DISH
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-red-200 to-orange-300 rounded-2xl mb-3 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-red-400/20 via-orange-300/30 to-yellow-400/20"></div>
                        <div className="absolute inset-4 border-2 border-red-600/30 rounded-xl"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-red-800 font-medium text-sm text-center">
                          Rendang Aceh
                        </div>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-red-700 text-xs">
                          🌶️ Spicy • 🥥 Coconut • 🥩 Beef
                        </div>
                      </div>
                      <p className="text-red-800 text-xs leading-relaxed">
                        Slow-cooked perfection with aromatic spices and rich coconut milk.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 3: Music & Dance */}
              <motion.div
                className="relative h-80 w-full perspective-1000"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <motion.div
                  className="relative w-full h-full transform-style-preserve-3d cursor-pointer"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {/* Front of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20">
                    <div className="text-xs font-medium text-gray-500 tracking-wider uppercase mb-3">
                      MUSIC & DANCE
                    </div>
                    <h3 className="text-xl font-light text-gray-900 mb-3 leading-tight">
                      Rhythms that move the soul
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Traditional melodies and graceful movements.
                    </p>
                    <div className="absolute bottom-4 right-4 text-gray-400 text-xs">
                      Hover to explore →
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-purple-50 to-pink-100 rounded-3xl p-6 shadow-xl border border-purple/20">
                    <div className="h-full flex flex-col">
                      <div className="text-xs font-medium text-purple-700 tracking-wider uppercase mb-2">
                        TRADITIONAL PERFORMANCE
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-purple-200 to-pink-300 rounded-2xl mb-3 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 via-pink-300/30 to-rose-400/20"></div>
                        <div className="absolute inset-4 border-2 border-purple-600/30 rounded-xl"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-purple-800 font-medium text-sm text-center">
                          Saman Dance
                        </div>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-purple-700 text-xs">
                          🎵 UNESCO Heritage
                        </div>
                      </div>
                      <p className="text-purple-800 text-xs leading-relaxed">
                        The thousand hands dance - a mesmerizing display of unity and rhythm.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Card 4: Architecture & Heritage */}
              <motion.div
                className="relative h-80 w-full perspective-1000"
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <motion.div
                  className="relative w-full h-full transform-style-preserve-3d cursor-pointer"
                  whileHover={{ rotateY: 180 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                  {/* Front of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden bg-white/95 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/20">
                    <div className="text-xs font-medium text-gray-500 tracking-wider uppercase mb-3">
                      ARCHITECTURE & HERITAGE
                    </div>
                    <h3 className="text-xl font-light text-gray-900 mb-3 leading-tight">
                      Monuments of timeless beauty
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Islamic architecture meets local wisdom.
                    </p>
                    <div className="absolute bottom-4 right-4 text-gray-400 text-xs">
                      Hover to explore →
                    </div>
                  </div>

                  {/* Back of Card */}
                  <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-3xl p-6 shadow-xl border border-blue/20">
                    <div className="h-full flex flex-col">
                      <div className="text-xs font-medium text-blue-700 tracking-wider uppercase mb-2">
                        HISTORIC LANDMARK
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-2xl mb-3 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 via-indigo-300/30 to-purple-400/20"></div>
                        <div className="absolute inset-4 border-2 border-blue-600/30 rounded-xl"></div>
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-800 font-medium text-sm text-center">
                          Baiturrahman Mosque
                        </div>
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-blue-700 text-xs">
                          🕌 Grand Mosque
                        </div>
                      </div>
                      <p className="text-blue-800 text-xs leading-relaxed">
                        Seven domes crown this magnificent symbol of Acehnese Islamic heritage.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}