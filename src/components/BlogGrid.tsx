/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Calendar, User, Clock, ArrowRight, Sparkles, X, Heart, MessageSquare, Bookmark } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_POSTS } from '../data';
import { BlogPost } from '../types';
import SafeImage from './SafeImage';

export default function BlogGrid() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  // Likes/Bookmarked list state (simulating real action)
  const [likedPosts, setLikedPosts] = useState<Record<string, boolean>>({});
  const [savedPosts, setSavedPosts] = useState<Record<string, boolean>>({});

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedPosts((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = ['All', 'Oral Health Tips', 'Treatments', 'Patient Wellness', 'Cosmetic Dentistry', 'Preventive Care', 'Pediatric Dentistry'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = BLOG_POSTS.find((p) => p.id === 'b-featured') || BLOG_POSTS[0];

  const categoryCounts = BLOG_POSTS.reduce<Record<string, number>>((acc, post) => {
    acc[post.category] = (acc[post.category] || 0) + 1;
    return acc;
  }, {});

  return (
    <section className="py-20 bg-white" id="blog-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Page Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Blog Feed */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Featured Post Card (Only shown when filter is All or matches Featured's category) */}
            {(activeCategory === 'All' || activeCategory === featuredPost.category) && !searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                onClick={() => setSelectedPost(featuredPost)}
                className="group bg-primary-50/20 border border-primary-100 rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer grid grid-cols-1 md:grid-cols-12"
              >
                <div className="md:col-span-6 relative aspect-video md:aspect-auto">
                  <SafeImage
                    src={featuredPost.imageUrl}
                    alt={featuredPost.title}
                    fallbackType="blog"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  <span className="absolute left-4 top-4 bg-accent-500 text-white font-sans text-xs font-semibold px-3 py-1.5 rounded-lg shadow-md uppercase tracking-wider">
                    ★ Featured Resource
                  </span>
                </div>
                <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-xs text-gray-500 font-sans">
                      <span className="text-primary-500 font-bold uppercase tracking-wider">{featuredPost.category}</span>
                      <span>•</span>
                      <span>{featuredPost.readTime}</span>
                    </div>
                    <h3 className="font-display font-extrabold text-xl sm:text-2xl text-dark-900 tracking-tight leading-tight group-hover:text-primary-500 transition-colors">
                      {featuredPost.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-primary-50">
                    <div className="flex items-center space-x-2.5">
                      <div className="w-8 h-8 rounded-full bg-accent-500/10 flex items-center justify-center text-accent-500 text-xs font-bold uppercase">
                        {featuredPost.author.charAt(4)}
                      </div>
                      <span className="text-xs font-semibold text-dark-900">{featuredPost.author}</span>
                    </div>
                    <span className="text-primary-500 text-xs font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>Read Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Blog Grid of remaining posts */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {filteredPosts
                .filter((p) => p.id !== 'b-featured' || searchQuery || activeCategory !== 'All')
                .map((post, idx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    onClick={() => setSelectedPost(post)}
                    className="group bg-white border border-primary-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg hover:border-primary-100 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                  >
                    <div className="relative aspect-video overflow-hidden">
                      <SafeImage
                        src={post.imageUrl}
                        alt={post.title}
                        fallbackType="blog"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                      />
                      <span className="absolute left-3 top-3 bg-white/95 text-primary-500 font-sans text-[10px] font-bold px-2.5 py-1 rounded-md shadow-sm uppercase tracking-wide">
                        {post.category}
                      </span>
                      {/* Social Actions Panel */}
                      <div className="absolute right-3 top-3 flex space-x-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                        <button
                          onClick={(e) => handleLike(post.id, e)}
                          className={`p-1.5 rounded-lg border backdrop-blur-sm transition-all ${
                            likedPosts[post.id]
                              ? 'bg-rose-500 text-white border-rose-500'
                              : 'bg-white/90 text-gray-500 border-gray-200 hover:text-rose-500'
                          }`}
                          aria-label="Like post"
                        >
                          <Heart className="w-3.5 h-3.5 fill-current" />
                        </button>
                        <button
                          onClick={(e) => handleSave(post.id, e)}
                          className={`p-1.5 rounded-lg border backdrop-blur-sm transition-all ${
                            savedPosts[post.id]
                              ? 'bg-primary-500 text-white border-primary-500'
                              : 'bg-white/90 text-gray-500 border-gray-200 hover:text-primary-500'
                          }`}
                          aria-label="Bookmark post"
                        >
                          <Bookmark className="w-3.5 h-3.5 fill-current" />
                        </button>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-[10px] text-gray-400 font-mono">
                          <Calendar className="w-3 h-3" />
                          <span>{post.date}</span>
                          <span>•</span>
                          <Clock className="w-3 h-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <h4 className="font-display font-bold text-base text-dark-900 group-hover:text-primary-500 transition-colors leading-snug">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-400 font-sans leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-primary-50">
                        <div className="flex items-center space-x-2">
                          <div className="w-7 h-7 rounded-full bg-primary-100 flex items-center justify-center text-primary-500 text-[10px] font-bold">
                            {post.author.charAt(4)}
                          </div>
                          <span className="text-[11px] font-medium text-dark-900">{post.author}</span>
                        </div>
                        <span className="text-primary-500 text-xs font-bold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                          <span>Read</span>
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
            </div>

            {filteredPosts.length === 0 && (
              <div className="text-center py-20 bg-primary-50/10 border border-dashed border-primary-100 rounded-3xl">
                <Bookmark className="w-12 h-12 text-gray-300 mx-auto" />
                <p className="text-sm font-medium text-gray-500 mt-3">No matching articles found in our medical database.</p>
                <button
                  onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                  className="text-xs font-bold text-primary-500 mt-2 hover:underline"
                >
                  Clear search parameters
                </button>
              </div>
            )}
          </div>

          {/* Blog Sidebar Widgets */}
          <div className="lg:col-span-4 space-y-8 font-sans">
            {/* Search Widget */}
            <div className="bg-primary-50/30 border border-primary-100 rounded-3xl p-6">
              <h3 className="font-display font-bold text-base text-dark-900 mb-4 tracking-tight">
                Search Articles
              </h3>
              <div className="relative">
                <Search className="absolute left-3.5 top-3 w-4.5 h-4.5 text-gray-400" />
                <input
                  type="text"
                  placeholder="e.g. gum disease, brushing..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-primary-100 rounded-xl py-2.5 pl-10 pr-4 text-xs text-dark-900 focus:outline-none focus:border-accent-500 transition-all"
                />
              </div>
            </div>

            {/* Categories List Widget */}
            <div className="bg-primary-50/30 border border-primary-100 rounded-3xl p-6">
              <h3 className="font-display font-bold text-base text-dark-900 mb-4 tracking-tight">
                Categories
              </h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full flex justify-between items-center px-3.5 py-2.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                      activeCategory === cat
                        ? 'bg-primary-500 text-white shadow-sm'
                        : 'hover:bg-primary-50 text-gray-500 hover:text-primary-500'
                    }`}
                  >
                    <span>{cat}</span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-mono font-bold ${activeCategory === cat ? 'bg-white/20 text-white' : 'bg-primary-50 text-gray-400'}`}>
                      {cat === 'All' ? BLOG_POSTS.length : categoryCounts[cat] || 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Interactive Bookmark List widget */}
            {Object.values(savedPosts).some(Boolean) && (
              <div className="bg-emerald-50/30 border border-emerald-100 rounded-3xl p-6">
                <h3 className="font-display font-bold text-base text-emerald-950 mb-3 tracking-tight flex items-center space-x-1.5">
                  <Bookmark className="w-4 h-4 text-emerald-600 fill-current" />
                  <span>My Saved Reading List</span>
                </h3>
                <div className="space-y-3">
                  {BLOG_POSTS.filter((p) => savedPosts[p.id]).map((p) => (
                    <div
                      key={p.id}
                      onClick={() => setSelectedPost(p)}
                      className="text-xs hover:text-emerald-600 cursor-pointer text-gray-500 py-1 border-b border-emerald-100/30 line-clamp-1 hover:translate-x-1 transition-transform"
                    >
                      • {p.title}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Clinic Offers Ad Banner */}
            <div className="bg-gradient-to-br from-primary-700 to-primary-500 text-white rounded-3xl p-6 relative overflow-hidden shadow-lg select-none">
              {/* background light glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl" />
              <div className="relative z-10 space-y-4">
                <Sparkles className="w-8 h-8 text-accent-500 animate-bounce" />
                <h4 className="font-display font-extrabold text-lg tracking-tight">
                  Free Dental Smile consultations
                </h4>
                <p className="text-[11px] leading-relaxed text-gray-100">
                  Secure your 3D digital oral scanning and consult our specialist dentist at absolutely no cost.
                </p>
                <div className="pt-2">
                  <span className="bg-accent-500 font-bold text-white text-[10px] tracking-wider uppercase px-4 py-2 rounded-xl shadow-md">
                    First-time visitors only
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Deep Blog Reader Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-dark-900/75 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto"
          >
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 30, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="w-full max-w-4xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-primary-50 max-h-[90vh] flex flex-col"
            >
              {/* Reader Header */}
              <div className="relative bg-dark-900 text-white min-h-[150px] sm:min-h-[220px] shrink-0">
                <SafeImage
                  src={selectedPost.imageUrl}
                  alt={selectedPost.title}
                  fallbackType="blog"
                  className="absolute inset-0 w-full h-full object-cover opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 to-transparent" />
                
                {/* Close handle */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2.5 rounded-full z-10 hover:scale-105 transition-all cursor-pointer"
                  aria-label="Close reader"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-6 left-6 right-6 space-y-2">
                  <span className="bg-accent-500 text-white font-mono text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded-md">
                    {selectedPost.category}
                  </span>
                  <h3 className="font-display font-extrabold text-lg sm:text-2xl lg:text-3xl tracking-tight leading-tight text-white mt-2 max-w-2xl">
                    {selectedPost.title}
                  </h3>
                </div>
              </div>

              {/* Reader Scroller Content */}
              <div className="p-6 sm:p-10 overflow-y-auto space-y-6 flex-1 text-gray-500 text-sm font-sans leading-relaxed">
                {/* Meta details */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pb-4 border-b border-primary-50">
                  <span className="flex items-center space-x-1.5">
                    <User className="w-4 h-4 text-accent-500" />
                    <span>Author: {selectedPost.author}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1.5">
                    <Calendar className="w-4 h-4 text-accent-500" />
                    <span>Published: {selectedPost.date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1.5">
                    <Clock className="w-4 h-4 text-accent-500" />
                    <span>Est. reading: {selectedPost.readTime}</span>
                  </span>
                </div>

                {/* Simulated MD Post Body */}
                <div className="prose prose-blue max-w-none text-dark-800 space-y-4">
                  {selectedPost.content ? (
                    selectedPost.content.split('\n\n').map((para, i) => {
                      if (para.startsWith('###')) {
                        return (
                          <h4 key={i} className="font-display font-extrabold text-dark-900 text-lg pt-3">
                            {para.replace('###', '').trim()}
                          </h4>
                        );
                      }
                      if (para.startsWith('-')) {
                        return (
                          <ul key={i} className="list-disc list-inside pl-4 space-y-1.5 text-gray-500 text-sm">
                            {para.split('\n').map((li, j) => (
                              <li key={j}>{li.replace('-', '').trim()}</li>
                            ))}
                          </ul>
                        );
                      }
                      return <p key={i} className="leading-relaxed">{para}</p>;
                    })
                  ) : (
                    <p>{selectedPost.excerpt}</p>
                  )}
                </div>

                {/* Footer details */}
                <div className="pt-6 border-t border-primary-50 flex flex-wrap gap-2 items-center">
                  <span className="text-xs text-gray-400 mr-2">Tags:</span>
                  {selectedPost.tags.map((tag) => (
                    <span key={tag} className="bg-primary-50 text-primary-500 text-[10px] font-mono font-bold px-3 py-1 rounded-full border border-primary-100/50">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Reader bottom Actions */}
              <div className="px-6 py-4 bg-primary-50/20 border-t border-primary-50 shrink-0 flex justify-between items-center">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="bg-dark-900 hover:bg-dark-800 text-white font-semibold text-xs px-5 py-2.5 rounded-xl transition-all cursor-pointer"
                >
                  Return to Blog
                </button>
                <div className="flex items-center space-x-3 text-xs">
                  <button
                    onClick={(e) => handleLike(selectedPost.id, e)}
                    className="flex items-center space-x-1.5 text-gray-400 hover:text-rose-500 transition-colors"
                  >
                    <Heart className={`w-4 h-4 ${likedPosts[selectedPost.id] ? 'text-rose-500 fill-current' : ''}`} />
                    <span>{likedPosts[selectedPost.id] ? 'Liked!' : 'Like'}</span>
                  </button>
                  <button
                    onClick={(e) => handleSave(selectedPost.id, e)}
                    className="flex items-center space-x-1.5 text-gray-400 hover:text-primary-500 transition-colors"
                  >
                    <Bookmark className={`w-4 h-4 ${savedPosts[selectedPost.id] ? 'text-primary-500 fill-current' : ''}`} />
                    <span>{savedPosts[selectedPost.id] ? 'Bookmarked' : 'Save'}</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
