import * as React from "react";
import { styled } from "@mui/material/styles";
import { TextField, InputAdornment, IconButton, Grid } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const CssTextField = styled(TextField)({

});

export default function CustomizedInputs({
    name,
    handleChange,
    label,
    half,
    autoFocus,
    type,
    handleShowPassword
}) {
    return (
        <Grid item xs={12} sm={half ? 6 : 12}>
            <CssTextField
                name={name}
                onChange={handleChange}
                variant="outlined"
                size="small"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={
                    name === "password"
                        ? {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton onClick={handleShowPassword}>
                                        {type === "password" ? (
                                            <VisibilityOffOutlinedIcon />
                                            ) : (
                                            <VisibilityOutlinedIcon />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            )
                        }
                        : null
                }
                id="custom-css-outlined-input"
            />
        </Grid>
    );
}
