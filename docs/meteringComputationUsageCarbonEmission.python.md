# `meteringComputationUsageCarbonEmission` Submodule <a name="`meteringComputationUsageCarbonEmission` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationUsageCarbonEmission <a name="MeteringComputationUsageCarbonEmission" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission oci_metering_computation_usage_carbon_emission}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  tenant_id: str,
  time_usage_ended: str,
  time_usage_started: str,
  compartment_depth: typing.Union[int, float] = None,
  group_by: typing.List[str] = None,
  group_by_tag: typing.Union[IResolvable, typing.List[MeteringComputationUsageCarbonEmissionGroupByTag]] = None,
  id: str = None,
  is_aggregate_by_time: typing.Union[bool, IResolvable] = None,
  timeouts: MeteringComputationUsageCarbonEmissionTimeouts = None,
  usage_carbon_emission_filter: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#tenant_id MeteringComputationUsageCarbonEmission#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.timeUsageEnded">time_usage_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_ended MeteringComputationUsageCarbonEmission#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.timeUsageStarted">time_usage_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_started MeteringComputationUsageCarbonEmission#time_usage_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.compartmentDepth">compartment_depth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#compartment_depth MeteringComputationUsageCarbonEmission#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.groupBy">group_by</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by MeteringComputationUsageCarbonEmission#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.groupByTag">group_by_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>]]</code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#id MeteringComputationUsageCarbonEmission#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.isAggregateByTime">is_aggregate_by_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#is_aggregate_by_time MeteringComputationUsageCarbonEmission#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.usageCarbonEmissionFilter">usage_carbon_emission_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#usage_carbon_emission_filter MeteringComputationUsageCarbonEmission#usage_carbon_emission_filter}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#tenant_id MeteringComputationUsageCarbonEmission#tenant_id}.

---

##### `time_usage_ended`<sup>Required</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.timeUsageEnded"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_ended MeteringComputationUsageCarbonEmission#time_usage_ended}.

---

##### `time_usage_started`<sup>Required</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.timeUsageStarted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_started MeteringComputationUsageCarbonEmission#time_usage_started}.

---

##### `compartment_depth`<sup>Optional</sup> <a name="compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.compartmentDepth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#compartment_depth MeteringComputationUsageCarbonEmission#compartment_depth}.

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.groupBy"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by MeteringComputationUsageCarbonEmission#group_by}.

---

##### `group_by_tag`<sup>Optional</sup> <a name="group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.groupByTag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>]]

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by_tag MeteringComputationUsageCarbonEmission#group_by_tag}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#id MeteringComputationUsageCarbonEmission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_aggregate_by_time`<sup>Optional</sup> <a name="is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.isAggregateByTime"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#is_aggregate_by_time MeteringComputationUsageCarbonEmission#is_aggregate_by_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#timeouts MeteringComputationUsageCarbonEmission#timeouts}

---

##### `usage_carbon_emission_filter`<sup>Optional</sup> <a name="usage_carbon_emission_filter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.Initializer.parameter.usageCarbonEmissionFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#usage_carbon_emission_filter MeteringComputationUsageCarbonEmission#usage_carbon_emission_filter}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putGroupByTag">put_group_by_tag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetCompartmentDepth">reset_compartment_depth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupBy">reset_group_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupByTag">reset_group_by_tag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetIsAggregateByTime">reset_is_aggregate_by_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetUsageCarbonEmissionFilter">reset_usage_carbon_emission_filter</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_group_by_tag` <a name="put_group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putGroupByTag"></a>

