const Skeleton = () => {
  return (
    <div className="skeleton-container">
      {Array.from({ length: 8 }).map((_, idx) => (
        <div key={idx} className="skeleton-item">
          <div className="skeleton-box skeleton-image mb-2"></div>
          <div className="skeleton-box skeleton-line1"></div>
          <div className="skeleton-box skeleton-line2 mt-2"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
