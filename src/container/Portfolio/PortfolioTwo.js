import React from 'react';
import SectionTitle from '../../components/SectionTitles/SectionTitle';
import useMasonry from "../../hooks/use-masonry";
import WorkFilter from "../../components/Work/WorkFilter";
import WorkItem from "../../components/Work/WorkItem";
import workData from '../../data/work/workDetails.json';
import {slugify} from "../../utils";

const PortfolioTwo = () => {
    // Isotope Categories list JS

    const {categories} =  useMasonry(workData, ".mesonry-list", ".masonry-grid", ".messonry-button", ".messonry-button button")

    return (
        <div className="section section-padding-t90 ag-masonary-wrapper" data-bg-color="#f8faff">
            <div className="container-fluid px-0">
                <SectionTitle
                    title="Great even greater creative works"
                    subTitle="Get your company heading in the right direction with our digital
                    marketing strategist"
                />

                <WorkFilter classOption="messonry-button text-center mb-lg-13 mb-md-13 mb-6" categories={categories} data-aos="fade-up"/>

                <div className="row row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-0 mesonry-list">
                    <div className="resizer col"></div>
                    {workData && workData.map(portfolio => (
                        <div key={portfolio.id} className={`col masonry-grid ${portfolio.categories.map(cat => slugify(cat)).join(" ")}`}>
                            <WorkItem portfolio={portfolio}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PortfolioTwo;
