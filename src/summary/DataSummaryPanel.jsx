import React, {Component} from 'react';
import PropTypes from 'prop-types';
import SummaryHeader from './SummaryHeader';
import ConditionSelection from './ConditionSelection';
import DataSummaryTable from './DataSummaryTable';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Tabs, {Tab} from 'material-ui/Tabs';
import Button from 'material-ui/Button';
import 'font-awesome/css/font-awesome.min.css';
import './DataSummaryPanel.css';

class DataSummaryPanel extends Component {
	constructor(props) {
		super(props);
	
        this.handleChange = this.handleChange.bind(this);
    
		// Set the initial state when the app is first constructed.
		this.state = {
			activeConditionIndex: 0,
            value: 0
		}
		
		this.changeConditionIndex = this.changeConditionIndex.bind(this);
	}

	changeConditionIndex(newIndex) {
		this.setState({activeConditionIndex: newIndex});
	}
	
    handleChange(event, value) {
        this.setState({ value });
    }
    render() {
        const { value } = this.state;
		const conditions = this.props.patient.getConditions();
		const activeCondition = conditions[this.state.activeConditionIndex];
		const codeSystem = activeCondition.specificType.coding.codeSystem;
		const code = activeCondition.specificType.coding.value;
		let diseaseSummaryMetadata = this.props.summaryMetadata[codeSystem + "/" + code];
		if (!diseaseSummaryMetadata) {
			console.log("Unsupported condition within summary (using default): " + codeSystem + "/" + code);
			diseaseSummaryMetadata = this.props.summaryMetadata["default"];
		}
/*
inkBarStyle={{background: 'steelblue'}}
                          tabItemContainerStyle={{background: 'white'}}*/
                          
                          //for Tabs className="tabs-container"
                          //for each Tab className="tab" 
        return (
            <div className="dashboard-panel">
                <Paper className="panel-content trio">
                    <SummaryHeader
                        photo={this.props.patient.getMostRecentPhoto()}
                        patientName={this.props.patient.getName()}
                        mrn={this.props.patient.getMRN()}
                        dateOfBirth={this.props.patient.getPersonOfRecord().dateOfBirth}
                        administrativeSex={this.props.patient.getPersonOfRecord().administrativeGender}
                        address={this.props.patient.getCurrentHomeAddress()}
                    />
					
                    <ConditionSelection
                        conditions={conditions}
						activeConditionIndex={this.state.activeConditionIndex}
						changeConditionIndex={this.changeConditionIndex}
                    />

                    <Tabs  value={value} onChange={this.handleChange}>
                        <Tab label="Problem Summary" value={0}/>
                        <Tab label="Clinical Notes"  value={1}/>
                    </Tabs>
                    {value === 0 && <TabContainer>
                            <div className="table-list" id="summary-list">
								{diseaseSummaryMetadata.sections.map((section, i) => {
									return (
										<div key={i}>
											<h2>{section.name}</h2>
											<DataSummaryTable 
												items={section.items} 
												itemsFunction={section.itemsFunction}
												patient={this.props.patient}
												currentConditionEntry={activeCondition}
												onItemClicked={this.props.onItemClicked}
												allowItemClick={this.props.allowItemClick}
											/>
										</div>
										);
									})}
                            </div>
                            </TabContainer>}
                    {value === 1 && <TabContainer>
                                                <div className="table-list" id="previous-notes">
                                <h2>Previous Clinical Notes</h2>
                                <table className="existing-notes">
                                    <tbody>
                                    {this.props.patient.getNotes().map((item, i) => {
                                        return (
                                            <tr className="existing-note-entry" key={i}>
                                                <td className="existing-note-date" width="15%">{item.date}</td>
                                                <td className="existing-note-metadata" width="55%">
                                                    <span id="existing-note-subject">{item.subject}</span> <br/>
                                                    <span>{item.hospital}</span> <br/>
                                                    <span>{item.clinician}</span>
                                                </td>
                                                <td className="existing-note-button" width="30%">
                                                    <Button raised
                                                        className="existing-note-btn"
                                                        key={i}
                                                    >View Note</Button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                        </TabContainer>}
                    
                </Paper>
            </div>

        );
    }
}

DataSummaryPanel.propTypes = {
    patient: PropTypes.object,
    summaryMetadata: PropTypes.object,
    allowItemClick: PropTypes.bool,
    onItemClicked: PropTypes.func
};

function TabContainer(props) {
  return (
    <div style={{ padding: 20 }}>
      {props.children}
    </div>
  );
}
export default DataSummaryPanel;
