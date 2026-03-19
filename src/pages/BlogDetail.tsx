import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Section, Reveal } from '@/src/components/Section';
import { blogPosts } from '@/src/data/blogPosts';
import { Calendar, User, ArrowLeft, ArrowRight } from 'lucide-react';

export const BlogDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-16">
      {/* HERO */}
      <Section background="grid" className="pt-20 pb-32">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-8 text-[14px] font-bold uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <h1 className="text-[40px] md:text-[64px] font-black text-text-primary leading-[1.1] mb-8 italic uppercase tracking-tighter">
              {post.title}
            </h1>
            <div className="flex items-center gap-6 text-text-muted text-[14px] font-medium">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CONTENT */}
      <Section className="py-24">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <div className="prose prose-invert prose-lg max-w-none">
              <p className="text-[22px] text-text-primary font-medium leading-relaxed mb-12 border-l-4 border-accent pl-8 italic">
                {post.excerpt}
              </p>
              <div className="text-text-secondary leading-[1.8] space-y-8 whitespace-pre-line">
                {post.content}
              </div>
            </div>
          </Reveal>

          {/* CTA BOX */}
          <Reveal delay={200} className="mt-24 p-12 bg-bg-surface border border-border-subtle text-center">
            <h3 className="text-[32px] font-black text-text-primary mb-6 italic uppercase tracking-tighter">
              Ready to see the <span className="text-accent">Staff Found</span> difference?
            </h3>
            <p className="text-text-secondary mb-10 text-[18px] max-w-[500px] mx-auto">
              Get a free market audit and see exactly how many hiring managers 
              are searching for your agency right now.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/free-audit" className="btn-primary px-12 h-14 text-[16px]">
                Get My Free Audit
              </Link>
              <Link to="/book-demo" className="btn-secondary h-14 px-10 text-[16px]">
                Book a Demo
              </Link>
            </div>
          </Reveal>

          {/* RELATED POSTS */}
          <div className="mt-32 pt-24 border-t border-border-subtle">
            <h4 className="text-[24px] font-bold text-text-primary mb-12 italic uppercase tracking-tighter">Related Articles</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.filter(p => p.id !== id).slice(0, 2).map(p => (
                <Link key={p.id} to={`/blog/${p.id}`} className="glass-card p-8 group">
                  <div className="text-text-muted text-[12px] font-bold uppercase tracking-widest mb-4">{p.date}</div>
                  <h5 className="text-[20px] font-bold text-text-primary mb-4 group-hover:text-accent transition-colors italic uppercase tracking-tighter">{p.title}</h5>
                  <div className="flex items-center gap-2 text-accent text-[14px] font-bold uppercase tracking-widest">
                    Read More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
