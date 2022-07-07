import * as React from 'react';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import Tippy from "@tippyjs/react";

export default function Mail() {
    return (

            <Tippy content={<span>Messanger</span>}>
                <Badge badgeContent={4} color="error">
                    <MailIcon color="action" />
                </Badge>
            </Tippy>


    );
}