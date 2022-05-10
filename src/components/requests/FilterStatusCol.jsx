import React, {useState} from 'react';
import {Checkbox} from "antd";

const FilterStatusCol = ({items}) => {
    const CheckboxGroup = Checkbox.Group;
    let defaultCheckedList = items.items;
    const [checkedList, setCheckedList] = useState([false, false, false, false, false, false]);
    const [indeterminate, setIndeterminate] = useState(false);
    const [checkAll, setCheckAll] = useState(false);

    const onChange = list => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < defaultCheckedList.length);
        setCheckAll(list.length === defaultCheckedList.length);
    };

    const onCheckAllChange = e => {
        setCheckedList(e.target.checked ? defaultCheckedList : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <div className="form-field__col4">
            <div className='form-field__col4-item form-field__col4-item--title'>
                <Checkbox indeterminate={indeterminate} checked={checkAll} onChange={onCheckAllChange}>{items.title}</Checkbox>
            </div>
            <CheckboxGroup value={checkedList} onChange={onChange}>
                {defaultCheckedList.map((item, index) =>
                    <div className='form-field__col4-item' key={index}>
                        <Checkbox
                            checked={checkedList[index]}
                            value={item}
                            onChange={(e) => setCheckedList(!checkedList[index])}>
                                {item}
                        </Checkbox>
                    </div>

                )}
            </CheckboxGroup>
        </div>
    );
};

export default FilterStatusCol;