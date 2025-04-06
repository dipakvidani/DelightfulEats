import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AboutUs, ErrorPage, FaviouritePage, Home, LoginPage, RecipeDetails, SignUpPage } from './pages/index';
import { ContactSupport, ContactUs, ExploreRecipes, FAQs, Feedback, HealthTips, HelpCenter, NewAdditions, PrivacyPolicy, SubmitRecipe, TermsConditions, TopRated ,  } from './Footerpages/index';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/recipes/:id' element={<RecipeDetails />} />
          <Route path='/recipes/search/:query' element={<Home />} />
          <Route path='/recipes/cuisine/:cuisine' element={<Home />} />
          <Route path='/recipes/tag/:tag' element={<Home />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/sign-up' element={<SignUpPage />} />
          <Route path='/log-in' element={<LoginPage />} />
          <Route path='/favorites' element={<FaviouritePage />} />
          <Route path='/recipes' element={<Home />} />
          <Route path='/DelightfulEats' element={<Home />} />
          
          {/* Main Pages */}
          <Route path="/" element={<Home />} />
          <Route path="/explore-recipes" element={<ExploreRecipes />} />
          <Route path="/new-additions" element={<NewAdditions />} />
          <Route path="/top-rated" element={<TopRated />} />
          <Route path="/submit-recipe" element={<SubmitRecipe />} />
          <Route path="/health-tips" element={<HealthTips />} />
          <Route path="/contact-support" element={<ContactSupport />} />

          {/* Customer Service Pages */}
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/feedback" element={<Feedback />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />

          <Route path='*' element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
