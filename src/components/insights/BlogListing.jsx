import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon, TagIcon } from '@heroicons/react/24/outline';

export default function BlogListing() {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const categories = [
    'All',
    'Investment',
    'Trade',
    'Legal',
    'Immigration',
    'Leadership',
    'Case Studies'
  ];

  const blogPosts = [
    {
      id: 1,
      title: "Cross-Border Investment Trends 2025",
      excerpt: "Africa is no longer a frontier—it's the next growth hub. Learn how investors are using UAE structures to unlock opportunities while mitigating risks.",
      tags: ["Investment", "UAE"],
      category: "Investment",
      date: "May 28, 2023"
    },
    {
      id: 2,
      title: "New UAE-Africa Trade Corridors",
      excerpt: "How recent trade agreements are creating faster, more efficient pathways for goods between Dubai and key African markets.",
      tags: ["Trade", "Logistics"],
      category: "Trade",
      date: "June 5, 2023"
    },
    {
      id: 3,
      title: "Immigration Policy Updates 2023",
      excerpt: "Recent changes to golden visa programs and how they affect African investors seeking UAE residency.",
      tags: ["Visa", "Residency"],
      category: "Immigration",
      date: "June 12, 2023"
    },
    {
      id: 4,
      title: "Avoiding Legal Pitfalls in Africa",
      excerpt: "Critical compliance considerations for corporate structures operating across multiple African jurisdictions.",
      tags: ["Compliance", "Governance"],
      category: "Legal",
      date: "June 18, 2023"
    },
    {
      id: 5,
      title: "Leadership in Multicultural Markets",
      excerpt: "Strategies for building executive teams that can navigate both African and Middle Eastern business cultures.",
      tags: ["Management", "Culture"],
      category: "Leadership",
      date: "June 25, 2023"
    },
    {
      id: 6,
      title: "Nigeria Solar Farm Success Story",
      excerpt: "Case study: How we facilitated a $200M renewable energy project between Dubai investors and Nigerian partners.",
      tags: ["Energy", "PPP"],
      category: "Case Studies",
      date: "July 3, 2023"
    }
  ];

  const filteredPosts = activeFilter === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeFilter);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-gray-200 pb-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeFilter === category
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <article key={post.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-3">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span className="font-medium text-primary">{post.category}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {post.excerpt}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {post.tags.map((tag) => (
                    <span key={tag} className="inline-flex items-center text-xs bg-gray-100 text-gray-700 px-2.5 py-0.5 rounded-full">
                      <TagIcon className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
                
                <Link 
                  to={`/insights/${post.id}`}
                  className="inline-flex items-center font-medium text-primary hover:text-primary-dark group"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination would go here */}
      </div>
    </section>
  );
}