```python
def put_group_by_tag(
  value: typing.Union[IResolvable, typing.List[MeteringComputationUsageCarbonEmissionGroupByTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putGroupByTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#create MeteringComputationUsageCarbonEmission#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#delete MeteringComputationUsageCarbonEmission#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#update MeteringComputationUsageCarbonEmission#update}.

---

##### `reset_compartment_depth` <a name="reset_compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetCompartmentDepth"></a>

```python
def reset_compartment_depth() -> None
```

##### `reset_group_by` <a name="reset_group_by" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupBy"></a>

```python
def reset_group_by() -> None
```

##### `reset_group_by_tag` <a name="reset_group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetGroupByTag"></a>

```python
def reset_group_by_tag() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_aggregate_by_time` <a name="reset_is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetIsAggregateByTime"></a>

```python
def reset_is_aggregate_by_time() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_usage_carbon_emission_filter` <a name="reset_usage_carbon_emission_filter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.resetUsageCarbonEmissionFilter"></a>

```python
def reset_usage_carbon_emission_filter() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MeteringComputationUsageCarbonEmission resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MeteringComputationUsageCarbonEmission resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MeteringComputationUsageCarbonEmission to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MeteringComputationUsageCarbonEmission that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationUsageCarbonEmission to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTag">group_by_tag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList">MeteringComputationUsageCarbonEmissionGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList">MeteringComputationUsageCarbonEmissionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference">MeteringComputationUsageCarbonEmissionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepthInput">compartment_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByInput">group_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTagInput">group_by_tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTimeInput">is_aggregate_by_time_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEndedInput">time_usage_ended_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStartedInput">time_usage_started_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilterInput">usage_carbon_emission_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepth">compartment_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTime">is_aggregate_by_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEnded">time_usage_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStarted">time_usage_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilter">usage_carbon_emission_filter</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `group_by_tag`<sup>Required</sup> <a name="group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTag"></a>

```python
group_by_tag: MeteringComputationUsageCarbonEmissionGroupByTagList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList">MeteringComputationUsageCarbonEmissionGroupByTagList</a>

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.items"></a>

```python
items: MeteringComputationUsageCarbonEmissionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList">MeteringComputationUsageCarbonEmissionItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeouts"></a>

```python
timeouts: MeteringComputationUsageCarbonEmissionTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference">MeteringComputationUsageCarbonEmissionTimeoutsOutputReference</a>

---

##### `compartment_depth_input`<sup>Optional</sup> <a name="compartment_depth_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepthInput"></a>

```python
compartment_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByInput"></a>

```python
group_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_by_tag_input`<sup>Optional</sup> <a name="group_by_tag_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupByTagInput"></a>

```python
group_by_tag_input: typing.Union[IResolvable, typing.List[MeteringComputationUsageCarbonEmissionGroupByTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_aggregate_by_time_input`<sup>Optional</sup> <a name="is_aggregate_by_time_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTimeInput"></a>

```python
is_aggregate_by_time_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MeteringComputationUsageCarbonEmissionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>]

---

##### `time_usage_ended_input`<sup>Optional</sup> <a name="time_usage_ended_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEndedInput"></a>

```python
time_usage_ended_input: str
```

- *Type:* str

---

##### `time_usage_started_input`<sup>Optional</sup> <a name="time_usage_started_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStartedInput"></a>

```python
time_usage_started_input: str
```

- *Type:* str

---

##### `usage_carbon_emission_filter_input`<sup>Optional</sup> <a name="usage_carbon_emission_filter_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilterInput"></a>

```python
usage_carbon_emission_filter_input: str
```

- *Type:* str

---

##### `compartment_depth`<sup>Required</sup> <a name="compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.compartmentDepth"></a>

```python
compartment_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_aggregate_by_time`<sup>Required</sup> <a name="is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.isAggregateByTime"></a>

```python
is_aggregate_by_time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `time_usage_ended`<sup>Required</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageEnded"></a>

```python
time_usage_ended: str
```

- *Type:* str

---

##### `time_usage_started`<sup>Required</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.timeUsageStarted"></a>

```python
time_usage_started: str
```

- *Type:* str

---

##### `usage_carbon_emission_filter`<sup>Required</sup> <a name="usage_carbon_emission_filter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.usageCarbonEmissionFilter"></a>

