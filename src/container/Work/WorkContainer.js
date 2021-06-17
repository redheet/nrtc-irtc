import React from 'react';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import WorkData from '../../data/work/workDetails.json';
import WorkItemTwo from '../../components/Work/WorkItemTwo.jsx';

const WorkContainer = () => {
    return (
        <div className="section section-padding-t90-b100">
            <div className="container">

                <SectionTitle
                    headingOption="title fz-32"
                    title="Crafting effective digital marketing, web development, <br> video content and communication design"
                />

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 mb-n6">

                    {WorkData && WorkData.map((single, key) => {
                            return(
                                <div key={key} className="col mb-6" data-aos="fade-up" data-aos-delay="300">
                                    <WorkItemTwo classOption="box-border" data={single} key={key} />
                                </div>
                            ); 
                    })}
                    
                </div>

            </div>
        </div>
    )
}

export default WorkContainer;
