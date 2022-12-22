import React, { useState } from 'react';
import { switchesArr } from '../../utils/switches';
import { useDispatch, useSelector } from 'react-redux';
import { setSwitchId } from '../../redux/slices/filterSlice';
import SwitchInfo from './SwitchInfo';

const FilterSwitch = () => {
  const dispatch = useDispatch();
  const { id } = useSelector((state) => state.filter.switches);
  const [info, setInfo] = useState('close');
  const switchFilter = switchesArr.map((obj) => {
    const switchClass = ' switch_change';
    const switchFilterClass = id == obj.id ? ' switch_filter select' : ' switch_filter';
    return (
      <div
        onMouseOver={() => setInfo(obj.id)}
        onMouseOut={() => setInfo('close')}
        className={obj.class + switchClass + switchFilterClass}
        key={obj.id}
        onClick={() => dispatch(setSwitchId(obj.id))}>
        {obj.title}
        <SwitchInfo switchName={obj.class} switchId={obj.id} info={info} />
      </div>
    );
  });
  return <>{switchFilter}</>;
};

export default FilterSwitch;
