import { useState } from 'react'
import { Download } from 'lucide-react'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'

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

  // Proposition 1 Data - Basic IT Infrastructure (All Sectors)
  const proposition1Data: DistributorData[] = [
    {
      customerName: "John Smith",
      companyName: "Global Bank Corp",
      companySize: "Large Enterprise",
      industryArea: "Banking, Financial and Insurance (BFSI)",
      annualRevenue: "$2.5B",
      geographicsFootprint: "North America, Europe, Asia",
      keyContact: "Michael Roberts",
      designation: "CIO",
      emailAddress: "michael.roberts@globalbank.com",
      phoneWhatsApp: "+1-555-0101",
      linkedinProfile: "linkedin.com/in/michaelroberts",
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
      keyContact: "David Patterson",
      designation: "VP IT Operations",
      emailAddress: "david.patterson@skyhigh.com",
      phoneWhatsApp: "+1-555-0102",
      linkedinProfile: "linkedin.com/in/davidpatterson",
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
      keyContact: "Dr. Rachel Foster",
      designation: "Chief Technology Officer",
      emailAddress: "rachel.foster@healthcareplus.com",
      phoneWhatsApp: "+1-555-0103",
      linkedinProfile: "linkedin.com/in/rachelfoster",
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
      keyContact: "James Mitchell",
      designation: "IT Director",
      emailAddress: "james.mitchell@techmanufacture.com",
      phoneWhatsApp: "+1-555-0104",
      linkedinProfile: "linkedin.com/in/jamesmitchell",
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
      keyContact: "Brian Cooper",
      designation: "VP Technology",
      emailAddress: "brian.cooper@shopsmart.com",
      phoneWhatsApp: "+1-555-0105",
      linkedinProfile: "linkedin.com/in/briancooper",
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
      keyContact: "Rajesh Kumar",
      designation: "Head of Infrastructure",
      emailAddress: "rajesh.kumar@infotech.com",
      phoneWhatsApp: "+1-555-0106",
      linkedinProfile: "linkedin.com/in/rajeshkumar",
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
      keyContact: "Dr. Steven Walsh",
      designation: "CIO",
      emailAddress: "steven.walsh@stateuniversity.edu",
      phoneWhatsApp: "+1-555-0107",
      linkedinProfile: "linkedin.com/in/stevenwalsh",
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
      keyContact: "Angela Barnes",
      designation: "Chief Information Security Officer",
      emailAddress: "angela.barnes@citygovernment.gov",
      phoneWhatsApp: "+1-555-0108",
      linkedinProfile: "linkedin.com/in/angelabarnes",
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
      keyContact: "Gregory Howard",
      designation: "Director IT Infrastructure",
      emailAddress: "gregory.howard@powergrid.com",
      phoneWhatsApp: "+1-555-0109",
      linkedinProfile: "linkedin.com/in/gregoryhoward",
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
      keyContact: "Patricia Henderson",
      designation: "VP IT Services",
      emailAddress: "patricia.henderson@petrotech.com",
      phoneWhatsApp: "+1-555-0110",
      linkedinProfile: "linkedin.com/in/patriciahenderson",
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
      keyContact: "Marcus Reynolds",
      designation: "IT Manager",
      emailAddress: "marcus.reynolds@logichain.com",
      phoneWhatsApp: "+1-555-0111",
      linkedinProfile: "linkedin.com/in/marcusreynolds",
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
      keyContact: "Linda Coleman",
      designation: "CTO",
      emailAddress: "linda.coleman@transportco.com",
      phoneWhatsApp: "+1-555-0112",
      linkedinProfile: "linkedin.com/in/lindacoleman",
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
      keyContact: "Christopher Evans",
      designation: "VP IT Operations",
      emailAddress: "christopher.evans@luxuryhotels.com",
      phoneWhatsApp: "+1-555-0113",
      linkedinProfile: "linkedin.com/in/christopherevans",
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
      keyContact: "Victoria Bennett",
      designation: "Chief Digital Officer",
      emailAddress: "victoria.bennett@propertydev.com",
      phoneWhatsApp: "+1-555-0114",
      linkedinProfile: "linkedin.com/in/victoriabennett",
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
      keyContact: "Andrew Sullivan",
      designation: "CTO",
      emailAddress: "andrew.sullivan@streammedia.com",
      phoneWhatsApp: "+1-555-0115",
      linkedinProfile: "linkedin.com/in/andrewsullivan",
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
      keyContact: "Michelle Wright",
      designation: "Director IT",
      emailAddress: "michelle.wright@autotech.com",
      phoneWhatsApp: "+1-555-0116",
      linkedinProfile: "linkedin.com/in/michellewright",
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
      keyContact: "Timothy Brooks",
      designation: "IT Director",
      emailAddress: "timothy.brooks@legalpro.com",
      phoneWhatsApp: "+1-555-0117",
      linkedinProfile: "linkedin.com/in/timothybrooks",
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
      keyContact: "Sandra Phillips",
      designation: "Head of IT",
      emailAddress: "sandra.phillips@buildtech.com",
      phoneWhatsApp: "+1-555-0118",
      linkedinProfile: "linkedin.com/in/sandraphillips",
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
      keyContact: "Donald Turner",
      designation: "CIO",
      emailAddress: "donald.turner@agritech.com",
      phoneWhatsApp: "+1-555-0119",
      linkedinProfile: "linkedin.com/in/donaldturner",
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
      keyContact: "Rebecca Morgan",
      designation: "IT Manager",
      emailAddress: "rebecca.morgan@globalaid.org",
      phoneWhatsApp: "+1-555-0120",
      linkedinProfile: "linkedin.com/in/rebeccamorgan",
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
      keyContact: "Michael Roberts",
      designation: "CIO",
      emailAddress: "michael.roberts@globalbank.com",
      phoneWhatsApp: "+1-555-0101",
      linkedinProfile: "linkedin.com/in/michaelroberts",
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
      keyContact: "David Patterson",
      designation: "VP IT Operations",
      emailAddress: "david.patterson@skyhigh.com",
      phoneWhatsApp: "+1-555-0102",
      linkedinProfile: "linkedin.com/in/davidpatterson",
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
      keyContact: "Dr. Rachel Foster",
      designation: "Chief Technology Officer",
      emailAddress: "rachel.foster@healthcareplus.com",
      phoneWhatsApp: "+1-555-0103",
      linkedinProfile: "linkedin.com/in/rachelfoster",
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
      keyContact: "James Mitchell",
      designation: "IT Director",
      emailAddress: "james.mitchell@techmanufacture.com",
      phoneWhatsApp: "+1-555-0104",
      linkedinProfile: "linkedin.com/in/jamesmitchell",
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
      keyContact: "Brian Cooper",
      designation: "VP Technology",
      emailAddress: "brian.cooper@shopsmart.com",
      phoneWhatsApp: "+1-555-0105",
      linkedinProfile: "linkedin.com/in/briancooper",
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
      keyContact: "Rajesh Kumar",
      designation: "Head of Infrastructure",
      emailAddress: "rajesh.kumar@infotech.com",
      phoneWhatsApp: "+1-555-0106",
      linkedinProfile: "linkedin.com/in/rajeshkumar",
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
      keyContact: "Dr. Steven Walsh",
      designation: "CIO",
      emailAddress: "steven.walsh@stateuniversity.edu",
      phoneWhatsApp: "+1-555-0107",
      linkedinProfile: "linkedin.com/in/stevenwalsh",
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
      keyContact: "Angela Barnes",
      designation: "Chief Information Security Officer",
      emailAddress: "angela.barnes@citygovernment.gov",
      phoneWhatsApp: "+1-555-0108",
      linkedinProfile: "linkedin.com/in/angelabarnes",
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
      keyContact: "Gregory Howard",
      designation: "Director IT Infrastructure",
      emailAddress: "gregory.howard@powergrid.com",
      phoneWhatsApp: "+1-555-0109",
      linkedinProfile: "linkedin.com/in/gregoryhoward",
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
      keyContact: "Patricia Henderson",
      designation: "VP IT Services",
      emailAddress: "patricia.henderson@petrotech.com",
      phoneWhatsApp: "+1-555-0110",
      linkedinProfile: "linkedin.com/in/patriciahenderson",
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
    },
    {
      customerName: "Jennifer Lee",
      companyName: "LogiChain Solutions",
      companySize: "SME",
      industryArea: "Logistics & Supply Chain",
      annualRevenue: "$250M",
      geographicsFootprint: "North America",
      keyContact: "Marcus Reynolds",
      designation: "IT Manager",
      emailAddress: "marcus.reynolds@logichain.com",
      phoneWhatsApp: "+1-555-0111",
      linkedinProfile: "linkedin.com/in/marcusreynolds",
      websiteURL: "www.logichain.com",
      numberOfEndpoints: "800",
      numberOfServers: "40 (20 physical, 20 virtual)",
      cloudFootprint: "AWS - 60 instances",
      dataCenterDetails: "1 data center + AWS cloud",
      networkSize: "15 routers, 50 switches, 8 firewalls, VPN",
      existingSecurityStack: "Sophos EDR, Fortinet, AWS GuardDuty",
      presenceOfInternalIT: "12 IT staff (operations, support)",
      existingMSPVendor: "Local MSP for basic support",
      currentSLAsAndSupportHours: "12x5 support, 1-hour response time"
    },
    {
      customerName: "Thomas White",
      companyName: "TransportCo",
      companySize: "Large Enterprise",
      industryArea: "Transportation & Aviation",
      annualRevenue: "$1.1B",
      geographicsFootprint: "USA, Canada, Mexico",
      keyContact: "Linda Coleman",
      designation: "CTO",
      emailAddress: "linda.coleman@transportco.com",
      phoneWhatsApp: "+1-555-0112",
      linkedinProfile: "linkedin.com/in/lindacoleman",
      websiteURL: "www.transportco.com",
      numberOfEndpoints: "2200",
      numberOfServers: "120 (60 physical, 60 virtual)",
      cloudFootprint: "Azure - 150 VMs",
      dataCenterDetails: "2 regional data centers + Azure",
      networkSize: "50 routers, 180 switches, 25 firewalls, SD-WAN",
      existingSecurityStack: "Carbon Black, Cisco Firepower, Splunk",
      presenceOfInternalIT: "65 IT staff (fleet systems, infrastructure)",
      existingMSPVendor: "CGI for IT operations",
      currentSLAsAndSupportHours: "24x7 support, 20-min response"
    },
    {
      customerName: "Amanda Clark",
      companyName: "Luxury Hotels International",
      companySize: "Large Enterprise",
      industryArea: "Hospitality & Travel",
      annualRevenue: "$900M",
      geographicsFootprint: "Global - 100+ properties",
      keyContact: "Christopher Evans",
      designation: "VP IT Operations",
      emailAddress: "christopher.evans@luxuryhotels.com",
      phoneWhatsApp: "+1-555-0113",
      linkedinProfile: "linkedin.com/in/christopherevans",
      websiteURL: "www.luxuryhotels.com",
      numberOfEndpoints: "6000",
      numberOfServers: "180 (80 physical, 100 virtual)",
      cloudFootprint: "AWS - 250 instances, Azure - 100 VMs",
      dataCenterDetails: "3 regional data centers + multi-cloud",
      networkSize: "120 routers, 350 switches, 45 firewalls, global MPLS",
      existingSecurityStack: "Trend Micro, Palo Alto, Splunk",
      presenceOfInternalIT: "95 IT staff (property systems, reservations, infrastructure)",
      existingMSPVendor: "Amadeus for hospitality IT, Infosys for infrastructure",
      currentSLAsAndSupportHours: "24x7 support, 15-min response"
    },
    {
      customerName: "Richard Harris",
      companyName: "PropertyDev Group",
      companySize: "Large Enterprise",
      industryArea: "Real Estate & Facilities Management",
      annualRevenue: "$2.2B",
      geographicsFootprint: "Major US cities",
      keyContact: "Victoria Bennett",
      designation: "Chief Digital Officer",
      emailAddress: "victoria.bennett@propertydev.com",
      phoneWhatsApp: "+1-555-0114",
      linkedinProfile: "linkedin.com/in/victoriabennett",
      websiteURL: "www.propertydev.com",
      numberOfEndpoints: "1500",
      numberOfServers: "80 (40 physical, 40 virtual)",
      cloudFootprint: "Azure - 120 VMs",
      dataCenterDetails: "2 data centers + Azure",
      networkSize: "35 routers, 120 switches, 18 firewalls",
      existingSecurityStack: "Microsoft Defender, Fortinet, Azure Sentinel",
      presenceOfInternalIT: "40 IT staff (property tech, IoT, infrastructure)",
      existingMSPVendor: "JLL for facility tech, Atos for IT",
      currentSLAsAndSupportHours: "16x5 support, 30-min response"
    },
    {
      customerName: "Maria Rodriguez",
      companyName: "StreamMedia Networks",
      companySize: "Large Enterprise",
      industryArea: "Media & Entertainment",
      annualRevenue: "$1.4B",
      geographicsFootprint: "North America",
      keyContact: "Andrew Sullivan",
      designation: "CTO",
      emailAddress: "andrew.sullivan@streammedia.com",
      phoneWhatsApp: "+1-555-0115",
      linkedinProfile: "linkedin.com/in/andrewsullivan",
      websiteURL: "www.streammedia.com",
      numberOfEndpoints: "2500",
      numberOfServers: "300 (100 physical, 200 virtual)",
      cloudFootprint: "AWS - 500 instances, CDN infrastructure",
      dataCenterDetails: "3 media data centers + AWS + CDN",
      networkSize: "70 routers, 250 switches, 35 firewalls, high-bandwidth network",
      existingSecurityStack: "CrowdStrike, Akamai Security, Datadog",
      presenceOfInternalIT: "120 IT staff (streaming tech, content delivery, infrastructure)",
      existingMSPVendor: "Akamai for CDN, Rackspace for cloud",
      currentSLAsAndSupportHours: "24x7 support, 10-min response for streaming services"
    },
    {
      customerName: "Kevin Taylor",
      companyName: "AutoTech Manufacturing",
      companySize: "Large Enterprise",
      industryArea: "Automotive",
      annualRevenue: "$3.5B",
      geographicsFootprint: "Global - 15 plants",
      keyContact: "Michelle Wright",
      designation: "Director IT",
      emailAddress: "michelle.wright@autotech.com",
      phoneWhatsApp: "+1-555-0116",
      linkedinProfile: "linkedin.com/in/michellewright",
      websiteURL: "www.autotech.com",
      numberOfEndpoints: "5000",
      numberOfServers: "250 (150 physical, 100 virtual)",
      cloudFootprint: "Azure - 200 VMs, Private cloud",
      dataCenterDetails: "4 manufacturing data centers + Azure",
      networkSize: "90 routers, 400 switches, 40 firewalls, OT/IT network",
      existingSecurityStack: "Symantec, Fortinet, manufacturing OT security",
      presenceOfInternalIT: "180 IT staff (manufacturing systems, OT/IT, infrastructure)",
      existingMSPVendor: "Rockwell for OT, Capgemini for IT",
      currentSLAsAndSupportHours: "24x7 support, 15-min response for production systems"
    },
    {
      customerName: "Susan Moore",
      companyName: "LegalPro Services",
      companySize: "SME",
      industryArea: "Professional Services (Legal, Accounting, Consulting)",
      annualRevenue: "$180M",
      geographicsFootprint: "USA - 25 offices",
      keyContact: "Timothy Brooks",
      designation: "IT Director",
      emailAddress: "timothy.brooks@legalpro.com",
      phoneWhatsApp: "+1-555-0117",
      linkedinProfile: "linkedin.com/in/timothybrooks",
      websiteURL: "www.legalpro.com",
      numberOfEndpoints: "1200",
      numberOfServers: "50 (25 physical, 25 virtual)",
      cloudFootprint: "Microsoft 365 + Azure - 80 VMs",
      dataCenterDetails: "1 data center + Microsoft 365",
      networkSize: "25 routers, 80 switches, 12 firewalls, MPLS",
      existingSecurityStack: "Microsoft Defender, Cisco Umbrella, Azure Sentinel",
      presenceOfInternalIT: "18 IT staff (legal tech, infrastructure, help desk)",
      existingMSPVendor: "CompuCom for managed services",
      currentSLAsAndSupportHours: "12x5 support, 2-hour response time"
    },
    {
      customerName: "Daniel Jackson",
      companyName: "BuildTech Construction",
      companySize: "Large Enterprise",
      industryArea: "Construction & Engineering",
      annualRevenue: "$2.8B",
      geographicsFootprint: "USA, Canada",
      keyContact: "Sandra Phillips",
      designation: "Head of IT",
      emailAddress: "sandra.phillips@buildtech.com",
      phoneWhatsApp: "+1-555-0118",
      linkedinProfile: "linkedin.com/in/sandraphillips",
      websiteURL: "www.buildtech.com",
      numberOfEndpoints: "3000",
      numberOfServers: "120 (60 physical, 60 virtual)",
      cloudFootprint: "Azure - 150 VMs",
      dataCenterDetails: "2 data centers + Azure",
      networkSize: "55 routers, 220 switches, 22 firewalls",
      existingSecurityStack: "McAfee, Fortinet, project management security",
      presenceOfInternalIT: "70 IT staff (project systems, field tech, infrastructure)",
      existingMSPVendor: "Procore for construction tech, NTT for IT",
      currentSLAsAndSupportHours: "16x6 support, 30-min response"
    },
    {
      customerName: "Nancy Williams",
      companyName: "AgriTech Solutions",
      companySize: "SME",
      industryArea: "Agriculture & Agri-tech",
      annualRevenue: "$150M",
      geographicsFootprint: "USA - Midwest region",
      keyContact: "Donald Turner",
      designation: "CIO",
      emailAddress: "donald.turner@agritech.com",
      phoneWhatsApp: "+1-555-0119",
      linkedinProfile: "linkedin.com/in/donaldturner",
      websiteURL: "www.agritech.com",
      numberOfEndpoints: "500",
      numberOfServers: "30 (15 physical, 15 virtual)",
      cloudFootprint: "AWS - 50 instances",
      dataCenterDetails: "1 on-prem + AWS",
      networkSize: "12 routers, 40 switches, 6 firewalls",
      existingSecurityStack: "Trend Micro, AWS Security Hub",
      presenceOfInternalIT: "8 IT staff (agritech systems, support)",
      existingMSPVendor: "Regional MSP for support",
      currentSLAsAndSupportHours: "12x5 support, 4-hour response"
    },
    {
      customerName: "Christopher Miller",
      companyName: "Global Aid Foundation",
      companySize: "SME",
      industryArea: "Non-profits / NGOs",
      annualRevenue: "$80M (Donations)",
      geographicsFootprint: "Global - 40+ countries",
      keyContact: "Rebecca Morgan",
      designation: "IT Manager",
      emailAddress: "rebecca.morgan@globalaid.org",
      phoneWhatsApp: "+1-555-0120",
      linkedinProfile: "linkedin.com/in/rebeccamorgan",
      websiteURL: "www.globalaid.org",
      numberOfEndpoints: "800",
      numberOfServers: "40 (20 physical, 20 virtual)",
      cloudFootprint: "Microsoft 365 + Azure Non-profit - 60 VMs",
      dataCenterDetails: "1 data center + Microsoft nonprofit cloud",
      networkSize: "18 routers, 60 switches, 10 firewalls, satellite connectivity",
      existingSecurityStack: "Microsoft Defender, Cloudflare, Azure Sentinel",
      presenceOfInternalIT: "15 IT staff (field operations, infrastructure)",
      existingMSPVendor: "TechSoup for nonprofit IT support",
      currentSLAsAndSupportHours: "24x7 support (remote locations), 2-hour response"
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
      keyContact: "Michael Roberts",
      designation: "CIO",
      emailAddress: "michael.roberts@globalbank.com",
      phoneWhatsApp: "+1-555-0101",
      linkedinProfile: "linkedin.com/in/michaelroberts",
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
      keyContact: "David Patterson",
      designation: "VP IT Operations",
      emailAddress: "david.patterson@skyhigh.com",
      phoneWhatsApp: "+1-555-0102",
      linkedinProfile: "linkedin.com/in/davidpatterson",
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
      keyContact: "Dr. Rachel Foster",
      designation: "Chief Technology Officer",
      emailAddress: "rachel.foster@healthcareplus.com",
      phoneWhatsApp: "+1-555-0103",
      linkedinProfile: "linkedin.com/in/rachelfoster",
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
      keyContact: "James Mitchell",
      designation: "IT Director",
      emailAddress: "james.mitchell@techmanufacture.com",
      phoneWhatsApp: "+1-555-0104",
      linkedinProfile: "linkedin.com/in/jamesmitchell",
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
      keyContact: "Brian Cooper",
      designation: "VP Technology",
      emailAddress: "brian.cooper@shopsmart.com",
      phoneWhatsApp: "+1-555-0105",
      linkedinProfile: "linkedin.com/in/briancooper",
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
    },
    {
      customerName: "David Wilson",
      companyName: "InfoTech Solutions",
      companySize: "Large Enterprise",
      industryArea: "IT/ITES & BPO",
      annualRevenue: "$800M",
      geographicsFootprint: "India, USA, UK",
      keyContact: "Rajesh Kumar",
      designation: "Head of Infrastructure",
      emailAddress: "rajesh.kumar@infotech.com",
      phoneWhatsApp: "+1-555-0106",
      linkedinProfile: "linkedin.com/in/rajeshkumar",
      websiteURL: "www.infotech.com",
      numberOfEndpoints: "10000",
      numberOfServers: "400 (200 physical, 200 virtual)",
      cloudFootprint: "Azure - 600 VMs, AWS - 400 instances",
      dataCenterDetails: "5 global data centers + multi-cloud",
      networkSize: "150 routers, 500 switches, 100 firewalls, global MPLS",
      existingSecurityStack: "Symantec EDR, Checkpoint Firewalls, LogRhythm SIEM",
      itBudgetApprox: "$120M annually",
      existingMSPVendor: "Self-managed with selective vendor partnerships",
      currentSLAsAndSupportHours: "24x7 follow-the-sun support, 10-min response",
      painPointsWithExistingIT: "Multi-site coordination, talent retention, client SLA pressure",
      averageDowntimeIncidents: "15 incidents/month, avg 1 hour downtime",
      existingMonitoringTools: "Nagios, LogRhythm, custom monitoring",
      currentITSpend: "$110M OPEX, $25M CAPEX annually",
      currentMSPContractValue: "$8M/year for selective services",
      pricingPreferences: "Flexible pricing, volume-based discounts",
      renewalContractTimeline: "Rolling contracts with quarterly reviews",
      budgetAvailableForOutsourcing: "$15M for infrastructure optimization",
      customerBenchmarkingSummary: "Self-managed model works but scaling challenges exist. Opportunity for infrastructure modernization and automation.",
      additionalCommercialNotes: "Open to hybrid managed services. Focus on DevOps, automation, and global delivery capabilities."
    },
    {
      customerName: "Dr. Patricia Brown",
      companyName: "State University",
      companySize: "Large Enterprise",
      industryArea: "Education (Schools, Colleges, Universities)",
      annualRevenue: "$500M",
      geographicsFootprint: "Multiple campuses - USA",
      keyContact: "Dr. Steven Walsh",
      designation: "CIO",
      emailAddress: "steven.walsh@stateuniversity.edu",
      phoneWhatsApp: "+1-555-0107",
      linkedinProfile: "linkedin.com/in/stevenwalsh",
      websiteURL: "www.stateuniversity.edu",
      numberOfEndpoints: "15000",
      numberOfServers: "180 (90 physical, 90 virtual)",
      cloudFootprint: "Microsoft 365 + Azure - 300 VMs",
      dataCenterDetails: "2 on-prem data centers + Azure",
      networkSize: "100 routers, 400 switches (campus-wide), 30 firewalls",
      existingSecurityStack: "Microsoft Defender, Palo Alto, Azure Sentinel",
      itBudgetApprox: "$38M annually",
      existingMSPVendor: "Unisys for data center operations",
      currentSLAsAndSupportHours: "16x5 support (extended during exams)",
      painPointsWithExistingIT: "Budget constraints, legacy systems, student/faculty support demands",
      averageDowntimeIncidents: "20 incidents/month, avg 30 min downtime",
      existingMonitoringTools: "SCCM, Azure Monitor, SolarWinds",
      currentITSpend: "$35M OPEX, $8M CAPEX annually",
      currentMSPContractValue: "$12M/year with Unisys",
      pricingPreferences: "Education pricing, predictable annual budgets",
      renewalContractTimeline: "Contract renewal in Q3 2025",
      budgetAvailableForOutsourcing: "$15M for modernized IT services",
      customerBenchmarkingSummary: "Typical education budget constraints. Opportunity for cloud migration and student experience improvement.",
      additionalCommercialNotes: "Priority on learning management systems, research computing, and cybersecurity. Education sector experience required."
    },
    {
      customerName: "James Martinez",
      companyName: "City Government",
      companySize: "Large Enterprise",
      industryArea: "Government & Public Sector",
      annualRevenue: "$1.2B (Budget)",
      geographicsFootprint: "Metropolitan area",
      keyContact: "Angela Barnes",
      designation: "Chief Information Security Officer",
      emailAddress: "angela.barnes@citygovernment.gov",
      phoneWhatsApp: "+1-555-0108",
      linkedinProfile: "linkedin.com/in/angelabarnes",
      websiteURL: "www.citygovernment.gov",
      numberOfEndpoints: "5000",
      numberOfServers: "250 (180 physical, 70 virtual)",
      cloudFootprint: "Government Cloud - Azure Gov - 150 VMs",
      dataCenterDetails: "1 government data center + Azure Gov cloud",
      networkSize: "80 routers, 300 switches, 40 firewalls, city-wide fiber",
      existingSecurityStack: "Tanium, Fortinet Gov Edition, Splunk Gov Cloud",
      itBudgetApprox: "$65M annually",
      existingMSPVendor: "Deloitte for security services",
      currentSLAsAndSupportHours: "24x7 for critical services, 12x5 for general IT",
      painPointsWithExistingIT: "Compliance burden, aging infrastructure, citizen service expectations",
      averageDowntimeIncidents: "10 incidents/month, avg 45 min (public service impact)",
      existingMonitoringTools: "Splunk Gov, Tanium, government SIEM",
      currentITSpend: "$58M OPEX, $15M CAPEX annually",
      currentMSPContractValue: "$18M/year with Deloitte",
      pricingPreferences: "Government procurement compliant, multi-year contracts",
      renewalContractTimeline: "RFP process begins Q1 2026",
      budgetAvailableForOutsourcing: "$22M for comprehensive IT modernization",
      customerBenchmarkingSummary: "Security-focused with compliance requirements. Opportunity for smart city initiatives and citizen digital services.",
      additionalCommercialNotes: "Requires government clearances and compliance certifications. Priority on cybersecurity and public service continuity."
    },
    {
      customerName: "Lisa Thompson",
      companyName: "PowerGrid Energy",
      companySize: "Large Enterprise",
      industryArea: "Energy & Utilities",
      annualRevenue: "$3.8B",
      geographicsFootprint: "Regional - 5 states",
      keyContact: "Gregory Howard",
      designation: "Director IT Infrastructure",
      emailAddress: "gregory.howard@powergrid.com",
      phoneWhatsApp: "+1-555-0109",
      linkedinProfile: "linkedin.com/in/gregoryhoward",
      websiteURL: "www.powergrid.com",
      numberOfEndpoints: "3000",
      numberOfServers: "200 (140 physical, 60 virtual)",
      cloudFootprint: "Hybrid - Azure - 100 VMs",
      dataCenterDetails: "3 hardened data centers + limited cloud",
      networkSize: "60 routers, 250 switches, 35 firewalls, SCADA network",
      existingSecurityStack: "Dragos OT Security, Cisco ISE, Nozomi Networks",
      itBudgetApprox: "$72M annually",
      existingMSPVendor: "Schneider Electric for SCADA, IBM for IT",
      currentSLAsAndSupportHours: "24x7 support, 5-min response for grid operations",
      painPointsWithExistingIT: "NERC CIP compliance, OT/IT segmentation, critical infrastructure protection",
      averageDowntimeIncidents: "4 incidents/month, avg 30 min (zero tolerance for grid ops)",
      existingMonitoringTools: "Nozomi, Dragos, SCADA monitoring systems",
      currentITSpend: "$65M OPEX, $18M CAPEX annually",
      currentMSPContractValue: "$28M/year (split between Schneider and IBM)",
      pricingPreferences: "Uptime guarantees, regulatory compliance pricing",
      renewalContractTimeline: "Schneider in Q4 2025, IBM in Q2 2026",
      budgetAvailableForOutsourcing: "$35M for unified OT/IT security platform",
      customerBenchmarkingSummary: "Critical infrastructure with zero-downtime requirement. Opportunity for OT security and smart grid technology.",
      additionalCommercialNotes: "Requires NERC CIP expertise and critical infrastructure experience. Priority on grid resilience and cybersecurity."
    },
    {
      customerName: "Mark Garcia",
      companyName: "PetroTech Corp",
      companySize: "Large Enterprise",
      industryArea: "Oil & Gas",
      annualRevenue: "$5.5B",
      geographicsFootprint: "Global operations",
      keyContact: "Patricia Henderson",
      designation: "VP IT Services",
      emailAddress: "patricia.henderson@petrotech.com",
      phoneWhatsApp: "+1-555-0110",
      linkedinProfile: "linkedin.com/in/patriciahenderson",
      websiteURL: "www.petrotech.com",
      numberOfEndpoints: "4000",
      numberOfServers: "350 (250 physical, 100 virtual)",
      cloudFootprint: "AWS - 200 instances, Private cloud",
      dataCenterDetails: "4 global data centers + private cloud",
      networkSize: "100 routers, 350 switches, 50 firewalls, satellite links",
      existingSecurityStack: "Claroty, Honeywell OT Security, Palo Alto Networks",
      itBudgetApprox: "$150M annually",
      existingMSPVendor: "Halliburton for field IT, Cognizant for enterprise IT",
      currentSLAsAndSupportHours: "24x7 global support, 10-min response",
      painPointsWithExistingIT: "Remote operations, OT security, exploration data management",
      averageDowntimeIncidents: "8 incidents/month, avg 2 hours (production impact)",
      existingMonitoringTools: "Claroty, custom SCADA monitoring, AWS CloudWatch",
      currentITSpend: "$135M OPEX, $35M CAPEX annually",
      currentMSPContractValue: "$45M/year (split across vendors)",
      pricingPreferences: "Production uptime SLAs, global coverage pricing",
      renewalContractTimeline: "Cognizant Q1 2026, Halliburton Q3 2025",
      budgetAvailableForOutsourcing: "$55M for integrated OT/IT platform",
      customerBenchmarkingSummary: "Complex global operations with OT/IT convergence needs. Opportunity for unified platform and predictive maintenance.",
      additionalCommercialNotes: "Requires oil & gas industry expertise and global delivery. Priority on field operations support and exploration IT."
    },
    {
      customerName: "Jennifer Lee",
      companyName: "LogiChain Solutions",
      companySize: "SME",
      industryArea: "Logistics & Supply Chain",
      annualRevenue: "$250M",
      geographicsFootprint: "North America",
      keyContact: "Marcus Reynolds",
      designation: "IT Manager",
      emailAddress: "marcus.reynolds@logichain.com",
      phoneWhatsApp: "+1-555-0111",
      linkedinProfile: "linkedin.com/in/marcusreynolds",
      websiteURL: "www.logichain.com",
      numberOfEndpoints: "800",
      numberOfServers: "40 (20 physical, 20 virtual)",
      cloudFootprint: "AWS - 60 instances",
      dataCenterDetails: "1 data center + AWS cloud",
      networkSize: "15 routers, 50 switches, 8 firewalls, VPN",
      existingSecurityStack: "Sophos EDR, Fortinet, AWS GuardDuty",
      itBudgetApprox: "$12M annually",
      existingMSPVendor: "Local MSP for basic support",
      currentSLAsAndSupportHours: "12x5 support, 1-hour response time",
      painPointsWithExistingIT: "Limited IT staff, growth challenges, integration with customer systems",
      averageDowntimeIncidents: "18 incidents/month, avg 3 hours",
      existingMonitoringTools: "Basic monitoring, AWS CloudWatch",
      currentITSpend: "$10M OPEX, $3M CAPEX annually",
      currentMSPContractValue: "$2M/year with local MSP",
      pricingPreferences: "Cost-effective, scalable pricing",
      renewalContractTimeline: "Annual contract, renews Q4 2025",
      budgetAvailableForOutsourcing: "$4M for comprehensive managed services",
      customerBenchmarkingSummary: "Growing SME with limited IT resources. Opportunity for full managed services and business growth enablement.",
      additionalCommercialNotes: "Needs scalable IT to support business growth. Priority on logistics systems integration and 24x7 operations support."
    },
    {
      customerName: "Thomas White",
      companyName: "TransportCo",
      companySize: "Large Enterprise",
      industryArea: "Transportation & Aviation",
      annualRevenue: "$1.1B",
      geographicsFootprint: "USA, Canada, Mexico",
      keyContact: "Linda Coleman",
      designation: "CTO",
      emailAddress: "linda.coleman@transportco.com",
      phoneWhatsApp: "+1-555-0112",
      linkedinProfile: "linkedin.com/in/lindacoleman",
      websiteURL: "www.transportco.com",
      numberOfEndpoints: "2200",
      numberOfServers: "120 (60 physical, 60 virtual)",
      cloudFootprint: "Azure - 150 VMs",
      dataCenterDetails: "2 regional data centers + Azure",
      networkSize: "50 routers, 180 switches, 25 firewalls, SD-WAN",
      existingSecurityStack: "Carbon Black, Cisco Firepower, Splunk",
      itBudgetApprox: "$48M annually",
      existingMSPVendor: "CGI for IT operations",
      currentSLAsAndSupportHours: "24x7 support, 20-min response",
      painPointsWithExistingIT: "Fleet management integration, driver systems, real-time tracking challenges",
      averageDowntimeIncidents: "14 incidents/month, avg 90 min",
      existingMonitoringTools: "Splunk, Azure Monitor, fleet tracking systems",
      currentITSpend: "$42M OPEX, $10M CAPEX annually",
      currentMSPContractValue: "$18M/year with CGI",
      pricingPreferences: "Performance-based, fleet operations SLAs",
      renewalContractTimeline: "Contract renewal in Q1 2026",
      budgetAvailableForOutsourcing: "$22M for modern transportation IT platform",
      customerBenchmarkingSummary: "Transportation challenges with IoT and real-time systems. Opportunity for fleet optimization and driver experience improvement.",
      additionalCommercialNotes: "Requires transportation industry expertise. Priority on fleet management, driver safety systems, and logistics optimization."
    },
    {
      customerName: "Amanda Clark",
      companyName: "Luxury Hotels International",
      companySize: "Large Enterprise",
      industryArea: "Hospitality & Travel",
      annualRevenue: "$900M",
      geographicsFootprint: "Global - 100+ properties",
      keyContact: "Christopher Evans",
      designation: "VP IT Operations",
      emailAddress: "christopher.evans@luxuryhotels.com",
      phoneWhatsApp: "+1-555-0113",
      linkedinProfile: "linkedin.com/in/christopherevans",
      websiteURL: "www.luxuryhotels.com",
      numberOfEndpoints: "6000",
      numberOfServers: "180 (80 physical, 100 virtual)",
      cloudFootprint: "AWS - 250 instances, Azure - 100 VMs",
      dataCenterDetails: "3 regional data centers + multi-cloud",
      networkSize: "120 routers, 350 switches, 45 firewalls, global MPLS",
      existingSecurityStack: "Trend Micro, Palo Alto, Splunk",
      itBudgetApprox: "$52M annually",
      existingMSPVendor: "Amadeus for hospitality IT, Infosys for infrastructure",
      currentSLAsAndSupportHours: "24x7 support, 15-min response",
      painPointsWithExistingIT: "Property systems integration, guest experience tech, PCI compliance",
      averageDowntimeIncidents: "22 incidents/month across properties, avg 1 hour",
      existingMonitoringTools: "Property management system monitoring, Splunk, Datadog",
      currentITSpend: "$48M OPEX, $12M CAPEX annually",
      currentMSPContractValue: "$28M/year (split between Amadeus and Infosys)",
      pricingPreferences: "Per-property pricing, guest experience SLAs",
      renewalContractTimeline: "Amadeus Q2 2026, Infosys Q4 2025",
      budgetAvailableForOutsourcing: "$32M for unified hospitality platform",
      customerBenchmarkingSummary: "Luxury hospitality with high guest expectations. Opportunity for digital guest experience and property tech consolidation.",
      additionalCommercialNotes: "Requires hospitality industry expertise. Priority on guest experience, property management systems, and revenue optimization."
    },
    {
      customerName: "Richard Harris",
      companyName: "PropertyDev Group",
      companySize: "Large Enterprise",
      industryArea: "Real Estate & Facilities Management",
      annualRevenue: "$2.2B",
      geographicsFootprint: "Major US cities",
      keyContact: "Victoria Bennett",
      designation: "Chief Digital Officer",
      emailAddress: "victoria.bennett@propertydev.com",
      phoneWhatsApp: "+1-555-0114",
      linkedinProfile: "linkedin.com/in/victoriabennett",
      websiteURL: "www.propertydev.com",
      numberOfEndpoints: "1500",
      numberOfServers: "80 (40 physical, 40 virtual)",
      cloudFootprint: "Azure - 120 VMs",
      dataCenterDetails: "2 data centers + Azure",
      networkSize: "35 routers, 120 switches, 18 firewalls",
      existingSecurityStack: "Microsoft Defender, Fortinet, Azure Sentinel",
      itBudgetApprox: "$38M annually",
      existingMSPVendor: "JLL for facility tech, Atos for IT",
      currentSLAsAndSupportHours: "16x5 support, 30-min response",
      painPointsWithExistingIT: "Building IoT integration, smart building tech, tenant services",
      averageDowntimeIncidents: "12 incidents/month, avg 2 hours",
      existingMonitoringTools: "Building management systems, Azure Monitor",
      currentITSpend: "$34M OPEX, $8M CAPEX annually",
      currentMSPContractValue: "$16M/year (split between JLL and Atos)",
      pricingPreferences: "Smart building ROI-based pricing",
      renewalContractTimeline: "Both contracts Q3 2025",
      budgetAvailableForOutsourcing: "$20M for smart building platform",
      customerBenchmarkingSummary: "Real estate tech transformation opportunity. Focus on IoT, smart buildings, and tenant experience.",
      additionalCommercialNotes: "Requires proptech and IoT expertise. Priority on building automation, energy management, and tenant digital services."
    },
    {
      customerName: "Maria Rodriguez",
      companyName: "StreamMedia Networks",
      companySize: "Large Enterprise",
      industryArea: "Media & Entertainment",
      annualRevenue: "$1.4B",
      geographicsFootprint: "North America",
      keyContact: "Andrew Sullivan",
      designation: "CTO",
      emailAddress: "andrew.sullivan@streammedia.com",
      phoneWhatsApp: "+1-555-0115",
      linkedinProfile: "linkedin.com/in/andrewsullivan",
      websiteURL: "www.streammedia.com",
      numberOfEndpoints: "2500",
      numberOfServers: "300 (100 physical, 200 virtual)",
      cloudFootprint: "AWS - 500 instances, CDN infrastructure",
      dataCenterDetails: "3 media data centers + AWS + CDN",
      networkSize: "70 routers, 250 switches, 35 firewalls, high-bandwidth network",
      existingSecurityStack: "CrowdStrike, Akamai Security, Datadog",
      itBudgetApprox: "$68M annually",
      existingMSPVendor: "Akamai for CDN, Rackspace for cloud",
      currentSLAsAndSupportHours: "24x7 support, 10-min response for streaming services",
      painPointsWithExistingIT: "Content delivery optimization, DDoS protection, streaming quality",
      averageDowntimeIncidents: "10 incidents/month, avg 30 min (subscriber impact)",
      existingMonitoringTools: "Datadog, Akamai monitoring, custom streaming analytics",
      currentITSpend: "$62M OPEX, $15M CAPEX annually",
      currentMSPContractValue: "$35M/year (Akamai $25M, Rackspace $10M)",
      pricingPreferences: "Performance-based, streaming quality SLAs",
      renewalContractTimeline: "Akamai Q4 2025, Rackspace Q1 2026",
      budgetAvailableForOutsourcing: "$40M for next-gen streaming platform",
      customerBenchmarkingSummary: "Streaming media with high availability needs. Opportunity for AI-driven content delivery and viewer experience optimization.",
      additionalCommercialNotes: "Requires media streaming expertise. Priority on content delivery, DDoS protection, and global streaming performance."
    },
    {
      customerName: "Kevin Taylor",
      companyName: "AutoTech Manufacturing",
      companySize: "Large Enterprise",
      industryArea: "Automotive",
      annualRevenue: "$3.5B",
      geographicsFootprint: "Global - 15 plants",
      keyContact: "Michelle Wright",
      designation: "Director IT",
      emailAddress: "michelle.wright@autotech.com",
      phoneWhatsApp: "+1-555-0116",
      linkedinProfile: "linkedin.com/in/michellewright",
      websiteURL: "www.autotech.com",
      numberOfEndpoints: "5000",
      numberOfServers: "250 (150 physical, 100 virtual)",
      cloudFootprint: "Azure - 200 VMs, Private cloud",
      dataCenterDetails: "4 manufacturing data centers + Azure",
      networkSize: "90 routers, 400 switches, 40 firewalls, OT/IT network",
      existingSecurityStack: "Symantec, Fortinet, manufacturing OT security",
      itBudgetApprox: "$95M annually",
      existingMSPVendor: "Rockwell for OT, Capgemini for IT",
      currentSLAsAndSupportHours: "24x7 support, 15-min response for production systems",
      painPointsWithExistingIT: "Production line automation, quality systems, supply chain integration",
      averageDowntimeIncidents: "9 incidents/month, avg 2.5 hours (production loss)",
      existingMonitoringTools: "Rockwell monitoring, Azure Monitor, MES systems",
      currentITSpend: "$85M OPEX, $22M CAPEX annually",
      currentMSPContractValue: "$38M/year (Rockwell $22M, Capgemini $16M)",
      pricingPreferences: "Production uptime guarantees, zero-defect IT",
      renewalContractTimeline: "Both Q2 2026",
      budgetAvailableForOutsourcing: "$45M for Industry 4.0 platform",
      customerBenchmarkingSummary: "Automotive manufacturing with Industry 4.0 ambitions. Opportunity for smart factory and predictive maintenance.",
      additionalCommercialNotes: "Requires automotive and OT expertise. Priority on production systems, quality control, and smart manufacturing."
    },
    {
      customerName: "Susan Moore",
      companyName: "LegalPro Services",
      companySize: "SME",
      industryArea: "Professional Services (Legal, Accounting, Consulting)",
      annualRevenue: "$180M",
      geographicsFootprint: "USA - 25 offices",
      keyContact: "Timothy Brooks",
      designation: "IT Director",
      emailAddress: "timothy.brooks@legalpro.com",
      phoneWhatsApp: "+1-555-0117",
      linkedinProfile: "linkedin.com/in/timothybrooks",
      websiteURL: "www.legalpro.com",
      numberOfEndpoints: "1200",
      numberOfServers: "50 (25 physical, 25 virtual)",
      cloudFootprint: "Microsoft 365 + Azure - 80 VMs",
      dataCenterDetails: "1 data center + Microsoft 365",
      networkSize: "25 routers, 80 switches, 12 firewalls, MPLS",
      existingSecurityStack: "Microsoft Defender, Cisco Umbrella, Azure Sentinel",
      itBudgetApprox: "$16M annually",
      existingMSPVendor: "CompuCom for managed services",
      currentSLAsAndSupportHours: "12x5 support, 2-hour response time",
      painPointsWithExistingIT: "Data security, client confidentiality, compliance requirements",
      averageDowntimeIncidents: "15 incidents/month, avg 90 min",
      existingMonitoringTools: "Microsoft 365 admin, Azure Monitor",
      currentITSpend: "$14M OPEX, $4M CAPEX annually",
      currentMSPContractValue: "$6M/year with CompuCom",
      pricingPreferences: "Predictable pricing, compliance-inclusive",
      renewalContractTimeline: "Contract renewal Q4 2025",
      budgetAvailableForOutsourcing: "$8M for comprehensive legal tech platform",
      customerBenchmarkingSummary: "Legal services with high security needs. Opportunity for practice management and client collaboration platforms.",
      additionalCommercialNotes: "Requires legal industry expertise and compliance knowledge. Priority on data security, client confidentiality, and matter management."
    },
    {
      customerName: "Daniel Jackson",
      companyName: "BuildTech Construction",
      companySize: "Large Enterprise",
      industryArea: "Construction & Engineering",
      annualRevenue: "$2.8B",
      geographicsFootprint: "USA, Canada",
      keyContact: "Sandra Phillips",
      designation: "Head of IT",
      emailAddress: "sandra.phillips@buildtech.com",
      phoneWhatsApp: "+1-555-0118",
      linkedinProfile: "linkedin.com/in/sandraphillips",
      websiteURL: "www.buildtech.com",
      numberOfEndpoints: "3000",
      numberOfServers: "120 (60 physical, 60 virtual)",
      cloudFootprint: "Azure - 150 VMs",
      dataCenterDetails: "2 data centers + Azure",
      networkSize: "55 routers, 220 switches, 22 firewalls",
      existingSecurityStack: "McAfee, Fortinet, project management security",
      itBudgetApprox: "$58M annually",
      existingMSPVendor: "Procore for construction tech, NTT for IT",
      currentSLAsAndSupportHours: "16x6 support, 30-min response",
      painPointsWithExistingIT: "Project site connectivity, mobile workforce, BIM data management",
      averageDowntimeIncidents: "16 incidents/month, avg 2 hours",
      existingMonitoringTools: "Procore monitoring, Azure Monitor, site connectivity tools",
      currentITSpend: "$52M OPEX, $14M CAPEX annually",
      currentMSPContractValue: "$24M/year (Procore $14M, NTT $10M)",
      pricingPreferences: "Project-based pricing, site deployment flexibility",
      renewalContractTimeline: "NTT Q1 2026, Procore Q3 2025",
      budgetAvailableForOutsourcing: "$28M for construction tech platform",
      customerBenchmarkingSummary: "Construction with field operations challenges. Opportunity for mobile workforce and BIM collaboration platforms.",
      additionalCommercialNotes: "Requires construction industry expertise. Priority on project site connectivity, BIM systems, and mobile workforce support."
    },
    {
      customerName: "Nancy Williams",
      companyName: "AgriTech Solutions",
      companySize: "SME",
      industryArea: "Agriculture & Agri-tech",
      annualRevenue: "$150M",
      geographicsFootprint: "USA - Midwest region",
      keyContact: "Donald Turner",
      designation: "CIO",
      emailAddress: "donald.turner@agritech.com",
      phoneWhatsApp: "+1-555-0119",
      linkedinProfile: "linkedin.com/in/donaldturner",
      websiteURL: "www.agritech.com",
      numberOfEndpoints: "500",
      numberOfServers: "30 (15 physical, 15 virtual)",
      cloudFootprint: "AWS - 50 instances",
      dataCenterDetails: "1 on-prem + AWS",
      networkSize: "12 routers, 40 switches, 6 firewalls",
      existingSecurityStack: "Trend Micro, AWS Security Hub",
      itBudgetApprox: "$9M annually",
      existingMSPVendor: "Regional MSP for support",
      currentSLAsAndSupportHours: "12x5 support, 4-hour response",
      painPointsWithExistingIT: "Farm IoT integration, weather data, precision agriculture tech",
      averageDowntimeIncidents: "20 incidents/month, avg 4 hours",
      existingMonitoringTools: "Basic monitoring, AWS CloudWatch",
      currentITSpend: "$8M OPEX, $2M CAPEX annually",
      currentMSPContractValue: "$1.5M/year with regional MSP",
      pricingPreferences: "Cost-effective, seasonal flexibility",
      renewalContractTimeline: "Annual renewal Q1 2026",
      budgetAvailableForOutsourcing: "$3M for agritech platform",
      customerBenchmarkingSummary: "Growing agritech SME. Opportunity for IoT, precision agriculture, and data analytics platforms.",
      additionalCommercialNotes: "Needs agriculture industry knowledge. Priority on farm IoT, weather integration, and precision farming technology."
    },
    {
      customerName: "Christopher Miller",
      companyName: "Global Aid Foundation",
      companySize: "SME",
      industryArea: "Non-profits / NGOs",
      annualRevenue: "$80M (Donations)",
      geographicsFootprint: "Global - 40+ countries",
      keyContact: "Rebecca Morgan",
      designation: "IT Manager",
      emailAddress: "rebecca.morgan@globalaid.org",
      phoneWhatsApp: "+1-555-0120",
      linkedinProfile: "linkedin.com/in/rebeccamorgan",
      websiteURL: "www.globalaid.org",
      numberOfEndpoints: "800",
      numberOfServers: "40 (20 physical, 20 virtual)",
      cloudFootprint: "Microsoft 365 + Azure Non-profit - 60 VMs",
      dataCenterDetails: "1 data center + Microsoft nonprofit cloud",
      networkSize: "18 routers, 60 switches, 10 firewalls, satellite connectivity",
      existingSecurityStack: "Microsoft Defender, Cloudflare, Azure Sentinel",
      itBudgetApprox: "$6M annually",
      existingMSPVendor: "TechSoup for nonprofit IT support",
      currentSLAsAndSupportHours: "24x7 support (remote locations), 2-hour response",
      painPointsWithExistingIT: "Remote field operations, bandwidth constraints, donor data security",
      averageDowntimeIncidents: "25 incidents/month, avg 3 hours (remote locations)",
      existingMonitoringTools: "Microsoft 365 admin, basic monitoring",
      currentITSpend: "$5M OPEX, $1.5M CAPEX annually",
      currentMSPContractValue: "$800K/year with TechSoup",
      pricingPreferences: "Nonprofit pricing, mission-aligned",
      renewalContractTimeline: "Annual renewal Q2 2026",
      budgetAvailableForOutsourcing: "$2M for global operations platform",
      customerBenchmarkingSummary: "Global nonprofit with remote operations challenges. Opportunity for field operations tech and donor management systems.",
      additionalCommercialNotes: "Requires nonprofit experience and mission alignment. Priority on field operations, satellite connectivity, and donor management."
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
          ALL SECTOR IT MSP INDUSTRY DATABASE
        </h1>
        <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark">
          Potential Customer Database across all industry sectors
        </p>
      </motion.div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Chart 1: Number of Endpoints */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className={`p-6 rounded-2xl shadow-xl ${isDark ? 'bg-navy-card border-2 border-navy-light' : 'bg-white border-2 border-gray-300'}`}
        >
          <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Number of Endpoints (SME vs Large Enterprise)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={(() => {
              const getCurrentData = () => {
                switch (activeProposition) {
                  case 'proposition1':
                    return proposition1Data
                  case 'proposition2':
                    return proposition2Data
                  case 'proposition3':
                    return proposition3Data
                  default:
                    return proposition1Data
                }
              }
              const data = getCurrentData()
              const smeData = data.filter(d => d.companySize?.toLowerCase().includes('sme') || d.companySize?.toLowerCase().includes('small') || d.companySize?.toLowerCase().includes('medium'))
              const largeData = data.filter(d => d.companySize?.toLowerCase().includes('large'))

              const smeEndpoints = smeData.reduce((sum, d) => {
                const match = d.numberOfEndpoints?.match(/\d+/)
                return sum + (match ? parseInt(match[0]) : 0)
              }, 0)

              const largeEndpoints = largeData.reduce((sum, d) => {
                const match = d.numberOfEndpoints?.match(/\d+/)
                return sum + (match ? parseInt(match[0]) : 0)
              }, 0)

              return [
                { category: 'SME', endpoints: Math.round(smeEndpoints / Math.max(smeData.length, 1)) },
                { category: 'Large Enterprise', endpoints: Math.round(largeEndpoints / Math.max(largeData.length, 1)) }
              ]
            })()}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
              <XAxis dataKey="category" stroke={isDark ? '#9ca3af' : '#6b7280'} />
              <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} label={{ value: 'Number of Endpoints', angle: -90, position: 'insideLeft', offset: 0, style: { textAnchor: 'middle', fill: isDark ? '#9ca3af' : '#6b7280' } }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDark ? '#475569' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  color: isDark ? '#e5e7eb' : '#1f2937'
                }}
              />
              <Legend />
              <Bar dataKey="endpoints" fill="#0075FF" name="Avg Endpoints" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Chart 2: Number of Servers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className={`p-6 rounded-2xl shadow-xl ${isDark ? 'bg-navy-card border-2 border-navy-light' : 'bg-white border-2 border-gray-300'}`}
        >
          <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Number of Servers (SME vs Large Enterprise)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={(() => {
              const getCurrentData = () => {
                switch (activeProposition) {
                  case 'proposition1':
                    return proposition1Data
                  case 'proposition2':
                    return proposition2Data
                  case 'proposition3':
                    return proposition3Data
                  default:
                    return proposition1Data
                }
              }
              const data = getCurrentData()
              const smeData = data.filter(d => d.companySize?.toLowerCase().includes('sme') || d.companySize?.toLowerCase().includes('small') || d.companySize?.toLowerCase().includes('medium'))
              const largeData = data.filter(d => d.companySize?.toLowerCase().includes('large'))

              const smeServers = smeData.reduce((sum, d) => {
                const match = d.numberOfServers?.match(/\d+/)
                return sum + (match ? parseInt(match[0]) : 0)
              }, 0)

              const largeServers = largeData.reduce((sum, d) => {
                const match = d.numberOfServers?.match(/\d+/)
                return sum + (match ? parseInt(match[0]) : 0)
              }, 0)

              return [
                { category: 'SME', servers: Math.round(smeServers / Math.max(smeData.length, 1)) },
                { category: 'Large Enterprise', servers: Math.round(largeServers / Math.max(largeData.length, 1)) }
              ]
            })()}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
              <XAxis dataKey="category" stroke={isDark ? '#9ca3af' : '#6b7280'} />
              <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} label={{ value: 'Number of Servers', angle: -90, position: 'insideLeft', offset: 0, style: { textAnchor: 'middle', fill: isDark ? '#9ca3af' : '#6b7280' } }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDark ? '#475569' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  color: isDark ? '#e5e7eb' : '#1f2937'
                }}
              />
              <Legend />
              <Bar dataKey="servers" fill="#06B6D4" name="Avg Servers" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Chart 3: Network Size */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`p-6 rounded-2xl shadow-xl ${isDark ? 'bg-navy-card border-2 border-navy-light' : 'bg-white border-2 border-gray-300'}`}
        >
          <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Network Size (Routers & Switches)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={(() => {
              const getCurrentData = () => {
                switch (activeProposition) {
                  case 'proposition1':
                    return proposition2Data
                  case 'proposition2':
                    return proposition2Data
                  case 'proposition3':
                    return proposition3Data
                  default:
                    return proposition2Data
                }
              }
              const data = getCurrentData()
              return data.slice(0, 6).map(d => {
                const routersMatch = d.networkSize?.match(/(\d+)\s*routers/i)
                const switchesMatch = d.networkSize?.match(/(\d+)\s*switches/i)
                const routers = routersMatch ? parseInt(routersMatch[1]) : 0
                const switches = switchesMatch ? parseInt(switchesMatch[1]) : 0
                return {
                  company: d.companyName?.split('(')[0].trim() || 'Unknown',
                  routers: routers,
                  switches: switches
                }
              }).filter(d => d.routers > 0 || d.switches > 0)
            })()}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
              <XAxis dataKey="company" stroke={isDark ? '#9ca3af' : '#6b7280'} angle={-45} textAnchor="end" height={100} style={{ fontSize: '12px' }} />
              <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} label={{ value: 'Number of Devices', angle: -90, position: 'insideLeft', offset: 0, style: { textAnchor: 'middle', fill: isDark ? '#9ca3af' : '#6b7280' } }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDark ? '#475569' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  color: isDark ? '#e5e7eb' : '#1f2937'
                }}
              />
              <Legend />
              <Bar dataKey="routers" fill="#8B5CF6" name="Routers" />
              <Bar dataKey="switches" fill="#EC4899" name="Switches" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Chart 4: IT Budget */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className={`p-6 rounded-2xl shadow-xl ${isDark ? 'bg-navy-card border-2 border-navy-light' : 'bg-white border-2 border-gray-300'}`}
        >
          <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            IT Budget Comparison (Top Companies)
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={(() => {
              const data = proposition3Data
              return data.slice(0, 9).map(d => {
                const budgetMatch = d.itBudgetApprox?.match(/[\d,]+/)
                const budget = budgetMatch ? parseInt(budgetMatch[0].replace(/,/g, '')) : 0
                return {
                  company: d.companyName?.split('(')[0].trim() || 'Unknown',
                  budget: budget
                }
              }).filter(d => d.budget > 0)
            })()}>
              <CartesianGrid strokeDasharray="3 3" stroke={isDark ? '#374151' : '#e5e7eb'} />
              <XAxis dataKey="company" stroke={isDark ? '#9ca3af' : '#6b7280'} angle={-45} textAnchor="end" height={120} interval={0} style={{ fontSize: '12px' }} />
              <YAxis stroke={isDark ? '#9ca3af' : '#6b7280'} label={{ value: 'IT Budget (₹ Crores)', angle: -90, position: 'insideLeft', offset: 0, style: { textAnchor: 'middle', fill: isDark ? '#9ca3af' : '#6b7280' } }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: isDark ? '#1e293b' : '#ffffff',
                  border: `1px solid ${isDark ? '#475569' : '#e5e7eb'}`,
                  borderRadius: '8px',
                  color: isDark ? '#e5e7eb' : '#1f2937'
                }}
                formatter={(value: number) => [`₹${value} Cr`, 'IT Budget']}
              />
              <Legend />
              <Line type="monotone" dataKey="budget" stroke="#F59E0B" strokeWidth={3} name="IT Budget (₹ Cr)" dot={{ fill: '#F59E0B', r: 5 }} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

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

          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className={`w-full border-collapse ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
              <thead className="sticky top-0 z-10">
                <tr className={`border-b-2 ${isDark ? 'border-navy-light' : 'border-gray-300'}`}>
                  <th className={`px-3 py-2 text-center font-bold ${isDark ? 'bg-gray-300 text-gray-900' : 'bg-gray-200 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '60px', maxWidth: '60px' }}>
                    S.No.
                  </th>
                  <th colSpan={6} className={`px-3 py-2 text-center font-bold ${isDark ? 'bg-orange-200 text-gray-900' : 'bg-orange-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    CUSTOMER INFORMATION
                  </th>
                  <th colSpan={6} className={`px-3 py-2 text-center font-bold ${isDark ? 'bg-cyan-200 text-gray-900' : 'bg-cyan-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    CONTACT DETAILS
                  </th>
                  {activeProposition === 'proposition1' && (
                    <th colSpan={3} className={`px-3 py-2 text-center font-bold ${isDark ? 'bg-purple-200 text-gray-900' : 'bg-purple-100 text-gray-900'}`}>
                      Current IT Infrastructure Landscape
                    </th>
                  )}
                  {activeProposition === 'proposition2' && (
                    <>
                      <th colSpan={6} className={`px-3 py-2 text-center font-bold ${isDark ? 'bg-purple-200 text-gray-900' : 'bg-purple-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        Current IT Infrastructure Landscape
                      </th>
                      <th colSpan={3} className={`px-3 py-2 text-center font-bold ${isDark ? 'bg-pink-200 text-gray-900' : 'bg-pink-100 text-gray-900'}`}>
                        Current IT Support Setup
                      </th>
                    </>
                  )}
                  {activeProposition === 'proposition3' && (
                    <>
                      <th colSpan={6} className={`px-3 py-2 text-center font-bold ${isDark ? 'bg-purple-200 text-gray-900' : 'bg-purple-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        Current IT Infrastructure Landscape
                      </th>
                      <th colSpan={6} className={`px-3 py-2 text-center font-bold ${isDark ? 'bg-pink-200 text-gray-900' : 'bg-pink-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        Current IT Support Setup
                      </th>
                      <th colSpan={5} className={`px-3 py-2 text-center font-bold ${isDark ? 'bg-yellow-200 text-gray-900' : 'bg-yellow-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                        Financial & Commercial Datapoints
                      </th>
                      <th colSpan={2} className={`px-3 py-2 text-center font-bold ${isDark ? 'bg-green-200 text-gray-900' : 'bg-green-100 text-gray-900'}`}>
                        CMI Insights
                      </th>
                    </>
                  )}
                </tr>
                <tr className={`border-b-2 ${isDark ? 'border-navy-light' : 'border-gray-300'}`}>
                  <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-gray-200 text-gray-900' : 'bg-gray-100 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '60px', maxWidth: '60px' }}>
                    S.No.
                  </th>
                  <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Company Name
                  </th>
                  <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Company Size (SME or Large Enterprise)
                  </th>
                  <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Industry Area
                  </th>
                  <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Annual Revenue
                  </th>
                  <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-orange-100 text-gray-900' : 'bg-orange-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Geographics | Footprint
                  </th>
                  <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Key Contact Person
                  </th>
                  <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Designation / Role
                  </th>
                  <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Email Address (verified / generic)
                  </th>
                  <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Phone / WhatsApp Number
                  </th>
                  <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    LinkedIn Profile
                  </th>
                  <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-cyan-100 text-gray-900' : 'bg-cyan-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`}>
                    Website URL
                  </th>
                  {activeProposition === 'proposition1' && (
                    <>
                      {/* Current IT Infrastructure Landscape - 3 columns */}
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Number of endpoints (laptops, desktops, mobile devices)
                      </th>
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
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
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Number of endpoints (laptops, desktops, mobile devices)
                      </th>
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Number of servers (physical + virtual)
                      </th>
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Cloud footprint (Azure/AWS/GCP workloads)
                      </th>
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Data center details (on-prem, colo, colocation, cloud)
                      </th>
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Network size: routers, switches, firewalls, WAN links
                      </th>
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
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
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Number of endpoints (laptops, desktops, mobile devices)
                      </th>
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Number of servers (physical / virtual)
                      </th>
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Cloud footprint (Azure/AWS/GCP workloads)
                      </th>
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Data center details (on-prem, colo, colocation, cloud)
                      </th>
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Network size: routers, switches, SD-WAN firewalls, VPN
                      </th>
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-purple-100 text-gray-900' : 'bg-purple-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '120px', maxWidth: '120px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
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
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-green-100 text-gray-900' : 'bg-green-50 text-gray-900'} border-r ${isDark ? 'border-gray-400' : 'border-gray-300'}`} style={{ width: '150px', maxWidth: '150px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
                        Customer Benchmarking Summary
                      </th>
                      <th className={`px-3 py-2 text-center font-semibold ${isDark ? 'bg-green-100 text-gray-900' : 'bg-green-50 text-gray-900'}`} style={{ width: '150px', maxWidth: '150px', whiteSpace: 'normal', lineHeight: '1.4', wordWrap: 'break-word' }}>
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
                      <td className={`px-3 py-2 text-center border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                        {index + 1}
                      </td>
                      <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                        {row.companyName}
                      </td>
                      <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                        {row.companySize}
                      </td>
                      <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                        {row.industryArea}
                      </td>
                      <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                        {row.annualRevenue}
                      </td>
                      <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                        {row.geographicsFootprint}
                      </td>
                      <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                        {row.keyContact}
                      </td>
                      <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                        {row.designation}
                      </td>
                      <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                        {row.emailAddress}
                      </td>
                      <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                        {row.phoneWhatsApp}
                      </td>
                      <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                        {row.linkedinProfile}
                      </td>
                      <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                        {row.websiteURL}
                      </td>
                      {activeProposition === 'proposition1' && (
                        <>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.numberOfEndpoints}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.numberOfServers}
                          </td>
                          <td className={`px-3 py-2 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.cloudFootprint}
                          </td>
                        </>
                      )}
                      {activeProposition === 'proposition2' && (
                        <>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.numberOfEndpoints}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.numberOfServers}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.cloudFootprint}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.dataCenterDetails}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.networkSize}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.existingSecurityStack}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.presenceOfInternalIT}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.existingMSPVendor}
                          </td>
                          <td className={`px-3 py-2 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
                            {row.currentSLAsAndSupportHours}
                          </td>
                        </>
                      )}
                      {activeProposition === 'proposition3' && (
                        <>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.numberOfEndpoints}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.numberOfServers}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.cloudFootprint}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.dataCenterDetails}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.networkSize}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.existingSecurityStack}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.itBudgetApprox}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.existingMSPVendor}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.currentSLAsAndSupportHours}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.painPointsWithExistingIT}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.averageDowntimeIncidents}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.existingMonitoringTools}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.currentITSpend}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.currentMSPContractValue}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.pricingPreferences}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.renewalContractTimeline}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.budgetAvailableForOutsourcing}
                          </td>
                          <td className={`px-3 py-2 border-r ${isDark ? 'text-text-primary-dark border-gray-400' : 'text-text-primary-light border-gray-300'}`}>
                            {row.customerBenchmarkingSummary}
                          </td>
                          <td className={`px-3 py-2 ${isDark ? 'text-text-primary-dark' : 'text-text-primary-light'}`}>
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
