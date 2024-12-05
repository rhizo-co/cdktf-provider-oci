# `mysqlMysqlBackup` Submodule <a name="`mysqlMysqlBackup` Submodule" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MysqlMysqlBackup <a name="MysqlMysqlBackup" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup oci_mysql_mysql_backup}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackup(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_type: str = None,
  compartment_id: str = None,
  db_system_id: str = None,
  db_system_snapshot_summary: typing.Union[IResolvable, typing.List[MysqlMysqlBackupDbSystemSnapshotSummary]] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  retention_in_days: typing.Union[int, float] = None,
  source_details: MysqlMysqlBackupSourceDetails = None,
  timeouts: MysqlMysqlBackupTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.backupType">backup_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_type MysqlMysqlBackup#backup_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#db_system_id MysqlMysqlBackup#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.dbSystemSnapshotSummary">db_system_snapshot_summary</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>]]</code> | db_system_snapshot_summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#defined_tags MysqlMysqlBackup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#description MysqlMysqlBackup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#freeform_tags MysqlMysqlBackup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#retention_in_days MysqlMysqlBackup#retention_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_type`<sup>Optional</sup> <a name="backup_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.backupType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_type MysqlMysqlBackup#backup_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}.

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.dbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#db_system_id MysqlMysqlBackup#db_system_id}.

---

##### `db_system_snapshot_summary`<sup>Optional</sup> <a name="db_system_snapshot_summary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.dbSystemSnapshotSummary"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>]]

db_system_snapshot_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#db_system_snapshot_summary MysqlMysqlBackup#db_system_snapshot_summary}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#defined_tags MysqlMysqlBackup#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#description MysqlMysqlBackup#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#freeform_tags MysqlMysqlBackup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.retentionInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#retention_in_days MysqlMysqlBackup#retention_in_days}.

---

##### `source_details`<sup>Optional</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.sourceDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#source_details MysqlMysqlBackup#source_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#timeouts MysqlMysqlBackup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putDbSystemSnapshotSummary">put_db_system_snapshot_summary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putSourceDetails">put_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetBackupType">reset_backup_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetCompartmentId">reset_compartment_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDbSystemId">reset_db_system_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDbSystemSnapshotSummary">reset_db_system_snapshot_summary</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetRetentionInDays">reset_retention_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetSourceDetails">reset_source_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_db_system_snapshot_summary` <a name="put_db_system_snapshot_summary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putDbSystemSnapshotSummary"></a>

```python
def put_db_system_snapshot_summary(
  value: typing.Union[IResolvable, typing.List[MysqlMysqlBackupDbSystemSnapshotSummary]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putDbSystemSnapshotSummary.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>]]

---

##### `put_source_details` <a name="put_source_details" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putSourceDetails"></a>

```python
def put_source_details(
  backup_id: str,
  compartment_id: str,
  region: str
) -> None
```

###### `backup_id`<sup>Required</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putSourceDetails.parameter.backupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_id MysqlMysqlBackup#backup_id}.

---

###### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putSourceDetails.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}.

---

###### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putSourceDetails.parameter.region"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#create MysqlMysqlBackup#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#delete MysqlMysqlBackup#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#update MysqlMysqlBackup#update}.

---

##### `reset_backup_type` <a name="reset_backup_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetBackupType"></a>

```python
def reset_backup_type() -> None
```

##### `reset_compartment_id` <a name="reset_compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetCompartmentId"></a>

```python
def reset_compartment_id() -> None
```

##### `reset_db_system_id` <a name="reset_db_system_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDbSystemId"></a>

```python
def reset_db_system_id() -> None
```

##### `reset_db_system_snapshot_summary` <a name="reset_db_system_snapshot_summary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDbSystemSnapshotSummary"></a>

```python
def reset_db_system_snapshot_summary() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_retention_in_days` <a name="reset_retention_in_days" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetRetentionInDays"></a>

```python
def reset_retention_in_days() -> None
```

##### `reset_source_details` <a name="reset_source_details" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetSourceDetails"></a>

```python
def reset_source_details() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a MysqlMysqlBackup resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackup.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackup.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackup.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackup.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a MysqlMysqlBackup resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the MysqlMysqlBackup to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing MysqlMysqlBackup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the MysqlMysqlBackup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupSizeInGbs">backup_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.creationType">creation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshot">db_system_snapshot</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList">MysqlMysqlBackupDbSystemSnapshotList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshotSummary">db_system_snapshot_summary</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList">MysqlMysqlBackupDbSystemSnapshotSummaryList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.immediateSourceBackupId">immediate_source_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.mysqlVersion">mysql_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.originalSourceBackupId">original_source_backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference">MysqlMysqlBackupSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeCopyCreated">time_copy_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference">MysqlMysqlBackupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupTypeInput">backup_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshotSummaryInput">db_system_snapshot_summary_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.retentionInDaysInput">retention_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.sourceDetailsInput">source_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupType">backup_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_size_in_gbs`<sup>Required</sup> <a name="backup_size_in_gbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupSizeInGbs"></a>

