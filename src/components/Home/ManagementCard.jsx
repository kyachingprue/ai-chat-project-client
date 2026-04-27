import React from 'react'

export default function ManagementCard() {
  const cards = [
    {
      id: 1,
      title: 'Content Submission',
      image:
        'https://i.ibb.co.com/rRKQYMFm/article-evaluation-editing-internet-blogging-content-management-search-engine-optimization-seo-marke.avif',
      desc: 'Assertively actualize client-based paradigms with premium sources. Conveniently initiate ethical catalysts for change before multidisciplinary best practices.'
    },
    {
      id: 2,
      title: 'Conversion Rate',
      image:
        'https://i.ibb.co.com/JjYKCDbq/untitled-design-8-62fa46683a476-sej.jpg',
      desc: 'Assertively actualize client-based paradigms with premium sources. Conveniently initiate ethical catalysts for change before multidisciplinary best practices.'
    },
    {
      id: 3,
      title: 'Real-Time Analytics',
      image:
        'https://i.ibb.co.com/Kj7W5MN0/360-F-604845183-o-OSW2-TTPt-WMC5v-Nk-IDiz-YEy-R5cq-Yt-Yt-Z.jpg',
      desc: 'Assertively actualize client-based paradigms with premium sources. Conveniently initiate ethical catalysts for change before multidisciplinary best practices.'
    },
    {
      id: 4,
      title: 'Online Management',
      image:
        'https://i.ibb.co.com/Lhdv0hgZ/still-b025ae45ad8f4edc5b2bffb7c49749e2.jpg',
      desc: 'Assertively actualize client-based paradigms with premium sources. Conveniently initiate ethical catalysts for change before multidisciplinary best practices.'
    }
  ]

  return (
    <section className="w-full min-h-screen px-5 md:px-12 py-20 bg-linear-to-br from-[#07193ff1] via-[#03261d] to-[#01110d]">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-5xl font-bold text-white">
          Smart Management Services
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Powerful digital solutions designed to grow your business with modern
          strategy and smart performance tools.
        </p>
      </div>

      {/* Cards */}
      <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {cards.map(card => (
          <div
            key={card.id}
            className="group relative overflow-hidden rounded-2xl border border-cyan-500/20 bg-white/5 backdrop-blur-lg p-6 transition-all duration-700 hover:-translate-y-4 hover:shadow-[0_20px_50px_rgba(6,182,212,0.25)] hover:border-cyan-400"
          >
            {/* Glow effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-linear-to-br from-cyan-500/10 via-transparent to-blue-500/10"></div>

            {/* Image */}
            <div className="relative z-10">
              <img
                src={card.image}
                alt={card.title}
                className="w-28 h-28 mx-auto rounded-full object-cover border-4 border-cyan-500/30 group-hover:scale-110 group-hover:rotate-3 transition duration-700"
              />
            </div>

            {/* Content */}
            <div className="relative z-10 mt-6 text-center">
              <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition duration-500">
                {card.title}
              </h3>

              <p className="text-sm text-gray-300 leading-7 mt-4">
                {card.desc}
              </p>
            </div>

            {/* Bottom line animation */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-700"></div>
          </div>
        ))}
      </main>
    </section>
  )
}
