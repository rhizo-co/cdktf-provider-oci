# `databaseManagementExternalExadataInfrastructureExadataManagement` Submodule <a name="`databaseManagementExternalExadataInfrastructureExadataManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseManagementExternalExadataInfrastructureExadataManagement <a name="DatabaseManagementExternalExadataInfrastructureExadataManagement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management oci_database_management_external_exadata_infrastructure_exadata_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure_exadata_management.DatabaseManagementExternalExadataInfrastructureExadataManagement;

DatabaseManagementExternalExadataInfrastructureExadataManagement.Builder.create(Construct scope, java.lang.String id)
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
    .enableExadata(java.lang.Boolean)
    .enableExadata(IResolvable)
    .externalExadataInfrastructureId(java.lang.String)
//  .id(java.lang.String)
//  .licenseModel(java.lang.String)
//  .timeouts(DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.enableExadata">enableExadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#enable_exadata DatabaseManagementExternalExadataInfrastructureExadataManagement#enable_exadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.externalExadataInfrastructureId">externalExadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#external_exadata_infrastructure_id DatabaseManagementExternalExadataInfrastructureExadataManagement#external_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#id DatabaseManagementExternalExadataInfrastructureExadataManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#license_model DatabaseManagementExternalExadataInfrastructureExadataManagement#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enableExadata`<sup>Required</sup> <a name="enableExadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.enableExadata"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#enable_exadata DatabaseManagementExternalExadataInfrastructureExadataManagement#enable_exadata}.

---

##### `externalExadataInfrastructureId`<sup>Required</sup> <a name="externalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.externalExadataInfrastructureId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#external_exadata_infrastructure_id DatabaseManagementExternalExadataInfrastructureExadataManagement#external_exadata_infrastructure_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#id DatabaseManagementExternalExadataInfrastructureExadataManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.licenseModel"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#license_model DatabaseManagementExternalExadataInfrastructureExadataManagement#license_model}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#timeouts DatabaseManagementExternalExadataInfrastructureExadataManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetLicenseModel">resetLicenseModel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.putTimeouts"></a>

```java
public void putTimeouts(DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetId"></a>

```java
public void resetId()
```

##### `resetLicenseModel` <a name="resetLicenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetLicenseModel"></a>

```java
public void resetLicenseModel()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseManagementExternalExadataInfrastructureExadataManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure_exadata_management.DatabaseManagementExternalExadataInfrastructureExadataManagement;

DatabaseManagementExternalExadataInfrastructureExadataManagement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure_exadata_management.DatabaseManagementExternalExadataInfrastructureExadataManagement;

DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure_exadata_management.DatabaseManagementExternalExadataInfrastructureExadataManagement;

DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure_exadata_management.DatabaseManagementExternalExadataInfrastructureExadataManagement;

DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseManagementExternalExadataInfrastructureExadataManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseManagementExternalExadataInfrastructureExadataManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseManagementExternalExadataInfrastructureExadataManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseManagementExternalExadataInfrastructureExadataManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.enableExadataInput">enableExadataInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.externalExadataInfrastructureIdInput">externalExadataInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.licenseModelInput">licenseModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.enableExadata">enableExadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.externalExadataInfrastructureId">externalExadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.timeouts"></a>

```java
public DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference</a>

---

##### `enableExadataInput`<sup>Optional</sup> <a name="enableExadataInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.enableExadataInput"></a>

```java
public java.lang.Object getEnableExadataInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalExadataInfrastructureIdInput`<sup>Optional</sup> <a name="externalExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.externalExadataInfrastructureIdInput"></a>

```java
public java.lang.String getExternalExadataInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `licenseModelInput`<sup>Optional</sup> <a name="licenseModelInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.licenseModelInput"></a>

```java
public java.lang.String getLicenseModelInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a>

---

##### `enableExadata`<sup>Required</sup> <a name="enableExadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.enableExadata"></a>

```java
public java.lang.Object getEnableExadata();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalExadataInfrastructureId`<sup>Required</sup> <a name="externalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.externalExadataInfrastructureId"></a>

```java
public java.lang.String getExternalExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseManagementExternalExadataInfrastructureExadataManagementConfig <a name="DatabaseManagementExternalExadataInfrastructureExadataManagementConfig" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure_exadata_management.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig;

DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.builder()
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
    .enableExadata(java.lang.Boolean)
    .enableExadata(IResolvable)
    .externalExadataInfrastructureId(java.lang.String)
//  .id(java.lang.String)
//  .licenseModel(java.lang.String)
//  .timeouts(DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.enableExadata">enableExadata</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#enable_exadata DatabaseManagementExternalExadataInfrastructureExadataManagement#enable_exadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.externalExadataInfrastructureId">externalExadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#external_exadata_infrastructure_id DatabaseManagementExternalExadataInfrastructureExadataManagement#external_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#id DatabaseManagementExternalExadataInfrastructureExadataManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#license_model DatabaseManagementExternalExadataInfrastructureExadataManagement#license_model}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `enableExadata`<sup>Required</sup> <a name="enableExadata" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.enableExadata"></a>

```java
public java.lang.Object getEnableExadata();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#enable_exadata DatabaseManagementExternalExadataInfrastructureExadataManagement#enable_exadata}.

---

##### `externalExadataInfrastructureId`<sup>Required</sup> <a name="externalExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.externalExadataInfrastructureId"></a>

```java
public java.lang.String getExternalExadataInfrastructureId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#external_exadata_infrastructure_id DatabaseManagementExternalExadataInfrastructureExadataManagement#external_exadata_infrastructure_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#id DatabaseManagementExternalExadataInfrastructureExadataManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `licenseModel`<sup>Optional</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#license_model DatabaseManagementExternalExadataInfrastructureExadataManagement#license_model}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementConfig.property.timeouts"></a>

```java
public DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#timeouts DatabaseManagementExternalExadataInfrastructureExadataManagement#timeouts}

---

### DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts <a name="DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure_exadata_management.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts;

DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#create DatabaseManagementExternalExadataInfrastructureExadataManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#delete DatabaseManagementExternalExadataInfrastructureExadataManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#update DatabaseManagementExternalExadataInfrastructureExadataManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#create DatabaseManagementExternalExadataInfrastructureExadataManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#delete DatabaseManagementExternalExadataInfrastructureExadataManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_management_external_exadata_infrastructure_exadata_management#update DatabaseManagementExternalExadataInfrastructureExadataManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference <a name="DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_management_external_exadata_infrastructure_exadata_management.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference;

new DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseManagementExternalExadataInfrastructureExadataManagement.DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts">DatabaseManagementExternalExadataInfrastructureExadataManagementTimeouts</a>

---



