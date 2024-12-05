# `databaseDbHome` Submodule <a name="`databaseDbHome` Submodule" id="rhizo-co-terraform-provider-oci.databaseDbHome"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseDbHome <a name="DatabaseDbHome" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home oci_database_db_home}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHome(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: DatabaseDbHomeDatabase = None,
  database_software_image_id: str = None,
  db_system_id: str = None,
  db_version: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  enable_database_delete: typing.Union[bool, IResolvable] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_desupported_version: typing.Union[bool, IResolvable] = None,
  is_unified_auditing_enabled: typing.Union[bool, IResolvable] = None,
  kms_key_id: str = None,
  kms_key_version_id: str = None,
  source: str = None,
  timeouts: DatabaseDbHomeTimeouts = None,
  vm_cluster_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a></code> | database block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_system_id DatabaseDbHome#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.dbVersion">db_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_version DatabaseDbHome#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#display_name DatabaseDbHome#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.enableDatabaseDelete">enable_database_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#enable_database_delete DatabaseDbHome#enable_database_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#id DatabaseDbHome#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.isDesupportedVersion">is_desupported_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_desupported_version DatabaseDbHome#is_desupported_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.isUnifiedAuditingEnabled">is_unified_auditing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_unified_auditing_enabled DatabaseDbHome#is_unified_auditing_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#source DatabaseDbHome#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vm_cluster_id DatabaseDbHome#vm_cluster_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Optional</sup> <a name="database" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.database"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database DatabaseDbHome#database}

---

##### `database_software_image_id`<sup>Optional</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.databaseSoftwareImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}.

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.dbSystemId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_system_id DatabaseDbHome#db_system_id}.

---

##### `db_version`<sup>Optional</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.dbVersion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_version DatabaseDbHome#db_version}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#display_name DatabaseDbHome#display_name}.

---

##### `enable_database_delete`<sup>Optional</sup> <a name="enable_database_delete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.enableDatabaseDelete"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#enable_database_delete DatabaseDbHome#enable_database_delete}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#id DatabaseDbHome#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_desupported_version`<sup>Optional</sup> <a name="is_desupported_version" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.isDesupportedVersion"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_desupported_version DatabaseDbHome#is_desupported_version}.

---

##### `is_unified_auditing_enabled`<sup>Optional</sup> <a name="is_unified_auditing_enabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.isUnifiedAuditingEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_unified_auditing_enabled DatabaseDbHome#is_unified_auditing_enabled}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}.

---

##### `kms_key_version_id`<sup>Optional</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.kmsKeyVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.source"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#source DatabaseDbHome#source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#timeouts DatabaseDbHome#timeouts}

---

##### `vm_cluster_id`<sup>Optional</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.Initializer.parameter.vmClusterId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vm_cluster_id DatabaseDbHome#vm_cluster_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase">put_database</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDatabase">reset_database</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDatabaseSoftwareImageId">reset_database_software_image_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDbSystemId">reset_db_system_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDbVersion">reset_db_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDisplayName">reset_display_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetEnableDatabaseDelete">reset_enable_database_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetIsDesupportedVersion">reset_is_desupported_version</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetIsUnifiedAuditingEnabled">reset_is_unified_auditing_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetKmsKeyVersionId">reset_kms_key_version_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetSource">reset_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetVmClusterId">reset_vm_cluster_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_database` <a name="put_database" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase"></a>

```python
def put_database(
  admin_password: str,
  backup_id: str = None,
  backup_tde_password: str = None,
  character_set: str = None,
  database_id: str = None,
  database_software_image_id: str = None,
  db_backup_config: DatabaseDbHomeDatabaseDbBackupConfig = None,
  db_name: str = None,
  db_workload: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  key_store_id: str = None,
  kms_key_id: str = None,
  kms_key_version_id: str = None,
  ncharacter_set: str = None,
  pdb_name: str = None,
  pluggable_databases: typing.List[str] = None,
  tde_wallet_password: str = None,
  time_stamp_for_point_in_time_recovery: str = None,
  vault_id: str = None
) -> None
```

###### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.adminPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#admin_password DatabaseDbHome#admin_password}.

---

###### `backup_id`<sup>Optional</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.backupId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_id DatabaseDbHome#backup_id}.

---

###### `backup_tde_password`<sup>Optional</sup> <a name="backup_tde_password" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.backupTdePassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_tde_password DatabaseDbHome#backup_tde_password}.

---

###### `character_set`<sup>Optional</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.characterSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#character_set DatabaseDbHome#character_set}.

---

###### `database_id`<sup>Optional</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.databaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_id DatabaseDbHome#database_id}.

---

###### `database_software_image_id`<sup>Optional</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.databaseSoftwareImageId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}.

---

###### `db_backup_config`<sup>Optional</sup> <a name="db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.dbBackupConfig"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_backup_config DatabaseDbHome#db_backup_config}

---

###### `db_name`<sup>Optional</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.dbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_name DatabaseDbHome#db_name}.

---

###### `db_workload`<sup>Optional</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.dbWorkload"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_workload DatabaseDbHome#db_workload}.

---

###### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}.

---

###### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}.

---

###### `key_store_id`<sup>Optional</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.keyStoreId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#key_store_id DatabaseDbHome#key_store_id}.

---

###### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.kmsKeyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}.

---

###### `kms_key_version_id`<sup>Optional</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.kmsKeyVersionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}.

---

###### `ncharacter_set`<sup>Optional</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.ncharacterSet"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#ncharacter_set DatabaseDbHome#ncharacter_set}.

---

###### `pdb_name`<sup>Optional</sup> <a name="pdb_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.pdbName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#pdb_name DatabaseDbHome#pdb_name}.

---

###### `pluggable_databases`<sup>Optional</sup> <a name="pluggable_databases" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.pluggableDatabases"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#pluggable_databases DatabaseDbHome#pluggable_databases}.

