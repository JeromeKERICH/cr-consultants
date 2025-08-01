import React, { useEffect } from 'react'
import InsightsHero from '../components/insights/IHero'
import FeaturedInsights from '../components/insights/BlogGrid';
import BlogListing from '../components/insights/BlogListing';
import InsightsCTA from '../components/insights/BlogCTA';

const Blog = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }
    , []);
  return (
    <div>
      <InsightsHero/>
      <FeaturedInsights/>
      <BlogListing/>
      <InsightsCTA/>
    </div>
  )
}

export default Blog
