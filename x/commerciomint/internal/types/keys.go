package types

const (
	ModuleName   = "commerciomint"
	StoreKey     = ModuleName
	RouterKey    = ModuleName
	QuerierRoute = ModuleName

	CdpStorePrefix       = ":cdp:"
	CreditsDenomStoreKey = "creditsDenom"

	QueryGetCdp  = "cdp"
	QueryGetCdps = "cdps"

	MsgTypeOpenCdp  = "openCdp"
	MsgTypeCloseCdp = "closeCdp"
)