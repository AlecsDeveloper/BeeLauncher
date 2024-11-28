import SectionsBar from './components/SectionsBar';
import MainView from './components/MainView';
import Header from './components/Header';

export default function App() {
  return (
    <div className="h-screen w-screen bg-ore-obsidian-black select-none">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex h-[calc(100%-47px)] mt-[7px]">
        <SectionsBar />
        <MainView />

      </div>
    </div>
  );
}
