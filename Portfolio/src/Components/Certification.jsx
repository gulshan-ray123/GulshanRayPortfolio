import React from 'react'
import CertCard from './CertCard'

function Certification() {
  return (
    <div>
      <section className='h-[100%]  bg-gradient-to-r from-slate-950 to-slate-900  md:w-[92%]  md:ml-5 md:mt-4 w-[100%]'>
           <h1 className='text-white text-center merriweather md:text-6xl text-5xl relative top-11'>My Certifications</h1>
      <h1 className='text-white text-center merriweather md:text-5xl text-5xl relative top-7  opacity-35'>My Certifications</h1>
      <div className="flex flex-row justify-start items-start flex-wrap">
      <CertCard duration="4 Months" year="2023" org="Scaler" CertificationName="Java Course- Mastering the fundamentals" link="https://moonshot.scaler.com/s/li/-Nu04yn7eU"/>
       <CertCard duration="2 Months" year="2024" org="Coursera" CertificationName="AWS Foundational" link="https://www.coursera.org/account/accomplishments/verify/6Z50CXT6283V?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=project"/>
       <CertCard duration="3 Months" year="2024" org="Data Flair" CertificationName="Web Devlopment" link="https://data-flair.training/verify/7A63831608-7A4B5051E0-73557D9F34/"/>
       <CertCard duration="3 Months" year="2024" org="Microsoft" CertificationName="Python for Beginners" link="https://learn.microsoft.com/en-gb/users/gulshankumarray-2452/achievements/print?tab=tab-learning-paths"/>
       <CertCard duration="1 Months" year="2025" org="TATA" CertificationName="GenAI Powered Data Analytics Job Simulation " link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_NNXtCCo6Nhapr7A8i_1756309093643_completion_certificate.pdf"/>
       <CertCard duration="1 Months" year="2025" org="JP Morgan Chase&Co" CertificationName="Software Engineering" link="https://www.theforage.com/completion-certificates/Sj7temL583QAYpHXD/E6McHJDKsQYh79moz_Sj7temL583QAYpHXD_NNXtCCo6Nhapr7A8i_1758180733906_completion_certificate.pdf"/>
      </div>
      
      </section>
    </div>
  )
}

export default Certification