```python
backup_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `creation_type`<sup>Required</sup> <a name="creation_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.creationType"></a>

```python
creation_type: str
```

- *Type:* str

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_system_snapshot`<sup>Required</sup> <a name="db_system_snapshot" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshot"></a>

```python
db_system_snapshot: MysqlMysqlBackupDbSystemSnapshotList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList">MysqlMysqlBackupDbSystemSnapshotList</a>

---

##### `db_system_snapshot_summary`<sup>Required</sup> <a name="db_system_snapshot_summary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshotSummary"></a>

```python
db_system_snapshot_summary: MysqlMysqlBackupDbSystemSnapshotSummaryList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList">MysqlMysqlBackupDbSystemSnapshotSummaryList</a>

---

##### `immediate_source_backup_id`<sup>Required</sup> <a name="immediate_source_backup_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.immediateSourceBackupId"></a>

```python
immediate_source_backup_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `mysql_version`<sup>Required</sup> <a name="mysql_version" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.mysqlVersion"></a>

```python
mysql_version: str
```

- *Type:* str

---

##### `original_source_backup_id`<sup>Required</sup> <a name="original_source_backup_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.originalSourceBackupId"></a>

```python
original_source_backup_id: str
```

- *Type:* str

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `source_details`<sup>Required</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.sourceDetails"></a>

```python
source_details: MysqlMysqlBackupSourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference">MysqlMysqlBackupSourceDetailsOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_copy_created`<sup>Required</sup> <a name="time_copy_created" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeCopyCreated"></a>

```python
time_copy_created: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeouts"></a>

```python
timeouts: MysqlMysqlBackupTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference">MysqlMysqlBackupTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `backup_type_input`<sup>Optional</sup> <a name="backup_type_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupTypeInput"></a>

```python
backup_type_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `db_system_snapshot_summary_input`<sup>Optional</sup> <a name="db_system_snapshot_summary_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemSnapshotSummaryInput"></a>

```python
db_system_snapshot_summary_input: typing.Union[IResolvable, typing.List[MysqlMysqlBackupDbSystemSnapshotSummary]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>]]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `retention_in_days_input`<sup>Optional</sup> <a name="retention_in_days_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.retentionInDaysInput"></a>

```python
retention_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `source_details_input`<sup>Optional</sup> <a name="source_details_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.sourceDetailsInput"></a>

```python
source_details_input: MysqlMysqlBackupSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, MysqlMysqlBackupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a>]

---

##### `backup_type`<sup>Required</sup> <a name="backup_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.backupType"></a>

```python
backup_type: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackup.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### MysqlMysqlBackupConfig <a name="MysqlMysqlBackupConfig" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  backup_type: str = None,
  compartment_id: str = None,
  db_system_id: str = None,
  db_system_snapshot_summary: typing.Union[IResolvable, typing.List[MysqlMysqlBackupDbSystemSnapshotSummary]] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  display_name: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  retention_in_days: typing.Union[int, float] = None,
  source_details: MysqlMysqlBackupSourceDetails = None,
  timeouts: MysqlMysqlBackupTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.backupType">backup_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_type MysqlMysqlBackup#backup_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#db_system_id MysqlMysqlBackup#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dbSystemSnapshotSummary">db_system_snapshot_summary</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>]]</code> | db_system_snapshot_summary block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#defined_tags MysqlMysqlBackup#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#description MysqlMysqlBackup#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#freeform_tags MysqlMysqlBackup#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#retention_in_days MysqlMysqlBackup#retention_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.sourceDetails">source_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a></code> | source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `backup_type`<sup>Optional</sup> <a name="backup_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.backupType"></a>

```python
backup_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_type MysqlMysqlBackup#backup_type}.

---

##### `compartment_id`<sup>Optional</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}.

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#db_system_id MysqlMysqlBackup#db_system_id}.

---

##### `db_system_snapshot_summary`<sup>Optional</sup> <a name="db_system_snapshot_summary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.dbSystemSnapshotSummary"></a>

