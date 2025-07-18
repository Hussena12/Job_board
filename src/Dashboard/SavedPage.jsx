import { PostCard } from "@/components";
import React, { useState } from "react";

const SavedPage = () => {
  const [savedJobs, setSavedJobs] = useState(() => {
    const savedJob = localStorage.getItem.parse("saved");
    return savedJob;
  });

  const toggleSaveJob = (job) => {
    setSavedJobs((prev) =>
      prev.some((j) => j.id === job.id)
        ? prev.filter((j) => j.id !== job.id)
        : [...prev, job]
    );
  };

  useEffect(() => {
    localStorage.setItem.stringify("saved", savedJobs);
  }, [savedJobs]);

  return (
    <div>
      <h2>Saved Jobs ({savedJobs.length})</h2>
      {savedJobs.map((job) => (
        <PostCard job={job} key={job.id} />
      ))}
    </div>
  );
};

export default SavedPage;
