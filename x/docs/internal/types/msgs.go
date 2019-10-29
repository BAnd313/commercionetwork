package types

import (
	"fmt"
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
)

// ----------------------------------
// --- MsgShareDocument
// ----------------------------------

type MsgShareDocument Document

func NewMsgShareDocument(document Document) MsgShareDocument {
	return MsgShareDocument(document)
}

// RouterKey Implements Msg.
func (msg MsgShareDocument) Route() string { return ModuleName }

// Type Implements Msg.
func (msg MsgShareDocument) Type() string { return MsgTypeShareDocument }

// ValidateBasic Implements Msg.
func (msg MsgShareDocument) ValidateBasic() sdk.Error {
	return Document(msg).Validate()
}

// GetSignBytes Implements Msg.
func (msg MsgShareDocument) GetSignBytes() []byte {
	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(msg))
}

// GetSigners Implements Msg.
func (msg MsgShareDocument) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{msg.Sender}
}

// ----------------------------------
// --- MsgSendDocumentReceipt
// ----------------------------------

type MsgSendDocumentReceipt DocumentReceipt

func NewMsgSendDocumentReceipt(receipt DocumentReceipt) MsgSendDocumentReceipt {
	return MsgSendDocumentReceipt(receipt)
}

// RouterKey Implements Msg.
func (msg MsgSendDocumentReceipt) Route() string { return ModuleName }

// Type Implements Msg.
func (msg MsgSendDocumentReceipt) Type() string { return MsgTypeSendDocumentReceipt }

// ValidateBasic Implements Msg.
func (msg MsgSendDocumentReceipt) ValidateBasic() sdk.Error {
	if !validateUuid(msg.Uuid) {
		return sdk.ErrUnknownRequest(fmt.Sprintf("Invalid uuid: %s", msg.Uuid))
	}

	if msg.Sender.Empty() {
		return sdk.ErrInvalidAddress(msg.Sender.String())
	}

	if msg.Recipient.Empty() {
		return sdk.ErrInvalidAddress(msg.Recipient.String())
	}

	if len(strings.TrimSpace(msg.TxHash)) == 0 {
		return sdk.ErrUnknownRequest("Send Document's Transaction Hash can't be empty")
	}

	if !validateUuid(msg.DocumentUuid) {
		return sdk.ErrUnknownRequest("Invalid document UUID")
	}

	if len(strings.TrimSpace(msg.Proof)) == 0 {
		return sdk.ErrUnknownRequest("Receipt proof can't be empty")
	}

	return nil
}

// GetSignBytes Implements Msg.
func (msg MsgSendDocumentReceipt) GetSignBytes() []byte {
	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(msg))
}

// GetSigners Implements Msg.
func (msg MsgSendDocumentReceipt) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{msg.Sender}
}

// ------------------------------------
// --- MsgAddSupportedMetadataSchema
// ------------------------------------

type MsgAddSupportedMetadataSchema struct {
	Signer sdk.AccAddress `json:"signer"`
	Schema MetadataSchema `json:"schema"`
}

// RouterKey Implements Msg.
func (msg MsgAddSupportedMetadataSchema) Route() string { return ModuleName }

// Type Implements Msg.
func (msg MsgAddSupportedMetadataSchema) Type() string { return MsgTypeAddSupportedMetadataSchema }

// ValidateBasic Implements Msg.
func (msg MsgAddSupportedMetadataSchema) ValidateBasic() sdk.Error {
	if msg.Signer.Empty() {
		return sdk.ErrInvalidAddress(msg.Signer.String())
	}
	if err := msg.Schema.Validate(); err != nil {
		return sdk.ErrUnknownRequest(err.Error())
	}
	return nil
}

// GetSignBytes Implements Msg.
func (msg MsgAddSupportedMetadataSchema) GetSignBytes() []byte {
	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(msg))
}

// GetSigners Implements Msg.
func (msg MsgAddSupportedMetadataSchema) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{msg.Signer}
}

// -----------------------------------------
// --- MsgAddTrustedMetadataSchemaProposer
// -----------------------------------------

type MsgAddTrustedMetadataSchemaProposer struct {
	Proposer sdk.AccAddress `json:"proposer"`
	Signer   sdk.AccAddress `json:"signer"`
}

// RouterKey Implements Msg.
func (msg MsgAddTrustedMetadataSchemaProposer) Route() string { return ModuleName }

// Type Implements Msg.
func (msg MsgAddTrustedMetadataSchemaProposer) Type() string {
	return MsgTypeAddTrustedMetadataSchemaProposer
}

// ValidateBasic Implements Msg.
func (msg MsgAddTrustedMetadataSchemaProposer) ValidateBasic() sdk.Error {
	if msg.Proposer.Empty() {
		return sdk.ErrInvalidAddress(msg.Proposer.String())
	}
	if msg.Signer.Empty() {
		return sdk.ErrInvalidAddress(msg.Signer.String())
	}
	return nil
}

// GetSignBytes Implements Msg.
func (msg MsgAddTrustedMetadataSchemaProposer) GetSignBytes() []byte {
	return sdk.MustSortJSON(ModuleCdc.MustMarshalJSON(msg))
}

// GetSigners Implements Msg.
func (msg MsgAddTrustedMetadataSchemaProposer) GetSigners() []sdk.AccAddress {
	return []sdk.AccAddress{msg.Signer}
}