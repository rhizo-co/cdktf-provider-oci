# `databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement` Submodule <a name="`databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management oci_database_management_pluggabledatabase_pluggable_database_dbm_features_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enable_pluggable_database_dbm_feature: typing.Union[bool, IResolvable],
  pluggable_database_id: str,
  feature_details: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails = None,
  id: str = None,
  modify_pluggable_database_dbm_feature: typing.Union[bool, IResolvable] = None,
  timeouts: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.enablePluggableDatabaseDbmFeature">enable_pluggable_database_dbm_feature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#enable_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#enable_pluggable_database_dbm_feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.pluggableDatabaseId">pluggable_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#pluggable_database_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.featureDetails">feature_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a></code> | feature_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.modifyPluggableDatabaseDbmFeature">modify_pluggable_database_dbm_feature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#modify_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#modify_pluggable_database_dbm_feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_pluggable_database_dbm_feature`<sup>Required</sup> <a name="enable_pluggable_database_dbm_feature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.enablePluggableDatabaseDbmFeature"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#enable_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#enable_pluggable_database_dbm_feature}.

---

##### `pluggable_database_id`<sup>Required</sup> <a name="pluggable_database_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.pluggableDatabaseId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#pluggable_database_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#pluggable_database_id}.

---

##### `feature_details`<sup>Optional</sup> <a name="feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.featureDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a>

feature_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#feature_details DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#feature_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modify_pluggable_database_dbm_feature`<sup>Optional</sup> <a name="modify_pluggable_database_dbm_feature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.modifyPluggableDatabaseDbmFeature"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#modify_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#modify_pluggable_database_dbm_feature}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#timeouts DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putFeatureDetails">put_feature_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetFeatureDetails">reset_feature_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetModifyPluggableDatabaseDbmFeature">reset_modify_pluggable_database_dbm_feature</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_feature_details` <a name="put_feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putFeatureDetails"></a>

```python
def put_feature_details(
  feature: str,
  connector_details: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails = None,
  database_connection_details: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails = None,
  is_auto_enable_pluggable_database: typing.Union[bool, IResolvable] = None,
  management_type: str = None
) -> None
```

###### `feature`<sup>Required</sup> <a name="feature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putFeatureDetails.parameter.feature"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#feature}.

---

###### `connector_details`<sup>Optional</sup> <a name="connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putFeatureDetails.parameter.connectorDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

connector_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connector_details DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connector_details}

---

###### `database_connection_details`<sup>Optional</sup> <a name="database_connection_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putFeatureDetails.parameter.databaseConnectionDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails</a>

database_connection_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#database_connection_details DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#database_connection_details}

---

###### `is_auto_enable_pluggable_database`<sup>Optional</sup> <a name="is_auto_enable_pluggable_database" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putFeatureDetails.parameter.isAutoEnablePluggableDatabase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#is_auto_enable_pluggable_database DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#is_auto_enable_pluggable_database}.

---

###### `management_type`<sup>Optional</sup> <a name="management_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putFeatureDetails.parameter.managementType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#management_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#management_type}.

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#create DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#delete DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#update DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#update}.

---

##### `reset_feature_details` <a name="reset_feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetFeatureDetails"></a>

```python
def reset_feature_details() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_modify_pluggable_database_dbm_feature` <a name="reset_modify_pluggable_database_dbm_feature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetModifyPluggableDatabaseDbmFeature"></a>

```python
def reset_modify_pluggable_database_dbm_feature() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.featureDetails">feature_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.enablePluggableDatabaseDbmFeatureInput">enable_pluggable_database_dbm_feature_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.featureDetailsInput">feature_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.modifyPluggableDatabaseDbmFeatureInput">modify_pluggable_database_dbm_feature_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.pluggableDatabaseIdInput">pluggable_database_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.enablePluggableDatabaseDbmFeature">enable_pluggable_database_dbm_feature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.modifyPluggableDatabaseDbmFeature">modify_pluggable_database_dbm_feature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.pluggableDatabaseId">pluggable_database_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `feature_details`<sup>Required</sup> <a name="feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.featureDetails"></a>

```python
feature_details: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.timeouts"></a>

```python
timeouts: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference</a>

---

##### `enable_pluggable_database_dbm_feature_input`<sup>Optional</sup> <a name="enable_pluggable_database_dbm_feature_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.enablePluggableDatabaseDbmFeatureInput"></a>

```python
enable_pluggable_database_dbm_feature_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `feature_details_input`<sup>Optional</sup> <a name="feature_details_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.featureDetailsInput"></a>

