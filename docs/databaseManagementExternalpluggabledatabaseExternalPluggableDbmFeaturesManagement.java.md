# `databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement` Submodule <a name="`databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management oci_database_management_externalpluggabledatabase_external_pluggable_dbm_features_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_externalpluggabledatabase_external_pluggable_dbm_features_management.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement;

DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Builder.create(Construct scope, java.lang.String id)
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
    .enableExternalPluggableDbmFeature(java.lang.Boolean)
    .enableExternalPluggableDbmFeature(IResolvable)
    .externalPluggableDatabaseId(java.lang.String)
//  .featureDetails(DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails)
//  .id(java.lang.String)
//  .timeouts(DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.enableExternalPluggableDbmFeature">enableExternalPluggableDbmFeature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#enable_external_pluggable_dbm_feature DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#enable_external_pluggable_dbm_feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.externalPluggableDatabaseId">externalPluggableDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#external_pluggable_database_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#external_pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.featureDetails">featureDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a></code> | feature_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enableExternalPluggableDbmFeature`<sup>Required</sup> <a name="enableExternalPluggableDbmFeature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.enableExternalPluggableDbmFeature"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#enable_external_pluggable_dbm_feature DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#enable_external_pluggable_dbm_feature}.

---

##### `externalPluggableDatabaseId`<sup>Required</sup> <a name="externalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.externalPluggableDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#external_pluggable_database_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#external_pluggable_database_id}.

---

##### `featureDetails`<sup>Optional</sup> <a name="featureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.featureDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a>

feature_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#feature_details DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#feature_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putFeatureDetails">putFeatureDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetFeatureDetails">resetFeatureDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFeatureDetails` <a name="putFeatureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putFeatureDetails"></a>

