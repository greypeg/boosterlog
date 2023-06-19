export const FadedCard: React.FC<{ children: React.ReactNode; }> = ({ children }) => {

    return (
        <div className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 cursor-pointer">
            {children}
        </div>
    );
}; 