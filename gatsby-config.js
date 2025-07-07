module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://maxvoelker.com`,
    // Your Name
    name: 'Max Voelker',
    // Main Site Title
    title: `Max Voelker | Data Science Manager`,
    // Description that goes under your name in main bio
    description: `Data Science Manager with 10+ years of experience leading ML/AI initiatives in fraud prevention and risk management.`,
    // Optional: Github account URL
    github: `https://github.com/Chmavo`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/cmaxvoelker`,
    // Optional: Resume URL
    resume: `https://www.dropbox.com/scl/fi/9qizuhstcuv3zzmwzt2dm/Charles_Voelker_DataScienceManager_Resume_2025_05_08.pdf?rlkey=q5w0xlsy0b33qjiqp2ncsn4qp&st=arhijls8&dl=0`,
    // Content of the About Me section
    about: `I'm passionate about using data science to solve real-world problems at scale. My background spans both technical leadership and hands-on development - from architecting machine learning platforms to mentoring data scientists through career growth. I focus on building high-performing teams and translating complex ML concepts into business value across fraud prevention, risk management, and analytics domains.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'AWS Fraud Prevention Platform',
        description:
          'Led development of real-time fraud prevention platform protecting >90% of Fortune 500 businesses. Achieved 97% fraud reduction with $15M annual savings through advanced ML techniques.',
        link: 'https://aws.amazon.com/fraud-prevention/',
      },
      {
        name: 'Generative AI Detection System',
        description:
          'Lead AWS\'s account compromise detection strategy for Generative AI services, directing cross-functional team to reduce fraud by 92% on the service while maintaining seamless user experience through advanced deep learning models.',
        link: 'https://aws.amazon.com/ai/',
      },
      {
        name: 'Enterprise Risk Management Platform',
        description:
          'Built risk management platform for $32B portfolio at Fidelity, reducing false positives by 65% while achieving regulatory compliance through scalable ML infrastructure.',
        link: 'https://www.fidelity.com/',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Amazon Web Services (AWS)',
        description: 'Data Science Manager, AWS Fraud Prevention - May 2023 - Present\n\nI lead ML/AI initiatives protecting Fortune 500 businesses from fraud while managing and mentoring a team of 5 data scientists. My leadership contributed to deploying 200+ machine learning models achieving 85% reduction in manual work with 99% accuracy. I architect end-to-end fraud prevention solutions and lead AWS\'s account compromise detection strategy for Generative AI services, reducing fraud incidents by 92% on the service. I balance technical involvement with people management, implementing mentorship programs and cross-functional frameworks that improved deployment velocity by 40%.',
        link: 'https://aws.amazon.com/',
      },
      {
        name: 'Amazon Web Services (AWS)',
        description: 'Data Scientist, AWS Fraud Prevention - May 2021 - April 2023\n\nI built the foundation of our fraud prevention platform, designing and implementing ML models using deep neural networks and transformers to detect fraud patterns across AWS services. I developed a real-time classifier processing 1.1 million events per second with sub-100ms latency. My work contributed to $15M in annual savings for AWS, achieving 97% fraud detection accuracy while reducing false positives by 60%. I established MLOps best practices and CI/CD pipelines that reduced deployment time from weeks to days.',
        link: 'https://aws.amazon.com/',
      },
      {
        name: 'Fidelity Investments',
        description: 'Senior Manager, Data Science - January 2018 - April 2021\n\nI led risk management transformation for a $32 billion investment portfolio, building and managing a team of 5 data scientists. My team developed a comprehensive risk management platform that reduced false positives by 65% while ensuring regulatory compliance. I pioneered alternative data sources and advanced modeling techniques, creating predictive models that improved risk-adjusted returns by 18%. I regularly presented analytical findings to C-level executives and regulatory bodies, implementing a model governance framework that became the template for other business units.',
        link: 'https://www.fidelity.com/',
      },
      {
        name: 'Fidelity Investments',
        description: 'Manager, Analytics & Insights - January 2016 - December 2017\n\nI managed a team of 5 analysts generating insights from Fidelity\'s customer and market data. I led development of customer segmentation models that improved marketing campaign effectiveness by 35% and increased customer lifetime value by 22%. My team built predictive analytics that improved customer retention rates by 28%. I established automated reporting frameworks using Tableau and Python, reducing manual work by 70%. I initiated Fidelity\'s first machine learning pilot projects.',
        link: 'https://www.fidelity.com/',
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
        description: 'MLflow, Kubeflow, SageMaker, CI/CD for ML, A/B Testing, Model Monitoring, Docker, Kubernetes',
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
        icon: `src/images/icon.png`,
      },
    },
  ],
};