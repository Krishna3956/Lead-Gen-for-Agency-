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
    <div className="pt-14">
      {/* HERO */}
      <Section background="grid" className="pt-12 pb-16 md:pt-16 md:pb-20">
        <div className="max-w-[800px] mx-auto">
          <Reveal>
            <Link to="/blog" className="inline-flex items-center gap-2 text-text-muted hover:text-accent transition-colors mb-8 text-[14px] font-bold uppercase tracking-widest">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <h1 className="page-title text-[40px] md:text-[64px] mb-8">
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
      <Section className="py-16 md:py-20">
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
          <Reveal delay={200} className="mt-16 md:mt-20 p-10 md:p-12 bg-bg-surface border border-border-subtle text-center rounded-[32px]">
            <h3 className="section-heading text-[32px] mb-6">
              Ready to see the <span className="text-accent">Cognivo</span> difference?
            </h3>
            <p className="text-text-secondary mb-10 text-[18px] max-w-[500px] mx-auto">
              Get a free market audit and see exactly what hiring managers are asking AI platforms about your specialty right now.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/free-audit" className="btn-primary px-12 h-14 text-[16px]">
                Get My Free Audit
              </Link>
              <Link to="/book-demo" className="btn-secondary h-14 px-10 text-[16px]">
                Join the Waitlist
              </Link>
            </div>
          </Reveal>

          {/* RELATED POSTS */}
          <div className="mt-16 pt-12 md:mt-20 md:pt-16 border-t border-border-subtle">
            <h4 className="card-heading text-[24px] mb-12">Related Articles</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {blogPosts.filter(p => p.id !== id).slice(0, 2).map(p => (
                <Link key={p.id} to={`/blog/${p.id}`} className="glass-card p-8 group">
                  <div className="text-text-muted text-[12px] font-bold uppercase tracking-widest mb-4">{p.date}</div>
                  <h5 className="card-heading text-[20px] mb-4 group-hover:text-accent transition-colors">{p.title}</h5>
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
