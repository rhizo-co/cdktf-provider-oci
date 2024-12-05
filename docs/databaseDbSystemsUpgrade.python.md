# `databaseDbSystemsUpgrade` Submodule <a name="`databaseDbSystemsUpgrade` Submodule" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDbSystemsUpgrade <a name="DatabaseDbSystemsUpgrade" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade oci_database_db_systems_upgrade}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  db_system_id: str,
  id: str = None,
  is_snapshot_retention_days_force_updated: typing.Union[bool, IResolvable] = None,
  new_gi_version: str = None,
  new_os_version: str = None,
  snapshot_retention_period_in_days: typing.Union[int, float] = None,
  timeouts: DatabaseDbSystemsUpgradeTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#action DatabaseDbSystemsUpgrade#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#db_system_id DatabaseDbSystemsUpgrade#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#id DatabaseDbSystemsUpgrade#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.isSnapshotRetentionDaysForceUpdated">is_snapshot_retention_days_force_updated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#is_snapshot_retention_days_force_updated DatabaseDbSystemsUpgrade#is_snapshot_retention_days_force_updated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.newGiVersion">new_gi_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_gi_version DatabaseDbSystemsUpgrade#new_gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.newOsVersion">new_os_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_os_version DatabaseDbSystemsUpgrade#new_os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.snapshotRetentionPeriodInDays">snapshot_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#snapshot_retention_period_in_days DatabaseDbSystemsUpgrade#snapshot_retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.action"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#action DatabaseDbSystemsUpgrade#action}.

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.dbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#db_system_id DatabaseDbSystemsUpgrade#db_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#id DatabaseDbSystemsUpgrade#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_snapshot_retention_days_force_updated`<sup>Optional</sup> <a name="is_snapshot_retention_days_force_updated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.isSnapshotRetentionDaysForceUpdated"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#is_snapshot_retention_days_force_updated DatabaseDbSystemsUpgrade#is_snapshot_retention_days_force_updated}.

---

##### `new_gi_version`<sup>Optional</sup> <a name="new_gi_version" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.newGiVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_gi_version DatabaseDbSystemsUpgrade#new_gi_version}.

---

##### `new_os_version`<sup>Optional</sup> <a name="new_os_version" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.newOsVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_os_version DatabaseDbSystemsUpgrade#new_os_version}.

---

##### `snapshot_retention_period_in_days`<sup>Optional</sup> <a name="snapshot_retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.snapshotRetentionPeriodInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#snapshot_retention_period_in_days DatabaseDbSystemsUpgrade#snapshot_retention_period_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#timeouts DatabaseDbSystemsUpgrade#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetIsSnapshotRetentionDaysForceUpdated">reset_is_snapshot_retention_days_force_updated</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewGiVersion">reset_new_gi_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewOsVersion">reset_new_os_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetSnapshotRetentionPeriodInDays">reset_snapshot_retention_period_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#create DatabaseDbSystemsUpgrade#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#delete DatabaseDbSystemsUpgrade#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#update DatabaseDbSystemsUpgrade#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_snapshot_retention_days_force_updated` <a name="reset_is_snapshot_retention_days_force_updated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetIsSnapshotRetentionDaysForceUpdated"></a>

```python
def reset_is_snapshot_retention_days_force_updated() -> None
```

##### `reset_new_gi_version` <a name="reset_new_gi_version" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewGiVersion"></a>

```python
def reset_new_gi_version() -> None
```

##### `reset_new_os_version` <a name="reset_new_os_version" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetNewOsVersion"></a>

```python
def reset_new_os_version() -> None
```

##### `reset_snapshot_retention_period_in_days` <a name="reset_snapshot_retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetSnapshotRetentionPeriodInDays"></a>

