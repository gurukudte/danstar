"use client";

export function NavItem({
  icon,
  label,
  active,
  onClickAction,
  sidebarOpen,
}: {
  icon: React.ReactNode;
  label: string;
  active: boolean;
  onClickAction: () => void;
  sidebarOpen: boolean;
}) {
  return (
    <li>
      <button
        onClick={onClickAction}
        className={`flex items-center w-full p-2 rounded-lg transition-colors ${
          active
            ? "bg-muted-foreground text-background dark:bg-secondary dark:text-background"
            : "text-secondary-foreground hover:bg-secondary  dark:hover:bg-muted-foreground cursor-pointer"
        }`}
      >
        <span className="flex items-center justify-center">{icon}</span>
        {sidebarOpen && <span className="ml-3">{label}</span>}
      </button>
    </li>
  );
}
