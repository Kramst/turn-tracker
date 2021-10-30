import { useState } from "react";
import { setStats } from "../interfaces/statSetterTypes";
import {stats} from "../interfaces/statTypes";

const StatTable = (props : {stats : stats, setStats: setStats}) => {
    const [str, setStr] = [props.stats.strength, props.setStats.setStrength];
    const [dex, setDex] = [props.stats.dexterity, props.setStats.setDexterity];
    const [con, setCon] = [props.stats.constitution, props.setStats.setConstitution];
    const [int, setInt] = [props.stats.inteligence, props.setStats.setInteligence];
    const [wis, setWis] = [props.stats.wisdom, props.setStats.setWisdom];
    const [cha, setCha] = [props.stats.charisma, props.setStats.setCharisma];
    
    return(
        <table className="stat-table">
            <thead>
                <tr>
                    <th>STR</th>
                    <th>DEX</th>
                    <th>CON</th>
                    <th>INT</th>
                    <th>WIS</th>
                    <th>CHA</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><input type="number" name="" id="" value={str} inputMode="numeric" onChange={e => setStr(parseInt(e.target.value))}/></td>
                    <td><input type="number" name="" id="" value={dex} inputMode="numeric" onChange={e => setDex(parseInt(e.target.value))}/></td>
                    <td><input type="number" name="" id="" value={con} inputMode="numeric" onChange={e => setCon(parseInt(e.target.value))}/></td>
                    <td><input type="number" name="" id="" value={int} inputMode="numeric" onChange={e => setInt(parseInt(e.target.value))}/></td>
                    <td><input type="number" name="" id="" value={wis} inputMode="numeric" onChange={e => setWis(parseInt(e.target.value))}/></td>
                    <td><input type="number" name="" id="" value={cha} inputMode="numeric" onChange={e => setCha(parseInt(e.target.value))}/></td>
                </tr>
                <tr>
                    <td><input type="number" name="" id="" value={modifier(str)} disabled/></td>
                    <td><input type="number" name="" id="" value={modifier(dex)} disabled/></td>
                    <td><input type="number" name="" id="" value={modifier(con)} disabled/></td>
                    <td><input type="number" name="" id="" value={modifier(int)} disabled/></td>
                    <td><input type="number" name="" id="" value={modifier(wis)} disabled/></td>
                    <td><input type="number" name="" id="" value={modifier(cha)} disabled/></td>
                </tr>
            </tbody>
        </table>
    )
}

const modifier = (value : number) => {
    const modifier = Math.floor((value-10)/2);
    return modifier;
}
export default StatTable