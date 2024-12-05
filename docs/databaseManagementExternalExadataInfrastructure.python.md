# `databaseManagementExternalExadataInfrastructure` Submodule <a name="`databaseManagementExternalExadataInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalExadataInfrastructure <a name="DatabaseManagementExternalExadataInfrastructure" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure oci_database_management_external_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_infrastructure

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  db_system_ids: typing.List[str],
  display_name: str,
  defined_tags: typing.Mapping[str] = None,
  discovery_key: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  license_model: str = None,
  storage_server_names: typing.List[str] = None,
  timeouts: DatabaseManagementExternalExadataInfrastructureTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#compartment_id DatabaseManagementExternalExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.dbSystemIds">db_system_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#db_system_ids DatabaseManagementExternalExadataInfrastructure#db_system_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#display_name DatabaseManagementExternalExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#defined_tags DatabaseManagementExternalExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.discoveryKey">discovery_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#discovery_key DatabaseManagementExternalExadataInfrastructure#discovery_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#freeform_tags DatabaseManagementExternalExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#id DatabaseManagementExternalExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#license_model DatabaseManagementExternalExadataInfrastructure#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.storageServerNames">storage_server_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#storage_server_names DatabaseManagementExternalExadataInfrastructure#storage_server_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#compartment_id DatabaseManagementExternalExadataInfrastructure#compartment_id}.

---

##### `db_system_ids`<sup>Required</sup> <a name="db_system_ids" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.dbSystemIds"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#db_system_ids DatabaseManagementExternalExadataInfrastructure#db_system_ids}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.displayName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#display_name DatabaseManagementExternalExadataInfrastructure#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.definedTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#defined_tags DatabaseManagementExternalExadataInfrastructure#defined_tags}.

---

##### `discovery_key`<sup>Optional</sup> <a name="discovery_key" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.discoveryKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#discovery_key DatabaseManagementExternalExadataInfrastructure#discovery_key}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.freeformTags"></a>

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#freeform_tags DatabaseManagementExternalExadataInfrastructure#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#id DatabaseManagementExternalExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#license_model DatabaseManagementExternalExadataInfrastructure#license_model}.

---

##### `storage_server_names`<sup>Optional</sup> <a name="storage_server_names" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.storageServerNames"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#storage_server_names DatabaseManagementExternalExadataInfrastructure#storage_server_names}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#timeouts DatabaseManagementExternalExadataInfrastructure#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetDefinedTags">reset_defined_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetDiscoveryKey">reset_discovery_key</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetFreeformTags">reset_freeform_tags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetLicenseModel">reset_license_model</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetStorageServerNames">reset_storage_server_names</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#create DatabaseManagementExternalExadataInfrastructure#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#delete DatabaseManagementExternalExadataInfrastructure#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#update DatabaseManagementExternalExadataInfrastructure#update}.

---

##### `reset_defined_tags` <a name="reset_defined_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetDefinedTags"></a>

```python
def reset_defined_tags() -> None
```

##### `reset_discovery_key` <a name="reset_discovery_key" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetDiscoveryKey"></a>

```python
def reset_discovery_key() -> None
```

##### `reset_freeform_tags` <a name="reset_freeform_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetFreeformTags"></a>

```python
def reset_freeform_tags() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```

##### `reset_storage_server_names` <a name="reset_storage_server_names" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetStorageServerNames"></a>

```python
def reset_storage_server_names() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_infrastructure

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_infrastructure

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_infrastructure

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_infrastructure

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseManagementExternalExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseManagementExternalExadataInfrastructure to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseManagementExternalExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.additionalDetails">additional_details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.databaseCompartments">database_compartments</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.databaseSystems">database_systems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList">DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.internalId">internal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.rackSize">rack_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageGrid">storage_grid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList">DatabaseManagementExternalExadataInfrastructureStorageGridList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference">DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dbSystemIdsInput">db_system_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.definedTagsInput">defined_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.discoveryKeyInput">discovery_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.freeformTagsInput">freeform_tags_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageServerNamesInput">storage_server_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dbSystemIds">db_system_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.discoveryKey">discovery_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageServerNames">storage_server_names</a></code> | <code>typing.List[str]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `additional_details`<sup>Required</sup> <a name="additional_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.additionalDetails"></a>

```python
additional_details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `database_compartments`<sup>Required</sup> <a name="database_compartments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.databaseCompartments"></a>

```python
database_compartments: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `database_systems`<sup>Required</sup> <a name="database_systems" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.databaseSystems"></a>

```python
database_systems: DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList">DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList</a>

---

##### `internal_id`<sup>Required</sup> <a name="internal_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.internalId"></a>

```python
internal_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `rack_size`<sup>Required</sup> <a name="rack_size" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.rackSize"></a>

```python
rack_size: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `storage_grid`<sup>Required</sup> <a name="storage_grid" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageGrid"></a>

```python
storage_grid: DatabaseManagementExternalExadataInfrastructureStorageGridList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList">DatabaseManagementExternalExadataInfrastructureStorageGridList</a>

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeouts"></a>

```python
timeouts: DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference">DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference</a>

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `db_system_ids_input`<sup>Optional</sup> <a name="db_system_ids_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dbSystemIdsInput"></a>

```python
db_system_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags_input`<sup>Optional</sup> <a name="defined_tags_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.definedTagsInput"></a>

```python
defined_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `discovery_key_input`<sup>Optional</sup> <a name="discovery_key_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.discoveryKeyInput"></a>

```python
discovery_key_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `freeform_tags_input`<sup>Optional</sup> <a name="freeform_tags_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.freeformTagsInput"></a>