---

###### `tde_wallet_password`<sup>Optional</sup> <a name="tde_wallet_password" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.tdeWalletPassword"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#tde_wallet_password DatabaseDbHome#tde_wallet_password}.

---

###### `time_stamp_for_point_in_time_recovery`<sup>Optional</sup> <a name="time_stamp_for_point_in_time_recovery" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.timeStampForPointInTimeRecovery"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#time_stamp_for_point_in_time_recovery DatabaseDbHome#time_stamp_for_point_in_time_recovery}.

---

###### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putDatabase.parameter.vaultId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vault_id DatabaseDbHome#vault_id}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#create DatabaseDbHome#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#delete DatabaseDbHome#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#update DatabaseDbHome#update}.

---

##### `reset_database` <a name="reset_database" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDatabase"></a>

```python
def reset_database() -> None
```

##### `reset_database_software_image_id` <a name="reset_database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDatabaseSoftwareImageId"></a>

```python
def reset_database_software_image_id() -> None
```

##### `reset_db_system_id` <a name="reset_db_system_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDbSystemId"></a>

```python
def reset_db_system_id() -> None
```

##### `reset_db_version` <a name="reset_db_version" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDbVersion"></a>

```python
def reset_db_version() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_display_name` <a name="reset_display_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetDisplayName"></a>

```python
def reset_display_name() -> None
```

##### `reset_enable_database_delete` <a name="reset_enable_database_delete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetEnableDatabaseDelete"></a>

```python
def reset_enable_database_delete() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_is_desupported_version` <a name="reset_is_desupported_version" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetIsDesupportedVersion"></a>

```python
def reset_is_desupported_version() -> None
```

##### `reset_is_unified_auditing_enabled` <a name="reset_is_unified_auditing_enabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetIsUnifiedAuditingEnabled"></a>

```python
def reset_is_unified_auditing_enabled() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_kms_key_version_id` <a name="reset_kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetKmsKeyVersionId"></a>

```python
def reset_kms_key_version_id() -> None
```

##### `reset_source` <a name="reset_source" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetSource"></a>

```python
def reset_source() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_vm_cluster_id` <a name="reset_vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.resetVmClusterId"></a>

```python
def reset_vm_cluster_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseDbHome resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHome.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHome.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHome.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHome.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseDbHome resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseDbHome to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseDbHome that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseDbHome to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference">DatabaseDbHomeDatabaseOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbHomeLocation">db_home_location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lastPatchHistoryEntryId">last_patch_history_entry_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference">DatabaseDbHomeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseInput">database_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseSoftwareImageIdInput">database_software_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbSystemIdInput">db_system_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbVersionInput">db_version_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.enableDatabaseDeleteInput">enable_database_delete_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isDesupportedVersionInput">is_desupported_version_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isUnifiedAuditingEnabledInput">is_unified_auditing_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyVersionIdInput">kms_key_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.sourceInput">source_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.vmClusterIdInput">vm_cluster_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbSystemId">db_system_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbVersion">db_version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.enableDatabaseDelete">enable_database_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isDesupportedVersion">is_desupported_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isUnifiedAuditingEnabled">is_unified_auditing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.source">source</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database`<sup>Required</sup> <a name="database" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.database"></a>

```python
database: DatabaseDbHomeDatabaseOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference">DatabaseDbHomeDatabaseOutputReference</a>

---

##### `db_home_location`<sup>Required</sup> <a name="db_home_location" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbHomeLocation"></a>

```python
db_home_location: str
```

- *Type:* str

---

##### `last_patch_history_entry_id`<sup>Required</sup> <a name="last_patch_history_entry_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lastPatchHistoryEntryId"></a>

```python
last_patch_history_entry_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeouts"></a>

```python
timeouts: DatabaseDbHomeTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference">DatabaseDbHomeTimeoutsOutputReference</a>

---

##### `database_input`<sup>Optional</sup> <a name="database_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseInput"></a>

```python
database_input: DatabaseDbHomeDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a>

---

##### `database_software_image_id_input`<sup>Optional</sup> <a name="database_software_image_id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseSoftwareImageIdInput"></a>

```python
database_software_image_id_input: str
```

- *Type:* str

---

##### `db_system_id_input`<sup>Optional</sup> <a name="db_system_id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbSystemIdInput"></a>

```python
db_system_id_input: str
```

- *Type:* str

---

##### `db_version_input`<sup>Optional</sup> <a name="db_version_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbVersionInput"></a>

```python
db_version_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enable_database_delete_input`<sup>Optional</sup> <a name="enable_database_delete_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.enableDatabaseDeleteInput"></a>

```python
enable_database_delete_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `is_desupported_version_input`<sup>Optional</sup> <a name="is_desupported_version_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isDesupportedVersionInput"></a>

```python
is_desupported_version_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_unified_auditing_enabled_input`<sup>Optional</sup> <a name="is_unified_auditing_enabled_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isUnifiedAuditingEnabledInput"></a>

```python
is_unified_auditing_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_version_id_input`<sup>Optional</sup> <a name="kms_key_version_id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyVersionIdInput"></a>

```python
kms_key_version_id_input: str
```

- *Type:* str

---

##### `source_input`<sup>Optional</sup> <a name="source_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.sourceInput"></a>

```python
source_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseDbHomeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a>]

---

##### `vm_cluster_id_input`<sup>Optional</sup> <a name="vm_cluster_id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.vmClusterIdInput"></a>

```python
vm_cluster_id_input: str
```

- *Type:* str

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `db_system_id`<sup>Required</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

---

##### `db_version`<sup>Required</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enable_database_delete`<sup>Required</sup> <a name="enable_database_delete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.enableDatabaseDelete"></a>

```python
enable_database_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_desupported_version`<sup>Required</sup> <a name="is_desupported_version" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isDesupportedVersion"></a>

