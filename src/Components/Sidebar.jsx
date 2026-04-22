export default function Sidebar() {
  const LayoutDashboard = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>;
  const History = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l4 2"/></svg>;
  const ArrowLeftRight = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M8 3 4 7l4 4"/><path d="M4 7h16"/><path d="m16 21 4-4-4-4"/><path d="M20 17H4"/></svg>;
  const Settings = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/></svg>;
  const Sliders = ({ className }) => <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><line x1="4" x2="20" y1="21" y2="14"/><line x1="4" x2="20" y1="10" y2="3"/><line x1="12" x2="12" y1="21" y2="12"/><line x1="8" x2="8" y1="12" y2="3"/></svg>;

  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 flex flex-col py-6 shadow-sm">
      <div className="px-6 mb-8">
        <h1 className="text-xl font-bold text-gray-900 tracking-tight">ExamScheduler</h1>
        <p className="text-sm font-medium text-gray-400">Admin panel</p>
      </div>

      <div className="flex flex-col gap-1 px-4 mb-8">
        <div className="text-xs font-semibold text-gray-400 mb-2 px-2 tracking-wider">MAIN</div>
        
        <button className="flex items-center gap-3 w-full px-3 py-2 bg-indigo-50 text-indigo-700 rounded-xl font-medium transition-colors">
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </button>
        
        <button className="flex items-center gap-3 w-full px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-colors">
          <History className="w-5 h-5" />
          History
        </button>
        
        <button className="flex items-center gap-3 w-full px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-colors">
          <ArrowLeftRight className="w-5 h-5" />
          Compare
        </button>
      </div>

      <div className="flex flex-col gap-1 px-4">
        <div className="text-xs font-semibold text-gray-400 mb-2 px-2 tracking-wider">SETTINGS</div>
        
        <button className="flex items-center gap-3 w-full px-3 py-2 text-gray-500 hover:text-gray-900 hover:bg-gray-50 rounded-xl font-medium transition-colors">
          <Sliders className="w-5 h-5" />
          Constraints
        </button>
      </div>
    </div>
  );
}
