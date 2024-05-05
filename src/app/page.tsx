import MenuIcon from '@/components/icons/MenuIcon';
import SearchIcon from '@/components/icons/SearchIcon';

const Home = () => {
  return (
    <main>
      <h1 className="title-lg font-semibold">안녕하세요.</h1>
      <div className="flex gap-2 text-[1.5rem]">
        <SearchIcon />
        <MenuIcon />
      </div>
    </main>
  );
};

export default Home;