```python
db_system_snapshot_summary: typing.Union[IResolvable, typing.List[MysqlMysqlBackupDbSystemSnapshotSummary]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>]]

db_system_snapshot_summary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#db_system_snapshot_summary MysqlMysqlBackup#db_system_snapshot_summary}

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#defined_tags MysqlMysqlBackup#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#description MysqlMysqlBackup#description}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#freeform_tags MysqlMysqlBackup#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `retention_in_days`<sup>Optional</sup> <a name="retention_in_days" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#retention_in_days MysqlMysqlBackup#retention_in_days}.

---

##### `source_details`<sup>Optional</sup> <a name="source_details" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.sourceDetails"></a>

```python
source_details: MysqlMysqlBackupSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a>

source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#source_details MysqlMysqlBackup#source_details}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupConfig.property.timeouts"></a>

```python
timeouts: MysqlMysqlBackupTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#timeouts MysqlMysqlBackup#timeouts}

---

### MysqlMysqlBackupDbSystemSnapshot <a name="MysqlMysqlBackupDbSystemSnapshot" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshot"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshot.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshot()
```


### MysqlMysqlBackupDbSystemSnapshotBackupPolicy <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicy()
```


### MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy()
```


### MysqlMysqlBackupDbSystemSnapshotDataStorage <a name="MysqlMysqlBackupDbSystemSnapshotDataStorage" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorage()
```


### MysqlMysqlBackupDbSystemSnapshotDeletionPolicy <a name="MysqlMysqlBackupDbSystemSnapshotDeletionPolicy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicy.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicy()
```


### MysqlMysqlBackupDbSystemSnapshotEndpoints <a name="MysqlMysqlBackupDbSystemSnapshotEndpoints" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpoints.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpoints()
```


### MysqlMysqlBackupDbSystemSnapshotMaintenance <a name="MysqlMysqlBackupDbSystemSnapshotMaintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenance.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenance()
```


### MysqlMysqlBackupDbSystemSnapshotSecureConnections <a name="MysqlMysqlBackupDbSystemSnapshotSecureConnections" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnections.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnections()
```


### MysqlMysqlBackupDbSystemSnapshotSummary <a name="MysqlMysqlBackupDbSystemSnapshotSummary" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary(
  display_name: str = None,
  id: str = None,
  region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}. |

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#display_name MysqlMysqlBackup#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#id MysqlMysqlBackup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `region`<sup>Optional</sup> <a name="region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}.

---

### MysqlMysqlBackupSourceDetails <a name="MysqlMysqlBackupSourceDetails" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupSourceDetails(
  backup_id: str,
  compartment_id: str,
  region: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_id MysqlMysqlBackup#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.region">region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}. |

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#backup_id MysqlMysqlBackup#backup_id}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#compartment_id MysqlMysqlBackup#compartment_id}.

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails.property.region"></a>

```python
region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#region MysqlMysqlBackup#region}.

---

### MysqlMysqlBackupTimeouts <a name="MysqlMysqlBackupTimeouts" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#create MysqlMysqlBackup#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#delete MysqlMysqlBackup#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#update MysqlMysqlBackup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#create MysqlMysqlBackup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#delete MysqlMysqlBackup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/mysql_mysql_backup#update MysqlMysqlBackup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MysqlMysqlBackupDbSystemSnapshotBackupPolicyList <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.pitrPolicy">pitr_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList">MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.retentionInDays">retention_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.windowStartTime">window_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicy">MysqlMysqlBackupDbSystemSnapshotBackupPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `pitr_policy`<sup>Required</sup> <a name="pitr_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.pitrPolicy"></a>

```python
pitr_policy: MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList">MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList</a>

---

##### `retention_in_days`<sup>Required</sup> <a name="retention_in_days" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.retentionInDays"></a>

```python
retention_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `window_start_time`<sup>Required</sup> <a name="window_start_time" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.windowStartTime"></a>

```python
window_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlBackupDbSystemSnapshotBackupPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicy">MysqlMysqlBackupDbSystemSnapshotBackupPolicy</a>

---


### MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.isEnabled">is_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy">MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_enabled`<sup>Required</sup> <a name="is_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```python
is_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy">MysqlMysqlBackupDbSystemSnapshotBackupPolicyPitrPolicy</a>

---