```python
usage_carbon_emission_filter: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmission.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationUsageCarbonEmissionConfig <a name="MeteringComputationUsageCarbonEmissionConfig" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  tenant_id: str,
  time_usage_ended: str,
  time_usage_started: str,
  compartment_depth: typing.Union[int, float] = None,
  group_by: typing.List[str] = None,
  group_by_tag: typing.Union[IResolvable, typing.List[MeteringComputationUsageCarbonEmissionGroupByTag]] = None,
  id: str = None,
  is_aggregate_by_time: typing.Union[bool, IResolvable] = None,
  timeouts: MeteringComputationUsageCarbonEmissionTimeouts = None,
  usage_carbon_emission_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#tenant_id MeteringComputationUsageCarbonEmission#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageEnded">time_usage_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_ended MeteringComputationUsageCarbonEmission#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageStarted">time_usage_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_started MeteringComputationUsageCarbonEmission#time_usage_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.compartmentDepth">compartment_depth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#compartment_depth MeteringComputationUsageCarbonEmission#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by MeteringComputationUsageCarbonEmission#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupByTag">group_by_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>]]</code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#id MeteringComputationUsageCarbonEmission#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.isAggregateByTime">is_aggregate_by_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#is_aggregate_by_time MeteringComputationUsageCarbonEmission#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.usageCarbonEmissionFilter">usage_carbon_emission_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#usage_carbon_emission_filter MeteringComputationUsageCarbonEmission#usage_carbon_emission_filter}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#tenant_id MeteringComputationUsageCarbonEmission#tenant_id}.

---

##### `time_usage_ended`<sup>Required</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageEnded"></a>

```python
time_usage_ended: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_ended MeteringComputationUsageCarbonEmission#time_usage_ended}.

---

##### `time_usage_started`<sup>Required</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeUsageStarted"></a>

```python
time_usage_started: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#time_usage_started MeteringComputationUsageCarbonEmission#time_usage_started}.

---

##### `compartment_depth`<sup>Optional</sup> <a name="compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.compartmentDepth"></a>

```python
compartment_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#compartment_depth MeteringComputationUsageCarbonEmission#compartment_depth}.

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by MeteringComputationUsageCarbonEmission#group_by}.

---

##### `group_by_tag`<sup>Optional</sup> <a name="group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.groupByTag"></a>

```python
group_by_tag: typing.Union[IResolvable, typing.List[MeteringComputationUsageCarbonEmissionGroupByTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>]]

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#group_by_tag MeteringComputationUsageCarbonEmission#group_by_tag}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#id MeteringComputationUsageCarbonEmission#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_aggregate_by_time`<sup>Optional</sup> <a name="is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.isAggregateByTime"></a>

```python
is_aggregate_by_time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#is_aggregate_by_time MeteringComputationUsageCarbonEmission#is_aggregate_by_time}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.timeouts"></a>

```python
timeouts: MeteringComputationUsageCarbonEmissionTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#timeouts MeteringComputationUsageCarbonEmission#timeouts}

---

##### `usage_carbon_emission_filter`<sup>Optional</sup> <a name="usage_carbon_emission_filter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionConfig.property.usageCarbonEmissionFilter"></a>

```python
usage_carbon_emission_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#usage_carbon_emission_filter MeteringComputationUsageCarbonEmission#usage_carbon_emission_filter}.

---

### MeteringComputationUsageCarbonEmissionGroupByTag <a name="MeteringComputationUsageCarbonEmissionGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag(
  key: str = None,
  namespace: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#key MeteringComputationUsageCarbonEmission#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#namespace MeteringComputationUsageCarbonEmission#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#value MeteringComputationUsageCarbonEmission#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#key MeteringComputationUsageCarbonEmission#key}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#namespace MeteringComputationUsageCarbonEmission#namespace}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#value MeteringComputationUsageCarbonEmission#value}.

---

### MeteringComputationUsageCarbonEmissionItems <a name="MeteringComputationUsageCarbonEmissionItems" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems()
```


