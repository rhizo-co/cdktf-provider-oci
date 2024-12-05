# `databasePluggableDatabase` Submodule <a name="`databasePluggableDatabase` Submodule" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabasePluggableDatabase <a name="DatabasePluggableDatabase" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database oci_database_pluggable_database}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabase;

DatabasePluggableDatabase.Builder.create(Construct scope, java.lang.String id)
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
    .containerDatabaseId(java.lang.String)
    .pdbName(java.lang.String)
//  .containerDatabaseAdminPassword(java.lang.String)
//  .convertToRegularTrigger(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .kmsKeyVersionId(java.lang.String)
//  .pdbAdminPassword(java.lang.String)
//  .pdbCreationTypeDetails(DatabasePluggableDatabasePdbCreationTypeDetails)
//  .refreshTrigger(java.lang.Number)
//  .rotateKeyTrigger(java.lang.Number)
//  .shouldCreatePdbBackup(java.lang.Boolean)
//  .shouldCreatePdbBackup(IResolvable)
//  .shouldPdbAdminAccountBeLocked(java.lang.Boolean)
//  .shouldPdbAdminAccountBeLocked(IResolvable)
//  .tdeWalletPassword(java.lang.String)
//  .timeouts(DatabasePluggableDatabaseTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.containerDatabaseId">containerDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_id DatabasePluggableDatabase#container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.pdbName">pdbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_name DatabasePluggableDatabase#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.containerDatabaseAdminPassword">containerDatabaseAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_admin_password DatabasePluggableDatabase#container_database_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.convertToRegularTrigger">convertToRegularTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#convert_to_regular_trigger DatabasePluggableDatabase#convert_to_regular_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#defined_tags DatabasePluggableDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#freeform_tags DatabasePluggableDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#id DatabasePluggableDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#kms_key_version_id DatabasePluggableDatabase#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.pdbAdminPassword">pdbAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_admin_password DatabasePluggableDatabase#pdb_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.pdbCreationTypeDetails">pdbCreationTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a></code> | pdb_creation_type_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.refreshTrigger">refreshTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#refresh_trigger DatabasePluggableDatabase#refresh_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#rotate_key_trigger DatabasePluggableDatabase#rotate_key_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.shouldCreatePdbBackup">shouldCreatePdbBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_create_pdb_backup DatabasePluggableDatabase#should_create_pdb_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.shouldPdbAdminAccountBeLocked">shouldPdbAdminAccountBeLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_pdb_admin_account_be_locked DatabasePluggableDatabase#should_pdb_admin_account_be_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.tdeWalletPassword">tdeWalletPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#tde_wallet_password DatabasePluggableDatabase#tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerDatabaseId`<sup>Required</sup> <a name="containerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.containerDatabaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_id DatabasePluggableDatabase#container_database_id}.

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.pdbName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_name DatabasePluggableDatabase#pdb_name}.

---

##### `containerDatabaseAdminPassword`<sup>Optional</sup> <a name="containerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.containerDatabaseAdminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_admin_password DatabasePluggableDatabase#container_database_admin_password}.

---

##### `convertToRegularTrigger`<sup>Optional</sup> <a name="convertToRegularTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.convertToRegularTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#convert_to_regular_trigger DatabasePluggableDatabase#convert_to_regular_trigger}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.definedTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#defined_tags DatabasePluggableDatabase#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.freeformTags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#freeform_tags DatabasePluggableDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#id DatabasePluggableDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyVersionId`<sup>Optional</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.kmsKeyVersionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#kms_key_version_id DatabasePluggableDatabase#kms_key_version_id}.

---

##### `pdbAdminPassword`<sup>Optional</sup> <a name="pdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.pdbAdminPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_admin_password DatabasePluggableDatabase#pdb_admin_password}.

---

##### `pdbCreationTypeDetails`<sup>Optional</sup> <a name="pdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.pdbCreationTypeDetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a>

pdb_creation_type_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_creation_type_details DatabasePluggableDatabase#pdb_creation_type_details}

---

##### `refreshTrigger`<sup>Optional</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.refreshTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#refresh_trigger DatabasePluggableDatabase#refresh_trigger}.

---

##### `rotateKeyTrigger`<sup>Optional</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.rotateKeyTrigger"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#rotate_key_trigger DatabasePluggableDatabase#rotate_key_trigger}.

---

##### `shouldCreatePdbBackup`<sup>Optional</sup> <a name="shouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.shouldCreatePdbBackup"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_create_pdb_backup DatabasePluggableDatabase#should_create_pdb_backup}.

---

##### `shouldPdbAdminAccountBeLocked`<sup>Optional</sup> <a name="shouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.shouldPdbAdminAccountBeLocked"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_pdb_admin_account_be_locked DatabasePluggableDatabase#should_pdb_admin_account_be_locked}.

---

