
export function Header() {
  const Header = document.querySelector("header") as HTMLBodyElement;

  Header.className = "header-wrap";
  Header.innerHTML += "";
  Header.innerHTML += `
  <div class="header">
    <div class="header-cont">
      <p>Header</p>
    </div>
    </div>
    <hr>
  </div>
`;
}

