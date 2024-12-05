# `dataOciDatabaseCloudAutonomousVmClusters` Submodule <a name="`dataOciDatabaseCloudAutonomousVmClusters` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseCloudAutonomousVmClusters <a name="DataOciDatabaseCloudAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters oci_database_cloud_autonomous_vm_clusters}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClusters;

DataOciDatabaseCloudAutonomousVmClusters.Builder.create(Construct scope, java.lang.String id)
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
//  .availabilityDomain(java.lang.String)
//  .cloudExadataInfrastructureId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseCloudAutonomousVmClustersFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#compartment_id DataOciDatabaseCloudAutonomousVmClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#availability_domain DataOciDatabaseCloudAutonomousVmClusters#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#cloud_exadata_infrastructure_id DataOciDatabaseCloudAutonomousVmClusters#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#display_name DataOciDatabaseCloudAutonomousVmClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#id DataOciDatabaseCloudAutonomousVmClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#state DataOciDatabaseCloudAutonomousVmClusters#state}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#compartment_id DataOciDatabaseCloudAutonomousVmClusters#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#availability_domain DataOciDatabaseCloudAutonomousVmClusters#availability_domain}.

---

##### `cloudExadataInfrastructureId`<sup>Optional</sup> <a name="cloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.cloudExadataInfrastructureId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#cloud_exadata_infrastructure_id DataOciDatabaseCloudAutonomousVmClusters#cloud_exadata_infrastructure_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#display_name DataOciDatabaseCloudAutonomousVmClusters#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#filter DataOciDatabaseCloudAutonomousVmClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#id DataOciDatabaseCloudAutonomousVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#state DataOciDatabaseCloudAutonomousVmClusters#state}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetCloudExadataInfrastructureId">resetCloudExadataInfrastructureId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetState">resetState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciDatabaseCloudAutonomousVmClustersFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetCloudExadataInfrastructureId` <a name="resetCloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetCloudExadataInfrastructureId"></a>

```java
public void resetCloudExadataInfrastructureId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.resetState"></a>

```java
public void resetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusters resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClusters;

DataOciDatabaseCloudAutonomousVmClusters.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClusters;

DataOciDatabaseCloudAutonomousVmClusters.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClusters;

DataOciDatabaseCloudAutonomousVmClusters.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClusters;

DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciDatabaseCloudAutonomousVmClusters resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciDatabaseCloudAutonomousVmClusters to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciDatabaseCloudAutonomousVmClusters that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseCloudAutonomousVmClusters to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudAutonomousVmClusters">cloudAutonomousVmClusters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList">DataOciDatabaseCloudAutonomousVmClustersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudExadataInfrastructureIdInput">cloudExadataInfrastructureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `cloudAutonomousVmClusters`<sup>Required</sup> <a name="cloudAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudAutonomousVmClusters"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList getCloudAutonomousVmClusters();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.filter"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList">DataOciDatabaseCloudAutonomousVmClustersFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `cloudExadataInfrastructureIdInput`<sup>Optional</sup> <a name="cloudExadataInfrastructureIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudExadataInfrastructureIdInput"></a>

```java
public java.lang.String getCloudExadataInfrastructureIdInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.cloudExadataInfrastructureId"></a>

```java
public java.lang.String getCloudExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClusters.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters;

DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters.builder()
    .build();
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow;

DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow.builder()
    .build();
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek;

DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek.builder()
    .build();
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails;

DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails.builder()
    .build();
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek;

DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek.builder()
    .build();
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths;

DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths.builder()
    .build();
```


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths;

DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths.builder()
    .build();
```


### DataOciDatabaseCloudAutonomousVmClustersConfig <a name="DataOciDatabaseCloudAutonomousVmClustersConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersConfig;

