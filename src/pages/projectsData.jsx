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