# `databaseCloudDatabaseManagement` Submodule <a name="`databaseCloudDatabaseManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseCloudDatabaseManagement <a name="DatabaseCloudDatabaseManagement" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management oci_database_cloud_database_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_database_management.DatabaseCloudDatabaseManagement;

DatabaseCloudDatabaseManagement.Builder.create(Construct scope, java.lang.String id)
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
    .credentialdetails(DatabaseCloudDatabaseManagementCredentialdetails)
    .databaseId(java.lang.String)
    .enableManagement(java.lang.Boolean)
    .enableManagement(IResolvable)
    .managementType(java.lang.String)
    .privateEndPointId(java.lang.String)
    .serviceName(java.lang.String)
//  .id(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .role(java.lang.String)
//  .sslSecretId(java.lang.String)
//  .timeouts(DatabaseCloudDatabaseManagementTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.credentialdetails">credentialdetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a></code> | credentialdetails block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#database_id DatabaseCloudDatabaseManagement#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.enableManagement">enableManagement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#enable_management DatabaseCloudDatabaseManagement#enable_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.managementType">managementType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#management_type DatabaseCloudDatabaseManagement#management_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.privateEndPointId">privateEndPointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#private_end_point_id DatabaseCloudDatabaseManagement#private_end_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#service_name DatabaseCloudDatabaseManagement#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#id DatabaseCloudDatabaseManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#port DatabaseCloudDatabaseManagement#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#protocol DatabaseCloudDatabaseManagement#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#role DatabaseCloudDatabaseManagement#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.sslSecretId">sslSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#ssl_secret_id DatabaseCloudDatabaseManagement#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentialdetails`<sup>Required</sup> <a name="credentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.credentialdetails"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

credentialdetails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#credentialdetails DatabaseCloudDatabaseManagement#credentialdetails}

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.databaseId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#database_id DatabaseCloudDatabaseManagement#database_id}.

---

##### `enableManagement`<sup>Required</sup> <a name="enableManagement" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.enableManagement"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#enable_management DatabaseCloudDatabaseManagement#enable_management}.

---

##### `managementType`<sup>Required</sup> <a name="managementType" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.managementType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#management_type DatabaseCloudDatabaseManagement#management_type}.

---

##### `privateEndPointId`<sup>Required</sup> <a name="privateEndPointId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.privateEndPointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#private_end_point_id DatabaseCloudDatabaseManagement#private_end_point_id}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.serviceName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#service_name DatabaseCloudDatabaseManagement#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#id DatabaseCloudDatabaseManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.port"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#port DatabaseCloudDatabaseManagement#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.protocol"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#protocol DatabaseCloudDatabaseManagement#protocol}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#role DatabaseCloudDatabaseManagement#role}.

---

##### `sslSecretId`<sup>Optional</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.sslSecretId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#ssl_secret_id DatabaseCloudDatabaseManagement#ssl_secret_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#timeouts DatabaseCloudDatabaseManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putCredentialdetails">putCredentialdetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetSslSecretId">resetSslSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCredentialdetails` <a name="putCredentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putCredentialdetails"></a>