DataOciDatabaseCloudAutonomousVmClustersConfig.builder()
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
//  .availabilityDomain(java.lang.String)
//  .cloudExadataInfrastructureId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciDatabaseCloudAutonomousVmClustersFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#compartment_id DataOciDatabaseCloudAutonomousVmClusters#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#availability_domain DataOciDatabaseCloudAutonomousVmClusters#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#cloud_exadata_infrastructure_id DataOciDatabaseCloudAutonomousVmClusters#cloud_exadata_infrastructure_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#display_name DataOciDatabaseCloudAutonomousVmClusters#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#id DataOciDatabaseCloudAutonomousVmClusters#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#state DataOciDatabaseCloudAutonomousVmClusters#state}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#compartment_id DataOciDatabaseCloudAutonomousVmClusters#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#availability_domain DataOciDatabaseCloudAutonomousVmClusters#availability_domain}.

---

##### `cloudExadataInfrastructureId`<sup>Optional</sup> <a name="cloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.cloudExadataInfrastructureId"></a>

```java
public java.lang.String getCloudExadataInfrastructureId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#cloud_exadata_infrastructure_id DataOciDatabaseCloudAutonomousVmClusters#cloud_exadata_infrastructure_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#display_name DataOciDatabaseCloudAutonomousVmClusters#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#filter DataOciDatabaseCloudAutonomousVmClusters#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#id DataOciDatabaseCloudAutonomousVmClusters#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#state DataOciDatabaseCloudAutonomousVmClusters#state}.

---

### DataOciDatabaseCloudAutonomousVmClustersFilter <a name="DataOciDatabaseCloudAutonomousVmClustersFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersFilter;

DataOciDatabaseCloudAutonomousVmClustersFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#name DataOciDatabaseCloudAutonomousVmClusters#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#values DataOciDatabaseCloudAutonomousVmClusters#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#regex DataOciDatabaseCloudAutonomousVmClusters#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#name DataOciDatabaseCloudAutonomousVmClusters#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#values DataOciDatabaseCloudAutonomousVmClusters#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_cloud_autonomous_vm_clusters#regex DataOciDatabaseCloudAutonomousVmClusters#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.get"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.get"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeek</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.get"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeek</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.get"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.get"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonths</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.skipRu">skipRu</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.daysOfWeek"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList getDaysOfWeek();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsDaysOfWeekList</a>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.isCustomActionTimeoutEnabled"></a>

```java
public IResolvable getIsCustomActionTimeoutEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.isMonthlyPatchingEnabled"></a>

```java
public IResolvable getIsMonthlyPatchingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.months"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList getMonths();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsMonthsList</a>

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.skipRu"></a>

```java
public BooleanList getSkipRu();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetails</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.get"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.get"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonths</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled">isMonthlyPatchingEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.months">months</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.skipRu">skipRu</a></code> | <code>com.hashicorp.cdktf.BooleanList</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList getDaysOfWeek();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDaysOfWeekList</a>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```java
public IResolvable getIsCustomActionTimeoutEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isMonthlyPatchingEnabled`<sup>Required</sup> <a name="isMonthlyPatchingEnabled" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.isMonthlyPatchingEnabled"></a>

```java
public IResolvable getIsMonthlyPatchingEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

---

##### `months`<sup>Required</sup> <a name="months" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.months"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList getMonths();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowMonthsList</a>

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

---

##### `preference`<sup>Required</sup> <a name="preference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `skipRu`<sup>Required</sup> <a name="skipRu" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.skipRu"></a>

```java
public BooleanList getSkipRu();
```

- *Type:* com.hashicorp.cdktf.BooleanList

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindow</a>

---


### DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference;

new DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.autonomousDataStoragePercentage">autonomousDataStoragePercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.autonomousDataStorageSizeInTbs">autonomousDataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableAutonomousDataStorageSizeInTbs">availableAutonomousDataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableContainerDatabases">availableContainerDatabases</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableCpus">availableCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.clusterTimeZone">clusterTimeZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuCoreCount">cpuCoreCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuCoreCountPerNode">cpuCoreCountPerNode</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuPercentage">cpuPercentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dataStorageSizeInGb">dataStorageSizeInGb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dataStorageSizeInTbs">dataStorageSizeInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dbNodeStorageSizeInGbs">dbNodeStorageSizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dbServers">dbServers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.exadataStorageInTbsLowestScaledValue">exadataStorageInTbsLowestScaledValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.isMtlsEnabledVmCluster">isMtlsEnabledVmCluster</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lastMaintenanceRunId">lastMaintenanceRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lastUpdateHistoryEntryId">lastUpdateHistoryEntryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.licenseModel">licenseModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lifecycleDetails">lifecycleDetails</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maintenanceWindowDetails">maintenanceWindowDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maxAcdsLowestScaledValue">maxAcdsLowestScaledValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.memoryPerOracleComputeUnitInGbs">memoryPerOracleComputeUnitInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.memorySizeInGbs">memorySizeInGbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nextMaintenanceRunId">nextMaintenanceRunId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nodeCount">nodeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nonProvisionableAutonomousContainerDatabases">nonProvisionableAutonomousContainerDatabases</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nsgIds">nsgIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ocpuCount">ocpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ocpusLowestScaledValue">ocpusLowestScaledValue</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionableAutonomousContainerDatabases">provisionableAutonomousContainerDatabases</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionedAutonomousContainerDatabases">provisionedAutonomousContainerDatabases</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionedCpus">provisionedCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.reclaimableCpus">reclaimableCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.reservedCpus">reservedCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.scanListenerPortNonTls">scanListenerPortNonTls</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.scanListenerPortTls">scanListenerPortTls</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.securityAttributes">securityAttributes</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeDatabaseSslCertificateExpires">timeDatabaseSslCertificateExpires</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeOrdsCertificateExpires">timeOrdsCertificateExpires</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeUpdated">timeUpdated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalAutonomousDataStorageInTbs">totalAutonomousDataStorageInTbs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalContainerDatabases">totalContainerDatabases</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalCpus">totalCpus</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autonomousDataStoragePercentage`<sup>Required</sup> <a name="autonomousDataStoragePercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.autonomousDataStoragePercentage"></a>

```java
public java.lang.Number getAutonomousDataStoragePercentage();
```

- *Type:* java.lang.Number

---

##### `autonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="autonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.autonomousDataStorageSizeInTbs"></a>

```java
public java.lang.Number getAutonomousDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `availableAutonomousDataStorageSizeInTbs`<sup>Required</sup> <a name="availableAutonomousDataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableAutonomousDataStorageSizeInTbs"></a>

```java
public java.lang.Number getAvailableAutonomousDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `availableContainerDatabases`<sup>Required</sup> <a name="availableContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableContainerDatabases"></a>

```java
public java.lang.Number getAvailableContainerDatabases();
```

- *Type:* java.lang.Number

---

##### `availableCpus`<sup>Required</sup> <a name="availableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.availableCpus"></a>

```java
public java.lang.Number getAvailableCpus();
```

- *Type:* java.lang.Number

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cloudExadataInfrastructureId"></a>

```java
public java.lang.String getCloudExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `clusterTimeZone`<sup>Required</sup> <a name="clusterTimeZone" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.clusterTimeZone"></a>

```java
public java.lang.String getClusterTimeZone();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

---

##### `cpuCoreCount`<sup>Required</sup> <a name="cpuCoreCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuCoreCount"></a>

```java
public java.lang.Number getCpuCoreCount();
```

- *Type:* java.lang.Number

---

##### `cpuCoreCountPerNode`<sup>Required</sup> <a name="cpuCoreCountPerNode" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuCoreCountPerNode"></a>

```java
public java.lang.Number getCpuCoreCountPerNode();
```

- *Type:* java.lang.Number

---

##### `cpuPercentage`<sup>Required</sup> <a name="cpuPercentage" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.cpuPercentage"></a>

```java
public java.lang.Number getCpuPercentage();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInGb`<sup>Required</sup> <a name="dataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dataStorageSizeInGb"></a>

```java
public java.lang.Number getDataStorageSizeInGb();
```

- *Type:* java.lang.Number

---

##### `dataStorageSizeInTbs`<sup>Required</sup> <a name="dataStorageSizeInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dataStorageSizeInTbs"></a>

```java
public java.lang.Number getDataStorageSizeInTbs();
```