##### `tdeWalletPassword`<sup>Optional</sup> <a name="tdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.tdeWalletPassword"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#tde_wallet_password DatabasePluggableDatabase#tde_wallet_password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#timeouts DatabasePluggableDatabase#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putPdbCreationTypeDetails">putPdbCreationTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetContainerDatabaseAdminPassword">resetContainerDatabaseAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetConvertToRegularTrigger">resetConvertToRegularTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetDefinedTags">resetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetFreeformTags">resetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetKmsKeyVersionId">resetKmsKeyVersionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetPdbAdminPassword">resetPdbAdminPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetPdbCreationTypeDetails">resetPdbCreationTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetRefreshTrigger">resetRefreshTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetRotateKeyTrigger">resetRotateKeyTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetShouldCreatePdbBackup">resetShouldCreatePdbBackup</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetShouldPdbAdminAccountBeLocked">resetShouldPdbAdminAccountBeLocked</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetTdeWalletPassword">resetTdeWalletPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPdbCreationTypeDetails` <a name="putPdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putPdbCreationTypeDetails"></a>

```java
public void putPdbCreationTypeDetails(DatabasePluggableDatabasePdbCreationTypeDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putPdbCreationTypeDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putTimeouts"></a>

```java
public void putTimeouts(DatabasePluggableDatabaseTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a>

---

##### `resetContainerDatabaseAdminPassword` <a name="resetContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetContainerDatabaseAdminPassword"></a>

```java
public void resetContainerDatabaseAdminPassword()
```

##### `resetConvertToRegularTrigger` <a name="resetConvertToRegularTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetConvertToRegularTrigger"></a>

```java
public void resetConvertToRegularTrigger()
```

##### `resetDefinedTags` <a name="resetDefinedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetDefinedTags"></a>

```java
public void resetDefinedTags()
```

##### `resetFreeformTags` <a name="resetFreeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetFreeformTags"></a>

```java
public void resetFreeformTags()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetId"></a>

```java
public void resetId()
```

##### `resetKmsKeyVersionId` <a name="resetKmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetKmsKeyVersionId"></a>

```java
public void resetKmsKeyVersionId()
```

##### `resetPdbAdminPassword` <a name="resetPdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetPdbAdminPassword"></a>

```java
public void resetPdbAdminPassword()
```

##### `resetPdbCreationTypeDetails` <a name="resetPdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetPdbCreationTypeDetails"></a>

```java
public void resetPdbCreationTypeDetails()
```

##### `resetRefreshTrigger` <a name="resetRefreshTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetRefreshTrigger"></a>

```java
public void resetRefreshTrigger()
```

##### `resetRotateKeyTrigger` <a name="resetRotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetRotateKeyTrigger"></a>

```java
public void resetRotateKeyTrigger()
```

##### `resetShouldCreatePdbBackup` <a name="resetShouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetShouldCreatePdbBackup"></a>

```java
public void resetShouldCreatePdbBackup()
```

##### `resetShouldPdbAdminAccountBeLocked` <a name="resetShouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetShouldPdbAdminAccountBeLocked"></a>

```java
public void resetShouldPdbAdminAccountBeLocked()
```

##### `resetTdeWalletPassword` <a name="resetTdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetTdeWalletPassword"></a>

```java
public void resetTdeWalletPassword()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabasePluggableDatabase resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabase;

DatabasePluggableDatabase.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabase;

DatabasePluggableDatabase.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabase;

DatabasePluggableDatabase.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabase;

DatabasePluggableDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabasePluggableDatabase.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabasePluggableDatabase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabasePluggableDatabase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabasePluggableDatabase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabasePluggableDatabase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.connectionStrings">connectionStrings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList">DatabasePluggableDatabaseConnectionStringsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.isRestricted">isRestricted</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.openMode">openMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbCreationTypeDetails">pdbCreationTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference">DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbNodeLevelDetails">pdbNodeLevelDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList">DatabasePluggableDatabasePdbNodeLevelDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pluggableDatabaseManagementConfig">pluggableDatabaseManagementConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList">DatabasePluggableDatabasePluggableDatabaseManagementConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshableCloneConfig">refreshableCloneConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList">DatabasePluggableDatabaseRefreshableCloneConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference">DatabasePluggableDatabaseTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseAdminPasswordInput">containerDatabaseAdminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseIdInput">containerDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.convertToRegularTriggerInput">convertToRegularTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.definedTagsInput">definedTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.freeformTagsInput">freeformTagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.kmsKeyVersionIdInput">kmsKeyVersionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbAdminPasswordInput">pdbAdminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbCreationTypeDetailsInput">pdbCreationTypeDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbNameInput">pdbNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshTriggerInput">refreshTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.rotateKeyTriggerInput">rotateKeyTriggerInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldCreatePdbBackupInput">shouldCreatePdbBackupInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldPdbAdminAccountBeLockedInput">shouldPdbAdminAccountBeLockedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tdeWalletPasswordInput">tdeWalletPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseAdminPassword">containerDatabaseAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseId">containerDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.convertToRegularTrigger">convertToRegularTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbAdminPassword">pdbAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshTrigger">refreshTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldCreatePdbBackup">shouldCreatePdbBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldPdbAdminAccountBeLocked">shouldPdbAdminAccountBeLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tdeWalletPassword">tdeWalletPassword</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `connectionStrings`<sup>Required</sup> <a name="connectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.connectionStrings"></a>

```java
public DatabasePluggableDatabaseConnectionStringsList getConnectionStrings();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList">DatabasePluggableDatabaseConnectionStringsList</a>

---

##### `isRestricted`<sup>Required</sup> <a name="isRestricted" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.isRestricted"></a>

```java
public IResolvable getIsRestricted();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.openMode"></a>

```java
public java.lang.String getOpenMode();
```

- *Type:* java.lang.String

---

##### `pdbCreationTypeDetails`<sup>Required</sup> <a name="pdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbCreationTypeDetails"></a>

```java
public DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference getPdbCreationTypeDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference">DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference</a>

---

##### `pdbNodeLevelDetails`<sup>Required</sup> <a name="pdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbNodeLevelDetails"></a>

```java
public DatabasePluggableDatabasePdbNodeLevelDetailsList getPdbNodeLevelDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList">DatabasePluggableDatabasePdbNodeLevelDetailsList</a>

---

##### `pluggableDatabaseManagementConfig`<sup>Required</sup> <a name="pluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pluggableDatabaseManagementConfig"></a>

```java
public DatabasePluggableDatabasePluggableDatabaseManagementConfigList getPluggableDatabaseManagementConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList">DatabasePluggableDatabasePluggableDatabaseManagementConfigList</a>

---

##### `refreshableCloneConfig`<sup>Required</sup> <a name="refreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshableCloneConfig"></a>

```java
public DatabasePluggableDatabaseRefreshableCloneConfigList getRefreshableCloneConfig();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList">DatabasePluggableDatabaseRefreshableCloneConfigList</a>

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeouts"></a>

```java
public DatabasePluggableDatabaseTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference">DatabasePluggableDatabaseTimeoutsOutputReference</a>

---

##### `containerDatabaseAdminPasswordInput`<sup>Optional</sup> <a name="containerDatabaseAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseAdminPasswordInput"></a>

```java
public java.lang.String getContainerDatabaseAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `containerDatabaseIdInput`<sup>Optional</sup> <a name="containerDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseIdInput"></a>

```java
public java.lang.String getContainerDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `convertToRegularTriggerInput`<sup>Optional</sup> <a name="convertToRegularTriggerInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.convertToRegularTriggerInput"></a>

```java
public java.lang.Number getConvertToRegularTriggerInput();
```

- *Type:* java.lang.Number

---

##### `definedTagsInput`<sup>Optional</sup> <a name="definedTagsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.definedTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTagsInput`<sup>Optional</sup> <a name="freeformTagsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.freeformTagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionIdInput`<sup>Optional</sup> <a name="kmsKeyVersionIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.kmsKeyVersionIdInput"></a>

```java
public java.lang.String getKmsKeyVersionIdInput();
```

- *Type:* java.lang.String

---

##### `pdbAdminPasswordInput`<sup>Optional</sup> <a name="pdbAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbAdminPasswordInput"></a>

```java
public java.lang.String getPdbAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `pdbCreationTypeDetailsInput`<sup>Optional</sup> <a name="pdbCreationTypeDetailsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbCreationTypeDetailsInput"></a>

```java
public DatabasePluggableDatabasePdbCreationTypeDetails getPdbCreationTypeDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a>

---

##### `pdbNameInput`<sup>Optional</sup> <a name="pdbNameInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbNameInput"></a>

```java
public java.lang.String getPdbNameInput();
```

- *Type:* java.lang.String

---

##### `refreshTriggerInput`<sup>Optional</sup> <a name="refreshTriggerInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshTriggerInput"></a>

```java
public java.lang.Number getRefreshTriggerInput();
```

- *Type:* java.lang.Number

---

##### `rotateKeyTriggerInput`<sup>Optional</sup> <a name="rotateKeyTriggerInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.rotateKeyTriggerInput"></a>

```java
public java.lang.Number getRotateKeyTriggerInput();
```

- *Type:* java.lang.Number

---

##### `shouldCreatePdbBackupInput`<sup>Optional</sup> <a name="shouldCreatePdbBackupInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldCreatePdbBackupInput"></a>

```java
public java.lang.Object getShouldCreatePdbBackupInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldPdbAdminAccountBeLockedInput`<sup>Optional</sup> <a name="shouldPdbAdminAccountBeLockedInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldPdbAdminAccountBeLockedInput"></a>

```java
public java.lang.Object getShouldPdbAdminAccountBeLockedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tdeWalletPasswordInput`<sup>Optional</sup> <a name="tdeWalletPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tdeWalletPasswordInput"></a>

```java
public java.lang.String getTdeWalletPasswordInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a>

---

##### `containerDatabaseAdminPassword`<sup>Required</sup> <a name="containerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseAdminPassword"></a>

```java
public java.lang.String getContainerDatabaseAdminPassword();
```

- *Type:* java.lang.String

---

##### `containerDatabaseId`<sup>Required</sup> <a name="containerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.containerDatabaseId"></a>

```java
public java.lang.String getContainerDatabaseId();
```

- *Type:* java.lang.String

---

##### `convertToRegularTrigger`<sup>Required</sup> <a name="convertToRegularTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.convertToRegularTrigger"></a>

```java
public java.lang.Number getConvertToRegularTrigger();
```

- *Type:* java.lang.Number

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `kmsKeyVersionId`<sup>Required</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

---

##### `pdbAdminPassword`<sup>Required</sup> <a name="pdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbAdminPassword"></a>

```java
public java.lang.String getPdbAdminPassword();
```

- *Type:* java.lang.String

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

---

##### `refreshTrigger`<sup>Required</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.refreshTrigger"></a>

```java
public java.lang.Number getRefreshTrigger();
```

- *Type:* java.lang.Number

---

##### `rotateKeyTrigger`<sup>Required</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.rotateKeyTrigger"></a>

```java
public java.lang.Number getRotateKeyTrigger();
```

- *Type:* java.lang.Number

---

##### `shouldCreatePdbBackup`<sup>Required</sup> <a name="shouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldCreatePdbBackup"></a>

```java
public java.lang.Object getShouldCreatePdbBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `shouldPdbAdminAccountBeLocked`<sup>Required</sup> <a name="shouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.shouldPdbAdminAccountBeLocked"></a>

```java
public java.lang.Object getShouldPdbAdminAccountBeLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `tdeWalletPassword`<sup>Required</sup> <a name="tdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tdeWalletPassword"></a>

```java
public java.lang.String getTdeWalletPassword();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabase.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabasePluggableDatabaseConfig <a name="DatabasePluggableDatabaseConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabaseConfig;

DatabasePluggableDatabaseConfig.builder()
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
    .containerDatabaseId(java.lang.String)
    .pdbName(java.lang.String)
//  .containerDatabaseAdminPassword(java.lang.String)
//  .convertToRegularTrigger(java.lang.Number)
//  .definedTags(java.util.Map<java.lang.String, java.lang.String>)
//  .freeformTags(java.util.Map<java.lang.String, java.lang.String>)
//  .id(java.lang.String)
//  .kmsKeyVersionId(java.lang.String)
//  .pdbAdminPassword(java.lang.String)
//  .pdbCreationTypeDetails(DatabasePluggableDatabasePdbCreationTypeDetails)
//  .refreshTrigger(java.lang.Number)
//  .rotateKeyTrigger(java.lang.Number)
//  .shouldCreatePdbBackup(java.lang.Boolean)
//  .shouldCreatePdbBackup(IResolvable)
//  .shouldPdbAdminAccountBeLocked(java.lang.Boolean)
//  .shouldPdbAdminAccountBeLocked(IResolvable)
//  .tdeWalletPassword(java.lang.String)
//  .timeouts(DatabasePluggableDatabaseTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.containerDatabaseId">containerDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_id DatabasePluggableDatabase#container_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbName">pdbName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_name DatabasePluggableDatabase#pdb_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.containerDatabaseAdminPassword">containerDatabaseAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_admin_password DatabasePluggableDatabase#container_database_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.convertToRegularTrigger">convertToRegularTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#convert_to_regular_trigger DatabasePluggableDatabase#convert_to_regular_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.definedTags">definedTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#defined_tags DatabasePluggableDatabase#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.freeformTags">freeformTags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#freeform_tags DatabasePluggableDatabase#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#id DatabasePluggableDatabase#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.kmsKeyVersionId">kmsKeyVersionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#kms_key_version_id DatabasePluggableDatabase#kms_key_version_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbAdminPassword">pdbAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_admin_password DatabasePluggableDatabase#pdb_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbCreationTypeDetails">pdbCreationTypeDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a></code> | pdb_creation_type_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.refreshTrigger">refreshTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#refresh_trigger DatabasePluggableDatabase#refresh_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.rotateKeyTrigger">rotateKeyTrigger</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#rotate_key_trigger DatabasePluggableDatabase#rotate_key_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.shouldCreatePdbBackup">shouldCreatePdbBackup</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_create_pdb_backup DatabasePluggableDatabase#should_create_pdb_backup}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.shouldPdbAdminAccountBeLocked">shouldPdbAdminAccountBeLocked</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_pdb_admin_account_be_locked DatabasePluggableDatabase#should_pdb_admin_account_be_locked}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.tdeWalletPassword">tdeWalletPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#tde_wallet_password DatabasePluggableDatabase#tde_wallet_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `containerDatabaseId`<sup>Required</sup> <a name="containerDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.containerDatabaseId"></a>

```java
public java.lang.String getContainerDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_id DatabasePluggableDatabase#container_database_id}.

---

##### `pdbName`<sup>Required</sup> <a name="pdbName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbName"></a>

```java
public java.lang.String getPdbName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_name DatabasePluggableDatabase#pdb_name}.

---

##### `containerDatabaseAdminPassword`<sup>Optional</sup> <a name="containerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.containerDatabaseAdminPassword"></a>

```java
public java.lang.String getContainerDatabaseAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#container_database_admin_password DatabasePluggableDatabase#container_database_admin_password}.

---

##### `convertToRegularTrigger`<sup>Optional</sup> <a name="convertToRegularTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.convertToRegularTrigger"></a>

```java
public java.lang.Number getConvertToRegularTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#convert_to_regular_trigger DatabasePluggableDatabase#convert_to_regular_trigger}.

---

##### `definedTags`<sup>Optional</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.definedTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getDefinedTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#defined_tags DatabasePluggableDatabase#defined_tags}.

---

##### `freeformTags`<sup>Optional</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.freeformTags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getFreeformTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#freeform_tags DatabasePluggableDatabase#freeform_tags}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#id DatabasePluggableDatabase#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `kmsKeyVersionId`<sup>Optional</sup> <a name="kmsKeyVersionId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.kmsKeyVersionId"></a>

```java
public java.lang.String getKmsKeyVersionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#kms_key_version_id DatabasePluggableDatabase#kms_key_version_id}.

---

##### `pdbAdminPassword`<sup>Optional</sup> <a name="pdbAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbAdminPassword"></a>

```java
public java.lang.String getPdbAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_admin_password DatabasePluggableDatabase#pdb_admin_password}.

---

##### `pdbCreationTypeDetails`<sup>Optional</sup> <a name="pdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.pdbCreationTypeDetails"></a>

```java
public DatabasePluggableDatabasePdbCreationTypeDetails getPdbCreationTypeDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a>

pdb_creation_type_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#pdb_creation_type_details DatabasePluggableDatabase#pdb_creation_type_details}

---

##### `refreshTrigger`<sup>Optional</sup> <a name="refreshTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.refreshTrigger"></a>

```java
public java.lang.Number getRefreshTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#refresh_trigger DatabasePluggableDatabase#refresh_trigger}.

---

##### `rotateKeyTrigger`<sup>Optional</sup> <a name="rotateKeyTrigger" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.rotateKeyTrigger"></a>

```java
public java.lang.Number getRotateKeyTrigger();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#rotate_key_trigger DatabasePluggableDatabase#rotate_key_trigger}.

---

##### `shouldCreatePdbBackup`<sup>Optional</sup> <a name="shouldCreatePdbBackup" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.shouldCreatePdbBackup"></a>

```java
public java.lang.Object getShouldCreatePdbBackup();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_create_pdb_backup DatabasePluggableDatabase#should_create_pdb_backup}.

---

##### `shouldPdbAdminAccountBeLocked`<sup>Optional</sup> <a name="shouldPdbAdminAccountBeLocked" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.shouldPdbAdminAccountBeLocked"></a>

```java
public java.lang.Object getShouldPdbAdminAccountBeLocked();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#should_pdb_admin_account_be_locked DatabasePluggableDatabase#should_pdb_admin_account_be_locked}.

---

##### `tdeWalletPassword`<sup>Optional</sup> <a name="tdeWalletPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.tdeWalletPassword"></a>

```java
public java.lang.String getTdeWalletPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#tde_wallet_password DatabasePluggableDatabase#tde_wallet_password}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConfig.property.timeouts"></a>

```java
public DatabasePluggableDatabaseTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#timeouts DatabasePluggableDatabase#timeouts}

---

### DatabasePluggableDatabaseConnectionStrings <a name="DatabasePluggableDatabaseConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStrings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStrings.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabaseConnectionStrings;

DatabasePluggableDatabaseConnectionStrings.builder()
    .build();
```


### DatabasePluggableDatabasePdbCreationTypeDetails <a name="DatabasePluggableDatabasePdbCreationTypeDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabasePdbCreationTypeDetails;

DatabasePluggableDatabasePdbCreationTypeDetails.builder()
    .creationType(java.lang.String)
    .sourcePluggableDatabaseId(java.lang.String)
//  .dblinkUsername(java.lang.String)
//  .dblinkUserPassword(java.lang.String)
//  .isThinClone(java.lang.Boolean)
//  .isThinClone(IResolvable)
//  .refreshableCloneDetails(DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails)
//  .sourceContainerDatabaseAdminPassword(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.creationType">creationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#creation_type DatabasePluggableDatabase#creation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.sourcePluggableDatabaseId">sourcePluggableDatabaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#source_pluggable_database_id DatabasePluggableDatabase#source_pluggable_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.dblinkUsername">dblinkUsername</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#dblink_username DatabasePluggableDatabase#dblink_username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.dblinkUserPassword">dblinkUserPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#dblink_user_password DatabasePluggableDatabase#dblink_user_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.isThinClone">isThinClone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#is_thin_clone DatabasePluggableDatabase#is_thin_clone}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.refreshableCloneDetails">refreshableCloneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a></code> | refreshable_clone_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.sourceContainerDatabaseAdminPassword">sourceContainerDatabaseAdminPassword</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#source_container_database_admin_password DatabasePluggableDatabase#source_container_database_admin_password}. |

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.creationType"></a>

```java
public java.lang.String getCreationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#creation_type DatabasePluggableDatabase#creation_type}.

---

##### `sourcePluggableDatabaseId`<sup>Required</sup> <a name="sourcePluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.sourcePluggableDatabaseId"></a>

```java
public java.lang.String getSourcePluggableDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#source_pluggable_database_id DatabasePluggableDatabase#source_pluggable_database_id}.

---

##### `dblinkUsername`<sup>Optional</sup> <a name="dblinkUsername" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.dblinkUsername"></a>

```java
public java.lang.String getDblinkUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#dblink_username DatabasePluggableDatabase#dblink_username}.

---

##### `dblinkUserPassword`<sup>Optional</sup> <a name="dblinkUserPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.dblinkUserPassword"></a>

```java
public java.lang.String getDblinkUserPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#dblink_user_password DatabasePluggableDatabase#dblink_user_password}.

---

##### `isThinClone`<sup>Optional</sup> <a name="isThinClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.isThinClone"></a>

```java
public java.lang.Object getIsThinClone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#is_thin_clone DatabasePluggableDatabase#is_thin_clone}.

---

##### `refreshableCloneDetails`<sup>Optional</sup> <a name="refreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.refreshableCloneDetails"></a>

```java
public DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails getRefreshableCloneDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

refreshable_clone_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#refreshable_clone_details DatabasePluggableDatabase#refreshable_clone_details}

---

##### `sourceContainerDatabaseAdminPassword`<sup>Optional</sup> <a name="sourceContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails.property.sourceContainerDatabaseAdminPassword"></a>

```java
public java.lang.String getSourceContainerDatabaseAdminPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#source_container_database_admin_password DatabasePluggableDatabase#source_container_database_admin_password}.

---

### DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails <a name="DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails;

DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails.builder()
//  .isRefreshableClone(java.lang.Boolean)
//  .isRefreshableClone(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails.property.isRefreshableClone">isRefreshableClone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#is_refreshable_clone DatabasePluggableDatabase#is_refreshable_clone}. |

---

##### `isRefreshableClone`<sup>Optional</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails.property.isRefreshableClone"></a>

```java
public java.lang.Object getIsRefreshableClone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#is_refreshable_clone DatabasePluggableDatabase#is_refreshable_clone}.

---

### DatabasePluggableDatabasePdbNodeLevelDetails <a name="DatabasePluggableDatabasePdbNodeLevelDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabasePdbNodeLevelDetails;

DatabasePluggableDatabasePdbNodeLevelDetails.builder()
    .build();
```


### DatabasePluggableDatabasePluggableDatabaseManagementConfig <a name="DatabasePluggableDatabasePluggableDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabasePluggableDatabaseManagementConfig;

DatabasePluggableDatabasePluggableDatabaseManagementConfig.builder()
    .build();
```


### DatabasePluggableDatabaseRefreshableCloneConfig <a name="DatabasePluggableDatabaseRefreshableCloneConfig" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabaseRefreshableCloneConfig;

DatabasePluggableDatabaseRefreshableCloneConfig.builder()
    .build();
```


### DatabasePluggableDatabaseTimeouts <a name="DatabasePluggableDatabaseTimeouts" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabaseTimeouts;

DatabasePluggableDatabaseTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#create DatabasePluggableDatabase#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#delete DatabasePluggableDatabase#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#update DatabasePluggableDatabase#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#create DatabasePluggableDatabase#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#delete DatabasePluggableDatabase#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_pluggable_database#update DatabasePluggableDatabase#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabasePluggableDatabaseConnectionStringsList <a name="DatabasePluggableDatabaseConnectionStringsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabaseConnectionStringsList;

new DatabasePluggableDatabaseConnectionStringsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.get"></a>

```java
public DatabasePluggableDatabaseConnectionStringsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabasePluggableDatabaseConnectionStringsOutputReference <a name="DatabasePluggableDatabaseConnectionStringsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabaseConnectionStringsOutputReference;

new DatabasePluggableDatabaseConnectionStringsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.allConnectionStrings">allConnectionStrings</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbDefault">pdbDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbIpDefault">pdbIpDefault</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStrings">DatabasePluggableDatabaseConnectionStrings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allConnectionStrings`<sup>Required</sup> <a name="allConnectionStrings" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.allConnectionStrings"></a>

```java
public StringMap getAllConnectionStrings();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `pdbDefault`<sup>Required</sup> <a name="pdbDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbDefault"></a>

```java
public java.lang.String getPdbDefault();
```

- *Type:* java.lang.String

---

##### `pdbIpDefault`<sup>Required</sup> <a name="pdbIpDefault" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.pdbIpDefault"></a>

```java
public java.lang.String getPdbIpDefault();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStringsOutputReference.property.internalValue"></a>

```java
public DatabasePluggableDatabaseConnectionStrings getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseConnectionStrings">DatabasePluggableDatabaseConnectionStrings</a>

---


### DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference <a name="DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference;

new DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.putRefreshableCloneDetails">putRefreshableCloneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetDblinkUsername">resetDblinkUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetDblinkUserPassword">resetDblinkUserPassword</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetIsThinClone">resetIsThinClone</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetRefreshableCloneDetails">resetRefreshableCloneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetSourceContainerDatabaseAdminPassword">resetSourceContainerDatabaseAdminPassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRefreshableCloneDetails` <a name="putRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.putRefreshableCloneDetails"></a>

```java
public void putRefreshableCloneDetails(DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.putRefreshableCloneDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

---

##### `resetDblinkUsername` <a name="resetDblinkUsername" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetDblinkUsername"></a>

```java
public void resetDblinkUsername()
```

##### `resetDblinkUserPassword` <a name="resetDblinkUserPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetDblinkUserPassword"></a>

```java
public void resetDblinkUserPassword()
```

##### `resetIsThinClone` <a name="resetIsThinClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetIsThinClone"></a>

```java
public void resetIsThinClone()
```

##### `resetRefreshableCloneDetails` <a name="resetRefreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetRefreshableCloneDetails"></a>

```java
public void resetRefreshableCloneDetails()
```

##### `resetSourceContainerDatabaseAdminPassword` <a name="resetSourceContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.resetSourceContainerDatabaseAdminPassword"></a>

```java
public void resetSourceContainerDatabaseAdminPassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails">refreshableCloneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationTypeInput">creationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsernameInput">dblinkUsernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPasswordInput">dblinkUserPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinCloneInput">isThinCloneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetailsInput">refreshableCloneDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPasswordInput">sourceContainerDatabaseAdminPasswordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseIdInput">sourcePluggableDatabaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationType">creationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsername">dblinkUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPassword">dblinkUserPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinClone">isThinClone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword">sourceContainerDatabaseAdminPassword</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId">sourcePluggableDatabaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `refreshableCloneDetails`<sup>Required</sup> <a name="refreshableCloneDetails" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetails"></a>

```java
public DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference getRefreshableCloneDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference</a>

---

##### `creationTypeInput`<sup>Optional</sup> <a name="creationTypeInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationTypeInput"></a>

```java
public java.lang.String getCreationTypeInput();
```

- *Type:* java.lang.String

---

##### `dblinkUsernameInput`<sup>Optional</sup> <a name="dblinkUsernameInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsernameInput"></a>

```java
public java.lang.String getDblinkUsernameInput();
```

- *Type:* java.lang.String

---

##### `dblinkUserPasswordInput`<sup>Optional</sup> <a name="dblinkUserPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPasswordInput"></a>

```java
public java.lang.String getDblinkUserPasswordInput();
```

- *Type:* java.lang.String

---

##### `isThinCloneInput`<sup>Optional</sup> <a name="isThinCloneInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinCloneInput"></a>

```java
public java.lang.Object getIsThinCloneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `refreshableCloneDetailsInput`<sup>Optional</sup> <a name="refreshableCloneDetailsInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.refreshableCloneDetailsInput"></a>

```java
public DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails getRefreshableCloneDetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

---

##### `sourceContainerDatabaseAdminPasswordInput`<sup>Optional</sup> <a name="sourceContainerDatabaseAdminPasswordInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPasswordInput"></a>

```java
public java.lang.String getSourceContainerDatabaseAdminPasswordInput();
```

- *Type:* java.lang.String

---

##### `sourcePluggableDatabaseIdInput`<sup>Optional</sup> <a name="sourcePluggableDatabaseIdInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseIdInput"></a>

```java
public java.lang.String getSourcePluggableDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `creationType`<sup>Required</sup> <a name="creationType" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.creationType"></a>

```java
public java.lang.String getCreationType();
```

- *Type:* java.lang.String

---

##### `dblinkUsername`<sup>Required</sup> <a name="dblinkUsername" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUsername"></a>

```java
public java.lang.String getDblinkUsername();
```

- *Type:* java.lang.String

---

##### `dblinkUserPassword`<sup>Required</sup> <a name="dblinkUserPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.dblinkUserPassword"></a>

```java
public java.lang.String getDblinkUserPassword();
```

- *Type:* java.lang.String

---

##### `isThinClone`<sup>Required</sup> <a name="isThinClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.isThinClone"></a>

```java
public java.lang.Object getIsThinClone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `sourceContainerDatabaseAdminPassword`<sup>Required</sup> <a name="sourceContainerDatabaseAdminPassword" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourceContainerDatabaseAdminPassword"></a>

```java
public java.lang.String getSourceContainerDatabaseAdminPassword();
```

- *Type:* java.lang.String

---

##### `sourcePluggableDatabaseId`<sup>Required</sup> <a name="sourcePluggableDatabaseId" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.sourcePluggableDatabaseId"></a>

```java
public java.lang.String getSourcePluggableDatabaseId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsOutputReference.property.internalValue"></a>

```java
public DatabasePluggableDatabasePdbCreationTypeDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetails">DatabasePluggableDatabasePdbCreationTypeDetails</a>

---


### DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference <a name="DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference;

new DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resetIsRefreshableClone">resetIsRefreshableClone</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsRefreshableClone` <a name="resetIsRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.resetIsRefreshableClone"></a>

```java
public void resetIsRefreshableClone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableCloneInput">isRefreshableCloneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone">isRefreshableClone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isRefreshableCloneInput`<sup>Optional</sup> <a name="isRefreshableCloneInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableCloneInput"></a>

```java
public java.lang.Object getIsRefreshableCloneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.isRefreshableClone"></a>

```java
public java.lang.Object getIsRefreshableClone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetailsOutputReference.property.internalValue"></a>

```java
public DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails">DatabasePluggableDatabasePdbCreationTypeDetailsRefreshableCloneDetails</a>

---


### DatabasePluggableDatabasePdbNodeLevelDetailsList <a name="DatabasePluggableDatabasePdbNodeLevelDetailsList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabasePdbNodeLevelDetailsList;

new DatabasePluggableDatabasePdbNodeLevelDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.get"></a>

```java
public DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference <a name="DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference;

new DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.nodeName">nodeName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.openMode">openMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetails">DatabasePluggableDatabasePdbNodeLevelDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nodeName`<sup>Required</sup> <a name="nodeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.nodeName"></a>

```java
public java.lang.String getNodeName();
```

- *Type:* java.lang.String

---

##### `openMode`<sup>Required</sup> <a name="openMode" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.openMode"></a>

```java
public java.lang.String getOpenMode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetailsOutputReference.property.internalValue"></a>

```java
public DatabasePluggableDatabasePdbNodeLevelDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePdbNodeLevelDetails">DatabasePluggableDatabasePdbNodeLevelDetails</a>

---


### DatabasePluggableDatabasePluggableDatabaseManagementConfigList <a name="DatabasePluggableDatabasePluggableDatabaseManagementConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabasePluggableDatabaseManagementConfigList;

new DatabasePluggableDatabasePluggableDatabaseManagementConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.get"></a>

```java
public DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference <a name="DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference;

new DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.managementStatus">managementStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfig">DatabasePluggableDatabasePluggableDatabaseManagementConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `managementStatus`<sup>Required</sup> <a name="managementStatus" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.managementStatus"></a>

```java
public java.lang.String getManagementStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfigOutputReference.property.internalValue"></a>

```java
public DatabasePluggableDatabasePluggableDatabaseManagementConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabasePluggableDatabaseManagementConfig">DatabasePluggableDatabasePluggableDatabaseManagementConfig</a>

---


### DatabasePluggableDatabaseRefreshableCloneConfigList <a name="DatabasePluggableDatabaseRefreshableCloneConfigList" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabaseRefreshableCloneConfigList;

new DatabasePluggableDatabaseRefreshableCloneConfigList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.get"></a>

```java
public DatabasePluggableDatabaseRefreshableCloneConfigOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DatabasePluggableDatabaseRefreshableCloneConfigOutputReference <a name="DatabasePluggableDatabaseRefreshableCloneConfigOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference;

new DatabasePluggableDatabaseRefreshableCloneConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.isRefreshableClone">isRefreshableClone</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfig">DatabasePluggableDatabaseRefreshableCloneConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `isRefreshableClone`<sup>Required</sup> <a name="isRefreshableClone" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.isRefreshableClone"></a>

```java
public IResolvable getIsRefreshableClone();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfigOutputReference.property.internalValue"></a>

```java
public DatabasePluggableDatabaseRefreshableCloneConfig getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseRefreshableCloneConfig">DatabasePluggableDatabaseRefreshableCloneConfig</a>

---


### DatabasePluggableDatabaseTimeoutsOutputReference <a name="DatabasePluggableDatabaseTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_pluggable_database.DatabasePluggableDatabaseTimeoutsOutputReference;

new DatabasePluggableDatabaseTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databasePluggableDatabase.DatabasePluggableDatabaseTimeouts">DatabasePluggableDatabaseTimeouts</a>

---