### MysqlMysqlBackupDbSystemSnapshotDataStorageList <a name="MysqlMysqlBackupDbSystemSnapshotDataStorageList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.allocatedStorageSizeInGbs">allocated_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeLimitInGbs">data_storage_size_limit_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.isAutoExpandStorageEnabled">is_auto_expand_storage_enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.maxStorageSizeInGbs">max_storage_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorage">MysqlMysqlBackupDbSystemSnapshotDataStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allocated_storage_size_in_gbs`<sup>Required</sup> <a name="allocated_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```python
allocated_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_limit_in_gbs`<sup>Required</sup> <a name="data_storage_size_limit_in_gbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```python
data_storage_size_limit_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_auto_expand_storage_enabled`<sup>Required</sup> <a name="is_auto_expand_storage_enabled" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```python
is_auto_expand_storage_enabled: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `max_storage_size_in_gbs`<sup>Required</sup> <a name="max_storage_size_in_gbs" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```python
max_storage_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlBackupDbSystemSnapshotDataStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorage">MysqlMysqlBackupDbSystemSnapshotDataStorage</a>

---


### MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList <a name="MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.automaticBackupRetention">automatic_backup_retention</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.finalBackup">final_backup</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.isDeleteProtected">is_delete_protected</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicy">MysqlMysqlBackupDbSystemSnapshotDeletionPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `automatic_backup_retention`<sup>Required</sup> <a name="automatic_backup_retention" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```python
automatic_backup_retention: str
```

- *Type:* str

---

##### `final_backup`<sup>Required</sup> <a name="final_backup" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.finalBackup"></a>

```python
final_backup: str
```

- *Type:* str

---

##### `is_delete_protected`<sup>Required</sup> <a name="is_delete_protected" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```python
is_delete_protected: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlBackupDbSystemSnapshotDeletionPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicy">MysqlMysqlBackupDbSystemSnapshotDeletionPolicy</a>

---


### MysqlMysqlBackupDbSystemSnapshotEndpointsList <a name="MysqlMysqlBackupDbSystemSnapshotEndpointsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.modes">modes</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.portX">port_x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.statusDetails">status_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpoints">MysqlMysqlBackupDbSystemSnapshotEndpoints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `modes`<sup>Required</sup> <a name="modes" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.modes"></a>

```python
modes: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_x`<sup>Required</sup> <a name="port_x" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.portX"></a>

```python
port_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `status_details`<sup>Required</sup> <a name="status_details" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.statusDetails"></a>

```python
status_details: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlBackupDbSystemSnapshotEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpoints">MysqlMysqlBackupDbSystemSnapshotEndpoints</a>

---


### MysqlMysqlBackupDbSystemSnapshotList <a name="MysqlMysqlBackupDbSystemSnapshotList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlBackupDbSystemSnapshotOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlBackupDbSystemSnapshotMaintenanceList <a name="MysqlMysqlBackupDbSystemSnapshotMaintenanceList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.windowStartTime">window_start_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenance">MysqlMysqlBackupDbSystemSnapshotMaintenance</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `window_start_time`<sup>Required</sup> <a name="window_start_time" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.windowStartTime"></a>

```python
window_start_time: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlBackupDbSystemSnapshotMaintenance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenance">MysqlMysqlBackupDbSystemSnapshotMaintenance</a>

---


### MysqlMysqlBackupDbSystemSnapshotOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.adminUsername">admin_username</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.backupPolicy">backup_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList">MysqlMysqlBackupDbSystemSnapshotBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.configurationId">configuration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.crashRecovery">crash_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.databaseManagement">database_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.dataStorage">data_storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList">MysqlMysqlBackupDbSystemSnapshotDataStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.deletionPolicy">deletion_policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList">MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList">MysqlMysqlBackupDbSystemSnapshotEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.faultDomain">fault_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.hostnameLabel">hostname_label</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.ipAddress">ip_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.isHighlyAvailable">is_highly_available</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.maintenance">maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList">MysqlMysqlBackupDbSystemSnapshotMaintenanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.mysqlVersion">mysql_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.portX">port_x</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.secureConnections">secure_connections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList">MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.shapeName">shape_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshot">MysqlMysqlBackupDbSystemSnapshot</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `admin_username`<sup>Required</sup> <a name="admin_username" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.adminUsername"></a>

```python
admin_username: str
```

- *Type:* str

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `backup_policy`<sup>Required</sup> <a name="backup_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.backupPolicy"></a>

```python
backup_policy: MysqlMysqlBackupDbSystemSnapshotBackupPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotBackupPolicyList">MysqlMysqlBackupDbSystemSnapshotBackupPolicyList</a>

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `configuration_id`<sup>Required</sup> <a name="configuration_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.configurationId"></a>

```python
configuration_id: str
```