```python
is_desupported_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `is_unified_auditing_enabled`<sup>Required</sup> <a name="is_unified_auditing_enabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.isUnifiedAuditingEnabled"></a>

```python
is_unified_auditing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `source`<sup>Required</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.source"></a>

```python
source: str
```

- *Type:* str

---

##### `vm_cluster_id`<sup>Required</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHome.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseDbHomeConfig <a name="DatabaseDbHomeConfig" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHomeConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  database: DatabaseDbHomeDatabase = None,
  database_software_image_id: str = None,
  db_system_id: str = None,
  db_version: str = None,
  defined_tags: typing.Mapping[str] = None,
  display_name: str = None,
  enable_database_delete: typing.Union[bool, IResolvable] = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  is_desupported_version: typing.Union[bool, IResolvable] = None,
  is_unified_auditing_enabled: typing.Union[bool, IResolvable] = None,
  kms_key_id: str = None,
  kms_key_version_id: str = None,
  source: str = None,
  timeouts: DatabaseDbHomeTimeouts = None,
  vm_cluster_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.database">database</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a></code> | database block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dbSystemId">db_system_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_system_id DatabaseDbHome#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dbVersion">db_version</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_version DatabaseDbHome#db_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#display_name DatabaseDbHome#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.enableDatabaseDelete">enable_database_delete</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#enable_database_delete DatabaseDbHome#enable_database_delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#id DatabaseDbHome#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.isDesupportedVersion">is_desupported_version</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_desupported_version DatabaseDbHome#is_desupported_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.isUnifiedAuditingEnabled">is_unified_auditing_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_unified_auditing_enabled DatabaseDbHome#is_unified_auditing_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.source">source</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#source DatabaseDbHome#source}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.vmClusterId">vm_cluster_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vm_cluster_id DatabaseDbHome#vm_cluster_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `database`<sup>Optional</sup> <a name="database" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.database"></a>

```python
database: DatabaseDbHomeDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a>

database block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database DatabaseDbHome#database}

---

##### `database_software_image_id`<sup>Optional</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}.

---

##### `db_system_id`<sup>Optional</sup> <a name="db_system_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dbSystemId"></a>

```python
db_system_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_system_id DatabaseDbHome#db_system_id}.

---

##### `db_version`<sup>Optional</sup> <a name="db_version" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.dbVersion"></a>

```python
db_version: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_version DatabaseDbHome#db_version}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}.

---

##### `display_name`<sup>Optional</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#display_name DatabaseDbHome#display_name}.

---

##### `enable_database_delete`<sup>Optional</sup> <a name="enable_database_delete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.enableDatabaseDelete"></a>

```python
enable_database_delete: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#enable_database_delete DatabaseDbHome#enable_database_delete}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#id DatabaseDbHome#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `is_desupported_version`<sup>Optional</sup> <a name="is_desupported_version" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.isDesupportedVersion"></a>

```python
is_desupported_version: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_desupported_version DatabaseDbHome#is_desupported_version}.

---

##### `is_unified_auditing_enabled`<sup>Optional</sup> <a name="is_unified_auditing_enabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.isUnifiedAuditingEnabled"></a>

```python
is_unified_auditing_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#is_unified_auditing_enabled DatabaseDbHome#is_unified_auditing_enabled}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}.

---

##### `kms_key_version_id`<sup>Optional</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}.

---

##### `source`<sup>Optional</sup> <a name="source" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.source"></a>

```python
source: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#source DatabaseDbHome#source}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.timeouts"></a>

```python
timeouts: DatabaseDbHomeTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#timeouts DatabaseDbHome#timeouts}

---

##### `vm_cluster_id`<sup>Optional</sup> <a name="vm_cluster_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeConfig.property.vmClusterId"></a>

```python
vm_cluster_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vm_cluster_id DatabaseDbHome#vm_cluster_id}.

---

### DatabaseDbHomeDatabase <a name="DatabaseDbHomeDatabase" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHomeDatabase(
  admin_password: str,
  backup_id: str = None,
  backup_tde_password: str = None,
  character_set: str = None,
  database_id: str = None,
  database_software_image_id: str = None,
  db_backup_config: DatabaseDbHomeDatabaseDbBackupConfig = None,
  db_name: str = None,
  db_workload: str = None,
  defined_tags: typing.Mapping[str] = None,
  freeform_tags: typing.Mapping[str] = None,
  key_store_id: str = None,
  kms_key_id: str = None,
  kms_key_version_id: str = None,
  ncharacter_set: str = None,
  pdb_name: str = None,
  pluggable_databases: typing.List[str] = None,
  tde_wallet_password: str = None,
  time_stamp_for_point_in_time_recovery: str = None,
  vault_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.adminPassword">admin_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#admin_password DatabaseDbHome#admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.backupId">backup_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_id DatabaseDbHome#backup_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.backupTdePassword">backup_tde_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_tde_password DatabaseDbHome#backup_tde_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.characterSet">character_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#character_set DatabaseDbHome#character_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.databaseId">database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_id DatabaseDbHome#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbBackupConfig">db_backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a></code> | db_backup_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbName">db_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_name DatabaseDbHome#db_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbWorkload">db_workload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_workload DatabaseDbHome#db_workload}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.keyStoreId">key_store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#key_store_id DatabaseDbHome#key_store_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#ncharacter_set DatabaseDbHome#ncharacter_set}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.pdbName">pdb_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#pdb_name DatabaseDbHome#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.pluggableDatabases">pluggable_databases</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#pluggable_databases DatabaseDbHome#pluggable_databases}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.tdeWalletPassword">tde_wallet_password</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#tde_wallet_password DatabaseDbHome#tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.timeStampForPointInTimeRecovery">time_stamp_for_point_in_time_recovery</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#time_stamp_for_point_in_time_recovery DatabaseDbHome#time_stamp_for_point_in_time_recovery}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.vaultId">vault_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vault_id DatabaseDbHome#vault_id}. |

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#admin_password DatabaseDbHome#admin_password}.

---

##### `backup_id`<sup>Optional</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_id DatabaseDbHome#backup_id}.

---

##### `backup_tde_password`<sup>Optional</sup> <a name="backup_tde_password" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.backupTdePassword"></a>

```python
backup_tde_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_tde_password DatabaseDbHome#backup_tde_password}.

