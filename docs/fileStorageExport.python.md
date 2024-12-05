# `fileStorageExport` Submodule <a name="`fileStorageExport` Submodule" id="rhizo-co-terraform-provider-oci.fileStorageExport"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FileStorageExport <a name="FileStorageExport" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export oci_file_storage_export}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_export

fileStorageExport.FileStorageExport(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  export_set_id: str,
  file_system_id: str,
  path: str,
  export_options: typing.Union[IResolvable, typing.List[FileStorageExportExportOptions]] = None,
  id: str = None,
  is_idmap_groups_for_sys_auth: typing.Union[bool, IResolvable] = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  locks: typing.Union[IResolvable, typing.List[FileStorageExportLocks]] = None,
  timeouts: FileStorageExportTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.exportSetId">export_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#export_set_id FileStorageExport#export_set_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#file_system_id FileStorageExport#file_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#path FileStorageExport#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.exportOptions">export_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions">FileStorageExportExportOptions</a>]]</code> | export_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#id FileStorageExport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.isIdmapGroupsForSysAuth">is_idmap_groups_for_sys_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#is_idmap_groups_for_sys_auth FileStorageExport#is_idmap_groups_for_sys_auth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#is_lock_override FileStorageExport#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks">FileStorageExportLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts">FileStorageExportTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_set_id`<sup>Required</sup> <a name="export_set_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.exportSetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#export_set_id FileStorageExport#export_set_id}.

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.fileSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#file_system_id FileStorageExport#file_system_id}.

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.path"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#path FileStorageExport#path}.

---

##### `export_options`<sup>Optional</sup> <a name="export_options" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.exportOptions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions">FileStorageExportExportOptions</a>]]

export_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#export_options FileStorageExport#export_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#id FileStorageExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_idmap_groups_for_sys_auth`<sup>Optional</sup> <a name="is_idmap_groups_for_sys_auth" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.isIdmapGroupsForSysAuth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#is_idmap_groups_for_sys_auth FileStorageExport#is_idmap_groups_for_sys_auth}.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.isLockOverride"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#is_lock_override FileStorageExport#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.locks"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks">FileStorageExportLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#locks FileStorageExport#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts">FileStorageExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#timeouts FileStorageExport#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.putExportOptions">put_export_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.putLocks">put_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.resetExportOptions">reset_export_options</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.resetIsIdmapGroupsForSysAuth">reset_is_idmap_groups_for_sys_auth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.resetIsLockOverride">reset_is_lock_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.resetLocks">reset_locks</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_export_options` <a name="put_export_options" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.putExportOptions"></a>

```python
def put_export_options(
  value: typing.Union[IResolvable, typing.List[FileStorageExportExportOptions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.putExportOptions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions">FileStorageExportExportOptions</a>]]

---

##### `put_locks` <a name="put_locks" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.putLocks"></a>

```python
def put_locks(
  value: typing.Union[IResolvable, typing.List[FileStorageExportLocks]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.putLocks.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks">FileStorageExportLocks</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#create FileStorageExport#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#delete FileStorageExport#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#update FileStorageExport#update}.

---

##### `reset_export_options` <a name="reset_export_options" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.resetExportOptions"></a>

```python
def reset_export_options() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_idmap_groups_for_sys_auth` <a name="reset_is_idmap_groups_for_sys_auth" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.resetIsIdmapGroupsForSysAuth"></a>

```python
def reset_is_idmap_groups_for_sys_auth() -> None
```

##### `reset_is_lock_override` <a name="reset_is_lock_override" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.resetIsLockOverride"></a>

```python
def reset_is_lock_override() -> None
```

##### `reset_locks` <a name="reset_locks" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.resetLocks"></a>

```python
def reset_locks() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a FileStorageExport resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_export

fileStorageExport.FileStorageExport.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_export

fileStorageExport.FileStorageExport.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_export

fileStorageExport.FileStorageExport.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_export

fileStorageExport.FileStorageExport.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a FileStorageExport resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the FileStorageExport to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing FileStorageExport that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the FileStorageExport to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.exportOptions">export_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList">FileStorageExportExportOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.locks">locks</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList">FileStorageExportLocksList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference">FileStorageExportTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.exportOptionsInput">export_options_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions">FileStorageExportExportOptions</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.exportSetIdInput">export_set_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.fileSystemIdInput">file_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.isIdmapGroupsForSysAuthInput">is_idmap_groups_for_sys_auth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.isLockOverrideInput">is_lock_override_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.locksInput">locks_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks">FileStorageExportLocks</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.pathInput">path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts">FileStorageExportTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.exportSetId">export_set_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.fileSystemId">file_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.isIdmapGroupsForSysAuth">is_idmap_groups_for_sys_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.path">path</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_options`<sup>Required</sup> <a name="export_options" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.exportOptions"></a>

```python
export_options: FileStorageExportExportOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList">FileStorageExportExportOptionsList</a>

---

##### `locks`<sup>Required</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.locks"></a>

```python
locks: FileStorageExportLocksList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList">FileStorageExportLocksList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.timeouts"></a>

```python
timeouts: FileStorageExportTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference">FileStorageExportTimeoutsOutputReference</a>

---

##### `export_options_input`<sup>Optional</sup> <a name="export_options_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.exportOptionsInput"></a>

```python
export_options_input: typing.Union[IResolvable, typing.List[FileStorageExportExportOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions">FileStorageExportExportOptions</a>]]

---

##### `export_set_id_input`<sup>Optional</sup> <a name="export_set_id_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.exportSetIdInput"></a>

```python
export_set_id_input: str
```

- *Type:* str

---

##### `file_system_id_input`<sup>Optional</sup> <a name="file_system_id_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.fileSystemIdInput"></a>

```python
file_system_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_idmap_groups_for_sys_auth_input`<sup>Optional</sup> <a name="is_idmap_groups_for_sys_auth_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.isIdmapGroupsForSysAuthInput"></a>

```python
is_idmap_groups_for_sys_auth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_lock_override_input`<sup>Optional</sup> <a name="is_lock_override_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.isLockOverrideInput"></a>

```python
is_lock_override_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `locks_input`<sup>Optional</sup> <a name="locks_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.locksInput"></a>

```python
locks_input: typing.Union[IResolvable, typing.List[FileStorageExportLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks">FileStorageExportLocks</a>]]

---

##### `path_input`<sup>Optional</sup> <a name="path_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.pathInput"></a>

```python
path_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, FileStorageExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts">FileStorageExportTimeouts</a>]

---

##### `export_set_id`<sup>Required</sup> <a name="export_set_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.exportSetId"></a>

```python
export_set_id: str
```

- *Type:* str

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_idmap_groups_for_sys_auth`<sup>Required</sup> <a name="is_idmap_groups_for_sys_auth" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.isIdmapGroupsForSysAuth"></a>

```python
is_idmap_groups_for_sys_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_lock_override`<sup>Required</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.path"></a>

```python
path: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExport.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### FileStorageExportConfig <a name="FileStorageExportConfig" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_export

fileStorageExport.FileStorageExportConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  export_set_id: str,
  file_system_id: str,
  path: str,
  export_options: typing.Union[IResolvable, typing.List[FileStorageExportExportOptions]] = None,
  id: str = None,
  is_idmap_groups_for_sys_auth: typing.Union[bool, IResolvable] = None,
  is_lock_override: typing.Union[bool, IResolvable] = None,
  locks: typing.Union[IResolvable, typing.List[FileStorageExportLocks]] = None,
  timeouts: FileStorageExportTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.exportSetId">export_set_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#export_set_id FileStorageExport#export_set_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.fileSystemId">file_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#file_system_id FileStorageExport#file_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.path">path</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#path FileStorageExport#path}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.exportOptions">export_options</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions">FileStorageExportExportOptions</a>]]</code> | export_options block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#id FileStorageExport#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.isIdmapGroupsForSysAuth">is_idmap_groups_for_sys_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#is_idmap_groups_for_sys_auth FileStorageExport#is_idmap_groups_for_sys_auth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.isLockOverride">is_lock_override</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#is_lock_override FileStorageExport#is_lock_override}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.locks">locks</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks">FileStorageExportLocks</a>]]</code> | locks block. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts">FileStorageExportTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `export_set_id`<sup>Required</sup> <a name="export_set_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.exportSetId"></a>

```python
export_set_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#export_set_id FileStorageExport#export_set_id}.

---

##### `file_system_id`<sup>Required</sup> <a name="file_system_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.fileSystemId"></a>

```python
file_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#file_system_id FileStorageExport#file_system_id}.

---

##### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.path"></a>

```python
path: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#path FileStorageExport#path}.

---

##### `export_options`<sup>Optional</sup> <a name="export_options" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.exportOptions"></a>

```python
export_options: typing.Union[IResolvable, typing.List[FileStorageExportExportOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions">FileStorageExportExportOptions</a>]]

export_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#export_options FileStorageExport#export_options}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#id FileStorageExport#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_idmap_groups_for_sys_auth`<sup>Optional</sup> <a name="is_idmap_groups_for_sys_auth" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.isIdmapGroupsForSysAuth"></a>

```python
is_idmap_groups_for_sys_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#is_idmap_groups_for_sys_auth FileStorageExport#is_idmap_groups_for_sys_auth}.

---

##### `is_lock_override`<sup>Optional</sup> <a name="is_lock_override" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.isLockOverride"></a>

```python
is_lock_override: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#is_lock_override FileStorageExport#is_lock_override}.

---

##### `locks`<sup>Optional</sup> <a name="locks" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.locks"></a>

```python
locks: typing.Union[IResolvable, typing.List[FileStorageExportLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks">FileStorageExportLocks</a>]]

locks block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#locks FileStorageExport#locks}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportConfig.property.timeouts"></a>

```python
timeouts: FileStorageExportTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts">FileStorageExportTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#timeouts FileStorageExport#timeouts}

---

### FileStorageExportExportOptions <a name="FileStorageExportExportOptions" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_export

fileStorageExport.FileStorageExportExportOptions(
  source: str,
  access: str = None,
  allowed_auth: typing.List[str] = None,
  anonymous_gid: str = None,
  anonymous_uid: str = None,
  identity_squash: str = None,
  is_anonymous_access_allowed: typing.Union[bool, IResolvable] = None,
  require_privileged_source_port: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#source FileStorageExport#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.access">access</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#access FileStorageExport#access}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.allowedAuth">allowed_auth</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#allowed_auth FileStorageExport#allowed_auth}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.anonymousGid">anonymous_gid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#anonymous_gid FileStorageExport#anonymous_gid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.anonymousUid">anonymous_uid</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#anonymous_uid FileStorageExport#anonymous_uid}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.identitySquash">identity_squash</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#identity_squash FileStorageExport#identity_squash}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.isAnonymousAccessAllowed">is_anonymous_access_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#is_anonymous_access_allowed FileStorageExport#is_anonymous_access_allowed}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.requirePrivilegedSourcePort">require_privileged_source_port</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#require_privileged_source_port FileStorageExport#require_privileged_source_port}. |

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#source FileStorageExport#source}.

---

##### `access`<sup>Optional</sup> <a name="access" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.access"></a>

```python
access: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#access FileStorageExport#access}.

---

##### `allowed_auth`<sup>Optional</sup> <a name="allowed_auth" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.allowedAuth"></a>

```python
allowed_auth: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#allowed_auth FileStorageExport#allowed_auth}.

---

##### `anonymous_gid`<sup>Optional</sup> <a name="anonymous_gid" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.anonymousGid"></a>

```python
anonymous_gid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#anonymous_gid FileStorageExport#anonymous_gid}.

---

##### `anonymous_uid`<sup>Optional</sup> <a name="anonymous_uid" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.anonymousUid"></a>

```python
anonymous_uid: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#anonymous_uid FileStorageExport#anonymous_uid}.

---

##### `identity_squash`<sup>Optional</sup> <a name="identity_squash" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.identitySquash"></a>

```python
identity_squash: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#identity_squash FileStorageExport#identity_squash}.

---

##### `is_anonymous_access_allowed`<sup>Optional</sup> <a name="is_anonymous_access_allowed" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.isAnonymousAccessAllowed"></a>

```python
is_anonymous_access_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#is_anonymous_access_allowed FileStorageExport#is_anonymous_access_allowed}.

---

##### `require_privileged_source_port`<sup>Optional</sup> <a name="require_privileged_source_port" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions.property.requirePrivilegedSourcePort"></a>

```python
require_privileged_source_port: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#require_privileged_source_port FileStorageExport#require_privileged_source_port}.

---

### FileStorageExportLocks <a name="FileStorageExportLocks" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_export

fileStorageExport.FileStorageExportLocks(
  type: str,
  message: str = None,
  related_resource_id: str = None,
  time_created: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#type FileStorageExport#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks.property.message">message</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#message FileStorageExport#message}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#related_resource_id FileStorageExport#related_resource_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks.property.timeCreated">time_created</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#time_created FileStorageExport#time_created}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#type FileStorageExport#type}.

---

##### `message`<sup>Optional</sup> <a name="message" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks.property.message"></a>

```python
message: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#message FileStorageExport#message}.

---

##### `related_resource_id`<sup>Optional</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#related_resource_id FileStorageExport#related_resource_id}.

---

##### `time_created`<sup>Optional</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#time_created FileStorageExport#time_created}.

---

### FileStorageExportTimeouts <a name="FileStorageExportTimeouts" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_export

fileStorageExport.FileStorageExportTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#create FileStorageExport#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#delete FileStorageExport#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#update FileStorageExport#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#create FileStorageExport#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#delete FileStorageExport#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/file_storage_export#update FileStorageExport#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FileStorageExportExportOptionsList <a name="FileStorageExportExportOptionsList" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_export

fileStorageExport.FileStorageExportExportOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FileStorageExportExportOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions">FileStorageExportExportOptions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FileStorageExportExportOptions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions">FileStorageExportExportOptions</a>]]

---


### FileStorageExportExportOptionsOutputReference <a name="FileStorageExportExportOptionsOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_export

fileStorageExport.FileStorageExportExportOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resetAccess">reset_access</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resetAllowedAuth">reset_allowed_auth</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resetAnonymousGid">reset_anonymous_gid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resetAnonymousUid">reset_anonymous_uid</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resetIdentitySquash">reset_identity_squash</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resetIsAnonymousAccessAllowed">reset_is_anonymous_access_allowed</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resetRequirePrivilegedSourcePort">reset_require_privileged_source_port</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_access` <a name="reset_access" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resetAccess"></a>

```python
def reset_access() -> None
```

##### `reset_allowed_auth` <a name="reset_allowed_auth" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resetAllowedAuth"></a>

```python
def reset_allowed_auth() -> None
```

##### `reset_anonymous_gid` <a name="reset_anonymous_gid" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resetAnonymousGid"></a>

```python
def reset_anonymous_gid() -> None
```

##### `reset_anonymous_uid` <a name="reset_anonymous_uid" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resetAnonymousUid"></a>

```python
def reset_anonymous_uid() -> None
```

##### `reset_identity_squash` <a name="reset_identity_squash" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resetIdentitySquash"></a>

```python
def reset_identity_squash() -> None
```

##### `reset_is_anonymous_access_allowed` <a name="reset_is_anonymous_access_allowed" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resetIsAnonymousAccessAllowed"></a>

```python
def reset_is_anonymous_access_allowed() -> None
```

##### `reset_require_privileged_source_port` <a name="reset_require_privileged_source_port" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.resetRequirePrivilegedSourcePort"></a>

```python
def reset_require_privileged_source_port() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.accessInput">access_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.allowedAuthInput">allowed_auth_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.anonymousGidInput">anonymous_gid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.anonymousUidInput">anonymous_uid_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.identitySquashInput">identity_squash_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.isAnonymousAccessAllowedInput">is_anonymous_access_allowed_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.requirePrivilegedSourcePortInput">require_privileged_source_port_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.access">access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.allowedAuth">allowed_auth</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.anonymousGid">anonymous_gid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.anonymousUid">anonymous_uid</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.identitySquash">identity_squash</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.isAnonymousAccessAllowed">is_anonymous_access_allowed</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.requirePrivilegedSourcePort">require_privileged_source_port</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions">FileStorageExportExportOptions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `access_input`<sup>Optional</sup> <a name="access_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.accessInput"></a>

```python
access_input: str
```

- *Type:* str

---

##### `allowed_auth_input`<sup>Optional</sup> <a name="allowed_auth_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.allowedAuthInput"></a>

```python
allowed_auth_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `anonymous_gid_input`<sup>Optional</sup> <a name="anonymous_gid_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.anonymousGidInput"></a>

```python
anonymous_gid_input: str
```

- *Type:* str

---

##### `anonymous_uid_input`<sup>Optional</sup> <a name="anonymous_uid_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.anonymousUidInput"></a>

```python
anonymous_uid_input: str
```

- *Type:* str

---

##### `identity_squash_input`<sup>Optional</sup> <a name="identity_squash_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.identitySquashInput"></a>

```python
identity_squash_input: str
```

- *Type:* str

---

##### `is_anonymous_access_allowed_input`<sup>Optional</sup> <a name="is_anonymous_access_allowed_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.isAnonymousAccessAllowedInput"></a>

```python
is_anonymous_access_allowed_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_privileged_source_port_input`<sup>Optional</sup> <a name="require_privileged_source_port_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.requirePrivilegedSourcePortInput"></a>

```python
require_privileged_source_port_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `access`<sup>Required</sup> <a name="access" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.access"></a>

```python
access: str
```

- *Type:* str

---

##### `allowed_auth`<sup>Required</sup> <a name="allowed_auth" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.allowedAuth"></a>

```python
allowed_auth: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `anonymous_gid`<sup>Required</sup> <a name="anonymous_gid" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.anonymousGid"></a>

```python
anonymous_gid: str
```

- *Type:* str

---

##### `anonymous_uid`<sup>Required</sup> <a name="anonymous_uid" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.anonymousUid"></a>

```python
anonymous_uid: str
```

- *Type:* str

---

##### `identity_squash`<sup>Required</sup> <a name="identity_squash" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.identitySquash"></a>

```python
identity_squash: str
```

- *Type:* str

---

##### `is_anonymous_access_allowed`<sup>Required</sup> <a name="is_anonymous_access_allowed" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.isAnonymousAccessAllowed"></a>

```python
is_anonymous_access_allowed: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_privileged_source_port`<sup>Required</sup> <a name="require_privileged_source_port" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.requirePrivilegedSourcePort"></a>

```python
require_privileged_source_port: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FileStorageExportExportOptions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportExportOptions">FileStorageExportExportOptions</a>]

---


### FileStorageExportLocksList <a name="FileStorageExportLocksList" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_export

fileStorageExport.FileStorageExportLocksList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> FileStorageExportLocksOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks">FileStorageExportLocks</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[FileStorageExportLocks]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks">FileStorageExportLocks</a>]]

---


### FileStorageExportLocksOutputReference <a name="FileStorageExportLocksOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_export

fileStorageExport.FileStorageExportLocksOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.resetMessage">reset_message</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.resetRelatedResourceId">reset_related_resource_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.resetTimeCreated">reset_time_created</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_message` <a name="reset_message" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.resetMessage"></a>

```python
def reset_message() -> None
```

##### `reset_related_resource_id` <a name="reset_related_resource_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.resetRelatedResourceId"></a>

```python
def reset_related_resource_id() -> None
```

##### `reset_time_created` <a name="reset_time_created" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.resetTimeCreated"></a>

```python
def reset_time_created() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.messageInput">message_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.relatedResourceIdInput">related_resource_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.timeCreatedInput">time_created_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.relatedResourceId">related_resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks">FileStorageExportLocks</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `message_input`<sup>Optional</sup> <a name="message_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.messageInput"></a>

```python
message_input: str
```

- *Type:* str

---

##### `related_resource_id_input`<sup>Optional</sup> <a name="related_resource_id_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.relatedResourceIdInput"></a>

```python
related_resource_id_input: str
```

- *Type:* str

---

##### `time_created_input`<sup>Optional</sup> <a name="time_created_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.timeCreatedInput"></a>

```python
time_created_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `related_resource_id`<sup>Required</sup> <a name="related_resource_id" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.relatedResourceId"></a>

```python
related_resource_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocksOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FileStorageExportLocks]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportLocks">FileStorageExportLocks</a>]

---


### FileStorageExportTimeoutsOutputReference <a name="FileStorageExportTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import file_storage_export

fileStorageExport.FileStorageExportTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts">FileStorageExportTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, FileStorageExportTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.fileStorageExport.FileStorageExportTimeouts">FileStorageExportTimeouts</a>]

---



