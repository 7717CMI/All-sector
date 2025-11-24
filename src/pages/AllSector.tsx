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

  // Empty data arrays for all propositions
  const proposition1Data: DistributorData[] = []
  const proposition2Data: DistributorData[] = []
  const proposition3Data: DistributorData[] = []

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
                {currentData.length === 0 && (
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
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
