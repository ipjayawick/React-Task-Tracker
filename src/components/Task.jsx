import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { Typography } from '@mui/material';
const Task = ({ task,onDelete,onToggle }) => {
    return (
        <div>
            <Typography fontWeight='bold' maxWidth="sm" margin="auto" marginBottom="0px" display="flex" alignItems="center" justifyContent="space-between" onDoubleClick={()=>onToggle(task.id)} color={task.reminder ? 'red':'green'}>
                {task.text}
                <IconButton color="error" onClick={()=>onDelete(task.id)}> 
                    <DeleteIcon />
                </IconButton>
            </Typography>
            <Typography marginBottom="10px">
                {task.text}
            </Typography>
        </div>
    )
}

export default Task