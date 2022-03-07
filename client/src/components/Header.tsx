import { AppBar, Container, Toolbar, Typography } from '@mui/material';

function Header() {
  return (
    <AppBar position="static" elevation={0}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography variant="h6" noWrap component="div">
            Expense Tracker
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
