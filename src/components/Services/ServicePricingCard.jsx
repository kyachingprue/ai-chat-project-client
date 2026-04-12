import { motion } from 'motion/react'
import { FaRocket, FaCrown, FaGem, FaCheckCircle } from 'react-icons/fa'

const plans = [
  {
    name: 'Starter',
    price: '$9',
    icon: <FaRocket />,
    color: 'from-cyan-500 to-blue-500',
    features: [
      'AI Post Generator (Basic)',
      '5 Social Media Accounts',
      'Basic Analytics Dashboard',
      'Post Scheduling (Limited)',
      'Hashtag Suggestions',
      'Caption Writing AI',
      'Community Support',
      'Template Library Access'
    ]
  },
  {
    name: 'Pro',
    price: '$29',
    icon: <FaCrown />,
    color: 'from-purple-500 to-pink-500',
    features: [
      'Advanced AI Content Generator',
      'Unlimited Social Accounts',
      'Advanced Analytics & Insights',
      'Auto Post Scheduling',
      'AI Trending Hashtag Finder',
      'Engagement Prediction AI',
      'Competitor Analysis Tool',
      'Custom Branding Kit',
      'Image & Video AI Suggestions',
      'Comment Reply Assistant',
      'Priority Support'
    ]
  },
  {
    name: 'Enterprise',
    price: '$99',
    icon: <FaGem />,
    color: 'from-yellow-400 to-orange-500',
    features: [
      'Full AI Social Media Automation',
      'Unlimited Platforms Integration',
      'Real-time AI Analytics Engine',
      'AI Viral Content Predictor',
      'Auto Campaign Management',
      'Team Collaboration System',
      'Dedicated Account Manager',
      'Custom AI Model Training',
      'API Access for Developers',
      'White-label Solution',
      'Advanced Security & Backup',
      '24/7 Premium Support',
      'Growth Strategy Consultation'
    ]
  }
]

const ServicePricingCard = () => {
  return (
    <div className="relative py-20 bg-linear-to-br from-[#020617] via-[#020617] to-[#0f172a] text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15),transparent_70%)]"></div>

      {/* Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
          Choose Your Plan
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          Unlock the power of AI-driven social media growth. Choose a plan that
          fits your needs.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto relative z-10">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 200 }}
            className="relative group rounded-3xl p-0.5 bg-linear-to-r from-transparent via-gray-700 to-transparent hover:from-cyan-500 hover:to-blue-500"
          >
            {/* Card */}
            <div className="bg-[#020617] rounded-3xl p-8 h-full backdrop-blur-xl border border-gray-800 group-hover:border-transparent transition-all duration-500">
              {/* Icon */}
              <div
                className={`text-4xl mb-4 bg-linear-to-r ${plan.color} text-transparent bg-clip-text`}
              >
                {plan.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>

              {/* Price */}
              <p className="text-4xl font-bold mb-6">
                {plan.price}
                <span className="text-sm text-gray-400"> /month</span>
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-300">
                    <FaCheckCircle className="text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-2 rounded-full bg-linear-to-r ${plan.color} font-semibold shadow-lg hover:shadow-xl flex flex-row justify-center items-center gap-3 transition duration-300`}
              >
                <span>Choose Plan</span> <span className="text-3xl mb-2">💳</span>
              </motion.button>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 bg-linear-to-r from-cyan-500/10 to-blue-500/10 blur-xl"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default ServicePricingCard
