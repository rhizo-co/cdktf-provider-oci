# `databaseAutonomousVmClusterOrdsCertificateManagement` Submodule <a name="`databaseAutonomousVmClusterOrdsCertificateManagement` Submodule" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatabaseAutonomousVmClusterOrdsCertificateManagement <a name="DatabaseAutonomousVmClusterOrdsCertificateManagement" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management oci_database_autonomous_vm_cluster_ords_certificate_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ords_certificate_management.DatabaseAutonomousVmClusterOrdsCertificateManagement;

DatabaseAutonomousVmClusterOrdsCertificateManagement.Builder.create(Construct scope, java.lang.String id)
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
//  .timeouts(DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterOrdsCertificateManagement#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.certificateGenerationType">certificateGenerationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_generation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.caBundleId">caBundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterOrdsCertificateManagement#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.certificateAuthorityId">certificateAuthorityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#id DatabaseAutonomousVmClusterOrdsCertificateManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.autonomousVmClusterId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterOrdsCertificateManagement#autonomous_vm_cluster_id}.

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.certificateGenerationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_generation_type}.

---

##### `caBundleId`<sup>Optional</sup> <a name="caBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.caBundleId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterOrdsCertificateManagement#ca_bundle_id}.

---

##### `certificateAuthorityId`<sup>Optional</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.certificateAuthorityId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_authority_id}.

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.certificateId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#id DatabaseAutonomousVmClusterOrdsCertificateManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#timeouts DatabaseAutonomousVmClusterOrdsCertificateManagement#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCaBundleId">resetCaBundleId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateAuthorityId">resetCertificateAuthorityId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateId">resetCertificateId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.putTimeouts"></a>

```java
public void putTimeouts(DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a>

---

##### `resetCaBundleId` <a name="resetCaBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCaBundleId"></a>

```java
public void resetCaBundleId()
```

##### `resetCertificateAuthorityId` <a name="resetCertificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateAuthorityId"></a>

```java
public void resetCertificateAuthorityId()
```

##### `resetCertificateId` <a name="resetCertificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetCertificateId"></a>

```java
public void resetCertificateId()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DatabaseAutonomousVmClusterOrdsCertificateManagement resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ords_certificate_management.DatabaseAutonomousVmClusterOrdsCertificateManagement;

DatabaseAutonomousVmClusterOrdsCertificateManagement.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ords_certificate_management.DatabaseAutonomousVmClusterOrdsCertificateManagement;

DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ords_certificate_management.DatabaseAutonomousVmClusterOrdsCertificateManagement;

DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ords_certificate_management.DatabaseAutonomousVmClusterOrdsCertificateManagement;

DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DatabaseAutonomousVmClusterOrdsCertificateManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatabaseAutonomousVmClusterOrdsCertificateManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatabaseAutonomousVmClusterOrdsCertificateManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DatabaseAutonomousVmClusterOrdsCertificateManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterIdInput">autonomousVmClusterIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleIdInput">caBundleIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityIdInput">certificateAuthorityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationTypeInput">certificateGenerationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateIdInput">certificateIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleId">caBundleId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationType">certificateGenerationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeouts"></a>

```java
public DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference</a>

---

##### `autonomousVmClusterIdInput`<sup>Optional</sup> <a name="autonomousVmClusterIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterIdInput"></a>

```java
public java.lang.String getAutonomousVmClusterIdInput();
```

- *Type:* java.lang.String

---

##### `caBundleIdInput`<sup>Optional</sup> <a name="caBundleIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleIdInput"></a>

```java
public java.lang.String getCaBundleIdInput();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityIdInput`<sup>Optional</sup> <a name="certificateAuthorityIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityIdInput"></a>

```java
public java.lang.String getCertificateAuthorityIdInput();
```

- *Type:* java.lang.String

---

##### `certificateGenerationTypeInput`<sup>Optional</sup> <a name="certificateGenerationTypeInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationTypeInput"></a>

```java
public java.lang.String getCertificateGenerationTypeInput();
```

- *Type:* java.lang.String

---

##### `certificateIdInput`<sup>Optional</sup> <a name="certificateIdInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateIdInput"></a>

```java
public java.lang.String getCertificateIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a>

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.autonomousVmClusterId"></a>

