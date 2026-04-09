import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import AIPage from './pages/AIPage';
import UseCasesPage from './pages/UseCasesPage';
import EnterpriseSearchPage from './pages/EnterpriseSearchPage';
import AuthPage from './pages/AuthPage';
import AIMeetingNotesPage from './pages/AIMeetingNotesPage';
import DocsPage from './pages/DocsPage';
import WikisPage from './pages/WikisPage';
import ProjectsPage from './pages/ProjectsPage';
import SitesPage from './pages/SitesPage';
import AIUseCasesPage from './pages/AIUseCasesPage';

import IntegrationsPage from './pages/IntegrationsPage';
import WebClipperPage from './pages/WebClipperPage';
import MailPage from './pages/MailPage';
import CalendarPage from './pages/CalendarPage';
import EnterprisePage from './pages/EnterprisePage';
import PricingPage from './pages/PricingPage';
import ContactSalesPage from './pages/ContactSalesPage';
import EngineeringProductPage from './pages/EngineeringProductPage';
import DesignPage from './pages/DesignPage';
import MarketingPage from './pages/MarketingPage';
import ITPage from './pages/ITPage';
import StartupsPage from './pages/StartupsPage';
import SMBsPage from './pages/SMBsPage';
import EducationPage from './pages/EducationPage';
import NotionAcademyPage from './pages/NotionAcademyPage';
import CustomerStoriesPage from './pages/CustomerStoriesPage';
import BlogPage from './pages/BlogPage';
import PartnersPage from './pages/PartnersPage';
import DevelopersPage from './pages/DevelopersPage';
import TemplatesPage from './pages/TemplatesPage';
import SecurityPage from './pages/SecurityPage';
import ConsultantsPage from './pages/ConsultantsPage';
import OnboardingPage from './pages/OnboardingPage';
import DashboardPage from './pages/DashboardPage';
import MeetingsPage from './pages/MeetingsPage';
import NotionAIPage from './pages/NotionAIPage';
import ScrollToTop from './components/ScrollToTop';
// Main App component
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/product/ai" element={<AIPage />} />
          <Route path="/product/docs" element={<DocsPage />} />
          <Route path="/product/wikis" element={<WikisPage />} />
          <Route path="/product/projects" element={<ProjectsPage />} />
          <Route path="/product/sites" element={<SitesPage />} />
          <Route path="/product/ai/use-cases" element={<AIUseCasesPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/product/integrations" element={<IntegrationsPage />} />
          <Route path="/product/web-clipper" element={<WebClipperPage />} />
          <Route path="/product/mail" element={<MailPage />} />
          <Route path="/product/calendar" element={<CalendarPage />} />
          <Route path="/enterprise" element={<EnterprisePage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/contact-sales" element={<ContactSalesPage />} />
          <Route path="/use-cases" element={<UseCasesPage />} />
          <Route path="/product/engineering-product" element={<EngineeringProductPage />} />
          <Route path="/product/design" element={<DesignPage />} />
          <Route path="/templates/marketing" element={<MarketingPage />} />
          <Route path="/templates/it" element={<ITPage />} />
          <Route path="/startups" element={<StartupsPage />} />
          <Route path="/smbs" element={<SMBsPage />} />
          <Route path="/product/education" element={<EducationPage />} />
          <Route path="/customers" element={<CustomerStoriesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/partners" element={<PartnersPage />} />
          <Route path="/developers" element={<DevelopersPage />} />
          <Route path="/templates" element={<TemplatesPage />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/consultants" element={<ConsultantsPage />} />
          <Route path="/academy" element={<NotionAcademyPage />} />
          <Route path="/enterprise-search" element={<EnterpriseSearchPage />} />
          <Route path="/product/ai-meeting-notes" element={<AIMeetingNotesPage />} />
          <Route path="/onboarding" element={<OnboardingPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/meetings" element={<MeetingsPage />} />
          <Route path="/notion-ai" element={<NotionAIPage />} />
          <Route path="/login" element={<AuthPage />} />
          <Route path="/signup" element={<AuthPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
