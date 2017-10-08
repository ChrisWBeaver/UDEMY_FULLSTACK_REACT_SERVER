import _ from 'lodash';
import React, {Component} from 'react';
import {reduxForm, Field} from 'redux-form';
import SurveyField from './SurveyField';

const FIELDS = [
  {label : 'Survey Title', name : 'title'},
  {label : 'Subject Line', name : 'subject'},
  {label : 'Email Body', name: 'body'},
  {label : 'Receipient List', name: 'emails'},
]
class SurveyForm extends Component {

  renderFields(){
    return _.map(FIELDS, field => {  
     return <Field key={field.name}
        component={SurveyField}
        type="text"
        label={field.label} 
        name={field.name} 
      />
    });

  }
  render() {
    return( 
      <div>
        <form onSubmit={this.props.handleSubmit(values => console.log(values))}>       
          {this.renderFields()}
          <button type="submit" className="teal btn-flat right white-text" >
            Next <i className="material-icons right">done</i>
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm);