# `databaseAutonomousVmClusterSslCertificateManagement` Submodule <a name="`databaseAutonomousVmClusterSslCertificateManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousVmClusterSslCertificateManagement <a name="DatabaseAutonomousVmClusterSslCertificateManagement" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management oci_database_autonomous_vm_cluster_ssl_certificate_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ssl_certificate_management.DatabaseAutonomousVmClusterSslCertificateManagement;

DatabaseAutonomousVmClusterSslCertificateManagement.Builder.create(Construct scope, java.lang.String id)
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
    .autonomousVmClusterId(java.lang.String)
    .certificateGenerationType(java.lang.String)
//  .caBundleId(java.lang.String)
//  .certificateAuthorityId(java.lang.String)
//  .certificateId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatabaseAutonomousVmClusterSslCertificateManagementTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterSslCertificateManagement#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.certificateGenerationType">certificateGenerationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterSslCertificateManagement#certificate_generation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.caBundleId">caBundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterSslCertificateManagement#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.certificateAuthorityId">certificateAuthorityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterSslCertificateManagement#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_id DatabaseAutonomousVmClusterSslCertificateManagement#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#id DatabaseAutonomousVmClusterSslCertificateManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts">DatabaseAutonomousVmClusterSslCertificateManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.autonomousVmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterSslCertificateManagement#autonomous_vm_cluster_id}.

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.certificateGenerationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterSslCertificateManagement#certificate_generation_type}.

---

##### `caBundleId`<sup>Optional</sup> <a name="caBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.caBundleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterSslCertificateManagement#ca_bundle_id}.

---

##### `certificateAuthorityId`<sup>Optional</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.certificateAuthorityId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterSslCertificateManagement#certificate_authority_id}.

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.certificateId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_id DatabaseAutonomousVmClusterSslCertificateManagement#certificate_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#id DatabaseAutonomousVmClusterSslCertificateManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts">DatabaseAutonomousVmClusterSslCertificateManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#timeouts DatabaseAutonomousVmClusterSslCertificateManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.resetCaBundleId">resetCaBundleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.resetCertificateAuthorityId">resetCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.putTimeouts"></a>

```java
public void putTimeouts(DatabaseAutonomousVmClusterSslCertificateManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts">DatabaseAutonomousVmClusterSslCertificateManagementTimeouts</a>

---

##### `resetCaBundleId` <a name="resetCaBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.resetCaBundleId"></a>

```java
public void resetCaBundleId()
```

##### `resetCertificateAuthorityId` <a name="resetCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.resetCertificateAuthorityId"></a>

```java
public void resetCertificateAuthorityId()
```

##### `resetCertificateId` <a name="resetCertificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.resetCertificateId"></a>

```java
public void resetCertificateId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousVmClusterSslCertificateManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ssl_certificate_management.DatabaseAutonomousVmClusterSslCertificateManagement;

DatabaseAutonomousVmClusterSslCertificateManagement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ssl_certificate_management.DatabaseAutonomousVmClusterSslCertificateManagement;

DatabaseAutonomousVmClusterSslCertificateManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ssl_certificate_management.DatabaseAutonomousVmClusterSslCertificateManagement;

DatabaseAutonomousVmClusterSslCertificateManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ssl_certificate_management.DatabaseAutonomousVmClusterSslCertificateManagement;

DatabaseAutonomousVmClusterSslCertificateManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseAutonomousVmClusterSslCertificateManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseAutonomousVmClusterSslCertificateManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseAutonomousVmClusterSslCertificateManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseAutonomousVmClusterSslCertificateManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousVmClusterSslCertificateManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference">DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.autonomousVmClusterIdInput">autonomousVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.caBundleIdInput">caBundleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.certificateAuthorityIdInput">certificateAuthorityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.certificateGenerationTypeInput">certificateGenerationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts">DatabaseAutonomousVmClusterSslCertificateManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.caBundleId">caBundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.certificateGenerationType">certificateGenerationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.timeouts"></a>

```java
public DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference">DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference</a>

---

##### `autonomousVmClusterIdInput`<sup>Optional</sup> <a name="autonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.autonomousVmClusterIdInput"></a>

```java
public java.lang.String getAutonomousVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `caBundleIdInput`<sup>Optional</sup> <a name="caBundleIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.caBundleIdInput"></a>

