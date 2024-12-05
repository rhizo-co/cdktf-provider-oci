# `coreVolumeGroupBackup` Submodule <a name="`coreVolumeGroupBackup` Submodule" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreVolumeGroupBackup <a name="CoreVolumeGroupBackup" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup oci_core_volume_group_backup}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group_backup

coreVolumeGroupBackup.CoreVolumeGroupBackup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  source_details: CoreVolumeGroupBackupSourceDetails = None,
  timeouts: CoreVolumeGroupBackupTimeouts = None,
  type: str = None,
  volume_group_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#compartment_id CoreVolumeGroupBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#defined_tags CoreVolumeGroupBackup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#display_name CoreVolumeGroupBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#freeform_tags CoreVolumeGroupBackup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#id CoreVolumeGroupBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#type CoreVolumeGroupBackup#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.volumeGroupId">volume_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#volume_group_id CoreVolumeGroupBackup#volume_group_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#compartment_id CoreVolumeGroupBackup#compartment_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#defined_tags CoreVolumeGroupBackup#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#display_name CoreVolumeGroupBackup#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#freeform_tags CoreVolumeGroupBackup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#id CoreVolumeGroupBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_details`<sup>Optional</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.sourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#source_details CoreVolumeGroupBackup#source_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#timeouts CoreVolumeGroupBackup#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#type CoreVolumeGroupBackup#type}.

---

##### `volume_group_id`<sup>Optional</sup> <a name="volume_group_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.Initializer.parameter.volumeGroupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#volume_group_id CoreVolumeGroupBackup#volume_group_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putSourceDetails">put_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetSourceDetails">reset_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetType">reset_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetVolumeGroupId">reset_volume_group_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_source_details` <a name="put_source_details" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putSourceDetails"></a>

```python
def put_source_details(
  region: str,
  volume_group_backup_id: str,
  kms_key_id: str = None
) -> None
```

###### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putSourceDetails.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#region CoreVolumeGroupBackup#region}.

---

###### `volume_group_backup_id`<sup>Required</sup> <a name="volume_group_backup_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putSourceDetails.parameter.volumeGroupBackupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#volume_group_backup_id CoreVolumeGroupBackup#volume_group_backup_id}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putSourceDetails.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#kms_key_id CoreVolumeGroupBackup#kms_key_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#create CoreVolumeGroupBackup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#delete CoreVolumeGroupBackup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#update CoreVolumeGroupBackup#update}.

---

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_source_details` <a name="reset_source_details" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetSourceDetails"></a>

```python
def reset_source_details() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetType"></a>

```python
def reset_type() -> None
```

##### `reset_volume_group_id` <a name="reset_volume_group_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.resetVolumeGroupId"></a>

```python
def reset_volume_group_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CoreVolumeGroupBackup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group_backup

coreVolumeGroupBackup.CoreVolumeGroupBackup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group_backup

coreVolumeGroupBackup.CoreVolumeGroupBackup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group_backup

coreVolumeGroupBackup.CoreVolumeGroupBackup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group_backup

coreVolumeGroupBackup.CoreVolumeGroupBackup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CoreVolumeGroupBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CoreVolumeGroupBackup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CoreVolumeGroupBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CoreVolumeGroupBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.expirationTime">expiration_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sizeInGbs">size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sizeInMbs">size_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference">CoreVolumeGroupBackupSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceType">source_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceVolumeGroupBackupId">source_volume_group_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference">CoreVolumeGroupBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeRequestReceived">time_request_received</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.uniqueSizeInGbs">unique_size_in_gbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.uniqueSizeInMbs">unique_size_in_mbs</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.volumeBackupIds">volume_backup_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceDetailsInput">source_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.volumeGroupIdInput">volume_group_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.volumeGroupId">volume_group_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `expiration_time`<sup>Required</sup> <a name="expiration_time" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.expirationTime"></a>

```python
expiration_time: str
```

- *Type:* str

---

##### `size_in_gbs`<sup>Required</sup> <a name="size_in_gbs" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sizeInGbs"></a>

```python
size_in_gbs: str
```

- *Type:* str

---

##### `size_in_mbs`<sup>Required</sup> <a name="size_in_mbs" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sizeInMbs"></a>

```python
size_in_mbs: str
```

- *Type:* str

---

##### `source_details`<sup>Required</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceDetails"></a>

```python
source_details: CoreVolumeGroupBackupSourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference">CoreVolumeGroupBackupSourceDetailsOutputReference</a>

---

##### `source_type`<sup>Required</sup> <a name="source_type" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceType"></a>

```python
source_type: str
```

- *Type:* str

---

##### `source_volume_group_backup_id`<sup>Required</sup> <a name="source_volume_group_backup_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceVolumeGroupBackupId"></a>

```python
source_volume_group_backup_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeouts"></a>

```python
timeouts: CoreVolumeGroupBackupTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference">CoreVolumeGroupBackupTimeoutsOutputReference</a>

---

##### `time_request_received`<sup>Required</sup> <a name="time_request_received" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeRequestReceived"></a>