```python
def reset_snapshot_retention_period_in_days() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseDbSystemsUpgrade resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseDbSystemsUpgrade resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseDbSystemsUpgrade to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseDbSystemsUpgrade that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDbSystemsUpgrade to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupNetworkNsgIds">backup_network_nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupSubnetId">backup_subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.clusterName">cluster_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cpuCoreCount">cpu_core_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.databaseEdition">database_edition</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStoragePercentage">data_storage_percentage</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStorageSizeInGb">data_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemOptions">db_system_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList">DatabaseDbSystemsUpgradeDbSystemOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.diskRedundancy">disk_redundancy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.domain">domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.faultDomains">fault_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.hostname">hostname</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.iormConfigCache">iorm_config_cache</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList">DatabaseDbSystemsUpgradeIormConfigCacheList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastMaintenanceRunId">last_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastPatchHistoryEntryId">last_patch_history_entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.listenerPort">listener_port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.maintenanceWindow">maintenance_window</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList">DatabaseDbSystemsUpgradeMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nextMaintenanceRunId">next_maintenance_run_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nodeCount">node_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.pointInTimeDataDiskCloneTimestamp">point_in_time_data_disk_clone_timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.recoStorageSizeInGb">reco_storage_size_in_gb</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsName">scan_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsRecordId">scan_dns_record_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanIpIds">scan_ip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.shape">shape</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sourceDbSystemId">source_db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sparseDiskgroup">sparse_diskgroup</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sshPublicKeys">ssh_public_keys</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference">DatabaseDbSystemsUpgradeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.vipIds">vip_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.zoneId">zone_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdatedInput">is_snapshot_retention_days_force_updated_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersionInput">new_gi_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersionInput">new_os_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDaysInput">snapshot_retention_period_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdated">is_snapshot_retention_days_force_updated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersion">new_gi_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersion">new_os_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDays">snapshot_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `backup_network_nsg_ids`<sup>Required</sup> <a name="backup_network_nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupNetworkNsgIds"></a>

```python
backup_network_nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `backup_subnet_id`<sup>Required</sup> <a name="backup_subnet_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.backupSubnetId"></a>

```python
backup_subnet_id: str
```

- *Type:* str

---

##### `cluster_name`<sup>Required</sup> <a name="cluster_name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.clusterName"></a>

```python
cluster_name: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `cpu_core_count`<sup>Required</sup> <a name="cpu_core_count" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.cpuCoreCount"></a>

```python
cpu_core_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `database_edition`<sup>Required</sup> <a name="database_edition" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.databaseEdition"></a>

```python
database_edition: str
```

- *Type:* str

---

##### `data_storage_percentage`<sup>Required</sup> <a name="data_storage_percentage" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStoragePercentage"></a>

```python
data_storage_percentage: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `data_storage_size_in_gb`<sup>Required</sup> <a name="data_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dataStorageSizeInGb"></a>

```python
data_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `db_system_options`<sup>Required</sup> <a name="db_system_options" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemOptions"></a>

```python
db_system_options: DatabaseDbSystemsUpgradeDbSystemOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList">DatabaseDbSystemsUpgradeDbSystemOptionsList</a>

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `disk_redundancy`<sup>Required</sup> <a name="disk_redundancy" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.diskRedundancy"></a>

```python
disk_redundancy: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.domain"></a>

```python
domain: str
```

- *Type:* str

---

##### `fault_domains`<sup>Required</sup> <a name="fault_domains" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.faultDomains"></a>

```python
fault_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.hostname"></a>

```python
hostname: str
```

- *Type:* str

---

##### `iorm_config_cache`<sup>Required</sup> <a name="iorm_config_cache" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.iormConfigCache"></a>

```python
iorm_config_cache: DatabaseDbSystemsUpgradeIormConfigCacheList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList">DatabaseDbSystemsUpgradeIormConfigCacheList</a>

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `last_maintenance_run_id`<sup>Required</sup> <a name="last_maintenance_run_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastMaintenanceRunId"></a>

```python
last_maintenance_run_id: str
```

- *Type:* str

---

##### `last_patch_history_entry_id`<sup>Required</sup> <a name="last_patch_history_entry_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lastPatchHistoryEntryId"></a>

