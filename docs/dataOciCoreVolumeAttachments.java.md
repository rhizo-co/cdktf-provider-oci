# `dataOciCoreVolumeAttachments` Submodule <a name="`dataOciCoreVolumeAttachments` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreVolumeAttachments <a name="DataOciCoreVolumeAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments oci_core_volume_attachments}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachments;

DataOciCoreVolumeAttachments.Builder.create(Construct scope, java.lang.String id)
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreVolumeAttachmentsFilter>)
//  .id(java.lang.String)
//  .instanceId(java.lang.String)
//  .volumeId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#compartment_id DataOciCoreVolumeAttachments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#availability_domain DataOciCoreVolumeAttachments#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#id DataOciCoreVolumeAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#instance_id DataOciCoreVolumeAttachments#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.volumeId">volumeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#volume_id DataOciCoreVolumeAttachments#volume_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.compartmentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#compartment_id DataOciCoreVolumeAttachments#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.availabilityDomain"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#availability_domain DataOciCoreVolumeAttachments#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.filter"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#filter DataOciCoreVolumeAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#id DataOciCoreVolumeAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#instance_id DataOciCoreVolumeAttachments#instance_id}.

---

##### `volumeId`<sup>Optional</sup> <a name="volumeId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.Initializer.parameter.volumeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#volume_id DataOciCoreVolumeAttachments#volume_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetAvailabilityDomain">resetAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetInstanceId">resetInstanceId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetVolumeId">resetVolumeId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putFilter` <a name="putFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.putFilter"></a>

```java
public void putFilter(IResolvable OR java.util.List<DataOciCoreVolumeAttachmentsFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.putFilter.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>>

---

##### `resetAvailabilityDomain` <a name="resetAvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetAvailabilityDomain"></a>

```java
public void resetAvailabilityDomain()
```

##### `resetFilter` <a name="resetFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetId` <a name="resetId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetId"></a>

```java
public void resetId()
```

##### `resetInstanceId` <a name="resetInstanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetInstanceId"></a>

```java
public void resetInstanceId()
```

##### `resetVolumeId` <a name="resetVolumeId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.resetVolumeId"></a>

```java
public void resetVolumeId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreVolumeAttachments resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachments;

DataOciCoreVolumeAttachments.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachments;

DataOciCoreVolumeAttachments.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachments;

DataOciCoreVolumeAttachments.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachments;

DataOciCoreVolumeAttachments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataOciCoreVolumeAttachments.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a DataOciCoreVolumeAttachments resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataOciCoreVolumeAttachments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataOciCoreVolumeAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreVolumeAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList">DataOciCoreVolumeAttachmentsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.volumeAttachments">volumeAttachments</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList">DataOciCoreVolumeAttachmentsVolumeAttachmentsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.availabilityDomainInput">availabilityDomainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.compartmentIdInput">compartmentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.filterInput">filterInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.volumeIdInput">volumeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.filter"></a>

```java
public DataOciCoreVolumeAttachmentsFilterList getFilter();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList">DataOciCoreVolumeAttachmentsFilterList</a>

---

##### `volumeAttachments`<sup>Required</sup> <a name="volumeAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.volumeAttachments"></a>

```java
public DataOciCoreVolumeAttachmentsVolumeAttachmentsList getVolumeAttachments();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList">DataOciCoreVolumeAttachmentsVolumeAttachmentsList</a>

---

##### `availabilityDomainInput`<sup>Optional</sup> <a name="availabilityDomainInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.availabilityDomainInput"></a>

```java
public java.lang.String getAvailabilityDomainInput();
```

- *Type:* java.lang.String

---

##### `compartmentIdInput`<sup>Optional</sup> <a name="compartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.compartmentIdInput"></a>

```java
public java.lang.String getCompartmentIdInput();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.filterInput"></a>

```java
public java.lang.Object getFilterInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `volumeIdInput`<sup>Optional</sup> <a name="volumeIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.volumeIdInput"></a>

```java
public java.lang.String getVolumeIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachments.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreVolumeAttachmentsConfig <a name="DataOciCoreVolumeAttachmentsConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachmentsConfig;