```python
time_request_received: str
```

- *Type:* str

---

##### `unique_size_in_gbs`<sup>Required</sup> <a name="unique_size_in_gbs" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.uniqueSizeInGbs"></a>

```python
unique_size_in_gbs: str
```

- *Type:* str

---

##### `unique_size_in_mbs`<sup>Required</sup> <a name="unique_size_in_mbs" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.uniqueSizeInMbs"></a>

```python
unique_size_in_mbs: str
```

- *Type:* str

---

##### `volume_backup_ids`<sup>Required</sup> <a name="volume_backup_ids" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.volumeBackupIds"></a>

```python
volume_backup_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `source_details_input`<sup>Optional</sup> <a name="source_details_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.sourceDetailsInput"></a>

```python
source_details_input: CoreVolumeGroupBackupSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CoreVolumeGroupBackupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a>]

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `volume_group_id_input`<sup>Optional</sup> <a name="volume_group_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.volumeGroupIdInput"></a>

```python
volume_group_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `volume_group_id`<sup>Required</sup> <a name="volume_group_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.volumeGroupId"></a>

```python
volume_group_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CoreVolumeGroupBackupConfig <a name="CoreVolumeGroupBackupConfig" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group_backup

coreVolumeGroupBackup.CoreVolumeGroupBackupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  source_details: CoreVolumeGroupBackupSourceDetails = None,
  timeouts: CoreVolumeGroupBackupTimeouts = None,
  type: str = None,
  volume_group_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#compartment_id CoreVolumeGroupBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#defined_tags CoreVolumeGroupBackup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#display_name CoreVolumeGroupBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#freeform_tags CoreVolumeGroupBackup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#id CoreVolumeGroupBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#type CoreVolumeGroupBackup#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.volumeGroupId">volume_group_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#volume_group_id CoreVolumeGroupBackup#volume_group_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#compartment_id CoreVolumeGroupBackup#compartment_id}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#defined_tags CoreVolumeGroupBackup#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#display_name CoreVolumeGroupBackup#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#freeform_tags CoreVolumeGroupBackup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#id CoreVolumeGroupBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `source_details`<sup>Optional</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.sourceDetails"></a>

```python
source_details: CoreVolumeGroupBackupSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#source_details CoreVolumeGroupBackup#source_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.timeouts"></a>

```python
timeouts: CoreVolumeGroupBackupTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#timeouts CoreVolumeGroupBackup#timeouts}

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#type CoreVolumeGroupBackup#type}.

---

##### `volume_group_id`<sup>Optional</sup> <a name="volume_group_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupConfig.property.volumeGroupId"></a>

```python
volume_group_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#volume_group_id CoreVolumeGroupBackup#volume_group_id}.

---

### CoreVolumeGroupBackupSourceDetails <a name="CoreVolumeGroupBackupSourceDetails" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group_backup

coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails(
  region: str,
  volume_group_backup_id: str,
  kms_key_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#region CoreVolumeGroupBackup#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails.property.volumeGroupBackupId">volume_group_backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#volume_group_backup_id CoreVolumeGroupBackup#volume_group_backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#kms_key_id CoreVolumeGroupBackup#kms_key_id}. |

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#region CoreVolumeGroupBackup#region}.

---

##### `volume_group_backup_id`<sup>Required</sup> <a name="volume_group_backup_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails.property.volumeGroupBackupId"></a>

```python
volume_group_backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#volume_group_backup_id CoreVolumeGroupBackup#volume_group_backup_id}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#kms_key_id CoreVolumeGroupBackup#kms_key_id}.

---

### CoreVolumeGroupBackupTimeouts <a name="CoreVolumeGroupBackupTimeouts" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group_backup

coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#create CoreVolumeGroupBackup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#delete CoreVolumeGroupBackup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#update CoreVolumeGroupBackup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#create CoreVolumeGroupBackup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#delete CoreVolumeGroupBackup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_volume_group_backup#update CoreVolumeGroupBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreVolumeGroupBackupSourceDetailsOutputReference <a name="CoreVolumeGroupBackupSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group_backup

coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.volumeGroupBackupIdInput">volume_group_backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.volumeGroupBackupId">volume_group_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `volume_group_backup_id_input`<sup>Optional</sup> <a name="volume_group_backup_id_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.volumeGroupBackupIdInput"></a>

```python
volume_group_backup_id_input: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `volume_group_backup_id`<sup>Required</sup> <a name="volume_group_backup_id" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.volumeGroupBackupId"></a>

```python
volume_group_backup_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: CoreVolumeGroupBackupSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupSourceDetails">CoreVolumeGroupBackupSourceDetails</a>

---


### CoreVolumeGroupBackupTimeoutsOutputReference <a name="CoreVolumeGroupBackupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import core_volume_group_backup

coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CoreVolumeGroupBackupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.coreVolumeGroupBackup.CoreVolumeGroupBackupTimeouts">CoreVolumeGroupBackupTimeouts</a>]

---



