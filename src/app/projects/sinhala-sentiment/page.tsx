import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Social Media Sentiment Analysis for Sinhala Language | Pramudi Biyonika",
  description: "Deep learning and Transformer-based NLP sentiment analysis research system for Sinhala social media content using XLM-RoBERTa, BiLSTM, and PyTorch.",
};

export default function SinhalaSentimentProjectPage() {
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
            <span className="text-[#6c47ff] font-bold">SINHALA SENTIMENT ANALYSIS</span>
          </div>
        </div>

        {/* Hero Banner Section */}
        <div className="space-y-6 text-left">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1.5 rounded-full bg-indigo-100 text-indigo-700 font-bold text-xs font-mono">
              NLP & Deep Learning Research
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-900 font-bold text-xs font-mono">
              🚧 Ongoing Project (2026)
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Social Media Sentiment Analysis <span className="text-[#6c47ff]">for Sinhala Language</span>
          </h1>
          <p className="text-xl sm:text-2xl font-bold text-[#6c47ff]">
            Using Deep Learning Approaches
          </p>

          <p className="text-slate-600 text-base sm:text-xl max-w-3xl leading-relaxed font-medium">
            Developing an advanced Natural Language Processing (NLP) system for sentiment analysis of Sinhala social media content using modern Deep Learning and Transformer-based architectures in low-resource and multilingual environments.
          </p>

          {/* Project Header Image */}
          <div className="relative w-full h-72 sm:h-96 rounded-[32px] overflow-hidden border border-slate-200/90 shadow-2xl bg-slate-900 mt-6">
            <Image
              src="/sentiment_thumb.jpg"
              alt="Sinhala Sentiment Analysis NLP Dashboard Interface"
              fill
              priority
              unoptimized
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
            "PyTorch / TensorFlow",
            "Hugging Face Transformers",
            "XLM-RoBERTa",
            "BiLSTM",
            "NLP",
            "Scikit-learn",
            "Pandas",
            "NumPy",
            "Google Colab / Jupyter",
            "Git & GitHub",
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
            <span>📚</span> Project Overview
          </h2>

          <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            <p>
              Developing an advanced <strong>Natural Language Processing (NLP)</strong> system for sentiment analysis of Sinhala social media content using modern <strong>Deep Learning</strong> and <strong>Transformer-based architectures</strong>. The project focuses on addressing the challenges of sentiment classification in <strong>low-resource and multilingual environments</strong>, particularly for Sinhala and code-mixed social media text.
            </p>
            <p>
              The objective is to design and evaluate a robust sentiment analysis framework capable of accurately classifying <strong>Positive, Neutral, and Negative</strong> sentiments while overcoming the limitations of traditional machine learning approaches that rely on handcrafted features and static word embeddings. The research investigates state-of-the-art deep learning models including <strong>BiLSTM</strong>, <strong>Attention Mechanisms</strong>, and <strong>Transformer-based language models such as XLM-RoBERTa</strong>, with comparative performance analysis across multiple benchmark datasets.
            </p>
            <p>
              The project includes an extensive literature review of recent research in Sinhala sentiment analysis, multilingual NLP, and explainable AI to identify current research gaps and propose an improved architecture for social media sentiment classification. Multiple publicly available datasets are being analyzed and evaluated, covering Sinhala news comments, Facebook posts, YouTube comments, multilingual reviews, and code-mixed content to ensure comprehensive model benchmarking and generalization.
            </p>
          </div>
        </section>

        {/* Key Responsibilities */}
        <section className="space-y-6 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>🎯</span> Key Responsibilities
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-sm">
            {[
              "Conducting research on Deep Learning and Transformer-based NLP models for sentiment analysis.",
              "Performing comparative analysis of sequential neural networks (RNN, LSTM, GRU, BiLSTM) and Transformer architectures.",
              "Investigating multilingual and code-mixed text processing techniques for low-resource languages.",
              "Collecting, analyzing, and benchmarking multiple publicly available sentiment datasets.",
              "Designing an improved sentiment classification framework based on identified research gaps.",
              "Evaluating model performance using standard NLP metrics (Accuracy, Precision, Recall, F1-Score).",
              "Exploring Explainable AI (XAI) techniques to improve model interpretability.",
            ].map((resp, i) => (
              <li key={i} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 border border-slate-200/60">
                <span className="text-[#6c47ff] font-bold">✓</span>
                <span>{resp}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Technologies & Tools Table */}
        <section className="space-y-6 p-8 sm:p-10 rounded-[32px] bg-white border border-slate-200/80 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>💻</span> Technologies & Tools
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-slate-700 border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-mono font-bold text-slate-400 uppercase">
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Technologies & Libraries</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Core Language</td>
                  <td className="py-3 px-4">Python</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Deep Learning Frameworks</td>
                  <td className="py-3 px-4">PyTorch, TensorFlow</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">NLP & Transformers</td>
                  <td className="py-3 px-4">Hugging Face Transformers, XLM-RoBERTa, BiLSTM</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Data Science & ML</td>
                  <td className="py-3 px-4">Pandas, NumPy, Scikit-learn</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-slate-900">Environments & VCS</td>
                  <td className="py-3 px-4">Google Colab, Jupyter Notebook, Git & GitHub</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Project Highlights */}
        <section className="space-y-6 p-8 sm:p-10 rounded-[32px] bg-indigo-50/60 border border-indigo-100 shadow-md">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 flex items-center gap-3">
            <span>🌟</span> Project Highlights
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-slate-700 text-sm">
            <div className="p-4 rounded-xl bg-white border border-indigo-100 space-y-1 shadow-2xs">
              <h3 className="font-bold text-slate-900">Low-Resource Domain Focus</h3>
              <p className="text-xs text-slate-600">Research-driven implementation targeting Sinhala language sentiment analysis, a key low-resource NLP domain.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-indigo-100 space-y-1 shadow-2xs">
              <h3 className="font-bold text-slate-900">Architecture Evaluation</h3>
              <p className="text-xs text-slate-600">Comparative evaluation of modern Deep Learning architectures (BiLSTM, Transformers) against traditional machine learning techniques.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-indigo-100 space-y-1 shadow-2xs">
              <h3 className="font-bold text-slate-900">Multilingual & Code-Mixed Text</h3>
              <p className="text-xs text-slate-600">Focus on processing noisy, multilingual, and code-mixed Sinhala social media content from Facebook and YouTube.</p>
            </div>

            <div className="p-4 rounded-xl bg-white border border-indigo-100 space-y-1 shadow-2xs">
              <h3 className="font-bold text-slate-900">Scalable Deployment Design</h3>
              <p className="text-xs text-slate-600">Designed with scalability and practical deployment in mind for social media analytics and public opinion mining.</p>
            </div>
          </div>
        </section>

        {/* Current Status Banner */}
        <section className="space-y-4 p-8 sm:p-10 rounded-[32px] bg-[#6c47ff] text-white shadow-xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-3">
            <span>📈</span> Current Project Status
          </h2>

          <p className="text-purple-100 text-sm sm:text-base leading-relaxed">
            <strong>Ongoing (2026):</strong> Research, dataset evaluation, model development, experimentation, and performance benchmarking are actively in progress across Sinhala news comments, social media posts, and multilingual review corpora.
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
