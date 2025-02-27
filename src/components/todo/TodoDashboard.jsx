import { FileCheck, LaptopMinimal, Video } from "lucide-react";

import { Link } from "react-router-dom";
import { useFilterParams } from "../../hooks/useFilterParams";
import { useTodoQuery } from "../../hooks/useTodoQuery";

const TodoDashboard = () => {
  const selectedFilter = useFilterParams();

  const { data: all } = useTodoQuery();
  const { data: completed } = useTodoQuery("completed");
  const { data: pending } = useTodoQuery("pending");

  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">Quick Access</h2>

      <ul className="flex flex-row flex-wrap gap-4">
        <li className="flex-[2]">
          <Link
            to="/"
            className={`flex flex-col w-full h-[184px] bg-[#e6582b] justify-between text-white p-5 rounded-2xl cursor-pointer ${
              !selectedFilter && "underline"
            }`}
          >
            <div>
              <FileCheck />
            </div>
            <p className="text-xl font-semibold">
              {all?.length} <br />{" "}
              <span className="text-base font-normal">All Tasks</span>
            </p>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            to="?filter=completed"
            className={`flex flex-col w-full h-[184px] bg-[#582be6] justify-between text-white p-5 rounded-2xl cursor-pointer ${
              selectedFilter === "completed" && "underline"
            }`}
          >
            <div>
              <LaptopMinimal />
            </div>
            <p className="text-xl font-semibold">
              {completed?.length} <br />{" "}
              <span className="text-base font-normal">Completed Tasks</span>
            </p>
          </Link>
        </li>
        <li className="flex-1">
          <Link
            className={`flex flex-col w-full h-[184px] bg-[#242424] justify-between text-white p-5 rounded-2xl cursor-pointer ${
              selectedFilter === "pending" && "underline"
            }`}
            to="?filter=pending"
          >
            <div>
              <Video />
            </div>
            <p className="text-xl font-semibold">
              {pending?.length} <br />{" "}
              <span className="text-base font-normal">Pending Tasks</span>
            </p>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default TodoDashboard;
