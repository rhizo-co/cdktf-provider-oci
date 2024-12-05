# `databaseAutonomousDatabaseBackup` Submodule <a name="`databaseAutonomousDatabaseBackup` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousDatabaseBackup <a name="DatabaseAutonomousDatabaseBackup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup oci_database_autonomous_database_backup}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_backup

databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_database_id: str,
  backup_destination_details: DatabaseAutonomousDatabaseBackupBackupDestinationDetails = None,
  display_name: str = None,
  id: str = None,
  is_long_term_backup: typing.Union[bool, IResolvable] = None,
  retention_period_in_days: typing.Union[int, float] = None,
  timeouts: DatabaseAutonomousDatabaseBackupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#autonomous_database_id DatabaseAutonomousDatabaseBackup#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.backupDestinationDetails">backup_destination_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails">DatabaseAutonomousDatabaseBackupBackupDestinationDetails</a></code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#display_name DatabaseAutonomousDatabaseBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#id DatabaseAutonomousDatabaseBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.isLongTermBackup">is_long_term_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#is_long_term_backup DatabaseAutonomousDatabaseBackup#is_long_term_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#retention_period_in_days DatabaseAutonomousDatabaseBackup#retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts">DatabaseAutonomousDatabaseBackupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.autonomousDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#autonomous_database_id DatabaseAutonomousDatabaseBackup#autonomous_database_id}.

---

##### `backup_destination_details`<sup>Optional</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.backupDestinationDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails">DatabaseAutonomousDatabaseBackupBackupDestinationDetails</a>

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#backup_destination_details DatabaseAutonomousDatabaseBackup#backup_destination_details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#display_name DatabaseAutonomousDatabaseBackup#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#id DatabaseAutonomousDatabaseBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_long_term_backup`<sup>Optional</sup> <a name="is_long_term_backup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.isLongTermBackup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#is_long_term_backup DatabaseAutonomousDatabaseBackup#is_long_term_backup}.

---

##### `retention_period_in_days`<sup>Optional</sup> <a name="retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.retentionPeriodInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#retention_period_in_days DatabaseAutonomousDatabaseBackup#retention_period_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts">DatabaseAutonomousDatabaseBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#timeouts DatabaseAutonomousDatabaseBackup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.putBackupDestinationDetails">put_backup_destination_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.resetBackupDestinationDetails">reset_backup_destination_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.resetIsLongTermBackup">reset_is_long_term_backup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.resetRetentionPeriodInDays">reset_retention_period_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_backup_destination_details` <a name="put_backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.putBackupDestinationDetails"></a>

```python
def put_backup_destination_details(
  type: str,
  id: str = None,
  internet_proxy: str = None,
  vpc_password: str = None,
  vpc_user: str = None
) -> None
```

###### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.putBackupDestinationDetails.parameter.type"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#type DatabaseAutonomousDatabaseBackup#type}.

---

###### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.putBackupDestinationDetails.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#id DatabaseAutonomousDatabaseBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

###### `internet_proxy`<sup>Optional</sup> <a name="internet_proxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.putBackupDestinationDetails.parameter.internetProxy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#internet_proxy DatabaseAutonomousDatabaseBackup#internet_proxy}.

---

###### `vpc_password`<sup>Optional</sup> <a name="vpc_password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.putBackupDestinationDetails.parameter.vpcPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#vpc_password DatabaseAutonomousDatabaseBackup#vpc_password}.

---

###### `vpc_user`<sup>Optional</sup> <a name="vpc_user" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.putBackupDestinationDetails.parameter.vpcUser"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#vpc_user DatabaseAutonomousDatabaseBackup#vpc_user}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#create DatabaseAutonomousDatabaseBackup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#delete DatabaseAutonomousDatabaseBackup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#update DatabaseAutonomousDatabaseBackup#update}.

---

##### `reset_backup_destination_details` <a name="reset_backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.resetBackupDestinationDetails"></a>

```python
def reset_backup_destination_details() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_long_term_backup` <a name="reset_is_long_term_backup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.resetIsLongTermBackup"></a>

```python
def reset_is_long_term_backup() -> None
```

##### `reset_retention_period_in_days` <a name="reset_retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.resetRetentionPeriodInDays"></a>

```python
def reset_retention_period_in_days() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseAutonomousDatabaseBackup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_backup

databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_backup

databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_backup

databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_backup

databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseAutonomousDatabaseBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseAutonomousDatabaseBackup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseAutonomousDatabaseBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousDatabaseBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.backupDestinationDetails">backup_destination_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference">DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.databaseSizeInTbs">database_size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.isAutomatic">is_automatic</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.isRestorable">is_restorable</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.keyStoreId">key_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.keyStoreWalletName">key_store_wallet_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.sizeInTbs">size_in_tbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.timeAvailableTill">time_available_till</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.timeEnded">time_ended</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference">DatabaseAutonomousDatabaseBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.timeStarted">time_started</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.autonomousDatabaseIdInput">autonomous_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.backupDestinationDetailsInput">backup_destination_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails">DatabaseAutonomousDatabaseBackupBackupDestinationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.isLongTermBackupInput">is_long_term_backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.retentionPeriodInDaysInput">retention_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts">DatabaseAutonomousDatabaseBackupTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.isLongTermBackup">is_long_term_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_destination_details`<sup>Required</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.backupDestinationDetails"></a>

