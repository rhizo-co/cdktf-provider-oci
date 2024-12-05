# `databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement` Submodule <a name="`databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management oci_database_management_externalpluggabledatabase_external_pluggable_dbm_features_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalpluggabledatabase_external_pluggable_dbm_features_management

databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enable_external_pluggable_dbm_feature: typing.Union[bool, IResolvable],
  external_pluggable_database_id: str,
  feature_details: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails = None,
  id: str = None,
  timeouts: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.enableExternalPluggableDbmFeature">enable_external_pluggable_dbm_feature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#enable_external_pluggable_dbm_feature DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#enable_external_pluggable_dbm_feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.externalPluggableDatabaseId">external_pluggable_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#external_pluggable_database_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#external_pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.featureDetails">feature_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a></code> | feature_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_external_pluggable_dbm_feature`<sup>Required</sup> <a name="enable_external_pluggable_dbm_feature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.enableExternalPluggableDbmFeature"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#enable_external_pluggable_dbm_feature DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#enable_external_pluggable_dbm_feature}.

---

##### `external_pluggable_database_id`<sup>Required</sup> <a name="external_pluggable_database_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.externalPluggableDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#external_pluggable_database_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#external_pluggable_database_id}.

---

##### `feature_details`<sup>Optional</sup> <a name="feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.featureDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a>

feature_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#feature_details DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#feature_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#timeouts DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putFeatureDetails">put_feature_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetFeatureDetails">reset_feature_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_feature_details` <a name="put_feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putFeatureDetails"></a>

```python
def put_feature_details(
  feature: str,
  connector_details: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails = None
) -> None
```

###### `feature`<sup>Required</sup> <a name="feature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putFeatureDetails.parameter.feature"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#feature DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#feature}.

---

###### `connector_details`<sup>Optional</sup> <a name="connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putFeatureDetails.parameter.connectorDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

connector_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#connector_details DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#connector_details}

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#create DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#delete DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#update DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#update}.

---

##### `reset_feature_details` <a name="reset_feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetFeatureDetails"></a>

```python
def reset_feature_details() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalpluggabledatabase_external_pluggable_dbm_features_management

databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalpluggabledatabase_external_pluggable_dbm_features_management

databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalpluggabledatabase_external_pluggable_dbm_features_management

databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalpluggabledatabase_external_pluggable_dbm_features_management

databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.featureDetails">feature_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.enableExternalPluggableDbmFeatureInput">enable_external_pluggable_dbm_feature_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.externalPluggableDatabaseIdInput">external_pluggable_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.featureDetailsInput">feature_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.enableExternalPluggableDbmFeature">enable_external_pluggable_dbm_feature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.externalPluggableDatabaseId">external_pluggable_database_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_details`<sup>Required</sup> <a name="feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.featureDetails"></a>

```python
feature_details: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.timeouts"></a>

```python
timeouts: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference</a>

---

##### `enable_external_pluggable_dbm_feature_input`<sup>Optional</sup> <a name="enable_external_pluggable_dbm_feature_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.enableExternalPluggableDbmFeatureInput"></a>

```python
enable_external_pluggable_dbm_feature_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_pluggable_database_id_input`<sup>Optional</sup> <a name="external_pluggable_database_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.externalPluggableDatabaseIdInput"></a>

```python
external_pluggable_database_id_input: str
```

- *Type:* str

---

##### `feature_details_input`<sup>Optional</sup> <a name="feature_details_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.featureDetailsInput"></a>

```python
feature_details_input: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a>]

---

##### `enable_external_pluggable_dbm_feature`<sup>Required</sup> <a name="enable_external_pluggable_dbm_feature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.enableExternalPluggableDbmFeature"></a>

```python
enable_external_pluggable_dbm_feature: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_pluggable_database_id`<sup>Required</sup> <a name="external_pluggable_database_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.externalPluggableDatabaseId"></a>

```python
external_pluggable_database_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalpluggabledatabase_external_pluggable_dbm_features_management

databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enable_external_pluggable_dbm_feature: typing.Union[bool, IResolvable],
  external_pluggable_database_id: str,
  feature_details: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails = None,
  id: str = None,
  timeouts: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.enableExternalPluggableDbmFeature">enable_external_pluggable_dbm_feature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#enable_external_pluggable_dbm_feature DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#enable_external_pluggable_dbm_feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.externalPluggableDatabaseId">external_pluggable_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#external_pluggable_database_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#external_pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.featureDetails">feature_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a></code> | feature_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_external_pluggable_dbm_feature`<sup>Required</sup> <a name="enable_external_pluggable_dbm_feature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.enableExternalPluggableDbmFeature"></a>

```python
enable_external_pluggable_dbm_feature: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#enable_external_pluggable_dbm_feature DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#enable_external_pluggable_dbm_feature}.

---

##### `external_pluggable_database_id`<sup>Required</sup> <a name="external_pluggable_database_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.externalPluggableDatabaseId"></a>

```python
external_pluggable_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#external_pluggable_database_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#external_pluggable_database_id}.

---

##### `feature_details`<sup>Optional</sup> <a name="feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.featureDetails"></a>