```java
public java.lang.String getCaBundleIdInput();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityIdInput`<sup>Optional</sup> <a name="certificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.certificateAuthorityIdInput"></a>

```java
public java.lang.String getCertificateAuthorityIdInput();
```

- *Type:* java.lang.String

---

##### `certificateGenerationTypeInput`<sup>Optional</sup> <a name="certificateGenerationTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.certificateGenerationTypeInput"></a>

```java
public java.lang.String getCertificateGenerationTypeInput();
```

- *Type:* java.lang.String

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts">DatabaseAutonomousVmClusterSslCertificateManagementTimeouts</a>

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.autonomousVmClusterId"></a>

```java
public java.lang.String getAutonomousVmClusterId();
```

- *Type:* java.lang.String

---

##### `caBundleId`<sup>Required</sup> <a name="caBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.caBundleId"></a>

```java
public java.lang.String getCaBundleId();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.certificateAuthorityId"></a>

```java
public java.lang.String getCertificateAuthorityId();
```

- *Type:* java.lang.String

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.certificateGenerationType"></a>

```java
public java.lang.String getCertificateGenerationType();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousVmClusterSslCertificateManagementConfig <a name="DatabaseAutonomousVmClusterSslCertificateManagementConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ssl_certificate_management.DatabaseAutonomousVmClusterSslCertificateManagementConfig;

DatabaseAutonomousVmClusterSslCertificateManagementConfig.builder()
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
    .autonomousVmClusterId(java.lang.String)
    .certificateGenerationType(java.lang.String)
//  .caBundleId(java.lang.String)
//  .certificateAuthorityId(java.lang.String)
//  .certificateId(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(DatabaseAutonomousVmClusterSslCertificateManagementTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterSslCertificateManagement#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.certificateGenerationType">certificateGenerationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterSslCertificateManagement#certificate_generation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.caBundleId">caBundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterSslCertificateManagement#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterSslCertificateManagement#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_id DatabaseAutonomousVmClusterSslCertificateManagement#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#id DatabaseAutonomousVmClusterSslCertificateManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts">DatabaseAutonomousVmClusterSslCertificateManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.autonomousVmClusterId"></a>

```java
public java.lang.String getAutonomousVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterSslCertificateManagement#autonomous_vm_cluster_id}.

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.certificateGenerationType"></a>

```java
public java.lang.String getCertificateGenerationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterSslCertificateManagement#certificate_generation_type}.

---

##### `caBundleId`<sup>Optional</sup> <a name="caBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.caBundleId"></a>

```java
public java.lang.String getCaBundleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterSslCertificateManagement#ca_bundle_id}.

---

##### `certificateAuthorityId`<sup>Optional</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.certificateAuthorityId"></a>

```java
public java.lang.String getCertificateAuthorityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterSslCertificateManagement#certificate_authority_id}.

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#certificate_id DatabaseAutonomousVmClusterSslCertificateManagement#certificate_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#id DatabaseAutonomousVmClusterSslCertificateManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementConfig.property.timeouts"></a>

```java
public DatabaseAutonomousVmClusterSslCertificateManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts">DatabaseAutonomousVmClusterSslCertificateManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#timeouts DatabaseAutonomousVmClusterSslCertificateManagement#timeouts}

---

### DatabaseAutonomousVmClusterSslCertificateManagementTimeouts <a name="DatabaseAutonomousVmClusterSslCertificateManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ssl_certificate_management.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts;

DatabaseAutonomousVmClusterSslCertificateManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#create DatabaseAutonomousVmClusterSslCertificateManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#delete DatabaseAutonomousVmClusterSslCertificateManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#update DatabaseAutonomousVmClusterSslCertificateManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#create DatabaseAutonomousVmClusterSslCertificateManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#delete DatabaseAutonomousVmClusterSslCertificateManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ssl_certificate_management#update DatabaseAutonomousVmClusterSslCertificateManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference <a name="DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ssl_certificate_management.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference;

new DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts">DatabaseAutonomousVmClusterSslCertificateManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterSslCertificateManagement.DatabaseAutonomousVmClusterSslCertificateManagementTimeouts">DatabaseAutonomousVmClusterSslCertificateManagementTimeouts</a>

---



