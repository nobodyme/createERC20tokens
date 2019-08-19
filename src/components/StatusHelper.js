import React from 'react';
import '../styles/components/StatusHelper.css';

function StatusHelper({ processedStage, elementStage }) {
	if (processedStage === elementStage - 1) {
		return <div className="statusHelper status__1">Processing...</div>;
	} else if (processedStage === elementStage || processedStage > elementStage) {
		return <div className="statusHelper status__2">Success</div>;
	} else {
		return <div className="statusHelper status__3">Pending...</div>;
	}
}

export default StatusHelper;
