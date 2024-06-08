const Recommend = () => {
  const posts = [
    {
      title: "The Enchanting Beauty of Bali",
      imgSrc:
        "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      title: "A Stroll Through Paris",
      imgSrc:
        "https://plus.unsplash.com/premium_photo-1689523819186-cfe67633ad49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Exploring the Big Apple",
      imgSrc:
        "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      title: "The Timeless Charm of Kyoto",
      imgSrc:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Sunset Over Santorini",
      imgSrc:
        "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "Discovering Sydney",
      imgSrc:
        "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
    {
      title: "The Beauty of Cape Town",
      imgSrc:
        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
    },
  ];

  return (
    <div className="flex flex-col gap-5">
      <h1 className="text-xl font-bold">Other milestones</h1>
      {posts.map((post, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 border border-gray-200 rounded-md p-2"
        >
          <div className="">
            <img src={post.imgSrc} alt={post.title} className="rounded-md" />
          </div>
          <div>
            <div className="flex gap-2 text-sm">
              <span className="text-red-500 font-bold">Asia</span>|
              <span>09 June 2024</span>
            </div>
            <h1 className="text-lg font-bold">{post.title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recommend;
