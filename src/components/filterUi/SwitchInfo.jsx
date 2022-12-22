import React from 'react';

const SwitchInfo = ({ switchName, switchId, info }) => {
  return info == switchId ? (
    <div style={{ whiteSpace: 'nowrap' }} className="switch_info">
      {switchName.replaceAll('_', ' ')}
    </div>
  ) : null;
};

export default SwitchInfo;
