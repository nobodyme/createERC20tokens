import React from 'react';
import '../styles/components/StatusHelper.css';

function StatusHelper({ currentStage, elementStage }) {
	if (currentStage === elementStage) {
		return <div className="statusHelper status__1">Processing...</div>;
	} else if (currentStage > elementStage) {
		return <div className="statusHelper status__2">Success</div>;
	} else {
		return <div className="statusHelper status__3">Pending...</div>;
	}
}

export default StatusHelper;
