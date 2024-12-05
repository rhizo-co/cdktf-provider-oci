# `meteringComputationQuery` Submodule <a name="`meteringComputationQuery` Submodule" id="rhizo-co-terraform-provider-oci.meteringComputationQuery"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MeteringComputationQuery <a name="MeteringComputationQuery" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query oci_metering_computation_query}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQuery(
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
  query_definition: MeteringComputationQueryQueryDefinition,
  id: str = None,
  timeouts: MeteringComputationQueryTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_id MeteringComputationQuery#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.queryDefinition">query_definition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a></code> | query_definition block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#id MeteringComputationQuery#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_id MeteringComputationQuery#compartment_id}.

---

##### `query_definition`<sup>Required</sup> <a name="query_definition" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.queryDefinition"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a>

query_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#query_definition MeteringComputationQuery#query_definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#id MeteringComputationQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#timeouts MeteringComputationQuery#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putQueryDefinition">put_query_definition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_query_definition` <a name="put_query_definition" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putQueryDefinition"></a>

```python
def put_query_definition(
  cost_analysis_ui: MeteringComputationQueryQueryDefinitionCostAnalysisUi,
  display_name: str,
  report_query: MeteringComputationQueryQueryDefinitionReportQuery,
  version: typing.Union[int, float]
) -> None
```

###### `cost_analysis_ui`<sup>Required</sup> <a name="cost_analysis_ui" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putQueryDefinition.parameter.costAnalysisUi"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a>

cost_analysis_ui block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#cost_analysis_ui MeteringComputationQuery#cost_analysis_ui}

---

###### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putQueryDefinition.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#display_name MeteringComputationQuery#display_name}.

---

###### `report_query`<sup>Required</sup> <a name="report_query" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putQueryDefinition.parameter.reportQuery"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a>

report_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#report_query MeteringComputationQuery#report_query}

---

###### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putQueryDefinition.parameter.version"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#version MeteringComputationQuery#version}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#create MeteringComputationQuery#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#delete MeteringComputationQuery#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#update MeteringComputationQuery#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MeteringComputationQuery resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQuery.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQuery.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQuery.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQuery.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MeteringComputationQuery resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MeteringComputationQuery to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MeteringComputationQuery that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MeteringComputationQuery to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.queryDefinition">query_definition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference">MeteringComputationQueryQueryDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference">MeteringComputationQueryTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.queryDefinitionInput">query_definition_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `query_definition`<sup>Required</sup> <a name="query_definition" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.queryDefinition"></a>

```python
query_definition: MeteringComputationQueryQueryDefinitionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference">MeteringComputationQueryQueryDefinitionOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.timeouts"></a>

```python
timeouts: MeteringComputationQueryTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference">MeteringComputationQueryTimeoutsOutputReference</a>

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `query_definition_input`<sup>Optional</sup> <a name="query_definition_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.queryDefinitionInput"></a>

```python
query_definition_input: MeteringComputationQueryQueryDefinition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MeteringComputationQueryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQuery.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MeteringComputationQueryConfig <a name="MeteringComputationQueryConfig" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQueryConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  query_definition: MeteringComputationQueryQueryDefinition,
  id: str = None,
  timeouts: MeteringComputationQueryTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_id MeteringComputationQuery#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.queryDefinition">query_definition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a></code> | query_definition block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#id MeteringComputationQuery#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_id MeteringComputationQuery#compartment_id}.

---

##### `query_definition`<sup>Required</sup> <a name="query_definition" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.queryDefinition"></a>

```python
query_definition: MeteringComputationQueryQueryDefinition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a>

query_definition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#query_definition MeteringComputationQuery#query_definition}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#id MeteringComputationQuery#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryConfig.property.timeouts"></a>