```python
last_patch_history_entry_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `listener_port`<sup>Required</sup> <a name="listener_port" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.listenerPort"></a>

```python
listener_port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `maintenance_window`<sup>Required</sup> <a name="maintenance_window" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.maintenanceWindow"></a>

```python
maintenance_window: DatabaseDbSystemsUpgradeMaintenanceWindowList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList">DatabaseDbSystemsUpgradeMaintenanceWindowList</a>

---

##### `next_maintenance_run_id`<sup>Required</sup> <a name="next_maintenance_run_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nextMaintenanceRunId"></a>

```python
next_maintenance_run_id: str
```

- *Type:* str

---

##### `node_count`<sup>Required</sup> <a name="node_count" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nodeCount"></a>

```python
node_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `point_in_time_data_disk_clone_timestamp`<sup>Required</sup> <a name="point_in_time_data_disk_clone_timestamp" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.pointInTimeDataDiskCloneTimestamp"></a>

```python
point_in_time_data_disk_clone_timestamp: str
```

- *Type:* str

---

##### `reco_storage_size_in_gb`<sup>Required</sup> <a name="reco_storage_size_in_gb" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.recoStorageSizeInGb"></a>

```python
reco_storage_size_in_gb: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `scan_dns_name`<sup>Required</sup> <a name="scan_dns_name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsName"></a>

```python
scan_dns_name: str
```

- *Type:* str

---

##### `scan_dns_record_id`<sup>Required</sup> <a name="scan_dns_record_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanDnsRecordId"></a>

```python
scan_dns_record_id: str
```

- *Type:* str

---

##### `scan_ip_ids`<sup>Required</sup> <a name="scan_ip_ids" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.scanIpIds"></a>

```python
scan_ip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.shape"></a>

```python
shape: str
```

- *Type:* str

---

##### `source_db_system_id`<sup>Required</sup> <a name="source_db_system_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sourceDbSystemId"></a>

```python
source_db_system_id: str
```

- *Type:* str

---

##### `sparse_diskgroup`<sup>Required</sup> <a name="sparse_diskgroup" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sparseDiskgroup"></a>

```python
sparse_diskgroup: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `ssh_public_keys`<sup>Required</sup> <a name="ssh_public_keys" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.sshPublicKeys"></a>

```python
ssh_public_keys: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeouts"></a>

```python
timeouts: DatabaseDbSystemsUpgradeTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference">DatabaseDbSystemsUpgradeTimeoutsOutputReference</a>

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `vip_ids`<sup>Required</sup> <a name="vip_ids" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.vipIds"></a>

```python
vip_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `zone_id`<sup>Required</sup> <a name="zone_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.zoneId"></a>

```python
zone_id: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_snapshot_retention_days_force_updated_input`<sup>Optional</sup> <a name="is_snapshot_retention_days_force_updated_input" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdatedInput"></a>

```python
is_snapshot_retention_days_force_updated_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `new_gi_version_input`<sup>Optional</sup> <a name="new_gi_version_input" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersionInput"></a>

```python
new_gi_version_input: str
```

- *Type:* str

---

##### `new_os_version_input`<sup>Optional</sup> <a name="new_os_version_input" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersionInput"></a>

```python
new_os_version_input: str
```

- *Type:* str

---

##### `snapshot_retention_period_in_days_input`<sup>Optional</sup> <a name="snapshot_retention_period_in_days_input" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDaysInput"></a>

```python
snapshot_retention_period_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseDbSystemsUpgradeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_snapshot_retention_days_force_updated`<sup>Required</sup> <a name="is_snapshot_retention_days_force_updated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.isSnapshotRetentionDaysForceUpdated"></a>

```python
is_snapshot_retention_days_force_updated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `new_gi_version`<sup>Required</sup> <a name="new_gi_version" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newGiVersion"></a>

```python
new_gi_version: str
```

- *Type:* str

---

