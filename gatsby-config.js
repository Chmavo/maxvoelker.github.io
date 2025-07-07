module.exports = {
  siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://chmavo.github.io/maxvoelker.github.io/`,
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
        description: 'Data Science Manager, AWS Fraud Prevention - May 2023 - Present',
        link: 'https://aws.amazon.com/',
      },
      {
        name: 'Amazon Web Services (AWS)',
        description: 'Data Scientist, AWS Fraud Prevention - May 2021 - April 2023',
        link: 'https://aws.amazon.com/',
      },
      {
        name: 'Fidelity Investments',
        description: 'Senior Manager, Data Science - January 2018 - April 2021',
        link: 'https://www.fidelity.com/',
      },
      {
        name: 'Fidelity Investments',
        description: 'Manager, Analytics & Insights - January 2016 - December 2017',
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
            title: "Your Site's RSS Feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