```python
timeouts: MeteringComputationQueryTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#timeouts MeteringComputationQuery#timeouts}

---

### MeteringComputationQueryQueryDefinition <a name="MeteringComputationQueryQueryDefinition" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQueryQueryDefinition(
  cost_analysis_ui: MeteringComputationQueryQueryDefinitionCostAnalysisUi,
  display_name: str,
  report_query: MeteringComputationQueryQueryDefinitionReportQuery,
  version: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.costAnalysisUi">cost_analysis_ui</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a></code> | cost_analysis_ui block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#display_name MeteringComputationQuery#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.reportQuery">report_query</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a></code> | report_query block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.version">version</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#version MeteringComputationQuery#version}. |

---

##### `cost_analysis_ui`<sup>Required</sup> <a name="cost_analysis_ui" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.costAnalysisUi"></a>

```python
cost_analysis_ui: MeteringComputationQueryQueryDefinitionCostAnalysisUi
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a>

cost_analysis_ui block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#cost_analysis_ui MeteringComputationQuery#cost_analysis_ui}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#display_name MeteringComputationQuery#display_name}.

---

##### `report_query`<sup>Required</sup> <a name="report_query" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.reportQuery"></a>

```python
report_query: MeteringComputationQueryQueryDefinitionReportQuery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a>

report_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#report_query MeteringComputationQuery#report_query}

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#version MeteringComputationQuery#version}.

---

### MeteringComputationQueryQueryDefinitionCostAnalysisUi <a name="MeteringComputationQueryQueryDefinitionCostAnalysisUi" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi(
  graph: str = None,
  is_cumulative_graph: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.property.graph">graph</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#graph MeteringComputationQuery#graph}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.property.isCumulativeGraph">is_cumulative_graph</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#is_cumulative_graph MeteringComputationQuery#is_cumulative_graph}. |

---

##### `graph`<sup>Optional</sup> <a name="graph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.property.graph"></a>

```python
graph: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#graph MeteringComputationQuery#graph}.

---

##### `is_cumulative_graph`<sup>Optional</sup> <a name="is_cumulative_graph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi.property.isCumulativeGraph"></a>

```python
is_cumulative_graph: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#is_cumulative_graph MeteringComputationQuery#is_cumulative_graph}.

---

### MeteringComputationQueryQueryDefinitionReportQuery <a name="MeteringComputationQueryQueryDefinitionReportQuery" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery(
  granularity: str,
  tenant_id: str,
  compartment_depth: typing.Union[int, float] = None,
  date_range_name: str = None,
  filter: str = None,
  forecast: MeteringComputationQueryQueryDefinitionReportQueryForecast = None,
  group_by: typing.List[str] = None,
  group_by_tag: typing.Union[IResolvable, typing.List[MeteringComputationQueryQueryDefinitionReportQueryGroupByTag]] = None,
  is_aggregate_by_time: typing.Union[bool, IResolvable] = None,
  query_type: str = None,
  time_usage_ended: str = None,
  time_usage_started: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.granularity">granularity</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#granularity MeteringComputationQuery#granularity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.tenantId">tenant_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#tenant_id MeteringComputationQuery#tenant_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.compartmentDepth">compartment_depth</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_depth MeteringComputationQuery#compartment_depth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.dateRangeName">date_range_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#date_range_name MeteringComputationQuery#date_range_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.filter">filter</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#filter MeteringComputationQuery#filter}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.forecast">forecast</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a></code> | forecast block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#group_by MeteringComputationQuery#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.groupByTag">group_by_tag</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>]]</code> | group_by_tag block. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.isAggregateByTime">is_aggregate_by_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#is_aggregate_by_time MeteringComputationQuery#is_aggregate_by_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.queryType">query_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#query_type MeteringComputationQuery#query_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.timeUsageEnded">time_usage_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_usage_ended MeteringComputationQuery#time_usage_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.timeUsageStarted">time_usage_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_usage_started MeteringComputationQuery#time_usage_started}. |

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#granularity MeteringComputationQuery#granularity}.

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#tenant_id MeteringComputationQuery#tenant_id}.

---

##### `compartment_depth`<sup>Optional</sup> <a name="compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.compartmentDepth"></a>

```python
compartment_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_depth MeteringComputationQuery#compartment_depth}.

---

##### `date_range_name`<sup>Optional</sup> <a name="date_range_name" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.dateRangeName"></a>

```python
date_range_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#date_range_name MeteringComputationQuery#date_range_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.filter"></a>

```python
filter: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#filter MeteringComputationQuery#filter}.

---

