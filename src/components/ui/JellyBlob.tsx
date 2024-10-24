const JellyBlob = () => {
  return (
    <div className="absolute w-full h-full -z-1 translate-x-[85%] translate-y-[75%] backdrop-blur-lg opacity-30">
      <div
        className="absolute w-64 h-64 bg-blue-500/40 rounded-[60%] blur-xl
          animate-blob-stretch-1 filter mix-blend-screen"
      ></div>
      <div
        className="absolute w-64 h-64 bg-blue-500/40 rounded-[60%] blur-xl
          animate-blob-stretch-2 filter mix-blend-screen"
      ></div>
      <div
        className="absolute w-64 h-64 bg-blue-500/40 rounded-[60%] blur-xl
          animate-blob-stretch-3 filter mix-blend-screen"
      ></div>
    </div>
  );
};

export default JellyBlob;
