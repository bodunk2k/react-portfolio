import React from 'react';
import { Link } from 'react-router-dom';

function Directory(props) {
    return (
        <div className="container">
            <div className="row">
                <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
                <div className="w-100">
                    <h2 className="mb-5">Experience</h2>
                        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
                            <div className="resume-content">
                                <h3 className="mb-0">
                                    <a  data-target="#amdocs">
                                    Senior Subject Matter Expert
                                    </a>
                                </h3>
                                <div  id="amdocs" >
                                    <div className="subheading mb-3">Amdocs
                                    </div>
                                    <p>Support programmer for telecommunications software package.
                                    Provide support in accounts receivable.
                                    Designed and helped code/install collections process.
                                    Oncall support for Bill confirmation and daily/monthly reporting system. Support install and running of
                                    collections.
                                    Tools used include Micro Focus Cobol, Unix scripting and C data
                                    Datalayers for access to Oracle database.
                                    </p>
                                </div>
                                
                            
                                <div className="resume-date text-md-right">
                                    <span className="text-primary">Dec 12,2000 - Aug 16,2018</span>
                                </div>
                            </div>
                            <div className="resume-content">
                                <h3 className="mb-0">
                                    <a  data-target="#bridge">Contract Programmer</a>
                                </h3>
                                    <div className="subheading mb-3">Bridge Technologies</div>
                                        <p>Provided Testing Support for Client.
                                            Completed Power Builder Boot Camp April 15, 2000.
                                            Evaluated in-house server tools.  Research and Development.
                                            Developed Home Page and Client Demo Internet site page.
                                            Jan-Mar 2000 - Tester and QA for client company using PB.
                                            Mar-Apr 2000 - BootCamper - trained in PB and SQL-Sybase
                                            Apr-June 2000 - WebMaster - Updating website using HTML and
                                            Java Script.
                                            June 2000 - present - R&D for new tool procurement.
                                            Position terminated due to lack of contract.
                                        </p>
                                
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">Jan 17,2000 - Oct 31,2000</span>
                                    </div>
                                </div>
                                <div className="resume-content">
                                    <h3 className="mb-0">
                                    <a  data-target="#fdr">Senior Programmer Analyst </a>
                                    </h3>
                                        <div className="subheading mb-3">First Data Resources
                                        </div>
                                            <p>Provided batch support of mainframe credit card processing.
                                                Developed designs and assisted in installation of release.
                                                On call duties included support calls at all times.
                                                Assisted with the training of junior team members.
                                                Participated in the planning and work load allocation of the
                                                team.
                                                Worked in Cobol using JCL, VSAM, VIA-SOFT, WSF2, and CA-7.
                                                June 1993 - June 1995 Software Development Analyst (Omaha NE)
                                                June 1995 - Dec 1996  Senior Software Development Analyst
                                                June 1997 (Transfered to Tulsa, OK)
                                                June 1997 - July 1998 System Engineer.
                                            </p>
                                    <div className="resume-date text-md-right">
                                        <span className="text-primary">June 1,1993 - Nov 3,1999</span>
                                    </div>
                                </div>
                           
                                <div className="resume-content">
                                    <h3 className="mb-0">
                                    <a data-target="#mutual">Programmer Analyst</a></h3>
                                        <div className="subheading mb-3">Mutual of Omaha
                                        </div>
                                                <p>Provided batch support of mainframe insurance processing.
                                                On call duties included support calls at all times.
                                                Worked in Cobol using JCL, VSAM, XPEDITER, and WSF2.
                                                Attended several insurance industry training courses including
                                                HIAA individual A certification.
                                                Jan 1991 - Dec 1992 Programmer I
                                                Dec 1992 - June 1993 Programmer II
                                                </p>
                                        <div className="resume-date text-md-right">
                                                <span className="text-primary">Jan 7,1991 - May 31,1993 </span>
                                        </div> 
                                </div>
                            </div>
                        </div>
                </section>
            </div> 
        </div>
    );
}


export default Directory;