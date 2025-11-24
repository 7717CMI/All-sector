import { useState, useRef, useEffect } from 'react'
import { Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

interface AllSectorProps {
  onNavigate: (page: string) => void
}

type Proposition = 'proposition1' | 'proposition2' | 'proposition3'

interface DistributorData {
  customerName: string
  companyName: string
  companySize: string
  industryArea: string
  annualRevenue: string
  geographicsFootprint: string
  keyContact: string
  designation: string
  emailAddress: string
  phoneWhatsApp: string
  linkedinProfile: string
  websiteURL: string
  // Current IT Infrastructure Landscape (for Proposition 1, 2 & 3)
  numberOfEndpoints?: string
  numberOfServers?: string
  cloudFootprint?: string
  dataCenterDetails?: string
  networkSize?: string
  existingSecurityStack?: string
  // Current IT Support Setup (for Proposition 2 & 3)
  presenceOfInternalIT?: string
  existingMSPVendor?: string
  currentSLAsAndSupportHours?: string
  painPointsWithExistingIT?: string
  averageDowntimeIncidents?: string
  existingMonitoringTools?: string
  // Financial & Commercial Datapoints (for Proposition 3)
  itBudgetApprox?: string
  currentITSpend?: string
  currentMSPContractValue?: string
  pricingPreferences?: string
  renewalContractTimeline?: string
  budgetAvailableForOutsourcing?: string
  // CMI Insights (for Proposition 3)
  customerBenchmarkingSummary?: string
  additionalCommercialNotes?: string
}

export function AllSector({ onNavigate }: AllSectorProps) {
  const { theme } = useTheme()
  const isDark = theme === 'dark'

  const [activeProposition, setActiveProposition] = useState<Proposition>('proposition1')
  const topScrollRef = useRef<HTMLDivElement>(null)
  const tableScrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const topScroll = topScrollRef.current
    const tableScroll = tableScrollRef.current

    const handleTopScroll = () => {
      if (tableScroll && topScroll) {
        tableScroll.scrollLeft = topScroll.scrollLeft
      }
    }

    const handleTableScroll = () => {
      if (topScroll && tableScroll) {
        topScroll.scrollLeft = tableScroll.scrollLeft
      }
    }

    topScroll?.addEventListener('scroll', handleTopScroll)
    tableScroll?.addEventListener('scroll', handleTableScroll)

    return () => {
      topScroll?.removeEventListener('scroll', handleTopScroll)
      tableScroll?.removeEventListener('scroll', handleTableScroll)
    }
  }, [])

  // Proposition 1 Data - Basic IT Infrastructure (All Sectors)
  const proposition1Data: DistributorData[] = [
    {
      customerName: "John Smith",
      companyName: "Global Bank Corp",
      companySize: "Large Enterprise",
      industryArea: "Banking, Financial and Insurance (BFSI)",
      annualRevenue: "$2.5B",
      geographicsFootprint: "North America, Europe, Asia",
      keyContact: "John Smith",
      designation: "CIO",
      emailAddress: "john.smith@globalbank.com",
      phoneWhatsApp: "+1-555-0101",
      linkedinProfile: "linkedin.com/in/johnsmith",
      websiteURL: "www.globalbank.com",
      numberOfEndpoints: "2500",
      numberOfServers: "150 (80 physical, 70 virtual)",
      cloudFootprint: "Azure - 200 VMs, AWS - 50 instances"
    },
    {
      customerName: "Sarah Johnson",
      companyName: "SkyHigh Airlines",
      companySize: "Large Enterprise",
      industryArea: "Airline Industry",
      annualRevenue: "$1.8B",
      geographicsFootprint: "Global - 50+ countries",
      keyContact: "Sarah Johnson",
      designation: "VP IT Operations",
      emailAddress: "s.johnson@skyhigh.com",
      phoneWhatsApp: "+1-555-0102",
      linkedinProfile: "linkedin.com/in/sarahjohnson",
      websiteURL: "www.skyhigh.com",
      numberOfEndpoints: "3500",
      numberOfServers: "200 (100 physical, 100 virtual)",
      cloudFootprint: "AWS - 300 instances, GCP - 100 instances"
    },
    {
      customerName: "Dr. Michael Chen",
      companyName: "HealthCare Plus",
      companySize: "Large Enterprise",
      industryArea: "Healthcare, Pharmaceuticals & Life Sciences",
      annualRevenue: "$3.2B",
      geographicsFootprint: "USA, Canada",
      keyContact: "Dr. Michael Chen",
      designation: "Chief Technology Officer",
      emailAddress: "m.chen@healthcareplus.com",
      phoneWhatsApp: "+1-555-0103",
      linkedinProfile: "linkedin.com/in/michaelchen",
      websiteURL: "www.healthcareplus.com",
      numberOfEndpoints: "5000",
      numberOfServers: "300 (150 physical, 150 virtual)",
      cloudFootprint: "Azure - 400 VMs (HIPAA compliant)"
    },
    {
      customerName: "Robert Anderson",
      companyName: "TechManufacture Inc",
      companySize: "Large Enterprise",
      industryArea: "Manufacturing",
      annualRevenue: "$1.5B",
      geographicsFootprint: "North America, Mexico",
      keyContact: "Robert Anderson",
      designation: "IT Director",
      emailAddress: "r.anderson@techmanufacture.com",
      phoneWhatsApp: "+1-555-0104",
      linkedinProfile: "linkedin.com/in/robertanderson",
      websiteURL: "www.techmanufacture.com",
      numberOfEndpoints: "1800",
      numberOfServers: "120 (70 physical, 50 virtual)",
      cloudFootprint: "AWS - 80 instances"
    },
    {
      customerName: "Emily Davis",
      companyName: "ShopSmart Retail",
      companySize: "Large Enterprise",
      industryArea: "Retail & E-commerce",
      annualRevenue: "$4.5B",
      geographicsFootprint: "USA - 500 stores",
      keyContact: "Emily Davis",
      designation: "VP Technology",
      emailAddress: "e.davis@shopsmart.com",
      phoneWhatsApp: "+1-555-0105",
      linkedinProfile: "linkedin.com/in/emilydavis",
      websiteURL: "www.shopsmart.com",
      numberOfEndpoints: "8000",
      numberOfServers: "250 (100 physical, 150 virtual)",
      cloudFootprint: "AWS - 500 instances, Azure - 200 VMs"
    },
    {
      customerName: "David Wilson",
      companyName: "InfoTech Solutions",
      companySize: "Large Enterprise",
      industryArea: "IT/ITES & BPO",
      annualRevenue: "$800M",
      geographicsFootprint: "India, USA, UK",
      keyContact: "David Wilson",
      designation: "Head of Infrastructure",
      emailAddress: "d.wilson@infotech.com",
      phoneWhatsApp: "+1-555-0106",
      linkedinProfile: "linkedin.com/in/davidwilson",
      websiteURL: "www.infotech.com",
      numberOfEndpoints: "10000",
      numberOfServers: "400 (200 physical, 200 virtual)",
      cloudFootprint: "Azure - 600 VMs, AWS - 400 instances"
    },
    {
      customerName: "Dr. Patricia Brown",
      companyName: "State University",
      companySize: "Large Enterprise",
      industryArea: "Education (Schools, Colleges, Universities)",
      annualRevenue: "$500M",
      geographicsFootprint: "Multiple campuses - USA",
      keyContact: "Dr. Patricia Brown",
      designation: "CIO",
      emailAddress: "p.brown@stateuniversity.edu",
      phoneWhatsApp: "+1-555-0107",
      linkedinProfile: "linkedin.com/in/patriciabrown",
      websiteURL: "www.stateuniversity.edu",
      numberOfEndpoints: "15000",
      numberOfServers: "180 (90 physical, 90 virtual)",
      cloudFootprint: "Microsoft 365 + Azure - 300 VMs"
    },
    {
      customerName: "James Martinez",
      companyName: "City Government",
      companySize: "Large Enterprise",
      industryArea: "Government & Public Sector",
      annualRevenue: "$1.2B (Budget)",
      geographicsFootprint: "Metropolitan area",
      keyContact: "James Martinez",
      designation: "Chief Information Security Officer",
      emailAddress: "j.martinez@citygovernment.gov",
      phoneWhatsApp: "+1-555-0108",
      linkedinProfile: "linkedin.com/in/jamesmartinez",
      websiteURL: "www.citygovernment.gov",
      numberOfEndpoints: "5000",
      numberOfServers: "250 (180 physical, 70 virtual)",
      cloudFootprint: "Government Cloud - Azure Gov - 150 VMs"
    },
    {
      customerName: "Lisa Thompson",
      companyName: "PowerGrid Energy",
      companySize: "Large Enterprise",
      industryArea: "Energy & Utilities",
      annualRevenue: "$3.8B",
      geographicsFootprint: "Regional - 5 states",
      keyContact: "Lisa Thompson",
      designation: "Director IT Infrastructure",
      emailAddress: "l.thompson@powergrid.com",
      phoneWhatsApp: "+1-555-0109",
      linkedinProfile: "linkedin.com/in/lisathompson",
      websiteURL: "www.powergrid.com",
      numberOfEndpoints: "3000",
      numberOfServers: "200 (140 physical, 60 virtual)",
      cloudFootprint: "Hybrid - Azure - 100 VMs"
    },
    {
      customerName: "Mark Garcia",
      companyName: "PetroTech Corp",
      companySize: "Large Enterprise",
      industryArea: "Oil & Gas",
      annualRevenue: "$5.5B",
      geographicsFootprint: "Global operations",
      keyContact: "Mark Garcia",
      designation: "VP IT Services",
      emailAddress: "m.garcia@petrotech.com",
      phoneWhatsApp: "+1-555-0110",
      linkedinProfile: "linkedin.com/in/markgarcia",
      websiteURL: "www.petrotech.com",
      numberOfEndpoints: "4000",
      numberOfServers: "350 (250 physical, 100 virtual)",
      cloudFootprint: "AWS - 200 instances, Private cloud"
    },
    {
      customerName: "Jennifer Lee",
      companyName: "LogiChain Solutions",
      companySize: "SME",
      industryArea: "Logistics & Supply Chain",
      annualRevenue: "$250M",
      geographicsFootprint: "North America",
      keyContact: "Jennifer Lee",
      designation: "IT Manager",
      emailAddress: "j.lee@logichain.com",
      phoneWhatsApp: "+1-555-0111",
      linkedinProfile: "linkedin.com/in/jenniferlee",
      websiteURL: "www.logichain.com",
      numberOfEndpoints: "800",
      numberOfServers: "40 (20 physical, 20 virtual)",
      cloudFootprint: "AWS - 60 instances"
    },
    {
      customerName: "Thomas White",
      companyName: "TransportCo",
      companySize: "Large Enterprise",
      industryArea: "Transportation & Aviation",
      annualRevenue: "$1.1B",
      geographicsFootprint: "USA, Canada, Mexico",
      keyContact: "Thomas White",
      designation: "CTO",
      emailAddress: "t.white@transportco.com",
      phoneWhatsApp: "+1-555-0112",
      linkedinProfile: "linkedin.com/in/thomaswhite",
      websiteURL: "www.transportco.com",
      numberOfEndpoints: "2200",
      numberOfServers: "120 (60 physical, 60 virtual)",
      cloudFootprint: "Azure - 150 VMs"
    },
    {
      customerName: "Amanda Clark",
      companyName: "Luxury Hotels International",
      companySize: "Large Enterprise",
      industryArea: "Hospitality & Travel",
      annualRevenue: "$900M",
      geographicsFootprint: "Global - 100+ properties",
      keyContact: "Amanda Clark",
      designation: "VP IT Operations",
      emailAddress: "a.clark@luxuryhotels.com",
      phoneWhatsApp: "+1-555-0113",
      linkedinProfile: "linkedin.com/in/amandaclark",
      websiteURL: "www.luxuryhotels.com",
      numberOfEndpoints: "6000",
      numberOfServers: "180 (80 physical, 100 virtual)",
      cloudFootprint: "AWS - 250 instances, Azure - 100 VMs"
    },
    {
      customerName: "Richard Harris",
      companyName: "PropertyDev Group",
      companySize: "Large Enterprise",
      industryArea: "Real Estate & Facilities Management",
      annualRevenue: "$2.2B",
      geographicsFootprint: "Major US cities",
      keyContact: "Richard Harris",
      designation: "Chief Digital Officer",
      emailAddress: "r.harris@propertydev.com",
      phoneWhatsApp: "+1-555-0114",
      linkedinProfile: "linkedin.com/in/richardharris",
      websiteURL: "www.propertydev.com",
      numberOfEndpoints: "1500",
      numberOfServers: "80 (40 physical, 40 virtual)",
      cloudFootprint: "Azure - 120 VMs"
    },
    {
      customerName: "Maria Rodriguez",
      companyName: "StreamMedia Networks",
      companySize: "Large Enterprise",
      industryArea: "Media & Entertainment",
      annualRevenue: "$1.4B",
      geographicsFootprint: "North America",
      keyContact: "Maria Rodriguez",
      designation: "CTO",
      emailAddress: "m.rodriguez@streammedia.com",
      phoneWhatsApp: "+1-555-0115",
      linkedinProfile: "linkedin.com/in/mariarodriguez",
      websiteURL: "www.streammedia.com",
      numberOfEndpoints: "2500",
      numberOfServers: "300 (100 physical, 200 virtual)",
      cloudFootprint: "AWS - 500 instances, CDN infrastructure"
    },
    {
      customerName: "Kevin Taylor",
      companyName: "AutoTech Manufacturing",
      companySize: "Large Enterprise",
      industryArea: "Automotive",
      annualRevenue: "$3.5B",
      geographicsFootprint: "Global - 15 plants",
      keyContact: "Kevin Taylor",
      designation: "Director IT",
      emailAddress: "k.taylor@autotech.com",
      phoneWhatsApp: "+1-555-0116",
      linkedinProfile: "linkedin.com/in/kevintaylor",
      websiteURL: "www.autotech.com",
      numberOfEndpoints: "5000",
      numberOfServers: "250 (150 physical, 100 virtual)",
      cloudFootprint: "Azure - 200 VMs, Private cloud"
    },
    {
      customerName: "Susan Moore",
      companyName: "LegalPro Services",
      companySize: "SME",
      industryArea: "Professional Services (Legal, Accounting, Consulting)",
      annualRevenue: "$180M",
      geographicsFootprint: "USA - 25 offices",
      keyContact: "Susan Moore",
      designation: "IT Director",
      emailAddress: "s.moore@legalpro.com",
      phoneWhatsApp: "+1-555-0117",
      linkedinProfile: "linkedin.com/in/susanmoore",
      websiteURL: "www.legalpro.com",
      numberOfEndpoints: "1200",
      numberOfServers: "50 (25 physical, 25 virtual)",
      cloudFootprint: "Microsoft 365 + Azure - 80 VMs"
    },
    {
      customerName: "Daniel Jackson",
      companyName: "BuildTech Construction",
      companySize: "Large Enterprise",
      industryArea: "Construction & Engineering",
      annualRevenue: "$2.8B",
      geographicsFootprint: "USA, Canada",
      keyContact: "Daniel Jackson",
      designation: "Head of IT",
      emailAddress: "d.jackson@buildtech.com",
      phoneWhatsApp: "+1-555-0118",
      linkedinProfile: "linkedin.com/in/danieljackson",
      websiteURL: "www.buildtech.com",
      numberOfEndpoints: "3000",
      numberOfServers: "120 (60 physical, 60 virtual)",
      cloudFootprint: "Azure - 150 VMs"
    },
    {
      customerName: "Nancy Williams",
      companyName: "AgriTech Solutions",
      companySize: "SME",
      industryArea: "Agriculture & Agri-tech",
      annualRevenue: "$150M",
      geographicsFootprint: "USA - Midwest region",
      keyContact: "Nancy Williams",
      designation: "CIO",
      emailAddress: "n.williams@agritech.com",
      phoneWhatsApp: "+1-555-0119",
      linkedinProfile: "linkedin.com/in/nancywilliams",
      websiteURL: "www.agritech.com",
      numberOfEndpoints: "500",
      numberOfServers: "30 (15 physical, 15 virtual)",
      cloudFootprint: "AWS - 50 instances"
    },
    {
      customerName: "Christopher Miller",
      companyName: "Global Aid Foundation",
      companySize: "SME",
      industryArea: "Non-profits / NGOs",
      annualRevenue: "$80M (Donations)",
      geographicsFootprint: "Global - 40+ countries",
      keyContact: "Christopher Miller",
      designation: "IT Manager",
      emailAddress: "c.miller@globalaid.org",
      phoneWhatsApp: "+1-555-0120",
      linkedinProfile: "linkedin.com/in/christophermiller",
      websiteURL: "www.globalaid.org",
      numberOfEndpoints: "800",
      numberOfServers: "40 (20 physical, 20 virtual)",
      cloudFootprint: "Microsoft 365 + Azure Non-profit - 60 VMs"
    }
  ]

  // Proposition 2 Data - Advanced IT Infrastructure & Support (All Sectors)
  const proposition2Data: DistributorData[] = [
    {
      customerName: "John Smith",
      companyName: "Global Bank Corp",
      companySize: "Large Enterprise",
      industryArea: "Banking, Financial and Insurance (BFSI)",
      annualRevenue: "$2.5B",
      geographicsFootprint: "North America, Europe, Asia",
      keyContact: "John Smith",
      designation: "CIO",
      emailAddress: "john.smith@globalbank.com",
      phoneWhatsApp: "+1-555-0101",
      linkedinProfile: "linkedin.com/in/johnsmith",
      websiteURL: "www.globalbank.com",
      numberOfEndpoints: "2500",
      numberOfServers: "150 (80 physical, 70 virtual)",
      cloudFootprint: "Azure - 200 VMs, AWS - 50 instances",
      dataCenterDetails: "3 on-prem data centers + Azure cloud",
      networkSize: "50 routers, 200 switches, 25 firewalls, MPLS network",
      existingSecurityStack: "CrowdStrike EDR, Palo Alto Firewalls, Splunk SIEM",
      presenceOfInternalIT: "120 IT staff (Network, Security, Infrastructure teams)",
      existingMSPVendor: "TCS for infrastructure support",
      currentSLAsAndSupportHours: "24x7 support, 15-min response time"
    },
    {
      customerName: "Sarah Johnson",
      companyName: "SkyHigh Airlines",
      companySize: "Large Enterprise",
      industryArea: "Airline Industry",
      annualRevenue: "$1.8B",
      geographicsFootprint: "Global - 50+ countries",
      keyContact: "Sarah Johnson",
      designation: "VP IT Operations",
      emailAddress: "s.johnson@skyhigh.com",
      phoneWhatsApp: "+1-555-0102",
      linkedinProfile: "linkedin.com/in/sarahjohnson",
      websiteURL: "www.skyhigh.com",
      numberOfEndpoints: "3500",
      numberOfServers: "200 (100 physical, 100 virtual)",
      cloudFootprint: "AWS - 300 instances, GCP - 100 instances",
      dataCenterDetails: "2 primary data centers + multi-cloud",
      networkSize: "80 routers, 300 switches, 40 firewalls, SD-WAN",
      existingSecurityStack: "Sentinel One, Fortinet Firewalls, IBM QRadar",
      presenceOfInternalIT: "150 IT staff across operations, security, development",
      existingMSPVendor: "Accenture for managed services",
      currentSLAsAndSupportHours: "24x7 global support, 10-min critical response"
    },
    {
      customerName: "Dr. Michael Chen",
      companyName: "HealthCare Plus",
      companySize: "Large Enterprise",
      industryArea: "Healthcare, Pharmaceuticals & Life Sciences",
      annualRevenue: "$3.2B",
      geographicsFootprint: "USA, Canada",
      keyContact: "Dr. Michael Chen",
      designation: "Chief Technology Officer",
      emailAddress: "m.chen@healthcareplus.com",
      phoneWhatsApp: "+1-555-0103",
      linkedinProfile: "linkedin.com/in/michaelchen",
      websiteURL: "www.healthcareplus.com",
      numberOfEndpoints: "5000",
      numberOfServers: "300 (150 physical, 150 virtual)",
      cloudFootprint: "Azure - 400 VMs (HIPAA compliant)",
      dataCenterDetails: "4 HIPAA-compliant data centers + Azure healthcare",
      networkSize: "120 routers, 400 switches, 60 firewalls, private WAN",
      existingSecurityStack: "Microsoft Defender, Cisco Firepower, Azure Sentinel",
      presenceOfInternalIT: "200 IT staff (EMR systems, security, infrastructure)",
      existingMSPVendor: "Optum for healthcare IT services",
      currentSLAsAndSupportHours: "24x7 support, 5-min critical response for clinical systems"
    },
    {
      customerName: "Robert Anderson",
      companyName: "TechManufacture Inc",
      companySize: "Large Enterprise",
      industryArea: "Manufacturing",
      annualRevenue: "$1.5B",
      geographicsFootprint: "North America, Mexico",
      keyContact: "Robert Anderson",
      designation: "IT Director",
      emailAddress: "r.anderson@techmanufacture.com",
      phoneWhatsApp: "+1-555-0104",
      linkedinProfile: "linkedin.com/in/robertanderson",
      websiteURL: "www.techmanufacture.com",
      numberOfEndpoints: "1800",
      numberOfServers: "120 (70 physical, 50 virtual)",
      cloudFootprint: "AWS - 80 instances",
      dataCenterDetails: "2 on-prem data centers + AWS cloud",
      networkSize: "40 routers, 150 switches, 20 firewalls, OT network",
      existingSecurityStack: "Trend Micro, Fortinet, SCADA security tools",
      presenceOfInternalIT: "45 IT staff (OT/IT convergence team)",
      existingMSPVendor: "Siemens for OT support, HCL for IT",
      currentSLAsAndSupportHours: "24x6 support, 30-min response time"
    },
    {
      customerName: "Emily Davis",
      companyName: "ShopSmart Retail",
      companySize: "Large Enterprise",
      industryArea: "Retail & E-commerce",
      annualRevenue: "$4.5B",
      geographicsFootprint: "USA - 500 stores",
      keyContact: "Emily Davis",
      designation: "VP Technology",
      emailAddress: "e.davis@shopsmart.com",
      phoneWhatsApp: "+1-555-0105",
      linkedinProfile: "linkedin.com/in/emilydavis",
      websiteURL: "www.shopsmart.com",
      numberOfEndpoints: "8000",
      numberOfServers: "250 (100 physical, 150 virtual)",
      cloudFootprint: "AWS - 500 instances, Azure - 200 VMs",
      dataCenterDetails: "3 regional data centers + multi-cloud",
      networkSize: "200 routers, 600 switches (stores), 80 firewalls, SD-WAN",
      existingSecurityStack: "McAfee EDR, Cisco ASA, Splunk",
      presenceOfInternalIT: "180 IT staff (retail systems, e-commerce, infrastructure)",
      existingMSPVendor: "Wipro for store IT support",
      currentSLAsAndSupportHours: "24x7 support, 20-min response for POS systems"
    },
    {
      customerName: "David Wilson",
      companyName: "InfoTech Solutions",
      companySize: "Large Enterprise",
      industryArea: "IT/ITES & BPO",
      annualRevenue: "$800M",
      geographicsFootprint: "India, USA, UK",
      keyContact: "David Wilson",
      designation: "Head of Infrastructure",
      emailAddress: "d.wilson@infotech.com",
      phoneWhatsApp: "+1-555-0106",
      linkedinProfile: "linkedin.com/in/davidwilson",
      websiteURL: "www.infotech.com",
      numberOfEndpoints: "10000",
      numberOfServers: "400 (200 physical, 200 virtual)",
      cloudFootprint: "Azure - 600 VMs, AWS - 400 instances",
      dataCenterDetails: "5 global data centers + multi-cloud",
      networkSize: "150 routers, 500 switches, 100 firewalls, global MPLS",
      existingSecurityStack: "Symantec EDR, Checkpoint Firewalls, LogRhythm SIEM",
      presenceOfInternalIT: "500 IT staff (managed internally)",
      existingMSPVendor: "Self-managed with selective vendor partnerships",
      currentSLAsAndSupportHours: "24x7 follow-the-sun support, 10-min response"
    },
    {
      customerName: "Dr. Patricia Brown",
      companyName: "State University",
      companySize: "Large Enterprise",
      industryArea: "Education (Schools, Colleges, Universities)",
      annualRevenue: "$500M",
      geographicsFootprint: "Multiple campuses - USA",
      keyContact: "Dr. Patricia Brown",
      designation: "CIO",
      emailAddress: "p.brown@stateuniversity.edu",
      phoneWhatsApp: "+1-555-0107",
      linkedinProfile: "linkedin.com/in/patriciabrown",
      websiteURL: "www.stateuniversity.edu",
      numberOfEndpoints: "15000",
      numberOfServers: "180 (90 physical, 90 virtual)",
      cloudFootprint: "Microsoft 365 + Azure - 300 VMs",
      dataCenterDetails: "2 on-prem data centers + Azure",
      networkSize: "100 routers, 400 switches (campus-wide), 30 firewalls",
      existingSecurityStack: "Microsoft Defender, Palo Alto, Azure Sentinel",
      presenceOfInternalIT: "80 IT staff (academic IT, infrastructure, help desk)",
      existingMSPVendor: "Unisys for data center operations",
      currentSLAsAndSupportHours: "16x5 support (extended during exams)"
    },
    {
      customerName: "James Martinez",
      companyName: "City Government",
      companySize: "Large Enterprise",
      industryArea: "Government & Public Sector",
      annualRevenue: "$1.2B (Budget)",
      geographicsFootprint: "Metropolitan area",
      keyContact: "James Martinez",
      designation: "Chief Information Security Officer",
      emailAddress: "j.martinez@citygovernment.gov",
      phoneWhatsApp: "+1-555-0108",
      linkedinProfile: "linkedin.com/in/jamesmartinez",
      websiteURL: "www.citygovernment.gov",
      numberOfEndpoints: "5000",
      numberOfServers: "250 (180 physical, 70 virtual)",
      cloudFootprint: "Government Cloud - Azure Gov - 150 VMs",
      dataCenterDetails: "1 government data center + Azure Gov cloud",
      networkSize: "80 routers, 300 switches, 40 firewalls, city-wide fiber",
      existingSecurityStack: "Tanium, Fortinet Gov Edition, Splunk Gov Cloud",
      presenceOfInternalIT: "120 IT staff (public services IT, cybersecurity)",
      existingMSPVendor: "Deloitte for security services",
      currentSLAsAndSupportHours: "24x7 for critical services, 12x5 for general IT"
    },
    {
      customerName: "Lisa Thompson",
      companyName: "PowerGrid Energy",
      companySize: "Large Enterprise",
      industryArea: "Energy & Utilities",
      annualRevenue: "$3.8B",
      geographicsFootprint: "Regional - 5 states",
      keyContact: "Lisa Thompson",
      designation: "Director IT Infrastructure",
      emailAddress: "l.thompson@powergrid.com",
      phoneWhatsApp: "+1-555-0109",
      linkedinProfile: "linkedin.com/in/lisathompson",
      websiteURL: "www.powergrid.com",
      numberOfEndpoints: "3000",
      numberOfServers: "200 (140 physical, 60 virtual)",
      cloudFootprint: "Hybrid - Azure - 100 VMs",
      dataCenterDetails: "3 hardened data centers + limited cloud",
      networkSize: "60 routers, 250 switches, 35 firewalls, SCADA network",
      existingSecurityStack: "Dragos OT Security, Cisco ISE, Nozomi Networks",
      presenceOfInternalIT: "90 IT staff (OT security, SCADA, IT infrastructure)",
      existingMSPVendor: "Schneider Electric for SCADA, IBM for IT",
      currentSLAsAndSupportHours: "24x7 support, 5-min response for grid operations"
    },
    {
      customerName: "Mark Garcia",
      companyName: "PetroTech Corp",
      companySize: "Large Enterprise",
      industryArea: "Oil & Gas",
      annualRevenue: "$5.5B",
      geographicsFootprint: "Global operations",
      keyContact: "Mark Garcia",
      designation: "VP IT Services",
      emailAddress: "m.garcia@petrotech.com",
      phoneWhatsApp: "+1-555-0110",
      linkedinProfile: "linkedin.com/in/markgarcia",
      websiteURL: "www.petrotech.com",
      numberOfEndpoints: "4000",
      numberOfServers: "350 (250 physical, 100 virtual)",
      cloudFootprint: "AWS - 200 instances, Private cloud",
      dataCenterDetails: "4 global data centers + private cloud",
      networkSize: "100 routers, 350 switches, 50 firewalls, satellite links",
      existingSecurityStack: "Claroty, Honeywell OT Security, Palo Alto Networks",
      presenceOfInternalIT: "200 IT staff (global IT, OT security, exploration IT)",
      existingMSPVendor: "Halliburton for field IT, Cognizant for enterprise IT",
      currentSLAsAndSupportHours: "24x7 global support, 10-min response"
    }
  ]

  // Proposition 3 Data - Premium with Financial & Commercial Insights (All Sectors)
  const proposition3Data: DistributorData[] = [
    {
      customerName: "John Smith",
      companyName: "Global Bank Corp",
      companySize: "Large Enterprise",
      industryArea: "Banking, Financial and Insurance (BFSI)",
      annualRevenue: "$2.5B",
      geographicsFootprint: "North America, Europe, Asia",
      keyContact: "John Smith",
      designation: "CIO",
      emailAddress: "john.smith@globalbank.com",
      phoneWhatsApp: "+1-555-0101",
      linkedinProfile: "linkedin.com/in/johnsmith",
      websiteURL: "www.globalbank.com",
      numberOfEndpoints: "2500",
      numberOfServers: "150 (80 physical, 70 virtual)",
      cloudFootprint: "Azure - 200 VMs, AWS - 50 instances",
      dataCenterDetails: "3 on-prem data centers + Azure cloud",
      networkSize: "50 routers, 200 switches, 25 firewalls, MPLS network",
      existingSecurityStack: "CrowdStrike EDR, Palo Alto Firewalls, Splunk SIEM",
      itBudgetApprox: "$45M annually",
      existingMSPVendor: "TCS for infrastructure support",
      currentSLAsAndSupportHours: "24x7 support, 15-min response time",
      painPointsWithExistingIT: "High costs, slow incident response, compliance challenges",
      averageDowntimeIncidents: "8 incidents/month, avg 2 hours downtime",
      existingMonitoringTools: "SolarWinds, Nagios, Splunk",
      currentITSpend: "$42M OPEX, $8M CAPEX annually",
      currentMSPContractValue: "$15M/year with TCS",
      pricingPreferences: "Outcome-based, SLA-driven pricing",
      renewalContractTimeline: "Contract renewal in Q2 2026",
      budgetAvailableForOutsourcing: "$18M for enhanced managed services",
      customerBenchmarkingSummary: "Above industry average on security spend, below on automation. Opportunity for modernization and cloud optimization.",
      additionalCommercialNotes: "Open to strategic partnerships. Interested in AI-driven security operations and automation."
    },
    {
      customerName: "Sarah Johnson",
      companyName: "SkyHigh Airlines",
      companySize: "Large Enterprise",
      industryArea: "Airline Industry",
      annualRevenue: "$1.8B",
      geographicsFootprint: "Global - 50+ countries",
      keyContact: "Sarah Johnson",
      designation: "VP IT Operations",
      emailAddress: "s.johnson@skyhigh.com",
      phoneWhatsApp: "+1-555-0102",
      linkedinProfile: "linkedin.com/in/sarahjohnson",
      websiteURL: "www.skyhigh.com",
      numberOfEndpoints: "3500",
      numberOfServers: "200 (100 physical, 100 virtual)",
      cloudFootprint: "AWS - 300 instances, GCP - 100 instances",
      dataCenterDetails: "2 primary data centers + multi-cloud",
      networkSize: "80 routers, 300 switches, 40 firewalls, SD-WAN",
      existingSecurityStack: "Sentinel One, Fortinet Firewalls, IBM QRadar",
      itBudgetApprox: "$55M annually",
      existingMSPVendor: "Accenture for managed services",
      currentSLAsAndSupportHours: "24x7 global support, 10-min critical response",
      painPointsWithExistingIT: "Multi-vendor complexity, integration issues, limited proactive support",
      averageDowntimeIncidents: "12 incidents/month, avg 1.5 hours downtime",
      existingMonitoringTools: "Datadog, New Relic, IBM QRadar",
      currentITSpend: "$52M OPEX, $12M CAPEX annually",
      currentMSPContractValue: "$22M/year with Accenture",
      pricingPreferences: "Fixed monthly pricing with volume discounts",
      renewalContractTimeline: "Contract up for renewal in Q4 2025",
      budgetAvailableForOutsourcing: "$25M for consolidated managed services",
      customerBenchmarkingSummary: "High IT complexity due to global operations. Significant opportunity for vendor consolidation and cost optimization.",
      additionalCommercialNotes: "Evaluating consolidated MSP model. Priority on 24x7 global support and multi-cloud management."
    },
    {
      customerName: "Dr. Michael Chen",
      companyName: "HealthCare Plus",
      companySize: "Large Enterprise",
      industryArea: "Healthcare, Pharmaceuticals & Life Sciences",
      annualRevenue: "$3.2B",
      geographicsFootprint: "USA, Canada",
      keyContact: "Dr. Michael Chen",
      designation: "Chief Technology Officer",
      emailAddress: "m.chen@healthcareplus.com",
      phoneWhatsApp: "+1-555-0103",
      linkedinProfile: "linkedin.com/in/michaelchen",
      websiteURL: "www.healthcareplus.com",
      numberOfEndpoints: "5000",
      numberOfServers: "300 (150 physical, 150 virtual)",
      cloudFootprint: "Azure - 400 VMs (HIPAA compliant)",
      dataCenterDetails: "4 HIPAA-compliant data centers + Azure healthcare",
      networkSize: "120 routers, 400 switches, 60 firewalls, private WAN",
      existingSecurityStack: "Microsoft Defender, Cisco Firepower, Azure Sentinel",
      itBudgetApprox: "$85M annually",
      existingMSPVendor: "Optum for healthcare IT services",
      currentSLAsAndSupportHours: "24x7 support, 5-min critical response for clinical systems",
      painPointsWithExistingIT: "HIPAA compliance overhead, EMR integration challenges, clinical downtime risks",
      averageDowntimeIncidents: "6 incidents/month, avg 45 min downtime (critical for clinical ops)",
      existingMonitoringTools: "Azure Monitor, PRTG, Epic monitoring tools",
      currentITSpend: "$78M OPEX, $18M CAPEX annually",
      currentMSPContractValue: "$32M/year with Optum",
      pricingPreferences: "Value-based, compliance-focused pricing",
      renewalContractTimeline: "Contract renewal in Q1 2026",
      budgetAvailableForOutsourcing: "$40M for enhanced healthcare IT managed services",
      customerBenchmarkingSummary: "High compliance requirements. Strong focus on clinical uptime. Opportunity for advanced healthcare IT automation and AI diagnostics support.",
      additionalCommercialNotes: "Strategic priority on telehealth infrastructure and patient data analytics. Requires HIPAA-certified MSP with healthcare expertise."
    },
    {
      customerName: "Robert Anderson",
      companyName: "TechManufacture Inc",
      companySize: "Large Enterprise",
      industryArea: "Manufacturing",
      annualRevenue: "$1.5B",
      geographicsFootprint: "North America, Mexico",
      keyContact: "Robert Anderson",
      designation: "IT Director",
      emailAddress: "r.anderson@techmanufacture.com",
      phoneWhatsApp: "+1-555-0104",
      linkedinProfile: "linkedin.com/in/robertanderson",
      websiteURL: "www.techmanufacture.com",
      numberOfEndpoints: "1800",
      numberOfServers: "120 (70 physical, 50 virtual)",
      cloudFootprint: "AWS - 80 instances",
      dataCenterDetails: "2 on-prem data centers + AWS cloud",
      networkSize: "40 routers, 150 switches, 20 firewalls, OT network",
      existingSecurityStack: "Trend Micro, Fortinet, SCADA security tools",
      itBudgetApprox: "$28M annually",
      existingMSPVendor: "Siemens for OT support, HCL for IT",
      currentSLAsAndSupportHours: "24x6 support, 30-min response time",
      painPointsWithExistingIT: "OT/IT convergence challenges, production downtime, legacy systems",
      averageDowntimeIncidents: "10 incidents/month, avg 3 hours (impacts production)",
      existingMonitoringTools: "Siemens monitoring, Zabbix, AWS CloudWatch",
      currentITSpend: "$24M OPEX, $6M CAPEX annually",
      currentMSPContractValue: "$12M/year (split between Siemens and HCL)",
      pricingPreferences: "Production uptime guarantees, outcome-based pricing",
      renewalContractTimeline: "Siemens contract renewal Q3 2025, HCL in Q1 2026",
      budgetAvailableForOutsourcing: "$16M for unified IT/OT managed services",
      customerBenchmarkingSummary: "OT/IT convergence is key pain point. Significant opportunity for unified managed services with Industry 4.0 capabilities.",
      additionalCommercialNotes: "Looking for single MSP for both IT and OT. Priority on predictive maintenance and IoT integration for smart manufacturing."
    },
    {
      customerName: "Emily Davis",
      companyName: "ShopSmart Retail",
      companySize: "Large Enterprise",
      industryArea: "Retail & E-commerce",
      annualRevenue: "$4.5B",
      geographicsFootprint: "USA - 500 stores",
      keyContact: "Emily Davis",
      designation: "VP Technology",
      emailAddress: "e.davis@shopsmart.com",
      phoneWhatsApp: "+1-555-0105",
      linkedinProfile: "linkedin.com/in/emilydavis",
      websiteURL: "www.shopsmart.com",
      numberOfEndpoints: "8000",
      numberOfServers: "250 (100 physical, 150 virtual)",
      cloudFootprint: "AWS - 500 instances, Azure - 200 VMs",
      dataCenterDetails: "3 regional data centers + multi-cloud",
      networkSize: "200 routers, 600 switches (stores), 80 firewalls, SD-WAN",
      existingSecurityStack: "McAfee EDR, Cisco ASA, Splunk",
      itBudgetApprox: "$95M annually",
      existingMSPVendor: "Wipro for store IT support",
      currentSLAsAndSupportHours: "24x7 support, 20-min response for POS systems",
      painPointsWithExistingIT: "Store IT management complexity, POS downtime, omnichannel integration",
      averageDowntimeIncidents: "25 incidents/month across 500 stores, avg 2 hours per incident",
      existingMonitoringTools: "Datadog, Splunk, store monitoring dashboard",
      currentITSpend: "$88M OPEX, $15M CAPEX annually",
      currentMSPContractValue: "$35M/year with Wipro",
      pricingPreferences: "Per-store pricing, SLA-based with uptime guarantees",
      renewalContractTimeline: "Contract renewal in Q2 2026",
      budgetAvailableForOutsourcing: "$42M for comprehensive retail IT managed services",
      customerBenchmarkingSummary: "High complexity with distributed store operations. Opportunity for unified omnichannel IT platform and AI-driven inventory management.",
      additionalCommercialNotes: "Strategic focus on digital transformation and omnichannel experience. Requires MSP with retail expertise and POS system management."
    }
  ]

  const getCurrentData = () => {
    if (activeProposition === 'proposition2') {
      return proposition2Data
    }
    if (activeProposition === 'proposition3') {
      return proposition3Data
    }
    return proposition1Data
  }

  const exportToCSV = () => {
    const data = getCurrentData()
    if (data.length === 0) {
      alert('No data to export')
      return
    }

    const headers = Object.keys(data[0])
    const csv = [
      headers.join(','),
      ...data.map(row =>
        headers.map(header => {
          const value = row[header as keyof DistributorData] || ''
          return `"${value.toString().replace(/"/g, '""')}"`
        }).join(',')
      )
    ].join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `all_sector_${activeProposition}.csv`
    a.click()
    window.URL.revokeObjectURL(url)
  }

  const currentData = getCurrentData()

  return (
    <div className="min-h-screen p-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-electric-blue to-purple-600 bg-clip-text text-transparent mb-4">
          ALL SECTOR DATABASE
        </h1>
        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
          Comprehensive directory across all industry sectors
        </p>
      </motion.div>

      {/* Proposition Tabs */}
      <div className={`p-6 rounded-2xl mb-8 shadow-xl ${isDark ? 'bg-navy-card border-2 border-navy-light' : 'bg-white border-2 border-gray-300'}`}>
        <div className="flex gap-4 mb-6">
          <button
            onClick={() => setActiveProposition('proposition1')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeProposition === 'proposition1'
                ? 'bg-electric-blue text-white shadow-lg'
                : isDark
                ? 'bg-navy-dark text-text-secondary-dark hover:bg-navy-light'
                : 'bg-gray-100 text-text-secondary-light hover:bg-gray-200'
            }`}
          >
            Proposition 1 - Basic
          </button>
          <button
            onClick={() => setActiveProposition('proposition2')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeProposition === 'proposition2'
                ? 'bg-electric-blue text-white shadow-lg'
                : isDark
                ? 'bg-navy-dark text-text-secondary-dark hover:bg-navy-light'
                : 'bg-gray-100 text-text-secondary-light hover:bg-gray-200'
            }`}
          >
            Proposition 2 - Advanced
          </button>
          <button
            onClick={() => setActiveProposition('proposition3')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all ${
              activeProposition === 'proposition3'
                ? 'bg-electric-blue text-white shadow-lg'
                : isDark
                ? 'bg-navy-dark text-text-secondary-dark hover:bg-navy-light'
                : 'bg-gray-100 text-text-secondary-light hover:bg-gray-200'
            }`}
          >
            Proposition 3 - Premium
          </button>
        </div>

        {/* Export Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={exportToCSV}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all ${
              isDark
                ? 'bg-electric-blue text-white hover:bg-blue-600'
                : 'bg-electric-blue text-white hover:bg-blue-600'
            }`}
          >
            <Download size={20} />
            Export to CSV
          </button>
        </div>
      </div>

      {/* Data Table */}
      <div className={`rounded-2xl shadow-2xl overflow-hidden ${isDark ? 'bg-navy-card border-2 border-navy-light' : 'bg-white border-2 border-gray-300'}`}>
        <div className="p-6">
          <h2 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6">
            {activeProposition === 'proposition1' && 'Proposition 1 - Basic IT Infrastructure'}
            {activeProposition === 'proposition2' && 'Proposition 2 - Advanced IT Infrastructure & Support'}
            {activeProposition === 'proposition3' && 'Proposition 3 - Premium with Financial & Commercial Insights'}
          </h2>

          {/* Top Scroll Bar */}
          <div
            ref={topScrollRef}
            className="overflow-x-auto mb-4 pb-2"
            style={{ overflowY: 'hidden' }}
          >
            <div style={{
              width: activeProposition === 'proposition1' ? '2500px' :
                     activeProposition === 'proposition2' ? '3500px' : '4500px',
              height: '1px'
            }}></div>
          </div>

          {/* Table Container */}
          <div
            ref={tableScrollRef}
            className="overflow-x-auto"
            style={{ maxHeight: '600px' }}
          >
            <table className={`w-full border-collapse ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
              <thead className="sticky top-0 z-10">
                <tr className={`border-b-2 ${isDark ? 'border-navy-light' : 'border-gray-300'}`}>
                  <th className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-gray-300 text-gray-900' : 'bg-gray-200 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '60px', maxWidth: '60px' }}>
                    S.No.
                  </th>
                  <th colSpan={6} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-orange-200 text-gray-900' : 'bg-orange-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    CUSTOMER INFORMATION
                  </th>
                  <th colSpan={6} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-cyan-200 text-gray-900' : 'bg-cyan-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    CONTACT DETAILS
                  </th>
                  {activeProposition === 'proposition1' && (
                    <th colSpan={3} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-purple-200 text-gray-900' : 'bg-purple-100 text-gray-900'}`}>
                      Current IT Infrastructure Landscape
                    </th>
                  )}
                  {activeProposition === 'proposition2' && (
                    <>
                      <th colSpan={6} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-purple-200 text-gray-900' : 'bg-purple-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        Current IT Infrastructure Landscape
                      </th>
                      <th colSpan={3} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-pink-200 text-gray-900' : 'bg-pink-100 text-gray-900'}`}>
                        Current IT Support Setup
                      </th>
                    </>
                  )}
                  {activeProposition === 'proposition3' && (
                    <>
                      <th colSpan={6} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-purple-200 text-gray-900' : 'bg-purple-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        Current IT Infrastructure Landscape
                      </th>
                      <th colSpan={6} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-pink-200 text-gray-900' : 'bg-pink-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        Current IT Support Setup
                      </th>
                      <th colSpan={5} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-yellow-200 text-gray-900' : 'bg-yellow-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        Financial & Commercial Datapoints
                      </th>
                      <th colSpan={2} className={`px-3 py-3 text-center font-bold ${isDark ? 'bg-green-200 text-gray-900' : 'bg-green-100 text-gray-900'}`}>
                        CMI Insights
                      </th>
                    </>
                  )}
                </tr>
                <tr className={`border-b-2 ${isDark ? 'border-navy-light' : 'border-gray-300'}`}>
                  <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-gray-200 text-gray-900' : 'bg-gray-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '60px', maxWidth: '60px' }}>
                    S.No.
                  </th>
                  <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Customer Name
                  </th>
                  <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Company Name
                  </th>
                  <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Company Size (SME or Large Enterprise)
                  </th>
                  <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Industry Area
                  </th>
                  <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Annual Revenue
                  </th>
                  <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Geographics | Footprint
                  </th>
                  <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Key Contact Person
                  </th>
                  <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Designation / Role
                  </th>
                  <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Email Address (verified / generic)
                  </th>
                  <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Phone / WhatsApp Number
                  </th>
                  <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    LinkedIn Profile
                  </th>
                  <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Website URL
                  </th>
                  {activeProposition === 'proposition1' && (
                    <>
                      {/* Current IT Infrastructure Landscape - 3 columns */}
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Number of endpoints (laptops, desktops, mobile devices)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Number of servers (physical + virtual)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Cloud footprint (Azure/AWS/GCP workloads)
                      </th>
                    </>
                  )}
                  {activeProposition === 'proposition2' && (
                    <>
                      {/* Current IT Infrastructure Landscape - 6 columns */}
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Number of endpoints (laptops, desktops, mobile devices)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Number of servers (physical + virtual)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Cloud footprint (Azure/AWS/GCP workloads)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Data center details (on-prem, colo, colocation, cloud)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Network size: routers, switches, firewalls, WAN links
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Existing security stack (EDR, antivirus, SIEM, firewalls)
                      </th>
                      {/* Current IT Support Setup - 3 columns */}
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Presence of internal IT team (size, roles)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Existing MSP/vendor (if any)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Current SLAs and support hours
                      </th>
                    </>
                  )}
                  {activeProposition === 'proposition3' && (
                    <>
                      {/* Current IT Infrastructure Landscape - 6 columns */}
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Number of endpoints (laptops, desktops, mobile devices)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Number of servers (physical / virtual)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Cloud footprint (Azure/AWS/GCP workloads)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Data center details (on-prem, colo, colocation, cloud)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Network size: routers, switches, SD-WAN firewalls, VPN
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Existing security stack (EDR, antivirus, SIEM, firewalls)
                      </th>
                      {/* Current IT Support Setup - 6 columns */}
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        IT Budget (Approx.)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Existing MSP/Vendor (if any)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Current SLAs and support hours
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Pain points with existing IT
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Average downtime incidents
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-pink-100 text-gray-900' : 'bg-pink-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Existing monitoring tools
                      </th>
                      {/* Financial & Commercial Datapoints - 5 columns */}
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Current IT spend (OPEX/CAPEX)
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Current MSP contract value
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Pricing preferences
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Renewal/contract timeline
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-yellow-100 text-gray-900' : 'bg-yellow-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Budget availability for outsourcing
                      </th>
                      {/* CMI Insights - 2 columns */}
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-green-100 text-gray-900' : 'bg-green-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '150px', maxWidth: '150px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Customer Benchmarking Summary
                      </th>
                      <th className={`px-3 py-3 text-center font-semibold ${isDark ? 'bg-green-100 text-gray-900' : 'bg-green-50 text-gray-900'}`} style={{ width: '150px', maxWidth: '150px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Additional Comments / Notes
                      </th>
                    </>
                  )}
                </tr>
              </thead>
              <tbody>
                {currentData.length === 0 ? (
                  <tr>
                    <td
                      colSpan={
                        activeProposition === 'proposition1' ? 16 :
                        activeProposition === 'proposition2' ? 22 : 31
                      }
                      className={`px-6 py-12 text-center ${isDark ? 'text-text-secondary-dark' : 'text-text-secondary-light'}`}
                    >
                      <div className="text-xl font-semibold">No data available</div>
                      <div className="text-sm mt-2">Data will be populated here</div>
                    </td>
                  </tr>
                ) : (
                  currentData.map((row, index) => (
                    <tr key={index} className={`border-b ${isDark ? 'border-navy-light hover:bg-navy-light/50' : 'border-gray-200 hover:bg-gray-50'}`}>
                      <td className={`px-3 py-3 text-center ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                        {index + 1}
                      </td>
                      <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                        {row.customerName}
                      </td>
                      <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                        {row.companyName}
                      </td>
                      <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                        {row.companySize}
                      </td>
                      <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                        {row.industryArea}
                      </td>
                      <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                        {row.annualRevenue}
                      </td>
                      <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                        {row.geographicsFootprint}
                      </td>
                      <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                        {row.keyContact}
                      </td>
                      <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                        {row.designation}
                      </td>
                      <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                        {row.emailAddress}
                      </td>
                      <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                        {row.phoneWhatsApp}
                      </td>
                      <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                        {row.linkedinProfile}
                      </td>
                      <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                        {row.websiteURL}
                      </td>
                      {activeProposition === 'proposition1' && (
                        <>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.numberOfEndpoints}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.numberOfServers}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.cloudFootprint}
                          </td>
                        </>
                      )}
                      {activeProposition === 'proposition2' && (
                        <>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.numberOfEndpoints}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.numberOfServers}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.cloudFootprint}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.dataCenterDetails}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.networkSize}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.existingSecurityStack}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.presenceOfInternalIT}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.existingMSPVendor}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.currentSLAsAndSupportHours}
                          </td>
                        </>
                      )}
                      {activeProposition === 'proposition3' && (
                        <>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.numberOfEndpoints}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.numberOfServers}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.cloudFootprint}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.dataCenterDetails}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.networkSize}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.existingSecurityStack}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.itBudgetApprox}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.existingMSPVendor}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.currentSLAsAndSupportHours}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.painPointsWithExistingIT}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.averageDowntimeIncidents}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.existingMonitoringTools}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.currentITSpend}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.currentMSPContractValue}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.pricingPreferences}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.renewalContractTimeline}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.budgetAvailableForOutsourcing}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.customerBenchmarkingSummary}
                          </td>
                          <td className={`px-3 py-3 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.additionalCommercialNotes}
                          </td>
                        </>
                      )}
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