```java
public void putFeatureDetails(DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putFeatureDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putTimeouts"></a>

```java
public void putTimeouts(DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a>

---

##### `resetFeatureDetails` <a name="resetFeatureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetFeatureDetails"></a>

```java
public void resetFeatureDetails()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_externalpluggabledatabase_external_pluggable_dbm_features_management.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement;

DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_externalpluggabledatabase_external_pluggable_dbm_features_management.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement;

DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_externalpluggabledatabase_external_pluggable_dbm_features_management.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement;

DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_externalpluggabledatabase_external_pluggable_dbm_features_management.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement;

DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.featureDetails">featureDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.enableExternalPluggableDbmFeatureInput">enableExternalPluggableDbmFeatureInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.externalPluggableDatabaseIdInput">externalPluggableDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.featureDetailsInput">featureDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.enableExternalPluggableDbmFeature">enableExternalPluggableDbmFeature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.externalPluggableDatabaseId">externalPluggableDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `featureDetails`<sup>Required</sup> <a name="featureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.featureDetails"></a>

```java
public DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference getFeatureDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.timeouts"></a>

```java
public DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference</a>

---

##### `enableExternalPluggableDbmFeatureInput`<sup>Optional</sup> <a name="enableExternalPluggableDbmFeatureInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.enableExternalPluggableDbmFeatureInput"></a>

```java
public java.lang.Object getEnableExternalPluggableDbmFeatureInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalPluggableDatabaseIdInput`<sup>Optional</sup> <a name="externalPluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.externalPluggableDatabaseIdInput"></a>

```java
public java.lang.String getExternalPluggableDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `featureDetailsInput`<sup>Optional</sup> <a name="featureDetailsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.featureDetailsInput"></a>

```java
public DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails getFeatureDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a>

---

##### `enableExternalPluggableDbmFeature`<sup>Required</sup> <a name="enableExternalPluggableDbmFeature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.enableExternalPluggableDbmFeature"></a>

```java
public java.lang.Object getEnableExternalPluggableDbmFeature();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalPluggableDatabaseId`<sup>Required</sup> <a name="externalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.externalPluggableDatabaseId"></a>

```java
public java.lang.String getExternalPluggableDatabaseId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_externalpluggabledatabase_external_pluggable_dbm_features_management.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig;

DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.builder()
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
    .enableExternalPluggableDbmFeature(java.lang.Boolean)
    .enableExternalPluggableDbmFeature(IResolvable)
    .externalPluggableDatabaseId(java.lang.String)
//  .featureDetails(DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails)
//  .id(java.lang.String)
//  .timeouts(DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.enableExternalPluggableDbmFeature">enableExternalPluggableDbmFeature</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#enable_external_pluggable_dbm_feature DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#enable_external_pluggable_dbm_feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.externalPluggableDatabaseId">externalPluggableDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#external_pluggable_database_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#external_pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.featureDetails">featureDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a></code> | feature_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enableExternalPluggableDbmFeature`<sup>Required</sup> <a name="enableExternalPluggableDbmFeature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.enableExternalPluggableDbmFeature"></a>

```java
public java.lang.Object getEnableExternalPluggableDbmFeature();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#enable_external_pluggable_dbm_feature DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#enable_external_pluggable_dbm_feature}.

---

##### `externalPluggableDatabaseId`<sup>Required</sup> <a name="externalPluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.externalPluggableDatabaseId"></a>

```java
public java.lang.String getExternalPluggableDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#external_pluggable_database_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#external_pluggable_database_id}.

---

##### `featureDetails`<sup>Optional</sup> <a name="featureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.featureDetails"></a>

```java
public DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails getFeatureDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a>

feature_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#feature_details DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#feature_details}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementConfig.property.timeouts"></a>

```java
public DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#timeouts DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#timeouts}

---

### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_externalpluggabledatabase_external_pluggable_dbm_features_management.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails;

DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails.builder()
    .feature(java.lang.String)
//  .connectorDetails(DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails.property.feature">feature</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#feature DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#feature}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails.property.connectorDetails">connectorDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | connector_details block. |

---

##### `feature`<sup>Required</sup> <a name="feature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails.property.feature"></a>

```java
public java.lang.String getFeature();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#feature DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#feature}.

---

##### `connectorDetails`<sup>Optional</sup> <a name="connectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails.property.connectorDetails"></a>

```java
public DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails getConnectorDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

connector_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#connector_details DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#connector_details}

---

### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_externalpluggabledatabase_external_pluggable_dbm_features_management.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails;

DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.builder()
//  .connectorType(java.lang.String)
//  .databaseConnectorId(java.lang.String)
//  .managementAgentId(java.lang.String)
//  .privateEndPointId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#connector_type DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#connector_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.databaseConnectorId">databaseConnectorId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#database_connector_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#database_connector_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#management_agent_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#management_agent_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.privateEndPointId">privateEndPointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#private_end_point_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#private_end_point_id}. |

---

##### `connectorType`<sup>Optional</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#connector_type DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#connector_type}.

---

##### `databaseConnectorId`<sup>Optional</sup> <a name="databaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.databaseConnectorId"></a>

```java
public java.lang.String getDatabaseConnectorId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#database_connector_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#database_connector_id}.

---

##### `managementAgentId`<sup>Optional</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#management_agent_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#management_agent_id}.

---

##### `privateEndPointId`<sup>Optional</sup> <a name="privateEndPointId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails.property.privateEndPointId"></a>

```java
public java.lang.String getPrivateEndPointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#private_end_point_id DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#private_end_point_id}.

---

### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_externalpluggabledatabase_external_pluggable_dbm_features_management.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts;

DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#create DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#delete DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#update DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#create DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#delete DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_externalpluggabledatabase_external_pluggable_dbm_features_management#update DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_externalpluggabledatabase_external_pluggable_dbm_features_management.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference;

new DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetConnectorType">resetConnectorType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetDatabaseConnectorId">resetDatabaseConnectorId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetManagementAgentId">resetManagementAgentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetPrivateEndPointId">resetPrivateEndPointId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnectorType` <a name="resetConnectorType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetConnectorType"></a>

```java
public void resetConnectorType()
```

##### `resetDatabaseConnectorId` <a name="resetDatabaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetDatabaseConnectorId"></a>

```java
public void resetDatabaseConnectorId()
```

##### `resetManagementAgentId` <a name="resetManagementAgentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetManagementAgentId"></a>

```java
public void resetManagementAgentId()
```

##### `resetPrivateEndPointId` <a name="resetPrivateEndPointId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.resetPrivateEndPointId"></a>

```java
public void resetPrivateEndPointId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorTypeInput">connectorTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorIdInput">databaseConnectorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentIdInput">managementAgentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointIdInput">privateEndPointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorType">connectorType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorId">databaseConnectorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentId">managementAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointId">privateEndPointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorTypeInput`<sup>Optional</sup> <a name="connectorTypeInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorTypeInput"></a>

```java
public java.lang.String getConnectorTypeInput();
```

- *Type:* java.lang.String

---

##### `databaseConnectorIdInput`<sup>Optional</sup> <a name="databaseConnectorIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorIdInput"></a>

```java
public java.lang.String getDatabaseConnectorIdInput();
```

- *Type:* java.lang.String

---

##### `managementAgentIdInput`<sup>Optional</sup> <a name="managementAgentIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentIdInput"></a>

```java
public java.lang.String getManagementAgentIdInput();
```

- *Type:* java.lang.String

---

##### `privateEndPointIdInput`<sup>Optional</sup> <a name="privateEndPointIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointIdInput"></a>

```java
public java.lang.String getPrivateEndPointIdInput();
```

- *Type:* java.lang.String

---

##### `connectorType`<sup>Required</sup> <a name="connectorType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.connectorType"></a>

```java
public java.lang.String getConnectorType();
```

- *Type:* java.lang.String

---

##### `databaseConnectorId`<sup>Required</sup> <a name="databaseConnectorId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.databaseConnectorId"></a>

```java
public java.lang.String getDatabaseConnectorId();
```

- *Type:* java.lang.String

---

##### `managementAgentId`<sup>Required</sup> <a name="managementAgentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.managementAgentId"></a>

```java
public java.lang.String getManagementAgentId();
```

- *Type:* java.lang.String

---

##### `privateEndPointId`<sup>Required</sup> <a name="privateEndPointId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.privateEndPointId"></a>

```java
public java.lang.String getPrivateEndPointId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

---


### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_externalpluggabledatabase_external_pluggable_dbm_features_management.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference;

new DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails">putConnectorDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.resetConnectorDetails">resetConnectorDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConnectorDetails` <a name="putConnectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails"></a>

```java
public void putConnectorDetails(DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.putConnectorDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

---

##### `resetConnectorDetails` <a name="resetConnectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.resetConnectorDetails"></a>

```java
public void resetConnectorDetails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetails">connectorDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetailsInput">connectorDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.featureInput">featureInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.feature">feature</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectorDetails`<sup>Required</sup> <a name="connectorDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetails"></a>

```java
public DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference getConnectorDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetailsOutputReference</a>

---

##### `connectorDetailsInput`<sup>Optional</sup> <a name="connectorDetailsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.connectorDetailsInput"></a>

```java
public DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails getConnectorDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsConnectorDetails</a>

---

##### `featureInput`<sup>Optional</sup> <a name="featureInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.featureInput"></a>

```java
public java.lang.String getFeatureInput();
```

- *Type:* java.lang.String

---

##### `feature`<sup>Required</sup> <a name="feature" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.feature"></a>

```java
public java.lang.String getFeature();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetailsOutputReference.property.internalValue"></a>

```java
public DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementFeatureDetails</a>

---


### DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference <a name="DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_externalpluggabledatabase_external_pluggable_dbm_features_management.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference;

new DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagement.DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts">DatabaseManagementExternalpluggabledatabaseExternalPluggableDbmFeaturesManagementTimeouts</a>

---