- *Type:* java.lang.Number

---

##### `dbNodeStorageSizeInGbs`<sup>Required</sup> <a name="dbNodeStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dbNodeStorageSizeInGbs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGbs();
```

- *Type:* java.lang.Number

---

##### `dbServers`<sup>Required</sup> <a name="dbServers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.dbServers"></a>

```java
public java.util.List<java.lang.String> getDbServers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `exadataStorageInTbsLowestScaledValue`<sup>Required</sup> <a name="exadataStorageInTbsLowestScaledValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.exadataStorageInTbsLowestScaledValue"></a>

```java
public java.lang.Number getExadataStorageInTbsLowestScaledValue();
```

- *Type:* java.lang.Number

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isMtlsEnabledVmCluster`<sup>Required</sup> <a name="isMtlsEnabledVmCluster" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.isMtlsEnabledVmCluster"></a>

```java
public IResolvable getIsMtlsEnabledVmCluster();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `lastMaintenanceRunId`<sup>Required</sup> <a name="lastMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lastMaintenanceRunId"></a>

```java
public java.lang.String getLastMaintenanceRunId();
```

- *Type:* java.lang.String

---

##### `lastUpdateHistoryEntryId`<sup>Required</sup> <a name="lastUpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lastUpdateHistoryEntryId"></a>

```java
public java.lang.String getLastUpdateHistoryEntryId();
```

- *Type:* java.lang.String

---

##### `licenseModel`<sup>Required</sup> <a name="licenseModel" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.licenseModel"></a>

```java
public java.lang.String getLicenseModel();
```

- *Type:* java.lang.String

---

##### `lifecycleDetails`<sup>Required</sup> <a name="lifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.lifecycleDetails"></a>

```java
public java.lang.String getLifecycleDetails();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maintenanceWindow"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList getMaintenanceWindow();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowList</a>

---

##### `maintenanceWindowDetails`<sup>Required</sup> <a name="maintenanceWindowDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maintenanceWindowDetails"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList getMaintenanceWindowDetails();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersMaintenanceWindowDetailsList</a>

---

##### `maxAcdsLowestScaledValue`<sup>Required</sup> <a name="maxAcdsLowestScaledValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.maxAcdsLowestScaledValue"></a>

```java
public java.lang.Number getMaxAcdsLowestScaledValue();
```

- *Type:* java.lang.Number

---

##### `memoryPerOracleComputeUnitInGbs`<sup>Required</sup> <a name="memoryPerOracleComputeUnitInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.memoryPerOracleComputeUnitInGbs"></a>

```java
public java.lang.Number getMemoryPerOracleComputeUnitInGbs();
```

- *Type:* java.lang.Number

---

##### `memorySizeInGbs`<sup>Required</sup> <a name="memorySizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.memorySizeInGbs"></a>

```java
public java.lang.Number getMemorySizeInGbs();
```

- *Type:* java.lang.Number

---

##### `nextMaintenanceRunId`<sup>Required</sup> <a name="nextMaintenanceRunId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nextMaintenanceRunId"></a>

```java
public java.lang.String getNextMaintenanceRunId();
```

- *Type:* java.lang.String

---

##### `nodeCount`<sup>Required</sup> <a name="nodeCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nodeCount"></a>

```java
public java.lang.Number getNodeCount();
```

- *Type:* java.lang.Number

---

##### `nonProvisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="nonProvisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nonProvisionableAutonomousContainerDatabases"></a>

```java
public java.lang.Number getNonProvisionableAutonomousContainerDatabases();
```

- *Type:* java.lang.Number

---

##### `nsgIds`<sup>Required</sup> <a name="nsgIds" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.nsgIds"></a>

