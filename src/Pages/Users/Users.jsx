import React, { useState } from 'react'
import SearchBar from '../../Component/SearchBar/SearchBar'
import LoaderSpinner from '../../Component/Loader/LoadeSpinner'
import classes from './Users.module.css'
import InvirteModal from './InviteModal'
import { useQuery } from '@tanstack/react-query'
import { FiUserPlus } from 'react-icons/fi'
function Users() {
    let [searchtext, setSearchtext] = useState('')
    let [ShowInviteModal, setShowInviteModal] = useState(false)
    let Roles = ['Admin', 'Team Lead', 'Dev']
    console.log(ShowInviteModal)
    const { data: usersdata = [], isLoading } = useQuery({
        queryKey: ['_users'],
        queryFn: async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            return response.json()
        }
    })

    let OnClear = () => setSearchtext('')
    let OnWriting = (e) => setSearchtext(e.target.value)

    if (isLoading) {
        return <div className={classes.loader}>
            <LoaderSpinner />
        </div>
    }

    return (
        <div className={classes["container"]}>

            <div className={classes["users-head"]}>
                <div className={classes["head-text"]}>
                    <h1>Users</h1>
                    <p>Everyone with access to this portal</p>
                </div>
                <div className={classes["users-search"]}>
                    <SearchBar
                        _placeholder={'Search users'}
                        searchText={searchtext}
                        onClear={OnClear}
                        onwrite={OnWriting}
                    />
                </div>
            </div>
            <button className={classes['invite-btn']} onClick={() => setShowInviteModal(true)}>
                <FiUserPlus size={16} />
                Invite User
            </button>
            <div className={classes["users-body"]}>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Company</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usersdata.map((user, index) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.company.name}</td>
                                <td>{Roles[index % Roles.length]}</td>
                                <td>{Roles[index % Roles.length] != 'Admin' && <button className={classes['details-btn']}>Details</button>}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {
                ShowInviteModal && <InvirteModal
                    isOpen={() => setShowInviteModal(true)}
                    onClose={() => setShowInviteModal(false)}
                // onInvite={{}}
                />
            }

        </div>
    )
}

export default Users