DataOciCoreVolumeAttachmentsConfig.builder()
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
//  .filter(IResolvable)
//  .filter(java.util.List<DataOciCoreVolumeAttachmentsFilter>)
//  .id(java.lang.String)
//  .instanceId(java.lang.String)
//  .volumeId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#compartment_id DataOciCoreVolumeAttachments#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#availability_domain DataOciCoreVolumeAttachments#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.filter">filter</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>></code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#id DataOciCoreVolumeAttachments#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#instance_id DataOciCoreVolumeAttachments#instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#volume_id DataOciCoreVolumeAttachments#volume_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#compartment_id DataOciCoreVolumeAttachments#compartment_id}.

---

##### `availabilityDomain`<sup>Optional</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#availability_domain DataOciCoreVolumeAttachments#availability_domain}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.filter"></a>

```java
public java.lang.Object getFilter();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#filter DataOciCoreVolumeAttachments#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#id DataOciCoreVolumeAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instanceId`<sup>Optional</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#instance_id DataOciCoreVolumeAttachments#instance_id}.

---

##### `volumeId`<sup>Optional</sup> <a name="volumeId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsConfig.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#volume_id DataOciCoreVolumeAttachments#volume_id}.

---

### DataOciCoreVolumeAttachmentsFilter <a name="DataOciCoreVolumeAttachmentsFilter" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachmentsFilter;

DataOciCoreVolumeAttachmentsFilter.builder()
    .name(java.lang.String)
    .values(java.util.List<java.lang.String>)
//  .regex(java.lang.Boolean)
//  .regex(IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#name DataOciCoreVolumeAttachments#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#values DataOciCoreVolumeAttachments#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#regex DataOciCoreVolumeAttachments#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#name DataOciCoreVolumeAttachments#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#values DataOciCoreVolumeAttachments#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_volume_attachments#regex DataOciCoreVolumeAttachments#regex}.

---

### DataOciCoreVolumeAttachmentsVolumeAttachments <a name="DataOciCoreVolumeAttachmentsVolumeAttachments" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachments"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachments.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachmentsVolumeAttachments;

DataOciCoreVolumeAttachmentsVolumeAttachments.builder()
    .build();
```


### DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices <a name="DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices;

DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCoreVolumeAttachmentsFilterList <a name="DataOciCoreVolumeAttachmentsFilterList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachmentsFilterList;

new DataOciCoreVolumeAttachmentsFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.get"></a>

```java
public DataOciCoreVolumeAttachmentsFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>>

---


### DataOciCoreVolumeAttachmentsFilterOutputReference <a name="DataOciCoreVolumeAttachmentsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachmentsFilterOutputReference;

new DataOciCoreVolumeAttachmentsFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.resetRegex">resetRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegex` <a name="resetRegex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.resetRegex"></a>

```java
public void resetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.regexInput">regexInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.regex">regex</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `regexInput`<sup>Optional</sup> <a name="regexInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.regexInput"></a>

```java
public java.lang.Object getRegexInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.regex"></a>

```java
public java.lang.Object getRegex();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilterOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsFilter">DataOciCoreVolumeAttachmentsFilter</a>

---


### DataOciCoreVolumeAttachmentsVolumeAttachmentsList <a name="DataOciCoreVolumeAttachmentsVolumeAttachmentsList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList;

new DataOciCoreVolumeAttachmentsVolumeAttachmentsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.get"></a>

```java
public DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList <a name="DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList;

new DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.get"></a>

```java
public DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference <a name="DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference;

new DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.iqn">iqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices">DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.iqn"></a>

```java
public java.lang.String getIqn();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesOutputReference.property.internalValue"></a>

```java
public DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices">DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevices</a>

---


### DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference <a name="DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.oci.data_oci_core_volume_attachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference;

new DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.attachmentType">attachmentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.availabilityDomain">availabilityDomain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.chapSecret">chapSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.chapUsername">chapUsername</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.compartmentId">compartmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.device">device</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.encryptionInTransitType">encryptionInTransitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.ipv4">ipv4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.iqn">iqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled">isAgentAutoIscsiLoginEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.iscsiLoginState">iscsiLoginState</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isMultipath">isMultipath</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled">isPvEncryptionInTransitEnabled</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isReadOnly">isReadOnly</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isShareable">isShareable</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isVolumeCreatedDuringLaunch">isVolumeCreatedDuringLaunch</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.multipathDevices">multipathDevices</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList">DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.timeCreated">timeCreated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.useChap">useChap</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.volumeId">volumeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachments">DataOciCoreVolumeAttachmentsVolumeAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attachmentType`<sup>Required</sup> <a name="attachmentType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.attachmentType"></a>

