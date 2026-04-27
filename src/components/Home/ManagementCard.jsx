import React from 'react';

export default function ManagementCard() {
  return (
    <section className="h-full md:min-h-screen px-5 py-20 md:py-40 bg-[#022119]">
      <main className="flex flex-col md:flex-row justify-between items-center gap-5">
        <div className="px-4 border border-blue-300 rounded-lg py-5 bg-black">
          <img
            src="https://i.ibb.co.com/rRKQYMFm/article-evaluation-editing-internet-blogging-content-management-search-engine-optimization-seo-marke.avif"
            className="w-32 h-32 object-cover rounded-full border mx-auto border-blue-600"
            alt="Content Submission"
          />
          <div>
            <h3 className="text-xl text-white text-center py-4">
              Content Submission
            </h3>
            <p className="text-sm md:text-base text-center text-gray-300">
              Assertively actualize client-based paradigms with premium sources.
              Conveniently initiate ethical catalysts for change before
              multidisciplinary best practices.
            </p>
          </div>
        </div>
        <div className="px-4 border border-blue-300 rounded-lg py-5 bg-black">
          <img
            src="https://i.ibb.co.com/JjYKCDbq/untitled-design-8-62fa46683a476-sej.jpg"
            className="w-32 h-32 object-cover rounded-full border mx-auto border-blue-600"
            alt="Conversion Rate"
          />
          <div>
            <h3 className="text-xl text-white text-center py-4">
              Conversion Rate
            </h3>
            <p className="text-sm md:text-base text-center text-gray-300 ">
              Assertively actualize client-based paradigms with premium sources.
              Conveniently initiate ethical catalysts for change before
              multidisciplinary best practices.
            </p>
          </div>
        </div>
        <div className="px-4 border border-blue-300 rounded-lg py-5 bg-black">
          <img
            src="https://i.ibb.co.com/Kj7W5MN0/360-F-604845183-o-OSW2-TTPt-WMC5v-Nk-IDiz-YEy-R5cq-Yt-Yt-Z.jpg"
            className="w-32 h-32 object-cover rounded-full border mx-auto border-blue-600"
            alt="Real-Time Analytics"
          />
          <div>
            <h3 className="text-xl text-center text-white py-4">
              Real-Time Analytics
            </h3>
            <p className="text-sm md:text-base text-center text-gray-300">
              Assertively actualize client-based paradigms with premium sources.
              Conveniently initiate ethical catalysts for change before
              multidisciplinary best practices.
            </p>
          </div>
        </div>
        <div className="px-4 border border-blue-300 rounded-lg py-5 bg-black">
          <img
            src="https://i.ibb.co.com/Lhdv0hgZ/still-b025ae45ad8f4edc5b2bffb7c49749e2.jpg"
            className="w-32 h-32 object-cover rounded-full border mx-auto border-blue-600"
            alt="Online Management"
          />
          <div>
            <h3 className="text-xl text-center text-white py-4">
              Online Management
            </h3>
            <p className="text-sm md:text-base text-center text-gray-300">
              Assertively actualize client-based paradigms with premium sources.
              Conveniently initiate ethical catalysts for change before
              multidisciplinary best practices.
            </p>
          </div>
        </div>
      </main>
    </section>
  )
}

