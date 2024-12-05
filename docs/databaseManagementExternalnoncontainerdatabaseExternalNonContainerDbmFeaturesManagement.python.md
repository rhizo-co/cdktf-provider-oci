# `databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement` Submodule <a name="`databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement <a name="DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management oci_database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management

databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enable_external_non_container_dbm_feature: typing.Union[bool, IResolvable],
  external_non_container_database_id: str,
  feature_details: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails = None,
  id: str = None,
  timeouts: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.enableExternalNonContainerDbmFeature">enable_external_non_container_dbm_feature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#enable_external_non_container_dbm_feature DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#enable_external_non_container_dbm_feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.externalNonContainerDatabaseId">external_non_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#external_non_container_database_id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#external_non_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.featureDetails">feature_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails</a></code> | feature_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_external_non_container_dbm_feature`<sup>Required</sup> <a name="enable_external_non_container_dbm_feature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.enableExternalNonContainerDbmFeature"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#enable_external_non_container_dbm_feature DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#enable_external_non_container_dbm_feature}.

---

##### `external_non_container_database_id`<sup>Required</sup> <a name="external_non_container_database_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.externalNonContainerDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#external_non_container_database_id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#external_non_container_database_id}.

---

##### `feature_details`<sup>Optional</sup> <a name="feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.featureDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails</a>

feature_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#feature_details DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#feature_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#timeouts DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.putFeatureDetails">put_feature_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.resetFeatureDetails">reset_feature_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_feature_details` <a name="put_feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.putFeatureDetails"></a>

```python
def put_feature_details(
  feature: str,
  connector_details: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails = None,
  license_model: str = None
) -> None
```

###### `feature`<sup>Required</sup> <a name="feature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.putFeatureDetails.parameter.feature"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#feature DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#feature}.

---

###### `connector_details`<sup>Optional</sup> <a name="connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.putFeatureDetails.parameter.connectorDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

connector_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#connector_details DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#connector_details}

---

###### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.putFeatureDetails.parameter.licenseModel"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#license_model DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#license_model}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#create DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#delete DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#update DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#update}.

---

##### `reset_feature_details` <a name="reset_feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.resetFeatureDetails"></a>

```python
def reset_feature_details() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management

databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management

databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management

databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management

databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.featureDetails">feature_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.enableExternalNonContainerDbmFeatureInput">enable_external_non_container_dbm_feature_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.externalNonContainerDatabaseIdInput">external_non_container_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.featureDetailsInput">feature_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.enableExternalNonContainerDbmFeature">enable_external_non_container_dbm_feature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.externalNonContainerDatabaseId">external_non_container_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_details`<sup>Required</sup> <a name="feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.featureDetails"></a>

```python
feature_details: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.timeouts"></a>

```python
timeouts: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference</a>

---

##### `enable_external_non_container_dbm_feature_input`<sup>Optional</sup> <a name="enable_external_non_container_dbm_feature_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.enableExternalNonContainerDbmFeatureInput"></a>

```python
enable_external_non_container_dbm_feature_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_non_container_database_id_input`<sup>Optional</sup> <a name="external_non_container_database_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.externalNonContainerDatabaseIdInput"></a>

```python
external_non_container_database_id_input: str
```

- *Type:* str

---

##### `feature_details_input`<sup>Optional</sup> <a name="feature_details_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.featureDetailsInput"></a>

```python
feature_details_input: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts</a>]

---

##### `enable_external_non_container_dbm_feature`<sup>Required</sup> <a name="enable_external_non_container_dbm_feature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.enableExternalNonContainerDbmFeature"></a>

```python
enable_external_non_container_dbm_feature: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_non_container_database_id`<sup>Required</sup> <a name="external_non_container_database_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.externalNonContainerDatabaseId"></a>

```python
external_non_container_database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig <a name="DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management

databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enable_external_non_container_dbm_feature: typing.Union[bool, IResolvable],
  external_non_container_database_id: str,
  feature_details: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails = None,
  id: str = None,
  timeouts: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.enableExternalNonContainerDbmFeature">enable_external_non_container_dbm_feature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#enable_external_non_container_dbm_feature DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#enable_external_non_container_dbm_feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.externalNonContainerDatabaseId">external_non_container_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#external_non_container_database_id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#external_non_container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.featureDetails">feature_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails</a></code> | feature_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_external_non_container_dbm_feature`<sup>Required</sup> <a name="enable_external_non_container_dbm_feature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.enableExternalNonContainerDbmFeature"></a>

```python
enable_external_non_container_dbm_feature: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#enable_external_non_container_dbm_feature DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#enable_external_non_container_dbm_feature}.

---

##### `external_non_container_database_id`<sup>Required</sup> <a name="external_non_container_database_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.externalNonContainerDatabaseId"></a>

```python
external_non_container_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#external_non_container_database_id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#external_non_container_database_id}.

---

##### `feature_details`<sup>Optional</sup> <a name="feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.featureDetails"></a>

```python
feature_details: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails</a>

feature_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#feature_details DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#feature_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementConfig.property.timeouts"></a>

```python
timeouts: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#timeouts DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#timeouts}

---

### DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails <a name="DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management

databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails(
  feature: str,
  connector_details: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails = None,
  license_model: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails.property.feature">feature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#feature DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails.property.connectorDetails">connector_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | connector_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails.property.licenseModel">license_model</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#license_model DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#license_model}. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails.property.feature"></a>

```python
feature: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#feature DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#feature}.

---

##### `connector_details`<sup>Optional</sup> <a name="connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails.property.connectorDetails"></a>

```python
connector_details: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

connector_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#connector_details DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#connector_details}

---

##### `license_model`<sup>Optional</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#license_model DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#license_model}.

---

### DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails <a name="DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management

databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails(
  connector_type: str = None,
  database_connector_id: str = None,
  management_agent_id: str = None,
  private_end_point_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails.property.connectorType">connector_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#connector_type DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#connector_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails.property.databaseConnectorId">database_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#database_connector_id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#management_agent_id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails.property.privateEndPointId">private_end_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#private_end_point_id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#private_end_point_id}. |

---

##### `connector_type`<sup>Optional</sup> <a name="connector_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#connector_type DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#connector_type}.

---

##### `database_connector_id`<sup>Optional</sup> <a name="database_connector_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails.property.databaseConnectorId"></a>

```python
database_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#database_connector_id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#database_connector_id}.

---

##### `management_agent_id`<sup>Optional</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#management_agent_id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#management_agent_id}.

---

##### `private_end_point_id`<sup>Optional</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails.property.privateEndPointId"></a>

```python
private_end_point_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#private_end_point_id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#private_end_point_id}.

---

### DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts <a name="DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management

databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#create DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#delete DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#update DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#create DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#delete DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#update DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference <a name="DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management

databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetConnectorType">reset_connector_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetDatabaseConnectorId">reset_database_connector_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetManagementAgentId">reset_management_agent_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetPrivateEndPointId">reset_private_end_point_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connector_type` <a name="reset_connector_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetConnectorType"></a>

```python
def reset_connector_type() -> None
```

##### `reset_database_connector_id` <a name="reset_database_connector_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetDatabaseConnectorId"></a>

```python
def reset_database_connector_id() -> None
```

##### `reset_management_agent_id` <a name="reset_management_agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetManagementAgentId"></a>

```python
def reset_management_agent_id() -> None
```

##### `reset_private_end_point_id` <a name="reset_private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetPrivateEndPointId"></a>

```python
def reset_private_end_point_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorTypeInput">connector_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorIdInput">database_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentIdInput">management_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointIdInput">private_end_point_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorId">database_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointId">private_end_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_type_input`<sup>Optional</sup> <a name="connector_type_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorTypeInput"></a>

```python
connector_type_input: str
```

- *Type:* str

---

##### `database_connector_id_input`<sup>Optional</sup> <a name="database_connector_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorIdInput"></a>

```python
database_connector_id_input: str
```

- *Type:* str

---

##### `management_agent_id_input`<sup>Optional</sup> <a name="management_agent_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentIdInput"></a>

```python
management_agent_id_input: str
```

- *Type:* str

---

##### `private_end_point_id_input`<sup>Optional</sup> <a name="private_end_point_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointIdInput"></a>

```python
private_end_point_id_input: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `database_connector_id`<sup>Required</sup> <a name="database_connector_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorId"></a>

```python
database_connector_id: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `private_end_point_id`<sup>Required</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointId"></a>

```python
private_end_point_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

---


### DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference <a name="DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management

databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails">put_connector_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.resetConnectorDetails">reset_connector_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.resetLicenseModel">reset_license_model</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_connector_details` <a name="put_connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails"></a>

```python
def put_connector_details(
  connector_type: str = None,
  database_connector_id: str = None,
  management_agent_id: str = None,
  private_end_point_id: str = None
) -> None
```

###### `connector_type`<sup>Optional</sup> <a name="connector_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails.parameter.connectorType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#connector_type DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#connector_type}.

---

###### `database_connector_id`<sup>Optional</sup> <a name="database_connector_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails.parameter.databaseConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#database_connector_id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#database_connector_id}.

---

###### `management_agent_id`<sup>Optional</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails.parameter.managementAgentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#management_agent_id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#management_agent_id}.

---

###### `private_end_point_id`<sup>Optional</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails.parameter.privateEndPointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management#private_end_point_id DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement#private_end_point_id}.

---

##### `reset_connector_details` <a name="reset_connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.resetConnectorDetails"></a>

```python
def reset_connector_details() -> None
```

##### `reset_license_model` <a name="reset_license_model" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.resetLicenseModel"></a>

```python
def reset_license_model() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetails">connector_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetailsInput">connector_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.featureInput">feature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.licenseModelInput">license_model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.feature">feature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.licenseModel">license_model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_details`<sup>Required</sup> <a name="connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetails"></a>

```python
connector_details: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference</a>

---

##### `connector_details_input`<sup>Optional</sup> <a name="connector_details_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetailsInput"></a>

```python
connector_details_input: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

---

##### `feature_input`<sup>Optional</sup> <a name="feature_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.featureInput"></a>

```python
feature_input: str
```

- *Type:* str

---

##### `license_model_input`<sup>Optional</sup> <a name="license_model_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.licenseModelInput"></a>

```python
license_model_input: str
```

- *Type:* str

---

##### `feature`<sup>Required</sup> <a name="feature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.feature"></a>

```python
feature: str
```

- *Type:* str

---

##### `license_model`<sup>Required</sup> <a name="license_model" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.licenseModel"></a>

```python
license_model: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementFeatureDetails</a>

---


### DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference <a name="DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalnoncontainerdatabase_external_non_container_dbm_features_management

databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagement.DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts">DatabaseManagementExternalnoncontainerdatabaseExternalNonContainerDbmFeaturesManagementTimeouts</a>]

---



