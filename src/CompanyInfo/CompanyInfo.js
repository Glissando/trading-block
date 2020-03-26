import React from 'react';

export default function CompanyInfo(props) {

    return(
        <div className="Section">
            <h2>CEO: { props.company.CEO }</h2>
            <h2>Address: { props.company.address }</h2>
            <h2>City: { props.company.city }</h2>
            <h2>Country: { props.company.country }</h2>
            <h2>Name: { props.company.securityName }</h2>
            <h2>Employee Count: { props.company.employees }</h2>
            <h2>Exchange: { props.company.exchange }</h2>
            <h2>Industry: { props.company.industry }</h2>
            <h2>Website: { props.company.website }</h2>
            <h2>State: { props.company.state }</h2>
            <h2>Sector: { props.company.sector }</h2>
            <h2>Issue Type: { props.company.issueType }</h2>
            <h2>Description: { props.company.description }</h2>
        </div>
    );
}