```python
freeform_tags_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `storage_server_names_input`<sup>Optional</sup> <a name="storage_server_names_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageServerNamesInput"></a>

```python
storage_server_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseManagementExternalExadataInfrastructureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a>]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `db_system_ids`<sup>Required</sup> <a name="db_system_ids" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dbSystemIds"></a>

```python
db_system_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `discovery_key`<sup>Required</sup> <a name="discovery_key" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.discoveryKey"></a>

```python
discovery_key: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `storage_server_names`<sup>Required</sup> <a name="storage_server_names" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageServerNames"></a>

```python
storage_server_names: typing.List[str]
```

- *Type:* typing.List[str]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalExadataInfrastructureConfig <a name="DatabaseManagementExternalExadataInfrastructureConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_infrastructure

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  db_system_ids: typing.List[str],
  display_name: str,
  defined_tags: typing.Mapping[str] = None,
  discovery_key: str = None,
  freeform_tags: typing.Mapping[str] = None,
  id: str = None,
  license_model: str = None,
  storage_server_names: typing.List[str] = None,
  timeouts: DatabaseManagementExternalExadataInfrastructureTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#compartment_id DatabaseManagementExternalExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.dbSystemIds">db_system_ids</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#db_system_ids DatabaseManagementExternalExadataInfrastructure#db_system_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.displayName">display_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#display_name DatabaseManagementExternalExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.definedTags">defined_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#defined_tags DatabaseManagementExternalExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.discoveryKey">discovery_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#discovery_key DatabaseManagementExternalExadataInfrastructure#discovery_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.freeformTags">freeform_tags</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#freeform_tags DatabaseManagementExternalExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#id DatabaseManagementExternalExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#license_model DatabaseManagementExternalExadataInfrastructure#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.storageServerNames">storage_server_names</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#storage_server_names DatabaseManagementExternalExadataInfrastructure#storage_server_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#compartment_id DatabaseManagementExternalExadataInfrastructure#compartment_id}.

---

##### `db_system_ids`<sup>Required</sup> <a name="db_system_ids" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.dbSystemIds"></a>

```python
db_system_ids: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#db_system_ids DatabaseManagementExternalExadataInfrastructure#db_system_ids}.

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#display_name DatabaseManagementExternalExadataInfrastructure#display_name}.

---

##### `defined_tags`<sup>Optional</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.definedTags"></a>

```python
defined_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#defined_tags DatabaseManagementExternalExadataInfrastructure#defined_tags}.

---

##### `discovery_key`<sup>Optional</sup> <a name="discovery_key" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.discoveryKey"></a>

```python
discovery_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#discovery_key DatabaseManagementExternalExadataInfrastructure#discovery_key}.

---

##### `freeform_tags`<sup>Optional</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.freeformTags"></a>

```python
freeform_tags: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#freeform_tags DatabaseManagementExternalExadataInfrastructure#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#id DatabaseManagementExternalExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#license_model DatabaseManagementExternalExadataInfrastructure#license_model}.

---

##### `storage_server_names`<sup>Optional</sup> <a name="storage_server_names" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.storageServerNames"></a>

```python
storage_server_names: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#storage_server_names DatabaseManagementExternalExadataInfrastructure#storage_server_names}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.timeouts"></a>

```python
timeouts: DatabaseManagementExternalExadataInfrastructureTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#timeouts DatabaseManagementExternalExadataInfrastructure#timeouts}

---

### DatabaseManagementExternalExadataInfrastructureDatabaseSystems <a name="DatabaseManagementExternalExadataInfrastructureDatabaseSystems" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_infrastructure

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems()
```


### DatabaseManagementExternalExadataInfrastructureStorageGrid <a name="DatabaseManagementExternalExadataInfrastructureStorageGrid" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_infrastructure

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid()
```


### DatabaseManagementExternalExadataInfrastructureTimeouts <a name="DatabaseManagementExternalExadataInfrastructureTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_infrastructure

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#create DatabaseManagementExternalExadataInfrastructure#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#delete DatabaseManagementExternalExadataInfrastructure#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#update DatabaseManagementExternalExadataInfrastructure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#create DatabaseManagementExternalExadataInfrastructure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#delete DatabaseManagementExternalExadataInfrastructure#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#update DatabaseManagementExternalExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList <a name="DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_infrastructure

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference <a name="DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_infrastructure

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.additionalDetails">additional_details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalId">internal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems">DatabaseManagementExternalExadataInfrastructureDatabaseSystems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_details`<sup>Required</sup> <a name="additional_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.additionalDetails"></a>

```python
additional_details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_id`<sup>Required</sup> <a name="internal_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalId"></a>

```python
internal_id: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseManagementExternalExadataInfrastructureDatabaseSystems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems">DatabaseManagementExternalExadataInfrastructureDatabaseSystems</a>

---


### DatabaseManagementExternalExadataInfrastructureStorageGridList <a name="DatabaseManagementExternalExadataInfrastructureStorageGridList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_infrastructure

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference <a name="DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_infrastructure

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.additionalDetails">additional_details</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalId">internal_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.serverCount">server_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.status">status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.version">version</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid">DatabaseManagementExternalExadataInfrastructureStorageGrid</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_details`<sup>Required</sup> <a name="additional_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.additionalDetails"></a>

```python
additional_details: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `internal_id`<sup>Required</sup> <a name="internal_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalId"></a>

```python
internal_id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `server_count`<sup>Required</sup> <a name="server_count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.serverCount"></a>

```python
server_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.status"></a>

```python
status: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.version"></a>

```python
version: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseManagementExternalExadataInfrastructureStorageGrid
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid">DatabaseManagementExternalExadataInfrastructureStorageGrid</a>

---


### DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference <a name="DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_external_exadata_infrastructure

databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseManagementExternalExadataInfrastructureTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a>]

---



