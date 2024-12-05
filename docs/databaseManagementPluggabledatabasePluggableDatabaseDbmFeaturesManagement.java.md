# `databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement` Submodule <a name="`databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management oci_database_management_pluggabledatabase_pluggable_database_dbm_features_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement;

DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .enablePluggableDatabaseDbmFeature(java.lang.Boolean)
    .enablePluggableDatabaseDbmFeature(IResolvable)
    .pluggableDatabaseId(java.lang.String)
//  .featureDetails(DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails)
//  .id(java.lang.String)
//  .modifyPluggableDatabaseDbmFeature(java.lang.Boolean)
//  .modifyPluggableDatabaseDbmFeature(IResolvable)
//  .timeouts(DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.enablePluggableDatabaseDbmFeature">enablePluggableDatabaseDbmFeature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#enable_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#enable_pluggable_database_dbm_feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#pluggable_database_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.featureDetails">featureDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a></code> | feature_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.modifyPluggableDatabaseDbmFeature">modifyPluggableDatabaseDbmFeature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#modify_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#modify_pluggable_database_dbm_feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enablePluggableDatabaseDbmFeature`<sup>Required</sup> <a name="enablePluggableDatabaseDbmFeature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.enablePluggableDatabaseDbmFeature"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#enable_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#enable_pluggable_database_dbm_feature}.

---

##### `pluggableDatabaseId`<sup>Required</sup> <a name="pluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.pluggableDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#pluggable_database_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#pluggable_database_id}.

---

##### `featureDetails`<sup>Optional</sup> <a name="featureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.featureDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a>

feature_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#feature_details DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#feature_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modifyPluggableDatabaseDbmFeature`<sup>Optional</sup> <a name="modifyPluggableDatabaseDbmFeature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.Initializer.parameter.modifyPluggableDatabaseDbmFeature"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putFeatureDetails">putFeatureDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetFeatureDetails">resetFeatureDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetModifyPluggableDatabaseDbmFeature">resetModifyPluggableDatabaseDbmFeature</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFeatureDetails` <a name="putFeatureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putFeatureDetails"></a>