```java
public java.util.List<java.lang.String> getNsgIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `ocpuCount`<sup>Required</sup> <a name="ocpuCount" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ocpuCount"></a>

```java
public java.lang.Number getOcpuCount();
```

- *Type:* java.lang.Number

---

##### `ocpusLowestScaledValue`<sup>Required</sup> <a name="ocpusLowestScaledValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.ocpusLowestScaledValue"></a>

```java
public java.lang.Number getOcpusLowestScaledValue();
```

- *Type:* java.lang.Number

---

##### `provisionableAutonomousContainerDatabases`<sup>Required</sup> <a name="provisionableAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionableAutonomousContainerDatabases"></a>

```java
public java.lang.Number getProvisionableAutonomousContainerDatabases();
```

- *Type:* java.lang.Number

---

##### `provisionedAutonomousContainerDatabases`<sup>Required</sup> <a name="provisionedAutonomousContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionedAutonomousContainerDatabases"></a>

```java
public java.lang.Number getProvisionedAutonomousContainerDatabases();
```

- *Type:* java.lang.Number

---

##### `provisionedCpus`<sup>Required</sup> <a name="provisionedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.provisionedCpus"></a>

```java
public java.lang.Number getProvisionedCpus();
```

- *Type:* java.lang.Number

---

##### `reclaimableCpus`<sup>Required</sup> <a name="reclaimableCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.reclaimableCpus"></a>

```java
public java.lang.Number getReclaimableCpus();
```

- *Type:* java.lang.Number

---

##### `reservedCpus`<sup>Required</sup> <a name="reservedCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.reservedCpus"></a>

```java
public java.lang.Number getReservedCpus();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortNonTls`<sup>Required</sup> <a name="scanListenerPortNonTls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.scanListenerPortNonTls"></a>

```java
public java.lang.Number getScanListenerPortNonTls();
```

- *Type:* java.lang.Number

---

##### `scanListenerPortTls`<sup>Required</sup> <a name="scanListenerPortTls" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.scanListenerPortTls"></a>

```java
public java.lang.Number getScanListenerPortTls();
```

- *Type:* java.lang.Number

---

##### `securityAttributes`<sup>Required</sup> <a name="securityAttributes" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.securityAttributes"></a>

```java
public StringMap getSecurityAttributes();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `shape`<sup>Required</sup> <a name="shape" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeDatabaseSslCertificateExpires`<sup>Required</sup> <a name="timeDatabaseSslCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeDatabaseSslCertificateExpires"></a>

```java
public java.lang.String getTimeDatabaseSslCertificateExpires();
```

- *Type:* java.lang.String

---

##### `timeOrdsCertificateExpires`<sup>Required</sup> <a name="timeOrdsCertificateExpires" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeOrdsCertificateExpires"></a>

```java
public java.lang.String getTimeOrdsCertificateExpires();
```

- *Type:* java.lang.String

---

##### `timeUpdated`<sup>Required</sup> <a name="timeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.timeUpdated"></a>

```java
public java.lang.String getTimeUpdated();
```

- *Type:* java.lang.String

---

##### `totalAutonomousDataStorageInTbs`<sup>Required</sup> <a name="totalAutonomousDataStorageInTbs" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalAutonomousDataStorageInTbs"></a>

```java
public java.lang.Number getTotalAutonomousDataStorageInTbs();
```

- *Type:* java.lang.Number

---

##### `totalContainerDatabases`<sup>Required</sup> <a name="totalContainerDatabases" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalContainerDatabases"></a>

```java
public java.lang.Number getTotalContainerDatabases();
```

- *Type:* java.lang.Number

---

##### `totalCpus`<sup>Required</sup> <a name="totalCpus" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.totalCpus"></a>

```java
public java.lang.Number getTotalCpus();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClustersOutputReference.property.internalValue"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters">DataOciDatabaseCloudAutonomousVmClustersCloudAutonomousVmClusters</a>

---


### DataOciDatabaseCloudAutonomousVmClustersFilterList <a name="DataOciDatabaseCloudAutonomousVmClustersFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersFilterList;

new DataOciDatabaseCloudAutonomousVmClustersFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.get"></a>

```java
public DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>>

---


### DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference <a name="DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_database_cloud_autonomous_vm_clusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference;

new DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseCloudAutonomousVmClusters.DataOciDatabaseCloudAutonomousVmClustersFilter">DataOciDatabaseCloudAutonomousVmClustersFilter</a>

---



