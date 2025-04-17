
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function Portfolio() {
  return (
    <div className="p-6 max-w-4xl mx-auto space-y-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold">Abhinit Sundar</h1>
        <p className="text-lg text-muted-foreground">AI/ML Engineer | Master’s in Data Science, NJIT (May 2025)</p>
        <div className="flex justify-center gap-4 mt-4">
          <Button variant="link" asChild>
            <a href="https://www.linkedin.com/in/abhinit-sundar/" target="_blank">LinkedIn</a>
          </Button>
          <Button variant="link" asChild>
            <a href="https://github.com/asundar0128?tab=repositories" target="_blank">GitHub</a>
          </Button>
          <Button variant="link" asChild>
            <a href="/Abhinit_Sundar_AI_ML_Engineer_Resume.pdf" target="_blank" onClick={() => gtag('event', 'resume_download')}>Resume</a>
          </Button>
        </div>
      </header>

      <img src="/download-1.jpg" alt="Graphic" className="rounded-2xl shadow-md w-full" />

      <section>
        <h2 className="text-2xl font-semibold mb-2">About Me</h2>
        <p>
          I am a Master’s student in Data Science at NJIT, graduating in May 2025. With a deep interest in machine learning,
          deep learning, and bioinformatics, my research focuses on applying large language models to drug discovery and
          antisense oligonucleotide (ASO) efficacy prediction. I bring experience in robotics, cloud computing, and
          reinforcement learning, and have published research in the intersection of AI and biomedical sciences.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Python, R, SQL, C++, C#, Swift, Android, Linux</li>
          <li>Machine Learning, Deep Learning, NLP, Generative Modeling</li>
          <li>PyTorch, TensorFlow, Keras, Scikit-learn, RDKit</li>
          <li>Big Data, Cloud (AWS), MongoDB, Hadoop</li>
          <li>Data Visualization, Predictive Modeling, Reinforcement Learning</li>
        </ul>
      </section>
    </div>
  );
}
