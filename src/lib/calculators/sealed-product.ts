export interface BoosterPackEntry {
  setName: string;
  count: number;

  msrpPerPack?: number;
  marketPricePerPack?: number;
}

export interface SealedProductInput {
  purchasePrice: number;
  productMsrp?: number;

  boosterPacks: BoosterPackEntry[];

  promoValue?: number;
  otherItemsValue?: number;
}

export interface SealedProductResult {
  totalPackCount: number;

  totalPackMsrp?: number;

  totalPackMarketValue?: number;

  averagePackMsrp?: number;
  averagePackMarketValue?: number;

  totalIncludedValue: number;
  adjustedProductCost: number;

  // cost per pack before and after adjustments
  unadjustedCostPerPack: number;
  adjustedCostPerPack: number;

  // product-level MSRP comparison
  productMsrpDifference?: number;
  productMsrpDifferencePercent?: number;

  // comparison against combined market value of packs
  packMarketValueDifference?: number;

  // comparison against estimated value of all included contents
  totalContentsValue?: number;
  contentsValueDifference?: number;
  contentsValueDifferencePercent?: number;
}

export function calculateSealedProduct(
  input: SealedProductInput,
): SealedProductResult {
  const {
    purchasePrice,
    productMsrp,
    boosterPacks,
    promoValue = 0,
    otherItemsValue = 0,
  } = input;

  // validate purchase price
  if (!Number.isFinite(purchasePrice) || purchasePrice < 0) {
    throw new Error("Purchase price must be a non-negative number.");
  }

  // validate optional product MSRP
  if (
    productMsrp !== undefined &&
    (!Number.isFinite(productMsrp) || productMsrp < 0)
  ) {
    throw new Error("Product MSRP must be a non-negative number if provided.");
  }

  // validate included item values
  if (
    !Number.isFinite(promoValue) ||
    !Number.isFinite(otherItemsValue) ||
    promoValue < 0 ||
    otherItemsValue < 0
  ) {
    throw new Error("Included item values must be non-negative numbers.");
  }

  // require at least one booster pack entry
  if (!Array.isArray(boosterPacks) || boosterPacks.length === 0) {
    throw new Error("Add at least one booster pack entry.");
  }

  // validate individual booster pack entries
  for (const pack of boosterPacks) {
    if (!pack.setName.trim()) {
      throw new Error("Every booster pack entry must have a set name.");
    }

    if (!Number.isInteger(pack.count) || pack.count <= 0) {
      throw new Error("Booster pack counts must be positive whole numbers.");
    }

    if (
      pack.msrpPerPack !== undefined &&
      (!Number.isFinite(pack.msrpPerPack) || pack.msrpPerPack < 0)
    ) {
      throw new Error("Pack MSRP must be a non-negative number.");
    }

    if (
      pack.marketPricePerPack !== undefined &&
      (!Number.isFinite(pack.marketPricePerPack) || pack.marketPricePerPack < 0)
    ) {
      throw new Error("Pack market prices must be non-negative numbers.");
    }
  }

  // total pack count
  const totalPackCount = boosterPacks.reduce(
    (sum, pack) => sum + pack.count,
    0,
  );

  // total MSRP when all pack entries have an MSRP
  const hasCompleteMsrp = boosterPacks.every(
    (pack) => pack.msrpPerPack !== undefined,
  );

  const totalPackMsrp = hasCompleteMsrp
    ? boosterPacks.reduce(
        (sum, pack) => sum + pack.count * (pack.msrpPerPack ?? 0),
        0,
      )
    : undefined;

  // total market value when all pack entries have a market price
  const hasCompleteMarketPricing = boosterPacks.every(
    (pack) => pack.marketPricePerPack !== undefined,
  );

  const totalPackMarketValue = hasCompleteMarketPricing
    ? boosterPacks.reduce(
        (sum, pack) => sum + pack.count * (pack.marketPricePerPack ?? 0),
        0,
      )
    : undefined;

  // average pack reference prices
  const averagePackMsrp =
    totalPackMsrp !== undefined ? totalPackMsrp / totalPackCount : undefined;
  const averagePackMarketValue =
    totalPackMarketValue !== undefined
      ? totalPackMarketValue / totalPackCount
      : undefined;

  // included item values and adjusted product cost
  const totalIncludedValue = promoValue + otherItemsValue;
  const adjustedProductCost = purchasePrice - totalIncludedValue;

  const unadjustedCostPerPack = purchasePrice / totalPackCount;
  const adjustedCostPerPack = adjustedProductCost / totalPackCount;

  // compare purchase price against product MSRP
  const productMsrpDifference =
    productMsrp !== undefined ? purchasePrice - productMsrp : undefined;

  const productMsrpDifferencePercent =
    productMsrp !== undefined
      ? ((purchasePrice - productMsrp) / productMsrp) * 100
      : undefined;

  // compare purchase price against the value of the booster packs
  const packMarketValueDifference =
    totalPackMarketValue !== undefined
      ? purchasePrice - totalPackMarketValue
      : undefined;

  // estimate total value of all product contents
  const totalContentsValue =
    totalPackMarketValue !== undefined
      ? totalPackMarketValue + totalIncludedValue
      : undefined;

  const contentsValueDifference =
    totalContentsValue !== undefined
      ? purchasePrice - totalContentsValue
      : undefined;

  const contentsValueDifferencePercent =
    totalContentsValue !== undefined && totalContentsValue > 0
      ? ((purchasePrice - totalContentsValue) / totalContentsValue) * 100
      : undefined;

  return {
    totalPackCount,
    totalPackMsrp,
    totalPackMarketValue,
    averagePackMsrp,
    averagePackMarketValue,
    totalIncludedValue,
    adjustedProductCost,
    unadjustedCostPerPack,
    adjustedCostPerPack,
    productMsrpDifference,
    productMsrpDifferencePercent,
    packMarketValueDifference,
    totalContentsValue,
    contentsValueDifference,
    contentsValueDifferencePercent,
  };
}
