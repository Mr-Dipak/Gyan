import { useEffect, useRef, useState } from "react";
import postService from "../../api/postService";

export default function BlogSection() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const scrollContainerRef = useRef(null);


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await postService.getAllPosts();
        console.log('Fetched data: ', fetchPosts);
        setPosts(fetchedPosts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  
  }, [setPosts]);

  const scroll = (direction) => {
    const { current } = scrollContainerRef;
    const scrollAmount = direction === 'left' ? -300 : 300;
    current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Articles You May Read.</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            This is all about Non-Governmental Organization (NGO) Updates
          </p>
        </div>

        <div className="relative mt-10">
          <button 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 text-gray-800 rounded-full p-2" 
            onClick={() => scroll('left')}
          >
            &lt;
          </button>
          <div 
            className="flex overflow-x-hidden space-x-8 scroll-smooth" 
            ref={scrollContainerRef}
          >
            {loading ? (
              <>Loading...</>
            ) : (
              posts.map((post) => (
                <article key={post.id} className="flex-none w-80 max-w-xl flex-col items-start justify-between rounded-lg shadow-lg bg-white bg-opacity-20 backdrop-filter backdrop-blur-md p-6">
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.imageUrl}
                   
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                     
                    >
                      {post.category}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img src={post.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.im}>
                          <span className="absolute inset-0" />
                          {post.author}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </article>
              ))
            )}
          </div>
          <button 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-gray-300 text-gray-800 rounded-full p-2" 
            onClick={() => scroll('right')}
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}