##### `forecast`<sup>Optional</sup> <a name="forecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.forecast"></a>

```python
forecast: MeteringComputationQueryQueryDefinitionReportQueryForecast
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a>

forecast block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#forecast MeteringComputationQuery#forecast}

---

##### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#group_by MeteringComputationQuery#group_by}.

---

##### `group_by_tag`<sup>Optional</sup> <a name="group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.groupByTag"></a>

```python
group_by_tag: typing.Union[IResolvable, typing.List[MeteringComputationQueryQueryDefinitionReportQueryGroupByTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>]]

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#group_by_tag MeteringComputationQuery#group_by_tag}

---

##### `is_aggregate_by_time`<sup>Optional</sup> <a name="is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.isAggregateByTime"></a>

```python
is_aggregate_by_time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#is_aggregate_by_time MeteringComputationQuery#is_aggregate_by_time}.

---

##### `query_type`<sup>Optional</sup> <a name="query_type" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.queryType"></a>

```python
query_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#query_type MeteringComputationQuery#query_type}.

---

##### `time_usage_ended`<sup>Optional</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.timeUsageEnded"></a>

```python
time_usage_ended: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_usage_ended MeteringComputationQuery#time_usage_ended}.

---

##### `time_usage_started`<sup>Optional</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery.property.timeUsageStarted"></a>

```python
time_usage_started: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_usage_started MeteringComputationQuery#time_usage_started}.

---

### MeteringComputationQueryQueryDefinitionReportQueryForecast <a name="MeteringComputationQueryQueryDefinitionReportQueryForecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast(
  time_forecast_ended: str,
  forecast_type: str = None,
  time_forecast_started: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.timeForecastEnded">time_forecast_ended</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_forecast_ended MeteringComputationQuery#time_forecast_ended}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.forecastType">forecast_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#forecast_type MeteringComputationQuery#forecast_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.timeForecastStarted">time_forecast_started</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_forecast_started MeteringComputationQuery#time_forecast_started}. |

---

##### `time_forecast_ended`<sup>Required</sup> <a name="time_forecast_ended" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.timeForecastEnded"></a>

```python
time_forecast_ended: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_forecast_ended MeteringComputationQuery#time_forecast_ended}.

---

##### `forecast_type`<sup>Optional</sup> <a name="forecast_type" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.forecastType"></a>

```python
forecast_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#forecast_type MeteringComputationQuery#forecast_type}.

---

##### `time_forecast_started`<sup>Optional</sup> <a name="time_forecast_started" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast.property.timeForecastStarted"></a>

```python
time_forecast_started: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_forecast_started MeteringComputationQuery#time_forecast_started}.

---

### MeteringComputationQueryQueryDefinitionReportQueryGroupByTag <a name="MeteringComputationQueryQueryDefinitionReportQueryGroupByTag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag(
  key: str = None,
  namespace: str = None,
  value: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.key">key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#key MeteringComputationQuery#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.namespace">namespace</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#namespace MeteringComputationQuery#namespace}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.value">value</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#value MeteringComputationQuery#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.key"></a>

```python
key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#key MeteringComputationQuery#key}.

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#namespace MeteringComputationQuery#namespace}.

---

##### `value`<sup>Optional</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag.property.value"></a>

```python
value: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#value MeteringComputationQuery#value}.

---

### MeteringComputationQueryTimeouts <a name="MeteringComputationQueryTimeouts" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQueryTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#create MeteringComputationQuery#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#delete MeteringComputationQuery#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#update MeteringComputationQuery#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#create MeteringComputationQuery#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#delete MeteringComputationQuery#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#update MeteringComputationQuery#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference <a name="MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resetGraph">reset_graph</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resetIsCumulativeGraph">reset_is_cumulative_graph</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_graph` <a name="reset_graph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resetGraph"></a>

```python
def reset_graph() -> None
```

##### `reset_is_cumulative_graph` <a name="reset_is_cumulative_graph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.resetIsCumulativeGraph"></a>

