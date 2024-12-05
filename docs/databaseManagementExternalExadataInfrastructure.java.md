# `databaseManagementExternalExadataInfrastructure` Submodule <a name="`databaseManagementExternalExadataInfrastructure` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalExadataInfrastructure <a name="DatabaseManagementExternalExadataInfrastructure" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure oci_database_management_external_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure.DatabaseManagementExternalExadataInfrastructure;

DatabaseManagementExternalExadataInfrastructure.Builder.create(Construct scope, java.lang.String id)
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
    .compartmentId(java.lang.String)
    .dbSystemIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .discoveryKey(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .licenseModel(java.lang.String)
//  .storageServerNames(java.util.List<java.lang.String>)
//  .timeouts(DatabaseManagementExternalExadataInfrastructureTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#compartment_id DatabaseManagementExternalExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.dbSystemIds">dbSystemIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#db_system_ids DatabaseManagementExternalExadataInfrastructure#db_system_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#display_name DatabaseManagementExternalExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#defined_tags DatabaseManagementExternalExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.discoveryKey">discoveryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#discovery_key DatabaseManagementExternalExadataInfrastructure#discovery_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#freeform_tags DatabaseManagementExternalExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#id DatabaseManagementExternalExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#license_model DatabaseManagementExternalExadataInfrastructure#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.storageServerNames">storageServerNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#storage_server_names DatabaseManagementExternalExadataInfrastructure#storage_server_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#compartment_id DatabaseManagementExternalExadataInfrastructure#compartment_id}.

---

##### `dbSystemIds`<sup>Required</sup> <a name="dbSystemIds" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.dbSystemIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#db_system_ids DatabaseManagementExternalExadataInfrastructure#db_system_ids}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#display_name DatabaseManagementExternalExadataInfrastructure#display_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#defined_tags DatabaseManagementExternalExadataInfrastructure#defined_tags}.

---

##### `discoveryKey`<sup>Optional</sup> <a name="discoveryKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.discoveryKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#discovery_key DatabaseManagementExternalExadataInfrastructure#discovery_key}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#freeform_tags DatabaseManagementExternalExadataInfrastructure#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#id DatabaseManagementExternalExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#license_model DatabaseManagementExternalExadataInfrastructure#license_model}.

---

##### `storageServerNames`<sup>Optional</sup> <a name="storageServerNames" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.Initializer.parameter.storageServerNames"></a>

- *Type:* java.util.List<java.lang.String>

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
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetDiscoveryKey">resetDiscoveryKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetStorageServerNames">resetStorageServerNames</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.putTimeouts"></a>

```java
public void putTimeouts(DatabaseManagementExternalExadataInfrastructureTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a>

---

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetDiscoveryKey` <a name="resetDiscoveryKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetDiscoveryKey"></a>

```java
public void resetDiscoveryKey()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetId"></a>

```java
public void resetId()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetStorageServerNames` <a name="resetStorageServerNames" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetStorageServerNames"></a>

```java
public void resetStorageServerNames()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalExadataInfrastructure resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure.DatabaseManagementExternalExadataInfrastructure;

DatabaseManagementExternalExadataInfrastructure.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure.DatabaseManagementExternalExadataInfrastructure;

DatabaseManagementExternalExadataInfrastructure.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure.DatabaseManagementExternalExadataInfrastructure;

DatabaseManagementExternalExadataInfrastructure.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure.DatabaseManagementExternalExadataInfrastructure;

DatabaseManagementExternalExadataInfrastructure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseManagementExternalExadataInfrastructure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseManagementExternalExadataInfrastructure resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseManagementExternalExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseManagementExternalExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.additionalDetails">additionalDetails</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.databaseCompartments">databaseCompartments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.databaseSystems">databaseSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList">DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.internalId">internalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.rackSize">rackSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageGrid">storageGrid</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList">DatabaseManagementExternalExadataInfrastructureStorageGridList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.systemTags">systemTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference">DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dbSystemIdsInput">dbSystemIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.discoveryKeyInput">discoveryKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageServerNamesInput">storageServerNamesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dbSystemIds">dbSystemIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.discoveryKey">discoveryKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageServerNames">storageServerNames</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.additionalDetails"></a>

```java
public StringMap getAdditionalDetails();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `databaseCompartments`<sup>Required</sup> <a name="databaseCompartments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.databaseCompartments"></a>

```java
public java.util.List<java.lang.String> getDatabaseCompartments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `databaseSystems`<sup>Required</sup> <a name="databaseSystems" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.databaseSystems"></a>

```java
public DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList getDatabaseSystems();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList">DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList</a>

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.internalId"></a>

```java
public java.lang.String getInternalId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `rackSize`<sup>Required</sup> <a name="rackSize" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.rackSize"></a>

```java
public java.lang.String getRackSize();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `storageGrid`<sup>Required</sup> <a name="storageGrid" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageGrid"></a>

```java
public DatabaseManagementExternalExadataInfrastructureStorageGridList getStorageGrid();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList">DatabaseManagementExternalExadataInfrastructureStorageGridList</a>

---

##### `systemTags`<sup>Required</sup> <a name="systemTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.systemTags"></a>

```java
public StringMap getSystemTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeouts"></a>

```java
public DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference">DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference</a>

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `dbSystemIdsInput`<sup>Optional</sup> <a name="dbSystemIdsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dbSystemIdsInput"></a>

```java
public java.util.List<java.lang.String> getDbSystemIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `discoveryKeyInput`<sup>Optional</sup> <a name="discoveryKeyInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.discoveryKeyInput"></a>

```java
public java.lang.String getDiscoveryKeyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `storageServerNamesInput`<sup>Optional</sup> <a name="storageServerNamesInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageServerNamesInput"></a>

```java
public java.util.List<java.lang.String> getStorageServerNamesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `dbSystemIds`<sup>Required</sup> <a name="dbSystemIds" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.dbSystemIds"></a>

```java
public java.util.List<java.lang.String> getDbSystemIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `discoveryKey`<sup>Required</sup> <a name="discoveryKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.discoveryKey"></a>

```java
public java.lang.String getDiscoveryKey();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `storageServerNames`<sup>Required</sup> <a name="storageServerNames" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.storageServerNames"></a>

```java
public java.util.List<java.lang.String> getStorageServerNames();
```

- *Type:* java.util.List<java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructure.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalExadataInfrastructureConfig <a name="DatabaseManagementExternalExadataInfrastructureConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure.DatabaseManagementExternalExadataInfrastructureConfig;

DatabaseManagementExternalExadataInfrastructureConfig.builder()
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
    .compartmentId(java.lang.String)
    .dbSystemIds(java.util.List<java.lang.String>)
    .displayName(java.lang.String)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .discoveryKey(java.lang.String)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .licenseModel(java.lang.String)
//  .storageServerNames(java.util.List<java.lang.String>)
//  .timeouts(DatabaseManagementExternalExadataInfrastructureTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#compartment_id DatabaseManagementExternalExadataInfrastructure#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.dbSystemIds">dbSystemIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#db_system_ids DatabaseManagementExternalExadataInfrastructure#db_system_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#display_name DatabaseManagementExternalExadataInfrastructure#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#defined_tags DatabaseManagementExternalExadataInfrastructure#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.discoveryKey">discoveryKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#discovery_key DatabaseManagementExternalExadataInfrastructure#discovery_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#freeform_tags DatabaseManagementExternalExadataInfrastructure#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#id DatabaseManagementExternalExadataInfrastructure#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#license_model DatabaseManagementExternalExadataInfrastructure#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.storageServerNames">storageServerNames</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#storage_server_names DatabaseManagementExternalExadataInfrastructure#storage_server_names}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#compartment_id DatabaseManagementExternalExadataInfrastructure#compartment_id}.

---

##### `dbSystemIds`<sup>Required</sup> <a name="dbSystemIds" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.dbSystemIds"></a>

```java
public java.util.List<java.lang.String> getDbSystemIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#db_system_ids DatabaseManagementExternalExadataInfrastructure#db_system_ids}.

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#display_name DatabaseManagementExternalExadataInfrastructure#display_name}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#defined_tags DatabaseManagementExternalExadataInfrastructure#defined_tags}.

---

##### `discoveryKey`<sup>Optional</sup> <a name="discoveryKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.discoveryKey"></a>

```java
public java.lang.String getDiscoveryKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#discovery_key DatabaseManagementExternalExadataInfrastructure#discovery_key}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#freeform_tags DatabaseManagementExternalExadataInfrastructure#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#id DatabaseManagementExternalExadataInfrastructure#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#license_model DatabaseManagementExternalExadataInfrastructure#license_model}.

---

##### `storageServerNames`<sup>Optional</sup> <a name="storageServerNames" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.storageServerNames"></a>

```java
public java.util.List<java.lang.String> getStorageServerNames();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#storage_server_names DatabaseManagementExternalExadataInfrastructure#storage_server_names}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureConfig.property.timeouts"></a>

```java
public DatabaseManagementExternalExadataInfrastructureTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#timeouts DatabaseManagementExternalExadataInfrastructure#timeouts}

---

### DatabaseManagementExternalExadataInfrastructureDatabaseSystems <a name="DatabaseManagementExternalExadataInfrastructureDatabaseSystems" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems;

DatabaseManagementExternalExadataInfrastructureDatabaseSystems.builder()
    .build();
```


### DatabaseManagementExternalExadataInfrastructureStorageGrid <a name="DatabaseManagementExternalExadataInfrastructureStorageGrid" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid;

DatabaseManagementExternalExadataInfrastructureStorageGrid.builder()
    .build();
```


### DatabaseManagementExternalExadataInfrastructureTimeouts <a name="DatabaseManagementExternalExadataInfrastructureTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts;

DatabaseManagementExternalExadataInfrastructureTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#create DatabaseManagementExternalExadataInfrastructure#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#delete DatabaseManagementExternalExadataInfrastructure#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#update DatabaseManagementExternalExadataInfrastructure#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#create DatabaseManagementExternalExadataInfrastructure#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#delete DatabaseManagementExternalExadataInfrastructure#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure#update DatabaseManagementExternalExadataInfrastructure#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList <a name="DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList;

new DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.get"></a>

```java
public DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference <a name="DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference;

new DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalId">internalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems">DatabaseManagementExternalExadataInfrastructureDatabaseSystems</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.additionalDetails"></a>

```java
public StringMap getAdditionalDetails();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalId"></a>

```java
public java.lang.String getInternalId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystemsOutputReference.property.internalValue"></a>

```java
public DatabaseManagementExternalExadataInfrastructureDatabaseSystems getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureDatabaseSystems">DatabaseManagementExternalExadataInfrastructureDatabaseSystems</a>

---


### DatabaseManagementExternalExadataInfrastructureStorageGridList <a name="DatabaseManagementExternalExadataInfrastructureStorageGridList" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList;

new DatabaseManagementExternalExadataInfrastructureStorageGridList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.get"></a>

```java
public DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference <a name="DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference;

new DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.additionalDetails">additionalDetails</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalId">internalId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.serverCount">serverCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid">DatabaseManagementExternalExadataInfrastructureStorageGrid</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalDetails`<sup>Required</sup> <a name="additionalDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.additionalDetails"></a>

```java
public StringMap getAdditionalDetails();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalId`<sup>Required</sup> <a name="internalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalId"></a>

```java
public java.lang.String getInternalId();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `serverCount`<sup>Required</sup> <a name="serverCount" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.serverCount"></a>

```java
public java.lang.Number getServerCount();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGridOutputReference.property.internalValue"></a>

```java
public DatabaseManagementExternalExadataInfrastructureStorageGrid getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureStorageGrid">DatabaseManagementExternalExadataInfrastructureStorageGrid</a>

---


### DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference <a name="DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference;

new DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructure.DatabaseManagementExternalExadataInfrastructureTimeouts">DatabaseManagementExternalExadataInfrastructureTimeouts</a>

---



