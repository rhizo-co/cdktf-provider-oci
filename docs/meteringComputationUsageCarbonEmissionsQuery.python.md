# `meteringComputationUsageCarbonEmissionsQuery` Submodule <a name="`meteringComputationUsageCarbonEmissionsQuery` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationUsageCarbonEmissionsQuery <a name="MeteringComputationUsageCarbonEmissionsQuery" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query oci_metering_computation_usage_carbon_emissions_query}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  query_definition: MeteringComputationUsageCarbonEmissionsQueryQueryDefinition,
  id: str = None,
  timeouts: MeteringComputationUsageCarbonEmissionsQueryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#compartment_id MeteringComputationUsageCarbonEmissionsQuery#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.queryDefinition">query_definition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a></code> | query_definition block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#id MeteringComputationUsageCarbonEmissionsQuery#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#compartment_id MeteringComputationUsageCarbonEmissionsQuery#compartment_id}.

---

##### `query_definition`<sup>Required</sup> <a name="query_definition" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.queryDefinition"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a>

query_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#query_definition MeteringComputationUsageCarbonEmissionsQuery#query_definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#id MeteringComputationUsageCarbonEmissionsQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#timeouts MeteringComputationUsageCarbonEmissionsQuery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putQueryDefinition">put_query_definition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_query_definition` <a name="put_query_definition" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putQueryDefinition"></a>

```python
def put_query_definition(
  cost_analysis_ui: MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi,
  display_name: str,
  report_query: MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery,
  version: typing.Union[int, float]
) -> None
```

###### `cost_analysis_ui`<sup>Required</sup> <a name="cost_analysis_ui" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putQueryDefinition.parameter.costAnalysisUi"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a>

cost_analysis_ui block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#cost_analysis_ui MeteringComputationUsageCarbonEmissionsQuery#cost_analysis_ui}

---

###### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putQueryDefinition.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#display_name MeteringComputationUsageCarbonEmissionsQuery#display_name}.

---

###### `report_query`<sup>Required</sup> <a name="report_query" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putQueryDefinition.parameter.reportQuery"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a>

report_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#report_query MeteringComputationUsageCarbonEmissionsQuery#report_query}

---

###### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putQueryDefinition.parameter.version"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#version MeteringComputationUsageCarbonEmissionsQuery#version}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#create MeteringComputationUsageCarbonEmissionsQuery#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#delete MeteringComputationUsageCarbonEmissionsQuery#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#update MeteringComputationUsageCarbonEmissionsQuery#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MeteringComputationUsageCarbonEmissionsQuery resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MeteringComputationUsageCarbonEmissionsQuery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MeteringComputationUsageCarbonEmissionsQuery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MeteringComputationUsageCarbonEmissionsQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationUsageCarbonEmissionsQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.queryDefinition">query_definition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference">MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.queryDefinitionInput">query_definition_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `query_definition`<sup>Required</sup> <a name="query_definition" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.queryDefinition"></a>

```python
query_definition: MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.timeouts"></a>

```python
timeouts: MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference">MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `query_definition_input`<sup>Optional</sup> <a name="query_definition_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.queryDefinitionInput"></a>

```python
query_definition_input: MeteringComputationUsageCarbonEmissionsQueryQueryDefinition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MeteringComputationUsageCarbonEmissionsQueryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQuery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationUsageCarbonEmissionsQueryConfig <a name="MeteringComputationUsageCarbonEmissionsQueryConfig" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  query_definition: MeteringComputationUsageCarbonEmissionsQueryQueryDefinition,
  id: str = None,
  timeouts: MeteringComputationUsageCarbonEmissionsQueryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#compartment_id MeteringComputationUsageCarbonEmissionsQuery#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.queryDefinition">query_definition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a></code> | query_definition block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#id MeteringComputationUsageCarbonEmissionsQuery#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#compartment_id MeteringComputationUsageCarbonEmissionsQuery#compartment_id}.

---

##### `query_definition`<sup>Required</sup> <a name="query_definition" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.queryDefinition"></a>

```python
query_definition: MeteringComputationUsageCarbonEmissionsQueryQueryDefinition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a>

query_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#query_definition MeteringComputationUsageCarbonEmissionsQuery#query_definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#id MeteringComputationUsageCarbonEmissionsQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryConfig.property.timeouts"></a>

