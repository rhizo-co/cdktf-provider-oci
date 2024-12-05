# `dataOciCoreBootVolumeReplicas` Submodule <a name="`dataOciCoreBootVolumeReplicas` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreBootVolumeReplicas <a name="DataOciCoreBootVolumeReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas oci_core_boot_volume_replicas}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replicas.DataOciCoreBootVolumeReplicas;

DataOciCoreBootVolumeReplicas.Builder.create(Construct scope, java.lang.String id)
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
//  .availabilityDomain(java.lang.String)
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreBootVolumeReplicasFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .volumeGroupReplicaId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#availability_domain DataOciCoreBootVolumeReplicas#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#compartment_id DataOciCoreBootVolumeReplicas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#display_name DataOciCoreBootVolumeReplicas#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter">DataOciCoreBootVolumeReplicasFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#id DataOciCoreBootVolumeReplicas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#state DataOciCoreBootVolumeReplicas#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.volumeGroupReplicaId">volumeGroupReplicaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#volume_group_replica_id DataOciCoreBootVolumeReplicas#volume_group_replica_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#availability_domain DataOciCoreBootVolumeReplicas#availability_domain}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#compartment_id DataOciCoreBootVolumeReplicas#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#display_name DataOciCoreBootVolumeReplicas#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter">DataOciCoreBootVolumeReplicasFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#filter DataOciCoreBootVolumeReplicas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#id DataOciCoreBootVolumeReplicas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#state DataOciCoreBootVolumeReplicas#state}.

---

##### `volumeGroupReplicaId`<sup>Optional</sup> <a name="volumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.Initializer.parameter.volumeGroupReplicaId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#volume_group_replica_id DataOciCoreBootVolumeReplicas#volume_group_replica_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetCompartmentId">resetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetState">resetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetVolumeGroupReplicaId">resetVolumeGroupReplicaId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreBootVolumeReplicasFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter">DataOciCoreBootVolumeReplicasFilter</a>>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetCompartmentId` <a name="resetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetCompartmentId"></a>

```java
public void resetCompartmentId()
```

##### `resetDisplayName` <a name="resetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetId"></a>

```java
public void resetId()
```

##### `resetState` <a name="resetState" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetState"></a>

```java
public void resetState()
```

##### `resetVolumeGroupReplicaId` <a name="resetVolumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.resetVolumeGroupReplicaId"></a>

```java
public void resetVolumeGroupReplicaId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreBootVolumeReplicas resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replicas.DataOciCoreBootVolumeReplicas;

DataOciCoreBootVolumeReplicas.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replicas.DataOciCoreBootVolumeReplicas;

DataOciCoreBootVolumeReplicas.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replicas.DataOciCoreBootVolumeReplicas;

DataOciCoreBootVolumeReplicas.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replicas.DataOciCoreBootVolumeReplicas;

DataOciCoreBootVolumeReplicas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreBootVolumeReplicas.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreBootVolumeReplicas resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreBootVolumeReplicas to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreBootVolumeReplicas that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreBootVolumeReplicas to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.bootVolumeReplicas">bootVolumeReplicas</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList">DataOciCoreBootVolumeReplicasBootVolumeReplicasList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList">DataOciCoreBootVolumeReplicasFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter">DataOciCoreBootVolumeReplicasFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.volumeGroupReplicaIdInput">volumeGroupReplicaIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.volumeGroupReplicaId">volumeGroupReplicaId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `bootVolumeReplicas`<sup>Required</sup> <a name="bootVolumeReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.bootVolumeReplicas"></a>

```java
public DataOciCoreBootVolumeReplicasBootVolumeReplicasList getBootVolumeReplicas();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList">DataOciCoreBootVolumeReplicasBootVolumeReplicasList</a>

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.filter"></a>

```java
public DataOciCoreBootVolumeReplicasFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList">DataOciCoreBootVolumeReplicasFilterList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter">DataOciCoreBootVolumeReplicasFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `volumeGroupReplicaIdInput`<sup>Optional</sup> <a name="volumeGroupReplicaIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.volumeGroupReplicaIdInput"></a>

```java
public java.lang.String getVolumeGroupReplicaIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `volumeGroupReplicaId`<sup>Required</sup> <a name="volumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.volumeGroupReplicaId"></a>

```java
public java.lang.String getVolumeGroupReplicaId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicas.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreBootVolumeReplicasBootVolumeReplicas <a name="DataOciCoreBootVolumeReplicasBootVolumeReplicas" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicas"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicas.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replicas.DataOciCoreBootVolumeReplicasBootVolumeReplicas;

DataOciCoreBootVolumeReplicasBootVolumeReplicas.builder()
    .build();
```


### DataOciCoreBootVolumeReplicasConfig <a name="DataOciCoreBootVolumeReplicasConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replicas.DataOciCoreBootVolumeReplicasConfig;