```java
public java.lang.String getAutonomousVmClusterId();
```

- *Type:* java.lang.String

---

##### `caBundleId`<sup>Required</sup> <a name="caBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.caBundleId"></a>

```java
public java.lang.String getCaBundleId();
```

- *Type:* java.lang.String

---

##### `certificateAuthorityId`<sup>Required</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateAuthorityId"></a>

```java
public java.lang.String getCertificateAuthorityId();
```

- *Type:* java.lang.String

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateGenerationType"></a>

```java
public java.lang.String getCertificateGenerationType();
```

- *Type:* java.lang.String

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagement.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatabaseAutonomousVmClusterOrdsCertificateManagementConfig <a name="DatabaseAutonomousVmClusterOrdsCertificateManagementConfig" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ords_certificate_management.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig;

DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.builder()
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
//  .timeouts(DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.autonomousVmClusterId">autonomousVmClusterId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterOrdsCertificateManagement#autonomous_vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateGenerationType">certificateGenerationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_generation_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.caBundleId">caBundleId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterOrdsCertificateManagement#ca_bundle_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateAuthorityId">certificateAuthorityId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_authority_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateId">certificateId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#id DatabaseAutonomousVmClusterOrdsCertificateManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `autonomousVmClusterId`<sup>Required</sup> <a name="autonomousVmClusterId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.autonomousVmClusterId"></a>

```java
public java.lang.String getAutonomousVmClusterId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#autonomous_vm_cluster_id DatabaseAutonomousVmClusterOrdsCertificateManagement#autonomous_vm_cluster_id}.

---

##### `certificateGenerationType`<sup>Required</sup> <a name="certificateGenerationType" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateGenerationType"></a>

```java
public java.lang.String getCertificateGenerationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_generation_type DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_generation_type}.

---

##### `caBundleId`<sup>Optional</sup> <a name="caBundleId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.caBundleId"></a>

```java
public java.lang.String getCaBundleId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#ca_bundle_id DatabaseAutonomousVmClusterOrdsCertificateManagement#ca_bundle_id}.

---

##### `certificateAuthorityId`<sup>Optional</sup> <a name="certificateAuthorityId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateAuthorityId"></a>

```java
public java.lang.String getCertificateAuthorityId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_authority_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_authority_id}.

---

##### `certificateId`<sup>Optional</sup> <a name="certificateId" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.certificateId"></a>

```java
public java.lang.String getCertificateId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#certificate_id DatabaseAutonomousVmClusterOrdsCertificateManagement#certificate_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#id DatabaseAutonomousVmClusterOrdsCertificateManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementConfig.property.timeouts"></a>

```java
public DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts getTimeouts();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#timeouts DatabaseAutonomousVmClusterOrdsCertificateManagement#timeouts}

---

### DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts <a name="DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ords_certificate_management.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts;

DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#create DatabaseAutonomousVmClusterOrdsCertificateManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#delete DatabaseAutonomousVmClusterOrdsCertificateManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#update DatabaseAutonomousVmClusterOrdsCertificateManagement#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#create DatabaseAutonomousVmClusterOrdsCertificateManagement#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#delete DatabaseAutonomousVmClusterOrdsCertificateManagement#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/database_autonomous_vm_cluster_ords_certificate_management#update DatabaseAutonomousVmClusterOrdsCertificateManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference <a name="DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.database_autonomous_vm_cluster_ords_certificate_management.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference;

new DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.databaseAutonomousVmClusterOrdsCertificateManagement.DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts">DatabaseAutonomousVmClusterOrdsCertificateManagementTimeouts</a>

---