```python
def reset_is_cumulative_graph() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graphInput">graph_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraphInput">is_cumulative_graph_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph">graph</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph">is_cumulative_graph</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `graph_input`<sup>Optional</sup> <a name="graph_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graphInput"></a>

```python
graph_input: str
```

- *Type:* str

---

##### `is_cumulative_graph_input`<sup>Optional</sup> <a name="is_cumulative_graph_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraphInput"></a>

```python
is_cumulative_graph_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `graph`<sup>Required</sup> <a name="graph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.graph"></a>

```python
graph: str
```

- *Type:* str

---

##### `is_cumulative_graph`<sup>Required</sup> <a name="is_cumulative_graph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.isCumulativeGraph"></a>

```python
is_cumulative_graph: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference.property.internalValue"></a>

```python
internal_value: MeteringComputationQueryQueryDefinitionCostAnalysisUi
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a>

---


### MeteringComputationQueryQueryDefinitionOutputReference <a name="MeteringComputationQueryQueryDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putCostAnalysisUi">put_cost_analysis_ui</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery">put_report_query</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cost_analysis_ui` <a name="put_cost_analysis_ui" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putCostAnalysisUi"></a>

```python
def put_cost_analysis_ui(
  graph: str = None,
  is_cumulative_graph: typing.Union[bool, IResolvable] = None
) -> None
```

###### `graph`<sup>Optional</sup> <a name="graph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putCostAnalysisUi.parameter.graph"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#graph MeteringComputationQuery#graph}.

---

###### `is_cumulative_graph`<sup>Optional</sup> <a name="is_cumulative_graph" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putCostAnalysisUi.parameter.isCumulativeGraph"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#is_cumulative_graph MeteringComputationQuery#is_cumulative_graph}.

---

##### `put_report_query` <a name="put_report_query" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery"></a>

```python
def put_report_query(
  granularity: str,
  tenant_id: str,
  compartment_depth: typing.Union[int, float] = None,
  date_range_name: str = None,
  filter: str = None,
  forecast: MeteringComputationQueryQueryDefinitionReportQueryForecast = None,
  group_by: typing.List[str] = None,
  group_by_tag: typing.Union[IResolvable, typing.List[MeteringComputationQueryQueryDefinitionReportQueryGroupByTag]] = None,
  is_aggregate_by_time: typing.Union[bool, IResolvable] = None,
  query_type: str = None,
  time_usage_ended: str = None,
  time_usage_started: str = None
) -> None
```

###### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery.parameter.granularity"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#granularity MeteringComputationQuery#granularity}.

---

###### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery.parameter.tenantId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#tenant_id MeteringComputationQuery#tenant_id}.

---

###### `compartment_depth`<sup>Optional</sup> <a name="compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery.parameter.compartmentDepth"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#compartment_depth MeteringComputationQuery#compartment_depth}.

---

###### `date_range_name`<sup>Optional</sup> <a name="date_range_name" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery.parameter.dateRangeName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#date_range_name MeteringComputationQuery#date_range_name}.

---

###### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery.parameter.filter"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#filter MeteringComputationQuery#filter}.

---

###### `forecast`<sup>Optional</sup> <a name="forecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery.parameter.forecast"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a>

forecast block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#forecast MeteringComputationQuery#forecast}

---

###### `group_by`<sup>Optional</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery.parameter.groupBy"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#group_by MeteringComputationQuery#group_by}.

---

###### `group_by_tag`<sup>Optional</sup> <a name="group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery.parameter.groupByTag"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>]]

group_by_tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#group_by_tag MeteringComputationQuery#group_by_tag}

---

###### `is_aggregate_by_time`<sup>Optional</sup> <a name="is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery.parameter.isAggregateByTime"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#is_aggregate_by_time MeteringComputationQuery#is_aggregate_by_time}.

---

###### `query_type`<sup>Optional</sup> <a name="query_type" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery.parameter.queryType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#query_type MeteringComputationQuery#query_type}.

---

###### `time_usage_ended`<sup>Optional</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery.parameter.timeUsageEnded"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_usage_ended MeteringComputationQuery#time_usage_ended}.

---

