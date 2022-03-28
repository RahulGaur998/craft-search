import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Input } from 'semantic-ui-react'

const SearchBox = () => {
    const [APIData, setAPIData] = useState([]);
    const [filteredResults, setFilteredResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    
    useEffect(() => {
        axios.get(`https://raw.githubusercontent.com/RahulGaur998/ApiData/main/db.json`)
            .then((response) => {
                setAPIData(response.data);
                console.log(response.data);
            })

    }, [])

    const searchItems = (searchValue) => {
        setSearchInput(searchValue)
        if (searchInput !== '') {
            const filteredData = APIData.filter((item) => {
                return Object.values(item.company_name.toLowerCase()).join('').includes(searchInput)
            })
            setFilteredResults(filteredData)
        }
        else{
            setFilteredResults(APIData)
        }
    }

    return (
        
        <div style={{ padding: 20 }}>
            <Input icon='search'
                placeholder='Search...'
                onChange={(e) => searchItems(e.target.value)}
            />
            <Card.Group itemsPerRow={3} style={{ marginTop: 20 }}>
                
                {searchInput.length > 1 ? (
                    filteredResults.map((item) => {
                        
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.company_name}</Card.Header>

                                    <Card.Description>
                                        {item.location}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                ) : (
                    
                    APIData.slice(0,20).map((item) => {
                        return (
                            <Card>
                                <Card.Content>
                                    <Card.Header>{item.company_name}</Card.Header>
                                    
                                    <Card.Description>
                                        {item.location}
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        )
                    })
                )}
            </Card.Group>
        </div>
    )
}

export default SearchBox;