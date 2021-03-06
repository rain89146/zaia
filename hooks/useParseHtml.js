import React from 'react'
import parse from 'html-react-parser';

export default function useParseHtml(html) {
    return <>{ parse(html)}</>;
}