- *Type:* str

---

##### `crash_recovery`<sup>Required</sup> <a name="crash_recovery" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.crashRecovery"></a>

```python
crash_recovery: str
```

- *Type:* str

---

##### `database_management`<sup>Required</sup> <a name="database_management" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.databaseManagement"></a>

```python
database_management: str
```

- *Type:* str

---

##### `data_storage`<sup>Required</sup> <a name="data_storage" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.dataStorage"></a>

```python
data_storage: MysqlMysqlBackupDbSystemSnapshotDataStorageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDataStorageList">MysqlMysqlBackupDbSystemSnapshotDataStorageList</a>

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.deletionPolicy"></a>

```python
deletion_policy: MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList">MysqlMysqlBackupDbSystemSnapshotDeletionPolicyList</a>

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.endpoints"></a>

```python
endpoints: MysqlMysqlBackupDbSystemSnapshotEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotEndpointsList">MysqlMysqlBackupDbSystemSnapshotEndpointsList</a>

---

##### `fault_domain`<sup>Required</sup> <a name="fault_domain" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.faultDomain"></a>

```python
fault_domain: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `hostname_label`<sup>Required</sup> <a name="hostname_label" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.hostnameLabel"></a>

```python
hostname_label: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ip_address`<sup>Required</sup> <a name="ip_address" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.ipAddress"></a>

```python
ip_address: str
```

- *Type:* str

---

##### `is_highly_available`<sup>Required</sup> <a name="is_highly_available" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.isHighlyAvailable"></a>

```python
is_highly_available: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `maintenance`<sup>Required</sup> <a name="maintenance" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.maintenance"></a>

```python
maintenance: MysqlMysqlBackupDbSystemSnapshotMaintenanceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotMaintenanceList">MysqlMysqlBackupDbSystemSnapshotMaintenanceList</a>

---

##### `mysql_version`<sup>Required</sup> <a name="mysql_version" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.mysqlVersion"></a>

```python
mysql_version: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `port_x`<sup>Required</sup> <a name="port_x" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.portX"></a>

```python
port_x: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `secure_connections`<sup>Required</sup> <a name="secure_connections" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.secureConnections"></a>

```python
secure_connections: MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList">MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList</a>

---

##### `shape_name`<sup>Required</sup> <a name="shape_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.shapeName"></a>

```python
shape_name: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlBackupDbSystemSnapshot
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshot">MysqlMysqlBackupDbSystemSnapshot</a>

---


### MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList <a name="MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.certificateGenerationType">certificate_generation_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.certificateId">certificate_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnections">MysqlMysqlBackupDbSystemSnapshotSecureConnections</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `certificate_generation_type`<sup>Required</sup> <a name="certificate_generation_type" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```python
certificate_generation_type: str
```

- *Type:* str

---

##### `certificate_id`<sup>Required</sup> <a name="certificate_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.certificateId"></a>

```python
certificate_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnectionsOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlBackupDbSystemSnapshotSecureConnections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSecureConnections">MysqlMysqlBackupDbSystemSnapshotSecureConnections</a>

---


### MysqlMysqlBackupDbSystemSnapshotSummaryList <a name="MysqlMysqlBackupDbSystemSnapshotSummaryList" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[MysqlMysqlBackupDbSystemSnapshotSummary]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>]]

---


### MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference <a name="MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetRegion">reset_region</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_region` <a name="reset_region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.resetRegion"></a>

```python
def reset_region() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummaryOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MysqlMysqlBackupDbSystemSnapshotSummary]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupDbSystemSnapshotSummary">MysqlMysqlBackupDbSystemSnapshotSummary</a>]

---


### MysqlMysqlBackupSourceDetailsOutputReference <a name="MysqlMysqlBackupSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.backupIdInput">backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.regionInput">region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_id_input`<sup>Optional</sup> <a name="backup_id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.backupIdInput"></a>

```python
backup_id_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `region_input`<sup>Optional</sup> <a name="region_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.regionInput"></a>

```python
region_input: str
```

- *Type:* str

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetailsOutputReference.property.internalValue"></a>

```python
internal_value: MysqlMysqlBackupSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupSourceDetails">MysqlMysqlBackupSourceDetails</a>

---


### MysqlMysqlBackupTimeoutsOutputReference <a name="MysqlMysqlBackupTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import mysql_mysql_backup

mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, MysqlMysqlBackupTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.mysqlMysqlBackup.MysqlMysqlBackupTimeouts">MysqlMysqlBackupTimeouts</a>]

---