```python
timeouts: MeteringComputationUsageCarbonEmissionsQueryTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#timeouts MeteringComputationUsageCarbonEmissionsQuery#timeouts}

---

### MeteringComputationUsageCarbonEmissionsQueryQueryDefinition <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition(
  cost_analysis_ui: MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi,
  display_name: str,
  report_query: MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery,
  version: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.costAnalysisUi">cost_analysis_ui</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a></code> | cost_analysis_ui block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#display_name MeteringComputationUsageCarbonEmissionsQuery#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.reportQuery">report_query</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a></code> | report_query block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#version MeteringComputationUsageCarbonEmissionsQuery#version}. |

---

##### `cost_analysis_ui`<sup>Required</sup> <a name="cost_analysis_ui" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.costAnalysisUi"></a>

```python
cost_analysis_ui: MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a>

cost_analysis_ui block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#cost_analysis_ui MeteringComputationUsageCarbonEmissionsQuery#cost_analysis_ui}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#display_name MeteringComputationUsageCarbonEmissionsQuery#display_name}.

---

##### `report_query`<sup>Required</sup> <a name="report_query" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.reportQuery"></a>

```python
report_query: MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a>

report_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#report_query MeteringComputationUsageCarbonEmissionsQuery#report_query}

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#version MeteringComputationUsageCarbonEmissionsQuery#version}.

---

### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi(
  graph: str = None,
  is_cumulative_graph: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi.property.graph">graph</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#graph MeteringComputationUsageCarbonEmissionsQuery#graph}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi.property.isCumulativeGraph">is_cumulative_graph</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#is_cumulative_graph MeteringComputationUsageCarbonEmissionsQuery#is_cumulative_graph}. |

---

##### `graph`<sup>Optional</sup> <a name="graph" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi.property.graph"></a>

```python
graph: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#graph MeteringComputationUsageCarbonEmissionsQuery#graph}.

---

##### `is_cumulative_graph`<sup>Optional</sup> <a name="is_cumulative_graph" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi.property.isCumulativeGraph"></a>

```python
is_cumulative_graph: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#is_cumulative_graph MeteringComputationUsageCarbonEmissionsQuery#is_cumulative_graph}.

---

### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery(
  tenant_id: str,
  compartment_depth: typing.Union[int, float] = None,
  date_range_name: str = None,
  group_by: typing.List[str] = None,
  group_by_tag: typing.Union[IResolvable, typing.List[MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag]] = None,
  is_aggregate_by_time: typing.Union[bool, IResolvable] = None,
  time_usage_ended: str = None,
  time_usage_started: str = None,
  usage_carbon_emissions_query_filter: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#tenant_id MeteringComputationUsageCarbonEmissionsQuery#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.compartmentDepth">compartment_depth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#compartment_depth MeteringComputationUsageCarbonEmissionsQuery#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.dateRangeName">date_range_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#date_range_name MeteringComputationUsageCarbonEmissionsQuery#date_range_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#group_by MeteringComputationUsageCarbonEmissionsQuery#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.groupByTag">group_by_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>]]</code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.isAggregateByTime">is_aggregate_by_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#is_aggregate_by_time MeteringComputationUsageCarbonEmissionsQuery#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.timeUsageEnded">time_usage_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#time_usage_ended MeteringComputationUsageCarbonEmissionsQuery#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.timeUsageStarted">time_usage_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#time_usage_started MeteringComputationUsageCarbonEmissionsQuery#time_usage_started}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.usageCarbonEmissionsQueryFilter">usage_carbon_emissions_query_filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#usage_carbon_emissions_query_filter MeteringComputationUsageCarbonEmissionsQuery#usage_carbon_emissions_query_filter}. |

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#tenant_id MeteringComputationUsageCarbonEmissionsQuery#tenant_id}.

---

##### `compartment_depth`<sup>Optional</sup> <a name="compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.compartmentDepth"></a>

```python
compartment_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#compartment_depth MeteringComputationUsageCarbonEmissionsQuery#compartment_depth}.

---

##### `date_range_name`<sup>Optional</sup> <a name="date_range_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.dateRangeName"></a>

```python
date_range_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#date_range_name MeteringComputationUsageCarbonEmissionsQuery#date_range_name}.

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#group_by MeteringComputationUsageCarbonEmissionsQuery#group_by}.

---

##### `group_by_tag`<sup>Optional</sup> <a name="group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.groupByTag"></a>

```python
group_by_tag: typing.Union[IResolvable, typing.List[MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>]]

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#group_by_tag MeteringComputationUsageCarbonEmissionsQuery#group_by_tag}

