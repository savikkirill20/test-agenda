import React, { useEffect, useState } from "react";
import { Button, makeStyles } from "@material-ui/core";
import { CSVLink } from "react-csv";
import Papa from "papaparse";
import { createAgenda, getAllAgendas, removeAgenda, updateAgenda } from "../../services/service";
import AgendaFormDialog from "./form";
import { AgendaTable } from "./table";
import styles from './style';

const useStyles = makeStyles(styles);

const AgendaList = () => {
  const classes = useStyles();

  const [rows, setRows] = useState([]);
  const [isAgendaListManipulated, setAgendaListManipulated] = useState(false);
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [selected, setSelected] = useState({ id: '', title: '', description: '', status: '', created: new Date().toISOString().slice(0, 10) });

  const importInput = React.useRef();

  useEffect(() => {
    getAllAgendas().then(res => setRows(res.data));
  }, []);

  useEffect(() => {
    if (isAgendaListManipulated) {
      getAllAgendas().then(res => setRows(res.data));
    }
    setAgendaListManipulated(false);
  }, [isAgendaListManipulated]);

  const add = (data) => {
    createAgenda(data)
      .then(() => {
        setAgendaListManipulated(true);
        closeDialog();
      })
      .catch(() => alert("Create failed"));
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSelected({ id: '', title: '', description: '', status: '', created: new Date().toISOString().slice(0, 10) });
  };

  const edit = (data) => {
    data.id = selected.id;
    updateAgenda(data.id, data)
      .then(() => {
        setAgendaListManipulated(true);
        closeDialog();
      })
      .catch(() => alert("Update failed"));
  };

  const remove = (row) => {
    removeAgenda(row.id)
      .then(() => setAgendaListManipulated(true))
      .catch(() => alert("Delete failed"));
  };

  const openCreateDialog = () => {
    openAgendaFormDialog({ id: '', title: '', description: '', status: '', created: new Date().toISOString().slice(0, 10) });
  };

  const openEditDialog = (row) => {
    openAgendaFormDialog(row);
  };

  const openAgendaFormDialog = (row) => {
    setDialogOpen(true);
    setSelected(row);
  };

  const handleSubmit = (agenda) => {
    if (selected.id) {
      edit(agenda);
    } else {
      add(agenda);
    }
  };

  const importFile = (e) => {
    Papa.parse(
      e.target.files[0], {
        complete: (result) => {
          const data = result.data;
          for(let i = 1; i < data.length; i++) {
            const row = data[i].reduce((total, val, index) => ({...total, [data[0][index]]: val}), {})
            delete row.id;
            add(row);
          }
        }
      }
    );
  }

  return (
    <div className={classes.list}>
      <Button variant="outlined" color="primary" onClick={openCreateDialog}>+</Button>
      <input ref={importInput} type="file" accept=".csv,.xlsx,.xls" onChange={(e) => importFile(e)} style={{ display: 'none' }} onClick={(e) => {e.target.value = null}} />
      <Button variant="outlined" color="primary" onClick={() => importInput.current.click()}>Import</Button>
      <CSVLink
        data={rows}
        filename={"download.csv"}
        target="_blank"
      >
        Export
      </CSVLink>
      <AgendaFormDialog open={isDialogOpen} handleClose={closeDialog} handleSubmit={handleSubmit} selected={selected} />
      <AgendaTable rows={rows} onDelete={remove} openEditModal={openEditDialog} />
    </div>
  );
};

export default AgendaList;