##### `new_os_version`<sup>Required</sup> <a name="new_os_version" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.newOsVersion"></a>

```python
new_os_version: str
```

- *Type:* str

---

##### `snapshot_retention_period_in_days`<sup>Required</sup> <a name="snapshot_retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.snapshotRetentionPeriodInDays"></a>

```python
snapshot_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgrade.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDbSystemsUpgradeConfig <a name="DatabaseDbSystemsUpgradeConfig" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  action: str,
  db_system_id: str,
  id: str = None,
  is_snapshot_retention_days_force_updated: typing.Union[bool, IResolvable] = None,
  new_gi_version: str = None,
  new_os_version: str = None,
  snapshot_retention_period_in_days: typing.Union[int, float] = None,
  timeouts: DatabaseDbSystemsUpgradeTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.action">action</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#action DatabaseDbSystemsUpgrade#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#db_system_id DatabaseDbSystemsUpgrade#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#id DatabaseDbSystemsUpgrade#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.isSnapshotRetentionDaysForceUpdated">is_snapshot_retention_days_force_updated</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#is_snapshot_retention_days_force_updated DatabaseDbSystemsUpgrade#is_snapshot_retention_days_force_updated}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newGiVersion">new_gi_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_gi_version DatabaseDbSystemsUpgrade#new_gi_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newOsVersion">new_os_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_os_version DatabaseDbSystemsUpgrade#new_os_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.snapshotRetentionPeriodInDays">snapshot_retention_period_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#snapshot_retention_period_in_days DatabaseDbSystemsUpgrade#snapshot_retention_period_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `action`<sup>Required</sup> <a name="action" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.action"></a>

```python
action: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#action DatabaseDbSystemsUpgrade#action}.

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#db_system_id DatabaseDbSystemsUpgrade#db_system_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#id DatabaseDbSystemsUpgrade#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_snapshot_retention_days_force_updated`<sup>Optional</sup> <a name="is_snapshot_retention_days_force_updated" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.isSnapshotRetentionDaysForceUpdated"></a>

```python
is_snapshot_retention_days_force_updated: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#is_snapshot_retention_days_force_updated DatabaseDbSystemsUpgrade#is_snapshot_retention_days_force_updated}.

---

##### `new_gi_version`<sup>Optional</sup> <a name="new_gi_version" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newGiVersion"></a>

```python
new_gi_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_gi_version DatabaseDbSystemsUpgrade#new_gi_version}.

---

##### `new_os_version`<sup>Optional</sup> <a name="new_os_version" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.newOsVersion"></a>

```python
new_os_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#new_os_version DatabaseDbSystemsUpgrade#new_os_version}.

---

##### `snapshot_retention_period_in_days`<sup>Optional</sup> <a name="snapshot_retention_period_in_days" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.snapshotRetentionPeriodInDays"></a>

```python
snapshot_retention_period_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#snapshot_retention_period_in_days DatabaseDbSystemsUpgrade#snapshot_retention_period_in_days}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeConfig.property.timeouts"></a>

```python
timeouts: DatabaseDbSystemsUpgradeTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#timeouts DatabaseDbSystemsUpgrade#timeouts}

---

### DatabaseDbSystemsUpgradeDbSystemOptions <a name="DatabaseDbSystemsUpgradeDbSystemOptions" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions()
```


### DatabaseDbSystemsUpgradeIormConfigCache <a name="DatabaseDbSystemsUpgradeIormConfigCache" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache()
```


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlans <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlans" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans()
```


### DatabaseDbSystemsUpgradeMaintenanceWindow <a name="DatabaseDbSystemsUpgradeMaintenanceWindow" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow()
```


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek()
```


