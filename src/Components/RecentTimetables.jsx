import TimetableCard from './TimetableCard';

export default function RecentTimetables() {
  const timetables = [
    {
      id: 1,
      title: "Semester 1 — 2024",
      date: "Oct 24, 2024",
      conflicts: 0,
      courses: 42
    },
    {
      id: 2,
      title: "Mid-term — 2024",
      date: "Sep 12, 2024",
      conflicts: 2,
      courses: 38
    },
    {
      id: 3,
      title: "Semester 2 — 2023",
      date: "Mar 15, 2023",
      conflicts: 0,
      courses: 45
    }
  ];

  return (
    <div className="w-full">
      <h3 className="text-xs font-bold text-gray-400 mb-4 tracking-wider uppercase">Recent Timetables</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {timetables.map((tt) => (
          <TimetableCard 
            key={tt.id}
            title={tt.title}
            date={tt.date}
            conflicts={tt.conflicts}
            courses={tt.courses}
          />
        ))}
      </div>
    </div>
  );
}
