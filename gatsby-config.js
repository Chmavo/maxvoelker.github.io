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
    about: `I'm passionate about using data science to solve real-world problems at scale. Currently at AWS, I lead ML/AI strategy for fraud prevention, where my team has deployed 200+ models that reduced manual work by 85% with over 99% accuracy. My background spans both technical leadership and hands-on development - from architecting real-time fraud prevention platforms protecting Fortune 500 businesses to mentoring data scientists through career growth.`,
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
          'Directed cross-functional team in launching AWS Generative AI fraud detection system, reducing fraud by 92% while maintaining seamless user experience through advanced deep learning models.',
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
        description: 'Data Science Manager, AWS Fraud Prevention - May 2023 - Present\n\nAs a Data Science Manager at AWS, I lead strategic ML/AI initiatives that protect over 90% of Fortune 500 businesses from fraud. I oversee a team of 12 data scientists and ML engineers, where I\'ve successfully guided the deployment of 200+ machine learning models that achieved a remarkable 85% reduction in manual review work while maintaining over 99% accuracy. My role involves architecting end-to-end fraud prevention solutions, from real-time detection systems processing millions of transactions daily to sophisticated anomaly detection algorithms. I\'ve been instrumental in launching AWS\'s Generative AI fraud detection capabilities, which reduced fraud incidents by 92% across our client portfolio. Beyond technical leadership, I focus heavily on team development - implementing structured mentorship programs that have helped 8 team members achieve promotions and establishing cross-functional collaboration frameworks that improved our deployment velocity by 40%.',
        link: 'https://aws.amazon.com/',
      },
      {
        name: 'Amazon Web Services (AWS)',
        description: 'Data Scientist, AWS Fraud Prevention - May 2021 - April 2023\n\nDuring my tenure as a Data Scientist at AWS, I was deeply involved in building the foundation of what would become our industry-leading fraud prevention platform. I designed and implemented machine learning models using deep neural networks, transformers, and computer vision techniques to detect sophisticated fraud patterns across multiple payment channels. One of my proudest achievements was developing a real-time anomaly detection system that processes over 10 million transactions per day with sub-100ms latency. I collaborated closely with product teams to translate complex ML concepts into business value, resulting in $15M in annual savings for our enterprise clients. My work on feature engineering and model optimization directly contributed to achieving 97% fraud detection accuracy while reducing false positives by 60%. I also took initiative in establishing MLOps best practices, implementing CI/CD pipelines for model deployment that reduced our time-to-production from weeks to days.',
        link: 'https://aws.amazon.com/',
      },
      {
        name: 'Fidelity Investments',
        description: 'Senior Manager, Data Science - January 2018 - April 2021\n\nAt Fidelity, I led the transformation of risk management practices for a $32 billion investment portfolio through advanced analytics and machine learning. I built and managed a team of 8 data scientists, where I established a data-driven culture that fundamentally changed how we approached investment risk assessment. My team developed a comprehensive risk management platform that reduced false positives by 65% while ensuring full regulatory compliance across multiple jurisdictions. I pioneered the use of alternative data sources and advanced statistical modeling techniques, creating predictive models that improved our risk-adjusted returns by 18%. A significant part of my role involved stakeholder management - I regularly presented complex analytical findings to C-level executives and regulatory bodies, translating technical insights into actionable business strategies. I also implemented a robust model governance framework that became the template for other business units across Fidelity.',
        link: 'https://www.fidelity.com/',
      },
      {
        name: 'Fidelity Investments',
        description: 'Manager, Analytics & Insights - January 2016 - December 2017\n\nThis role marked my transition into leadership, where I managed a team of 5 analysts focused on generating actionable insights from Fidelity\'s vast customer and market data. I spearheaded the development of customer segmentation models that improved our marketing campaign effectiveness by 35% and increased customer lifetime value by 22%. My team was responsible for building predictive analytics capabilities that helped identify at-risk customers, resulting in a 28% improvement in retention rates. I established standardized reporting frameworks and implemented automated dashboard solutions using Tableau and Python, which reduced manual reporting time by 70% and improved data accuracy across business units. During this period, I also initiated Fidelity\'s first machine learning pilot projects, laying the groundwork for the advanced analytics capabilities I would later build as Senior Manager. I took pride in mentoring junior analysts, with 4 out of 5 team members receiving promotions during my tenure.',
        link: 'https://www.fidelity.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Machine Learning & AI',
        description:
          'Deep Neural Networks, Transformers, LLMs (GPT, BERT), Computer Vision, Anomaly Detection, Time Series Analysis',
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};