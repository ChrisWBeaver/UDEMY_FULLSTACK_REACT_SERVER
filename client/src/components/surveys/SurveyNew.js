import React, {Component} from 'react';
import {reduxForm} from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';
class SurveyNew extends Component {
  
  /*constructor(props){
    super(props);
    this.state = {new: true}
  }*/
  //babel allows this (from create-react-app)
  state = { showFormReview: false };

  renderContent(){
    if (this.state.showFormReview === true){
      return <SurveyFormReview
      onCancel={() => this.setState({showFormReview:false})}></SurveyFormReview>;
    }
    return <SurveyForm 
               onSurveySubmit={() => this.setState({ showFormReview: true })}>
            </SurveyForm>;
  }
  render() {
    return( 
      <div>
       {this.renderContent()}
      </div>
    );
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);