### MeteringComputationUsageCarbonEmissionItemsTags <a name="MeteringComputationUsageCarbonEmissionItemsTags" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags()
```


### MeteringComputationUsageCarbonEmissionTimeouts <a name="MeteringComputationUsageCarbonEmissionTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#create MeteringComputationUsageCarbonEmission#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#delete MeteringComputationUsageCarbonEmission#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#update MeteringComputationUsageCarbonEmission#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#create MeteringComputationUsageCarbonEmission#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#delete MeteringComputationUsageCarbonEmission#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emission#update MeteringComputationUsageCarbonEmission#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationUsageCarbonEmissionGroupByTagList <a name="MeteringComputationUsageCarbonEmissionGroupByTagList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MeteringComputationUsageCarbonEmissionGroupByTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MeteringComputationUsageCarbonEmissionGroupByTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>]]

---


### MeteringComputationUsageCarbonEmissionGroupByTagOutputReference <a name="MeteringComputationUsageCarbonEmissionGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MeteringComputationUsageCarbonEmissionGroupByTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionGroupByTag">MeteringComputationUsageCarbonEmissionGroupByTag</a>]

---


### MeteringComputationUsageCarbonEmissionItemsList <a name="MeteringComputationUsageCarbonEmissionItemsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MeteringComputationUsageCarbonEmissionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MeteringComputationUsageCarbonEmissionItemsOutputReference <a name="MeteringComputationUsageCarbonEmissionItemsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.ad">ad</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentName">compartment_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentPath">compartment_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.computedCarbonEmission">computed_carbon_emission</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.emissionCalculationMethod">emission_calculation_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.platform">platform</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuName">sku_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuPartNumber">sku_part_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tags">tags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList">MeteringComputationUsageCarbonEmissionItemsTagsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantName">tenant_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageEnded">time_usage_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageStarted">time_usage_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems">MeteringComputationUsageCarbonEmissionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ad`<sup>Required</sup> <a name="ad" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.ad"></a>

```python
ad: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `compartment_name`<sup>Required</sup> <a name="compartment_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentName"></a>

```python
compartment_name: str
```

- *Type:* str

---

##### `compartment_path`<sup>Required</sup> <a name="compartment_path" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.compartmentPath"></a>

```python
compartment_path: str
```

- *Type:* str

---

##### `computed_carbon_emission`<sup>Required</sup> <a name="computed_carbon_emission" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.computedCarbonEmission"></a>

```python
computed_carbon_emission: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `emission_calculation_method`<sup>Required</sup> <a name="emission_calculation_method" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.emissionCalculationMethod"></a>

```python
emission_calculation_method: str
```

- *Type:* str

---

##### `platform`<sup>Required</sup> <a name="platform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.platform"></a>

```python
platform: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `sku_name`<sup>Required</sup> <a name="sku_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuName"></a>

```python
sku_name: str
```

- *Type:* str

---

##### `sku_part_number`<sup>Required</sup> <a name="sku_part_number" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.skuPartNumber"></a>

```python
sku_part_number: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tags`<sup>Required</sup> <a name="tags" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tags"></a>

```python
tags: MeteringComputationUsageCarbonEmissionItemsTagsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList">MeteringComputationUsageCarbonEmissionItemsTagsList</a>

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `tenant_name`<sup>Required</sup> <a name="tenant_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.tenantName"></a>

```python
tenant_name: str
```

- *Type:* str

---

##### `time_usage_ended`<sup>Required</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageEnded"></a>

```python
time_usage_ended: str
```

- *Type:* str

---

##### `time_usage_started`<sup>Required</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.timeUsageStarted"></a>

```python
time_usage_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsOutputReference.property.internalValue"></a>

```python
internal_value: MeteringComputationUsageCarbonEmissionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItems">MeteringComputationUsageCarbonEmissionItems</a>

---


### MeteringComputationUsageCarbonEmissionItemsTagsList <a name="MeteringComputationUsageCarbonEmissionItemsTagsList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MeteringComputationUsageCarbonEmissionItemsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MeteringComputationUsageCarbonEmissionItemsTagsOutputReference <a name="MeteringComputationUsageCarbonEmissionItemsTagsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags">MeteringComputationUsageCarbonEmissionItemsTags</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTagsOutputReference.property.internalValue"></a>

```python
internal_value: MeteringComputationUsageCarbonEmissionItemsTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionItemsTags">MeteringComputationUsageCarbonEmissionItemsTags</a>

---


### MeteringComputationUsageCarbonEmissionTimeoutsOutputReference <a name="MeteringComputationUsageCarbonEmissionTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emission

meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MeteringComputationUsageCarbonEmissionTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmission.MeteringComputationUsageCarbonEmissionTimeouts">MeteringComputationUsageCarbonEmissionTimeouts</a>]

---