### DatabaseDbSystemsUpgradeMaintenanceWindowMonths <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths()
```


### DatabaseDbSystemsUpgradeTimeouts <a name="DatabaseDbSystemsUpgradeTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#create DatabaseDbSystemsUpgrade#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#delete DatabaseDbSystemsUpgrade#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#update DatabaseDbSystemsUpgrade#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#create DatabaseDbSystemsUpgrade#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#delete DatabaseDbSystemsUpgrade#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_systems_upgrade#update DatabaseDbSystemsUpgrade#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDbSystemsUpgradeDbSystemOptionsList <a name="DatabaseDbSystemsUpgradeDbSystemOptionsList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference <a name="DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.storageManagement">storage_management</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions">DatabaseDbSystemsUpgradeDbSystemOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `storage_management`<sup>Required</sup> <a name="storage_management" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.storageManagement"></a>

```python
storage_management: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemsUpgradeDbSystemOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeDbSystemOptions">DatabaseDbSystemsUpgradeDbSystemOptions</a>

---


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference <a name="DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.flashCacheLimit">flash_cache_limit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.share">share</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans">DatabaseDbSystemsUpgradeIormConfigCacheDbPlans</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `flash_cache_limit`<sup>Required</sup> <a name="flash_cache_limit" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.flashCacheLimit"></a>

```python
flash_cache_limit: str
```

- *Type:* str

---

##### `share`<sup>Required</sup> <a name="share" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.share"></a>

```python
share: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemsUpgradeIormConfigCacheDbPlans
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlans">DatabaseDbSystemsUpgradeIormConfigCacheDbPlans</a>

---


### DatabaseDbSystemsUpgradeIormConfigCacheList <a name="DatabaseDbSystemsUpgradeIormConfigCacheList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemsUpgradeIormConfigCacheOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDbSystemsUpgradeIormConfigCacheOutputReference <a name="DatabaseDbSystemsUpgradeIormConfigCacheOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.dbPlans">db_plans</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList">DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.objective">objective</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache">DatabaseDbSystemsUpgradeIormConfigCache</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `db_plans`<sup>Required</sup> <a name="db_plans" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.dbPlans"></a>

```python
db_plans: DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList">DatabaseDbSystemsUpgradeIormConfigCacheDbPlansList</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `objective`<sup>Required</sup> <a name="objective" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.objective"></a>

```python
objective: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCacheOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemsUpgradeIormConfigCache
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeIormConfigCache">DatabaseDbSystemsUpgradeIormConfigCache</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeek</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths">DatabaseDbSystemsUpgradeMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemsUpgradeMaintenanceWindowMonths
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonths">DatabaseDbSystemsUpgradeMaintenanceWindowMonths</a>

---


### DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference <a name="DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.daysOfWeek">days_of_week</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.hoursOfDay">hours_of_day</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.leadTimeInWeeks">lead_time_in_weeks</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList">DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.weeksOfMonth">weeks_of_month</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow">DatabaseDbSystemsUpgradeMaintenanceWindow</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `days_of_week`<sup>Required</sup> <a name="days_of_week" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```python
days_of_week: DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList">DatabaseDbSystemsUpgradeMaintenanceWindowDaysOfWeekList</a>

---

##### `hours_of_day`<sup>Required</sup> <a name="hours_of_day" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```python
hours_of_day: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `lead_time_in_weeks`<sup>Required</sup> <a name="lead_time_in_weeks" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```python
lead_time_in_weeks: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.months"></a>

```python
months: DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList">DatabaseDbSystemsUpgradeMaintenanceWindowMonthsList</a>

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.preference"></a>

```python
preference: str
```

- *Type:* str

---

##### `weeks_of_month`<sup>Required</sup> <a name="weeks_of_month" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```python
weeks_of_month: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindowOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbSystemsUpgradeMaintenanceWindow
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeMaintenanceWindow">DatabaseDbSystemsUpgradeMaintenanceWindow</a>

---


### DatabaseDbSystemsUpgradeTimeoutsOutputReference <a name="DatabaseDbSystemsUpgradeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_systems_upgrade

databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseDbSystemsUpgradeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbSystemsUpgrade.DatabaseDbSystemsUpgradeTimeouts">DatabaseDbSystemsUpgradeTimeouts</a>]

---