```python
feature_details_input: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `modify_pluggable_database_dbm_feature_input`<sup>Optional</sup> <a name="modify_pluggable_database_dbm_feature_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.modifyPluggableDatabaseDbmFeatureInput"></a>

```python
modify_pluggable_database_dbm_feature_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pluggable_database_id_input`<sup>Optional</sup> <a name="pluggable_database_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.pluggableDatabaseIdInput"></a>

```python
pluggable_database_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a>]

---

##### `enable_pluggable_database_dbm_feature`<sup>Required</sup> <a name="enable_pluggable_database_dbm_feature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.enablePluggableDatabaseDbmFeature"></a>

```python
enable_pluggable_database_dbm_feature: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `modify_pluggable_database_dbm_feature`<sup>Required</sup> <a name="modify_pluggable_database_dbm_feature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.modifyPluggableDatabaseDbmFeature"></a>

```python
modify_pluggable_database_dbm_feature: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pluggable_database_id`<sup>Required</sup> <a name="pluggable_database_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.pluggableDatabaseId"></a>

```python
pluggable_database_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  enable_pluggable_database_dbm_feature: typing.Union[bool, IResolvable],
  pluggable_database_id: str,
  feature_details: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails = None,
  id: str = None,
  modify_pluggable_database_dbm_feature: typing.Union[bool, IResolvable] = None,
  timeouts: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.enablePluggableDatabaseDbmFeature">enable_pluggable_database_dbm_feature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#enable_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#enable_pluggable_database_dbm_feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.pluggableDatabaseId">pluggable_database_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#pluggable_database_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.featureDetails">feature_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a></code> | feature_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.modifyPluggableDatabaseDbmFeature">modify_pluggable_database_dbm_feature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#modify_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#modify_pluggable_database_dbm_feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `enable_pluggable_database_dbm_feature`<sup>Required</sup> <a name="enable_pluggable_database_dbm_feature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.enablePluggableDatabaseDbmFeature"></a>

```python
enable_pluggable_database_dbm_feature: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#enable_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#enable_pluggable_database_dbm_feature}.

---

##### `pluggable_database_id`<sup>Required</sup> <a name="pluggable_database_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.pluggableDatabaseId"></a>

```python
pluggable_database_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#pluggable_database_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#pluggable_database_id}.

---

##### `feature_details`<sup>Optional</sup> <a name="feature_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.featureDetails"></a>

```python
feature_details: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a>

feature_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#feature_details DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#feature_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modify_pluggable_database_dbm_feature`<sup>Optional</sup> <a name="modify_pluggable_database_dbm_feature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.modifyPluggableDatabaseDbmFeature"></a>

```python
modify_pluggable_database_dbm_feature: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#modify_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#modify_pluggable_database_dbm_feature}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.timeouts"></a>

```python
timeouts: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#timeouts DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#timeouts}

---

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails(
  feature: str,
  connector_details: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails = None,
  database_connection_details: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails = None,
  is_auto_enable_pluggable_database: typing.Union[bool, IResolvable] = None,
  management_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.feature">feature</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.connectorDetails">connector_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | connector_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.databaseConnectionDetails">database_connection_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails</a></code> | database_connection_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.isAutoEnablePluggableDatabase">is_auto_enable_pluggable_database</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#is_auto_enable_pluggable_database DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#is_auto_enable_pluggable_database}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.managementType">management_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#management_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#management_type}. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.feature"></a>

```python
feature: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#feature}.

---

##### `connector_details`<sup>Optional</sup> <a name="connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.connectorDetails"></a>

```python
connector_details: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

connector_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connector_details DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connector_details}

---

##### `database_connection_details`<sup>Optional</sup> <a name="database_connection_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.databaseConnectionDetails"></a>

```python
database_connection_details: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails</a>

database_connection_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#database_connection_details DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#database_connection_details}

---

##### `is_auto_enable_pluggable_database`<sup>Optional</sup> <a name="is_auto_enable_pluggable_database" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.isAutoEnablePluggableDatabase"></a>

```python
is_auto_enable_pluggable_database: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#is_auto_enable_pluggable_database DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#is_auto_enable_pluggable_database}.

---

##### `management_type`<sup>Optional</sup> <a name="management_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.managementType"></a>

