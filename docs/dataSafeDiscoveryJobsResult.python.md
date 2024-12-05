# `dataSafeDiscoveryJobsResult` Submodule <a name="`dataSafeDiscoveryJobsResult` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeDiscoveryJobsResult <a name="DataSafeDiscoveryJobsResult" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result oci_data_safe_discovery_jobs_result}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_jobs_result

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  discovery_job_id: str,
  id: str = None,
  timeouts: DataSafeDiscoveryJobsResultTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.discoveryJobId">discovery_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#discovery_job_id DataSafeDiscoveryJobsResult#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#id DataSafeDiscoveryJobsResult#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `discovery_job_id`<sup>Required</sup> <a name="discovery_job_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.discoveryJobId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#discovery_job_id DataSafeDiscoveryJobsResult#discovery_job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#id DataSafeDiscoveryJobsResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#timeouts DataSafeDiscoveryJobsResult#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#create DataSafeDiscoveryJobsResult#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#delete DataSafeDiscoveryJobsResult#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#update DataSafeDiscoveryJobsResult#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeDiscoveryJobsResult resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_jobs_result

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_jobs_result

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_jobs_result

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_jobs_result

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeDiscoveryJobsResult resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeDiscoveryJobsResult to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeDiscoveryJobsResult that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeDiscoveryJobsResult to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.appDefinedChildColumnKeys">app_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.appName">app_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.columnName">column_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dataType">data_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dbDefinedChildColumnKeys">db_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryType">discovery_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.estimatedDataValueCount">estimated_data_value_count</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.isResultApplied">is_result_applied</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.key">key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.modifiedAttributes">modified_attributes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList">DataSafeDiscoveryJobsResultModifiedAttributesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.object">object</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.objectType">object_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.parentColumnKeys">parent_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.plannedAction">planned_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.relationType">relation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sampleDataValues">sample_data_values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.schemaName">schema_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sensitiveColumnkey">sensitive_columnkey</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sensitiveTypeId">sensitive_type_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference">DataSafeDiscoveryJobsResultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryJobIdInput">discovery_job_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryJobId">discovery_job_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `app_defined_child_column_keys`<sup>Required</sup> <a name="app_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.appDefinedChildColumnKeys"></a>

```python
app_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `app_name`<sup>Required</sup> <a name="app_name" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.appName"></a>

```python
app_name: str
```

- *Type:* str

---

##### `column_name`<sup>Required</sup> <a name="column_name" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.columnName"></a>

```python
column_name: str
```

- *Type:* str

---

##### `data_type`<sup>Required</sup> <a name="data_type" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dataType"></a>

```python
data_type: str
```

- *Type:* str

---

##### `db_defined_child_column_keys`<sup>Required</sup> <a name="db_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.dbDefinedChildColumnKeys"></a>

```python
db_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `discovery_type`<sup>Required</sup> <a name="discovery_type" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryType"></a>

```python
discovery_type: str
```

- *Type:* str

---

##### `estimated_data_value_count`<sup>Required</sup> <a name="estimated_data_value_count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.estimatedDataValueCount"></a>

```python
estimated_data_value_count: str
```

- *Type:* str

---

##### `is_result_applied`<sup>Required</sup> <a name="is_result_applied" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.isResultApplied"></a>

```python
is_result_applied: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key`<sup>Required</sup> <a name="key" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.key"></a>

```python
key: str
```

- *Type:* str

---

##### `modified_attributes`<sup>Required</sup> <a name="modified_attributes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.modifiedAttributes"></a>

```python
modified_attributes: DataSafeDiscoveryJobsResultModifiedAttributesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList">DataSafeDiscoveryJobsResultModifiedAttributesList</a>

---

##### `object`<sup>Required</sup> <a name="object" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.object"></a>

```python
object: str
```

- *Type:* str

---

##### `object_type`<sup>Required</sup> <a name="object_type" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.objectType"></a>

```python
object_type: str
```

- *Type:* str

---

##### `parent_column_keys`<sup>Required</sup> <a name="parent_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.parentColumnKeys"></a>

```python
parent_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `planned_action`<sup>Required</sup> <a name="planned_action" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.plannedAction"></a>

```python
planned_action: str
```

- *Type:* str

