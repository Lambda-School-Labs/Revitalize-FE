import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { FaComments, FaFileInvoice, FaAngleRight, FaAngleDown, FaAngleUp, FaBan, FaPlus, FaLink } from 'react-icons/fa';
import { GoKebabVertical } from 'react-icons/go';
import plusCircle from '../../../../assets/dashboard/Add-tasks.png';

import AddTrade from './AddTrade/AddTrade';
import AddTask from '../Main/AddTask/AddTask';
import MemberIcons from './MemberIcons/MemberIcons';

// Helper functions
import { calculateDueDate } from '../../../../helpers/helpers';

// GQL
import { useMutation } from '@apollo/react-hooks';
import { DELETE_PROJECT } from '../../../../graphql/mutations';

const Header = props => {
	const { city, state, name, description, startDate, duration, id } = props.project;
	const { project, setProject, selectedProject, type, possibleDashNavTabs } = props;
	const [settingsToggle, setSettingsToggle] = useState({ settingsDropdown: false });
	const [addTradeModal, setAddTradeModal] = useState({ show: false });
	const [addTaskModal, setAddTaskModal] = useState({ show: false });
	const [deleteProject] = useMutation(DELETE_PROJECT);

	const submitDeleteProject = async () => {
		const deletedProject = await deleteProject({ variables: { id: id } });
		console.log(`${deletedProject} has been deleted.`);
		props.history.push('/dashboard');
	};

	if (addTradeModal.show === true) {
		return <AddTrade setAddTradeModal={setAddTradeModal} addTradeModal={addTradeModal} projectId={id} />;
	}

	if (addTaskModal.show === true) {
		return <AddTask setAddTaskModal={setAddTaskModal} addTaskModal={addTaskModal} projectId={project.id} />;
	}

	return (
		<>
			<div className="dashboard-header section">
				<div className="header-top">
					<div className="header-status">
						{type === possibleDashNavTabs[0] ? ( // PROJECT ADMIN
							<div className="project-status">{possibleDashNavTabs[0]}</div>
						) : null}
						{// IF a Project has tradesMaster, student, and trades, it is considered "LIVE"
						project.tradeMasters.length > 0 && project.students.length > 0 && project.trades.length > 0 ? (
							<div className="project-status started">In Progress!</div>
						) : (
							<div className="project-status not-started">Not Started</div>
						)}
					</div>
					<div className="header-top-right">
						<div className="add-tasks">
							<div className="create-task-button">Add Task</div>
							<div className="button-container" onClick={() => setAddTaskModal({ show: true })}>
								<img src={plusCircle} alt="plus circle" />
							</div>
						</div>
						<div className="project-settings">
							<GoKebabVertical
								onClick={() =>
									setSettingsToggle({ settingsDropdown: !settingsToggle.settingsDropdown })
								}
							/>
							{settingsToggle.settingsDropdown ? (
								<div className="project-settings-dropdown">
									<div
										className="project-settings-dropdown-option add-trade"
										onClick={() => setAddTradeModal({ show: true })}
									>
										<FaPlus />
										&nbsp; Add Project Trade
									</div>
									<div
										className="project-settings-dropdown-option delete"
										onClick={submitDeleteProject}
									>
										<FaBan />
										&nbsp; Delete Project
									</div>
								</div>
							) : null}
						</div>
					</div>
				</div>

				<div className="header-middle">
					<div className="header-middle-geo">
						{city}, {state}
					</div>
					<div className="header-middle-title">
						<Link to={`/project/${project.slug}`}>
							{name} &nbsp;
							<FaLink />
						</Link>
					</div>
					<p className="header-middle-description">{description}</p>
				</div>

				<div className="header-bottom">
					<div className="bottom-left">
						<p className="due-date">Due Date: {calculateDueDate(startDate, duration)}</p>
					</div>

					<div className="bottom-icons">
						{!selectedProject.buttonToggle ? (
							<p
								className="bottom-button manage"
								onClick={() =>
									setProject({
										project: project,
										showMore: !selectedProject.showMore,
										id: selectedProject.id ? null : id,
										buttonToggle: !selectedProject.buttonToggle,
									})
								}
							>
								Manage Project
							</p>
						) : (
							<p
								className="bottom-button close"
								onClick={() =>
									setProject({
										project: null,
										showMore: !selectedProject.showMore,
										id: selectedProject.id ? null : id,
										buttonToggle: !selectedProject.buttonToggle,
									})
								}
							>
								Close
							</p>
						)}
						{/* <Link to={`/project/${project.slug}`} className="bottom-button">
							View Project
						</Link> */}
					</div>

					<div className="team-members">
						<div className="member-icons">
							<p>Team</p>

							{type === possibleDashNavTabs[0] ||
							type === possibleDashNavTabs[1] ||
							type === possibleDashNavTabs[2] ? (
								<MemberIcons
									arrayOfUsers={project.students} // Should work for student view, but not tested yet
									// possibleDashNavTabs={possibleDashNavTabs}
									// type={type}
								/>
							) : (
								<>
									<img
										src="https://res.cloudinary.com/revitalize/image/upload/v1569861720/user%20dashboard/OliverCut_jsjnmx.png"
										alt="team member"
										className="dashboard-picture-icons"
									/>
									<img
										src="https://res.cloudinary.com/revitalize/image/upload/v1569861717/user%20dashboard/Greg_zvzyrc.png"
										alt="team member 2"
										className="dashboard-picture-icons"
									/>
									<div className="count">{`${project.students ? project.students.length : '?'}`}</div>
								</>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default withRouter(Header);
