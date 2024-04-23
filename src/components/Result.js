import React from 'react'

const Result = ({ data }) => {

    const { totalCases, totalDeaths, totalRecovered } = data;
    return (
        <>
            <div className="result">
                <span className='result-heading' id='cases'>Total Cases</span>
                <span className='result-number'>{totalCases?.toFixed(1)} M</span>

            </div>
            <div className="result">
                <span className='result-heading' id='recovered'>Recoveries</span>
                <span className='result-number'>{totalRecovered?.toFixed(1)} M</span>
            </div>
            <div className="result">
                <span className='result-heading' id='deaths'>Deaths</span>
                <span className='result-number'>{totalDeaths?.toFixed(1)} M</span>
            </div>

        </>
    )
}
export default Result