###### `time_usage_started`<sup>Optional</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.putReportQuery.parameter.timeUsageStarted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_usage_started MeteringComputationQuery#time_usage_started}.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUi">cost_analysis_ui</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference">MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.reportQuery">report_query</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference">MeteringComputationQueryQueryDefinitionReportQueryOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUiInput">cost_analysis_ui_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.reportQueryInput">report_query_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.versionInput">version_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.version">version</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cost_analysis_ui`<sup>Required</sup> <a name="cost_analysis_ui" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUi"></a>

```python
cost_analysis_ui: MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference">MeteringComputationQueryQueryDefinitionCostAnalysisUiOutputReference</a>

---

##### `report_query`<sup>Required</sup> <a name="report_query" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.reportQuery"></a>

```python
report_query: MeteringComputationQueryQueryDefinitionReportQueryOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference">MeteringComputationQueryQueryDefinitionReportQueryOutputReference</a>

---

##### `cost_analysis_ui_input`<sup>Optional</sup> <a name="cost_analysis_ui_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.costAnalysisUiInput"></a>

```python
cost_analysis_ui_input: MeteringComputationQueryQueryDefinitionCostAnalysisUi
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionCostAnalysisUi">MeteringComputationQueryQueryDefinitionCostAnalysisUi</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `report_query_input`<sup>Optional</sup> <a name="report_query_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.reportQueryInput"></a>

```python
report_query_input: MeteringComputationQueryQueryDefinitionReportQuery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a>

---

##### `version_input`<sup>Optional</sup> <a name="version_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.versionInput"></a>

```python
version_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.version"></a>

```python
version: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionOutputReference.property.internalValue"></a>

```python
internal_value: MeteringComputationQueryQueryDefinition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinition">MeteringComputationQueryQueryDefinition</a>

---


### MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference <a name="MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resetForecastType">reset_forecast_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resetTimeForecastStarted">reset_time_forecast_started</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_forecast_type` <a name="reset_forecast_type" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resetForecastType"></a>

```python
def reset_forecast_type() -> None
```

##### `reset_time_forecast_started` <a name="reset_time_forecast_started" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.resetTimeForecastStarted"></a>

```python
def reset_time_forecast_started() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastTypeInput">forecast_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEndedInput">time_forecast_ended_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStartedInput">time_forecast_started_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastType">forecast_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEnded">time_forecast_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStarted">time_forecast_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forecast_type_input`<sup>Optional</sup> <a name="forecast_type_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastTypeInput"></a>

```python
forecast_type_input: str
```

- *Type:* str

---

##### `time_forecast_ended_input`<sup>Optional</sup> <a name="time_forecast_ended_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEndedInput"></a>

```python
time_forecast_ended_input: str
```

- *Type:* str

---

##### `time_forecast_started_input`<sup>Optional</sup> <a name="time_forecast_started_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStartedInput"></a>

```python
time_forecast_started_input: str
```

- *Type:* str

---

##### `forecast_type`<sup>Required</sup> <a name="forecast_type" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.forecastType"></a>

```python
forecast_type: str
```

- *Type:* str

---

##### `time_forecast_ended`<sup>Required</sup> <a name="time_forecast_ended" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastEnded"></a>

```python
time_forecast_ended: str
```

- *Type:* str

---

##### `time_forecast_started`<sup>Required</sup> <a name="time_forecast_started" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.timeForecastStarted"></a>

```python
time_forecast_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference.property.internalValue"></a>

```python
internal_value: MeteringComputationQueryQueryDefinitionReportQueryForecast
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a>

---


### MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList <a name="MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MeteringComputationQueryQueryDefinitionReportQueryGroupByTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>]]

---


### MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference <a name="MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetKey">reset_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetNamespace">reset_namespace</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetValue">reset_value</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_key` <a name="reset_key" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetKey"></a>

```python
def reset_key() -> None
```

##### `reset_namespace` <a name="reset_namespace" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetNamespace"></a>

```python
def reset_namespace() -> None
```

##### `reset_value` <a name="reset_value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.resetValue"></a>