```java
public void putFeatureDetails(DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putFeatureDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putTimeouts"></a>

```java
public void putTimeouts(DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a>

---

##### `resetFeatureDetails` <a name="resetFeatureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetFeatureDetails"></a>

```java
public void resetFeatureDetails()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetId"></a>

```java
public void resetId()
```

##### `resetModifyPluggableDatabaseDbmFeature` <a name="resetModifyPluggableDatabaseDbmFeature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetModifyPluggableDatabaseDbmFeature"></a>

```java
public void resetModifyPluggableDatabaseDbmFeature()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement;

DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement;

DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement;

DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement;

DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.featureDetails">featureDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.enablePluggableDatabaseDbmFeatureInput">enablePluggableDatabaseDbmFeatureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.featureDetailsInput">featureDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.modifyPluggableDatabaseDbmFeatureInput">modifyPluggableDatabaseDbmFeatureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.pluggableDatabaseIdInput">pluggableDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.enablePluggableDatabaseDbmFeature">enablePluggableDatabaseDbmFeature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.modifyPluggableDatabaseDbmFeature">modifyPluggableDatabaseDbmFeature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `featureDetails`<sup>Required</sup> <a name="featureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.featureDetails"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference getFeatureDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.timeouts"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference</a>

---

##### `enablePluggableDatabaseDbmFeatureInput`<sup>Optional</sup> <a name="enablePluggableDatabaseDbmFeatureInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.enablePluggableDatabaseDbmFeatureInput"></a>

```java
public java.lang.Object getEnablePluggableDatabaseDbmFeatureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `featureDetailsInput`<sup>Optional</sup> <a name="featureDetailsInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.featureDetailsInput"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails getFeatureDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `modifyPluggableDatabaseDbmFeatureInput`<sup>Optional</sup> <a name="modifyPluggableDatabaseDbmFeatureInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.modifyPluggableDatabaseDbmFeatureInput"></a>

```java
public java.lang.Object getModifyPluggableDatabaseDbmFeatureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pluggableDatabaseIdInput`<sup>Optional</sup> <a name="pluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.pluggableDatabaseIdInput"></a>

```java
public java.lang.String getPluggableDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a>

---

##### `enablePluggableDatabaseDbmFeature`<sup>Required</sup> <a name="enablePluggableDatabaseDbmFeature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.enablePluggableDatabaseDbmFeature"></a>

```java
public java.lang.Object getEnablePluggableDatabaseDbmFeature();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifyPluggableDatabaseDbmFeature`<sup>Required</sup> <a name="modifyPluggableDatabaseDbmFeature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.modifyPluggableDatabaseDbmFeature"></a>

```java
public java.lang.Object getModifyPluggableDatabaseDbmFeature();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pluggableDatabaseId`<sup>Required</sup> <a name="pluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.pluggableDatabaseId"></a>

```java
public java.lang.String getPluggableDatabaseId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig;

DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .enablePluggableDatabaseDbmFeature(java.lang.Boolean)
    .enablePluggableDatabaseDbmFeature(IResolvable)
    .pluggableDatabaseId(java.lang.String)
//  .featureDetails(DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails)
//  .id(java.lang.String)
//  .modifyPluggableDatabaseDbmFeature(java.lang.Boolean)
//  .modifyPluggableDatabaseDbmFeature(IResolvable)
//  .timeouts(DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.enablePluggableDatabaseDbmFeature">enablePluggableDatabaseDbmFeature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#enable_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#enable_pluggable_database_dbm_feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.pluggableDatabaseId">pluggableDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#pluggable_database_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.featureDetails">featureDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a></code> | feature_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.modifyPluggableDatabaseDbmFeature">modifyPluggableDatabaseDbmFeature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#modify_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#modify_pluggable_database_dbm_feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enablePluggableDatabaseDbmFeature`<sup>Required</sup> <a name="enablePluggableDatabaseDbmFeature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.enablePluggableDatabaseDbmFeature"></a>

```java
public java.lang.Object getEnablePluggableDatabaseDbmFeature();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#enable_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#enable_pluggable_database_dbm_feature}.

---

##### `pluggableDatabaseId`<sup>Required</sup> <a name="pluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.pluggableDatabaseId"></a>

```java
public java.lang.String getPluggableDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#pluggable_database_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#pluggable_database_id}.

---

##### `featureDetails`<sup>Optional</sup> <a name="featureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.featureDetails"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails getFeatureDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a>

feature_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#feature_details DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#feature_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `modifyPluggableDatabaseDbmFeature`<sup>Optional</sup> <a name="modifyPluggableDatabaseDbmFeature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.modifyPluggableDatabaseDbmFeature"></a>

```java
public java.lang.Object getModifyPluggableDatabaseDbmFeature();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#modify_pluggable_database_dbm_feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#modify_pluggable_database_dbm_feature}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementConfig.property.timeouts"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#timeouts DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#timeouts}

---

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails;

DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.builder()
    .feature(java.lang.String)
//  .connectorDetails(DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails)
//  .databaseConnectionDetails(DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails)
//  .isAutoEnablePluggableDatabase(java.lang.Boolean)
//  .isAutoEnablePluggableDatabase(IResolvable)
//  .managementType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.feature">feature</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.connectorDetails">connectorDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | connector_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.databaseConnectionDetails">databaseConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails</a></code> | database_connection_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.isAutoEnablePluggableDatabase">isAutoEnablePluggableDatabase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#is_auto_enable_pluggable_database DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#is_auto_enable_pluggable_database}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.managementType">managementType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#management_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#management_type}. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.feature"></a>

```java
public java.lang.String getFeature();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#feature DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#feature}.

---

##### `connectorDetails`<sup>Optional</sup> <a name="connectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.connectorDetails"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails getConnectorDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

connector_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connector_details DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connector_details}

---

##### `databaseConnectionDetails`<sup>Optional</sup> <a name="databaseConnectionDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.databaseConnectionDetails"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails getDatabaseConnectionDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails</a>

database_connection_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#database_connection_details DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#database_connection_details}

---

##### `isAutoEnablePluggableDatabase`<sup>Optional</sup> <a name="isAutoEnablePluggableDatabase" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.isAutoEnablePluggableDatabase"></a>

```java
public java.lang.Object getIsAutoEnablePluggableDatabase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#is_auto_enable_pluggable_database DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#is_auto_enable_pluggable_database}.

---

##### `managementType`<sup>Optional</sup> <a name="managementType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails.property.managementType"></a>

```java
public java.lang.String getManagementType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#management_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#management_type}.

---

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails;

DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.builder()
//  .connectorType(java.lang.String)
//  .databaseConnectorId(java.lang.String)
//  .managementAgentId(java.lang.String)
//  .privateEndPointId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connector_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connector_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.databaseConnectorId">databaseConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#database_connector_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#management_agent_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.privateEndPointId">privateEndPointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#private_end_point_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#private_end_point_id}. |

---

##### `connectorType`<sup>Optional</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connector_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connector_type}.

---

##### `databaseConnectorId`<sup>Optional</sup> <a name="databaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.databaseConnectorId"></a>

```java
public java.lang.String getDatabaseConnectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#database_connector_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#database_connector_id}.

---

##### `managementAgentId`<sup>Optional</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#management_agent_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#management_agent_id}.

---

##### `privateEndPointId`<sup>Optional</sup> <a name="privateEndPointId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails.property.privateEndPointId"></a>

```java
public java.lang.String getPrivateEndPointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#private_end_point_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#private_end_point_id}.

---

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails;

DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails.builder()
//  .connectionCredentials(DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials)
//  .connectionString(DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails.property.connectionCredentials">connectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials</a></code> | connection_credentials block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails.property.connectionString">connectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString</a></code> | connection_string block. |

---

##### `connectionCredentials`<sup>Optional</sup> <a name="connectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails.property.connectionCredentials"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials getConnectionCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials</a>

connection_credentials block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connection_credentials DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connection_credentials}

---

##### `connectionString`<sup>Optional</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails.property.connectionString"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString getConnectionString();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString</a>

connection_string block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connection_string DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connection_string}

---

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials;

DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.builder()
//  .credentialName(java.lang.String)
//  .credentialType(java.lang.String)
//  .namedCredentialId(java.lang.String)
//  .passwordSecretId(java.lang.String)
//  .role(java.lang.String)
//  .sslSecretId(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.credentialName">credentialName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#credential_name DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#credential_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#credential_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#credential_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.namedCredentialId">namedCredentialId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#named_credential_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#password_secret_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#role DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.sslSecretId">sslSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#ssl_secret_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#user_name DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#user_name}. |

---

##### `credentialName`<sup>Optional</sup> <a name="credentialName" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.credentialName"></a>

```java
public java.lang.String getCredentialName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#credential_name DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#credential_name}.

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#credential_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#credential_type}.

---

##### `namedCredentialId`<sup>Optional</sup> <a name="namedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.namedCredentialId"></a>

```java
public java.lang.String getNamedCredentialId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#named_credential_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#named_credential_id}.

---

##### `passwordSecretId`<sup>Optional</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#password_secret_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#password_secret_id}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#role DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#role}.

---

##### `sslSecretId`<sup>Optional</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.sslSecretId"></a>

```java
public java.lang.String getSslSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#ssl_secret_id DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#ssl_secret_id}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#user_name DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#user_name}.

---

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString;

DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.builder()
//  .connectionType(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connection_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connection_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#port DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#protocol DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.service">service</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#service DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#service}. |

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#connection_type DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#connection_type}.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#port DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#protocol DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#protocol}.

---

##### `service`<sup>Optional</sup> <a name="service" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#service DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#service}.

---

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts;

DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#create DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#delete DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#update DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#create DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#delete DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_pluggabledatabase_pluggable_database_dbm_features_management#update DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference;

new DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetConnectorType">resetConnectorType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetDatabaseConnectorId">resetDatabaseConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetManagementAgentId">resetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetPrivateEndPointId">resetPrivateEndPointId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectorType` <a name="resetConnectorType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetConnectorType"></a>

```java
public void resetConnectorType()
```

##### `resetDatabaseConnectorId` <a name="resetDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetDatabaseConnectorId"></a>

```java
public void resetDatabaseConnectorId()
```

##### `resetManagementAgentId` <a name="resetManagementAgentId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetManagementAgentId"></a>

```java
public void resetManagementAgentId()
```

##### `resetPrivateEndPointId` <a name="resetPrivateEndPointId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetPrivateEndPointId"></a>

```java
public void resetPrivateEndPointId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorTypeInput">connectorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorIdInput">databaseConnectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentIdInput">managementAgentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointIdInput">privateEndPointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorId">databaseConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointId">privateEndPointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorTypeInput`<sup>Optional</sup> <a name="connectorTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorTypeInput"></a>

```java
public java.lang.String getConnectorTypeInput();
```

- *Type:* java.lang.String

---

##### `databaseConnectorIdInput`<sup>Optional</sup> <a name="databaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorIdInput"></a>

