const menuIconPath = '/assets/icons/header-menu-icon.png';

export default function Header({ onMenuClick, className = '' }) {
  return (
    <header className={`flex items-center justify-end gap-space-4 ${className}`}>
      <button
        className="flex items-center gap-space-4 text-body font-regular text-text-primary"
        type="button"
        aria-label="메뉴 열기"
        onClick={onMenuClick}
      >
        <span>MENU</span>
        <span className="h-menu-icon-height w-menu-icon-width overflow-hidden" aria-hidden="true">
          <img className="h-full w-full object-contain" src={menuIconPath} alt="" />
        </span>
      </button>
    </header>
  );
}