```python
management_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#management_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#management_type}.

---

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails(
  connector_type: str = None,
  database_connector_id: str = None,
  management_agent_id: str = None,
  private_end_point_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.connectorType">connector_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connector_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connector_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.databaseConnectorId">database_connector_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#database_connector_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#management_agent_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.privateEndPointId">private_end_point_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#private_end_point_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#private_end_point_id}. |

---

##### `connector_type`<sup>Optional</sup> <a name="connector_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connector_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connector_type}.

---

##### `database_connector_id`<sup>Optional</sup> <a name="database_connector_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.databaseConnectorId"></a>

```python
database_connector_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#database_connector_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#database_connector_id}.

---

##### `management_agent_id`<sup>Optional</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#management_agent_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#management_agent_id}.

---

##### `private_end_point_id`<sup>Optional</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.privateEndPointId"></a>

```python
private_end_point_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#private_end_point_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#private_end_point_id}.

---

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails(
  connection_credentials: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials = None,
  connection_string: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails.property.connectionCredentials">connection_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials</a></code> | connection_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails.property.connectionString">connection_string</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString</a></code> | connection_string block. |

---

##### `connection_credentials`<sup>Optional</sup> <a name="connection_credentials" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails.property.connectionCredentials"></a>

```python
connection_credentials: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials</a>

connection_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connection_credentials DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connection_credentials}

---

##### `connection_string`<sup>Optional</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails.property.connectionString"></a>

```python
connection_string: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString</a>

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connection_string DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connection_string}

---

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials(
  credential_name: str = None,
  credential_type: str = None,
  named_credential_id: str = None,
  password_secret_id: str = None,
  role: str = None,
  ssl_secret_id: str = None,
  user_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.credentialName">credential_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#credential_name DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#credential_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.credentialType">credential_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#credential_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.namedCredentialId">named_credential_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#named_credential_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#password_secret_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.role">role</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#role DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.sslSecretId">ssl_secret_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#ssl_secret_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.userName">user_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#user_name DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#user_name}. |

---

##### `credential_name`<sup>Optional</sup> <a name="credential_name" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#credential_name DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#credential_name}.

---

##### `credential_type`<sup>Optional</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#credential_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#credential_type}.

---

##### `named_credential_id`<sup>Optional</sup> <a name="named_credential_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.namedCredentialId"></a>

```python
named_credential_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#named_credential_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#named_credential_id}.

---

##### `password_secret_id`<sup>Optional</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#password_secret_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#password_secret_id}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.role"></a>

```python
role: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#role DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#role}.

---

##### `ssl_secret_id`<sup>Optional</sup> <a name="ssl_secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.sslSecretId"></a>

```python
ssl_secret_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#ssl_secret_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#ssl_secret_id}.

---

##### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.userName"></a>

```python
user_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#user_name DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#user_name}.

---

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString(
  connection_type: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  service: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.connectionType">connection_type</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connection_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.port">port</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#port DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.protocol">protocol</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#protocol DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.service">service</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#service DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#service}. |

---

##### `connection_type`<sup>Optional</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connection_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connection_type}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#port DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#protocol DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#protocol}.

---

##### `service`<sup>Optional</sup> <a name="service" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.service"></a>

```python
service: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#service DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#service}.

---

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#create DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#delete DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#update DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#create DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#delete DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#update DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetConnectorType">reset_connector_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetDatabaseConnectorId">reset_database_connector_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetManagementAgentId">reset_management_agent_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetPrivateEndPointId">reset_private_end_point_id</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connector_type` <a name="reset_connector_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetConnectorType"></a>

```python
def reset_connector_type() -> None
```

##### `reset_database_connector_id` <a name="reset_database_connector_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetDatabaseConnectorId"></a>

```python
def reset_database_connector_id() -> None
```

##### `reset_management_agent_id` <a name="reset_management_agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetManagementAgentId"></a>

```python
def reset_management_agent_id() -> None
```

##### `reset_private_end_point_id` <a name="reset_private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetPrivateEndPointId"></a>

```python
def reset_private_end_point_id() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorTypeInput">connector_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorIdInput">database_connector_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentIdInput">management_agent_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointIdInput">private_end_point_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorType">connector_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorId">database_connector_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentId">management_agent_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointId">private_end_point_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_type_input`<sup>Optional</sup> <a name="connector_type_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorTypeInput"></a>

```python
connector_type_input: str
```

- *Type:* str

---

##### `database_connector_id_input`<sup>Optional</sup> <a name="database_connector_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorIdInput"></a>

```python
database_connector_id_input: str
```

- *Type:* str