```java
public java.lang.String getDatabaseConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `managementAgentIdInput`<sup>Optional</sup> <a name="managementAgentIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentIdInput"></a>

```java
public java.lang.String getManagementAgentIdInput();
```

- *Type:* java.lang.String

---

##### `privateEndPointIdInput`<sup>Optional</sup> <a name="privateEndPointIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointIdInput"></a>

```java
public java.lang.String getPrivateEndPointIdInput();
```

- *Type:* java.lang.String

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

---

##### `databaseConnectorId`<sup>Required</sup> <a name="databaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorId"></a>

```java
public java.lang.String getDatabaseConnectorId();
```

- *Type:* java.lang.String

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

---

##### `privateEndPointId`<sup>Required</sup> <a name="privateEndPointId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointId"></a>

```java
public java.lang.String getPrivateEndPointId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

---


### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference;

new DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetCredentialName">resetCredentialName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetNamedCredentialId">resetNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetPasswordSecretId">resetPasswordSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetSslSecretId">resetSslSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialName` <a name="resetCredentialName" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetCredentialName"></a>

```java
public void resetCredentialName()
```

##### `resetCredentialType` <a name="resetCredentialType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetCredentialType"></a>

```java
public void resetCredentialType()
```

##### `resetNamedCredentialId` <a name="resetNamedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetNamedCredentialId"></a>

```java
public void resetNamedCredentialId()
```

##### `resetPasswordSecretId` <a name="resetPasswordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetPasswordSecretId"></a>

```java
public void resetPasswordSecretId()
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetRole"></a>

```java
public void resetRole()
```

##### `resetSslSecretId` <a name="resetSslSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetSslSecretId"></a>

```java
public void resetSslSecretId()
```

##### `resetUserName` <a name="resetUserName" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.resetUserName"></a>

```java
public void resetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialNameInput">credentialNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialIdInput">namedCredentialIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretIdInput">sslSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialName">credentialName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialId">namedCredentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretId">sslSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialNameInput`<sup>Optional</sup> <a name="credentialNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialNameInput"></a>

```java
public java.lang.String getCredentialNameInput();
```

- *Type:* java.lang.String

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `namedCredentialIdInput`<sup>Optional</sup> <a name="namedCredentialIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialIdInput"></a>

```java
public java.lang.String getNamedCredentialIdInput();
```

- *Type:* java.lang.String

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretIdInput"></a>

```java
public java.lang.String getPasswordSecretIdInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `sslSecretIdInput`<sup>Optional</sup> <a name="sslSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretIdInput"></a>

```java
public java.lang.String getSslSecretIdInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `credentialName`<sup>Required</sup> <a name="credentialName" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialName"></a>

```java
public java.lang.String getCredentialName();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `namedCredentialId`<sup>Required</sup> <a name="namedCredentialId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.namedCredentialId"></a>

```java
public java.lang.String getNamedCredentialId();
```

- *Type:* java.lang.String

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `sslSecretId`<sup>Required</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.sslSecretId"></a>

```java
public java.lang.String getSslSecretId();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference.property.internalValue"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials</a>

---


### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference;

new DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetService">resetService</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectionType` <a name="resetConnectionType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetConnectionType"></a>

```java
public void resetConnectionType()
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetService` <a name="resetService" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.resetService"></a>

```java
public void resetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference.property.internalValue"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString</a>

---


### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference;

new DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionCredentials">putConnectionCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionString">putConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.resetConnectionCredentials">resetConnectionCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.resetConnectionString">resetConnectionString</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectionCredentials` <a name="putConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionCredentials"></a>

