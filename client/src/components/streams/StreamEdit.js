import React from "react";
import { connect } from "react-redux";
import { editStream } from "../../actions";

const StreamEdit = () => {
	return <div>StreamEdit</div>;
};

export default connect(
	null,
	editStream
)(StreamEdit);