```python
feature_details: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a>

feature_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#feature_details DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#feature_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.timeouts"></a>

```python
timeouts: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#timeouts DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#timeouts}

---

### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalpluggabledatabase_external_pluggable_dbm_features_management

databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails(
  feature: str,
  connector_details: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails.property.feature">feature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#feature DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails.property.connectorDetails">connector_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | connector_details block. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails.property.feature"></a>

```python
feature: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#feature DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#feature}.

---

##### `connector_details`<sup>Optional</sup> <a name="connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails.property.connectorDetails"></a>

```python
connector_details: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

connector_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#connector_details DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#connector_details}

---

### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalpluggabledatabase_external_pluggable_dbm_features_management

databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails(
  connector_type: str = None,
  database_connector_id: str = None,
  management_agent_id: str = None,
  private_end_point_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.connectorType">connector_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#connector_type DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#connector_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.databaseConnectorId">database_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#database_connector_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#management_agent_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.privateEndPointId">private_end_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#private_end_point_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#private_end_point_id}. |

---

##### `connector_type`<sup>Optional</sup> <a name="connector_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#connector_type DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#connector_type}.

---

##### `database_connector_id`<sup>Optional</sup> <a name="database_connector_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.databaseConnectorId"></a>

```python
database_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#database_connector_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#database_connector_id}.

---

##### `management_agent_id`<sup>Optional</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#management_agent_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#management_agent_id}.

---

##### `private_end_point_id`<sup>Optional</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.privateEndPointId"></a>

```python
private_end_point_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#private_end_point_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#private_end_point_id}.

---

### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalpluggabledatabase_external_pluggable_dbm_features_management

databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#create DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#delete DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#update DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#create DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#delete DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#update DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalpluggabledatabase_external_pluggable_dbm_features_management

databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetConnectorType">reset_connector_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetDatabaseConnectorId">reset_database_connector_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetManagementAgentId">reset_management_agent_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetPrivateEndPointId">reset_private_end_point_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connector_type` <a name="reset_connector_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetConnectorType"></a>

```python
def reset_connector_type() -> None
```

##### `reset_database_connector_id` <a name="reset_database_connector_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetDatabaseConnectorId"></a>

```python
def reset_database_connector_id() -> None
```

##### `reset_management_agent_id` <a name="reset_management_agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetManagementAgentId"></a>

```python
def reset_management_agent_id() -> None
```

##### `reset_private_end_point_id` <a name="reset_private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetPrivateEndPointId"></a>

```python
def reset_private_end_point_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorTypeInput">connector_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorIdInput">database_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentIdInput">management_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointIdInput">private_end_point_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorId">database_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointId">private_end_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_type_input`<sup>Optional</sup> <a name="connector_type_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorTypeInput"></a>

```python
connector_type_input: str
```

- *Type:* str

---

##### `database_connector_id_input`<sup>Optional</sup> <a name="database_connector_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorIdInput"></a>

```python
database_connector_id_input: str
```

- *Type:* str

---

##### `management_agent_id_input`<sup>Optional</sup> <a name="management_agent_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentIdInput"></a>

```python
management_agent_id_input: str
```

- *Type:* str

---

##### `private_end_point_id_input`<sup>Optional</sup> <a name="private_end_point_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointIdInput"></a>

```python
private_end_point_id_input: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `database_connector_id`<sup>Required</sup> <a name="database_connector_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorId"></a>

```python
database_connector_id: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `private_end_point_id`<sup>Required</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointId"></a>

```python
private_end_point_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

---


### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalpluggabledatabase_external_pluggable_dbm_features_management

databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails">put_connector_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.resetConnectorDetails">reset_connector_details</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_connector_details` <a name="put_connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails"></a>

```python
def put_connector_details(
  connector_type: str = None,
  database_connector_id: str = None,
  management_agent_id: str = None,
  private_end_point_id: str = None
) -> None
```

###### `connector_type`<sup>Optional</sup> <a name="connector_type" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails.parameter.connectorType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#connector_type DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#connector_type}.

---

###### `database_connector_id`<sup>Optional</sup> <a name="database_connector_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails.parameter.databaseConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#database_connector_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#database_connector_id}.

---

###### `management_agent_id`<sup>Optional</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails.parameter.managementAgentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#management_agent_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#management_agent_id}.

---

###### `private_end_point_id`<sup>Optional</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails.parameter.privateEndPointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#private_end_point_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#private_end_point_id}.

---

##### `reset_connector_details` <a name="reset_connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.resetConnectorDetails"></a>

```python
def reset_connector_details() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetails">connector_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetailsInput">connector_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.featureInput">feature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.feature">feature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_details`<sup>Required</sup> <a name="connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetails"></a>

```python
connector_details: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference</a>

---

##### `connector_details_input`<sup>Optional</sup> <a name="connector_details_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetailsInput"></a>

```python
connector_details_input: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

---

##### `feature_input`<sup>Optional</sup> <a name="feature_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.featureInput"></a>

```python
feature_input: str
```

- *Type:* str

---

##### `feature`<sup>Required</sup> <a name="feature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.feature"></a>

```python
feature: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a>

---


### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_externalpluggabledatabase_external_pluggable_dbm_features_management

databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a>]

---