---

##### `is_aggregate_by_time`<sup>Optional</sup> <a name="is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.isAggregateByTime"></a>

```python
is_aggregate_by_time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#is_aggregate_by_time MeteringComputationUsageCarbonEmissionsQuery#is_aggregate_by_time}.

---

##### `time_usage_ended`<sup>Optional</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.timeUsageEnded"></a>

```python
time_usage_ended: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#time_usage_ended MeteringComputationUsageCarbonEmissionsQuery#time_usage_ended}.

---

##### `time_usage_started`<sup>Optional</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.timeUsageStarted"></a>

```python
time_usage_started: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#time_usage_started MeteringComputationUsageCarbonEmissionsQuery#time_usage_started}.

---

##### `usage_carbon_emissions_query_filter`<sup>Optional</sup> <a name="usage_carbon_emissions_query_filter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery.property.usageCarbonEmissionsQueryFilter"></a>

```python
usage_carbon_emissions_query_filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#usage_carbon_emissions_query_filter MeteringComputationUsageCarbonEmissionsQuery#usage_carbon_emissions_query_filter}.

---

### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag(
  key: str = None,
  namespace: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#key MeteringComputationUsageCarbonEmissionsQuery#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#namespace MeteringComputationUsageCarbonEmissionsQuery#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#value MeteringComputationUsageCarbonEmissionsQuery#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#key MeteringComputationUsageCarbonEmissionsQuery#key}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#namespace MeteringComputationUsageCarbonEmissionsQuery#namespace}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#value MeteringComputationUsageCarbonEmissionsQuery#value}.

---

### MeteringComputationUsageCarbonEmissionsQueryTimeouts <a name="MeteringComputationUsageCarbonEmissionsQueryTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#create MeteringComputationUsageCarbonEmissionsQuery#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#delete MeteringComputationUsageCarbonEmissionsQuery#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#update MeteringComputationUsageCarbonEmissionsQuery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#create MeteringComputationUsageCarbonEmissionsQuery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#delete MeteringComputationUsageCarbonEmissionsQuery#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#update MeteringComputationUsageCarbonEmissionsQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resetGraph">reset_graph</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resetIsCumulativeGraph">reset_is_cumulative_graph</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_graph` <a name="reset_graph" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resetGraph"></a>

```python
def reset_graph() -> None
```

##### `reset_is_cumulative_graph` <a name="reset_is_cumulative_graph" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.resetIsCumulativeGraph"></a>

```python
def reset_is_cumulative_graph() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.graphInput">graph_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraphInput">is_cumulative_graph_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph">graph</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph">is_cumulative_graph</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `graph_input`<sup>Optional</sup> <a name="graph_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.graphInput"></a>

```python
graph_input: str
```

- *Type:* str

---

##### `is_cumulative_graph_input`<sup>Optional</sup> <a name="is_cumulative_graph_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraphInput"></a>

```python
is_cumulative_graph_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `graph`<sup>Required</sup> <a name="graph" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph"></a>

```python
graph: str
```

- *Type:* str

---

##### `is_cumulative_graph`<sup>Required</sup> <a name="is_cumulative_graph" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph"></a>

```python
is_cumulative_graph: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue"></a>

```python
internal_value: MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a>

---


### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putCostAnalysisUi">put_cost_analysis_ui</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putReportQuery">put_report_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cost_analysis_ui` <a name="put_cost_analysis_ui" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putCostAnalysisUi"></a>

```python
def put_cost_analysis_ui(
  graph: str = None,
  is_cumulative_graph: typing.Union[bool, IResolvable] = None
) -> None
```

###### `graph`<sup>Optional</sup> <a name="graph" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putCostAnalysisUi.parameter.graph"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#graph MeteringComputationUsageCarbonEmissionsQuery#graph}.

---

###### `is_cumulative_graph`<sup>Optional</sup> <a name="is_cumulative_graph" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putCostAnalysisUi.parameter.isCumulativeGraph"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#is_cumulative_graph MeteringComputationUsageCarbonEmissionsQuery#is_cumulative_graph}.

---

##### `put_report_query` <a name="put_report_query" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putReportQuery"></a>

