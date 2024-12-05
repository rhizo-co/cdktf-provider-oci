# `cloudMigrationsMigrationAsset` Submodule <a name="`cloudMigrationsMigrationAsset` Submodule" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudMigrationsMigrationAsset <a name="CloudMigrationsMigrationAsset" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset oci_cloud_migrations_migration_asset}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_migrations_migration_asset

cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  inventory_asset_id: str,
  migration_id: str,
  replication_compartment_id: str,
  snap_shot_bucket_name: str,
  display_name: str = None,
  id: str = None,
  migration_asset_depends_on: typing.List[str] = None,
  replication_schedule_id: str = None,
  timeouts: CloudMigrationsMigrationAssetTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#availability_domain CloudMigrationsMigrationAsset#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.inventoryAssetId">inventory_asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#inventory_asset_id CloudMigrationsMigrationAsset#inventory_asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.migrationId">migration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_id CloudMigrationsMigrationAsset#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.replicationCompartmentId">replication_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_compartment_id CloudMigrationsMigrationAsset#replication_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.snapShotBucketName">snap_shot_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#snap_shot_bucket_name CloudMigrationsMigrationAsset#snap_shot_bucket_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#display_name CloudMigrationsMigrationAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#id CloudMigrationsMigrationAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.migrationAssetDependsOn">migration_asset_depends_on</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_asset_depends_on CloudMigrationsMigrationAsset#migration_asset_depends_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.replicationScheduleId">replication_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_schedule_id CloudMigrationsMigrationAsset#replication_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts">CloudMigrationsMigrationAssetTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#availability_domain CloudMigrationsMigrationAsset#availability_domain}.

---

##### `inventory_asset_id`<sup>Required</sup> <a name="inventory_asset_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.inventoryAssetId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#inventory_asset_id CloudMigrationsMigrationAsset#inventory_asset_id}.

---

##### `migration_id`<sup>Required</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.migrationId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_id CloudMigrationsMigrationAsset#migration_id}.

---

##### `replication_compartment_id`<sup>Required</sup> <a name="replication_compartment_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.replicationCompartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_compartment_id CloudMigrationsMigrationAsset#replication_compartment_id}.

---

##### `snap_shot_bucket_name`<sup>Required</sup> <a name="snap_shot_bucket_name" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.snapShotBucketName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#snap_shot_bucket_name CloudMigrationsMigrationAsset#snap_shot_bucket_name}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#display_name CloudMigrationsMigrationAsset#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#id CloudMigrationsMigrationAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migration_asset_depends_on`<sup>Optional</sup> <a name="migration_asset_depends_on" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.migrationAssetDependsOn"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_asset_depends_on CloudMigrationsMigrationAsset#migration_asset_depends_on}.

---

##### `replication_schedule_id`<sup>Optional</sup> <a name="replication_schedule_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.replicationScheduleId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_schedule_id CloudMigrationsMigrationAsset#replication_schedule_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts">CloudMigrationsMigrationAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#timeouts CloudMigrationsMigrationAsset#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetMigrationAssetDependsOn">reset_migration_asset_depends_on</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetReplicationScheduleId">reset_replication_schedule_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#create CloudMigrationsMigrationAsset#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#delete CloudMigrationsMigrationAsset#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#update CloudMigrationsMigrationAsset#update}.

---

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_migration_asset_depends_on` <a name="reset_migration_asset_depends_on" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetMigrationAssetDependsOn"></a>

```python
def reset_migration_asset_depends_on() -> None
```

##### `reset_replication_schedule_id` <a name="reset_replication_schedule_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetReplicationScheduleId"></a>

```python
def reset_replication_schedule_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CloudMigrationsMigrationAsset resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_migrations_migration_asset

cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_migrations_migration_asset

cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_migrations_migration_asset

cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_migrations_migration_asset

cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CloudMigrationsMigrationAsset resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CloudMigrationsMigrationAsset to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CloudMigrationsMigrationAsset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CloudMigrationsMigrationAsset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.dependedOnBy">depended_on_by</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.notifications">notifications</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.parentSnapshot">parent_snapshot</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapshots">snapshots</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.sourceAssetId">source_asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference">CloudMigrationsMigrationAssetTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.inventoryAssetIdInput">inventory_asset_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationAssetDependsOnInput">migration_asset_depends_on_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationIdInput">migration_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationCompartmentIdInput">replication_compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationScheduleIdInput">replication_schedule_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapShotBucketNameInput">snap_shot_bucket_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts">CloudMigrationsMigrationAssetTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.inventoryAssetId">inventory_asset_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationAssetDependsOn">migration_asset_depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationId">migration_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationCompartmentId">replication_compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationScheduleId">replication_schedule_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapShotBucketName">snap_shot_bucket_name</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `depended_on_by`<sup>Required</sup> <a name="depended_on_by" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.dependedOnBy"></a>

```python
depended_on_by: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `notifications`<sup>Required</sup> <a name="notifications" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.notifications"></a>

```python
notifications: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `parent_snapshot`<sup>Required</sup> <a name="parent_snapshot" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.parentSnapshot"></a>

```python
parent_snapshot: str
```

- *Type:* str

---

##### `snapshots`<sup>Required</sup> <a name="snapshots" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapshots"></a>

```python
snapshots: StringMap
```

- *Type:* cdktf.StringMap

---

##### `source_asset_id`<sup>Required</sup> <a name="source_asset_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.sourceAssetId"></a>

```python
source_asset_id: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeouts"></a>

```python
timeouts: CloudMigrationsMigrationAssetTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference">CloudMigrationsMigrationAssetTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `inventory_asset_id_input`<sup>Optional</sup> <a name="inventory_asset_id_input" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.inventoryAssetIdInput"></a>

```python
inventory_asset_id_input: str
```

- *Type:* str

---

##### `migration_asset_depends_on_input`<sup>Optional</sup> <a name="migration_asset_depends_on_input" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationAssetDependsOnInput"></a>

```python
migration_asset_depends_on_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `migration_id_input`<sup>Optional</sup> <a name="migration_id_input" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationIdInput"></a>

```python
migration_id_input: str
```

- *Type:* str

---

##### `replication_compartment_id_input`<sup>Optional</sup> <a name="replication_compartment_id_input" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationCompartmentIdInput"></a>

```python
replication_compartment_id_input: str
```

- *Type:* str

---

##### `replication_schedule_id_input`<sup>Optional</sup> <a name="replication_schedule_id_input" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationScheduleIdInput"></a>

```python
replication_schedule_id_input: str
```

- *Type:* str

---

##### `snap_shot_bucket_name_input`<sup>Optional</sup> <a name="snap_shot_bucket_name_input" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapShotBucketNameInput"></a>

```python
snap_shot_bucket_name_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CloudMigrationsMigrationAssetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts">CloudMigrationsMigrationAssetTimeouts</a>]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `inventory_asset_id`<sup>Required</sup> <a name="inventory_asset_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.inventoryAssetId"></a>

```python
inventory_asset_id: str
```

- *Type:* str

---

##### `migration_asset_depends_on`<sup>Required</sup> <a name="migration_asset_depends_on" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationAssetDependsOn"></a>

```python
migration_asset_depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `migration_id`<sup>Required</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.migrationId"></a>

```python
migration_id: str
```

- *Type:* str

---

##### `replication_compartment_id`<sup>Required</sup> <a name="replication_compartment_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationCompartmentId"></a>

```python
replication_compartment_id: str
```

- *Type:* str

---

##### `replication_schedule_id`<sup>Required</sup> <a name="replication_schedule_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.replicationScheduleId"></a>

```python
replication_schedule_id: str
```

- *Type:* str

---

##### `snap_shot_bucket_name`<sup>Required</sup> <a name="snap_shot_bucket_name" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.snapShotBucketName"></a>

```python
snap_shot_bucket_name: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAsset.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CloudMigrationsMigrationAssetConfig <a name="CloudMigrationsMigrationAssetConfig" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_migrations_migration_asset

cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  inventory_asset_id: str,
  migration_id: str,
  replication_compartment_id: str,
  snap_shot_bucket_name: str,
  display_name: str = None,
  id: str = None,
  migration_asset_depends_on: typing.List[str] = None,
  replication_schedule_id: str = None,
  timeouts: CloudMigrationsMigrationAssetTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#availability_domain CloudMigrationsMigrationAsset#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.inventoryAssetId">inventory_asset_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#inventory_asset_id CloudMigrationsMigrationAsset#inventory_asset_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.migrationId">migration_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_id CloudMigrationsMigrationAsset#migration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.replicationCompartmentId">replication_compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_compartment_id CloudMigrationsMigrationAsset#replication_compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.snapShotBucketName">snap_shot_bucket_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#snap_shot_bucket_name CloudMigrationsMigrationAsset#snap_shot_bucket_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#display_name CloudMigrationsMigrationAsset#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#id CloudMigrationsMigrationAsset#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.migrationAssetDependsOn">migration_asset_depends_on</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_asset_depends_on CloudMigrationsMigrationAsset#migration_asset_depends_on}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.replicationScheduleId">replication_schedule_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_schedule_id CloudMigrationsMigrationAsset#replication_schedule_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts">CloudMigrationsMigrationAssetTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#availability_domain CloudMigrationsMigrationAsset#availability_domain}.

---

##### `inventory_asset_id`<sup>Required</sup> <a name="inventory_asset_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.inventoryAssetId"></a>

```python
inventory_asset_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#inventory_asset_id CloudMigrationsMigrationAsset#inventory_asset_id}.

---

##### `migration_id`<sup>Required</sup> <a name="migration_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.migrationId"></a>

```python
migration_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_id CloudMigrationsMigrationAsset#migration_id}.

---

##### `replication_compartment_id`<sup>Required</sup> <a name="replication_compartment_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.replicationCompartmentId"></a>

```python
replication_compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_compartment_id CloudMigrationsMigrationAsset#replication_compartment_id}.

---

##### `snap_shot_bucket_name`<sup>Required</sup> <a name="snap_shot_bucket_name" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.snapShotBucketName"></a>

```python
snap_shot_bucket_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#snap_shot_bucket_name CloudMigrationsMigrationAsset#snap_shot_bucket_name}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#display_name CloudMigrationsMigrationAsset#display_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#id CloudMigrationsMigrationAsset#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `migration_asset_depends_on`<sup>Optional</sup> <a name="migration_asset_depends_on" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.migrationAssetDependsOn"></a>

```python
migration_asset_depends_on: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#migration_asset_depends_on CloudMigrationsMigrationAsset#migration_asset_depends_on}.

---

##### `replication_schedule_id`<sup>Optional</sup> <a name="replication_schedule_id" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.replicationScheduleId"></a>

```python
replication_schedule_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#replication_schedule_id CloudMigrationsMigrationAsset#replication_schedule_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetConfig.property.timeouts"></a>

```python
timeouts: CloudMigrationsMigrationAssetTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts">CloudMigrationsMigrationAssetTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#timeouts CloudMigrationsMigrationAsset#timeouts}

---

### CloudMigrationsMigrationAssetTimeouts <a name="CloudMigrationsMigrationAssetTimeouts" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_migrations_migration_asset

cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#create CloudMigrationsMigrationAsset#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#delete CloudMigrationsMigrationAsset#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#update CloudMigrationsMigrationAsset#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#create CloudMigrationsMigrationAsset#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#delete CloudMigrationsMigrationAsset#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_migrations_migration_asset#update CloudMigrationsMigrationAsset#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudMigrationsMigrationAssetTimeoutsOutputReference <a name="CloudMigrationsMigrationAssetTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import cloud_migrations_migration_asset

cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts">CloudMigrationsMigrationAssetTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CloudMigrationsMigrationAssetTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.cloudMigrationsMigrationAsset.CloudMigrationsMigrationAssetTimeouts">CloudMigrationsMigrationAssetTimeouts</a>]

---



