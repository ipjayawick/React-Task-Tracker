import { Button, Typography, Container, Box } from '@mui/material';

const Header = ({setOnAdd,showAdd}) => {
    return (
        <>
            <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                maxWidth="sm"
                margin="auto"
            >
                <Typography variant="h4" gutterBottom marginY="auto">
                    Task Tracker
                </Typography>
                <Button variant="contained" color={showAdd ? 'primary' : 'warning'} onClick={()=>setOnAdd()}>
                    {showAdd ? 'Add Task' : 'Close'}
                </Button>
            </Box>
        </>
    )
}

export default Header