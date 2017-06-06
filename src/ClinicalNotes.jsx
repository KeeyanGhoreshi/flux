// React imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// Material UI component imports
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
// Flexbox
import { Grid, Row, Col } from 'react-flexbox-grid';
// Application Components:
import MyEditor from './MyEditor';


// Styling
import './ClinicalNotes.css';

class ClinicalNotes extends Component {

  constructor(props) {
    super(props);

    this.handleHER2StatusChange = this.handleHER2StatusChange.bind(this);
    this.handleERStatusChange = this.handleERStatusChange.bind(this);
    this.handlePRStatusChange = this.handlePRStatusChange.bind(this);
    this.handleStructuredFieldEntered = this.handleStructuredFieldEntered.bind(this);
    this.handleStructuredFieldExited = this.handleStructuredFieldExited.bind(this);
    this.handleStagingTUpdate = this.handleStagingTUpdate.bind(this);
    this.handleStagingNUpdate = this.handleStagingNUpdate.bind(this);
    this.handleStagingMUpdate = this.handleStagingMUpdate.bind(this);
  }

  handleHER2StatusChange (newStatus) {
    this.props.onHER2StatusChange(newStatus);
  }

  handleERStatusChange (newStatus) {
    this.props.onERStatusChange(newStatus);
  }

  handlePRStatusChange (newStatus) {
    this.props.onPRStatusChange(newStatus);
  }

  handleStagingTUpdate (newVal) {
    this.props.onStagingTUpdate(newVal, this.props.stage);
  }

  handleStagingNUpdate (newVal) {
    this.props.onStagingNUpdate(newVal, this.props.stage);
  }

  handleStagingMUpdate (newVal) {
    this.props.onStagingMUpdate(newVal, this.props.stage);
  }

  handleStructuredFieldEntered (currentFocus) { 
    this.props.onStructuredFieldEntered("staging");
  }

  handleStructuredFieldExited (currentFocus) { 
    this.props.onStructuredFieldExited("staging");
  }

  render() {
    var message;
    if (this.props.itemToBeEntered !== '') {
      message = <p id="notes-message">The following information from the summary panel is inserted into the clinical notes: <span id="data">{this.props.itemToBeEntered}</span></p>
    } else {
      message = <p id="notes-message"></p>
    }
    return (
      <div id="clinical-notes">
        <Paper className={this.props.className}>
          <div id="note-description">
            <Row>
              <Col xs={5}>
                <h1 id="note-title">Name of Note</h1>
              </Col>
              <Col xs={2}>
                <p className="note-description-detail-name">Date</p>
                <p className="note-description-detail-value">20 May 2011</p>
              </Col>
              <Col xs={2}>
                <p className="note-description-detail-name">Source</p>
                <p className="note-description-detail-value">Context about note</p>
              </Col>
              <Col xs={3}>
                <p className="note-description-detail-name">Signed By</p>
                <p className="note-description-detail-value">Dr. Some One</p>
              </Col>
            </Row> 
          </div>

          <Row center="xs">
              <Col xs={11}>
                  <Divider />
              </Col>
          </Row>

          <MyEditor 
            tumorSize={this.props.tumorSize}
            nodeSize={this.props.nodeSize}
            metastasis={this.props.metastasis}

            onStructuredFieldEntered={this.handleStructuredFieldEntered}
            onStructuredFieldExited={this.handleStructuredFieldExited}

            onStagingTUpdate = {this.handleStagingTUpdate}
            onStagingNUpdate = {this.handleStagingNUpdate}
            onStagingMUpdate = {this.handleStagingMUpdate}

            data={{patient: {name: 'Debra Hernandez672', age: '51', gender: 'female'}}} />
          <div>
            {message}
          </div>
        </Paper>
      </div>
        
    );
  }
}

ClinicalNotes.propTypes = {
    HER2Status:               PropTypes.string,
    ERStatus:                 PropTypes.string,
    PRStatus:                 PropTypes.string,
    onStructuredFieldExited:  PropTypes.func.isRequired,
    onStructuredFieldEntered: PropTypes.func.isRequired,
    itemToBeEntered:          PropTypes.string,
    onStagingTUpdate:           PropTypes.func.isRequired,
    onStagingNUpdate:           PropTypes.func.isRequired,
    onStagingMUpdate:           PropTypes.func.isRequired
}

export default ClinicalNotes;
