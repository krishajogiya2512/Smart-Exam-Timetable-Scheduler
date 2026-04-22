export default function CreateTimetableCard() {
  const Plus = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M5 12h14"/><path d="M12 5v14"/></svg>;

  return (
    <div className="mb-10 w-full bg-white border border-gray-100 rounded-2xl p-10 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
      <button className="w-16 h-16 rounded-full bg-indigo-50 flex items-center justify-center mb-5 hover:bg-indigo-100 transition-colors hover:scale-105 transform duration-200 cursor-pointer">
        <Plus className="w-8 h-8 text-indigo-600" />
      </button>
      
      <h2 className="text-xl font-bold text-gray-900 mb-2">Create a new timetable</h2>
      <p className="text-gray-500 max-w-sm mb-6 text-sm font-medium">
        Click the + button or use the sidebar to start scheduling a new exam timetable
      </p>
      
      <div className="flex items-center justify-center w-full max-w-sm mb-6">
        <div className="h-px bg-gray-200 flex-1"></div>
        <span className="px-4 text-sm text-gray-400 font-bold uppercase tracking-wider">or</span>
        <div className="h-px bg-gray-200 flex-1"></div>
      </div>
      
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-6 rounded-xl transition-all shadow-sm shadow-indigo-200 hover:shadow-indigo-300 hover:-translate-y-0.5 active:translate-y-0">
        Generate timetable
      </button>
    </div>
  );
}
