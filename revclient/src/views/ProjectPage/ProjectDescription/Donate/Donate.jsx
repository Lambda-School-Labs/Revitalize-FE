import React from 'react'
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { formatMoney, donationCount, addUpDonations } from "../../../../helpers/formatMoney";


const Donate = ({raised, budget, projectData, setModal, match}) => {
    const percent = Number(raised) / Number(budget) * 100
    const Box = styled.div`
        height: 12px;
        border-radius: 50px;
        filter: brightness(${percent < 50 ?percent / 100 * 3 : percent >= 100 ? 4 : percent / 100 * 2});
        transition: 1s ease;
        @keyframes pulse {
            0% {
                width: 0;
                background: #0B096F;
            }
            100% {
                width: ${raised > budget ? 100 : percent}%;
            }
        };

        width: ${raised > budget ? 100 : percent}%;
        
        @keyframes progress-bar-stripes {
            from  { background-position: 40px 0; }
            to    { background-position: 0 0; }
        };

        ${percent < 100 ? `background-image: -webkit-linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent);
        background-image: -o-linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent);
        background-image: linear-gradient(45deg, rgba(255,255,255,.15) 25%, transparent 25%, transparent 50%, rgba(255,255,255,.15) 50%, rgba(255,255,255,.15) 75%, transparent 75%, transparent);
        background-size: 40px 40px;`
        :
        `background-size: 40px 40px;`}

        animation: ${percent >= 100 ? '1s ease-out pulse;' : '1s ease-out pulse, progress-bar-stripes 1s linear infinite;'};
    `

    const totalNumberOfDonations = projectData.project.donations ? donationCount(projectData.project.donations.length) : 0;

    return (
        <div className='donateContainer'>
            <div className='donateInnerDiv'>
                <p className='donationMoney'>
                    <span className='large'>${formatMoney(addUpDonations(raised))}</span>
                    <span className='small'>raised out of ${formatMoney(budget)}</span>
                </p>
                <div className='progress-bar'>
                    <Box />
                </div>
                <p className='donatorCount'>{totalNumberOfDonations}</p>
                <p className='donorText'>{`${totalNumberOfDonations === 1 ? "Donor" : "Donors"}`}</p>
                <div className='donationButtons'>
                    <Link to={`/project/donate/${match.params.id}`}>
                        <button className="purple">Donate now</button>
                    </Link>
                    <button className='white' onClick={() => setModal(true)}>Share</button>
                </div>
                <div className="mid-line-container">
					<div className="mid-line"></div>
					<p>or</p>
					<div className="mid-line"></div>
				</div>
                <div className='apply-button'>
                    <button >Apply to Project</button>
                </div>
                <p className='lastText'>Partner with growing donors who are eager to see the transformation and economical growth of Detroit.</p>
            </div>

        </div>
    )
}

export default withRouter(Donate);
