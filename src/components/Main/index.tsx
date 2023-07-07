import { useMemo } from "react";
import { useLocalStorage } from "@mantine/hooks";
import {
	SimpleGrid,
	TextInput,
	Stack,
	CopyButton,
	Button,
	Group,
	ActionIcon,
	Text,
	Card,
	Title,
} from "@mantine/core";

import {
	IconHash,
	IconTrash,
	TablerIcon,
	IconKey,
	IconBuildingBank,
	IconNotebook,
} from "@tabler/icons";

import { getCcpKey, getCcpRip, getCcpRib, formatCcpRib } from "../../utils";
import useStyles from "./Main.styles";

export default function Main() {
	const [_ccp, setCcp] = useCcpStorage();
	const ccp = _ccp || "123456";

	const ccpMemo = (fn: (ccp: string) => string) =>
		useMemo(() => ccp && fn(ccp), [ccp]);

	const ccpKey = ccpMemo(getCcpKey);
	const ccpRip = ccpMemo(getCcpRip);
	const ccpRib = ccpMemo(getCcpRib);

	return (
		<SimpleGrid
			cols={2}
			breakpoints={[
				{ maxWidth: 980, cols: 1, spacing: "md" },
				{ maxWidth: 800, cols: 1, spacing: "sm" },
			]}
		>
			<Stack>
				<CCPInput ccp={_ccp} setCcp={setCcp} />

				<SimpleGrid cols={2}>
					<CopyableResult label="CCP" value={ccp} Ticon={IconHash} />
					<CopyableResult label="Clé" value={ccpKey} Ticon={IconKey} />
					<CopyableResult label="RIP" value={ccpRip} Ticon={IconNotebook} />
					<CopyableResult
						label="RIB"
						value={ccpRib}
						Ticon={IconBuildingBank}
						formattedValue={formatCcpRib(ccpRib)}
					/>
				</SimpleGrid>

				<Button color="cyan" size="lg">
					Save
				</Button>
			</Stack>

			<Stack></Stack>
		</SimpleGrid>
	);
}

function CCPInput({ ccp, setCcp }: { ccp: string; setCcp: any }) {
	const clearCcp = () => setCcp("");
	const onChange: React.ChangeEventHandler<HTMLInputElement> = e =>
		setCcp(e.currentTarget.value.replace(/\D/g, ""));

	return (
		<TextInput
			icon={<IconHash />}
			description="Saisissez le numéro d'un compte bancaire, les zeros sont optionnels."
			placeholder="1 2 3 4 5 6"
			label="CCP"
			size="xl"
			withAsterisk
			value={ccp.split("").join(" ")}
			onChange={onChange}
			rightSection={
				<ActionIcon
					onClick={clearCcp}
					variant="transparent"
					size={30}
					sx={{ paddingRight: "5px" }}
				>
					<IconTrash
						color="red"
						size={30}
						style={{ display: "block", opacity: 0.5 }}
					/>
				</ActionIcon>
			}
		/>
	);
}

function CopyableResult({
	label,
	value,
	Ticon,
	formattedValue,
}: {
	label: string;
	value: string;
	Ticon: TablerIcon;
	formattedValue?: string;
}) {
	const { classes } = useStyles();

	return (
		<Card shadow="sm" p="lg" radius="md" withBorder>
			<Stack>
				<Group>
					<div className={classes.featureIcon}>
						<Ticon size={28} stroke={1.5} />
					</div>

					<Title order={2}>{label}</Title>
				</Group>

				<Text color="dimmed" mt={4} ta="center" size="md" fw={700}>
					{formattedValue || value}
				</Text>
			</Stack>

			<CopyButton value={value} timeout={1500}>
				{({ copied, copy }) => (
					<Button
						variant="light"
						color={copied ? "teal" : "blue"}
						fullWidth
						mt="md"
						radius="md"
						onClick={copy}
					>
						{copied ? "Copied" : "Copy"}
					</Button>
				)}
			</CopyButton>
		</Card>
	);
}

function useCcpStorage() {
	return useLocalStorage<string>({
		key: "ccp-input-value",
		defaultValue: "",
	});
}
