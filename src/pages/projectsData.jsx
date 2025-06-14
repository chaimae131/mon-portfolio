const projectsData = [
    {
      id: "secure-home-lab",
      title: "Secure Home Lab",
      images: ["./lab.jpg"],
      link: "/projects/secure-home-lab",
      description: "Built a secure home lab environment with pfSense, Active Directory, penetration testing tools, monitoring, and forensic analysis systems.",
      sections: [
        {
          image: "/lab1.jpg",
          text: "Network setup using pfSense to create isolated VLANs and secure traffic flow."
        },
        {
          image: "/lab3.jpg",
          text: "Deployment of Active Directory and integration of both clients and servers."
        },
        {
          image: "/lab5.png",
          text: "Penetration testing on Active Directory using Kali Linux."
        },
        {
          image: "/lab2.jpg",
          text: "Deployment of Splunk to monitor logs and activities from the AD environment."
        },
        {
          image: "/lab4.png",
          text: "Using Tsurugi Linux for digital forensics and incident response (DFIR)."
        }
      ]
    },
    {
      id: "Cloud-SIEM",
      title: "Cloud-native SIEM (AWS)",
      images: ["./cloud.jpg"],
      link: "/projects/Cloud-SIEM",
      description: "Designed a full SOC stack (TheHive, Cortex, Elasticsearch, MISP) with Docker; integrated threat intelligence and automated incident enrichment.",
      sections: [
        {
          image: "/cloud0.jpg",
          text: "GuardDuty enabled to monitor EC2 instances for suspicious access attempts, such as unauthorized logins, port scanning, or anomalous API activity, enhancing threat detection and incident response capabilities."
        },
        {
          image: "/cloud1.jpg",
          text: "The Lambda function restructures GuardDuty findings and forwards them to S3 and TheHive for analysis."
        },
        {
          image: "/cloud2.jpg",
          text: "EventBridge rule created to trigger the Lambda function upon GuardDuty findings."
        },
        {
          image: "/cloud3.png",
          text: "SQS queue created to handle asynchronous communication from Lambda to the main instance."
        },
       {
          image: "/cloud4.png",
          text: "Containers deployed using Docker Compose, enabling modular and scalable services. TheHive is accessible via the instance's public IP on port 9000 for case management and incident tracking."
        },
        {
          image: "/cloud5.png",
          text: "Cortex is accessible through the instance's public IP on port 9001, providing automated observable analysis and response capabilities."
        },
        {
          image: "/cloud6.png",
          text: "MISP is accessible via the instance's public IP, allowing centralized storage and sharing of threat intelligence data."
        },
        {
          image: "/cloud8.jpg",
          text: "Cortex and MISP are fully integrated with TheHive to enable automated case enrichment, analysis, and collaborative threat intelligence workflows."
        },
        {
          image: "/cloud9.png",
          text: "TheHive manages and tracks security incidents as structured cases with associated tasks and observables."
        },
        {
          image: "/cloud10.png",
          text: "The VirusTotal analyzer on Cortex enriches observables by querying VirusTotal for threat intelligence data."
        },
        {
          image: "/cloud11.png",
          text: "The Cloudflare responder on Cortex automates remediation actions such as IP blocking via the Cloudflare API."
        },
        {
          image: "/cloud12.png",
          text: "MISP stores and correlates observables to facilitate threat sharing and detection of known indicators."
        },
        {
          image: "/cloud7.jpg",
          text: "Kibana accessible via the instance's public IP to visualize dashboards of TheHive cases."
        }
      ]
    },
    { 
      id: "AI-recruitement-app",
      title: "Intelligent Recruitment Web App",
      images: ["./ai.png"],
      link: "/projects/AI-recruitement-app",
      description: "Built a web application utilising AI to analyze CVs, score candidates, and simulate asynchronous job interviews.",
      sections: [
        {
          image: "/ai1.png",
          text: "Two user roles are available: 'Candidate' for searching internships or jobs and attending remote interviews, and 'Company' for posting offers and managing recruitment."
        },
        {
          image: "/ai2.png",
          text: "The company dashboard features a side menu for managing job offers, posting new listings, handling interviews, editing company details, and logging out."
        },
        {
          image: "/ai3.png",
          text: "Displays all job offers posted by the company."
        },
        {
          image: "/ai4.png",
          text: "The candidate dashboard features a side menu for browsing job offers, tracking applications, editing profile, and logging out."
        },
        {
          image: "/ai5.png",
          text: "Candidates can apply to active job offers; their CV is automatically sent to the company, and they can track their application status."
        },
        {
          image: "/ai6.png",
          text: "Once the application is submitted, a cross-encoder model compares the job offer and CV to predict a matching score."
        },
        {
          image: "/ai7.png",
          text: "If the score is high, the recruiter updates the application status to 'Interview'."
        },
        {
          image: "/ai8.png",
          text: "During the asynchronous interview, the candidate records and uploads video responses to displayed questions."
        },
        {
          image: "/ai9.png",
          text: "→ DeepFace analyzes facial expressions to detect stress and compute a stress score.\n → Celery runs emotion analysis and stress scoring tasks in the background.\n→ Whisper transcribes spoken answers to enable content analysis."
        },
        {
          image: "/ai10.png",
          text: "Matplotlib generates visual reports showing the evolution of the candidate's emotions across responses."
        },
        {
          image: "/ai11.png",
          text: "A dedicated dashboard displays emotional trends throughout the interview."
        }
      ]
    },
    { 
      id: "esxi-vcenter",
      title: "Setup of a Virtualized Environment (VMware ESXi + vCenter)",
      images: ["./esxi.png"],
      link: "/projects/esxi-vcenter",
      description: "Building a complete virtualized infrastructure using VMware ESXi and vCenter Server, including the deployment and configuration of essential network services to simulate a real-world IT environment.",
      sections: [
        {
          image: "/esxi1.png",
          text: "Installation and initial configuration of vCenter Server to centralize and manage ESXi hosts and virtual machines efficiently."
        },
        {
          image: "/esxi2.png",
          text: "Creation and setup of virtual machines with proper network configurations to ensure communication between VMs and external networks."
        },
        {
          image: "/esxi3.png",
          text: "Deployment of an FTP server within a VM, allowing file sharing and testing secure file transfer between different virtual machines."
        },
        {
          image: "/esxi4.png",
          text: "Setup of the Apache2 web server on a Linux virtual machine, hosting web content and enabling basic web services in the virtualized environment."
        },
        {
          image: "/esxi5.png",
          text: "Configuration of SSH service on Linux VMs, securing remote access by disabling password authentication and enforcing key-based authentication for enhanced security."
        }
      ]
    },
    {
      id: "cbac-django",
      title: "CBAC Django Application",
      images: ["./cbac1.png"],
      link: "/projects/cbac-django",
      description: "Development of a web application implementing content-based access control, combined with AI to analyze post content. The system automatically applies age restrictions.",
      sections: [
        {
          image: "/cbac2.png",
          text: "The homepage presents the key features of the platform, including AI-powered content filtering and secure posting options."
        },
        {
          image: "/cbac3.png",
          text: "An interface where users can create and share posts, whether text, images, or videos, with automatic content analysis applied before publication."
        },
        {
          image: "/cbac4.png",
          text: "The content view page for adult users, allowing unrestricted access to all published posts, including those with sensitive material."
        },
        {
          image: "/cbac5.png",
          text: "The content view page for minor users, where only safe, public posts are displayed, and sensitive or inappropriate content is automatically restricted."
        }
      ]
    },
    {
      id: "haac",
      title: "Hardening as Code",
      images: ["./haac.png"],
      link: "/projects/haac",
      description: "A static and dynamic hardening for critical Linux system components with scripts. The project includes checking the system status and automating the execution using Ansible.",
      sections: [
        {
          image: "/haac1.png",
          text: "Project architecture where the main script orchestrates static and dynamic hardening tasks."
        },
        {
          image: "/haac2.png",
          text: "Static hardening script interacting with users for confirmation before applying changes."
        },
        {
          image: "/haac4.png",
          text: "Dynamic hardening to automatically adapt based on system status."
        },
        {
          image: "/haac3.png",
          text: "Auditing system security by testing and validating applied hardening measures."
        },
        {
          image: "/haac5.png",
          text: "Monitoring and checking the system's current security status."
        },
        {
          image: "/haac6.png",
          text: "Automating all hardening processes using Ansible playbooks."
        }
      ]
    },
    {
      id: "web-servers-security", 
      title: "Web Servers Security",
      images: ["./web1.png"],
      link: "/projects/web-servers-security",
      description: "Built a secure network in GNS3 to protect a web server using firewalls, proxies, and security appliances.",
      sections: [
        {
          image: "/web2.png",
          text: "Set up FortiGate firewall policies and implemented a DMZ to isolate the web servers from internal networks."
        },
        {
          image: "/web3.png",
          text: "Configured a reverse proxy to manage incoming traffic and hide the real IP adress of the backend server."
        },
        {
          image: "/web4.png",
          text: "Deployed FortiWeb for advanced web application protection and threat detection."
        },
        {
          image: "/web5.png",
          text: "Conducted tests to verify the effectiveness of all security measures in place."
        }
      ]

    },
    {
      id: "glucocare",
      title: "A Web App for Diabetes Management",
      images: ["./glucocare.png"],
      link: "/projects/glucocare",
      description: "Developed a secure web app where patients and doctors can track diabetes data, communicate, and manage treatment effectively.",
      sections: [
        {
          image: "/glucocare1.png",
          text: "Patient dashboard showing features like profile, notifications, notes, and health data tracking."
        },
        {
          image: "/glucocare2.png",
          text: "Interface for patients to create and manage personal health notes."
        },
        {
          image: "/glucocare3.png",
          text: "Graph displaying blood glucose levels before and after meals."
        },
        {
          image: "/glucocare5.png",
          text: "Personalized chatbot to assist patients with diabetes-related questions."
        },
        {
          image: "/glucocare6.png",
          text: "Doctor's dashboard to manage and monitor patient information."
        },
        {
          image: "/glucocare7.png",
          text: "Doctor’s view of patients’ profiles, notes history, and blood glucose graphs."
        },
        {
          image: "/glucocare8.png",
          text: "Doctor setting personalized reminders for patients."
        },
        {
          image: "/glucocare9.png",
          text: "Chat system for scheduling consultations between patients and doctors."
        }
      ]

    },
    // Add more projects as needed
  ];
  
  export default projectsData;