import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Cognitive-Aware Learning Analytics Framework | Pramudi Biyonika",
  description: "Research-driven intelligent educational analytics platform integrating LLMs with Knowledge Tracing (KT) to predict student performance.",
};

export default function CognitiveAnalyticsProjectPage() {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans relative">
      <Navbar />

      <main className="pt-28 pb-24 px-6 max-w-5xl mx-auto space-y-16">
        {/* Back Button & Breadcrumbs */}
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-6">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-xs shadow-xs hover:border-[#6c47ff] hover:text-[#6c47ff] transition-all"
          >
            <span>← Back to Projects</span>
          </Link>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
            <span>PROJECTS</span>
            <span>/</span>
            <span className="text-[#6c47ff] font-bold">COGNITIVE ANALYTICS</span>
          </div>
        </div>

        {/* Hero Banner Section */}
        <div className="space-y-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-purple-100 text-[#6c47ff] font-bold text-xs font-mono">
              Research Project (Final Year)
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 font-bold text-xs font-mono">
              🚧 Ongoing (2026)
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Cognitive-Aware Learning Analytics <span className="text-[#6c47ff]">Framework</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#6c47ff]">
            Using Large Language Models and Knowledge Tracing
          </p>

          <p className="text-slate-600 text-base sm:text-xl max-w-3xl leading-relaxed font-medium">
            A research-driven intelligent educational analytics platform designed to improve student performance prediction by integrating Large Language Models (LLMs) with Knowledge Tracing (KT) techniques.
          </p>

          {/* Project Header Image */}
          <div className="relative w-full h-72 sm:h-96 rounded-[32px] overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 mt-6">
            <Image
              src="/cognitive_thumb.jpg"
              alt="Cognitive-Aware Learning Analytics Framework Dashboard"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
          </div>
        </div>

        {/* Tech Stack Pills Bar */}
        <div className="p-6 rounded-2xl bg-white border border-slate-200/80 shadow-md flex flex-wrap gap-2 items-center">
          <span className="text-xs font-mono font-bold text-slate-400 uppercase tracking-wider mr-2">
            Technologies:
          </span>
          {[
            "Python",
            "PyTorch",
            "TensorFlow",
            "LLMs (OpenAI / DeepSeek)",
            "Scikit-learn",
            "Jupyter Notebook",
            "VS Code",
            "Explainable AI (XAI)",
            "Knowledge Tracing",
          ].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800 text-xs font-bold"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Overview Section */}
        <section className="space-y-4 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>📚</span> Overview
          </h2>

          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              The Cognitive-Aware Learning Analytics Framework is a research-driven intelligent educational analytics platform designed to improve student performance prediction by integrating Large Language Models (LLMs) with Knowledge Tracing (KT) techniques.
            </p>
            <p>
              Traditional educational analytics primarily rely on examination scores and historical student performance to predict future outcomes. While these approaches can estimate knowledge mastery, they fail to explain why students struggle with specific learning tasks. Existing Knowledge Tracing models focus mainly on question-answer interactions and knowledge concepts but do not explicitly consider the cognitive skills required to solve individual assessment questions.
            </p>
            <p>
              This project introduces a novel framework that automatically identifies the cognitive skill requirements of examination questions using Large Language Models and incorporates these cognitive representations into a temporal Knowledge Tracing model. The framework aims to generate explainable learner profiles, distinguish between knowledge deficiencies and cognitive limitations, and provide educators with actionable insights for personalized learning interventions.
            </p>
            <p>
              Rather than simply predicting whether a student will answer a question correctly, the system explains which cognitive abilities influence performance, making educational analytics significantly more transparent, interpretable, and useful for teachers, students, and educational institutions.
            </p>
          </div>
        </section>

        {/* Research Problem & Proposed Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Research Problem */}
          <section className="space-y-4 p-8 rounded-[32px] bg-purple-50/60 border border-purple-100 shadow-md">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <span>🎯</span> Research Problem
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Current Knowledge Tracing models such as DKT, qDKT, and QKT estimate student knowledge mastery and predict performance by treating learning as a sequence of question interactions, overlooking the cognitive processes involved.
            </p>

            <div className="space-y-2 pt-2">
              <p className="text-xs font-bold text-[#6c47ff] font-mono">
                Educators cannot determine if poor performance stems from:
              </p>
              <ul className="space-y-1.5 text-xs text-slate-700 font-medium">
                <li>• Insufficient conceptual understanding</li>
                <li>• Weak logical reasoning</li>
                <li>• Limited working memory</li>
                <li>• Poor attention</li>
                <li>• Ineffective metacognitive strategies</li>
              </ul>
            </div>
          </section>

          {/* Proposed Solution */}
          <section className="space-y-4 p-8 rounded-[32px] bg-lime-50/60 border border-lime-200/60 shadow-md">
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 flex items-center gap-2">
              <span>💡</span> Proposed Solution
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              The proposed framework introduces an additional cognitive dimension into Knowledge Tracing. Instead of modeling only Questions, Knowledge Concepts, and Student Interactions, the architecture models Cognitive Skill Requirements extracted automatically by an LLM.
            </p>

            <p className="text-xs text-slate-700 leading-relaxed pt-2">
              Extracted cognitive features are integrated into a Cognitive-Aware Knowledge Tracing model, enabling performance prediction to consider both conceptual knowledge and cognitive abilities for an explainable AI system.
            </p>
          </section>
        </div>

        {/* Cognitive Skills Modelled */}
        <section className="space-y-6 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>🧠</span> Cognitive Skills Modelled
          </h2>

          <p className="text-slate-600 text-sm">
            The framework identifies and models higher-order cognitive skills required during learning and assessment:
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { skill: "Attention", icon: "👁️", desc: "Sustained focus during problem solving" },
              { skill: "Working Memory", icon: "💾", desc: "Short-term information retention & manipulation" },
              { skill: "Logical Reasoning", icon: "🧩", desc: "Deductive & inductive logic application" },
              { skill: "Critical Thinking", icon: "⚡", desc: "Analytical evaluation of multi-step problems" },
              { skill: "Language Processing", icon: "📝", desc: "Text comprehension & formulation" },
              { skill: "Metacognition", icon: "🔮", desc: "Self-awareness & learning strategy control" },
            ].map((item) => (
              <div key={item.skill} className="p-4 rounded-2xl bg-slate-50 border border-slate-200/60 space-y-1">
                <div className="text-2xl mb-1">{item.icon}</div>
                <h3 className="font-extrabold text-slate-900 text-sm">{item.skill}</h3>
                <p className="text-xs text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key Features */}
        <section className="space-y-6 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>🚀</span> Key Features
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 text-sm">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Intelligent Cognitive Skill Extraction</h3>
              <p className="text-xs text-slate-600">LLM automatically analyzes exam questions to identify underlying cognitive skill requirements without manual maps.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Cognitive-Aware Knowledge Tracing</h3>
              <p className="text-xs text-slate-600">Combines student interaction history, knowledge concepts, and cognitive skill representations for enhanced predictions.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Explainable Learning Analytics</h3>
              <p className="text-xs text-slate-600">Generates interpretable learner profiles showing conceptual mastery and cognitive strengths/weaknesses.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Student Performance Prediction</h3>
              <p className="text-xs text-slate-600">Predicts future academic outcomes using sequential learning behavior and cognitive features.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Personalized Learning Insights</h3>
              <p className="text-xs text-slate-600">Provides educators with evidence-based recommendations regarding student difficulties and intervention strategies.</p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/60 space-y-1">
              <h3 className="font-bold text-slate-900">Educational Decision Support</h3>
              <p className="text-xs text-slate-600">Assists teachers in distinguishing whether learning challenges originate from conceptual misunderstandings or cognitive limits.</p>
            </div>
          </div>
        </section>

        {/* System Workflow Diagram */}
        <section className="space-y-6 p-8 sm:p-10 rounded-[32px] bg-slate-900 text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
            <span>🏗</span> System Workflow
          </h2>

          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-cyan-300 overflow-x-auto leading-relaxed">
            <pre>{`Student Examination Data
        │
        ▼
Question-Level Dataset Preparation
        │
        ▼
Large Language Model
(Cognitive Skill Extraction)
        │
        ▼
Knowledge Concepts + Cognitive Skill Representation
        │
        ▼
Cognitive-Aware Knowledge Tracing Model
        │
        ▼
Performance Prediction
        │
        ▼
Explainable Learner Profiles
        │
        ▼
Teacher Decision Support`}</pre>
          </div>
        </section>

        {/* Technologies Table */}
        <section className="space-y-6 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>🛠</span> Technologies
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700 border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-mono font-bold text-slate-400 uppercase">
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Technologies / Tools</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Programming</td>
                  <td className="py-3 px-4">Python</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Machine Learning</td>
                  <td className="py-3 px-4">PyTorch, TensorFlow</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Artificial Intelligence</td>
                  <td className="py-3 px-4">Large Language Models (OpenAI / DeepSeek)</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Data Analysis</td>
                  <td className="py-3 px-4">Jupyter Notebook</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Development</td>
                  <td className="py-3 px-4">Visual Studio Code</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Research Domains</td>
                  <td className="py-3 px-4">Educational Data Mining, Learning Analytics, Explainable AI (XAI), Deep Learning, Knowledge Tracing</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Expected Impact */}
        <section className="space-y-4 p-8 sm:p-10 rounded-[32px] bg-[#6c47ff] text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
            <span>📈</span> Expected Impact
          </h2>

          <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
            The proposed framework aims to transform traditional educational analytics by moving beyond score prediction toward explainable learning intelligence. By integrating cognitive skill modelling into Knowledge Tracing, the system seeks to improve prediction accuracy while helping educators understand the underlying reasons behind student performance. The framework has the potential to support personalized learning, early intervention, curriculum improvement, and data-driven educational decision-making, contributing to more effective and equitable learning experiences.
          </p>
        </section>

        {/* Bottom Back Button */}
        <div className="pt-6 text-center">
          <Link
            href="/#projects"
            className="px-8 py-3.5 rounded-full bg-[#6c47ff] text-white font-bold text-xs shadow-lg hover:bg-[#5b39ee] hover:scale-105 transition-all inline-flex items-center gap-2"
          >
            <span>← Back to Portfolio Projects</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
