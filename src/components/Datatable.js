import React, { useEffect, useState } from 'react';
import "../App.css";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator } from 'primereact/paginator';
import { InputText } from 'primereact/inputtext';        


function Datatable(props) {
    const name = props.name ?? 'state';

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(10);
    const [currentPage, setCurrentPage ] = useState(1);
    const [totalRecords, setTotalRecords] = useState(120);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
        var cP = Math.floor(event.first / event.rows) + 1;
        setCurrentPage(cP);
    };

    var url = "http://172.16.251.66:1216/address/api/v1/" + name + "?page=" + currentPage + "&per_page=" + rows;

    const [data, setData] = useState([])
    const [filterData, setFilterData ] = useState([]);

    const fetchStateInfo = () => {
        return fetch(url)
        .then((res) => res.json())
        .then((d) => {
            setData(d.data);
            setTotalRecords(d.total);
        })
        .catch(error => console.log(error))
    }

    useEffect(() => {
        fetchStateInfo();
    })

    const [value, setValue ] = useState('');

    const searchData = (e) => {
        setValue(e.target.value);
        setFilterData(
            data.filter(item => {
                if(item.name.toLowerCase().includes(value.toLowerCase()) || item.mm_name.includes(value)) { 
                    return item;
                }
            })
        )
    }

    const input = 
            <span className="p-input-icon-left">
                <i className="pi pi-search" />
                <InputText value={value} onChange={(e) => searchData(e)} placeholder="Search by name" />
            </span>;
            
    // fetchStateInfo();
    return (
        <div>
            <DataTable value={value ? filterData : data} header={input} showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="id" sortable header="ID"></Column>
                <Column field="name" sortable header="Name"></Column>
                <Column field="mm_name" sortable header="MM_Name"></Column>
                <Column field="code" sortable header="Code"></Column>
            </DataTable> 
            <Paginator first={first} rows={rows} totalRecords={totalRecords} rowsPerPageOptions={[10, 20, 30, 50, 100]} onPageChange={onPageChange} />
        </div>
    )
}

export default Datatable;