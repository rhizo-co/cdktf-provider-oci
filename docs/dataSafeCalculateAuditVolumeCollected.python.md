# `dataSafeCalculateAuditVolumeCollected` Submodule <a name="`dataSafeCalculateAuditVolumeCollected` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeCalculateAuditVolumeCollected <a name="DataSafeCalculateAuditVolumeCollected" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected oci_data_safe_calculate_audit_volume_collected}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_calculate_audit_volume_collected

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audit_profile_id: str,
  time_from_month: str,
  id: str = None,
  timeouts: DataSafeCalculateAuditVolumeCollectedTimeouts = None,
  time_to_month: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.auditProfileId">audit_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#audit_profile_id DataSafeCalculateAuditVolumeCollected#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.timeFromMonth">time_from_month</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#time_from_month DataSafeCalculateAuditVolumeCollected#time_from_month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#id DataSafeCalculateAuditVolumeCollected#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.timeToMonth">time_to_month</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#time_to_month DataSafeCalculateAuditVolumeCollected#time_to_month}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_profile_id`<sup>Required</sup> <a name="audit_profile_id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.auditProfileId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#audit_profile_id DataSafeCalculateAuditVolumeCollected#audit_profile_id}.

---

##### `time_from_month`<sup>Required</sup> <a name="time_from_month" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.timeFromMonth"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#time_from_month DataSafeCalculateAuditVolumeCollected#time_from_month}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#id DataSafeCalculateAuditVolumeCollected#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#timeouts DataSafeCalculateAuditVolumeCollected#timeouts}

---

##### `time_to_month`<sup>Optional</sup> <a name="time_to_month" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.Initializer.parameter.timeToMonth"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#time_to_month DataSafeCalculateAuditVolumeCollected#time_to_month}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetTimeToMonth">reset_time_to_month</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#create DataSafeCalculateAuditVolumeCollected#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#delete DataSafeCalculateAuditVolumeCollected#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#update DataSafeCalculateAuditVolumeCollected#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_to_month` <a name="reset_time_to_month" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.resetTimeToMonth"></a>

```python
def reset_time_to_month() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataSafeCalculateAuditVolumeCollected resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_calculate_audit_volume_collected

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_calculate_audit_volume_collected

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_calculate_audit_volume_collected

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_calculate_audit_volume_collected

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataSafeCalculateAuditVolumeCollected resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataSafeCalculateAuditVolumeCollected to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataSafeCalculateAuditVolumeCollected that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeCalculateAuditVolumeCollected to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.collectedAuditVolumes">collected_audit_volumes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList">DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference">DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.auditProfileIdInput">audit_profile_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeFromMonthInput">time_from_month_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeToMonthInput">time_to_month_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.auditProfileId">audit_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeFromMonth">time_from_month</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeToMonth">time_to_month</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `collected_audit_volumes`<sup>Required</sup> <a name="collected_audit_volumes" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.collectedAuditVolumes"></a>

```python
collected_audit_volumes: DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList">DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeouts"></a>

```python
timeouts: DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference">DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference</a>

---

##### `audit_profile_id_input`<sup>Optional</sup> <a name="audit_profile_id_input" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.auditProfileIdInput"></a>

```python
audit_profile_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `time_from_month_input`<sup>Optional</sup> <a name="time_from_month_input" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeFromMonthInput"></a>

```python
time_from_month_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DataSafeCalculateAuditVolumeCollectedTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a>]

---

##### `time_to_month_input`<sup>Optional</sup> <a name="time_to_month_input" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeToMonthInput"></a>

```python
time_to_month_input: str
```

- *Type:* str

---

##### `audit_profile_id`<sup>Required</sup> <a name="audit_profile_id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.auditProfileId"></a>

```python
audit_profile_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `time_from_month`<sup>Required</sup> <a name="time_from_month" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeFromMonth"></a>

```python
time_from_month: str
```

