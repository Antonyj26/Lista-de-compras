function addItem() {
  const $inputElement = document.getElementById("new-item");
  const itemName = $inputElement.value;

  if (itemName === "") {
    alert("Digite um item para adicionar");
  }

  const $itemList = document.getElementById("item-list");

  // Div principal (pai)
  const $item = document.createElement("div");
  $item.classList.add("list-container");

  // li que vai representar o item
  const $li = document.createElement("li");
  $item.appendChild($li);
  $li.classList.add("item-li");
  $li.append(itemName);

  const $btn = document.createElement("button");

  const $img = document.createElement("img");
  $img.src = "/assets/Frame.svg";
  $btn.appendChild($img);
  $btn.addEventListener("click", () => {
    const $parent = $btn.parentElement;
    $parent.remove();
  });

  $item.appendChild($btn);

  $itemList.appendChild($item);

  // itemList.append(itemName);
}
