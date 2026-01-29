// app/page.tsx (Next.js 13+ app router) or pages/index.tsx (pages router)
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* Hero */}
        <section className="flex flex-col gap-4 py-10">
          <p className="text-sm uppercase tracking-[0.25em] text-emerald-400">
            DevOps Engineer
          </p>
          <h1 className="text-4xl font-bold sm:text-5xl">
            Hello, I&apos;m <span className="text-emerald-400">Archibong Hashbury</span>.
          </h1>
          <p className="max-w-xl text-slate-300">
            I design, automate, and operate reliable infrastructure using
            cloud platforms, containers, and CI/CD. I care about fast, scalabale
            repeatable deployments and observable systems.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="https://github.com/Hashbury1"
              className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-emerald-400"
            >
              View GitHub
            </Link>
            <Link
              href="https://www.linkedin.com/in/archibong-hashbury-efefiom-102046193"
              className="rounded-md border border-slate-600 px-4 py-2 text-sm font-medium hover:border-emerald-400"
            >
              LinkedIn
            </Link>
            <Link
              href="/resume.pdf"
              className="rounded-md border border-slate-600 px-4 py-2 text-sm font-medium hover:border-emerald-400"
            >
              Download My Resume
            </Link>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-10">
          <h2 className="mb-4 text-2xl font-semibold">Skills</h2>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            <SkillCard title="Cloud">
              AWS · Blockchain · Web3 Security
            </SkillCard>
            <SkillCard title="Containers & Orchestration">
              Docker · Kubernetes · ECS
            </SkillCard>
            <SkillCard title="CI/CD">
              GitHub Actions · GitLab CI · Jenkins
            </SkillCard>
            <SkillCard title="IaC & Config">
              Terraform · CloudFormation
            </SkillCard>
            <SkillCard title="Observability">
              Prometheus · Grafana · ELK
            </SkillCard>
            <SkillCard title="Scripting">
              Bash · Python · Solidity
            </SkillCard>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-10">
          <h2 className="mb-4 text-2xl font-semibold">Selected Projects</h2>
          <div className="space-y-6">
            <ProjectCard
              title="Ethereum Private Testnet Deployment"
              stack="Ethereum · Github actions · Node js · Docker · prometheus · Grafana"
              link="https://github.com/Hashbury1/Private-Ethereum-Testnet"
              description="A simple, reliable Ethereum testnet deployment using Geth in dev mode for development and testing purposes.."
            />
            <ProjectCard
              title="Containerized python app to ECS and Fargate using Terraform"
              stack="Terraform · AWS · Python · Docker · Fargate · Github Actions"
              link="https://github.com/Hashbury1/prod-devops-cicd"
              description="A Real time project to show a CICD Pipeline that builds, tests, scans, and deploys a containerized python app to ECS and AWS Fargate using Terraform for IaC, AWS IAM for security, Github Actions for Deployment.."
            />
            <ProjectCard
              title="Monitoring EKS with CloudWatch and Prometheus"
              stack="GitHub Actions · EKS · CloudWatch · Prometheus"
              link="https://github.com/Hashbury1/monitoring-eks-cloudwatch"
              description="Deployed a monitoring system with EKS with Cloudwatch and prometheus including metrics, logs, and alerting rules, plus dashboards for app latency, error rates, and resource usage."
            />
          </div>
        </section>

        {/* Experience & Contact */}
        <section
          id="experience"
          className="grid gap-10 py-10 md:grid-cols-[2fr,1fr]"
        >
          <div>
            <h2 className="mb-4 text-2xl font-semibold">Experience</h2>
            <ul className="space-y-3 text-sm text-slate-300">
              <li>
                <span className="font-semibold text-slate-100">
                  DevOps Engineer · Company Name
                </span>{" "}
                (2023 – Present) – Built CI/CD pipelines, implemented
                infrastructure as code, and improved deployment reliability.
              </li>
              <li>
                <span className="font-semibold text-slate-100">
                  Cloud / Platform Engineer · Previous Company
                </span>{" "}
                – Migrated workloads to cloud, introduced monitoring and
                on‑call practices.
              </li>
            </ul>
          </div>
          <div id="contact">
            <h2 className="mb-4 text-2xl font-semibold">Contact</h2>
            <p className="mb-2 text-sm text-slate-300">
              Open to DevOps / Platform / SRE roles.
            </p>
            <p className="text-sm text-slate-300">
              Email:{" "}
              <a
                href="mailto:you@example.com"
                className="text-emerald-400 underline"
              >
                you@example.com
              </a>
            </p>
          </div>
        </section>

        <footer className="py-6 text-xs text-slate-500">
          © {new Date().getFullYear()} [Archibong Hashbury]. Built with Next.js &amp;
          Tailwind CSS.
        </footer>
      </div>
    </main>
  );
}

type SkillCardProps = {
  title: string;
  children: React.ReactNode;
};

function SkillCard({ title, children }: SkillCardProps) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="mb-1 text-sm font-semibold">{title}</h3>
      <p className="text-xs text-slate-300">{children}</p>
    </div>
  );
}

type ProjectCardProps = {
  title: string;
  stack: string;
  description: string;
  link?: string;
};

function ProjectCard({ title, stack, description, link }: ProjectCardProps) {
  return (
    <article className="rounded-lg border border-slate-800 bg-slate-900/60 p-4">
      <h3 className="text-base font-semibold">{title}</h3>
      <p className="mt-1 text-xs uppercase tracking-wide text-emerald-400">
        {stack}
      </p>
      <p className="mt-2 text-sm text-slate-300">{description}</p>
      {link && (
        <a
          href={link}
          className="mt-2 inline-block text-xs font-medium text-emerald-400 underline"
          target="_blank"
          rel="noreferrer"
        >
          View repository
        </a>
      )}
    </article>
  );
}
