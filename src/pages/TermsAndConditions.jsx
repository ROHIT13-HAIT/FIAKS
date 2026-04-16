import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/marketing/Header';
import Footer from '../components/marketing/Footer';

import banner from '../../src/images/banners/terms-and-conditions.jpg'
import policyImage from '../../src/images/policy.jpg'; 
import { CheckCircle } from 'lucide-react';



const TermsAndConditions = () => {



  return (
    <div className="min-h-screen" data-testid="events-page" style={{ backgroundImage: `url(${policyImage})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundAttachment:'fixed' }}>
      <Header forceDark={true} />

      {/* Hero Section */}
      <section className="relative" style={{ marginTop: '80px' }}>
        <img src={banner} className='img-fluid' alt='' style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
        <div className="">
          <div className='container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl absolute inset-0 flex flex-col items-start justify-center p-4'>
            <h1 className="font-['Outfit'] text-4xl md:text-5xl lg:text-5xl font-bold text-white mb-6">
              Terms and Conditions
            </h1>
            <p className="text-white text-lg max-w-2xl">
              Join industry leaders at our exclusive events, conferences, and workshops designed for BFSI professionals.
            </p>
          </div>
        </div>
      </section>


      <section className="py-16 md:py-16" >
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
          <div className="grid gap-12 items-center">
            {/* Content */}
            <div>
              <div>
                <p className='text-md leading-relaxed my-4'>This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. The Term and Conditions along with our Privacy Policy, Disclaimers, etc. (collectively this “Terms”) forms the terms and conditions of use of our services (“Services”). These Terms are a legal document between the User (as defined below) and Hrishanu Business Solutions LLP (“HALLP”, “we”, “our” or “us”). HALLP has created a forum called Forum of Industry Academic Knowledge Sharing (“FIAKS”) with the main aim of creating a knowledge sharing platform for professionals, organizing workshops, helping members to connect and network for business/ professional purposes.</p>

                <p className='text-md leading-relaxed my-4'>YOU MUST CAREFULLY READ AND UNDERSTAND THESE TERMS BECAUSE BY DOWNLOADING, INSTALLING AND USING THE FIAKS (FORUM OF INDUSTRY & ACADEMIC KNOWLEDGE SHARING) WEBSITE, MOBILE OR DESKTOP APPLICATION ( “APP”) WHICH IS OWNED AND OPERATED BY HALLP, YOU EXPRESSLY AGREE TO BE BOUND BY THESE TERMS. IN CASE YOU DO NOT AGREE TO THE TERMS, PLEASE DO NOT USE, DOWNLOAD OR INSTALL THE APP. THESE TERMS AND ALL OTHER APPLICABLE LAWS AND REGULATIONS GOVERN YOUR ACCESS AND USE OF THE APP, IRRESPECTIVE OF WHETHER YOU ARE A REGISTERED USER OR A VISITOR (WHICH MEANS THAT YOU SIMPLY BROWSE THE APP WITHOUT LIMITATION, THROUGH A MOBILE OR OTHER WIRELESS DEVICE, OR OTHERWISE USE THE APP WITHOUT BEING REGISTERED). The terminologies “You”, “Your”, “User” and “Users” shall be read in context, and shall refer to you.</p>

                <p className='text-md leading-relaxed my-4'>In case of an organization, company or branch of government, you represent and warrant that you have the authority to legally bind your company or organization and your company or organization will be bound by the obligations and restrictions of these terms. Any and all references herein to ‘you’ or ‘your’ will include your company or organization. If You do not agree to the Terms or do not have the authority to bind your organization or company to these Terms, then do not access, avail, download, install or use the app.</p>

                <p className='text-md leading-relaxed'>It is understood that these Terms shall construe an agreement between You and HALLP.</p>
              </div>

              <div className='mt-8'>
                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>About The App</h4>
                <p className='text-md leading-relaxed'>FIAKS App is a unique mobile and web application or software or technology developed by HALLP that allows Users to view, read, share and use News, eBooks and other contents including but not limited to videos, images, GIFs, memes etc., aggregated from different sources (hereinafter referred to as ‘Contents’). This App is also acting as an intermediary and uses an intermediary and/or enabling technology that categorizes Contents from various sources and allows Users to explore, search, access, view and share the Contents with third parties based on these categories.</p>

              </div>

              <div className='mt-8'>
                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Eligibility</h4>
                <p className='text-md leading-relaxed'>Use and access to the App is available to all persons who can be legally bound by contract and who are not disqualified or declared incompetent under the Indian Contract Act, 1872. If You are a minor i.e. under the age of 18 years, You shall not register as a User of the App and shall not access or use the App. As a minor if You wish to access or use the App, such access or use may be made by Your legal guardian or parents on the App. HALLP reserves the right to terminate such use and/ or refuse to provide You with access to the App if it is brought to HALLP’s notice or if it is discovered that You are under the age of 18 years.</p>
              </div>

              <div className='mt-8'>
                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Term and Termination</h4>
                <p className='text-md leading-relaxed'>These Terms, and any posted revision, shall remain in full force and effect while you use the App and certain provisions may continue to apply even after termination. You may terminate this Agreement by uninstalling or deleting the App at any time, for any reason. HALLP may terminate this Agreement in part or in full, by cancelling your subscription, if any, deleting Your account or profile without assigning any reasons whatsoever. On termination of this Agreement, all of Your profile contents and other information will not be accessible by you. However, certain details are maintained with us for reaching out to you for specific purposes such as offering FIAKS related products, providing information about events, etc., for archival and legal purposes. We reserve the right to change these Terms from time to time. If You do not agree to any such changes, You have the discretion to discontinue from accessing, availing, installing, browsing or using the App. Continued access or use of the App will indicate Your acknowledgement of the changes made by Us and You will be bound by such revised Terms.</p>
              </div>

              <div className='mt-8'>
                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Communications</h4>
                <p className='text-md leading-relaxed my-4'>When You use the App or send emails or other data, information or communication to HALLP, You agree and understand that You are communicating with HALLP through electronic records and You consent to receive communications via electronic records from HALLP periodically and as and when required. HALLP may communicate with You by email provided by You in Your communications or at the time of registration or by any other mode of communication, electronic or otherwise. However, HALLP does not assure any confidentiality or security of information provided to HALLP from Your side.</p>
              </div>

              <div className='mt-8'>
                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Your License and Use of the App</h4>
                <p className='text-md leading-relaxed my-4'>Subject to the Terms and Conditions and Your payment of required fees, if any, HALLP hereby grants You only a limited, non-transferrable, non-exclusive, revocable license to make personal and non-commercial use of the App.</p>
                <p className='text-md leading-relaxed my-4'>The App is licensed, not sold, to You, and HALLP retains ownership of all copies of the App even after installation on Your devices. HALLP may assign this License Agreement or any part of it without restrictions. You are not allowed to assign, transfer or sub-license Your rights including your account and subscription under this license, to any third party.</p>
              </div>
              <div className='mt-8'>
                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Proprietary Rights in Contents</h4>
                <p className='text-md leading-relaxed my-4'>You understand and acknowledge that you are responsible for the accuracy of the information you provide. You acknowledge that the App is merely an intermediary/ enabling technology that allows Users to search for Contents, therefore HALLP holds no responsibility for the materials contained in the Contents or in accuracy of the Contents accessible by use of the App by the User. In no event shall HALLP assume or have any responsibility or liability for the Contents accessible by use of the App for any claims, damages or losses resulting from the use of the Contents.</p>
                <p className='text-md leading-relaxed my-4'>You acknowledge and concede that the Contents accessible by use of the App are the property of FIAKS and/or the relevant content providers, as the case may be, and is subject of proprietary and other rights including any Intellectual Property Rights. You are not permitted to distribute, download/use/access, transmit, republish, display, sell, license or otherwise communicate the Contents to the public in any manner except via the features provided in the App.</p>
              </div>
              <div className='mt-8'>
                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Activity Prohibited</h4>
                <p className='text-md leading-relaxed font-semibold my-4'>You agree, undertake and confirm that Your use of the App shall be strictly governed by, including but not limited to the following:</p>
                <div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not alter or modify any part of the App and/or use the App for any illegal purpose;</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not reformat or frame any portion of any web page that is part of the App;</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not directly or indirectly, collect, process, store, deal or use or attempt to collect, process, store, deal or use personal data, or any other kind of information about other Users, including without limitation, through spidering or any form of scraping;</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">
                      You shall not post advertisements, promotions or solicitations of business or solicit Users or post spam or any other form of solicitation or spam; post or transmit any communication or solicitation designed or intended to obtain the password, account or private information from any other User;</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not impersonate another person, whether real or fictional or otherwise misrepresent Your affiliation with a person or entity, for example, by registering an account in the name of another person or company, or sending messages or making comments using the name of another person impersonate other Users or otherwise fake Your identity;</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not rent, sell or transfer or lease or offer to sell or transfer access to the App and/or any HALLP account or permit any third parties to use Your name and password, or any Contents on the App.</span>
                  </div>

                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not resell or commercially use the App or any of its Contents, or download or copy account information for the benefit of Yourself or any third-party. The App is for personal use only and shall not be reproduced, duplicated, copied, sold, resold, visited, or otherwise exploited for any commercial purpose;</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not authorize any third party to use Your account;</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">
                      You shall not, directly or indirectly, create groups, forums, etc. and add FIAKS group members, or communicate with group members in this regard, or create a directory of the group members or share the numbers of group members with other members or non-members.</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">
                      You shall not commit or engage in, or encourage, induce, solicit or promote, any conduct that would constitute a criminal offence, give rise to civil liability or otherwise violate any law or regulation; or use the App for any illegal or unauthorized purpose;</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You agree to comply with all local laws applicable to Your conduct and with respect to the content and information, including hyperlinks, that You upload, store, share or transmit using the App;</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">
                      You shall not alter or remove, attempt to alter or remove any trademark, copyright or other proprietary or legal notices contained in, or appearing on, the App or on any Contents appearing on the App. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information (including images, content, music, text, page layout, or form) of HALLP and our affiliates or other Users. You may not use any meta-tags or any other “hidden text” utilizing HALLP’s name or trademarks without the express written consent of HALLP, specifically including those pertaining to FIAKS. Any unauthorized use terminates the permission or license granted by HALLP. You may not use any HALLP logo or other proprietary graphic or trademark as part of the link without HALLP’s advance express written permission;</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not employ scraping or similar techniques to aggregate, repurpose, adapt, copy, republish, make available or otherwise communicate to the public, display, perform, transfer, share, distribute or otherwise use or exploit the Contents except via the features provided in the App.</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not, permit any third party to, copy or adapt the object code of the App, or reverse engineer, reverse assemble, decompile, modify or attempt to discover any source or object code of any part of the App, or circumvent or attempt to circumvent or copy any copy protection mechanism or access any rights management information pertaining to Contents;</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">
                      You shall not transmit any viruses, worms, defects, Trojan horse, cancel bots, spyware, other items of a contaminating or destructive nature, adware, packet or IP spoofing, forged routing or electronic mail address information or similar methods or technology harmful code, flood pings, malware, bot, time bomb, worm, or other harmful or malicious component, which or might overburden, impair or disrupt the App or networks forming part of, or connected to, the App, or which does or might restrict or inhibit any other User’s use and enjoyment of the App;</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not stalk, exploit, threaten, abuse or otherwise harass another User, or any HALLP employee;</span>
                  </div>

                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not violate, circumvent or attempt to violate or circumvent any data security measures employed by HALLP; access or attempt to access data or materials which are not intended for Your use; log into, or attempt to log into, an account which You are not authorized to access; attempt to scan or test the vulnerability of HALLP’s server, system or network or attempt to breach HALLP’s data security or authentication procedures; attempt to interfere with the App by any means including, without limitation, hacking HALLP’s servers or systems, submitting a virus, overloading, mail-bombing or crashing. insult, harass, threaten, molest or intimidate other Users;</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not use any robot, spider, offline readers, site search and/or retrieval application, or other device to retrieve or index any portion of the App, with the exception of public search engines; use any robot, spider, scraper or other automated means to access, analyze or copy the App and/or information (whether our information or other User’s information),</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall at all times ensure full compliance with the applicable provisions of the Information Technology Act, 2000 and rules there under as applicable and as amended from time to time and also all applicable Domestic laws, rules and regulations and International Laws, Foreign Exchange Laws, Statutes, Ordinances and Regulations (including, but not limited to Sales Tax/VAT, Income Tax, Service Tax, Central Excise, Custom Duty, Local Levies).</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">
                      You agree to comply with the above conditions and acknowledge that HALLP has the right, in its sole discretion, to terminate Your account or take action as in our sole discretion is necessary if You breach any of the above conditions or any of the other provisions of this Terms;</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You understand that we have the right at all times to disclose any information (including the identity of the persons providing information or materials on App) as necessary to satisfy any law, regulation or valid governmental request. This may include, without limitation, disclosure of the information in connection with investigation of alleged illegal activity or solicitation of illegal activity or in response to a lawful court order. In addition, we can (and You hereby expressly authorize us to) disclose any information about You to law enforcement or other government officials, as we, in our sole discretion, believe necessary or appropriate in connection with the investigation and/or resolution of possible crimes, especially those that may involve personal injury; Throughout these Terms, HALLP’s prior written consent means a communication coming from HALLP’s Legal Department, specifically in response to Your request, and specifically addressing the activity or conduct for which You seek authorization.</span>
                  </div>
                </div>
              </div>

              <div className='mt-8'>
                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Third Party Contents</h4>
                <p className='text-md leading-relaxed my-4'>The App is merely an intermediary/ enabling technology that allows Users to search for Contents. It is hereby strictly clarified that the information available on the App is derived from various third parties (“Third Party Contents”). Whilst the Information including but not limited to Third Party Contents contained on the App have been presented with all due care, HALLP does not warrant or represent that the Information or the Third Party Contents are free from errors or omissions.</p>
                <p className='text-md leading-relaxed my-4'>It is strictly clarified that, the App may provide access to Third Party Contents and links to third party websites that are not owned, controlled or endorse by HALLP. HALLP is not responsible for any third-party contents, applications, services, advertisements, and/or links that may be contained in the App.</p>

                <p className='text-md leading-relaxed my-4'>The information including but not limited to Third Party Contents and other Contents on the App are made available on the understanding that HALLP and their respective employees and agents shall have no liability (including liability by reason of negligence) to the users for any loss, damage, cost or expense incurred or arising by reason of any person using or relying on the information including but not limited to Third Party Contents and other Contents on the App and whether caused by reason of any error, negligent act, omission or misrepresentation in the information including but not limited to Third Party Contents and other Contents on the App or otherwise.</p>

                <p className='text-md leading-relaxed my-4'>HALLP takes no responsibility for the accuracy, reliability correctness and currency of the information including but not limited to Third Party Contents and other Contents on the App or for the accuracy, reliability correctness and currency of links or references to information sources including but not limited to websites or internet sites outside of the App. Links to other websites or internet sites are not under the control of HALLP and are provided for information only. HALLP has not reviewed or approved any content that appears on the linked websites.</p>

                <p className='text-md leading-relaxed my-4'>No part of the App and no Content specifically third party content, may be copied, reproduced, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, downloaded or distributed in any way (including “mirroring”) to any other computer, server, website or other medium for publication or distribution or for any commercial enterprise. HALLP shall have all the rights to take necessary action and claim damage in case of any violation in addition to Your direct liability with these third parties. Such action may also involve terminating of the permission for User to use the App by deleting User Account.</p>

                <p className='text-md leading-relaxed my-4'>You may use general information about the App expressly permitted, provided that You (1) do not remove any proprietary notice language in all copies of such documents, (2) use such Contents only for Your personal, non-commercial informational purpose unless agreed otherwise through an agreement and do not copy or post such Contents on any networked computer or broadcast it in any media, (3) make no modifications to any such Contents, and (4) do not make any additional representations or warranties relating to such documents.</p>
              </div>

              <div className='mt-8'>
                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>User Representations and Warranties</h4>
                <p className='text-md leading-relaxed my-4'>This App and the Contents under it are provided by HALLP “as is” and on an “as available” basis and HALLP, its officers, directors, employees, and agents make no warranties and hereby disclaim any express or implied warranties, including, but not limited to, the implied warranties (collectively, “warranties”) of merchantability and fitness for a particular purpose are disclaimed. In no event shall HALLP be liable for any direct, indirect, incidental, special, exemplary, or consequential damages (including, but not limited to, procurement of substitute goods or services; loss of use, data, or profits; or business interruption) however caused and on any theory of liability, whether in contract, strict liability, or tort (including negligence or otherwise) arising in any way out of the use of this App, even if advised of the possibility of such damage.</p>
                <p className='text-md leading-relaxed my-4'>You agree that Your use of the App shall be at Your sole risk. To the fullest extent permitted by law, HALLP disclaims all warranties, express or implied, in connection with the use of the App.</p>
                <p className='text-md leading-relaxed my-4'>HALLP makes no representations or guarantee that the App will be free from loss, destruction, damage, any unauthorized access to or use of HALLP’s secure servers and/or any and all personal information and/or financial information stored therein, corruption, attack, any interruption or cessation of transmission to or from the App, any bugs, viruses, Trojan horses, or the like which may be transmitted to or through the App by any third party, and/or any errors or omissions in any content or for any loss or damage of any kind incurred as a result of the use of any of the Content accessible via the App. HALLP does not warrant, endorse, guarantee, or assume responsibility for any product or service advertised or offered by a third party through the services or any hyperlinked services or featured in any banner or other advertising, and HALLP will not be a party to or in any way be responsible for monitoring any transaction between You and third-party providers of products or services. As with the purchase of a product or service through any medium or in any environment, You should use Your best judgment and exercise caution, interference, personal injury or property damage, of any nature whatsoever, resulting from Your access to and use of the App, hacking, or other security intrusion, and HALLP disclaims any liability relating thereto.</p>
                <p className='text-md leading-relaxed my-4'>HALLP makes no guarantees, representations, or warranties that use or results of the use of the app will be accurate, timely, reliable, uninterrupted, or without errors. Without prior notice, HALLP may modify, suspend, or discontinue any part or all of the App or Your use of the App. In such event, HALLP will not be liable to You or any third party.</p>
                <p className='text-md leading-relaxed my-4'>HALLP makes no guarantees, representations, or warranties that Contents accessible through the App by the User or the links provided by third parties will be free of viruses or similar contamination or destructive features. You agree that You assume all risk as to the quality and performance of the App and the accuracy and completeness of the contents.</p>
                <p className='text-md leading-relaxed my-4'>You assure, represent and warrant to HALLP that by uploading any content or information, you are not in breach of any confidentiality obligations, intellectual property rights and any such obligation under law, agreement or otherwise</p>
                <p className='text-md leading-relaxed my-4'>You understand that You may encounter offensive, indecent, or other objectionable content while using the App and that You may be involuntarily exposed to such offensive and obscene materials, which is unintentional and does not imply any disrespect or demeanour to you or any third person from FIAKS or HALLP.</p>
                <p className='text-md leading-relaxed my-4'>It is also possible for others to obtain personal information about You due to Your use of the App, and that the recipient may use such information to harass or injure you. We do not approve of such unauthorized use, but by using the App You acknowledge and agree that we are not responsible for any such illegitimate use of any personal information so obtained by others.</p>
              </div>

              <div className='mt-8'>
                <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>User Generated Content</h4>
                <p className='text-md leading-relaxed my-4'>As a user of the App, You may submit comments, feedbacks, likes etc. to the content available on the App. The term “User Content” used in this provision shall mean and include any content including without limitation text, comments, graphics, gifs, photos or any other content You upload to the App, provide on email or on any medium for access of HALLP and/or its members. You shall be solely responsible for the User Content posted by You and the consequences of submitting or position User Content on the Application.</p>
                <p className='text-md leading-relaxed my-4'>You hereby grant Us and all Our users a non-exclusive, transferable, sub-licensable, royalty-free, worldwide license to reproduce, distribute, create derivate works from, retransmit, and other exploit and use any User Content submitted or posted by You to the Application. You understand that We may use your content for promoting, advertising or marketing HALLP, its affiliates, the Application and our Services. Any User Content posted by You to or through the Services will be considered non-confidential and non-proprietary, and may be used by Us and other Users in accordance with these terms without notice to you and without any liability to Us. For clarity, You retain all right, title and interest in all User Content and information You submit, upload or post on the Application.</p>
                <p className='text-md leading-relaxed my-4'>We do not pre-screen or monitor any Used Content submitted by users to the Application. However, We reserve the right to remove, disallow, block or delete any User Content in our sole discretion with or without notice to You. You use of the Application shall be governed by the following:</p>

                <div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not submit, upload or post any content which is sexually explicit, vulgar, obscene on the Application.</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not submit, upload or post any content that is unlawful, illegal, fraudulent or harmful purpose or activity in contravention to any applicable laws and regulations including the policies and regulation adopted by Google Play Store.</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">
                      You shall not submit, upload or post any content that violates the publicity or privacy or any other legal rights of any person or entity.</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">
                      You shall not submit, upload or post any content that amounts to hate speech or incites violence or any racially, culturally, or ethnically offensive content or any content that is harmful, harassing, intimidating, threatening, hateful, objectionable, discriminatory or abusive in nature.</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not submit, upload or post any content that may affect the religious sentiments of any person.</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">You shall not submit, upload or post any content that violate or infringe the trade marks, copyrights or any other proprietary rights including intellectual property rights of any third party.</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">
                      You shall not submit, upload or post any content intended for advertising, marketing, spam or offering goods or services, whether or not for a charge or through linking with any other website, application or web pages.</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">
                      You shall not submit, upload or post any content that bullies, harasses or disrespects other users who are using the Application.</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">
                      You shall not post any spam content. This includes any repetitive comments, content, reports, private messages or actions designed to mislead or annoy other Users.</span>
                  </div>
                  <div className="flex items-start gap-2 rounded-xl py-1 mb-2">
                    <CheckCircle className="w-5 h-5 text-[#07549c]" style={{minWidth:'30px', marginTop:'4px'}} />
                    <span className="text-md leading-relaxed">
                      You shall not directly or indirectly use any robot, spider or any other data mining technology or automatic or manual process to monitor, cache, frame, mask, extract data from the Application or copy the Contents.</span>
                  </div>
                </div>

                <div className='mt-8'>
                  <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Privacy</h4>
                  <p className='text-md leading-relaxed my-4'>HALLP may collect some of Your personal information and data while accessing, availing and/or using the App. Such information collected is only attributed to the functionality of the App and for no other purpose whatsoever. You may read the HALLP’s Privacy Policy by visiting the following link here www.FIAKS.com.</p>
                </div>

                <div className='mt-8'>
                  <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Disclaimers</h4>
                  <p className='text-md leading-relaxed my-4'>THE APP, ITS FEATURES AND CONTENTS ARE PROVIDED “AS IS” AND “AS AVAILABLE”, AND “WITH ALL FAULTS”</p>
                  <p className='text-md leading-relaxed my-4'>our correspondence or business dealings with, or participation in promotions of, advertisers found on or through the App, including payment and delivery of related products or Services, and any other terms, conditions, warranties or representations associated with such dealings, are solely between You and such advertiser. We shall not be responsible or liable for any loss or damage of any sort incurred as the result of any such dealings or as the result of the presence of such advertisers on the App.</p>
                  <p className='text-md leading-relaxed my-4'>HALLP shall have all the rights to take necessary action and claim damages that may occur due to Your involvement/participation in any way on Your own or through group/s of people, intentionally or unintentionally in DoS/DDoS (Distributed Denial of Services).</p>
                  <p className='text-md leading-relaxed my-4'>All materials (including, without limitation, all designs, images, GIFs, memes, logos, names, text, illustrations, icons, audio clips, video clips, documents, products, software, sound recordings, music, graphics, look and feel of the App, trade dress, photographs, software, interfaces or code, video and links, registered or unregistered trademarks and all other content) on the App are protected by copyright and Intellectual Property laws under laws of both Republic of India and other countries and in all forms, media and technologies existing now or hereinafter developed and are the property of HALLP or our licensors or the respective third party entities as identified in our App and/or Services.</p>
                  <p className='text-md leading-relaxed my-4'>ALL THE CONTENT PROVIDED THROUGH THE APP ARE FOR ENTERTAINMENT AND INFORMATION PURPOSES ONLY AND TO THE EXTENT PERMITTED BY THE APPLICABLE LAW, HALLP DISCLAIMS ALL WARRANTIES, REPRESENTATIONS AND CONDITIONS OF ANY KIND, EXPRESSED OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY WARRANTY, REPRESENTATION OF CONDITION REGARDING THE RESULTS THAT MAY BE OBTAINED FROM THE USE OF THE CONTENT OR INFORMATION MADE AVAILABLE THROUGH THE APP, THE ACCURACY OR RELIABILITY OF ANY CONTENT OR INFORMATION MADE AVAILABLE THROUGH THE APP AND MAKES NO WARRANTY, REPRESENTATIONS OR CONDITIONS THAT THE CONTENT OR INFORMATION MADE AVAILABLE THROUGH THE APP WILL MEET YOUR REQUIREMENTS. NO CONTENT OR INFORMATION MADE AVAILABLE THROUGH THE APP OR OBTAINED BY YOU FROM HALLP OR THE APP THROUGH ANY MEANS WHATSOEVER SHALL CONSTITUTE ANY PROFESSIONAL ADVICE OR OPINION GIVEN BY HALLP TO YOU. YOU ARE REQUIRED TO INDEPENDENTLY CONSULT LICENSED PROFESSIONALS BEFORE MAKING ANY DECISIONS BASED ON ANY INFORMATION OR CONTENT MADE AVAILABLE TO YOU THROUGH THE APP.</p>
                </div>
                <div className='mt-8'>
                  <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Intellectual Property Right</h4>
                  <p className='text-md leading-relaxed my-4'>You understand that the App contains intellectual property of HALLP and that of third parties. The copyright, trademark, patent or other intellectual property rights in the Contents of the App (including, without limitation, all designs, logos, names, text code, processes, data, information links) are owned by HALLP or the respective third party entities as identified in the App. No license, right or interest is granted to You in any manner whatsoever, and Your use of and/or the App therein shall not constitute by implication, estoppel or otherwise, any license or right of use. As such, You shall not reproduce, transmit, republish, upload, post, perform, broadcast, adapt, parody, distribute, display, license and/or alter in whole or in part any of the foregoing in any manner without the express permission from HALLP. For any violation of intellectual property rights of third parties, You are shall directly be liable to such third Parties, and infact HALLP may assist third parties in case of an intellectual property violation by You. In case, You are the third party whose content is there on the App, HALLP has ensured that source/ link and credits have been duly provided. It is clarified that HALLP does not claim any right, title, interest or intellectual property rights over the contents and intellectual property of third parties.</p>
                  <p className='text-md leading-relaxed my-4'>You shall not download or encourage others to download copyrighted works, trademarks, or other proprietary information without obtaining the prior written consent of the owner of the Contents. In the event of infringement HALLP shall on its own sole discretion take necessary steps.</p> 
                </div>

                <div className='mt-8'>
                  <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Indemnity</h4>
                  <p className='text-md leading-relaxed my-4'>User hereby agrees to indemnify, defend and hold HALLP, (including all its officers, directors and employees) harmless from and against any and all damages, liabilities, costs and expenses, including attorney’s fees and expenses, arising out of, incident to, or resulting directly or indirectly from the use of the App in a manner inconsistent with this Terms. Notwithstanding its reasonable efforts, HALLP cannot take responsibility or control the contents made for access through the App.</p> 
                </div>

                <div className='mt-8'>
                  <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>No Liability</h4>
                  <p className='text-md leading-relaxed my-4'>TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL HALLP BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, PUNITIVE, SPECIAL OR CONSEQUENTIAL DAMAGES, FOR LOSS OF PROFITS OR CONFIDENTIAL OR OTHER INFORMATION, FOR BUSINESS INTERRUPTION, FOR PERSONAL INJURY, FOR LOSS OF PRIVACY, FOR FAILURE TO MEET ANY DUTY INCLUDING OF GOOD FAITH OR OF REASONABLE CARE, FOR NEGLIGENCE, AND FOR ANY OTHER PECUNIARY OR OTHER LOSS WHATSOEVER ARISING OUT OF OR IN ANY WAY RELATED TO THE USE OR INABILITY TO USE THE APP AND ANY LOSS OR DAMAGE ARISING OUT OF OR IN RELATION TO ACTS OF GOD OR ACT OF THIRD PARTY THAT IS BEYOND THE CONTROL OF HALLP.</p> 
                   <p className='text-md leading-relaxed my-4'>HALLP SHALL NOT BE LIABLE FOR ANY DIRECT OR INDIRECT DAMAGE FOR ANY DATA PROVIDED BY THE USER OR ANY VIOLATION OF THIRD PARTY RIGHTS OF WHATSOEVER NATURE, ARISING OUT OF OR IN ANY MANNER RELATED TO THE USE OR INABILITY TO USE THE APP.</p> 
                </div>

                <div className='mt-8'>
                  <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Law, Jurisdiction and Arbitration</h4>
                  <p className='text-md leading-relaxed my-4'>The construction of these Terms shall be determined in accordance with laws and rules in force in India and shall be subject to the exclusive jurisdiction of the Courts in MUMBAI and no other court.</p> 
                   <p className='text-md leading-relaxed my-4'>In case of any grievance, disagreement or dispute, you shall send an email to FIAKS elaborating the grievance, disagreement or dispute. HALLP or FIAKS shall endeavour to resolve and settle the grievance, disagreement or dispute within 30 days from the receipt of the email. However, in case the parties fail to resolve and settle the matter within 30 days, then all disputes arising under or in relation to the Terms shall be referred to arbitration before a sole arbitrator. If the Parties fail to agree on the appointment of a sole arbitrator within the time stipulated under the [Indian] Arbitration and Conciliation Act, 1996 (the “Act”) the Parties shall approach the competent Court under the Act for appointment of the Sole Arbitrator. The Arbitration proceedings shall be carried out in accordance with the Act and the Rules framed there under and the place of Arbitration shall be Mumbai. The arbitration proceedings shall be conducted in English. The arbitrator’s award shall be final and undisputable by both Parties.</p> 
                </div>

                <div className='mt-8'>
                  <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Severability</h4>
                  <p className='text-md leading-relaxed my-4'>If any provision in the Terms become invalid or illegal or adjudged unenforceable, the provision shall be deemed to have been severed from the Terms and the remaining provisions of the Terms shall not, so far as possible, be affected by the severance.</p> 
                </div>

                 <div className='mt-8'>
                  <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Waiver</h4>
                  <p className='text-md leading-relaxed my-4'>The failure of HALLP to enforce at any time any of the provisions of this Terms shall not be construed to be a waiver of its right, power, privilege or remedy or as a waiver of any preceding or succeeding breach on Your part to this Terms nor shall any single or partial exercise of any right power privilege or remedy preclude any other or further exercise of such or any other right power privilege or remedy provided in this Terms all of which are several and cumulative and are not exclusive of each other or of any other rights or remedies otherwise available to HALLP at law or in equity.</p> 
                </div>

                <div className='mt-8'>
                  <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Force Majeure and Act of Third Parties</h4>
                  <p className='text-md leading-relaxed my-4'>The performance of any part of this Terms by HALLP shall be excused to the extent that such performance is hindered, delayed, or made impractical by flood, fire, war, or riot or any other cause beyond the reasonable control of HALLP or act of any third party beyond the control of HALLP including but not limited to hacking, data theft, unauthorised access to Your account, impersonation, fraud, misrepresentation and so on.</p> 
                </div>

                <div className='mt-8'>
                  <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Modification</h4>
                  <p className='text-md leading-relaxed my-4'>HALLP can update, modify, suspend, discontinue or change any part of these Terms from time to time. The revised Terms will be posted as notification here on this link www.fiaks.com. Users are encouraged to periodically check this page to stay informed about changes to the Terms. The revised Terms will be effective from the date stated on the revised Terms. You acknowledge and agree that it is Your responsibility to review these Terms periodically and become aware of modifications. If You disagree to any of the changes to the Terms, please refrain from accessing or using the App. Your continued access or use or availing of the App following the posting of revised Terms will indicate Your acceptance and acknowledgement of the changes and You will be bound by it.</p> 
                </div>

                <div className='mt-8'>
                  <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Survival</h4>
                  <p className='text-md leading-relaxed my-4'>These Terms, and any modifications, alterations or amendments to, shall remain in full force and effect while You use the App and the provisions related to Intellectual Property, Warranties and Indemnity shall continue to apply even after termination of this Agreement.</p> 
                </div>

                <div className='mt-8'>
                  <h4 className='text-3xl md:text-3xl lg:text-3xl font-bold text-slate-900 mb-4'>Notices and Take Down Policy</h4>
                  <p className='text-md leading-relaxed my-4'>FIAKS places high emphasis on respecting and protecting right holders’ intellectual property against infringement and hence takes due care to make the contents available in good faith. Notice is specifically given that HALLP is not responsible for the Contents or Advertisements accessible through the App. The App is merely acting as an intermediary and uses an intermediary and/or enabling technology that obtains Contents from various sources and allows Users to explore, search, access, view and share the Contents with third parties based on these categories. HALLP clarifies that the intellectual property in the Contents of third parties belongs to those third parties. However, HALLP reserves right in its sole discretion to remove and/or disable access to Contents claimed to be a copyright infringement and/or terminate the accounts of the Users of the App who may infringe upon the copyrights or other intellectual property rights of HALLP and/or others or may be in violation of the terms or the privacy policy, the user agreement and/or all other applicable laws and regulations that governs users access and use of the app.</p> 
                  <p className='text-md leading-relaxed my-4'>If any contents on the App concern you or for which you have not given permission, or is in violation of copyright law and not subject to any limitation or exceptions, contact us in writing. All notices to HALLP hereunder shall be in writing and shall be duly given if delivered personally or sent by registered mail, return receipt requested, or facsimile to the following Address or emailed to the following email id: <a href='mailto:contactus@fiaks.com'>contactus@fiaks.com</a></p>  
                  <div>
                      <p>9, Arun Vila, Subhash Road, Vileparle east , Mumbai-400057</p>
                      <p><a href='mailto:contactus@fiaks.com'>contactus@fiaks.com</a></p>
                  </div>

                  <p className='text-md leading-relaxed my-4'>This document is an electronic record in terms of Information Technology Act, 2000 and rules there under as applicable and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.</p> 
                  <p className='text-md leading-relaxed my-4'>This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries guidelines) Rules, 2011 that require publishing the rules and regulations, Privacy Policy and Terms for access or usage of the App.</p> 
                  <p className='text-md leading-relaxed my-4'>I have read and understood the Terms and Conditions and I hereby, out of my free will, unconditionally accept to be bound by the same.</p> 
                </div> 

              </div>
            </div>
          </div>
        </div>
      </section>






      {/* CTA Section */}
      <section className="py-16 bg-[#07549c]">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl text-center">
          <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-white mb-4">
            Want to Host an Event?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Partner with Fintech Forum to organize industry-leading events and reach thousands of BFSI professionals.
          </p>
          <Link to="/contact">
            <button className="px-8 py-4 bg-white text-[#07549c] rounded-lg font-semibold hover:bg-slate-100 transition-colors">
              Contact Us
            </button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