---

##### `management_agent_id_input`<sup>Optional</sup> <a name="management_agent_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentIdInput"></a>

```python
management_agent_id_input: str
```

- *Type:* str

---

##### `private_end_point_id_input`<sup>Optional</sup> <a name="private_end_point_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointIdInput"></a>

```python
private_end_point_id_input: str
```

- *Type:* str

---

##### `connector_type`<sup>Required</sup> <a name="connector_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorType"></a>

```python
connector_type: str
```

- *Type:* str

---

##### `database_connector_id`<sup>Required</sup> <a name="database_connector_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorId"></a>

```python
database_connector_id: str
```

- *Type:* str

---

##### `management_agent_id`<sup>Required</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentId"></a>

```python
management_agent_id: str
```

- *Type:* str

---

##### `private_end_point_id`<sup>Required</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointId"></a>

```python
private_end_point_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

---


### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetCredentialName">reset_credential_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetCredentialType">reset_credential_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetNamedCredentialId">reset_named_credential_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetPasswordSecretId">reset_password_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetRole">reset_role</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetSslSecretId">reset_ssl_secret_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetUserName">reset_user_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_credential_name` <a name="reset_credential_name" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetCredentialName"></a>

```python
def reset_credential_name() -> None
```

##### `reset_credential_type` <a name="reset_credential_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetCredentialType"></a>

```python
def reset_credential_type() -> None
```

##### `reset_named_credential_id` <a name="reset_named_credential_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetNamedCredentialId"></a>

```python
def reset_named_credential_id() -> None
```

##### `reset_password_secret_id` <a name="reset_password_secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetPasswordSecretId"></a>

```python
def reset_password_secret_id() -> None
```

##### `reset_role` <a name="reset_role" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetRole"></a>

```python
def reset_role() -> None
```

##### `reset_ssl_secret_id` <a name="reset_ssl_secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetSslSecretId"></a>

```python
def reset_ssl_secret_id() -> None
```

##### `reset_user_name` <a name="reset_user_name" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetUserName"></a>

```python
def reset_user_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialNameInput">credential_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialTypeInput">credential_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialIdInput">named_credential_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretIdInput">password_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.roleInput">role_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretIdInput">ssl_secret_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userNameInput">user_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialName">credential_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialType">credential_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialId">named_credential_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretId">password_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.role">role</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretId">ssl_secret_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userName">user_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credential_name_input`<sup>Optional</sup> <a name="credential_name_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialNameInput"></a>

```python
credential_name_input: str
```

- *Type:* str

---

##### `credential_type_input`<sup>Optional</sup> <a name="credential_type_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialTypeInput"></a>

```python
credential_type_input: str
```

- *Type:* str

---

##### `named_credential_id_input`<sup>Optional</sup> <a name="named_credential_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialIdInput"></a>

```python
named_credential_id_input: str
```

- *Type:* str

---

##### `password_secret_id_input`<sup>Optional</sup> <a name="password_secret_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretIdInput"></a>

```python
password_secret_id_input: str
```

- *Type:* str

---

##### `role_input`<sup>Optional</sup> <a name="role_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.roleInput"></a>

```python
role_input: str
```

- *Type:* str

---

##### `ssl_secret_id_input`<sup>Optional</sup> <a name="ssl_secret_id_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretIdInput"></a>

```python
ssl_secret_id_input: str
```

- *Type:* str

---

##### `user_name_input`<sup>Optional</sup> <a name="user_name_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userNameInput"></a>

```python
user_name_input: str
```

- *Type:* str

---

##### `credential_name`<sup>Required</sup> <a name="credential_name" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialName"></a>

```python
credential_name: str
```

- *Type:* str

---

##### `credential_type`<sup>Required</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialType"></a>

```python
credential_type: str
```

- *Type:* str

---

##### `named_credential_id`<sup>Required</sup> <a name="named_credential_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialId"></a>

```python
named_credential_id: str
```

- *Type:* str

---

##### `password_secret_id`<sup>Required</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretId"></a>

```python
password_secret_id: str
```

- *Type:* str

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.role"></a>

```python
role: str
```

- *Type:* str

---

##### `ssl_secret_id`<sup>Required</sup> <a name="ssl_secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretId"></a>

```python
ssl_secret_id: str
```

- *Type:* str

---

##### `user_name`<sup>Required</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userName"></a>

