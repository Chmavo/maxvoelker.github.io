module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://maxvoelker.com`,
    // Your Name
    name: 'Max Voelker',
    // Main Site Title
    title: `Max Voelker`,
    // Description that goes under your name in main bio
    description: `Machine learning leader with 9+ years building production ML systems and 7+ years management experience at AWS and Fidelity.`,
    // Author info for SEO
    author: `Max Voelker`,
    // Keywords for SEO
    keywords: `data science manager NYC, data science leader New York, AWS fraud prevention, machine learning manager NYC, artificial intelligence, data scientist New York City, fraud detection, Amazon Web Services, ML engineer NYC, data science leadership Manhattan, tech manager NYC`,
    // Social image
    image: `src/images/profile_max.jpg`,
    // Optional: Github account URL
    github: `https://github.com/Chmavo`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/cmaxvoelker`,
    // Optional: Resume URL
    resume: `https://www.dropbox.com/scl/fi/gvq2ybgjfymmdau9xjlhq/Charles_Voelker_Resume.pdf?rlkey=3lc1yc8yewn7axju7ikzh3ab8&st=v82s1mpb&dl=0`,
    // Content of the About Me section
    about: `I lead a machine learning team building production fraud prevention systems at AWS. Over 9 years in ML and 7 years in management at AWS and Fidelity, I've focused on developing teams, defining technical strategy, and delivering measurable business impact. I define multi-year ML strategy, guide technical direction for systems processing billions of daily events, and partner with engineering and product teams across AWS's service portfolio. At Fidelity, I pioneered their first ML-powered financial crimes models in a highly regulated environment and hold a patent for anomaly detection (US 10,826,927).`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'AWS Fraud Prevention Platform',
        description:
          'Lead team building fraud prevention systems across 300+ AWS services processing billions of daily events with $60M+ annual business impact.',
        link: 'https://aws.amazon.com/fraud-prevention/',
      },
      {
        name: 'Generative AI Detection System',
        description:
          'Led cross-org ML initiative enabling safe scaling of GenAI services (Bedrock, SageMaker, Kiro) to millions of customers, preventing $20.8M in fraud losses while maintaining seamless customer experience.',
        link: 'https://aws.amazon.com/ai/',
      },
      {
        name: 'Enterprise Risk Management Platform',
        description:
          'Built risk management platform for $32B portfolio at Fidelity with significantly reduced false positives while achieving regulatory compliance through scalable ML infrastructure.',
        link: 'https://www.fidelity.com/',
      },
      {
        name: 'Data Exfiltration Detection Patent',
        description:
          'Invented and patented systems and methods for detecting anomalous data traffic over proxy servers using isolation forest algorithms and risk-based feature extraction. US Patent 10,826,927.',
        link: 'https://patents.google.com/patent/US10826927B1/en',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Amazon Web Services (AWS)',
        description:
          'Data Science Manager, AWS Fraud Prevention | 2023 - Present\nLead distributed ML team building fraud prevention systems across 300+ AWS services, processing billions of daily events with $60M+ annual business impact. Define multi-year ML strategy and technical roadmap, partnering with engineering and product teams globally. Scaled team from 4 to 8 members (88% hire rate), developed 3 to promotion (60% rate). Led cross-org initiative enabling safe scaling of GenAI services (Bedrock, SageMaker, Kiro), preventing $20.8M in fraud losses.',
        link: 'https://aws.amazon.com/',
      },
      {
        name: 'Amazon Web Services (AWS)',
        description:
          'Data Scientist, AWS Fraud Prevention | 2021 - 2023\nBuilt production ML systems processing 1.3B+ daily events, achieving $60M+ in annual cost savings and 97% fraud reduction. Owned full ML lifecycle from research through deployment, including real-time inference architecture, automated retraining pipelines, and model monitoring at billion-event scale. Implemented gradient boosting models for high-throughput classification and developed transformer-based sequence models improving prediction accuracy 35%.',
        link: 'https://aws.amazon.com/',
      },
      {
        name: 'Fidelity Investments',
        description:
          'Senior Manager, Data Science | 2018 - 2021\nLed 4-person ML team in Enterprise Risk Management delivering 10+ production systems across classification, anomaly detection, and risk forecasting. Launched Fidelity\'s first ML-powered financial crimes detection models in highly regulated environment, partnering with compliance, legal, and risk management. Built market risk forecasting system for $32B institutional margin book using LSTMs and Monte Carlo simulation. Deployed ML infrastructure processing 200M+ daily transactions with sub-second latency.',
        link: 'https://www.fidelity.com/',
      },
      {
        name: 'Fidelity Investments',
        description:
          'Manager, Analytics & Insights | 2016 - 2018\nLed cross-functional team of 4 scientists, analysts, and engineers building analytics and ML capabilities across Corporate Risk and Compliance programs. Developed and patented ML system for anomaly detection using isolation forests, reducing incidents 98% across $2.8T in assets (US Patent 10,826,927). Built analytics program standardizing data-driven decision making and established big data monitoring capabilities managing billions of records.',
        link: 'https://www.fidelity.com/',
      },
    ],
    // Optional: List your education, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: 'New York University, Leonard N. Stern School of Business',
        description:
          'Master of Business Administration\nSpecializations: Business Analytics, Quantitative Finance, Financial Technology',
        link: 'https://www.stern.nyu.edu/',
      },
      {
        name: "Northeastern University, D'Amore-McKim School of Business",
        description:
          'Bachelor of Science in Business Administration\nSpecializations: Information Systems, Marketing',
        link: 'https://www.northeastern.edu/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Machine Learning',
        description:
          'Deep Learning, Neural Networks, Transformers & LLMs (GPT, BERT), PyTorch, TensorFlow, Anomaly Detection, Fraud Detection, Gradient Boosting (XGBoost, LightGBM), Feature Engineering, Time Series Analysis',
      },
      {
        name: 'Leadership & Management',
        description:
          'Team Building & Scaling, Hiring & Talent Development, Technical Strategy & Roadmapping, Performance Management, Career Development, Cross-functional Leadership, Stakeholder Management',
      },
      {
        name: 'MLOps & Infrastructure',
        description:
          'SageMaker, MLflow, Real-time Inference, Model Deployment, CI/CD Pipelines, Model Monitoring, A/B Testing, Feature Stores, Model Versioning, Distributed Systems',
      },
      {
        name: 'Programming & Cloud',
        description:
          'Python, R, SQL, Docker, Kubernetes, AWS (EC2, S3, Lambda, SageMaker, EMR, Bedrock), Spark, Hadoop, Kafka, Airflow',
      },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          formats: [`auto`, `webp`],
          placeholder: `dominantColor`,
          quality: 80,
        },
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ 'content:encoded': edge.node.html }],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { frontmatter: { date: DESC } }
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: "Max Voelker's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ['G-YF8XCQR5Q8'],
        pluginConfig: {
          head: true,
          respectDNT: true,
          exclude: ['/preview/**', '/do-not-track/me/too/'],
        },
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Max Voelker Portfolio`,
        short_name: `Max Voelker`,
        start_url: `/`,
        background_color: `#374151`,
        theme_color: `#374151`,
        display: `minimal-ui`,
        icon: `src/images/profile_max.jpg`,
      },
    },
  ],
};
