import { Calendar, Tag, Search } from "lucide-react";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";
import { Link } from "react-router";
import { useTranslation } from "react-i18next";

export default function Newsroom() {
  const { t } = useTranslation();
  
  const news = [
    {
      id: 7,
      categoryKey: "newsroom.categoryLabels.newsRelease",
      titleKey: "newsroom.news7.title",
      excerptKey: "newsroom.news7.excerpt",
      dateKey: "newsroom.news7.date",
      tagKey: "newsroom.tags.employment",
    },
    {
      id: 3,
      categoryKey: "newsroom.categoryLabels.publicStatement",
      titleKey: "newsroom.news3.title",
      excerptKey: "newsroom.news3.excerpt",
      dateKey: "newsroom.news3.date",
      tagKey: "newsroom.tags.education",
    },
    {
      id: 4,
      categoryKey: "newsroom.categoryLabels.fieldReport",
      titleKey: "newsroom.news4.title",
      excerptKey: "newsroom.news4.excerpt",
      dateKey: "newsroom.news4.date",
      tagKey: "newsroom.tags.empowerment",
    },
    {
      id: 5,
      categoryKey: "newsroom.categoryLabels.newsRelease",
      titleKey: "newsroom.news5.title",
      excerptKey: "newsroom.news5.excerpt",
      dateKey: "newsroom.news5.date",
      tagKey: "newsroom.tags.health",
    },
    {
      id: 6,
      categoryKey: "newsroom.categoryLabels.councilUpdate",
      titleKey: "newsroom.news6.title",
      excerptKey: "newsroom.news6.excerpt",
      dateKey: "newsroom.news6.date",
      tagKey: "newsroom.tags.environment",
    },
  ];

  const categories = [
    { key: "newsroom.categories.all", value: "All" },
    { key: "newsroom.categories.newsReleases", value: "News Releases" },
    { key: "newsroom.categories.councilUpdates", value: "Council Updates" },
    { key: "newsroom.categories.publicStatements", value: "Public Statements" },
    { key: "newsroom.categories.fieldReports", value: "Field Reports" },
  ];
  
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-[#101828] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-4">{t('newsroom.title')}</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            {t('newsroom.subtitle')}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search & Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <Input
              type="search"
              placeholder={t('newsroom.searchPlaceholder')}
              className="pl-10"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.key}
                className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 transition whitespace-nowrap text-sm"
              >
                {t(category.key)}
              </button>
            ))}
          </div>
        </div>

        {/* News List */}
        <div className="space-y-6">
          {news.map((item) => (
            <Link
              key={item.id}
              to={`/newsroom/${item.id}`}
              className="block"
            >
              <article className="bg-white rounded-xl p-6 border hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="outline">{t(item.categoryKey)}</Badge>
                      <Badge className="bg-[#1B5E20]">
                        <Tag className="w-3 h-3 mr-1" />
                        {t(item.tagKey)}
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-[#003366] transition">
                      {t(item.titleKey)}
                    </h2>
                    <p className="text-gray-600 mb-4">{t(item.excerptKey)}</p>
                    <div className="flex items-center text-sm text-gray-500">
                      <Calendar className="w-4 h-4 mr-2" />
                      {t(item.dateKey)}
                    </div>
                  </div>
                  <div className="md:text-right">
                    <span className="text-[#003366] hover:text-[#1B5E20] font-semibold text-sm">
                      {t('newsroom.readFull')} →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-6 py-3 bg-[#003366] text-white rounded-lg hover:bg-[#004080] transition">
            {t('newsroom.loadMore')}
          </button>
        </div>
      </div>
    </div>
  );
}
