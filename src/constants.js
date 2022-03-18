// constants.js
const CONTRACT_ADDRESS = '0x332dC79b6d06b1bb03C0C3969b74074e41E59363';

//NFT キャラクター の属性をフォーマットしてオブジェクトとして返します。
const transformCharacterData = (characterData) => {
    return {
      name: characterData.name,
      imageURI: characterData.imageURI,
      hp: characterData.hp.toNumber(),
      maxHp: characterData.maxHp.toNumber(),
      attackDamage: characterData.attackDamage.toNumber(),
    };
};
  
// 変数を constants.js 以外の場所でも使えるようにします。
export { CONTRACT_ADDRESS, transformCharacterData };