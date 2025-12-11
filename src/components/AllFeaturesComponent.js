// src/components/AllFeaturesComponent.js

import React from 'react'; // Added explicit React import for safety
import { ArrowRight, Check, User, Clock, Briefcase, DollarSign, Activity, FileText, Globe, Zap, Settings, BookOpen, BarChart } from 'lucide-react';

// --- REUSABLE FEATURE CARD COMPONENT ---
const FeatureCard = ({ icon: Icon, title, description, benefits, imagePlaceholderClass = "bg-gray-100/50" }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center border-b border-gray-100 py-16 lg:py-24">

        {/* Left Side: Text and Benefits */}
        <div className="space-y-6">
            <div className="flex items-center space-x-4">
                <Icon className="w-8 h-8 text-fuchsia-600" />
                <h3 className="text-3xl font-bold text-gray-900">{title}</h3>
            </div>

            <p className="text-lg text-gray-700">
                {description}
            </p>

            {/* Benefit List */}
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-4">
                {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 mt-1 text-cyan-500 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{benefit}</span>
                    </div>
                ))}
            </div>

            <a href="#demo" className="inline-flex items-center text-base font-semibold text-fuchsia-600 hover:text-fuchsia-700 transition duration-150 pt-4">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
            </a>
        </div>

        {/* Right Side: Image Placeholder */}
        <div className={`h-80 rounded-2xl ${imagePlaceholderClass} relative overflow-hidden flex items-center justify-center`}>
            {/* Placeholder for future detailed feature UI screenshot */}
            <p className="text-gray-400 font-medium">Feature UI Placeholder</p>
        </div>
    </div>
);


// --- SECTION DEFINITIONS (All content drawn from HRFlow-Modern-HR-Management-System-Streamline-Your-Workforce-12-11-2025_11_16_AM.pdf) ---

const FeatureDetails = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <FeatureCard
            icon={User}
            title="Smart Recruitment"
            description="Streamline your hiring process with AI-powered candidate screening, automated scheduling, and collaborative hiring workflows. Track candidates from application to offer."
            benefits={["AI/Smart screening", "Collaborative Feedback", "Automated interview scheduling", "Smart Recruiter Prediction"]}
        />

        <FeatureCard
            icon={Briefcase}
            title="Seamless Onboarding"
            description="Create memorable first impressions with automated onboarding workflows. New hires complete paperwork, training, and orientation before day one."
            benefits={["Digital document signing", "Task checklists", "Training management", "New hire portals"]}
        />

        <FeatureCard
            icon={Activity}
            title="Performance Management"
            description="Drive growth with continuous feedback, goal tracking, and performance reviews. Align individual goals with company objectives."
            benefits={["360-degree feedback", "Performance reviews", "Goal setting & tracking", "Recognition system"]}
        />

        <FeatureCard
            icon={DollarSign}
            title="Payroll Integration"
            description="Connect with leading payroll providers for seamless salary processing. Automate tax calculations, deductions, and compliance reporting."
            benefits={["Multi-state support", "Tax compliance", "Automated calculations", "Expense management"]}
        />

        <FeatureCard
            icon={Clock}
            title="Time & Attendance"
            description="Track time-off requests, attendance, and leave balances. Automated approval workflows and calendar integration keep everyone in sync."
            benefits={["Leave management", "Shift scheduling", "Time tracking", "Calendar sync"]}
        />

        <FeatureCard
            icon={BarChart}
            title="HR Analytics"
            description="Make data-driven decisions with powerful analytics dashboards. Track turnover, engagement, headcount trends, and more."
            benefits={["Custom dashboards", "Headcount planning", "Turnover analysis", "Export reports"]}
        />

    </div>
);

// "And So Much More" Section (Based on PDF)
const AdditionalCapabilitiesSection = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-24 relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900">
                And So Much More 
            </h2>
            <p className="mt-4 text-xl text-gray-600">
                Additional capabilities to power your complete HR operation. 
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Compliance Card */}
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <FileText className="w-8 h-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Compliance </h3>
                <p className="text-gray-600 text-sm">
                    Stay compliant with automated policy updates and regulatory reporting. 
                </p>
            </div>
            {/* Employee Directory Card */}
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <BookOpen className="w-8 h-8 text-cyan-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Employee Directory </h3>
                <p className="text-gray-600 text-sm">
                    Organizational charts and employee profiles. 
                </p>
            </div>
            {/* Automation Card */}
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <Zap className="w-8 h-8 text-fuchsia-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Automation </h3>
                <p className="text-gray-600 text-sm">
                    Custom workflows and triggers. 
                </p>
            </div>
            {/* Global Support Card */}
            <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                <Globe className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">Global Support </h3>
                <p className="text-gray-600 text-sm">
                    Multi-language, multi-currency compliance. 
                </p>
            </div>
        </div>
    </div>
);


// Final CTA Banner (Based on PDF)
const FinalCTABanner = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="p-12 md:p-16 rounded-3xl text-center text-white 
                      bg-gradient-to-r from-fuchsia-600 to-cyan-500 shadow-xl">
            <h2 className="text-4xl font-extrabold mb-4">
                Ready to See HRFlow in Action? 
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-10">
               Schedule a personalized demo and see how HRFlow can transform your HR operations. 
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-3 border border-transparent text-base font-medium rounded-lg text-fuchsia-600 bg-white hover:bg-gray-50 transition duration-150">
                   Request Demo 
                    <ArrowRight className="w-5 h-5 ml-2 inline-block" />
                </button>
                <button className="px-8 py-3 border border-white/50 text-base font-medium rounded-lg text-white bg-transparent hover:bg-white/10 transition duration-150">
                    View Pricing 
                </button>
            </div>
        </div>
    </div>
);


// --- MAIN FEATURES COMPONENT ---
export default function AllFeaturesComponent() {
    return (
        <div className="bg-white min-h-screen relative overflow-hidden">

            {/* Introductory Header */}
            <div className="bg-gray-50 pt-32 pb-16 text-center">
                <h1 className="text-5xl lg:text-6xl font-extrabold text-gray-900">
                    All the Tools You Need to<br />
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-600 to-indigo-600">
                        Manage Your Workforce
                    </span>
                </h1>
                <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                    From recruitment to retirement, HRFlow provides comprehensive solutions for every stage of the employee lifecycle 
                </p>
            </div>

            {/* Main Content Container */}
            <div className="relative">
                {/* 1. INDIVIDUAL FEATURE DETAILS */}
                <FeatureDetails />

                {/* 2. ADDITIONAL CAPABILITIES */}
                <AdditionalCapabilitiesSection />

                {/* 3. FINAL CTA */}
                <FinalCTABanner />

                {/* Add a large bottom padding/margin here in case your layout doesn't provide it */}
                <div className="h-20 lg:h-32"></div>
            </div>

        </div>
    );
}