- *Type:* str

---

##### `time_to_month`<sup>Required</sup> <a name="time_to_month" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.timeToMonth"></a>

```python
time_to_month: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollected.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes <a name="DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_calculate_audit_volume_collected

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes()
```


### DataSafeCalculateAuditVolumeCollectedConfig <a name="DataSafeCalculateAuditVolumeCollectedConfig" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_calculate_audit_volume_collected

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audit_profile_id: str,
  time_from_month: str,
  id: str = None,
  timeouts: DataSafeCalculateAuditVolumeCollectedTimeouts = None,
  time_to_month: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.auditProfileId">audit_profile_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#audit_profile_id DataSafeCalculateAuditVolumeCollected#audit_profile_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.timeFromMonth">time_from_month</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#time_from_month DataSafeCalculateAuditVolumeCollected#time_from_month}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#id DataSafeCalculateAuditVolumeCollected#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.timeToMonth">time_to_month</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#time_to_month DataSafeCalculateAuditVolumeCollected#time_to_month}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_profile_id`<sup>Required</sup> <a name="audit_profile_id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.auditProfileId"></a>

```python
audit_profile_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#audit_profile_id DataSafeCalculateAuditVolumeCollected#audit_profile_id}.

---

##### `time_from_month`<sup>Required</sup> <a name="time_from_month" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.timeFromMonth"></a>

```python
time_from_month: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#time_from_month DataSafeCalculateAuditVolumeCollected#time_from_month}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#id DataSafeCalculateAuditVolumeCollected#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.timeouts"></a>

```python
timeouts: DataSafeCalculateAuditVolumeCollectedTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#timeouts DataSafeCalculateAuditVolumeCollected#timeouts}

---

##### `time_to_month`<sup>Optional</sup> <a name="time_to_month" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedConfig.property.timeToMonth"></a>

```python
time_to_month: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#time_to_month DataSafeCalculateAuditVolumeCollected#time_to_month}.

---

### DataSafeCalculateAuditVolumeCollectedTimeouts <a name="DataSafeCalculateAuditVolumeCollectedTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_calculate_audit_volume_collected

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#create DataSafeCalculateAuditVolumeCollected#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#delete DataSafeCalculateAuditVolumeCollected#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#update DataSafeCalculateAuditVolumeCollected#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#create DataSafeCalculateAuditVolumeCollected#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#delete DataSafeCalculateAuditVolumeCollected#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_calculate_audit_volume_collected#update DataSafeCalculateAuditVolumeCollected#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList <a name="DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_calculate_audit_volume_collected

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference <a name="DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_calculate_audit_volume_collected

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.archivedVolume">archived_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.auditProfileId">audit_profile_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.monthInConsideration">month_in_consideration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.onlineVolume">online_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes">DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `archived_volume`<sup>Required</sup> <a name="archived_volume" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.archivedVolume"></a>

```python
archived_volume: str
```

- *Type:* str

---

##### `audit_profile_id`<sup>Required</sup> <a name="audit_profile_id" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.auditProfileId"></a>

```python
audit_profile_id: str
```

- *Type:* str

---

##### `month_in_consideration`<sup>Required</sup> <a name="month_in_consideration" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.monthInConsideration"></a>

```python
month_in_consideration: str
```

- *Type:* str

---

##### `online_volume`<sup>Required</sup> <a name="online_volume" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.onlineVolume"></a>

```python
online_volume: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumesOutputReference.property.internalValue"></a>

```python
internal_value: DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes">DataSafeCalculateAuditVolumeCollectedCollectedAuditVolumes</a>

---


### DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference <a name="DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_safe_calculate_audit_volume_collected

dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataSafeCalculateAuditVolumeCollectedTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataSafeCalculateAuditVolumeCollected.DataSafeCalculateAuditVolumeCollectedTimeouts">DataSafeCalculateAuditVolumeCollectedTimeouts</a>]

---



