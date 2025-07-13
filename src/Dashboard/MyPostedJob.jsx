import React from "react";
import { useJobs } from "../contexts/JobContext";
import { PostCard } from "@/components";
import { Footer } from "@/layout";

const MyPostedJob = () => {
  const { jobs } = useJobs();
  return (
    <div>
      <div className="min-h-screen">
        <div className="flex mt-10 flex-wrap  gap-6 justify-center">
          {jobs.map((job) => (
            <PostCard key={job.id} job={job} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MyPostedJob;
