import React from 'react';
import { Section, Reveal } from '@/src/components/Section';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, Calendar, Clock } from 'lucide-react';
import { blogPosts } from '@/src/data/blogPosts';

const CATEGORIES = ['All', 'Strategy', 'AI Search', 'Product Updates'];

export const Resources: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState('All');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.title.toLowerCase().includes(activeCategory.toLowerCase());
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = blogPosts[0];

  return (
    <div className="pt-20">
      {/* HERO */}
      <Section background="grid" className="pb-12 pt-20">
        <div className="max-w-[800px]">
          <Reveal>
            <span className="badge mb-6">RESOURCES</span>
            <h1 className="text-[48px] md:text-[72px] font-black text-text-primary leading-tight mb-6 italic uppercase tracking-tighter">
              Insights for the modern <span className="text-accent">staffing leader.</span>
            </h1>
            <p className="text-[20px] text-text-secondary leading-relaxed">
              Deep dives into AI search, inbound strategy, and the future of the staffing industry.
            </p>
          </Reveal>
        </div>
      </Section>

      {/* FILTERS */}
      <Section className="py-0 border-y border-border-subtle bg-bg-surface sticky top-16 z-30">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 py-6">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 no-scrollbar">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 text-[13px] font-bold tracking-widest uppercase transition-all whitespace-nowrap border ${
                  activeCategory === cat 
                    ? 'bg-accent text-white border-accent' 
                    : 'bg-bg-elevated text-text-secondary hover:text-text-primary border-border-subtle'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary group-focus-within:text-accent transition-colors" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-bg-elevated border border-border-subtle rounded-none pl-10 pr-4 py-3 text-[14px] w-full md:w-80 focus:outline-none focus:border-accent transition-all"
            />
          </div>
        </div>
      </Section>

      {/* FEATURED POST */}
      {activeCategory === 'All' && !searchQuery && (
        <Section className="py-20">
          <Reveal>
            <Link to={`/blog/${featuredPost.id}`} className="group relative block overflow-hidden bg-bg-surface border border-border-subtle hover:border-border-strong transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[16/9] lg:aspect-auto overflow-hidden bg-bg-elevated">
                  <img 
                    src={`https://picsum.photos/seed/${featuredPost.id}/1200/800`} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 lg:p-16 flex flex-col justify-center">
                  <span className="text-accent text-[12px] font-bold tracking-widest uppercase mb-6">FEATURED ARTICLE</span>
                  <h2 className="text-[32px] md:text-[48px] font-black text-text-primary leading-tight mb-8 group-hover:text-accent transition-colors italic uppercase tracking-tighter">
                    {featuredPost.title}
                  </h2>
                  <p className="text-[18px] text-text-secondary mb-10 line-clamp-3 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between mt-auto pt-8 border-t border-border-subtle">
                    <div className="flex items-center gap-6 text-[13px] text-text-muted font-bold uppercase tracking-widest">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {featuredPost.date}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-accent font-black uppercase tracking-widest text-[14px] group-hover:translate-x-2 transition-transform">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>
        </Section>
      )}

      {/* GRID */}
      <Section className="py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.filter((p) => (activeCategory !== 'All' || searchQuery) || p.id !== featuredPost.id).map((post, i) => (
            <Reveal key={post.id} delay={i * 50}>
              <Link to={`/blog/${post.id}`} className="group flex flex-col h-full bg-bg-surface border border-border-subtle hover:border-accent transition-all">
                <div className="aspect-[16/10] overflow-hidden bg-bg-elevated">
                  <img 
                    src={`https://picsum.photos/seed/${post.id}/800/600`} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-[22px] font-bold text-text-primary mb-4 group-hover:text-accent transition-colors line-clamp-2 leading-tight italic uppercase tracking-tighter">
                    {post.title}
                  </h3>
                  <p className="text-[15px] text-text-secondary mb-8 line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-border-subtle">
                    <span className="text-[11px] font-bold text-text-muted uppercase tracking-widest">{post.date}</span>
                    <div className="flex items-center gap-2 text-accent font-black uppercase tracking-widest text-[12px]">
                      Read <ArrowRight className="w-3 h-3" />
                    </div>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* NEWSLETTER */}
      <Section className="py-32 border-t border-border-subtle">
        <div className="bg-bg-surface border border-border-subtle p-12 md:p-24 text-center relative overflow-hidden">
          <div className="grid-bg absolute inset-0 opacity-5 pointer-events-none" />
          <Reveal>
            <h2 className="text-[32px] md:text-[56px] font-black text-text-primary mb-8 leading-tight italic uppercase tracking-tighter">
              Get the Inbound Staffing <br /> <span className="text-accent">newsletter.</span>
            </h2>
            <p className="text-[20px] text-text-secondary mb-12 max-w-[500px] mx-auto">
              Weekly insights on AI search, market trends, and agency growth. No fluff, just the data.
            </p>
            <form className="max-w-[500px] mx-auto flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your work email" 
                className="flex-grow bg-bg-base border border-border-subtle rounded-none px-6 py-4 text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-all"
                required
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe Now
              </button>
            </form>
            <p className="text-[12px] text-text-muted mt-8 font-medium uppercase tracking-widest">
              JOIN 2,400+ STAFFING LEADERS • UNSUBSCRIBE ANYTIME
            </p>
          </Reveal>
        </div>
      </Section>
    </div>
  );
};