```python
user_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials</a>

---


### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetConnectionType">reset_connection_type</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetPort">reset_port</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetProtocol">reset_protocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetService">reset_service</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_connection_type` <a name="reset_connection_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetConnectionType"></a>

```python
def reset_connection_type() -> None
```

##### `reset_port` <a name="reset_port" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetPort"></a>

```python
def reset_port() -> None
```

##### `reset_protocol` <a name="reset_protocol" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetProtocol"></a>

```python
def reset_protocol() -> None
```

##### `reset_service` <a name="reset_service" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetService"></a>

```python
def reset_service() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionTypeInput">connection_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.portInput">port_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocolInput">protocol_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionType">connection_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.port">port</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocol">protocol</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.service">service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_type_input`<sup>Optional</sup> <a name="connection_type_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionTypeInput"></a>

```python
connection_type_input: str
```

- *Type:* str

---

##### `port_input`<sup>Optional</sup> <a name="port_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.portInput"></a>

```python
port_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol_input`<sup>Optional</sup> <a name="protocol_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocolInput"></a>

```python
protocol_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `connection_type`<sup>Required</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionType"></a>

```python
connection_type: str
```

- *Type:* str

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.port"></a>

```python
port: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocol"></a>

```python
protocol: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.service"></a>

```python
service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString</a>

---


### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionCredentials">put_connection_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionString">put_connection_string</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.resetConnectionCredentials">reset_connection_credentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.resetConnectionString">reset_connection_string</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_connection_credentials` <a name="put_connection_credentials" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionCredentials"></a>

```python
def put_connection_credentials(
  credential_name: str = None,
  credential_type: str = None,
  named_credential_id: str = None,
  password_secret_id: str = None,
  role: str = None,
  ssl_secret_id: str = None,
  user_name: str = None
) -> None
```

###### `credential_name`<sup>Optional</sup> <a name="credential_name" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionCredentials.parameter.credentialName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#credential_name DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#credential_name}.

---

###### `credential_type`<sup>Optional</sup> <a name="credential_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionCredentials.parameter.credentialType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#credential_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#credential_type}.

---

###### `named_credential_id`<sup>Optional</sup> <a name="named_credential_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionCredentials.parameter.namedCredentialId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#named_credential_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#named_credential_id}.

---

###### `password_secret_id`<sup>Optional</sup> <a name="password_secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionCredentials.parameter.passwordSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#password_secret_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#password_secret_id}.

---

###### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionCredentials.parameter.role"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#role DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#role}.

---

###### `ssl_secret_id`<sup>Optional</sup> <a name="ssl_secret_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionCredentials.parameter.sslSecretId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#ssl_secret_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#ssl_secret_id}.

---

###### `user_name`<sup>Optional</sup> <a name="user_name" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionCredentials.parameter.userName"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#user_name DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#user_name}.

---

##### `put_connection_string` <a name="put_connection_string" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionString"></a>

```python
def put_connection_string(
  connection_type: str = None,
  port: typing.Union[int, float] = None,
  protocol: str = None,
  service: str = None
) -> None
```

###### `connection_type`<sup>Optional</sup> <a name="connection_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionString.parameter.connectionType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connection_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connection_type}.

---

###### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionString.parameter.port"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#port DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#port}.

---

###### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionString.parameter.protocol"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#protocol DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#protocol}.

---

###### `service`<sup>Optional</sup> <a name="service" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionString.parameter.service"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#service DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#service}.

---

##### `reset_connection_credentials` <a name="reset_connection_credentials" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.resetConnectionCredentials"></a>

```python
def reset_connection_credentials() -> None
```

##### `reset_connection_string` <a name="reset_connection_string" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.resetConnectionString"></a>

```python
def reset_connection_string() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionCredentials">connection_credentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionString">connection_string</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionCredentialsInput">connection_credentials_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionStringInput">connection_string_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connection_credentials`<sup>Required</sup> <a name="connection_credentials" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionCredentials"></a>

```python
connection_credentials: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference</a>

---

##### `connection_string`<sup>Required</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionString"></a>

```python
connection_string: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference</a>

---

##### `connection_credentials_input`<sup>Optional</sup> <a name="connection_credentials_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionCredentialsInput"></a>

```python
connection_credentials_input: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials</a>

---

##### `connection_string_input`<sup>Optional</sup> <a name="connection_string_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionStringInput"></a>

```python
connection_string_input: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails</a>

---


### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails">put_connector_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putDatabaseConnectionDetails">put_database_connection_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetConnectorDetails">reset_connector_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetDatabaseConnectionDetails">reset_database_connection_details</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetIsAutoEnablePluggableDatabase">reset_is_auto_enable_pluggable_database</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetManagementType">reset_management_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_connector_details` <a name="put_connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails"></a>

```python
def put_connector_details(
  connector_type: str = None,
  database_connector_id: str = None,
  management_agent_id: str = None,
  private_end_point_id: str = None
) -> None
```

###### `connector_type`<sup>Optional</sup> <a name="connector_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails.parameter.connectorType"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connector_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connector_type}.

---

###### `database_connector_id`<sup>Optional</sup> <a name="database_connector_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails.parameter.databaseConnectorId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#database_connector_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#database_connector_id}.

---

###### `management_agent_id`<sup>Optional</sup> <a name="management_agent_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails.parameter.managementAgentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#management_agent_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#management_agent_id}.

---

###### `private_end_point_id`<sup>Optional</sup> <a name="private_end_point_id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails.parameter.privateEndPointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#private_end_point_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#private_end_point_id}.

---

##### `put_database_connection_details` <a name="put_database_connection_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putDatabaseConnectionDetails"></a>

```python
def put_database_connection_details(
  connection_credentials: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials = None,
  connection_string: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString = None
) -> None
```

###### `connection_credentials`<sup>Optional</sup> <a name="connection_credentials" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putDatabaseConnectionDetails.parameter.connectionCredentials"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials</a>

connection_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connection_credentials DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connection_credentials}

---

###### `connection_string`<sup>Optional</sup> <a name="connection_string" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putDatabaseConnectionDetails.parameter.connectionString"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString</a>

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connection_string DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connection_string}

---

##### `reset_connector_details` <a name="reset_connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetConnectorDetails"></a>

```python
def reset_connector_details() -> None
```

##### `reset_database_connection_details` <a name="reset_database_connection_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetDatabaseConnectionDetails"></a>

```python
def reset_database_connection_details() -> None
```

##### `reset_is_auto_enable_pluggable_database` <a name="reset_is_auto_enable_pluggable_database" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetIsAutoEnablePluggableDatabase"></a>

```python
def reset_is_auto_enable_pluggable_database() -> None
```

##### `reset_management_type` <a name="reset_management_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetManagementType"></a>

```python
def reset_management_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetails">connector_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.databaseConnectionDetails">database_connection_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetailsInput">connector_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.databaseConnectionDetailsInput">database_connection_details_input</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.featureInput">feature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.isAutoEnablePluggableDatabaseInput">is_auto_enable_pluggable_database_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.managementTypeInput">management_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.feature">feature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.isAutoEnablePluggableDatabase">is_auto_enable_pluggable_database</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.managementType">management_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `connector_details`<sup>Required</sup> <a name="connector_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetails"></a>

```python
connector_details: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference</a>

---

##### `database_connection_details`<sup>Required</sup> <a name="database_connection_details" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.databaseConnectionDetails"></a>

```python
database_connection_details: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference</a>

---

##### `connector_details_input`<sup>Optional</sup> <a name="connector_details_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetailsInput"></a>

```python
connector_details_input: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

---

##### `database_connection_details_input`<sup>Optional</sup> <a name="database_connection_details_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.databaseConnectionDetailsInput"></a>

```python
database_connection_details_input: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails</a>

---

##### `feature_input`<sup>Optional</sup> <a name="feature_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.featureInput"></a>

```python
feature_input: str
```

- *Type:* str

---

##### `is_auto_enable_pluggable_database_input`<sup>Optional</sup> <a name="is_auto_enable_pluggable_database_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.isAutoEnablePluggableDatabaseInput"></a>

```python
is_auto_enable_pluggable_database_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `management_type_input`<sup>Optional</sup> <a name="management_type_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.managementTypeInput"></a>

```python
management_type_input: str
```

- *Type:* str

---

##### `feature`<sup>Required</sup> <a name="feature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.feature"></a>

```python
feature: str
```

- *Type:* str

---

##### `is_auto_enable_pluggable_database`<sup>Required</sup> <a name="is_auto_enable_pluggable_database" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.isAutoEnablePluggableDatabase"></a>

```python
is_auto_enable_pluggable_database: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `management_type`<sup>Required</sup> <a name="management_type" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.managementType"></a>

```python
management_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a>

---


### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import database_management_pluggabledatabase_pluggable_database_dbm_features_management

databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a>]

---



