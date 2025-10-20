import { HintStatus } from "../../types";
/**
 * Sent to the server to update the status of a Hint. The client must be the 'receiving_player' of the Hint, or the update fails.
 * @category Network Packets
 */
export interface UpdateHintPacket {
    readonly cmd: "UpdateHint"
    /** The ID of the player whose location is being hinted for. */
    readonly player: number
    /** The ID of the location to update the hint for. If no hint exists for this location, the packet is ignored. */
    readonly location: number
    /** Optional. If included, sets the status of the hint to this status. Cannot set {@link HintStatus.HINT_FOUND}, or change the status from {@link HintStatus.HINT_FOUND}. */
    readonly status: HintStatus
}
