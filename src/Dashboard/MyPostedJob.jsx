import React from "react";
import { useJobs } from "../contexts/JobContext";
import { PostCard } from "@/components";

const MyPostedJob = () => {
  const { jobs } = useJobs();
  return (
    <div className="flex mt-10 flex-wrap gap-6 justify-center">
      {jobs.map((job) => (
        <PostCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default MyPostedJob;
