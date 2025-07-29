import React, { useState } from "react";
import JobCard from "@/components/JobCard";
import { useJobs } from "@/hooks/useJobs";

const JobList = () => {
  const [page, setPage] = useState(1);
  const query = "developer"; // you can make this dynamic later
  const { jobs, loading, error } = useJobs(query, page);

  return (
    <div className="min-h-screen pb-4 px-4">
      {loading && (
        <p className="text-center text-xl font-medium dark:text-gray-50">
          Loading jobs...
        </p>
      )}
      {error && <p className="text-red-500 text-center">{error}</p>}

      <div className="flex mt-10 flex-wrap gap-6 justify-center">
        {jobs.map((job) => (
          <JobCard key={job.job_id} job={job} />
        ))}
      </div>

      <div className="text-center mt-10">
        {!loading && !error && (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-6 py-2 bg-[#1F2937]  text-white rounded"
          >
            Load More
          </button>
        )}
        {error && (
          <button
            onClick={() => setPage((prev) => prev + 1)}
            className="px-6 py-2 bg-[#1F2937]  text-white rounded"
          >
            Try again
          </button>
        )}
      </div>
    </div>
  );
};

export default JobList;