```java
public java.lang.String getAttachmentType();
```

- *Type:* java.lang.String

---

##### `availabilityDomain`<sup>Required</sup> <a name="availabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.availabilityDomain"></a>

```java
public java.lang.String getAvailabilityDomain();
```

- *Type:* java.lang.String

---

##### `chapSecret`<sup>Required</sup> <a name="chapSecret" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.chapSecret"></a>

```java
public java.lang.String getChapSecret();
```

- *Type:* java.lang.String

---

##### `chapUsername`<sup>Required</sup> <a name="chapUsername" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.chapUsername"></a>

```java
public java.lang.String getChapUsername();
```

- *Type:* java.lang.String

---

##### `compartmentId`<sup>Required</sup> <a name="compartmentId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.compartmentId"></a>

```java
public java.lang.String getCompartmentId();
```

- *Type:* java.lang.String

---

##### `device`<sup>Required</sup> <a name="device" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.device"></a>

```java
public java.lang.String getDevice();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `encryptionInTransitType`<sup>Required</sup> <a name="encryptionInTransitType" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.encryptionInTransitType"></a>

```java
public java.lang.String getEncryptionInTransitType();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `ipv4`<sup>Required</sup> <a name="ipv4" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.ipv4"></a>

```java
public java.lang.String getIpv4();
```

- *Type:* java.lang.String

---

##### `iqn`<sup>Required</sup> <a name="iqn" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.iqn"></a>

```java
public java.lang.String getIqn();
```

- *Type:* java.lang.String

---

##### `isAgentAutoIscsiLoginEnabled`<sup>Required</sup> <a name="isAgentAutoIscsiLoginEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isAgentAutoIscsiLoginEnabled"></a>

```java
public IResolvable getIsAgentAutoIscsiLoginEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `iscsiLoginState`<sup>Required</sup> <a name="iscsiLoginState" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.iscsiLoginState"></a>

```java
public java.lang.String getIscsiLoginState();
```

- *Type:* java.lang.String

---

##### `isMultipath`<sup>Required</sup> <a name="isMultipath" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isMultipath"></a>

```java
public IResolvable getIsMultipath();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="isPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```java
public IResolvable getIsPvEncryptionInTransitEnabled();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isReadOnly`<sup>Required</sup> <a name="isReadOnly" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isReadOnly"></a>

```java
public IResolvable getIsReadOnly();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isShareable`<sup>Required</sup> <a name="isShareable" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isShareable"></a>

```java
public IResolvable getIsShareable();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isVolumeCreatedDuringLaunch`<sup>Required</sup> <a name="isVolumeCreatedDuringLaunch" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.isVolumeCreatedDuringLaunch"></a>

```java
public IResolvable getIsVolumeCreatedDuringLaunch();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `multipathDevices`<sup>Required</sup> <a name="multipathDevices" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.multipathDevices"></a>

```java
public DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList getMultipathDevices();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList">DataOciCoreVolumeAttachmentsVolumeAttachmentsMultipathDevicesList</a>

---

##### `port`<sup>Required</sup> <a name="port" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `timeCreated`<sup>Required</sup> <a name="timeCreated" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.timeCreated"></a>

```java
public java.lang.String getTimeCreated();
```

- *Type:* java.lang.String

---

##### `useChap`<sup>Required</sup> <a name="useChap" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.useChap"></a>

```java
public IResolvable getUseChap();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `volumeId`<sup>Required</sup> <a name="volumeId" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.volumeId"></a>

```java
public java.lang.String getVolumeId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachmentsOutputReference.property.internalValue"></a>

```java
public DataOciCoreVolumeAttachmentsVolumeAttachments getInternalValue();
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreVolumeAttachments.DataOciCoreVolumeAttachmentsVolumeAttachments">DataOciCoreVolumeAttachmentsVolumeAttachments</a>

---



