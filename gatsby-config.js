module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://maxvoelker.com`,
    // Your Name
    name: 'Max Voelker',
    // Main Site Title
    title: `Max Voelker`,
    // Description that goes under your name in main bio
    description: `Leader of ML/AI initiatives for Fraud Prevention at Amazon Web Services with 10+ years of experience in Data Science and risk management.`,
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
    resume: `https://www.dropbox.com/scl/fi/xi9jjxhcarkdy50jx2tm3/Max_Voelker_Resume_July_2025.pdf?rlkey=cme9i5ae8nz5d0gqzsevbn7cs&st=tnh9kd7y&dl=0`,
    // Content of the About Me section
    about: `I'm a technical leader focused on building ML/AI systems at massive scale to solve complex business problems. Over the past decade, I've moved from individual contributor to strategic executive, building high-performing data science teams. I focus on technical excellence, talent development, and delivering measurable outcomes through ML solutions.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'AWS Fraud Prevention Platform',
        description:
          'Led development of real-time fraud prevention platform for enterprise clients, delivering $15M in annual savings through advanced ML techniques and high-accuracy fraud detection.',
        link: 'https://aws.amazon.com/fraud-prevention/',
      },
      {
        name: 'Generative AI Detection System',
        description:
          'Lead AWS account compromise detection strategy for Generative AI services, directing cross-functional team to deliver significant fraud reduction while maintaining low false positive rates.',
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
          'Data Science Manager, AWS Fraud Prevention | May 2023 - Present\nI lead ML/AI initiatives for enterprise fraud prevention while managing a team of data scientists and business analysts. We have deployed 200+ machine learning models that significantly increased automation while maintaining high accuracy. I direct AWS account compromise detection strategy for generative AI services and balance technical leadership with people management, implementing mentorship programs and cross-functional frameworks that reduced deployment time from weeks to days.',
        link: 'https://aws.amazon.com/',
      },
      {
        name: 'Amazon Web Services (AWS)',
        description:
          'Data Scientist, AWS Fraud Prevention | May 2021 - April 2023\nI contributed to building the real-time AWS account compromise prevention platform, designing ML models using deep neural networks and transformers to detect fraud patterns across AWS services. I developed a real-time classifier processing 1.1 million events per second with sub-100ms latency. My work contributed to $15M in annual cost savings for AWS through high-accuracy fraud detection with significantly reduced false positives. I established MLOps best practices and CI/CD pipelines that reduced deployment time from weeks to days.',
        link: 'https://aws.amazon.com/',
      },
      {
        name: 'Fidelity Investments',
        description:
          'Senior Manager, Data Science | January 2018 - April 2021\nI led risk management transformation for a $32 billion investment portfolio while building and managing a team of 5 data scientists. My team developed a comprehensive risk management platform with significantly reduced false positives while ensuring regulatory compliance. I pioneered alternative data sources and advanced modeling techniques that improved risk-adjusted returns. I presented analytical findings to C-level executives and regulatory bodies, then implemented a model governance framework that was adopted across other business units.',
        link: 'https://www.fidelity.com/',
      },
      {
        name: 'Fidelity Investments',
        description:
          "Manager, Analytics & Insights | January 2016 - December 2017\nI managed a team of 5 analysts generating insights from Fidelity's investment and risk data. I led development of risk assessment models and portfolio analytics that improved risk-adjusted returns and enhanced investment decision-making processes. My team built predictive analytics for risk management and portfolio optimization. I established automated reporting frameworks using Tableau and Python, significantly reducing manual processes. I initiated Fidelity's first machine learning pilot projects in risk management.",
        link: 'https://www.fidelity.com/',
      },
    ],
    // Optional: List your education, they must have `name` and `description`. `link` is optional.
    education: [
      {
        name: 'New York University, Leonard N. Stern School of Business',
        description:
          'Master of Business Administration | May 2019\nSpecializations: Business Analytics, Quantitative Finance, Financial Technology',
        link: 'https://www.stern.nyu.edu/',
      },
      {
        name: "Northeastern University, D'Amore-McKim School of Business",
        description:
          'Bachelor of Science in Business Administration | December 2013\nSpecializations: Information Systems, Marketing',
        link: 'https://www.northeastern.edu/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Machine Learning & AI',
        description:
          'Deep Neural Networks, Transformers, LLMs (GPT, BERT), Anomaly Detection, Time Series Analysis',
      },
      {
        name: 'MLOps & Infrastructure',
        description:
          'MLflow, Kubeflow, SageMaker, CI/CD for ML, A/B Testing, Model Monitoring, Docker, Kubernetes',
      },
      {
        name: 'Programming & Cloud',
        description:
          'Python, R, SQL, PySpark, AWS (EC2, S3, Lambda, EMR), Spark, Hadoop, Kafka, Airflow',
      },
      {
        name: 'Leadership & Strategy',
        description:
          'Team Development, Technical Mentorship, Performance Management, Strategic Planning, Resource Allocation',
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