```python
def put_report_query(
  tenant_id: str,
  compartment_depth: typing.Union[int, float] = None,
  date_range_name: str = None,
  group_by: typing.List[str] = None,
  group_by_tag: typing.Union[IResolvable, typing.List[MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag]] = None,
  is_aggregate_by_time: typing.Union[bool, IResolvable] = None,
  time_usage_ended: str = None,
  time_usage_started: str = None,
  usage_carbon_emissions_query_filter: str = None
) -> None
```

###### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putReportQuery.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#tenant_id MeteringComputationUsageCarbonEmissionsQuery#tenant_id}.

---

###### `compartment_depth`<sup>Optional</sup> <a name="compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putReportQuery.parameter.compartmentDepth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#compartment_depth MeteringComputationUsageCarbonEmissionsQuery#compartment_depth}.

---

###### `date_range_name`<sup>Optional</sup> <a name="date_range_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putReportQuery.parameter.dateRangeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#date_range_name MeteringComputationUsageCarbonEmissionsQuery#date_range_name}.

---

###### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putReportQuery.parameter.groupBy"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#group_by MeteringComputationUsageCarbonEmissionsQuery#group_by}.

---

###### `group_by_tag`<sup>Optional</sup> <a name="group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putReportQuery.parameter.groupByTag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>]]

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#group_by_tag MeteringComputationUsageCarbonEmissionsQuery#group_by_tag}

---

###### `is_aggregate_by_time`<sup>Optional</sup> <a name="is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putReportQuery.parameter.isAggregateByTime"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#is_aggregate_by_time MeteringComputationUsageCarbonEmissionsQuery#is_aggregate_by_time}.

---

###### `time_usage_ended`<sup>Optional</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putReportQuery.parameter.timeUsageEnded"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#time_usage_ended MeteringComputationUsageCarbonEmissionsQuery#time_usage_ended}.

---

###### `time_usage_started`<sup>Optional</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putReportQuery.parameter.timeUsageStarted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#time_usage_started MeteringComputationUsageCarbonEmissionsQuery#time_usage_started}.

---

###### `usage_carbon_emissions_query_filter`<sup>Optional</sup> <a name="usage_carbon_emissions_query_filter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.putReportQuery.parameter.usageCarbonEmissionsQueryFilter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_usage_carbon_emissions_query#usage_carbon_emissions_query_filter MeteringComputationUsageCarbonEmissionsQuery#usage_carbon_emissions_query_filter}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.costAnalysisUi">cost_analysis_ui</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.reportQuery">report_query</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.costAnalysisUiInput">cost_analysis_ui_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.reportQueryInput">report_query_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_analysis_ui`<sup>Required</sup> <a name="cost_analysis_ui" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.costAnalysisUi"></a>

```python
cost_analysis_ui: MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUiOutputReference</a>

---

##### `report_query`<sup>Required</sup> <a name="report_query" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.reportQuery"></a>

```python
report_query: MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference</a>

---

##### `cost_analysis_ui_input`<sup>Optional</sup> <a name="cost_analysis_ui_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.costAnalysisUiInput"></a>

```python
cost_analysis_ui_input: MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionCostAnalysisUi</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `report_query_input`<sup>Optional</sup> <a name="report_query_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.reportQueryInput"></a>

```python
report_query_input: MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: MeteringComputationUsageCarbonEmissionsQueryQueryDefinition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinition">MeteringComputationUsageCarbonEmissionsQueryQueryDefinition</a>

---


### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>]]

---


### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>]

---


### MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference <a name="MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.putGroupByTag">put_group_by_tag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetCompartmentDepth">reset_compartment_depth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetDateRangeName">reset_date_range_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetGroupBy">reset_group_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetGroupByTag">reset_group_by_tag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetIsAggregateByTime">reset_is_aggregate_by_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageEnded">reset_time_usage_ended</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageStarted">reset_time_usage_started</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetUsageCarbonEmissionsQueryFilter">reset_usage_carbon_emissions_query_filter</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_group_by_tag` <a name="put_group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.putGroupByTag"></a>