```java
public void putConnectionCredentials(DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionCredentials.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials</a>

---

##### `putConnectionString` <a name="putConnectionString" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionString"></a>

```java
public void putConnectionString(DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.putConnectionString.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString</a>

---

##### `resetConnectionCredentials` <a name="resetConnectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.resetConnectionCredentials"></a>

```java
public void resetConnectionCredentials()
```

##### `resetConnectionString` <a name="resetConnectionString" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.resetConnectionString"></a>

```java
public void resetConnectionString()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionCredentials">connectionCredentials</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionString">connectionString</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionCredentialsInput">connectionCredentialsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionStringInput">connectionStringInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionCredentials`<sup>Required</sup> <a name="connectionCredentials" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionCredentials"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference getConnectionCredentials();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentialsOutputReference</a>

---

##### `connectionString`<sup>Required</sup> <a name="connectionString" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionString"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference getConnectionString();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionStringOutputReference</a>

---

##### `connectionCredentialsInput`<sup>Optional</sup> <a name="connectionCredentialsInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionCredentialsInput"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials getConnectionCredentialsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionCredentials</a>

---

##### `connectionStringInput`<sup>Optional</sup> <a name="connectionStringInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.connectionStringInput"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString getConnectionStringInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsConnectionString</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails</a>

---


### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference;

new DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails">putConnectorDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putDatabaseConnectionDetails">putDatabaseConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetConnectorDetails">resetConnectorDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetDatabaseConnectionDetails">resetDatabaseConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetIsAutoEnablePluggableDatabase">resetIsAutoEnablePluggableDatabase</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetManagementType">resetManagementType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectorDetails` <a name="putConnectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails"></a>

```java
public void putConnectorDetails(DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

---

##### `putDatabaseConnectionDetails` <a name="putDatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putDatabaseConnectionDetails"></a>

```java
public void putDatabaseConnectionDetails(DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.putDatabaseConnectionDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails</a>

---

##### `resetConnectorDetails` <a name="resetConnectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetConnectorDetails"></a>

```java
public void resetConnectorDetails()
```

##### `resetDatabaseConnectionDetails` <a name="resetDatabaseConnectionDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetDatabaseConnectionDetails"></a>

```java
public void resetDatabaseConnectionDetails()
```

##### `resetIsAutoEnablePluggableDatabase` <a name="resetIsAutoEnablePluggableDatabase" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetIsAutoEnablePluggableDatabase"></a>

```java
public void resetIsAutoEnablePluggableDatabase()
```

##### `resetManagementType` <a name="resetManagementType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.resetManagementType"></a>

```java
public void resetManagementType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetails">connectorDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.databaseConnectionDetails">databaseConnectionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetailsInput">connectorDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.databaseConnectionDetailsInput">databaseConnectionDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.featureInput">featureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.isAutoEnablePluggableDatabaseInput">isAutoEnablePluggableDatabaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.managementTypeInput">managementTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.feature">feature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.isAutoEnablePluggableDatabase">isAutoEnablePluggableDatabase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.managementType">managementType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorDetails`<sup>Required</sup> <a name="connectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetails"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference getConnectorDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference</a>

---

##### `databaseConnectionDetails`<sup>Required</sup> <a name="databaseConnectionDetails" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.databaseConnectionDetails"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference getDatabaseConnectionDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetailsOutputReference</a>

---

##### `connectorDetailsInput`<sup>Optional</sup> <a name="connectorDetailsInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetailsInput"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails getConnectorDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

---

##### `databaseConnectionDetailsInput`<sup>Optional</sup> <a name="databaseConnectionDetailsInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.databaseConnectionDetailsInput"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails getDatabaseConnectionDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsDatabaseConnectionDetails</a>

---

##### `featureInput`<sup>Optional</sup> <a name="featureInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.featureInput"></a>

```java
public java.lang.String getFeatureInput();
```

- *Type:* java.lang.String

---

##### `isAutoEnablePluggableDatabaseInput`<sup>Optional</sup> <a name="isAutoEnablePluggableDatabaseInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.isAutoEnablePluggableDatabaseInput"></a>

```java
public java.lang.Object getIsAutoEnablePluggableDatabaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managementTypeInput`<sup>Optional</sup> <a name="managementTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.managementTypeInput"></a>

```java
public java.lang.String getManagementTypeInput();
```

- *Type:* java.lang.String

---

##### `feature`<sup>Required</sup> <a name="feature" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.feature"></a>

```java
public java.lang.String getFeature();
```

- *Type:* java.lang.String

---

##### `isAutoEnablePluggableDatabase`<sup>Required</sup> <a name="isAutoEnablePluggableDatabase" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.isAutoEnablePluggableDatabase"></a>

```java
public java.lang.Object getIsAutoEnablePluggableDatabase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `managementType`<sup>Required</sup> <a name="managementType" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.managementType"></a>

```java
public java.lang.String getManagementType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementFeatureDetails</a>

---


### DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference <a name="DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_pluggabledatabase_pluggable_database_dbm_features_management.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference;

new DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagement.DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts">DatabaseManagementPluggabledatabasePluggableDatabaseDbmFeaturesManagementTimeouts</a>

---



