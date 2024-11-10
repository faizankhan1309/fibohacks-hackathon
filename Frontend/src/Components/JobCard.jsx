export const JobCard = ({ jobs }) => {
    return (
      <div className="space-y-5 max-w-lg bg-white p-5 rounded-lg drop-shadow-xl">

        <div className="flex justify-between">
          <div className="text-left">
            <p className="text-sm text-gray-500">APPLY BEFORE</p>
            <p className="text-blue-950">{jobs.applyDate}</p>
          </div>
          <div className="text-left">
            <p className="text-sm text-gray-500">JOB TYPE</p>
            <p className="text-blue-950">{jobs.jobType}</p>
          </div>
        </div>

        <div className="flex flex-col items-start space-y-2">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-yellow-500 rounded-full"></div>
            <h1 className="text-2xl font-semibold text-blue-900">{jobs.title}</h1>
          </div>
          <p className="text-purple-900">{jobs.desc}</p>
        </div>

        <div className="flex justify-between">
          <p>{jobs.location}</p>
          <p className="underline cursor-pointer">More Details</p>
        </div>
      </div>
    );
  };
  