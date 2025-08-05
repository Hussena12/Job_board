import { PostCard } from "@/components";
import { useSavedJobs } from "@/contexts/useSavedProvider";

const SavedPage = () => {
  const { savedJobs } = useSavedJobs();
  console.log(savedJobs);
  return (
    <div>
      <div className="min-h-screen pt-12">
        <div className="flex mt-10 flex-wrap  gap-4 justify-center">
          {savedJobs.map((job) => (
            <PostCard job={job} key={job.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SavedPage;
