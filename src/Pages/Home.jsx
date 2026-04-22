import Sidebar from "../Components/Sidebar";
import Header from "../Components/Header";
import CreateTimetableCard from "../Components/CreateTimetableCard";
import RecentTimetables from "../Components/RecentTimetables";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-6">
        <Header />
        <CreateTimetableCard />
        <RecentTimetables />
      </div>
    </div>
  );
}