---

##### `character_set`<sup>Optional</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#character_set DatabaseDbHome#character_set}.

---

##### `database_id`<sup>Optional</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_id DatabaseDbHome#database_id}.

---

##### `database_software_image_id`<sup>Optional</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#database_software_image_id DatabaseDbHome#database_software_image_id}.

---

##### `db_backup_config`<sup>Optional</sup> <a name="db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbBackupConfig"></a>

```python
db_backup_config: DatabaseDbHomeDatabaseDbBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a>

db_backup_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_backup_config DatabaseDbHome#db_backup_config}

---

##### `db_name`<sup>Optional</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_name DatabaseDbHome#db_name}.

---

##### `db_workload`<sup>Optional</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#db_workload DatabaseDbHome#db_workload}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#defined_tags DatabaseDbHome#defined_tags}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#freeform_tags DatabaseDbHome#freeform_tags}.

---

##### `key_store_id`<sup>Optional</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#key_store_id DatabaseDbHome#key_store_id}.

---

##### `kms_key_id`<sup>Optional</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_id DatabaseDbHome#kms_key_id}.

---

##### `kms_key_version_id`<sup>Optional</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#kms_key_version_id DatabaseDbHome#kms_key_version_id}.

---

##### `ncharacter_set`<sup>Optional</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#ncharacter_set DatabaseDbHome#ncharacter_set}.

---

##### `pdb_name`<sup>Optional</sup> <a name="pdb_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.pdbName"></a>

```python
pdb_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#pdb_name DatabaseDbHome#pdb_name}.

---

##### `pluggable_databases`<sup>Optional</sup> <a name="pluggable_databases" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.pluggableDatabases"></a>

```python
pluggable_databases: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#pluggable_databases DatabaseDbHome#pluggable_databases}.

---

##### `tde_wallet_password`<sup>Optional</sup> <a name="tde_wallet_password" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.tdeWalletPassword"></a>

```python
tde_wallet_password: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#tde_wallet_password DatabaseDbHome#tde_wallet_password}.

---

##### `time_stamp_for_point_in_time_recovery`<sup>Optional</sup> <a name="time_stamp_for_point_in_time_recovery" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.timeStampForPointInTimeRecovery"></a>

```python
time_stamp_for_point_in_time_recovery: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#time_stamp_for_point_in_time_recovery DatabaseDbHome#time_stamp_for_point_in_time_recovery}.

---

##### `vault_id`<sup>Optional</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#vault_id DatabaseDbHome#vault_id}.

---

### DatabaseDbHomeDatabaseConnectionStrings <a name="DatabaseDbHomeDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStrings.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHomeDatabaseConnectionStrings()
```


### DatabaseDbHomeDatabaseDbBackupConfig <a name="DatabaseDbHomeDatabaseDbBackupConfig" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig(
  auto_backup_enabled: typing.Union[bool, IResolvable] = None,
  auto_backup_window: str = None,
  auto_full_backup_day: str = None,
  auto_full_backup_window: str = None,
  backup_deletion_policy: str = None,
  backup_destination_details: typing.Union[IResolvable, typing.List[DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails]] = None,
  recovery_window_in_days: typing.Union[int, float] = None,
  run_immediate_full_backup: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoBackupEnabled">auto_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_backup_enabled DatabaseDbHome#auto_backup_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoBackupWindow">auto_backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_backup_window DatabaseDbHome#auto_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoFullBackupDay">auto_full_backup_day</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_full_backup_day DatabaseDbHome#auto_full_backup_day}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoFullBackupWindow">auto_full_backup_window</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_full_backup_window DatabaseDbHome#auto_full_backup_window}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.backupDeletionPolicy">backup_deletion_policy</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_deletion_policy DatabaseDbHome#backup_deletion_policy}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.backupDestinationDetails">backup_destination_details</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]</code> | backup_destination_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.recoveryWindowInDays">recovery_window_in_days</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#recovery_window_in_days DatabaseDbHome#recovery_window_in_days}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.runImmediateFullBackup">run_immediate_full_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#run_immediate_full_backup DatabaseDbHome#run_immediate_full_backup}. |

---

##### `auto_backup_enabled`<sup>Optional</sup> <a name="auto_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoBackupEnabled"></a>

```python
auto_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_backup_enabled DatabaseDbHome#auto_backup_enabled}.

---

##### `auto_backup_window`<sup>Optional</sup> <a name="auto_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoBackupWindow"></a>

```python
auto_backup_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_backup_window DatabaseDbHome#auto_backup_window}.

---

##### `auto_full_backup_day`<sup>Optional</sup> <a name="auto_full_backup_day" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoFullBackupDay"></a>

```python
auto_full_backup_day: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_full_backup_day DatabaseDbHome#auto_full_backup_day}.

---

##### `auto_full_backup_window`<sup>Optional</sup> <a name="auto_full_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.autoFullBackupWindow"></a>

```python
auto_full_backup_window: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_full_backup_window DatabaseDbHome#auto_full_backup_window}.

---

##### `backup_deletion_policy`<sup>Optional</sup> <a name="backup_deletion_policy" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.backupDeletionPolicy"></a>

