# `databaseExascaleDbStorageVault` Submodule <a name="`databaseExascaleDbStorageVault` Submodule" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseExascaleDbStorageVault <a name="DatabaseExascaleDbStorageVault" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault oci_database_exascale_db_storage_vault}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exascale_db_storage_vault

databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault(
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
  compartment_id: str,
  display_name: str,
  high_capacity_database_storage: DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage,
  additional_flash_cache_in_percent: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DatabaseExascaleDbStorageVaultTimeouts = None,
  time_zone: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#availability_domain DatabaseExascaleDbStorageVault#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#compartment_id DatabaseExascaleDbStorageVault#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#display_name DatabaseExascaleDbStorageVault#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.highCapacityDatabaseStorage">high_capacity_database_storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a></code> | high_capacity_database_storage block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.additionalFlashCacheInPercent">additional_flash_cache_in_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#additional_flash_cache_in_percent DatabaseExascaleDbStorageVault#additional_flash_cache_in_percent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#defined_tags DatabaseExascaleDbStorageVault#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#description DatabaseExascaleDbStorageVault#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#freeform_tags DatabaseExascaleDbStorageVault#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#id DatabaseExascaleDbStorageVault#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts">DatabaseExascaleDbStorageVaultTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#time_zone DatabaseExascaleDbStorageVault#time_zone}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.availabilityDomain"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#availability_domain DatabaseExascaleDbStorageVault#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#compartment_id DatabaseExascaleDbStorageVault#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#display_name DatabaseExascaleDbStorageVault#display_name}.

---

##### `high_capacity_database_storage`<sup>Required</sup> <a name="high_capacity_database_storage" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.highCapacityDatabaseStorage"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a>

high_capacity_database_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#high_capacity_database_storage DatabaseExascaleDbStorageVault#high_capacity_database_storage}

---

##### `additional_flash_cache_in_percent`<sup>Optional</sup> <a name="additional_flash_cache_in_percent" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.additionalFlashCacheInPercent"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#additional_flash_cache_in_percent DatabaseExascaleDbStorageVault#additional_flash_cache_in_percent}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#defined_tags DatabaseExascaleDbStorageVault#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.description"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#description DatabaseExascaleDbStorageVault#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#freeform_tags DatabaseExascaleDbStorageVault#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#id DatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts">DatabaseExascaleDbStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#timeouts DatabaseExascaleDbStorageVault#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.Initializer.parameter.timeZone"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#time_zone DatabaseExascaleDbStorageVault#time_zone}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putHighCapacityDatabaseStorage">put_high_capacity_database_storage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetAdditionalFlashCacheInPercent">reset_additional_flash_cache_in_percent</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetTimeZone">reset_time_zone</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_high_capacity_database_storage` <a name="put_high_capacity_database_storage" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putHighCapacityDatabaseStorage"></a>

```python
def put_high_capacity_database_storage(
  total_size_in_gbs: typing.Union[int, float]
) -> None
```

###### `total_size_in_gbs`<sup>Required</sup> <a name="total_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putHighCapacityDatabaseStorage.parameter.totalSizeInGbs"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#total_size_in_gbs DatabaseExascaleDbStorageVault#total_size_in_gbs}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#create DatabaseExascaleDbStorageVault#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#delete DatabaseExascaleDbStorageVault#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#update DatabaseExascaleDbStorageVault#update}.

---

##### `reset_additional_flash_cache_in_percent` <a name="reset_additional_flash_cache_in_percent" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetAdditionalFlashCacheInPercent"></a>

```python
def reset_additional_flash_cache_in_percent() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_description` <a name="reset_description" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_time_zone` <a name="reset_time_zone" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.resetTimeZone"></a>

```python
def reset_time_zone() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseExascaleDbStorageVault resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exascale_db_storage_vault

databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exascale_db_storage_vault

databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exascale_db_storage_vault

databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exascale_db_storage_vault

databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseExascaleDbStorageVault resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseExascaleDbStorageVault to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseExascaleDbStorageVault that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseExascaleDbStorageVault to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.highCapacityDatabaseStorage">high_capacity_database_storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference">DatabaseExascaleDbStorageVaultTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.vmClusterCount">vm_cluster_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.vmClusterIds">vm_cluster_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.additionalFlashCacheInPercentInput">additional_flash_cache_in_percent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.availabilityDomainInput">availability_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.highCapacityDatabaseStorageInput">high_capacity_database_storage_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts">DatabaseExascaleDbStorageVaultTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeZoneInput">time_zone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.additionalFlashCacheInPercent">additional_flash_cache_in_percent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeZone">time_zone</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `high_capacity_database_storage`<sup>Required</sup> <a name="high_capacity_database_storage" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.highCapacityDatabaseStorage"></a>

```python
high_capacity_database_storage: DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference</a>

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeouts"></a>

```python
timeouts: DatabaseExascaleDbStorageVaultTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference">DatabaseExascaleDbStorageVaultTimeoutsOutputReference</a>

---

##### `vm_cluster_count`<sup>Required</sup> <a name="vm_cluster_count" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.vmClusterCount"></a>

```python
vm_cluster_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `vm_cluster_ids`<sup>Required</sup> <a name="vm_cluster_ids" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.vmClusterIds"></a>

```python
vm_cluster_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `additional_flash_cache_in_percent_input`<sup>Optional</sup> <a name="additional_flash_cache_in_percent_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.additionalFlashCacheInPercentInput"></a>

```python
additional_flash_cache_in_percent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_domain_input`<sup>Optional</sup> <a name="availability_domain_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.availabilityDomainInput"></a>

```python
availability_domain_input: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `high_capacity_database_storage_input`<sup>Optional</sup> <a name="high_capacity_database_storage_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.highCapacityDatabaseStorageInput"></a>

```python
high_capacity_database_storage_input: DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseExascaleDbStorageVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts">DatabaseExascaleDbStorageVaultTimeouts</a>]

---

##### `time_zone_input`<sup>Optional</sup> <a name="time_zone_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeZoneInput"></a>

```python
time_zone_input: str
```

- *Type:* str

---

##### `additional_flash_cache_in_percent`<sup>Required</sup> <a name="additional_flash_cache_in_percent" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.additionalFlashCacheInPercent"></a>

```python
additional_flash_cache_in_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `time_zone`<sup>Required</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVault.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseExascaleDbStorageVaultConfig <a name="DatabaseExascaleDbStorageVaultConfig" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exascale_db_storage_vault

databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  availability_domain: str,
  compartment_id: str,
  display_name: str,
  high_capacity_database_storage: DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage,
  additional_flash_cache_in_percent: typing.Union[int, float] = None,
  defined_tags: typing.Mapping[str] = None,
  description: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  timeouts: DatabaseExascaleDbStorageVaultTimeouts = None,
  time_zone: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#availability_domain DatabaseExascaleDbStorageVault#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#compartment_id DatabaseExascaleDbStorageVault#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#display_name DatabaseExascaleDbStorageVault#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.highCapacityDatabaseStorage">high_capacity_database_storage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a></code> | high_capacity_database_storage block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.additionalFlashCacheInPercent">additional_flash_cache_in_percent</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#additional_flash_cache_in_percent DatabaseExascaleDbStorageVault#additional_flash_cache_in_percent}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#defined_tags DatabaseExascaleDbStorageVault#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.description">description</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#description DatabaseExascaleDbStorageVault#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#freeform_tags DatabaseExascaleDbStorageVault#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#id DatabaseExascaleDbStorageVault#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts">DatabaseExascaleDbStorageVaultTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.timeZone">time_zone</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#time_zone DatabaseExascaleDbStorageVault#time_zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#availability_domain DatabaseExascaleDbStorageVault#availability_domain}.

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#compartment_id DatabaseExascaleDbStorageVault#compartment_id}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#display_name DatabaseExascaleDbStorageVault#display_name}.

---

##### `high_capacity_database_storage`<sup>Required</sup> <a name="high_capacity_database_storage" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.highCapacityDatabaseStorage"></a>

```python
high_capacity_database_storage: DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a>

high_capacity_database_storage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#high_capacity_database_storage DatabaseExascaleDbStorageVault#high_capacity_database_storage}

---

##### `additional_flash_cache_in_percent`<sup>Optional</sup> <a name="additional_flash_cache_in_percent" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.additionalFlashCacheInPercent"></a>

```python
additional_flash_cache_in_percent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#additional_flash_cache_in_percent DatabaseExascaleDbStorageVault#additional_flash_cache_in_percent}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#defined_tags DatabaseExascaleDbStorageVault#defined_tags}.

---

##### `description`<sup>Optional</sup> <a name="description" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#description DatabaseExascaleDbStorageVault#description}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#freeform_tags DatabaseExascaleDbStorageVault#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#id DatabaseExascaleDbStorageVault#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.timeouts"></a>

```python
timeouts: DatabaseExascaleDbStorageVaultTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts">DatabaseExascaleDbStorageVaultTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#timeouts DatabaseExascaleDbStorageVault#timeouts}

---

##### `time_zone`<sup>Optional</sup> <a name="time_zone" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultConfig.property.timeZone"></a>

```python
time_zone: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#time_zone DatabaseExascaleDbStorageVault#time_zone}.

---

### DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage <a name="DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exascale_db_storage_vault

databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage(
  total_size_in_gbs: typing.Union[int, float]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGbs">total_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#total_size_in_gbs DatabaseExascaleDbStorageVault#total_size_in_gbs}. |

---

##### `total_size_in_gbs`<sup>Required</sup> <a name="total_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage.property.totalSizeInGbs"></a>

```python
total_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#total_size_in_gbs DatabaseExascaleDbStorageVault#total_size_in_gbs}.

---

### DatabaseExascaleDbStorageVaultTimeouts <a name="DatabaseExascaleDbStorageVaultTimeouts" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exascale_db_storage_vault

databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#create DatabaseExascaleDbStorageVault#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#delete DatabaseExascaleDbStorageVault#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#update DatabaseExascaleDbStorageVault#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#create DatabaseExascaleDbStorageVault#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#delete DatabaseExascaleDbStorageVault#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_exascale_db_storage_vault#update DatabaseExascaleDbStorageVault#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference <a name="DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exascale_db_storage_vault

databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs">available_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbsInput">total_size_in_gbs_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs">total_size_in_gbs</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `available_size_in_gbs`<sup>Required</sup> <a name="available_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.availableSizeInGbs"></a>

```python
available_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_size_in_gbs_input`<sup>Optional</sup> <a name="total_size_in_gbs_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbsInput"></a>

```python
total_size_in_gbs_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `total_size_in_gbs`<sup>Required</sup> <a name="total_size_in_gbs" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.totalSizeInGbs"></a>

```python
total_size_in_gbs: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorageOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage">DatabaseExascaleDbStorageVaultHighCapacityDatabaseStorage</a>

---


### DatabaseExascaleDbStorageVaultTimeoutsOutputReference <a name="DatabaseExascaleDbStorageVaultTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_exascale_db_storage_vault

databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts">DatabaseExascaleDbStorageVaultTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseExascaleDbStorageVaultTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseExascaleDbStorageVault.DatabaseExascaleDbStorageVaultTimeouts">DatabaseExascaleDbStorageVaultTimeouts</a>]

---



