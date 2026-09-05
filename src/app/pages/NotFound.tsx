import { Link } from "react-router";
import { Home, Search, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 bg-gray-50">
      <div className="text-center max-w-2xl">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#0059D2] mb-2">404</h1>
          <div className="h-1 w-24 bg-[#0059D2] mx-auto mb-6"></div>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved. Please check the URL or return to the homepage.
        </p>

        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            className="bg-[#0059D2] hover:bg-[#0059D2]/90 text-white px-8"
            size="lg"
            asChild
          >
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              {t('common.home')}
            </Link>
          </Button>
          
          <Button 
            variant="outline"
            className="border-[#0059D2] text-[#0059D2] hover:bg-[#0059D2] hover:text-white px-8"
            size="lg"
            asChild
          >
            <Link to="/newsroom">
              <Search className="w-4 h-4 mr-2" />
              Browse News
            </Link>
          </Button>
          
          <Button 
            variant="ghost"
            className="text-gray-600 hover:text-gray-900"
            size="lg"
            onClick={() => window.history.back()}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('common.back')}
          </Button>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-gray-500 mb-4">Popular pages:</p>
          <div className="flex flex-wrap gap-3 justify-center text-sm">
            <Link to="/about" className="text-[#0059D2] hover:underline">
              {t('header.about')}
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/social-initiatives" className="text-[#0059D2] hover:underline">
              {t('header.socialInitiatives')}
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/volunteer" className="text-[#0059D2] hover:underline">
              {t('header.volunteer')}
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/donate" className="text-[#0059D2] hover:underline">
              {t('header.donate')}
            </Link>
            <span className="text-gray-300">•</span>
            <Link to="/partnerships" className="text-[#0059D2] hover:underline">
              {t('header.partnerships')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}