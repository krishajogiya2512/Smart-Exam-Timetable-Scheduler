export default function TimetableCard({ title, date, conflicts, courses }) {
  const CalendarDays = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>;
  const BookOpen = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>;
  const CircleAlert = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>;
  const CircleCheck = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>;

  const hasConflicts = conflicts > 0;

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 cursor-pointer">
      <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
      
      <div className="flex items-center text-sm font-medium text-gray-500 mb-6">
        <CalendarDays className="w-4 h-4 mr-2" />
        <span>Generated {date}</span>
      </div>
      
      <div className="flex items-center gap-3">
        <div className={`flex items-center px-3 py-1.5 rounded-lg text-xs font-bold ${
          hasConflicts 
            ? 'bg-red-50 text-red-600' 
            : 'bg-emerald-50 text-emerald-600'
        }`}>
          {hasConflicts ? (
            <CircleAlert className="w-4 h-4 mr-1.5" />
          ) : (
            <CircleCheck className="w-4 h-4 mr-1.5" />
          )}
          {conflicts} Conflicts
        </div>
        
        <div className="flex items-center px-3 py-1.5 rounded-lg bg-gray-50 text-gray-600 text-xs font-bold">
          <BookOpen className="w-4 h-4 mr-1.5" />
          {courses} Courses
        </div>
      </div>
    </div>
  );
}
