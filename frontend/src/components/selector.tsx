"use client"

import { useState } from "react";

export default function Selector() {
    interface RoleType {
        value: string;
        label: string;
    }

    const [selectedRole, setSelectedRole] = useState("user");

    const roles: RoleType[] = [
        { value: "user", label: "Пользователь" },
        { value: "admin", label: "Администратор" },
        { value: "editor", label: "Редактор" }
    ];

    function handleChange(e: React.ChangeEvent<HTMLSelectElement>): void {
        setSelectedRole(e.target.value)
    }
    
    return (
          <select
            id="role"
            name="role"
            value={selectedRole}
            onChange={handleChange}
            className="bg-gray-300/10 p-3 m-4 rounded-[0.5em]"
          >
            {roles.map((role) => (
                <option key={role.value} value={role.value}>
                    {role.label}
                </option>
            ))}
          </select>
    )
}