import React from 'react';
import bannerImage from '../../assets/socialmedia.jpg';
import bg from '../../assets/dark-background.jpg';

export default function SocialMediaBanner() {
  return (
    <div className="min-h-screen w-full mx-auto" style={{
            backgroundImage: `url(${bg})`,
            height: '100vh',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}>
      <div className="flex max-w-10/12 py-40 mx-auto justify-between items-center gap-6 md:gap-12 flex-col md:flex-row">
        <div className='flex-1'>
          <img src={bannerImage} className="w-full h-full rounded-md" alt="Banner Images" />
        </div>
        <div className='flex-1'>
          <h3 className="text-2xl text-white font-medium">
            FOR ALL YOUR SEO AND ONLINE MARKETING NEEDS
          </h3>
          <p className="text-sm md:text-base text-start py-5 text-gray-300">
            Maximize your online presence and drive more traffic to your website
            with our comprehensive social media marketing solutions.
          </p>
          <div className="collapse collapse-arrow border border-base-300">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title text-white font-semibold">
              How do I create an account?
            </div>
            <div className="collapse-content text-gray-300 text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-white font-semibold">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-gray-300 text-sm">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>
          <div className="collapse collapse-arrow border border-base-300">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title text-white font-semibold">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-gray-300 text-sm">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
