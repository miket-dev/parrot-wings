import { connect } from "react-redux";
import TemplatePanel from "../../components/template/TemplatePanel";
import templateActions from "../../actions/templateActions";

const getTemplates = dispatch => userId =>
  dispatch(
    templateActions.listRequest({
      userId
    })
  );

const TemplatePanelContainer = connect(
  state => ({
    userId: state.user.get("userId"),
    templates: state.template.get("templates")
  }),
  dispatch => ({
    getTemplates: getTemplates(dispatch)
  })
)(TemplatePanel);

export default TemplatePanelContainer;
