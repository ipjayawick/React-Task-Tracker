import { TextField, Button, Container, Typography, InputLabel, FormControlLabel, Checkbox } from '@mui/material';
import { useState } from 'react';
const AddTask = ({onSubmit}) => {
    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!text){
            alert('Please add a task')
            return
        }
        onSubmit({text,day,reminder})

        setText('')
        setDay('')
        setReminder(false)
    };

    return (
        <Container maxWidth="sm">
            <form onSubmit={handleSubmit}>
                <div style={{ marginTop: "15px" }}>
                    <Typography>Task</Typography>
                    <TextField
                        margin='dense'
                        label="Input Task"
                        variant="outlined"
                        fullWidth
                        value={text}
                        onChange={(event) => {
                            setText(event.target.value);
                        }}
                    />
                </div>
                <div style={{ marginBottom: "10px", marginTop: "10px" }}>
                    <Typography >Day and Time</Typography>
                    <TextField
                        margin='dense'
                        label="Input Date & Time"
                        variant="outlined"
                        fullWidth
                        value={day}
                        onChange={(event) => {
                            setDay(event.target.value);
                        }}
                    />
                </div>
                <FormControlLabel
                    style={{ marginLeft: "auto" }}
                    label="Set Reminder"
                    labelPlacement="start"
                    control={
                        <Checkbox
                            name="setReminder"
                            color="primary"
                            checked={reminder}
                            onChange={(e) => {
                                setReminder(e.currentTarget.checked);
                              }}
                        />
                    }
                />
                <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginBottom: "25px", marginTop: "10px" }}>
                    Submit
                </Button>
            </form>
        </Container>
    )
}

export default AddTask