DataOciCoreBootVolumeReplicasConfig.builder()
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
//  .availabilityDomain(java.lang.String)
//  .compartmentId(java.lang.String)
//  .displayName(java.lang.String)
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreBootVolumeReplicasFilter>)
//  .id(java.lang.String)
//  .state(java.lang.String)
//  .volumeGroupReplicaId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#availability_domain DataOciCoreBootVolumeReplicas#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#compartment_id DataOciCoreBootVolumeReplicas#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#display_name DataOciCoreBootVolumeReplicas#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter">DataOciCoreBootVolumeReplicasFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#id DataOciCoreBootVolumeReplicas#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.state">state</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#state DataOciCoreBootVolumeReplicas#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.volumeGroupReplicaId">volumeGroupReplicaId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#volume_group_replica_id DataOciCoreBootVolumeReplicas#volume_group_replica_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#availability_domain DataOciCoreBootVolumeReplicas#availability_domain}.

---

##### `compartmentId`<sup>Optional</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#compartment_id DataOciCoreBootVolumeReplicas#compartment_id}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#display_name DataOciCoreBootVolumeReplicas#display_name}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter">DataOciCoreBootVolumeReplicasFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#filter DataOciCoreBootVolumeReplicas#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#id DataOciCoreBootVolumeReplicas#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `state`<sup>Optional</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#state DataOciCoreBootVolumeReplicas#state}.

---

##### `volumeGroupReplicaId`<sup>Optional</sup> <a name="volumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasConfig.property.volumeGroupReplicaId"></a>

```java
public java.lang.String getVolumeGroupReplicaId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#volume_group_replica_id DataOciCoreBootVolumeReplicas#volume_group_replica_id}.

---

### DataOciCoreBootVolumeReplicasFilter <a name="DataOciCoreBootVolumeReplicasFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replicas.DataOciCoreBootVolumeReplicasFilter;

DataOciCoreBootVolumeReplicasFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#name DataOciCoreBootVolumeReplicas#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#values DataOciCoreBootVolumeReplicas#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#regex DataOciCoreBootVolumeReplicas#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#name DataOciCoreBootVolumeReplicas#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#values DataOciCoreBootVolumeReplicas#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_boot_volume_replicas#regex DataOciCoreBootVolumeReplicas#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreBootVolumeReplicasBootVolumeReplicasList <a name="DataOciCoreBootVolumeReplicasBootVolumeReplicasList" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList;

new DataOciCoreBootVolumeReplicasBootVolumeReplicasList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.get"></a>

```java
public DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference <a name="DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference;

new DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.bootVolumeId">bootVolumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.definedTags">definedTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.freeformTags">freeformTags</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.imageId">imageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.sizeInGbs">sizeInGbs</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.timeLastSynced">timeLastSynced</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.volumeGroupReplicaId">volumeGroupReplicaId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicas">DataOciCoreBootVolumeReplicasBootVolumeReplicas</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `bootVolumeId`<sup>Required</sup> <a name="bootVolumeId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.bootVolumeId"></a>

```java
public java.lang.String getBootVolumeId();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `definedTags`<sup>Required</sup> <a name="definedTags" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.definedTags"></a>

```java
public StringMap getDefinedTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `freeformTags`<sup>Required</sup> <a name="freeformTags" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.freeformTags"></a>

```java
public StringMap getFreeformTags();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `imageId`<sup>Required</sup> <a name="imageId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.imageId"></a>

```java
public java.lang.String getImageId();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `sizeInGbs`<sup>Required</sup> <a name="sizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.sizeInGbs"></a>

```java
public java.lang.String getSizeInGbs();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `timeLastSynced`<sup>Required</sup> <a name="timeLastSynced" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.timeLastSynced"></a>

```java
public java.lang.String getTimeLastSynced();
```

- *Type:* java.lang.String

---

##### `volumeGroupReplicaId`<sup>Required</sup> <a name="volumeGroupReplicaId" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.volumeGroupReplicaId"></a>

```java
public java.lang.String getVolumeGroupReplicaId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicasOutputReference.property.internalValue"></a>

```java
public DataOciCoreBootVolumeReplicasBootVolumeReplicas getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasBootVolumeReplicas">DataOciCoreBootVolumeReplicasBootVolumeReplicas</a>

---


### DataOciCoreBootVolumeReplicasFilterList <a name="DataOciCoreBootVolumeReplicasFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replicas.DataOciCoreBootVolumeReplicasFilterList;

new DataOciCoreBootVolumeReplicasFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.get"></a>

```java
public DataOciCoreBootVolumeReplicasFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter">DataOciCoreBootVolumeReplicasFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter">DataOciCoreBootVolumeReplicasFilter</a>>

---


### DataOciCoreBootVolumeReplicasFilterOutputReference <a name="DataOciCoreBootVolumeReplicasFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_boot_volume_replicas.DataOciCoreBootVolumeReplicasFilterOutputReference;

new DataOciCoreBootVolumeReplicasFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter">DataOciCoreBootVolumeReplicasFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreBootVolumeReplicas.DataOciCoreBootVolumeReplicasFilter">DataOciCoreBootVolumeReplicasFilter</a>

---


