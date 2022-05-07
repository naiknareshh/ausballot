import { FunctionalComponent, h } from "preact";
import style from "./style.css";
import SelectElectorate from "../../components/select-electorate";
import HouseBallot from "../../components/ballots/house";
import SenateBallot from "../../components/ballots/senate";

interface Props {
  state: string;
  division: string;
}

const Electorate: FunctionalComponent<Props> = (props: Props) => {
  const { state, division } = props;

  const divisionSlug = division.replace(" ", "-").toLowerCase();
  const profileLink = `https://www.aec.gov.au/profiles/${state.toLowerCase()}/${divisionSlug}.htm`;

  const candidatesLink = `https://www.aec.gov.au/election/candidates.htm?suburb=${division}&division=${division}&state=${state}`;

  return (
    <div class={style.electorate}>
      <label htmlFor="select-electorate" className={style.electorateLabel}>
        Electorate
      </label>
      <SelectElectorate selectedValue={`${state}/${division}`} />

      <h2 class={style.header}>House ballot</h2>

      <HouseBallot
        key={`${state}/${division}`}
        state={state}
        division={division}
      />

      <h2 class={style.header}>Senate ballot</h2>

      <SenateBallot key={state} state={state} />

      <div>
        <h2 class={style.header}>AEC links</h2>
        <ul>
          <li>
            <a href={profileLink} target="_blank" rel="noreferrer">
              Electorate profile (maps, etc)
            </a>
          </li>
          <li>
            <a href={candidatesLink} target="_blank" rel="noreferrer">
              Candidates list
            </a>
          </li>
        </ul>
      </div>

      <div class={style.stretcher} />
    </div>
  );
};

export default Electorate;
