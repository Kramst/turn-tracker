import StatTable from "./StatTable"
import {stats, health, combatStats} from "../interfaces/IStatTypes";
import { useContext, useState } from "react"
import HealthCounter from "./HealthCounter";
import CombatStatTable from "./CombatStatTable";
import { setCombatStats, setHealth, setStats } from "../interfaces/IStatSetterTypes";
import { ICreature } from "../interfaces/ICreature";
import { TrackedCreaturesContext } from "./contexts/TrackedCreaturesContext";

const Creature = (props : ICreature) => {
    const [name, setName] = useState(props.name);

    const [hp, setHp] = useState(props.health.hitPoints);
    const [hpMax, setHpMax] = useState(props.health.hitPointsMax);
    const [hpTemp, setHpTemp] = useState(props.health.hitPointsTemp);

    const [init, setInit] = useState(props.combatStats.initiative);
    const [ac, setAc] = useState(props.combatStats.armorClass);
    const [spd, setSpd] = useState(props.combatStats.speed);

    const [str, setStr] = useState(props.stats.strength);
    const [dex, setDex] = useState(props.stats.dexterity);
    const [con, setCon] = useState(props.stats.constitution);
    const [int, setInt] = useState(props.stats.inteligence);
    const [wis, setWis] = useState(props.stats.wisdom);
    const [cha, setCha] = useState(props.stats.charisma);

    const stats:stats = {
        strength: str,
        dexterity: dex,
        constitution: con,
        inteligence: int,
        wisdom: wis,
        charisma: cha
    }
    const setStats:setStats = {
        setStrength: setStr,
        setDexterity: setDex,
        setConstitution: setCon,
        setInteligence: setInt,
        setWisdom: setWis,
        setCharisma: setCha
    }
    const health:health = {
        hitPoints: hp,
        hitPointsMax: hpMax,
        hitPointsTemp: hpTemp
    }
    const setHealth:setHealth = {
        setHitPoints: setHp,
        setHitPointsMax: setHpMax,
        setHitPointsTemp: setHpTemp
    }
    const combatStats:combatStats = {
        armorClass: ac,
        initiative: init,
        speed: spd
    }
    const setCombatStats:setCombatStats = {
        setInitative: setInit,
        setArmorClass: setAc,
        setSpeed: setSpd
    }

    const die = () => {
        return 0;
    }
    
    return(
        <div className="creature">
            <div className="creature-name">{name}</div>
            {/* <button onClick={die()}>Kill</button> */}
            <HealthCounter health={health} setHealth={setHealth}/>
            <CombatStatTable combatStats={combatStats} setCombatStats={setCombatStats}/>
            <StatTable stats={stats} setStats={setStats}/>
        </div>
    )
}

export default Creature