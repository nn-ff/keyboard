import React, { FC } from 'react';

interface SwitchInfoProps {
  switchName: string;
  switchId: number;
  info: number;
}

const SwitchInfo: FC<SwitchInfoProps> = ({ switchName, switchId, info }) => {
  return info === switchId ? (
    <div style={{ whiteSpace: 'nowrap' }} className="switch_info">
      {switchName.replaceAll('_', ' ')}
    </div>
  ) : null;
};

export default SwitchInfo;
