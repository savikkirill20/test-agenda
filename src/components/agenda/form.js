import React from 'react';
import { useForm } from "react-hook-form";
import { makeStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import styles from './style';

const useStyles = makeStyles(styles);

const AgendaFormDialog = (props) => {
  const classes = useStyles();

  const { register, handleSubmit, reset } = useForm();

  const status = [
    {
      value: 'Todo',
      label: 'Todo',
    },
    {
      value: 'In Progress',
      label: 'In Progress',
    },
    {
      value: 'Complete',
      label: 'Complete',
    }
  ];

  React.useEffect(() => {
    reset(props.selected);
  }, [ props.selected ]);

  const onSubmit = data => {
    props.handleSubmit(data);
  };

  return (
    <Dialog fullWidth={true} open={props.open} onClose={props.handleClose}>
      <DialogTitle>Add/Edit agenda </DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            {...register("title")}
            required
            name="title"
            margin="dense"
            id="title"
            label="Title"
            type="text"
            fullWidth
            defaultValue={props.selected.title}
          />
          <TextField
            {...register("description")}
            required
            name="description"
            margin="dense"
            id="description"
            label="Description"
            type="text"
            fullWidth
            defaultValue={props.selected.description}
          />
          <TextField
            {...register("status")}
            required
            name="status"
            margin="dense"
            id="status"
            label="Status"
            select
            fullWidth
            defaultValue={props.selected.status ? props.selected.status : ""}
          >
            {status.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            {...register("created")}
            name="created"
            margin="dense"
            id="created"
            label="Created At"
            type="date"
            fullWidth
            disabled
            defaultValue={props.selected.created ? props.selected.created : new Date().toISOString().slice(0, 10)}
          />
          <ButtonGroup className={classes.btn_group}>
            <Button onClick={props.handleClose} color="primary">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </ButtonGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AgendaFormDialog;
