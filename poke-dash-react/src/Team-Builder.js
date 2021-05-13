import './Team-Builder.css';
export default function TeamBuilder() {
    return (
      <>
        <h1>Team-Builder</h1>
        <div class="teamContainer">
          <div class="teamElement col">+</div>
          <div class="teamElement col">+</div>
          <div class="teamElement col">+</div>
        </div>
        <div class="teamContainer">
          <div class="teamElement col lowerTeam">+</div>
          <div class="teamElement col lowerTeam">+</div>
          <div class="teamElement col lowerTeam">+</div>
        </div>
      </>
    );
  }