---

##### `relation_type`<sup>Required</sup> <a name="relation_type" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.relationType"></a>

```python
relation_type: str
```

- *Type:* str

---

##### `sample_data_values`<sup>Required</sup> <a name="sample_data_values" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sampleDataValues"></a>

```python
sample_data_values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `schema_name`<sup>Required</sup> <a name="schema_name" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.schemaName"></a>

```python
schema_name: str
```

- *Type:* str

---

##### `sensitive_columnkey`<sup>Required</sup> <a name="sensitive_columnkey" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sensitiveColumnkey"></a>

```python
sensitive_columnkey: str
```

- *Type:* str

---

##### `sensitive_type_id`<sup>Required</sup> <a name="sensitive_type_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.sensitiveTypeId"></a>

```python
sensitive_type_id: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.timeouts"></a>

```python
timeouts: DataSafeDiscoveryJobsResultTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference">DataSafeDiscoveryJobsResultTimeoutsOutputReference</a>

---

##### `discovery_job_id_input`<sup>Optional</sup> <a name="discovery_job_id_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryJobIdInput"></a>

```python
discovery_job_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeDiscoveryJobsResultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a>]

---

##### `discovery_job_id`<sup>Required</sup> <a name="discovery_job_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.discoveryJobId"></a>

```python
discovery_job_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResult.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeDiscoveryJobsResultConfig <a name="DataSafeDiscoveryJobsResultConfig" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_jobs_result

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  discovery_job_id: str,
  id: str = None,
  timeouts: DataSafeDiscoveryJobsResultTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.discoveryJobId">discovery_job_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#discovery_job_id DataSafeDiscoveryJobsResult#discovery_job_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#id DataSafeDiscoveryJobsResult#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `discovery_job_id`<sup>Required</sup> <a name="discovery_job_id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.discoveryJobId"></a>

```python
discovery_job_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#discovery_job_id DataSafeDiscoveryJobsResult#discovery_job_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#id DataSafeDiscoveryJobsResult#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultConfig.property.timeouts"></a>

```python
timeouts: DataSafeDiscoveryJobsResultTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#timeouts DataSafeDiscoveryJobsResult#timeouts}

---

### DataSafeDiscoveryJobsResultModifiedAttributes <a name="DataSafeDiscoveryJobsResultModifiedAttributes" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_jobs_result

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributes()
```


### DataSafeDiscoveryJobsResultTimeouts <a name="DataSafeDiscoveryJobsResultTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_jobs_result

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#create DataSafeDiscoveryJobsResult#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#delete DataSafeDiscoveryJobsResult#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#update DataSafeDiscoveryJobsResult#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#create DataSafeDiscoveryJobsResult#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#delete DataSafeDiscoveryJobsResult#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_discovery_jobs_result#update DataSafeDiscoveryJobsResult#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeDiscoveryJobsResultModifiedAttributesList <a name="DataSafeDiscoveryJobsResultModifiedAttributesList" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_jobs_result

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeDiscoveryJobsResultModifiedAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSafeDiscoveryJobsResultModifiedAttributesOutputReference <a name="DataSafeDiscoveryJobsResultModifiedAttributesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_jobs_result

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.appDefinedChildColumnKeys">app_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys">db_defined_child_column_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributes">DataSafeDiscoveryJobsResultModifiedAttributes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `app_defined_child_column_keys`<sup>Required</sup> <a name="app_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.appDefinedChildColumnKeys"></a>

```python
app_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `db_defined_child_column_keys`<sup>Required</sup> <a name="db_defined_child_column_keys" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.dbDefinedChildColumnKeys"></a>

```python
db_defined_child_column_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributesOutputReference.property.internalValue"></a>

```python
internal_value: DataSafeDiscoveryJobsResultModifiedAttributes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultModifiedAttributes">DataSafeDiscoveryJobsResultModifiedAttributes</a>

---


### DataSafeDiscoveryJobsResultTimeoutsOutputReference <a name="DataSafeDiscoveryJobsResultTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_discovery_jobs_result

dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeDiscoveryJobsResultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeDiscoveryJobsResult.DataSafeDiscoveryJobsResultTimeouts">DataSafeDiscoveryJobsResultTimeouts</a>]

---



