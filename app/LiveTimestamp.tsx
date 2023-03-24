"use client";
import TimeAgo from "react-timeago";

type Props = {
	time: string;
};

import React from "react";

function LiveTimestamp({ time }: Props) {
	return <TimeAgo date={time} />;
}

export default LiveTimestamp;