```python
def reset_value() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.keyInput">key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespaceInput">namespace_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `key_input`<sup>Optional</sup> <a name="key_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.keyInput"></a>

```python
key_input: str
```

- *Type:* str

---

##### `namespace_input`<sup>Optional</sup> <a name="namespace_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespaceInput"></a>

```python
namespace_input: str
```

- *Type:* str

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MeteringComputationQueryQueryDefinitionReportQueryGroupByTag]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>]

---


### MeteringComputationQueryQueryDefinitionReportQueryOutputReference <a name="MeteringComputationQueryQueryDefinitionReportQueryOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putForecast">put_forecast</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putGroupByTag">put_group_by_tag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetCompartmentDepth">reset_compartment_depth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetDateRangeName">reset_date_range_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetForecast">reset_forecast</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetGroupBy">reset_group_by</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetGroupByTag">reset_group_by_tag</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetIsAggregateByTime">reset_is_aggregate_by_time</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetQueryType">reset_query_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageEnded">reset_time_usage_ended</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageStarted">reset_time_usage_started</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_forecast` <a name="put_forecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putForecast"></a>

```python
def put_forecast(
  time_forecast_ended: str,
  forecast_type: str = None,
  time_forecast_started: str = None
) -> None
```

###### `time_forecast_ended`<sup>Required</sup> <a name="time_forecast_ended" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putForecast.parameter.timeForecastEnded"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_forecast_ended MeteringComputationQuery#time_forecast_ended}.

---

###### `forecast_type`<sup>Optional</sup> <a name="forecast_type" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putForecast.parameter.forecastType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#forecast_type MeteringComputationQuery#forecast_type}.

---

###### `time_forecast_started`<sup>Optional</sup> <a name="time_forecast_started" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putForecast.parameter.timeForecastStarted"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/metering_computation_query#time_forecast_started MeteringComputationQuery#time_forecast_started}.

---

##### `put_group_by_tag` <a name="put_group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putGroupByTag"></a>

```python
def put_group_by_tag(
  value: typing.Union[IResolvable, typing.List[MeteringComputationQueryQueryDefinitionReportQueryGroupByTag]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.putGroupByTag.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>]]

---

##### `reset_compartment_depth` <a name="reset_compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetCompartmentDepth"></a>

```python
def reset_compartment_depth() -> None
```

##### `reset_date_range_name` <a name="reset_date_range_name" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetDateRangeName"></a>

```python
def reset_date_range_name() -> None
```

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_forecast` <a name="reset_forecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetForecast"></a>

```python
def reset_forecast() -> None
```

##### `reset_group_by` <a name="reset_group_by" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetGroupBy"></a>

```python
def reset_group_by() -> None
```

##### `reset_group_by_tag` <a name="reset_group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetGroupByTag"></a>

```python
def reset_group_by_tag() -> None
```

##### `reset_is_aggregate_by_time` <a name="reset_is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetIsAggregateByTime"></a>

```python
def reset_is_aggregate_by_time() -> None
```

##### `reset_query_type` <a name="reset_query_type" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetQueryType"></a>

```python
def reset_query_type() -> None
```

##### `reset_time_usage_ended` <a name="reset_time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageEnded"></a>

```python
def reset_time_usage_ended() -> None
```

##### `reset_time_usage_started` <a name="reset_time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.resetTimeUsageStarted"></a>

```python
def reset_time_usage_started() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecast">forecast</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference">MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTag">group_by_tag</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList">MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepthInput">compartment_depth_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeNameInput">date_range_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filterInput">filter_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecastInput">forecast_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularityInput">granularity_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByInput">group_by_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTagInput">group_by_tag_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTimeInput">is_aggregate_by_time_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryTypeInput">query_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantIdInput">tenant_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEndedInput">time_usage_ended_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStartedInput">time_usage_started_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth">compartment_depth</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName">date_range_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filter">filter</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularity">granularity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupBy">group_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime">is_aggregate_by_time</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryType">query_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantId">tenant_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded">time_usage_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted">time_usage_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `forecast`<sup>Required</sup> <a name="forecast" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecast"></a>

```python
forecast: MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference">MeteringComputationQueryQueryDefinitionReportQueryForecastOutputReference</a>

---

##### `group_by_tag`<sup>Required</sup> <a name="group_by_tag" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTag"></a>

