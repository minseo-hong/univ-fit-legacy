import NoteIcon from '@/components/ui/icon/NoteIcon';
import Image from 'next/image';
import Link from 'next/link';

const ArticleListPage = () => {
  const articleList: {
    id: number;
    title: string;
    description: string;
    imageSrc: string;
  }[] = [
    {
      id: 1,
      title: '장학재단 소득분위 산정은 어떻게 이뤄질까?',
      description: '미리보기 미리보기 미리보기 미리보기 미리보기 미리보기',
      imageSrc: '/images/placeholders/placeholder-image.png',
    },
    {
      id: 2,
      title: '장학재단 소득분위 산정은 어떻게 이뤄질까?',
      description: '미리보기 미리보기 미리보기 미리보기 미리보기 미리보기',
      imageSrc: '/images/placeholders/placeholder-image.png',
    },
    {
      id: 3,
      title: '장학재단 소득분위 산정은 어떻게 이뤄질까?',
      description: '미리보기 미리보기 미리보기 미리보기 미리보기 미리보기',
      imageSrc: '/images/placeholders/placeholder-image.png',
    },
    {
      id: 4,
      title: '장학재단 소득분위 산정은 어떻게 이뤄질까?',
      description: '미리보기 미리보기 미리보기 미리보기 미리보기 미리보기',
      imageSrc: '/images/placeholders/placeholder-image.png',
    },
  ];

  return (
    <div className="pb-16">
      <header>
        <section>
          <Link
            href="#"
            className="relative block aspect-[14/10] w-full"
            style={{
              background:
                'linear-gradient(180deg, rgba(0, 0, 0, 0.00) 28.28%, rgba(0, 0, 0, 0.40) 100%), url(/images/placeholders/placeholder-image.png) lightgray 50% / cover no-repeat',
            }}
          >
            <div className="absolute bottom-6 flex flex-col gap-2 px-6">
              <h2 className="title-md-300 line-clamp-1 text-gray-00">
                건강보험료 자격득실확인서 발급 방법은?
              </h2>
              <p className="text-md-200 line-clamp-1 text-gray-00">
                건강보험료 자격득실 확인서 발급 방법 알아보기!
              </p>
            </div>
          </Link>
        </section>
        <section>
          <div className="flex items-center gap-1 px-6 pb-2 pt-6">
            <span className="text-[1.5rem]">
              <NoteIcon />
            </span>
            <h1 className="title-md-300 text-gray-90">아티클</h1>
          </div>
        </section>
      </header>
      <main>
        <ul>
          {articleList.map((article) => (
            <li key={article.id}>
              <Link href="#" className="flex items-center gap-4 px-6 py-4">
                <div className="relative aspect-square w-[5rem] overflow-hidden rounded-lg">
                  <Image src={article.imageSrc} alt={article.title} fill />
                </div>
                <div className="flex min-w-0 flex-col gap-2">
                  <h2 className="text-lg-200 line-clamp-2 text-gray-90">
                    {article.title}
                  </h2>
                  <p className="text-md-200 line-clamp-1 text-gray-40">
                    {article.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ArticleListPage;
