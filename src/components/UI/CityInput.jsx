import React, {useState} from 'react';
import { Select } from 'antd';
import API from "../../router/apiConfig";

const CityInput = () => {
    const { Option } = Select;
    const [searchQuery, setSearchQuery] = useState('');
    const [respData, setRespData] = useState([]);

    let timeout;
    let currentValue;

    function fetch(value, callback) {
        if (timeout) {
            clearTimeout(timeout);
            timeout = null;
        }
        currentValue = value;

        function getCity() {
            API.post('/city/findCityBySubstring?', { subString: value }).then(function (city) {
                setRespData(city.data.result);
                console.log(city.data.result);
            }).catch(function (error) {
                console.log(error.response);
            });
        }

        timeout = setTimeout(getCity, 300);
    }

    const options = respData.map(d => <Option key={d.id}>{d.title}</Option>);

    const handleSearch = (value) => {
        if (value) {
            fetch(value, data => setRespData( data ));
        } else {
            setRespData([]);
        }
    };

    return (
        <Select
            showSearch
            value={searchQuery}
            placeholder="Город"
            defaultActiveFirstOption={false}
            showArrow={false}
            filterOption={false}
            onSearch={handleSearch}
            onChange={value => setSearchQuery(value)}
            notFoundContent={null}
        >
            {options}
        </Select>
    );
};

export default CityInput;