```python
backup_deletion_policy: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_deletion_policy DatabaseDbHome#backup_deletion_policy}.

---

##### `backup_destination_details`<sup>Optional</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.backupDestinationDetails"></a>

```python
backup_destination_details: typing.Union[IResolvable, typing.List[DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_destination_details DatabaseDbHome#backup_destination_details}

---

##### `recovery_window_in_days`<sup>Optional</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.recoveryWindowInDays"></a>

```python
recovery_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#recovery_window_in_days DatabaseDbHome#recovery_window_in_days}.

---

##### `run_immediate_full_backup`<sup>Optional</sup> <a name="run_immediate_full_backup" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig.property.runImmediateFullBackup"></a>

```python
run_immediate_full_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#run_immediate_full_backup DatabaseDbHome#run_immediate_full_backup}.

---

### DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails <a name="DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails(
  dbrs_policy_id: str = None,
  id: str = None,
  type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId">dbrs_policy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#dbrs_policy_id DatabaseDbHome#dbrs_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#id DatabaseDbHome#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.type">type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#type DatabaseDbHome#type}. |

---

##### `dbrs_policy_id`<sup>Optional</sup> <a name="dbrs_policy_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.dbrsPolicyId"></a>

```python
dbrs_policy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#dbrs_policy_id DatabaseDbHome#dbrs_policy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#id DatabaseDbHome#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `type`<sup>Optional</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails.property.type"></a>

```python
type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#type DatabaseDbHome#type}.

---

### DatabaseDbHomeTimeouts <a name="DatabaseDbHomeTimeouts" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHomeTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#create DatabaseDbHome#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#delete DatabaseDbHome#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#update DatabaseDbHome#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#create DatabaseDbHome#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#delete DatabaseDbHome#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#update DatabaseDbHome#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseDbHomeDatabaseConnectionStringsList <a name="DatabaseDbHomeDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbHomeDatabaseConnectionStringsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseDbHomeDatabaseConnectionStringsOutputReference <a name="DatabaseDbHomeDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.allConnectionStrings">all_connection_strings</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.cdbDefault">cdb_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.cdbIpDefault">cdb_ip_default</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStrings">DatabaseDbHomeDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `all_connection_strings`<sup>Required</sup> <a name="all_connection_strings" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```python
all_connection_strings: StringMap
```

- *Type:* cdktf.StringMap

---

##### `cdb_default`<sup>Required</sup> <a name="cdb_default" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.cdbDefault"></a>

```python
cdb_default: str
```

- *Type:* str

---

##### `cdb_ip_default`<sup>Required</sup> <a name="cdb_ip_default" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.cdbIpDefault"></a>

```python
cdb_ip_default: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbHomeDatabaseConnectionStrings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStrings">DatabaseDbHomeDatabaseConnectionStrings</a>

---


### DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList <a name="DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]

---


### DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference <a name="DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId">reset_dbrs_policy_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType">reset_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_dbrs_policy_id` <a name="reset_dbrs_policy_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetDbrsPolicyId"></a>

```python
def reset_dbrs_policy_id() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_type` <a name="reset_type" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.resetType"></a>

```python
def reset_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput">dbrs_policy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId">dbrs_policy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dbrs_policy_id_input`<sup>Optional</sup> <a name="dbrs_policy_id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyIdInput"></a>

```python
dbrs_policy_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `dbrs_policy_id`<sup>Required</sup> <a name="dbrs_policy_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.dbrsPolicyId"></a>

```python
dbrs_policy_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]

---


### DatabaseDbHomeDatabaseDbBackupConfigOutputReference <a name="DatabaseDbHomeDatabaseDbBackupConfigOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails">put_backup_destination_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled">reset_auto_backup_enabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow">reset_auto_backup_window</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay">reset_auto_full_backup_day</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow">reset_auto_full_backup_window</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy">reset_backup_deletion_policy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails">reset_backup_destination_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays">reset_recovery_window_in_days</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup">reset_run_immediate_full_backup</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_backup_destination_details` <a name="put_backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails"></a>

```python
def put_backup_destination_details(
  value: typing.Union[IResolvable, typing.List[DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.putBackupDestinationDetails.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]

---

##### `reset_auto_backup_enabled` <a name="reset_auto_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupEnabled"></a>

```python
def reset_auto_backup_enabled() -> None
```

##### `reset_auto_backup_window` <a name="reset_auto_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoBackupWindow"></a>

```python
def reset_auto_backup_window() -> None
```

##### `reset_auto_full_backup_day` <a name="reset_auto_full_backup_day" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupDay"></a>

```python
def reset_auto_full_backup_day() -> None
```

##### `reset_auto_full_backup_window` <a name="reset_auto_full_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetAutoFullBackupWindow"></a>

```python
def reset_auto_full_backup_window() -> None
```

##### `reset_backup_deletion_policy` <a name="reset_backup_deletion_policy" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDeletionPolicy"></a>

```python
def reset_backup_deletion_policy() -> None
```

##### `reset_backup_destination_details` <a name="reset_backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetBackupDestinationDetails"></a>

```python
def reset_backup_destination_details() -> None
```

##### `reset_recovery_window_in_days` <a name="reset_recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetRecoveryWindowInDays"></a>

```python
def reset_recovery_window_in_days() -> None
```

##### `reset_run_immediate_full_backup` <a name="reset_run_immediate_full_backup" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.resetRunImmediateFullBackup"></a>

```python
def reset_run_immediate_full_backup() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails">backup_destination_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput">auto_backup_enabled_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput">auto_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput">auto_full_backup_day_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput">auto_full_backup_window_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput">backup_deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput">backup_destination_details_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput">recovery_window_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput">run_immediate_full_backup_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled">auto_backup_enabled</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindow">auto_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay">auto_full_backup_day</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow">auto_full_backup_window</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy">backup_deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays">recovery_window_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup">run_immediate_full_backup</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `backup_destination_details`<sup>Required</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetails"></a>

```python
backup_destination_details: DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetailsList</a>

---

##### `auto_backup_enabled_input`<sup>Optional</sup> <a name="auto_backup_enabled_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabledInput"></a>

```python
auto_backup_enabled_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_backup_window_input`<sup>Optional</sup> <a name="auto_backup_window_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindowInput"></a>

```python
auto_backup_window_input: str
```

- *Type:* str

---

##### `auto_full_backup_day_input`<sup>Optional</sup> <a name="auto_full_backup_day_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDayInput"></a>

```python
auto_full_backup_day_input: str
```

- *Type:* str

---

##### `auto_full_backup_window_input`<sup>Optional</sup> <a name="auto_full_backup_window_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindowInput"></a>

```python
auto_full_backup_window_input: str
```

- *Type:* str

---

##### `backup_deletion_policy_input`<sup>Optional</sup> <a name="backup_deletion_policy_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicyInput"></a>

```python
backup_deletion_policy_input: str
```

- *Type:* str

---

##### `backup_destination_details_input`<sup>Optional</sup> <a name="backup_destination_details_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDestinationDetailsInput"></a>

```python
backup_destination_details_input: typing.Union[IResolvable, typing.List[DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]

---

##### `recovery_window_in_days_input`<sup>Optional</sup> <a name="recovery_window_in_days_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDaysInput"></a>

```python
recovery_window_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_immediate_full_backup_input`<sup>Optional</sup> <a name="run_immediate_full_backup_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackupInput"></a>

```python
run_immediate_full_backup_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_backup_enabled`<sup>Required</sup> <a name="auto_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupEnabled"></a>

```python
auto_backup_enabled: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `auto_backup_window`<sup>Required</sup> <a name="auto_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoBackupWindow"></a>

```python
auto_backup_window: str
```

- *Type:* str

---

##### `auto_full_backup_day`<sup>Required</sup> <a name="auto_full_backup_day" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupDay"></a>

```python
auto_full_backup_day: str
```

- *Type:* str

---

##### `auto_full_backup_window`<sup>Required</sup> <a name="auto_full_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.autoFullBackupWindow"></a>

```python
auto_full_backup_window: str
```

- *Type:* str

---

##### `backup_deletion_policy`<sup>Required</sup> <a name="backup_deletion_policy" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.backupDeletionPolicy"></a>

```python
backup_deletion_policy: str
```

- *Type:* str

---

##### `recovery_window_in_days`<sup>Required</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.recoveryWindowInDays"></a>

```python
recovery_window_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `run_immediate_full_backup`<sup>Required</sup> <a name="run_immediate_full_backup" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.runImmediateFullBackup"></a>

```python
run_immediate_full_backup: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbHomeDatabaseDbBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a>

---


### DatabaseDbHomeDatabaseOutputReference <a name="DatabaseDbHomeDatabaseOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHomeDatabaseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig">put_db_backup_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetBackupId">reset_backup_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetBackupTdePassword">reset_backup_tde_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetCharacterSet">reset_character_set</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDatabaseId">reset_database_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDatabaseSoftwareImageId">reset_database_software_image_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbBackupConfig">reset_db_backup_config</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbName">reset_db_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbWorkload">reset_db_workload</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKeyStoreId">reset_key_store_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKmsKeyId">reset_kms_key_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKmsKeyVersionId">reset_kms_key_version_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetNcharacterSet">reset_ncharacter_set</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetPdbName">reset_pdb_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetPluggableDatabases">reset_pluggable_databases</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetTdeWalletPassword">reset_tde_wallet_password</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetTimeStampForPointInTimeRecovery">reset_time_stamp_for_point_in_time_recovery</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetVaultId">reset_vault_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_db_backup_config` <a name="put_db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig"></a>

```python
def put_db_backup_config(
  auto_backup_enabled: typing.Union[bool, IResolvable] = None,
  auto_backup_window: str = None,
  auto_full_backup_day: str = None,
  auto_full_backup_window: str = None,
  backup_deletion_policy: str = None,
  backup_destination_details: typing.Union[IResolvable, typing.List[DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails]] = None,
  recovery_window_in_days: typing.Union[int, float] = None,
  run_immediate_full_backup: typing.Union[bool, IResolvable] = None
) -> None
```

###### `auto_backup_enabled`<sup>Optional</sup> <a name="auto_backup_enabled" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.autoBackupEnabled"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_backup_enabled DatabaseDbHome#auto_backup_enabled}.

---

###### `auto_backup_window`<sup>Optional</sup> <a name="auto_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.autoBackupWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_backup_window DatabaseDbHome#auto_backup_window}.

---

###### `auto_full_backup_day`<sup>Optional</sup> <a name="auto_full_backup_day" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.autoFullBackupDay"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_full_backup_day DatabaseDbHome#auto_full_backup_day}.

---

###### `auto_full_backup_window`<sup>Optional</sup> <a name="auto_full_backup_window" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.autoFullBackupWindow"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#auto_full_backup_window DatabaseDbHome#auto_full_backup_window}.

---

###### `backup_deletion_policy`<sup>Optional</sup> <a name="backup_deletion_policy" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.backupDeletionPolicy"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_deletion_policy DatabaseDbHome#backup_deletion_policy}.

---

###### `backup_destination_details`<sup>Optional</sup> <a name="backup_destination_details" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.backupDestinationDetails"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails">DatabaseDbHomeDatabaseDbBackupConfigBackupDestinationDetails</a>]]

backup_destination_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#backup_destination_details DatabaseDbHome#backup_destination_details}

---

###### `recovery_window_in_days`<sup>Optional</sup> <a name="recovery_window_in_days" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.recoveryWindowInDays"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#recovery_window_in_days DatabaseDbHome#recovery_window_in_days}.

---

###### `run_immediate_full_backup`<sup>Optional</sup> <a name="run_immediate_full_backup" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.putDbBackupConfig.parameter.runImmediateFullBackup"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_db_home#run_immediate_full_backup DatabaseDbHome#run_immediate_full_backup}.

---

##### `reset_backup_id` <a name="reset_backup_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetBackupId"></a>

```python
def reset_backup_id() -> None
```

##### `reset_backup_tde_password` <a name="reset_backup_tde_password" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetBackupTdePassword"></a>

```python
def reset_backup_tde_password() -> None
```

##### `reset_character_set` <a name="reset_character_set" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetCharacterSet"></a>

```python
def reset_character_set() -> None
```

##### `reset_database_id` <a name="reset_database_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDatabaseId"></a>

```python
def reset_database_id() -> None
```

##### `reset_database_software_image_id` <a name="reset_database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDatabaseSoftwareImageId"></a>

```python
def reset_database_software_image_id() -> None
```

##### `reset_db_backup_config` <a name="reset_db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbBackupConfig"></a>

```python
def reset_db_backup_config() -> None
```

##### `reset_db_name` <a name="reset_db_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbName"></a>

```python
def reset_db_name() -> None
```

##### `reset_db_workload` <a name="reset_db_workload" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDbWorkload"></a>

```python
def reset_db_workload() -> None
```

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_key_store_id` <a name="reset_key_store_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKeyStoreId"></a>

```python
def reset_key_store_id() -> None
```

##### `reset_kms_key_id` <a name="reset_kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKmsKeyId"></a>

```python
def reset_kms_key_id() -> None
```

##### `reset_kms_key_version_id` <a name="reset_kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetKmsKeyVersionId"></a>

```python
def reset_kms_key_version_id() -> None
```

##### `reset_ncharacter_set` <a name="reset_ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetNcharacterSet"></a>

```python
def reset_ncharacter_set() -> None
```

##### `reset_pdb_name` <a name="reset_pdb_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetPdbName"></a>

```python
def reset_pdb_name() -> None
```

##### `reset_pluggable_databases` <a name="reset_pluggable_databases" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetPluggableDatabases"></a>

```python
def reset_pluggable_databases() -> None
```

##### `reset_tde_wallet_password` <a name="reset_tde_wallet_password" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetTdeWalletPassword"></a>

```python
def reset_tde_wallet_password() -> None
```

##### `reset_time_stamp_for_point_in_time_recovery` <a name="reset_time_stamp_for_point_in_time_recovery" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetTimeStampForPointInTimeRecovery"></a>

```python
def reset_time_stamp_for_point_in_time_recovery() -> None
```

##### `reset_vault_id` <a name="reset_vault_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.resetVaultId"></a>

```python
def reset_vault_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.connectionStrings">connection_strings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList">DatabaseDbHomeDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbBackupConfig">db_backup_config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference">DatabaseDbHomeDatabaseDbBackupConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbUniqueName">db_unique_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.oneOffPatches">one_off_patches</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.sidPrefix">sid_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.adminPasswordInput">admin_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupIdInput">backup_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupTdePasswordInput">backup_tde_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.characterSetInput">character_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseIdInput">database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseSoftwareImageIdInput">database_software_image_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbBackupConfigInput">db_backup_config_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbNameInput">db_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbWorkloadInput">db_workload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.keyStoreIdInput">key_store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyIdInput">kms_key_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyVersionIdInput">kms_key_version_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.ncharacterSetInput">ncharacter_set_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pdbNameInput">pdb_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pluggableDatabasesInput">pluggable_databases_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput">tde_wallet_password_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecoveryInput">time_stamp_for_point_in_time_recovery_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.vaultIdInput">vault_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.adminPassword">admin_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupId">backup_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupTdePassword">backup_tde_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.characterSet">character_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseId">database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseSoftwareImageId">database_software_image_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbName">db_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbWorkload">db_workload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.keyStoreId">key_store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyId">kms_key_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyVersionId">kms_key_version_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.ncharacterSet">ncharacter_set</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pdbName">pdb_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pluggableDatabases">pluggable_databases</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.tdeWalletPassword">tde_wallet_password</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecovery">time_stamp_for_point_in_time_recovery</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.vaultId">vault_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_strings`<sup>Required</sup> <a name="connection_strings" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.connectionStrings"></a>

```python
connection_strings: DatabaseDbHomeDatabaseConnectionStringsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseConnectionStringsList">DatabaseDbHomeDatabaseConnectionStringsList</a>

---

##### `db_backup_config`<sup>Required</sup> <a name="db_backup_config" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbBackupConfig"></a>

```python
db_backup_config: DatabaseDbHomeDatabaseDbBackupConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfigOutputReference">DatabaseDbHomeDatabaseDbBackupConfigOutputReference</a>

---

##### `db_unique_name`<sup>Required</sup> <a name="db_unique_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbUniqueName"></a>

```python
db_unique_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `one_off_patches`<sup>Required</sup> <a name="one_off_patches" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.oneOffPatches"></a>

```python
one_off_patches: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `sid_prefix`<sup>Required</sup> <a name="sid_prefix" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.sidPrefix"></a>

```python
sid_prefix: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `admin_password_input`<sup>Optional</sup> <a name="admin_password_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.adminPasswordInput"></a>

```python
admin_password_input: str
```

- *Type:* str

---

##### `backup_id_input`<sup>Optional</sup> <a name="backup_id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupIdInput"></a>

```python
backup_id_input: str
```

- *Type:* str

---

##### `backup_tde_password_input`<sup>Optional</sup> <a name="backup_tde_password_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupTdePasswordInput"></a>

```python
backup_tde_password_input: str
```

- *Type:* str

---

##### `character_set_input`<sup>Optional</sup> <a name="character_set_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.characterSetInput"></a>

```python
character_set_input: str
```

- *Type:* str

---

##### `database_id_input`<sup>Optional</sup> <a name="database_id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseIdInput"></a>

```python
database_id_input: str
```

- *Type:* str

---

##### `database_software_image_id_input`<sup>Optional</sup> <a name="database_software_image_id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseSoftwareImageIdInput"></a>

```python
database_software_image_id_input: str
```

- *Type:* str

---

##### `db_backup_config_input`<sup>Optional</sup> <a name="db_backup_config_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbBackupConfigInput"></a>

```python
db_backup_config_input: DatabaseDbHomeDatabaseDbBackupConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseDbBackupConfig">DatabaseDbHomeDatabaseDbBackupConfig</a>

---

##### `db_name_input`<sup>Optional</sup> <a name="db_name_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbNameInput"></a>

```python
db_name_input: str
```

- *Type:* str

---

##### `db_workload_input`<sup>Optional</sup> <a name="db_workload_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbWorkloadInput"></a>

```python
db_workload_input: str
```

- *Type:* str

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_store_id_input`<sup>Optional</sup> <a name="key_store_id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.keyStoreIdInput"></a>

```python
key_store_id_input: str
```

- *Type:* str

---

##### `kms_key_id_input`<sup>Optional</sup> <a name="kms_key_id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyIdInput"></a>

```python
kms_key_id_input: str
```

- *Type:* str

---

##### `kms_key_version_id_input`<sup>Optional</sup> <a name="kms_key_version_id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyVersionIdInput"></a>

```python
kms_key_version_id_input: str
```

- *Type:* str

---

##### `ncharacter_set_input`<sup>Optional</sup> <a name="ncharacter_set_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.ncharacterSetInput"></a>

```python
ncharacter_set_input: str
```

- *Type:* str

---

##### `pdb_name_input`<sup>Optional</sup> <a name="pdb_name_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pdbNameInput"></a>

```python
pdb_name_input: str
```

- *Type:* str

---

##### `pluggable_databases_input`<sup>Optional</sup> <a name="pluggable_databases_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pluggableDatabasesInput"></a>

```python
pluggable_databases_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tde_wallet_password_input`<sup>Optional</sup> <a name="tde_wallet_password_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.tdeWalletPasswordInput"></a>

```python
tde_wallet_password_input: str
```

- *Type:* str

---

##### `time_stamp_for_point_in_time_recovery_input`<sup>Optional</sup> <a name="time_stamp_for_point_in_time_recovery_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecoveryInput"></a>

```python
time_stamp_for_point_in_time_recovery_input: str
```

- *Type:* str

---

##### `vault_id_input`<sup>Optional</sup> <a name="vault_id_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.vaultIdInput"></a>

```python
vault_id_input: str
```

- *Type:* str

---

##### `admin_password`<sup>Required</sup> <a name="admin_password" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.adminPassword"></a>

```python
admin_password: str
```

- *Type:* str

---

##### `backup_id`<sup>Required</sup> <a name="backup_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupId"></a>

```python
backup_id: str
```

- *Type:* str

---

##### `backup_tde_password`<sup>Required</sup> <a name="backup_tde_password" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.backupTdePassword"></a>

```python
backup_tde_password: str
```

- *Type:* str

---

##### `character_set`<sup>Required</sup> <a name="character_set" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.characterSet"></a>

```python
character_set: str
```

- *Type:* str

---

##### `database_id`<sup>Required</sup> <a name="database_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseId"></a>

```python
database_id: str
```

- *Type:* str

---

##### `database_software_image_id`<sup>Required</sup> <a name="database_software_image_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.databaseSoftwareImageId"></a>

```python
database_software_image_id: str
```

- *Type:* str

---

##### `db_name`<sup>Required</sup> <a name="db_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbName"></a>

```python
db_name: str
```

- *Type:* str

---

##### `db_workload`<sup>Required</sup> <a name="db_workload" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.dbWorkload"></a>

```python
db_workload: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `key_store_id`<sup>Required</sup> <a name="key_store_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.keyStoreId"></a>

```python
key_store_id: str
```

- *Type:* str

---

##### `kms_key_id`<sup>Required</sup> <a name="kms_key_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyId"></a>

```python
kms_key_id: str
```

- *Type:* str

---

##### `kms_key_version_id`<sup>Required</sup> <a name="kms_key_version_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.kmsKeyVersionId"></a>

```python
kms_key_version_id: str
```

- *Type:* str

---

##### `ncharacter_set`<sup>Required</sup> <a name="ncharacter_set" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.ncharacterSet"></a>

```python
ncharacter_set: str
```

- *Type:* str

---

##### `pdb_name`<sup>Required</sup> <a name="pdb_name" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pdbName"></a>

```python
pdb_name: str
```

- *Type:* str

---

##### `pluggable_databases`<sup>Required</sup> <a name="pluggable_databases" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.pluggableDatabases"></a>

```python
pluggable_databases: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `tde_wallet_password`<sup>Required</sup> <a name="tde_wallet_password" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.tdeWalletPassword"></a>

```python
tde_wallet_password: str
```

- *Type:* str

---

##### `time_stamp_for_point_in_time_recovery`<sup>Required</sup> <a name="time_stamp_for_point_in_time_recovery" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.timeStampForPointInTimeRecovery"></a>

```python
time_stamp_for_point_in_time_recovery: str
```

- *Type:* str

---

##### `vault_id`<sup>Required</sup> <a name="vault_id" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.vaultId"></a>

```python
vault_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabaseOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseDbHomeDatabase
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeDatabase">DatabaseDbHomeDatabase</a>

---


### DatabaseDbHomeTimeoutsOutputReference <a name="DatabaseDbHomeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_db_home

databaseDbHome.DatabaseDbHomeTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseDbHomeTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseDbHome.DatabaseDbHomeTimeouts">DatabaseDbHomeTimeouts</a>]

---



