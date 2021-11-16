import React from 'react';
import Trailer from "./Trailer";

const Grid = ({config, data}) => {
    return (
        <table>
            <thead>
            <tr>
                {config.map(configElement => {
                    return <th key={configElement.field}> {configElement.field}</th>
                })}
            </tr>
            </thead>
            <tbody>
            {data.map(film => {
                return <tr key={film.imdbID}>{
                    config.map(configElement => {
                        const field = configElement.field;
                        const value = film[field];
                        return <th key={value}>
                            {
                                field === "Trailer" ? (<Trailer value={value.url}/>) : (value)
                            }
                        </th>
                    })
                }</tr>
            })}
            </tbody>
        </table>
    )
};

export default Grid;