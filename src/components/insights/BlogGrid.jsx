import { ArrowRightIcon, CalendarIcon, UserIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

export default function FeaturedInsights() {
  const featuredPosts = [
    {
      id: 1,
      title: "Why UAE is Becoming the Gateway to African Investment",
      date: "May 15, 2023",
      author: "Princess Caroline Mutisya",
      excerpt: "Exploring how Dubai's strategic position and business-friendly policies are creating new opportunities for cross-continental investment flows.",
      image: "/images/blog/uae-africa-gateway.jpg",
      category: "Investment Trends"
    },
    {
      id: 2,
      title: "Top 5 Legal Mistakes Foreign Investors Make in Africa",
      date: "June 2, 2023",
      author: "CR Legal Team",
      excerpt: "Avoid these common pitfalls when structuring your African market entry to ensure compliance and protect your assets.",
      image: "/images/blog/legal-mistakes-africa.jpg",
      category: "Legal Advisory"
    },
    {
      id: 3,
      title: "The Rise of PPPs: Financing Africa's Infrastructure Future",
      date: "June 18, 2023",
      author: "David Mwangi",
      excerpt: "How public-private partnerships are transforming energy, transport, and urban development projects across the continent.",
      image: "/images/blog/africa-ppps.jpg",
      category: "Infrastructure"
    }
  ];

  return (
    <section className="py-5 md:py-15 lg:py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Featured Insights
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              {/* Cover Image */}
              <div className="h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Content */}
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-secondary bg-secondary/10 rounded-full mb-3">
                  {post.category}
                </span>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {post.title}
                </h3>
                
                {/* Meta */}
                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <div className="flex items-center mr-4">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {post.date}
                  </div>
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                </div>
                
                <p className="text-gray-600 mb-5">
                  {post.excerpt}
                </p>
                
                <Link 
                  to={`/insights/${post.id}`}
                  className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors"
                >
                  Read More
                  <ArrowRightIcon className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}