```python
def put_group_by_tag(
  value: typing.Union[IResolvable, typing.List[MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.putGroupByTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>]]

---

##### `reset_compartment_depth` <a name="reset_compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetCompartmentDepth"></a>

```python
def reset_compartment_depth() -> None
```

##### `reset_date_range_name` <a name="reset_date_range_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetDateRangeName"></a>

```python
def reset_date_range_name() -> None
```

##### `reset_group_by` <a name="reset_group_by" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetGroupBy"></a>

```python
def reset_group_by() -> None
```

##### `reset_group_by_tag` <a name="reset_group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetGroupByTag"></a>

```python
def reset_group_by_tag() -> None
```

##### `reset_is_aggregate_by_time` <a name="reset_is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetIsAggregateByTime"></a>

```python
def reset_is_aggregate_by_time() -> None
```

##### `reset_time_usage_ended` <a name="reset_time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageEnded"></a>

```python
def reset_time_usage_ended() -> None
```

##### `reset_time_usage_started` <a name="reset_time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageStarted"></a>

```python
def reset_time_usage_started() -> None
```

##### `reset_usage_carbon_emissions_query_filter` <a name="reset_usage_carbon_emissions_query_filter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.resetUsageCarbonEmissionsQueryFilter"></a>

```python
def reset_usage_carbon_emissions_query_filter() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupByTag">group_by_tag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepthInput">compartment_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.dateRangeNameInput">date_range_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupByInput">group_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupByTagInput">group_by_tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTimeInput">is_aggregate_by_time_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEndedInput">time_usage_ended_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStartedInput">time_usage_started_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.usageCarbonEmissionsQueryFilterInput">usage_carbon_emissions_query_filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth">compartment_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName">date_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime">is_aggregate_by_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded">time_usage_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted">time_usage_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.usageCarbonEmissionsQueryFilter">usage_carbon_emissions_query_filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `group_by_tag`<sup>Required</sup> <a name="group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupByTag"></a>

```python
group_by_tag: MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTagList</a>

---

##### `compartment_depth_input`<sup>Optional</sup> <a name="compartment_depth_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepthInput"></a>

```python
compartment_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_range_name_input`<sup>Optional</sup> <a name="date_range_name_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.dateRangeNameInput"></a>

```python
date_range_name_input: str
```

- *Type:* str

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupByInput"></a>

```python
group_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_by_tag_input`<sup>Optional</sup> <a name="group_by_tag_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupByTagInput"></a>

```python
group_by_tag_input: typing.Union[IResolvable, typing.List[MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryGroupByTag</a>]]

---

##### `is_aggregate_by_time_input`<sup>Optional</sup> <a name="is_aggregate_by_time_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTimeInput"></a>

```python
is_aggregate_by_time_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `time_usage_ended_input`<sup>Optional</sup> <a name="time_usage_ended_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEndedInput"></a>

```python
time_usage_ended_input: str
```

- *Type:* str

---

##### `time_usage_started_input`<sup>Optional</sup> <a name="time_usage_started_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStartedInput"></a>

```python
time_usage_started_input: str
```

- *Type:* str

---

##### `usage_carbon_emissions_query_filter_input`<sup>Optional</sup> <a name="usage_carbon_emissions_query_filter_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.usageCarbonEmissionsQueryFilterInput"></a>

```python
usage_carbon_emissions_query_filter_input: str
```

- *Type:* str

---

##### `compartment_depth`<sup>Required</sup> <a name="compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth"></a>

```python
compartment_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_range_name`<sup>Required</sup> <a name="date_range_name" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName"></a>

```python
date_range_name: str
```

- *Type:* str

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_aggregate_by_time`<sup>Required</sup> <a name="is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime"></a>

```python
is_aggregate_by_time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `time_usage_ended`<sup>Required</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded"></a>

```python
time_usage_ended: str
```

- *Type:* str

---

##### `time_usage_started`<sup>Required</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted"></a>

```python
time_usage_started: str
```

- *Type:* str

---

##### `usage_carbon_emissions_query_filter`<sup>Required</sup> <a name="usage_carbon_emissions_query_filter" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.usageCarbonEmissionsQueryFilter"></a>

```python
usage_carbon_emissions_query_filter: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQueryOutputReference.property.internalValue"></a>

```python
internal_value: MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery">MeteringComputationUsageCarbonEmissionsQueryQueryDefinitionReportQuery</a>

---


### MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference <a name="MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_usage_carbon_emissions_query

meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MeteringComputationUsageCarbonEmissionsQueryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationUsageCarbonEmissionsQuery.MeteringComputationUsageCarbonEmissionsQueryTimeouts">MeteringComputationUsageCarbonEmissionsQueryTimeouts</a>]

---



