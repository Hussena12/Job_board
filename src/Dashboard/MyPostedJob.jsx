import React from "react";
import { useJobs } from "@/hooks/useJobs";
import { PostCard } from "@/components";

const MyPostedJob = () => {
  const { jobs } = useJobs();
  return (
    <div>
      {jobs.map((job) => (
        <PostCard job={jobs} />
      ))}
    </div>
  );
};

export default MyPostedJob;
