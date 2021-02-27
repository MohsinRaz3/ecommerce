import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export function GroupedSelect() {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-native-select">Grouping</InputLabel>
        <Select native defaultValue="" id="grouped-native-select">
          <option aria-label="None" value="" />
          <optgroup label="Materials">
            <option value={1}>Cements</option>
            <option value={2}>Bricks</option>
          </optgroup>
          <optgroup label="Tiles">
            <option value={3}>Kitchen Tiles</option>
            <option value={4}>Bathroom Tiles</option>
          </optgroup>
        </Select>
      </FormControl>
     
    </div>
  );
}