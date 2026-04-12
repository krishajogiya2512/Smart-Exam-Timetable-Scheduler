import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  History, 
  PlusCircle, 
  Settings, 
  Plus 
} from 'lucide-react';

const Vaishvi = () => {
    const [selectedTab, setSelectedTab] = useState('Dashboard');
    const [isHovered, setIsHovered] = useState(null);

    // Design Tokens
    const colors = {
        primary: '#4f46e5',
        primaryLight: '#f3f0ff',
        sidebarBg: '#ffffff',
        mainBg: '#fcfcfc',
        border: '#f3f4f6',
        textMain: '#111827',
        textMuted: '#6b7280',
        textLight: '#9ca3af',
        success: { bg: '#f0fdf4', text: '#166534' },
        error: { bg: '#fef2f2', text: '#991b1b' },
        neutral: { bg: '#f3f4f6', text: '#4b5563' }
    };

    const navItems = [
        { name: 'Dashboard', icon: LayoutDashboard, section: 'MAIN' },
        { name: 'History', icon: History, section: 'MAIN' },
        { name: 'Compare', icon: PlusCircle, section: 'MAIN' },
        { name: 'Constraints', icon: Settings, section: 'SETTINGS' }
    ];

    const recentTimetables = [
        { title: 'Semester 1 — 2024', date: 'Generated Apr 2, 2025', conflicts: '0 conflicts', courses: '4 courses', type: 'success' },
        { title: 'Mid-term — 2024', date: 'Generated Mar 10, 2025', conflicts: '2 conflicts', courses: '6 courses', type: 'error' },
        { title: 'Semester 2 — 2023', date: 'Generated Nov 5, 2024', conflicts: '0 conflicts', courses: '5 courses', type: 'success' }
    ];

    // Styles
    const styles = {
        container: {
            display: 'flex',
            height: '100vh',
            width: '100%',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
            color: colors.textMain,
            backgroundColor: colors.mainBg
        },
        sidebar: {
            width: '240px',
            borderRight: `1px solid ${colors.border}`,
            backgroundColor: colors.sidebarBg,
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '24px'
        },
        sidebarHeader: {
            padding: '0 24px 32px 24px',
        },
        logo: {
            fontSize: '18px',
            fontWeight: '700',
            marginBottom: '4px',
            color: '#1f2937'
        },
        subtitle: {
            fontSize: '13px',
            color: colors.textMuted
        },
        navSectionTitle: {
            fontSize: '11px',
            fontWeight: '600',
            color: colors.textLight,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: '16px 24px 8px 24px'
        },
        navItem: (active, hovered) => ({
            display: 'flex',
            alignItems: 'center',
            padding: '10px 24px',
            cursor: 'pointer',
            backgroundColor: active ? colors.primaryLight : (hovered ? '#f9fafb' : 'transparent'),
            color: active ? colors.primary : (hovered ? colors.textMain : colors.textMuted),
            transition: 'all 0.2s ease',
            borderRight: active ? `2px solid ${colors.primary}` : 'none'
        }),
        navIcon: (active) => ({
            marginRight: '12px',
            color: active ? colors.primary : colors.textLight,
            width: '18px',
            height: '18px'
        }),
        navText: {
            fontSize: '14px',
            fontWeight: '500'
        },
        main: {
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto'
        },
        header: {
            padding: '40px 48px 24px 48px',
            backgroundColor: 'transparent',
            textAlign: 'left'
        },
        headerTitle: {
            fontSize: '24px',
            fontWeight: '700',
            marginBottom: '8px',
            color: '#111827'
        },
        headerSub: {
            fontSize: '14px',
            color: colors.textMuted
        },
        content: {
            flex: 1,
            padding: '0 48px 48px 48px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start'
        },
        emptyState: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            maxWidth: '100%',
            width: '100%',
            marginTop: '60px',
            marginBottom: '80px'
        },
        plusCircle: {
            width: '72px',
            height: '72px',
            borderRadius: '50%',
            border: `2px dashed ${colors.primary}40`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: `${colors.primary}08`,
            marginBottom: '24px'
        },
        createTitle: {
            fontSize: '18px',
            fontWeight: '700',
            marginBottom: '12px'
        },
        createDesc: {
            fontSize: '15px',
            color: colors.textMuted,
            lineHeight: '1.6',
            marginBottom: '32px'
        },
        separator: {
            display: 'flex',
            alignItems: 'center',
            width: '240px',
            margin: '0 auto 32px auto'
        },
        sepLine: {
            flex: 1,
            height: '1px',
            backgroundColor: colors.border
        },
        sepText: {
            margin: '0 16px',
            fontSize: '12px',
            color: colors.textLight,
            textTransform: 'lowercase'
        },
        btn: {
            padding: '10px 24px',
            borderRadius: '8px',
            border: `1px solid ${colors.primary}60`,
            backgroundColor: 'white',
            color: colors.primary,
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
        },
        recentSection: {
            width: '100%',
            marginTop: 'auto',
            paddingTop: '64px'
        },
        recentTitle: {
            fontSize: '12px',
            fontWeight: '600',
            color: colors.textLight,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            marginBottom: '16px'
        },
        grid: {
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '24px',
            width: '100%'
        },
        card: {
            backgroundColor: 'white',
            borderRadius: '12px',
            padding: '20px',
            border: `1px solid ${colors.border}`,
            transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            cursor: 'pointer'
        },
        cardTitle: {
            fontSize: '15px',
            fontWeight: '700',
            marginBottom: '4px'
        },
        cardDate: {
            fontSize: '13px',
            color: colors.textLight,
            marginBottom: '16px'
        },
        pillContainer: {
            display: 'flex',
            gap: '8px'
        },
        pill: (type) => ({
            padding: '4px 10px',
            borderRadius: '6px',
            fontSize: '12px',
            fontWeight: '500',
            backgroundColor: colors[type].bg,
            color: colors[type].text,
            border: `1px solid ${colors[type].text}15`
        })
    };

    return (
        <div style={styles.container}>
            {/* Sidebar */}
            <div style={styles.sidebar}>
                <div style={styles.sidebarHeader}>
                    <div style={styles.logo}>ExamScheduler</div>
                    <div style={styles.subtitle}>Admin panel</div>
                </div>

                <div style={styles.navSectionTitle}>Main</div>
                {navItems.filter(i => i.section === 'MAIN').map(item => (
                    <div 
                        key={item.name}
                        style={styles.navItem(selectedTab === item.name, isHovered === item.name)}
                        onClick={() => setSelectedTab(item.name)}
                        onMouseEnter={() => setIsHovered(item.name)}
                        onMouseLeave={() => setIsHovered(null)}
                    >
                        <item.icon style={styles.navIcon(selectedTab === item.name)} />
                        <span style={styles.navText}>{item.name}</span>
                    </div>
                ))}

                <div style={styles.navSectionTitle}>Settings</div>
                {navItems.filter(i => i.section === 'SETTINGS').map(item => (
                    <div 
                        key={item.name}
                        style={styles.navItem(selectedTab === item.name, isHovered === item.name)}
                        onClick={() => setSelectedTab(item.name)}
                        onMouseEnter={() => setIsHovered(item.name)}
                        onMouseLeave={() => setIsHovered(null)}
                    >
                        <item.icon style={styles.navIcon(selectedTab === item.name)} />
                        <span style={styles.navText}>{item.name}</span>
                    </div>
                ))}
            </div>

            {/* Main Content */}
            <div style={styles.main}>
                <div style={styles.header}>
                    <div style={styles.headerTitle}>{selectedTab}</div>
                    <div style={styles.headerSub}>Welcome back — manage your exam timetables</div>
                </div>

                <div style={styles.content}>
                    <div style={styles.emptyState}>
                        <div style={styles.plusCircle}>
                            <Plus size={32} color={colors.primary} />
                        </div>
                        <div style={styles.createTitle}>Create a new timetable</div>
                        <div style={styles.createDesc}>
                            Click the + button or use the sidebar to start scheduling a new exam timetable
                        </div>
                        
                        <div style={styles.separator}>
                            <div style={styles.sepLine}></div>
                            <span style={styles.sepText}>or</span>
                            <div style={styles.sepLine}></div>
                        </div>

                        <button 
                            style={{
                                ...styles.btn,
                                transform: isHovered === 'gen-btn' ? 'translateY(-1px)' : 'none',
                                boxShadow: isHovered === 'gen-btn' ? '0 4px 6px -1px rgba(0,0,0,0.1)' : 'none',
                                borderColor: isHovered === 'gen-btn' ? colors.primary : `${colors.primary}60`
                            }}
                            onMouseEnter={() => setIsHovered('gen-btn')}
                            onMouseLeave={() => setIsHovered(null)}
                        >
                            Generate timetable
                        </button>
                    </div>

                    {/* Recent Timetables */}
                    <div style={styles.recentSection}>
                        <div style={styles.recentTitle}>Recent Timetables</div>
                        <div style={styles.grid}>
                            {recentTimetables.map((t, idx) => (
                                <div 
                                    key={idx} 
                                    style={{
                                        ...styles.card,
                                        boxShadow: isHovered === `card-${idx}` ? '0 10px 15px -3px rgba(0, 0, 0, 0.05)' : 'none',
                                        transform: isHovered === `card-${idx}` ? 'translateY(-2px)' : 'none'
                                    }}
                                    onMouseEnter={() => setIsHovered(`card-${idx}`)}
                                    onMouseLeave={() => setIsHovered(null)}
                                >
                                    <div style={styles.cardTitle}>{t.title}</div>
                                    <div style={styles.cardDate}>{t.date}</div>
                                    <div style={styles.pillContainer}>
                                        <div style={styles.pill(t.type)}>{t.conflicts}</div>
                                        <div style={styles.pill('neutral')}>{t.courses}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Vaishvi;