```python
group_by_tag: MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList">MeteringComputationQueryQueryDefinitionReportQueryGroupByTagList</a>

---

##### `compartment_depth_input`<sup>Optional</sup> <a name="compartment_depth_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepthInput"></a>

```python
compartment_depth_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_range_name_input`<sup>Optional</sup> <a name="date_range_name_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeNameInput"></a>

```python
date_range_name_input: str
```

- *Type:* str

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filterInput"></a>

```python
filter_input: str
```

- *Type:* str

---

##### `forecast_input`<sup>Optional</sup> <a name="forecast_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.forecastInput"></a>

```python
forecast_input: MeteringComputationQueryQueryDefinitionReportQueryForecast
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryForecast">MeteringComputationQueryQueryDefinitionReportQueryForecast</a>

---

##### `granularity_input`<sup>Optional</sup> <a name="granularity_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularityInput"></a>

```python
granularity_input: str
```

- *Type:* str

---

##### `group_by_input`<sup>Optional</sup> <a name="group_by_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByInput"></a>

```python
group_by_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `group_by_tag_input`<sup>Optional</sup> <a name="group_by_tag_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupByTagInput"></a>

```python
group_by_tag_input: typing.Union[IResolvable, typing.List[MeteringComputationQueryQueryDefinitionReportQueryGroupByTag]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryGroupByTag">MeteringComputationQueryQueryDefinitionReportQueryGroupByTag</a>]]

---

##### `is_aggregate_by_time_input`<sup>Optional</sup> <a name="is_aggregate_by_time_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTimeInput"></a>

```python
is_aggregate_by_time_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_type_input`<sup>Optional</sup> <a name="query_type_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryTypeInput"></a>

```python
query_type_input: str
```

- *Type:* str

---

##### `tenant_id_input`<sup>Optional</sup> <a name="tenant_id_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantIdInput"></a>

```python
tenant_id_input: str
```

- *Type:* str

---

##### `time_usage_ended_input`<sup>Optional</sup> <a name="time_usage_ended_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEndedInput"></a>

```python
time_usage_ended_input: str
```

- *Type:* str

---

##### `time_usage_started_input`<sup>Optional</sup> <a name="time_usage_started_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStartedInput"></a>

```python
time_usage_started_input: str
```

- *Type:* str

---

##### `compartment_depth`<sup>Required</sup> <a name="compartment_depth" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.compartmentDepth"></a>

```python
compartment_depth: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_range_name`<sup>Required</sup> <a name="date_range_name" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.dateRangeName"></a>

```python
date_range_name: str
```

- *Type:* str

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.filter"></a>

```python
filter: str
```

- *Type:* str

---

##### `granularity`<sup>Required</sup> <a name="granularity" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.granularity"></a>

```python
granularity: str
```

- *Type:* str

---

##### `group_by`<sup>Required</sup> <a name="group_by" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.groupBy"></a>

```python
group_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `is_aggregate_by_time`<sup>Required</sup> <a name="is_aggregate_by_time" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.isAggregateByTime"></a>

```python
is_aggregate_by_time: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `query_type`<sup>Required</sup> <a name="query_type" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.queryType"></a>

```python
query_type: str
```

- *Type:* str

---

##### `tenant_id`<sup>Required</sup> <a name="tenant_id" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.tenantId"></a>

```python
tenant_id: str
```

- *Type:* str

---

##### `time_usage_ended`<sup>Required</sup> <a name="time_usage_ended" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageEnded"></a>

```python
time_usage_ended: str
```

- *Type:* str

---

##### `time_usage_started`<sup>Required</sup> <a name="time_usage_started" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.timeUsageStarted"></a>

```python
time_usage_started: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQueryOutputReference.property.internalValue"></a>

```python
internal_value: MeteringComputationQueryQueryDefinitionReportQuery
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryQueryDefinitionReportQuery">MeteringComputationQueryQueryDefinitionReportQuery</a>

---


### MeteringComputationQueryTimeoutsOutputReference <a name="MeteringComputationQueryTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import metering_computation_query

meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MeteringComputationQueryTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.meteringComputationQuery.MeteringComputationQueryTimeouts">MeteringComputationQueryTimeouts</a>]

---