```java
public void putCredentialdetails(DatabaseCloudDatabaseManagementCredentialdetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putCredentialdetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putTimeouts"></a>

```java
public void putTimeouts(DatabaseCloudDatabaseManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>

---

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetId"></a>

```java
public void resetId()
```

##### `resetPort` <a name="resetPort" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetPort"></a>

```java
public void resetPort()
```

##### `resetProtocol` <a name="resetProtocol" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetProtocol"></a>

```java
public void resetProtocol()
```

##### `resetRole` <a name="resetRole" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetRole"></a>

```java
public void resetRole()
```

##### `resetSslSecretId` <a name="resetSslSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetSslSecretId"></a>

```java
public void resetSslSecretId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseCloudDatabaseManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_database_management.DatabaseCloudDatabaseManagement;

DatabaseCloudDatabaseManagement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_database_management.DatabaseCloudDatabaseManagement;

DatabaseCloudDatabaseManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_database_management.DatabaseCloudDatabaseManagement;

DatabaseCloudDatabaseManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_database_management.DatabaseCloudDatabaseManagement;

DatabaseCloudDatabaseManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseCloudDatabaseManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseCloudDatabaseManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseCloudDatabaseManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseCloudDatabaseManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseCloudDatabaseManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetails">credentialdetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference">DatabaseCloudDatabaseManagementCredentialdetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference">DatabaseCloudDatabaseManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetailsInput">credentialdetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseIdInput">databaseIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagementInput">enableManagementInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementTypeInput">managementTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointIdInput">privateEndPointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocolInput">protocolInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceNameInput">serviceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretIdInput">sslSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagement">enableManagement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementType">managementType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointId">privateEndPointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocol">protocol</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretId">sslSecretId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentialdetails`<sup>Required</sup> <a name="credentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetails"></a>

```java
public DatabaseCloudDatabaseManagementCredentialdetailsOutputReference getCredentialdetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference">DatabaseCloudDatabaseManagementCredentialdetailsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeouts"></a>

```java
public DatabaseCloudDatabaseManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference">DatabaseCloudDatabaseManagementTimeoutsOutputReference</a>

---

##### `credentialdetailsInput`<sup>Optional</sup> <a name="credentialdetailsInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.credentialdetailsInput"></a>

```java
public DatabaseCloudDatabaseManagementCredentialdetails getCredentialdetailsInput();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

---

##### `databaseIdInput`<sup>Optional</sup> <a name="databaseIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseIdInput"></a>

```java
public java.lang.String getDatabaseIdInput();
```

- *Type:* java.lang.String

---

##### `enableManagementInput`<sup>Optional</sup> <a name="enableManagementInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagementInput"></a>

```java
public java.lang.Object getEnableManagementInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `managementTypeInput`<sup>Optional</sup> <a name="managementTypeInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementTypeInput"></a>

```java
public java.lang.String getManagementTypeInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `privateEndPointIdInput`<sup>Optional</sup> <a name="privateEndPointIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointIdInput"></a>

```java
public java.lang.String getPrivateEndPointIdInput();
```

- *Type:* java.lang.String

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocolInput"></a>

```java
public java.lang.String getProtocolInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `serviceNameInput`<sup>Optional</sup> <a name="serviceNameInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceNameInput"></a>

```java
public java.lang.String getServiceNameInput();
```

- *Type:* java.lang.String

---

##### `sslSecretIdInput`<sup>Optional</sup> <a name="sslSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretIdInput"></a>

```java
public java.lang.String getSslSecretIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

---

##### `enableManagement`<sup>Required</sup> <a name="enableManagement" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.enableManagement"></a>

```java
public java.lang.Object getEnableManagement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `managementType`<sup>Required</sup> <a name="managementType" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.managementType"></a>

```java
public java.lang.String getManagementType();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `privateEndPointId`<sup>Required</sup> <a name="privateEndPointId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.privateEndPointId"></a>

```java
public java.lang.String getPrivateEndPointId();
```

- *Type:* java.lang.String

---

##### `protocol`<sup>Required</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

---

##### `sslSecretId`<sup>Required</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.sslSecretId"></a>

```java
public java.lang.String getSslSecretId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseCloudDatabaseManagementConfig <a name="DatabaseCloudDatabaseManagementConfig" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_database_management.DatabaseCloudDatabaseManagementConfig;

DatabaseCloudDatabaseManagementConfig.builder()
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
    .credentialdetails(DatabaseCloudDatabaseManagementCredentialdetails)
    .databaseId(java.lang.String)
    .enableManagement(java.lang.Boolean)
    .enableManagement(IResolvable)
    .managementType(java.lang.String)
    .privateEndPointId(java.lang.String)
    .serviceName(java.lang.String)
//  .id(java.lang.String)
//  .port(java.lang.Number)
//  .protocol(java.lang.String)
//  .role(java.lang.String)
//  .sslSecretId(java.lang.String)
//  .timeouts(DatabaseCloudDatabaseManagementTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.credentialdetails">credentialdetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a></code> | credentialdetails block. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.databaseId">databaseId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#database_id DatabaseCloudDatabaseManagement#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.enableManagement">enableManagement</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#enable_management DatabaseCloudDatabaseManagement#enable_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.managementType">managementType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#management_type DatabaseCloudDatabaseManagement#management_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.privateEndPointId">privateEndPointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#private_end_point_id DatabaseCloudDatabaseManagement#private_end_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.serviceName">serviceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#service_name DatabaseCloudDatabaseManagement#service_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#id DatabaseCloudDatabaseManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#port DatabaseCloudDatabaseManagement#port}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.protocol">protocol</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#protocol DatabaseCloudDatabaseManagement#protocol}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#role DatabaseCloudDatabaseManagement#role}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.sslSecretId">sslSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#ssl_secret_id DatabaseCloudDatabaseManagement#ssl_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `credentialdetails`<sup>Required</sup> <a name="credentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.credentialdetails"></a>

```java
public DatabaseCloudDatabaseManagementCredentialdetails getCredentialdetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

credentialdetails block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#credentialdetails DatabaseCloudDatabaseManagement#credentialdetails}

---

##### `databaseId`<sup>Required</sup> <a name="databaseId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.databaseId"></a>

```java
public java.lang.String getDatabaseId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#database_id DatabaseCloudDatabaseManagement#database_id}.

---

##### `enableManagement`<sup>Required</sup> <a name="enableManagement" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.enableManagement"></a>

```java
public java.lang.Object getEnableManagement();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#enable_management DatabaseCloudDatabaseManagement#enable_management}.

---

##### `managementType`<sup>Required</sup> <a name="managementType" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.managementType"></a>

```java
public java.lang.String getManagementType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#management_type DatabaseCloudDatabaseManagement#management_type}.

---

##### `privateEndPointId`<sup>Required</sup> <a name="privateEndPointId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.privateEndPointId"></a>

```java
public java.lang.String getPrivateEndPointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#private_end_point_id DatabaseCloudDatabaseManagement#private_end_point_id}.

---

##### `serviceName`<sup>Required</sup> <a name="serviceName" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.serviceName"></a>

```java
public java.lang.String getServiceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#service_name DatabaseCloudDatabaseManagement#service_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#id DatabaseCloudDatabaseManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `port`<sup>Optional</sup> <a name="port" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#port DatabaseCloudDatabaseManagement#port}.

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.protocol"></a>

```java
public java.lang.String getProtocol();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#protocol DatabaseCloudDatabaseManagement#protocol}.

---

##### `role`<sup>Optional</sup> <a name="role" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#role DatabaseCloudDatabaseManagement#role}.

---

##### `sslSecretId`<sup>Optional</sup> <a name="sslSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.sslSecretId"></a>

```java
public java.lang.String getSslSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#ssl_secret_id DatabaseCloudDatabaseManagement#ssl_secret_id}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementConfig.property.timeouts"></a>

```java
public DatabaseCloudDatabaseManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#timeouts DatabaseCloudDatabaseManagement#timeouts}

---

### DatabaseCloudDatabaseManagementCredentialdetails <a name="DatabaseCloudDatabaseManagementCredentialdetails" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_database_management.DatabaseCloudDatabaseManagementCredentialdetails;

DatabaseCloudDatabaseManagementCredentialdetails.builder()
    .passwordSecretId(java.lang.String)
    .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#password_secret_id DatabaseCloudDatabaseManagement#password_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#user_name DatabaseCloudDatabaseManagement#user_name}. |

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#password_secret_id DatabaseCloudDatabaseManagement#password_secret_id}.

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#user_name DatabaseCloudDatabaseManagement#user_name}.

---

### DatabaseCloudDatabaseManagementTimeouts <a name="DatabaseCloudDatabaseManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_database_management.DatabaseCloudDatabaseManagementTimeouts;

DatabaseCloudDatabaseManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#create DatabaseCloudDatabaseManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#delete DatabaseCloudDatabaseManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#update DatabaseCloudDatabaseManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#create DatabaseCloudDatabaseManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#delete DatabaseCloudDatabaseManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_cloud_database_management#update DatabaseCloudDatabaseManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseCloudDatabaseManagementCredentialdetailsOutputReference <a name="DatabaseCloudDatabaseManagementCredentialdetailsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_database_management.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference;

new DatabaseCloudDatabaseManagementCredentialdetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretIdInput">passwordSecretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretId">passwordSecretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordSecretIdInput`<sup>Optional</sup> <a name="passwordSecretIdInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretIdInput"></a>

```java
public java.lang.String getPasswordSecretIdInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `passwordSecretId`<sup>Required</sup> <a name="passwordSecretId" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.passwordSecretId"></a>

```java
public java.lang.String getPasswordSecretId();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetailsOutputReference.property.internalValue"></a>

```java
public DatabaseCloudDatabaseManagementCredentialdetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementCredentialdetails">DatabaseCloudDatabaseManagementCredentialdetails</a>

---


### DatabaseCloudDatabaseManagementTimeoutsOutputReference <a name="DatabaseCloudDatabaseManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_cloud_database_management.DatabaseCloudDatabaseManagementTimeoutsOutputReference;

new DatabaseCloudDatabaseManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseCloudDatabaseManagement.DatabaseCloudDatabaseManagementTimeouts">DatabaseCloudDatabaseManagementTimeouts</a>

---



