const ThemesPage = () => {
  const { setSpecialty } = useThemeStore();
  const themes = ['default', 'theme1', 'theme2'];

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Select a Theme</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {themes.map((theme) => (
          <div key={theme} className={`p-6 rounded shadow bg-primary`}>
            <h2 className="text-white">{theme}</h2>
            <button
              className="mt-4 bg-white text-black px-4 py-2 rounded"
              onClick={() => setSpecialty(theme as any)}
            >
              Apply {theme}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

function useThemeStore(): { setSpecialty: (theme: string) => void } {
  const setSpecialty = (theme: string) => {
    console.log(`Theme applied: ${theme}`);
    // Here you can add logic to update the theme in a global state or context
  };

  return { setSpecialty };
}
// Removed duplicate implementation of useThemeStore

export default ThemesPage;