```python
backup_destination_details: DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference">DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_size_in_tbs`<sup>Required</sup> <a name="database_size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.databaseSizeInTbs"></a>

```python
database_size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `is_automatic`<sup>Required</sup> <a name="is_automatic" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.isAutomatic"></a>

```python
is_automatic: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_restorable`<sup>Required</sup> <a name="is_restorable" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.isRestorable"></a>

```python
is_restorable: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `key_store_id`<sup>Required</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

---

##### `key_store_wallet_name`<sup>Required</sup> <a name="key_store_wallet_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.keyStoreWalletName"></a>

```python
key_store_wallet_name: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `size_in_tbs`<sup>Required</sup> <a name="size_in_tbs" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.sizeInTbs"></a>

```python
size_in_tbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_available_till`<sup>Required</sup> <a name="time_available_till" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.timeAvailableTill"></a>

```python
time_available_till: str
```

- *Type:* str

---

##### `time_ended`<sup>Required</sup> <a name="time_ended" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.timeEnded"></a>

```python
time_ended: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.timeouts"></a>

```python
timeouts: DatabaseAutonomousDatabaseBackupTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference">DatabaseAutonomousDatabaseBackupTimeoutsOutputReference</a>

---

##### `time_started`<sup>Required</sup> <a name="time_started" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.timeStarted"></a>

```python
time_started: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `autonomous_database_id_input`<sup>Optional</sup> <a name="autonomous_database_id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.autonomousDatabaseIdInput"></a>

```python
autonomous_database_id_input: str
```

- *Type:* str

---

##### `backup_destination_details_input`<sup>Optional</sup> <a name="backup_destination_details_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.backupDestinationDetailsInput"></a>

```python
backup_destination_details_input: DatabaseAutonomousDatabaseBackupBackupDestinationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails">DatabaseAutonomousDatabaseBackupBackupDestinationDetails</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_long_term_backup_input`<sup>Optional</sup> <a name="is_long_term_backup_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.isLongTermBackupInput"></a>

```python
is_long_term_backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_period_in_days_input`<sup>Optional</sup> <a name="retention_period_in_days_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.retentionPeriodInDaysInput"></a>

```python
retention_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseAutonomousDatabaseBackupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts">DatabaseAutonomousDatabaseBackupTimeouts</a>]

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_long_term_backup`<sup>Required</sup> <a name="is_long_term_backup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.isLongTermBackup"></a>

```python
is_long_term_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `retention_period_in_days`<sup>Required</sup> <a name="retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousDatabaseBackupBackupDestinationDetails <a name="DatabaseAutonomousDatabaseBackupBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_backup

databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails(
  type: str,
  id: str = None,
  internet_proxy: str = None,
  vpc_password: str = None,
  vpc_user: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#type DatabaseAutonomousDatabaseBackup#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#id DatabaseAutonomousDatabaseBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails.property.internetProxy">internet_proxy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#internet_proxy DatabaseAutonomousDatabaseBackup#internet_proxy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails.property.vpcPassword">vpc_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#vpc_password DatabaseAutonomousDatabaseBackup#vpc_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails.property.vpcUser">vpc_user</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#vpc_user DatabaseAutonomousDatabaseBackup#vpc_user}. |

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#type DatabaseAutonomousDatabaseBackup#type}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#id DatabaseAutonomousDatabaseBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `internet_proxy`<sup>Optional</sup> <a name="internet_proxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails.property.internetProxy"></a>

```python
internet_proxy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#internet_proxy DatabaseAutonomousDatabaseBackup#internet_proxy}.

---

##### `vpc_password`<sup>Optional</sup> <a name="vpc_password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails.property.vpcPassword"></a>

```python
vpc_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#vpc_password DatabaseAutonomousDatabaseBackup#vpc_password}.

---

##### `vpc_user`<sup>Optional</sup> <a name="vpc_user" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails.property.vpcUser"></a>

```python
vpc_user: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#vpc_user DatabaseAutonomousDatabaseBackup#vpc_user}.

---

### DatabaseAutonomousDatabaseBackupConfigA <a name="DatabaseAutonomousDatabaseBackupConfigA" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_backup

databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  autonomous_database_id: str,
  backup_destination_details: DatabaseAutonomousDatabaseBackupBackupDestinationDetails = None,
  display_name: str = None,
  id: str = None,
  is_long_term_backup: typing.Union[bool, IResolvable] = None,
  retention_period_in_days: typing.Union[int, float] = None,
  timeouts: DatabaseAutonomousDatabaseBackupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.autonomousDatabaseId">autonomous_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#autonomous_database_id DatabaseAutonomousDatabaseBackup#autonomous_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.backupDestinationDetails">backup_destination_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails">DatabaseAutonomousDatabaseBackupBackupDestinationDetails</a></code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#display_name DatabaseAutonomousDatabaseBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#id DatabaseAutonomousDatabaseBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.isLongTermBackup">is_long_term_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#is_long_term_backup DatabaseAutonomousDatabaseBackup#is_long_term_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.retentionPeriodInDays">retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#retention_period_in_days DatabaseAutonomousDatabaseBackup#retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts">DatabaseAutonomousDatabaseBackupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `autonomous_database_id`<sup>Required</sup> <a name="autonomous_database_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.autonomousDatabaseId"></a>

```python
autonomous_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#autonomous_database_id DatabaseAutonomousDatabaseBackup#autonomous_database_id}.

---

##### `backup_destination_details`<sup>Optional</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.backupDestinationDetails"></a>

```python
backup_destination_details: DatabaseAutonomousDatabaseBackupBackupDestinationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails">DatabaseAutonomousDatabaseBackupBackupDestinationDetails</a>

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#backup_destination_details DatabaseAutonomousDatabaseBackup#backup_destination_details}

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#display_name DatabaseAutonomousDatabaseBackup#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#id DatabaseAutonomousDatabaseBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_long_term_backup`<sup>Optional</sup> <a name="is_long_term_backup" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.isLongTermBackup"></a>

```python
is_long_term_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#is_long_term_backup DatabaseAutonomousDatabaseBackup#is_long_term_backup}.

---

##### `retention_period_in_days`<sup>Optional</sup> <a name="retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.retentionPeriodInDays"></a>

```python
retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#retention_period_in_days DatabaseAutonomousDatabaseBackup#retention_period_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupConfigA.property.timeouts"></a>

```python
timeouts: DatabaseAutonomousDatabaseBackupTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts">DatabaseAutonomousDatabaseBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#timeouts DatabaseAutonomousDatabaseBackup#timeouts}

---

### DatabaseAutonomousDatabaseBackupTimeouts <a name="DatabaseAutonomousDatabaseBackupTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_backup

databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#create DatabaseAutonomousDatabaseBackup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#delete DatabaseAutonomousDatabaseBackup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#update DatabaseAutonomousDatabaseBackup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#create DatabaseAutonomousDatabaseBackup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#delete DatabaseAutonomousDatabaseBackup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_database_backup#update DatabaseAutonomousDatabaseBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference <a name="DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_backup

databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.resetInternetProxy">reset_internet_proxy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.resetVpcPassword">reset_vpc_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.resetVpcUser">reset_vpc_user</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_internet_proxy` <a name="reset_internet_proxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.resetInternetProxy"></a>

```python
def reset_internet_proxy() -> None
```

##### `reset_vpc_password` <a name="reset_vpc_password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.resetVpcPassword"></a>

```python
def reset_vpc_password() -> None
```

##### `reset_vpc_user` <a name="reset_vpc_user" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.resetVpcUser"></a>

```python
def reset_vpc_user() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.internetProxyInput">internet_proxy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.vpcPasswordInput">vpc_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.vpcUserInput">vpc_user_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.internetProxy">internet_proxy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.vpcPassword">vpc_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.vpcUser">vpc_user</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails">DatabaseAutonomousDatabaseBackupBackupDestinationDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `internet_proxy_input`<sup>Optional</sup> <a name="internet_proxy_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.internetProxyInput"></a>

```python
internet_proxy_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `vpc_password_input`<sup>Optional</sup> <a name="vpc_password_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.vpcPasswordInput"></a>

```python
vpc_password_input: str
```

- *Type:* str

---

##### `vpc_user_input`<sup>Optional</sup> <a name="vpc_user_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.vpcUserInput"></a>

```python
vpc_user_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internet_proxy`<sup>Required</sup> <a name="internet_proxy" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.internetProxy"></a>

```python
internet_proxy: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `vpc_password`<sup>Required</sup> <a name="vpc_password" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.vpcPassword"></a>

```python
vpc_password: str
```

- *Type:* str

---

##### `vpc_user`<sup>Required</sup> <a name="vpc_user" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.vpcUser"></a>

```python
vpc_user: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseAutonomousDatabaseBackupBackupDestinationDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupBackupDestinationDetails">DatabaseAutonomousDatabaseBackupBackupDestinationDetails</a>

---


### DatabaseAutonomousDatabaseBackupTimeoutsOutputReference <a name="DatabaseAutonomousDatabaseBackupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_autonomous_database_backup

databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts">DatabaseAutonomousDatabaseBackupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseAutonomousDatabaseBackupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousDatabaseBackup.DatabaseAutonomousDatabaseBackupTimeouts">DatabaseAutonomousDatabaseBackupTimeouts</a>]

---



